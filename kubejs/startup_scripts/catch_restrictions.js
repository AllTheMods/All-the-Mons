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
    let allowedOutOfBattle = !(targetPokemon.hasLabels("mythical") || targetPokemon.hasLabels("ultra_beast") || targetPokemon.hasLabels("paradox") || targetPokemon.hasLabels("legendary"))
    //console.log("Allowed Out of battle? " + allowedOutOfBattle)
    if (!allowedOutOfBattle) {
      owner.setStatusMessage(Text.translate("kubejs.atm.catch_restrictions.special_pokemons").red())
      owner.playNotifySound(errorSound, "players", 1, 1)
      hitEvent.cancel()
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

global.battleStartedPre = (startedPreEvent) => {
  //console.log("Started Pre Event is:" + startedPreEvent)
  let battle = startedPreEvent.battle
  let isPvW = battle.isPvW()
  //console.log("IsPvW: " + isPvW)
  if (isPvW) {
    let wildSide = battle.side2
    //console.log("Wild Side is: " + wildSide)
    let actors = wildSide.actors
    //console.log("Actors is: " + actors)
    for (let actor of actors) {
      for (let pokemon of actor.pokemonList) {
        let originalPokemon = pokemon.originalPokemon
        //console.log("Pokemon is: " + originalPokemon)
        let isGen1or2 = originalPokemon.hasLabels("gen1") || originalPokemon.hasLabels("gen2")
        //console.log("IsGen1or2: " + isGen1or2)
        if (isGen1or2) continue
        let restrictedByPika = (originalPokemon.hasLabels("mythical") || originalPokemon.hasLabels("ultra_beast") || originalPokemon.hasLabels("paradox") || originalPokemon.hasLabels("legendary"))
        if (restrictedByPika) {
          if (!false) { // replace this `false` with a check if Pika Star was acquired
            startedPreEvent.reason = Text.translate("kubejs.atm.catch_restrictions.pika_knowledge")
            startedPreEvent.cancel()
          }
        }
      }
    }
  }
}