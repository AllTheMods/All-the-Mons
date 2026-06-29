SummoningRituals.ritualRendererRegistration((event) => {
  event.register("allthemons:regional_pika_star", (renderer, recipe, context) => {
    regionalPikaStarRitualRender(renderer, recipe, context)
  })
  event.register("allthemons:melmetal", (renderer, recipe, context) => {
    melmetalRitualRender(renderer, recipe, context)
  })
  event.register("allthemons:meltan", (renderer, recipe, context) => {
    meltanRitualRender(renderer, recipe, context)
  })
  event.register("allthemons:terabeegos", (renderer, recipe, context) => {
    terabeegosRitualRender(renderer, recipe, context)
  })
  event.register("allthemons:terapagos", (renderer, recipe, context) => {
    terapagosRitualRender(renderer, recipe, context)
  })
  event.register("allthemons:mythical_pecha_berry", (renderer, recipe, context) => {
    pechaBerryRitualRender(renderer, recipe, context)
  })
  event.register("allthemons:shiny_pika_star", (renderer, recipe, context) => {
    shinyPikaStarRitualRender(renderer, recipe, context)
  })
  event.register("allthemons:deoxys", (renderer, recipe, context) => {
    deoxysRitualRender(renderer, recipe, context)
  })
})

/** @type {typeof import("net.minecraft.core.particles.DustParticleOptions").$DustParticleOptions} */
let $DustParticleOptions = Java.loadClass("net.minecraft.core.particles.DustParticleOptions")
/** @type {typeof import("org.joml.Vector3f").$Vector3f} */
let $Vector3f = Java.loadClass("org.joml.Vector3f")
/** @type {typeof import("net.minecraft.core.particles.ParticleTypes").$ParticleTypes} */
let $ParticleTypes = Java.loadClass("net.minecraft.core.particles.ParticleTypes")

let STEEL_PARTICLE = new $DustParticleOptions(new $Vector3f(0.60, 0.63, 0.68), 1.0)
let GOLD_PARTICLE = new $DustParticleOptions(new $Vector3f(0.96, 0.78, 0.15), 1.0)
let SILVER_PARTICLE = new $DustParticleOptions(new $Vector3f(0.80, 0.82, 0.86), 1.0)
let PECHA_PARTICLE = new $DustParticleOptions(new $Vector3f(0.96, 0.49, 0.71), 0.8)

// Purple source stream, matching the source held in the jars, in the same crisp dust
// style as the other ritual streams.
let SOURCE_PARTICLE = new $DustParticleOptions(new $Vector3f(0.60, 0.22, 0.95), 1.0)

/** @type {import("java.util.Map").$Map<(import("com.almostreliable.summoningrituals.recipe.AltarRecipe").$AltarRecipe),(any)>} */
let meltanDrains = Utils.newMap()

let melmetalState = {}
let pikaState = {}
let terabeegosState = {}
let terapagosState = {}
let pechaState = {}
let shinyPikaState = {}
let deoxysState = {}

const PECHA_STREAM_TICKS = 20

/** @type {import("java.util.List").$List<(import("net.minecraft.world.entity.Entity").$Entity)>} */
let cryEntities = Utils.newList()

