SummoningRituals.ritualRendererRegistration((event) => {
  event.register("allthemons:regional_pika_star", (renderer, recipe, context) => {
    regionalPikaStarRitualRender(renderer, recipe, context)
  })
})

/** @type {typeof import("java.util.TreeMap").$TreeMap} */
let $TreeMap = Java.loadClass("java.util.TreeMap")

/** @type {import("java.util.List").$List<(import("net.minecraft.world.entity.Entity").$Entity)>} */
let cryEntities = Utils.newList()
/** @type {import("java.util.Map").$Map<(import("com.almostreliable.summoningrituals.recipe.AltarRecipe").$AltarRecipe),(import("java.util.TreeMap").$TreeMap<(integer),import("java.util.List").$List<(Function)>>)>} */
let recipeEffects = Utils.newMap()

function regionalPikaStarRitualRender(/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderer").$AltarRenderer} */ renderer, /**@type {import("com.almostreliable.summoningrituals.recipe.AltarRecipe").$AltarRecipe} */ recipe,/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderContext").$AltarRenderContext} */ context) {
  if (cryEntities.isEmpty() && context.recipeProgress == 0) {
    let aabb = getAABB(context.altar.blockPos, recipe.zone())
    cryEntities.addAll(context.level.getEntitiesOfClass("com.cobblemon.mod.common.entity.pokemon.PokemonEntity", aabb, e => e.type == "cobblemon:pokemon" && e.isTame()))
    //console.log("Created entity list: " + cryEntities)
  }
  if (context.recipeProgress == 0 && !recipeEffects.containsKey(recipe)) {
    recipeEffects.put(recipe, generateEffectsSchedule())
    //console.log("Created recipe effects: " + recipeEffects)
  }
  let task = recipeEffects.get(recipe)
  if (task != null && !task.isEmpty() && context.recipeProgress >= task.firstKey()) {
    let entry = task.pollFirstEntry()
    //console.log("Polled entry: " + entry)
    entry.getValue().forEach(func => func(context, { "entityList": cryEntities, "index": Math.floor(context.recipeProgress / 40) }))
  }

  context.translate(renderer.HALF, renderer.ALTAR_RENDER_HEIGHT, renderer.HALF);
  context.scale(renderer.HALF);

  context.translate(0, 2.5 * context.getRecipeProgressRatio(), 0);

  renderer.renderInitiator(context)
  renderer.renderItemOrbit(context)

  if (context.recipeProgress >= recipe.ticks()) {
    //console.log("Cleanup...")
    //console.log("Recipe Progress: " + context.recipeProgress)
    cryEntities.clear()
    recipeEffects.remove(recipe)
  }
}

function generateEffectsSchedule() {
  /** @type {import("java.util.TreeMap").$TreeMap<(integer),import("java.util.List").$List<(Function)>>} */
  let treeMap = new $TreeMap()
  for (let index = 0; index < 6; index++) {
    treeMap.computeIfAbsent(Java.cast("java.lang.Integer", index * 40), key => Utils.newList()).addLast((context, args) => {
      triggerPokemonCryAtIndex(args.entityList, args.index)
    })
  }
  treeMap.computeIfAbsent(Java.cast("java.lang.Integer", 40), key => Utils.newList()).addLast((context, args) => {
    triggerEvolutionEffect(context)
  })
  return treeMap
}

function triggerEvolutionEffect(context) {
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
    let entityPos = context.altar.blockPos.above(2)
    let particlePos = entityPos.getCenter()
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
  recipeEffects.clear()
  cryEntities.clear()
})

SummoningRituals.modifyConditionsTooltip(event => {
  if (event.recipeId == "allthemons:deoxys_crystal") {
    event.tooltip.addLast(Text.of("- ").append(Text.translatable("condition.summoningrituals.weather")).append(":"))
    event.tooltip.addLast(Text.aqua(" > ").append(Text.translatable("weather.eternal_starlight.meteor_shower")).append(" (").append(Text.translatable("name.eternal_starlight")).append(")"))
    event.tooltip.addLast(Text.of("- ").append(Text.translatable("kubejs.atm.condition.summoningrituals.player")).append(":"))
    event.tooltip.addLast(Text.aqua(" > ").append(Text.translatable("kubejs.atm.condition.summoningrituals.mekasuit_with_radiation_shielding", Text.translatable("configuration.mekanism.gear.meka_suit"), Text.translatable("module.mekanism.radiation_shielding_unit"))))
  }
})