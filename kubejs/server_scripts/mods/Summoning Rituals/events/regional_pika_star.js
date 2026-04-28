let outputPerRecipe = Utils.newMap()
let $RCTMod = Java.loadClass("com.gitlab.srcmc.rctmod.api.RCTMod")
let $Dexes = Java.loadClass("com.cobblemon.mod.common.api.pokedex.Dexes")
let $Region = Java.loadClass("net.allthemods.allthemons.util.Region")
let $EntityFollowProjectile = Java.loadClass("com.hollingsworth.arsnouveau.common.entity.EntityFollowProjectile")

function startRegionalPikaStar(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  assertRealPlayerContext(event)
  let defeatCount = $RCTMod.getInstance().getTrainerManager().getData(event.player).getCompletedSeries().get("atm_team")
  if (defeatCount <= 0) {
    event.player.tell(Text.translatable("kubejs.atm.sr.atm_series_not_defeated").red())
    event.cancel()
  }

  let regionToTest = null
  let validMons = 0
  
  event.recipeInfo.inputEntities.forEach(ent => {
    if (ent.getOwner() == event.player) {
      if (regionToTest == null) {
        regionToTest = getPokemonRegion(ent.pokemon)
        if (regionToTest != null) {
          validMons++
        }
      } else {
        if (regionToTest == getPokemonRegion(ent.pokemon, regionToTest)) {
          validMons++
        }
      }
    }
  })

  if (event.recipeInfo.inputEntities.size() != validMons) {
    if (regionToTest == null) {
      event.player.tell(Text.translatable("kubejs.atm.sr.pokemons_not_owned").red())
    } else {
      event.player.tell(Text.translatable("kubejs.atm.sr.not_all_pokemons_from_region", regionToTest.toString()).red())
    }
    event.cancel()
  }

  let enoughMegaStones = true
  let firstPass = true
  let containers = Utils.newList()
  
  let megaStoneInvs = event.queryBlockPattern("mega_stones_inv")
  if (megaStoneInvs.length != 4) {
    event.player.tell(Text.translatable("kubejs.atm.sr.mega_stone_display_cases_error").red())
    event.cancel()
  }

  megaStoneInvs.forEach(offset => {
    let levelBlock = event.altar.level.getBlock(event.altar.blockPos.offset(offset))
    if (levelBlock.getBlock().id == "cobblemon:display_case") {
      let be = levelBlock.getEntity()
      if (!be.hasAnyMatching(stack => stack.hasTag("mega_showdown:mega_stone") || stack.hasTag("zamega:mega_stone"))) {
        event.highlightPositions(be.blockPos)
        firstPass = false
      }
      containers.add(be)
    }
  })
  if (firstPass) {
    containers.forEach(be => {
      be.removeItem(0, 1)
      $EntityFollowProjectile.spawn(event.altar.level, be.getBlockPos(), event.altar.blockPos)
    })
  } else {
    enoughMegaStones = false
  }

  if (!enoughMegaStones) {
    event.player.tell(Text.translatable("kubejs.atm.sr.not_enough_mega_stones").red())
    event.cancel()
  }
  event.recipeInfo.inputEntities.clear()
  let output = Item.of(`allthemons:pika_star[allthemons:region='${regionToTest.getSerializedName()}']`)
  let component = NBT.compoundTag()
  component.putUUID("uuid", event.player.uuid)
  output.set("allthemons:uuid", NBT.toJson(component.get("uuid")))
  outputPerRecipe.put(event.recipeInfo.recipe, [output])
}

function completeRegionalPikaStar(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  let outputs = outputPerRecipe.remove(event.recipeInfo.recipe) || []
  for (let output of outputs) {
    let region = output.get("allthemons:region")
    if (region != null) {
      event.player.unlockAdvancement("allthemons:" + region.serializedName + "_pika_star")
    }
    event.altar.spawnItemAboveAltar(output)
  }
}

// Helper functions

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
  if (result != null) {
    for (let region of $Region.values()) {
      if (region.name().equalsIgnoreCase(result.getPath())){
        return region
      }
    }
  }
}