function regionalPikaStarRitualRender(/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderer").$AltarRenderer} */ renderer, /**@type {import("com.almostreliable.summoningrituals.recipe.AltarRecipe").$AltarRecipe} */ recipe,/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderContext").$AltarRenderContext} */ context) {
  let stateKey = context.altar.blockPos.toString()
  if (!pikaState[stateKey] && context.recipeProgress < recipe.ticks()) {
    let aabb = getAABB(context.altar.blockPos, recipe.zone())
    cryEntities.clear()
    cryEntities.addAll(context.level.getEntitiesOfClass("com.cobblemon.mod.common.entity.pokemon.PokemonEntity", aabb, e => e.type == "cobblemon:pokemon" && e.isTame()))
    pikaState[stateKey] = buildPikaSchedule()
  }
  if (pikaState[stateKey]) {
    pikaState[stateKey].forEach(eff => {
      if (!eff.done && context.recipeProgress >= eff.tick) {
        eff.done = true
        eff.fn(context)
      }
    })
  }

  context.translate(renderer.HALF, renderer.ALTAR_RENDER_HEIGHT, renderer.HALF);
  context.scale(renderer.HALF);

  context.translate(0, 2.5 * context.getRecipeProgressRatio(), 0);

  renderer.renderInitiator(context)
  renderer.renderItemOrbit(context)

  if (context.recipeProgress >= recipe.ticks()) {
    cryEntities.clear()
    delete pikaState[stateKey]
  }
}
function melmetalRitualRender(/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderer").$AltarRenderer} */ renderer, /**@type {import("com.almostreliable.summoningrituals.recipe.AltarRecipe").$AltarRecipe} */ recipe,/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderContext").$AltarRenderContext} */ context) {
  let stateKey = context.altar.blockPos.toString()
  if (!melmetalState[stateKey] && context.recipeProgress < recipe.ticks()) {
    let aabb = getAABB(context.altar.blockPos, recipe.zone())
    cryEntities.clear()
    cryEntities.addAll(context.level.getEntitiesOfClass("com.cobblemon.mod.common.entity.pokemon.PokemonEntity", aabb, e => e.type == "cobblemon:pokemon" && e.isTame()))
    melmetalState[stateKey] = buildMelmetalSchedule(recipe.ticks())
  }
  if (melmetalState[stateKey]) {
    melmetalState[stateKey].forEach(eff => {
      if (!eff.done && context.recipeProgress >= eff.tick) {
        eff.done = true
        eff.fn(context)
      }
    })
  }

  let ratio = context.getRecipeProgressRatio()
  let bp = context.altar.blockPos
  let target = [bp.x + renderer.HALF, bp.y + renderer.ALTAR_RENDER_HEIGHT + 2.5 * ratio * renderer.HALF, bp.z + renderer.HALF]
  cryEntities.forEach(entity => {
    emitStream(context.level, entity.getX(), entity.getY() + 0.4, entity.getZ(), target, SILVER_PARTICLE)
  })

  context.translate(renderer.HALF, renderer.ALTAR_RENDER_HEIGHT, renderer.HALF);
  context.scale(renderer.HALF);

  context.translate(0, 2.5 * context.getRecipeProgressRatio(), 0);

  renderer.renderInitiator(context)
  renderer.renderItemOrbit(context)

  if (context.recipeProgress >= recipe.ticks()) {
    cryEntities.clear()
    delete melmetalState[stateKey]
  }
}

function meltanRitualRender(/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderer").$AltarRenderer} */ renderer, /**@type {import("com.almostreliable.summoningrituals.recipe.AltarRecipe").$AltarRecipe} */ recipe,/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderContext").$AltarRenderContext} */ context) {
  if (context.recipeProgress == 0 && !meltanDrains.containsKey(recipe)) {
    let drains = findFoundryDrains(context.level, context.altar.blockPos)
    if (drains != null) {
      meltanDrains.put(recipe, drains)
    }
  }

  let drains = meltanDrains.get(recipe)
  if (drains != null) {
    let ratio = context.getRecipeProgressRatio()
    let bp = context.altar.blockPos
    let target = [bp.x + renderer.HALF, bp.y + renderer.ALTAR_RENDER_HEIGHT + 2.5 * ratio * renderer.HALF, bp.z + renderer.HALF]
    spawnFluidStream(context.level, drains.steel, target, STEEL_PARTICLE)
    spawnFluidStream(context.level, drains.gold, target, GOLD_PARTICLE)
  }

  context.translate(renderer.HALF, renderer.ALTAR_RENDER_HEIGHT, renderer.HALF);
  context.scale(renderer.HALF);

  context.translate(0, 2.5 * context.getRecipeProgressRatio(), 0);

  renderer.renderInitiator(context)
  renderer.renderItemOrbit(context)

  if (context.recipeProgress >= recipe.ticks()) {
    meltanDrains.remove(recipe)
  }
}

