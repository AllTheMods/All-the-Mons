// priority -1

let startEntryPoint = Utils.newMap()
startEntryPoint.put("allthemons:imbued_pokemon_egg", startImbuedPokemonEgg)
startEntryPoint.put("allthemons:regional_pika_star", startRegionalPikaStar)
startEntryPoint.put("allthemons:deoxys_crystal", startDeoxysCrystal)

SummoningRituals.start(event => {
  let func = startEntryPoint.get(event.recipeInfo.getRecipeId().toString())
  //console.log(func)
  //console.log(startEntryPoint)
  if (func != null) {
    func(event)
  }
})

let completeEntryPoint = Utils.newMap()
completeEntryPoint.put("allthemons:imbued_pokemon_egg", completeImbuedPokemonEgg)
completeEntryPoint.put("allthemons:regional_pika_star", completeRegionalPikaStar)
completeEntryPoint.put("allthemons:deoxys_crystal", completeDeoxysCrystal)

SummoningRituals.complete(event => {
  let func = completeEntryPoint.get(event.recipeInfo.getRecipeId().toString())
  //console.log(func)
  //console.log(completeEntryPoint)
  if (func != null) {
    func(event)
  }
})

// Helper functions

function assertRealPlayerContext(event) {
  if (event.player == null || event.player.isFakePlayer()){
    event.cancel()
  }
}

function getBlockStateProperty(blockState, propertyString){
  let result
  for (let prop of blockState.getProperties()) {
    if (prop.getName().equals(propertyString)) {
      result = blockState.getValue(prop)
    }
  }
  return result
}

/**
 * 
 * @param {import("net.minecraft.server.level.ServerLevel").$ServerLevel} level 
 * @param {import("net.minecraft.core.BlockPos").$BlockPos} pos 
 * @param {double} radius 
 * @returns 
 */
function getNearbyPlayers(level, pos, radius){
  /** @type {typeof import("net.minecraft.world.entity.ai.targeting.TargetingConditions").$TargetingConditions} */
  let $TargetingConditions = Java.loadClass("net.minecraft.world.entity.ai.targeting.TargetingConditions")
  return level.getNearbyPlayers($TargetingConditions.forNonCombat(), null, AABB.ofBlock(pos).inflate(radius))
}