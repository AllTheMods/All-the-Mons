let $MonUtil = Java.loadClass("net.allthemods.allthemons.util.MonUtil")
let $Blocks = Java.loadClass("net.minecraft.world.level.block.Blocks")

// Matches SoulHeartMechanismBlockEntity.ACTIVATION_THRESHOLD: the Soul-Heart lights up
// once it has absorbed this many Pokémon souls, and only then can Magearna be awakened.
const REQUIRED_SOULS = 50

function startMagearna(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  assertRealPlayerContext(event)

  let level = event.level
  let charged = false
  for (let offset of event.getTransformedBlockPattern().keySet()) {
    let pos = event.pos.offset(offset)
    if (String(level.getBlockState(pos).getBlock().id) !== "allthemons:soul_heart_mechanism") continue
    let be = level.getBlockEntity(pos)
    if (be != null && be.getSouls() >= REQUIRED_SOULS) {
      charged = true
    }
  }

  if (!charged) {
    event.player.tell(Text.translatable("kubejs.atm.sr.magearna_not_charged").red())
    event.cancel()
  }

  // A Volcanion the summoner owns must witness the awakening. The recipe's fake entity input
  // already requires a Volcanion in the zone; here we confirm it belongs to the player.
  let hasOwnVolcanion = false
  event.recipeInfo.inputEntities.forEach(ent => {
    if (ent.getOwner() == event.player && ent.pokemon.species.resourceIdentifier == "cobblemon:volcanion") {
      hasOwnVolcanion = true
    }
  })

  if (!hasOwnVolcanion) {
    event.player.tell(Text.translatable("kubejs.atm.sr.magearna_no_volcanion").red())
    event.cancel()
  }

  // Clear the matched entities so the Volcanion is only a witness, never sacrificed.
  event.recipeInfo.inputEntities.clear()
}

function completeMagearna(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  let level = event.level
  let air = $Blocks.AIR.defaultBlockState()
  let soulHeartPos = null
  let positions = []

  for (let offset of event.getTransformedBlockPattern().keySet()) {
    let pos = event.pos.offset(offset)
    if (String(level.getBlockState(pos).getBlock().id) === "allthemons:soul_heart_mechanism") {
      soulHeartPos = pos
    }
    positions.push(pos)
  }

  let spawnPos = soulHeartPos != null ? soulHeartPos : event.pos.above()

  // The automaton body is spent giving Magearna form: clear the whole structure first so
  // there is open air to spawn into. setBlock(air) leaves no drops, including the charged
  // Soul-Heart, so the ritual must be rebuilt and recharged for another summon.
  positions.forEach(pos => level.setBlock(pos, air, 3))

  $MonUtil.spawnPokemon(level, spawnPos, "magearna", level.random.nextInt(70, 90))
}