function terabeegosRitualRender(/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderer").$AltarRenderer} */ renderer, /**@type {import("com.almostreliable.summoningrituals.recipe.AltarRecipe").$AltarRecipe} */ recipe,/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderContext").$AltarRenderContext} */ context) {
  let stateKey = context.altar.blockPos.toString()
  if (!terabeegosState[stateKey] && context.recipeProgress < recipe.ticks()) {
    terabeegosState[stateKey] = buildTerabeegosSchedule(recipe.ticks())
  }
  if (terabeegosState[stateKey]) {
    terabeegosState[stateKey].forEach(eff => {
      if (!eff.done && context.recipeProgress >= eff.tick) {
        eff.done = true
        eff.fn(context)
      }
    })
  }

  context.translate(renderer.HALF, renderer.ALTAR_RENDER_HEIGHT, renderer.HALF);
  context.scale(renderer.HALF);

  context.translate(0, 2.5 * context.getRecipeProgressRatio(), 0);

  renderer.renderInitiator(context)
  renderer.renderItemOrbit(context)

  if (context.recipeProgress >= recipe.ticks()) {
    delete terabeegosState[stateKey]
  }
}

function buildTerabeegosSchedule(ticks) {
  let schedule = []
  for (let t = 0; t < ticks; t += 90) {
    schedule.push({ "tick": t, "done": false, "fn": context => triggerEvolutionCircle(context, 1.5) })
  }
  return schedule
}

function terapagosRitualRender(/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderer").$AltarRenderer} */ renderer, /**@type {import("com.almostreliable.summoningrituals.recipe.AltarRecipe").$AltarRecipe} */ recipe,/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderContext").$AltarRenderContext} */ context) {
  let stateKey = context.altar.blockPos.toString()
  if (!terapagosState[stateKey] && context.recipeProgress < recipe.ticks()) {
    terapagosState[stateKey] = { "crystal": findTerapagosCrystal(context.level, context.altar.blockPos), "done": false }
  }
  let state = terapagosState[stateKey]
  if (state != null && !state.done && state.crystal != null) {
    state.done = true
    triggerEvolutionEffect(context, 0, state.crystal.getCenter())
  }

  context.translate(renderer.HALF, renderer.ALTAR_RENDER_HEIGHT, renderer.HALF);
  context.scale(renderer.HALF);

  context.translate(0, 2.5 * context.getRecipeProgressRatio(), 0);

  renderer.renderInitiator(context)
  renderer.renderItemOrbit(context)

  if (context.recipeProgress >= recipe.ticks()) {
    delete terapagosState[stateKey]
  }
}

function findTerapagosCrystal(level, altarPos) {
  for (let dx = -7; dx <= 7; dx++) {
    for (let dy = -2; dy <= 4; dy++) {
      for (let dz = -7; dz <= 7; dz++) {
        let p = altarPos.offset(dx, dy, dz)
        if (String(level.getBlockState(p).block.id) === "allthemons:terapagos_crystal") {
          return p
        }
      }
    }
  }
  return null
}

function pechaBerryRitualRender(/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderer").$AltarRenderer} */ renderer, /**@type {import("com.almostreliable.summoningrituals.recipe.AltarRecipe").$AltarRecipe} */ recipe,/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderContext").$AltarRenderContext} */ context) {
  let stateKey = context.altar.blockPos.toString()
  if (!pechaState[stateKey] && context.recipeProgress < recipe.ticks()) {
    pechaState[stateKey] = { "bushes": findPechaBushes(context.level, context.altar.blockPos), "schedule": buildTerabeegosSchedule(recipe.ticks()) }
  }
  let state = pechaState[stateKey]
  if (state != null) {
    state.schedule.forEach(eff => {
      if (!eff.done && context.recipeProgress >= eff.tick) {
        eff.done = true
        eff.fn(context)
      }
    })
    if (context.recipeProgress < PECHA_STREAM_TICKS) {
      let bp = context.altar.blockPos
      let target = [bp.x + renderer.HALF, bp.y + renderer.ALTAR_RENDER_HEIGHT, bp.z + renderer.HALF]
      state.bushes.forEach(p => {
        emitStream(context.level, p.x + 0.5, p.y + 0.6, p.z + 0.5, target, PECHA_PARTICLE, 2)
      })
    }
  }

  context.translate(renderer.HALF, renderer.ALTAR_RENDER_HEIGHT, renderer.HALF);
  context.scale(renderer.HALF);

  context.translate(0, 2.5 * context.getRecipeProgressRatio(), 0);

  renderer.renderInitiator(context)
  renderer.renderItemOrbit(context)

  if (context.recipeProgress >= recipe.ticks()) {
    delete pechaState[stateKey]
  }
}

