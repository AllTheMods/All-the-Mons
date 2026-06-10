let $Cobblemon = Java.loadClass("com.cobblemon.mod.common.Cobblemon")
let $MonUtil = Java.loadClass("net.allthemods.allthemons.util.MonUtil")

function startMelmetal(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  assertRealPlayerContext(event)

  let validMons = 0
  event.recipeInfo.inputEntities.forEach(ent => {
    if (ent.getOwner() == event.player && ent.pokemon.species.resourceIdentifier == 'cobblemon:meltan') {
      validMons++
    }
  })

  if (event.recipeInfo.inputEntities.size() != validMons) {
    event.player.tell(Text.translatable("kubejs.atm.sr.not_enough_meltan").red())
    event.cancel()
  }

  event.recipeInfo.inputEntities.clear()
}

function completeMelmetal(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  let party = $Cobblemon.INSTANCE.storage.getParty(event.player)
  party.forEach(ent => {
    party.remove(ent);
  })
  $MonUtil.spawnPokemon(event.level, event.pos.above(), "melmetal", event.level.random.nextInt(45, 70))
}
