let $MonUtil = Java.loadClass("net.allthemods.allthemons.util.MonUtil")
let $Blocks = Java.loadClass("net.minecraft.world.level.block.Blocks")
let $LightningBolt = Java.loadClass("net.minecraft.world.entity.LightningBolt")
let $EntityType = Java.loadClass("net.minecraft.world.entity.EntityType")

// Each Source Jar must be topped off before the meteorite will summon Deoxys.
const REQUIRED_SOURCE = 10000

function startDeoxys(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  assertRealPlayerContext(event)

  let level = event.level
  let filledJars = 0
  for (let offset of event.getTransformedBlockPattern().keySet()) {
    let pos = event.pos.offset(offset)
    if (String(level.getBlockState(pos).getBlock().id) !== "ars_nouveau:source_jar") continue
    let jar = level.getBlockEntity(pos)
    if (jar != null && jar.getSource() >= REQUIRED_SOURCE) {
      filledJars++
    }
  }

  if (filledJars < 2) {
    event.player.tell(Text.translatable("kubejs.atm.sr.deoxys_not_enough_source").red())
    event.cancel()
  }
}

function completeDeoxys(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  let level = event.level
  let crystalPos = null
  let jarPositions = []

  for (let offset of event.getTransformedBlockPattern().keySet()) {
    let pos = event.pos.offset(offset)
    let id = String(level.getBlockState(pos).getBlock().id)
    if (id === "allthemons:deoxys_crystal") {
      crystalPos = pos
    } else if (id === "ars_nouveau:source_jar") {
      jarPositions.push(pos)
    }
  }

  // The stored source is spent powering the summon.
  jarPositions.forEach(pos => {
    let jar = level.getBlockEntity(pos)
    if (jar != null) jar.setSource(0)
  })

  let spawnPos = crystalPos != null ? crystalPos.above() : event.pos.above()

  // Lightning strikes the crystal to herald the summon.
  if (crystalPos != null) {
    strikeLightning(level, crystalPos)
  }

  // A beat later Deoxys appears and the spent crystal is cleared, so the minigame
  // must be completed again before another summon.
  level.server.scheduleInTicks(15, () => {
    $MonUtil.spawnPokemon(level, spawnPos, "deoxys", level.random.nextInt(70, 90))
    if (crystalPos != null) {
      level.setBlock(crystalPos, $Blocks.AIR.defaultBlockState(), 3)
    }
  })
}

// A purely visual bolt: it flashes and thunders without setting fire to the
// structure or harming the summoner.
function strikeLightning(level, pos) {
  let bolt = new $LightningBolt($EntityType.LIGHTNING_BOLT, level)
  bolt.setPos(pos.getX() + 0.5, pos.getY(), pos.getZ() + 0.5)
  bolt.setVisualOnly(true)
  level.addFreshEntity(bolt)
}