function shinyPikaStarRitualRender(/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderer").$AltarRenderer} */ renderer, /**@type {import("com.almostreliable.summoningrituals.recipe.AltarRecipe").$AltarRecipe} */ recipe,/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderContext").$AltarRenderContext} */ context) {
  let stateKey = context.altar.blockPos.toString()
  if (!shinyPikaState[stateKey] && context.recipeProgress < recipe.ticks()) {
    shinyPikaState[stateKey] = {
      "cases": findDisplayCases(context.level, context.altar.blockPos),
      "schedule": buildTerabeegosSchedule(recipe.ticks())
    }
  }
  let state = shinyPikaState[stateKey]
  if (state != null) {
    // Particle ring
    state.schedule.forEach(eff => {
      if (!eff.done && context.recipeProgress >= eff.tick) {
        eff.done = true
        eff.fn(context)
      }
    })
    // Flames from each display case
    state.cases.forEach(p => {
      spawnCaseFlames(context.level, p)
    })
  }

  context.translate(renderer.HALF, renderer.ALTAR_RENDER_HEIGHT, renderer.HALF);
  context.scale(renderer.HALF);

  context.translate(0, 2.5 * context.getRecipeProgressRatio(), 0);

  renderer.renderInitiator(context)
  renderer.renderItemOrbit(context)

  if (context.recipeProgress >= recipe.ticks()) {
    delete shinyPikaState[stateKey]
  }
}

function deoxysRitualRender(/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderer").$AltarRenderer} */ renderer, /**@type {import("com.almostreliable.summoningrituals.recipe.AltarRecipe").$AltarRecipe} */ recipe,/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderContext").$AltarRenderContext} */ context) {
  let stateKey = context.altar.blockPos.toString()
  if (!deoxysState[stateKey] && context.recipeProgress < recipe.ticks()) {
    let state = findDeoxysFixtures(context.level, context.altar.blockPos)
    state.schedule = buildTerabeegosSchedule(recipe.ticks())
    deoxysState[stateKey] = state
  }
  let state = deoxysState[stateKey]
  if (state != null) {
    // Ring of sparkles
    state.schedule.forEach(eff => {
      if (!eff.done && context.recipeProgress >= eff.tick) {
        eff.done = true
        eff.fn(context)
      }
    })
    if (state.crystal != null) {
      let target = [state.crystal.x + 0.5, state.crystal.y + 0.6, state.crystal.z + 0.5]
      // A few light stars lob from each obelisk tip down onto the crystal
      state.obelisks.forEach(p => {
        if (Math.random() < 0.08) {
          emitArc(context.level, p.x + 0.5, p.y + 0.8, p.z + 0.5, target, $ParticleTypes.END_ROD, 1, 0.8)
        }
      })
      // Steady source current arcs from each relay into the crystal
      state.relays.forEach(p => {
        emitArc(context.level, p.x + 0.5, p.y + 0.5, p.z + 0.5, target, SOURCE_PARTICLE, 2, 1.2)
      })
    }
  }

  context.translate(renderer.HALF, renderer.ALTAR_RENDER_HEIGHT, renderer.HALF);
  context.scale(renderer.HALF);

  context.translate(0, 2.5 * context.getRecipeProgressRatio(), 0);

  renderer.renderInitiator(context)
  renderer.renderItemOrbit(context)

  if (context.recipeProgress >= recipe.ticks()) {
    delete deoxysState[stateKey]
  }
}

