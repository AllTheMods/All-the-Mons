let $Cobblemon = Java.loadClass("com.cobblemon.mod.common.Cobblemon")
let $CobblemonEvents = Java.loadClass("com.cobblemon.mod.common.api.events.CobblemonEvents")

StartupEvents.postInit(allthemods => {
  $CobblemonEvents.THROWN_POKEBALL_HIT["subscribe(com.cobblemon.mod.common.api.Priority,java.util.function.Consumer)"]("LOWEST", (event) => global.thrownBallHit(event))
  $CobblemonEvents.BATTLE_STARTED_PRE["subscribe(com.cobblemon.mod.common.api.Priority,java.util.function.Consumer)"]("LOWEST", (event) => global.battleStartedPre(event))
})

global.thrownBallHit = (hitEvent) => {
  //console.log("Hit Event is: " + hitEvent)
  let targetPokemon = hitEvent.pokemon.pokemon
  //console.log("Target Pokemon is: " + targetPokemon)
  let targetLevel = targetPokemon.level
  //console.log("Target Level is: " + targetLevel)
  let battle = hitEvent.pokemon.delegate.battle
  //console.log("Battle is: " + battle)
  if (battle == null) {
    let owner = hitEvent.pokeBall.owner
    //console.log("Owner is: " + owner)
    let randomValue = Utils.random.nextFloat()
    //console.log("Random value is: " + randomValue)
    let errorSound
    if (randomValue > 0.9) {
      errorSound = "artifacts:item.whoopee_cushion.fart"
    } else {
      errorSound = "modularrouters:error"
    }
    let restrictedByPika = isRestrictedByPikaStar(targetPokemon)
    //console.log("Allowed Out of battle? " + allowedOutOfBattle)
    if (restrictedByPika) {
      owner.setStatusMessage(Text.translate("kubejs.atm.catch_restrictions.special_pokemons").red())
      owner.playNotifySound(errorSound, "players", 1, 1)
      hitEvent.cancel()
      return
    }
    let guaranteed = hitEvent.pokeBall.pokeBall.catchRateModifier.isGuaranteed()
    if (guaranteed) {
      return
    }
    let party = $Cobblemon.INSTANCE.storage.getParty(owner)
    //console.log("Party is: " + party)
    let leader
    for (let pokemon of party) {
      if (!pokemon.isFainted()) {
        leader = pokemon
        break
      }
    }
    //console.log("Leader is: " + leader)
    if (leader == null) {
      //console.log("Pokemon level: " + targetLevel)
      if (targetLevel > 15) {
        owner.setStatusMessage(Text.translate("kubejs.atm.catch_restrictions.catch_without_leader").red())
        owner.playNotifySound(errorSound, "players", 1, 1)
        hitEvent.cancel()
        return
      }
    } else {
      let leaderLevel = leader.level
      if (targetLevel > leaderLevel) {
        owner.setStatusMessage(Text.translate("kubejs.atm.catch_restrictions.leader_too_weak", leader.getDisplayName(false), leaderLevel).yellow())
        owner.playNotifySound(errorSound, "players", 1, 1)
        hitEvent.cancel()
        return
      }
    }
  }
}

global.battleStartedPre = (/** @type {import("com.cobblemon.mod.common.api.events.battles.BattleStartedEvent$Pre").$BattleStartedEvent$Pre} */ startedPreEvent) => {
  let battle = startedPreEvent.battle

  ;[battle.side1, battle.side2].forEach(side => {
    if (startedPreEvent.isCanceled()) return
    for (let actor of side.actors) {
      if (actor.type != "player") continue
      for (let pokemon of actor.pokemonList) {
        let owner = pokemon.originalPokemon.getOwnerPlayer()
        console.log("Owner is: " + owner)
        console.log("Original Pokemon is: " + pokemon.originalPokemon)
        if (owner != null) {
          let restrictedByPika = isRestrictedByPikaStar(pokemon.originalPokemon)
          console.log("Restricted is: " + restrictedByPika)
          if (restrictedByPika) {
            let region = getPokemonRegion(pokemon.originalPokemon)
            console.log("Region is: " + region)
            if (region == null) continue
            if (!owner.isAdvancementDone("allthemons:" + region.serializedName + "_pika_star")) {
              startedPreEvent.reason = Text.translate("kubejs.atm.catch_restrictions.own_pika_knowledge", region.name(), pokemon.originalPokemon.getDisplayName(false))
              startedPreEvent.cancel()
              return
            }
          }
        }
      }
    }
  })
  if (startedPreEvent.isCanceled()) return

  let isPvW = battle.isPvW()
  if (isPvW) {
    /** @type {import("net.minecraft.server.level.ServerPlayer").$ServerPlayer[]} */
    let players = []
    ;[battle.side1, battle.side2].forEach(side => {
      for (let actor of side.actors) {
        if (actor.type == "player") {
          players.push(actor.entity)
        }
      }
    })
    if (players.length == 0) {
      return
    }
    ;[battle.side1, battle.side2].forEach(side => {
      for (let actor of side.actors) {
        if (actor.type == "wild") {
          for (let pokemon of actor.pokemonList) {
            let originalPokemon = pokemon.originalPokemon
            let restrictedByPika = isRestrictedByPikaStar(originalPokemon)
            if (restrictedByPika) {
              let region = getPokemonRegion(originalPokemon)
              if (region == null) continue
              players.forEach(player => {
                if (!player.isAdvancementDone("allthemons:" + region.serializedName + "_pika_star")) {
                  if (originalPokemon.hasLabels("ultra_beast")) {
                    player.tell(Text.translate("kubejs.atm.catch_restrictions.pika_knowledge", region.name()))
                  } else {
                    startedPreEvent.reason = Text.translate("kubejs.atm.catch_restrictions.pika_knowledge", region.name())
                  }            
                  startedPreEvent.cancel()
                }
              })
            }
          }
        }
      }
    })
  }
}

function isRestrictedByPikaStar(pokemon){
  return (pokemon.hasLabels("mythical") || pokemon.hasLabels("ultra_beast") || pokemon.hasLabels("paradox") || pokemon.hasLabels("legendary"))
}

let $Dexes = Java.loadClass("com.cobblemon.mod.common.api.pokedex.Dexes")
/** @type {typeof import("net.allthemods.allthemons.util.Region").$Region} */
let $Region = Java.loadClass("net.allthemods.allthemons.util.Region")

function getPokemonRegion(pokemon, fromRegion) {
  fromRegion = fromRegion != null ? "cobblemon:" + fromRegion.name().toLowerCase() : null
  let id = pokemon.species.resourceIdentifier
  let map = Utils.newMap()
  $Dexes.INSTANCE.dexEntryMap.forEach((dexId, dexEntry) => {
    if (dexEntry.typeId == "cobblemon:simple_pokedex_def") {
      if (fromRegion != null && fromRegion != dexId) return
      let list = dexEntry.entries.stream().filter(entry => entry.speciesId == id).toList()
      if (!list.isEmpty()) {
        map.computeIfAbsent(dexId, (key) => Utils.newList()).addAll(list)
      }        
    }
  })
  let formName = pokemon.form.name
  let result = null
  map.forEach((key,value) => {
    value.forEach(entry => {
      entry.getForms().forEach(form => {
        if (form.displayForm.equalsIgnoreCase(formName)) {
          result = key
        }
      })
    })
  })
  if (result == null) {
    map.keySet().stream().findFirst().ifPresent(key => {
      result = key
    })
  }
  if (result != null) {
    for (let region of $Region.values()) {
      if (region.name().equalsIgnoreCase(result.getPath())){
        return region
      }
    }
  }
}