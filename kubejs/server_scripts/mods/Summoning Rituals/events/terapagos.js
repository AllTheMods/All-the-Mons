let $MonUtil = Java.loadClass("net.allthemods.allthemons.util.MonUtil")
let $Blocks = Java.loadClass("net.minecraft.world.level.block.Blocks")

// Altar pos -> crystal BlockPos, captured at start so the spawn still knows where to go
// after the structure (including the crystal) has been removed mid-ritual.
let terapagosCrystalPos = {}

// How long after the ritual starts to dissolve the structure (ritual runs 200 ticks / 10s).
const STRUCTURE_REMOVE_DELAY_MS = 6000

function startTerapagos(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  assertRealPlayerContext(event)

  let level = event.level
  let air = $Blocks.AIR.defaultBlockState()
  let attached = []
  let others = []
  let crystalPos = null

  for (let offset of event.getTransformedBlockPattern().keySet()) {
    let pos = event.pos.offset(offset)
    let id = String(level.getBlockState(pos).getBlock().id)
    if (id === "allthemons:terapagos_crystal") {
      crystalPos = pos
    }
    if (id.includes("cluster") || id.includes("lamp")) {
      attached.push(pos)
    } else {
      others.push(pos)
    }
  }

  terapagosCrystalPos[event.pos.toString()] = crystalPos

  setTimeout(() => {
    // Clusters and lamps first: they need a support block, so removing their support
    // would pop them off and drop them as loot. Clearing them directly avoids that.
    attached.forEach(pos => level.setBlock(pos, air, 3))
    others.forEach(pos => level.setBlock(pos, air, 3))
  }, STRUCTURE_REMOVE_DELAY_MS)
}

function completeTerapagos(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  let key = event.pos.toString()
  let crystalPos = terapagosCrystalPos[key]
  delete terapagosCrystalPos[key]

  if (crystalPos != null) {
    $MonUtil.spawnPokemon(event.level, crystalPos, "terapagos", event.level.random.nextInt(70, 90))
  }
}