function findDeoxysFixtures(level, altarPos) {
  let obelisks = []
  let relays = []
  let crystal = null
  for (let dx = -10; dx <= 10; dx++) {
    for (let dy = -2; dy <= 4; dy++) {
      for (let dz = -10; dz <= 10; dz++) {
        let p = altarPos.offset(dx, dy, dz)
        let id = String(level.getBlockState(p).block.id)
        if (id === "forbidden_arcanus:arcane_crystal_obelisk") {
          // Only the top segment of each pillar streams, so every obelisk emits once
          if (String(level.getBlockState(p.above()).block.id) !== "forbidden_arcanus:arcane_crystal_obelisk") {
            obelisks.push(p)
          }
        } else if (id === "ars_nouveau:relay") {
          relays.push(p)
        } else if (id === "allthemons:deoxys_crystal") {
          crystal = p
        }
      }
    }
  }
  return { "obelisks": obelisks, "relays": relays, "crystal": crystal }
}

// Parabolic arc from (sx,sy,sz) to target, peaking `arch` blocks above the straight line.
function emitArc(level, sx, sy, sz, target, particle, samples, arch) {
  let n = samples == null ? 4 : samples
  let h = arch == null ? 1.0 : arch
  for (let i = 0; i < n; i++) {
    let t = (i + Math.random()) / n
    let x = sx + (target[0] - sx) * t + (Math.random() - 0.5) * 0.06
    let y = sy + (target[1] - sy) * t + 4 * h * t * (1 - t) + (Math.random() - 0.5) * 0.06
    let z = sz + (target[2] - sz) * t + (Math.random() - 0.5) * 0.06
    level.addParticle(particle, x, y, z, 0, 0, 0)
  }
}

function findDisplayCases(level, altarPos) {
  let found = []
  for (let dx = -5; dx <= 5; dx++) {
    for (let dy = -1; dy <= 2; dy++) {
      for (let dz = -5; dz <= 5; dz++) {
        let p = altarPos.offset(dx, dy, dz)
        if (String(level.getBlockState(p).block.id) === "cobblemon:display_case") {
          found.push(p)
        }
      }
    }
  }
  return found
}

function spawnCaseFlames(level, p) {
  let x = p.x + 0.5 + (Math.random() - 0.5) * 0.35
  let y = p.y + 1.0
  let z = p.z + 0.5 + (Math.random() - 0.5) * 0.35
  level.addParticle($ParticleTypes.FLAME, x, y, z, 0, 0.03 + Math.random() * 0.03, 0)
}

function findPechaBushes(level, altarPos) {
  let found = []
  for (let dx = -3; dx <= 3; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      for (let dz = -3; dz <= 3; dz++) {
        let p = altarPos.offset(dx, dy, dz)
        if (String(level.getBlockState(p).block.id) === "cobblemon:pecha_berry") {
          found.push(p)
        }
      }
    }
  }
  return found
}

function findFoundryDrains(level, altarPos) {
  let controllerPos = null
  for (let dx = -3; dx <= 3 && controllerPos == null; dx++) {
    for (let dy = -1; dy <= 1 && controllerPos == null; dy++) {
      for (let dz = -3; dz <= 3 && controllerPos == null; dz++) {
        let p = altarPos.offset(dx, dy, dz)
        if (String(level.getBlockState(p).block.id).includes("foundry_controller")) {
          controllerPos = p
        }
      }
    }
  }
  if (controllerPos == null) return null

  let drains = []
  let neighbors = [controllerPos.north(), controllerPos.south(), controllerPos.east(), controllerPos.west()]
  neighbors.forEach(p => {
    if (String(level.getBlockState(p).block.id).includes("foundry_drain")) {
      drains.push(p)
    }
  })
  if (drains.length < 2) return null

  drains.sort((a, b) => (a.x - b.x) || (a.z - b.z))
  return { "steel": drains[0], "gold": drains[1] }
}

function spawnFluidStream(level, drainPos, target, particle) {
  let cx = drainPos.x + 0.5
  let cz = drainPos.z + 0.5
  let dirX = target[0] - cx
  let dirZ = target[2] - cz
  let len = Math.sqrt(dirX * dirX + dirZ * dirZ) || 1
  let sx = cx + (dirX / len) * 0.55
  let sy = drainPos.y + 0.5
  let sz = cz + (dirZ / len) * 0.55
  emitStream(level, sx, sy, sz, target, particle)
}

