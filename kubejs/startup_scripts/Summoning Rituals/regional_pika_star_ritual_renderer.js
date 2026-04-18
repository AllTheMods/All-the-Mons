let nextAnimationTick = 0
let cryEntities = Utils.newList()

global.regionalPikaStarRitualRender = (/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderer").$AltarRenderer} */ renderer, /**@type {import("com.almostreliable.summoningrituals.recipe.AltarRecipe").$AltarRecipe} */ recipe,/**@type {import("com.almostreliable.summoningrituals.client.render.AltarRenderContext").$AltarRenderContext} */ context) => {
    if (context.recipeProgress > 40 && (nextAnimationTick == 0 || nextAnimationTick < context.player.tickCount)) {
        nextAnimationTick = context.player.tickCount + context.recipeTime + 10
        let $BedrockAnimationRepository = Java.loadClass("com.cobblemon.mod.common.client.render.models.blockbench.bedrock.animation.BedrockAnimationRepository")
        let $ParticleStormCompanion = Java.loadClass("com.cobblemon.mod.common.client.particle.ParticleStorm").Companion
        let $SoundEvent = Java.loadClass("net.minecraft.sounds.SoundEvent")
        let animation = $BedrockAnimationRepository.INSTANCE.getAnimation("evolution","animation.evolution.evolution")
        let effect = animation.effects.get(0).effect
        let sound = animation.effects.get(1).sound

        /** @type {import("net.minecraft.world.entity.LivingEntity").$LivingEntity} */
        let entity = context.level.createEntity("minecraft:armor_stand")
        let altarPos = context.altar.blockPos
        let particlePos = altarPos.offset(0, 2, 0)
        entity.setPos(particlePos.x + 0.5, particlePos.y, particlePos.z + 0.5)

        if (sound != null) {
            let soundEvent = $SoundEvent.createVariableRangeEvent(sound)
            if (soundEvent != null) {
                if (context.level != null) {
                    context.level.playLocalSound([particlePos.x, particlePos.y, particlePos.z], soundEvent, "ambient", 1, 1, false)
                }
            }
        }

        let snowParticleList = $ParticleStormCompanion.createAtEntity(context.level, effect, entity, [])
        snowParticleList.forEach(part => {
            part.spawn()
        })
    }

    if (cryEntities.isEmpty() && context.recipeProgress <= 1) {
        let aabb = getAABB(context.altar.blockPos, recipe.zone())
        cryEntities.addAll(context.level.getEntitiesOfClass("com.cobblemon.mod.common.entity.pokemon.PokemonEntity", aabb, e => e.type == "cobblemon:pokemon" && e.getOwner() == context.player))
    }
    
    if (context.recipeProgress >= recipe.ticks()) {
        cryEntities.clear()
    }

    if (cryEntities.size() > 0) {
        let index = Math.floor(context.getRecipeProgress() / ((context.recipeTime - 20) / 5))
        if (index < cryEntities.size()) {
            let mon = cryEntities.set(Java.cast("java.lang.Number", index).intValue(), null)
            if (mon != null) {
                mon.getDelegate().addFirstAnimation(["cry"])
            }
        }
    }

    context.translate(renderer.HALF, renderer.ALTAR_RENDER_HEIGHT, renderer.HALF);
    context.scale(renderer.HALF);
    
    context.translate(0, 2.5 * context.getRecipeProgressRatio(), 0);
    
    renderer.renderInitiator(context)
    renderer.renderItemOrbit(context)
}

function getAABB(/** @type {$BlockPos} */ bePos, /** @type {$BlockPos} */ sizePos){
    let startBounds = bePos.offset(sizePos.multiply(-1))
    let endBounds = bePos.offset(sizePos)
    return AABB.of(startBounds.x, startBounds.y, startBounds.z, endBounds.x, endBounds.y, endBounds.z)
}

let $BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")
let $DataComponentType = Java.loadClass("net.minecraft.core.component.DataComponentType")
let $Codec = Java.loadClass("com.mojang.serialization.Codec")
let $Unit = Java.loadClass("net.minecraft.util.Unit")
let $StreamCodec = Java.loadClass("net.minecraft.network.codec.StreamCodec")

// /** @type {typeof import("net.neoforged.neoforge.registries.RegisterEvent").$RegisterEvent} */
// let $RegisterEvent = Java.loadClass("net.neoforged.neoforge.registries.RegisterEvent")

// NativeEvents.onEvent($RegisterEvent, event => {
//     event.register($BuiltInRegistries.DATA_COMPONENT_TYPE.key(), "allthemons:ritual_imbued", () => $DataComponentType.builder().persistent($Unit.CODEC).networkSynchronized($StreamCodec.unit($Unit.INSTANCE)).build())
// })