function emitStream(level, sx, sy, sz, target, particle, sampleCount) {
  let samples = sampleCount == null ? 6 : sampleCount
  for (let i = 0; i < samples; i++) {
    let t = (i + Math.random()) / samples
    let x = sx + (target[0] - sx) * t + (Math.random() - 0.5) * 0.08
    let y = sy + (target[1] - sy) * t * t * t + (Math.random() - 0.5) * 0.08
    let z = sz + (target[2] - sz) * t + (Math.random() - 0.5) * 0.08
    level.addParticle(particle, x, y, z, 0, 0, 0)
  }
}

function buildPikaSchedule() {
  let schedule = []
  for (let index = 0; index < 6; index++) {
    let cryIndex = index
    schedule.push({ "tick": index * 40, "done": false, "fn": context => triggerPokemonCryAtIndex(cryEntities, cryIndex) })
  }
  schedule.push({ "tick": 40, "done": false, "fn": context => triggerEvolutionEffect(context) })
  return schedule
}

function buildMelmetalSchedule(ticks) {
  let schedule = []
  for (let index = 0; index < 6; index++) {
    let cryIndex = index
    schedule.push({ "tick": index * 40, "done": false, "fn": context => triggerPokemonCryAtIndex(cryEntities, cryIndex) })
  }
  schedule.push({ "tick": 50, "done": false, "fn": context => triggerEvolutionEffect(context, 2.5) })
  return schedule
}

function triggerEvolutionEffect(context, aboveOffset, posOverride) {
  /** @type {typeof import("com.cobblemon.mod.common.client.render.models.blockbench.bedrock.animation.BedrockAnimationRepository").$BedrockAnimationRepository} */
  let $BedrockAnimationRepository = Java.loadClass("com.cobblemon.mod.common.client.render.models.blockbench.bedrock.animation.BedrockAnimationRepository")
  /** @type {typeof import("com.cobblemon.mod.common.client.particle.ParticleStorm").$ParticleStorm} */
  let $ParticleStorm = Java.loadClass("com.cobblemon.mod.common.client.particle.ParticleStorm")
  let $ParticleStormCompanion = $ParticleStorm.Companion
  /** @type {typeof import("net.minecraft.sounds.SoundEvent").$SoundEvent} */
  let $SoundEvent = Java.loadClass("net.minecraft.sounds.SoundEvent")
  //let animationData = event.data.getCompound("animation")
  let animation = $BedrockAnimationRepository.INSTANCE.getAnimationOrNull("evolution", "animation.evolution.evolution")
  if (animation != null) {

    /** @type {import("net.minecraft.world.entity.LivingEntity").$LivingEntity} */
    let entity = context.altar.level.createEntity("minecraft:armor_stand")
    let particlePos = posOverride != null ? posOverride : context.altar.blockPos.getCenter().add(0, aboveOffset == null ? 2.0 : aboveOffset, 0)
    entity.setPos(particlePos)

    Client.scheduleInTicks(240, () => {
      entity.discard()
    })

    /** @type {import("java.util.List").$List<(import("com.cobblemon.mod.common.client.render.models.blockbench.bedrock.animation.BedrockEffectKeyframe").$BedrockEffectKeyframe)>} */
    let effects = animation.effects
    /** @type {typeof import("com.cobblemon.mod.common.client.render.models.blockbench.bedrock.animation.BedrockParticleKeyframe").$BedrockParticleKeyframe} */
    let $BedrockParticleKeyframe = Java.loadClass("com.cobblemon.mod.common.client.render.models.blockbench.bedrock.animation.BedrockParticleKeyframe")
    /** @type {typeof import("com.cobblemon.mod.common.client.render.models.blockbench.bedrock.animation.BedrockSoundKeyframe").$BedrockSoundKeyframe} */
    let $BedrockSoundKeyframe = Java.loadClass("com.cobblemon.mod.common.client.render.models.blockbench.bedrock.animation.BedrockSoundKeyframe")

    effects.forEach(effect => {
      if (effect instanceof $BedrockParticleKeyframe) {
        let particle = effect.effect
        let snowParticleList = $ParticleStormCompanion.createAtEntity(context.altar.level, particle, entity, [])
        snowParticleList.forEach(part => {
          part.spawn()
        })
      }
      if (effect instanceof $BedrockSoundKeyframe) {
        let sound = effect.sound
        let soundEvent = $SoundEvent.createVariableRangeEvent(sound)
        if (soundEvent != null) {
          if (context.altar.level != null) {
            context.altar.level.playLocalSound([particlePos.x(), particlePos.y(), particlePos.z()], soundEvent, "ambient", 1, 1, false)
          }
        }
      }
    })

  }
}

function triggerEvolutionCircle(context, aboveOffset) {
  /** @type {typeof import("com.cobblemon.mod.common.client.particle.BedrockParticleOptionsRepository").$BedrockParticleOptionsRepository} */
  let $BedrockParticleOptionsRepository = Java.loadClass("com.cobblemon.mod.common.client.particle.BedrockParticleOptionsRepository")
  /** @type {typeof import("com.cobblemon.mod.common.client.particle.ParticleStorm").$ParticleStorm} */
  let $ParticleStorm = Java.loadClass("com.cobblemon.mod.common.client.particle.ParticleStorm")
  let $ParticleStormCompanion = $ParticleStorm.Companion
  /** @type {typeof import("net.minecraft.resources.ResourceLocation").$ResourceLocation} */
  let $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")

  let particle = $BedrockParticleOptionsRepository.INSTANCE.getEffect($ResourceLocation.parse("cobblemon:evo_particles"))
  if (particle == null) return

  let entity = context.altar.level.createEntity("minecraft:armor_stand")
  let yOffset = aboveOffset == null ? 1.5 : aboveOffset
  let particlePos = context.altar.blockPos.getCenter().add(0, yOffset, 0)
  entity.setPos(particlePos)

  Client.scheduleInTicks(90, () => {
    entity.discard()
  })

  let particles = $ParticleStormCompanion.createAtEntity(context.altar.level, particle, entity, [])
  particles.forEach(part => {
    part.spawn()
  })
}

function triggerPokemonCryAtIndex(entityList, index) {
  if (entityList == null || index == null || index >= entityList.size()) return
  let entity = entityList.get(index)
  //console.log("Triggered cry on: " + entity)
  if (entity != null && entity.type == "cobblemon:pokemon") {
    entity.getDelegate().addFirstAnimation(["cry"])
  }
}

function getAABB(/** @type {$BlockPos} */ bePos, /** @type {$BlockPos} */ sizePos) {
  let startBounds = bePos.offset(sizePos.multiply(-1))
  let endBounds = bePos.offset(sizePos)
  return AABB.of(startBounds.x, startBounds.y, startBounds.z, endBounds.x, endBounds.y, endBounds.z)
}

ClientEvents.loggedOut(event => {
  cryEntities.clear()
  meltanDrains.clear()
  melmetalState = {}
  pikaState = {}
  terabeegosState = {}
  terapagosState = {}
  pechaState = {}
  shinyPikaState = {}
  deoxysState = {}
})

SummoningRituals.modifyConditionsTooltip(event => {
  if (event.recipeId == "allthemons:deoxys_crystal") {
    event.tooltip.addLast(Text.of("- ").append(Text.translatable("condition.summoningrituals.weather")).append(":"))
    event.tooltip.addLast(Text.aqua(" > ").append(Text.translatable("weather.eternal_starlight.meteor_shower")).append(" (").append(Text.translatable("name.eternal_starlight")).append(")"))
    event.tooltip.addLast(Text.of("- ").append(Text.translatable("kubejs.atm.condition.summoningrituals.player")).append(":"))
    event.tooltip.addLast(Text.aqua(" > ").append(Text.translatable("kubejs.atm.condition.summoningrituals.mekasuit_with_radiation_shielding", Text.translatable("configuration.mekanism.gear.meka_suit"), Text.translatable("module.mekanism.radiation_shielding_unit"))))
  }
})