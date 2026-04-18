SummoningRituals.ritualRendererRegistration((event) => {
    event.register("allthemons:regional_pika_star", (renderer, recipe, context) => {
        global.regionalPikaStarRitualRender(renderer, recipe, context)
    });
});

// ItemEvents.rightClicked("minecraft:lodestone", event => {
//     let $BedrockAnimationRepository = Java.loadClass("com.cobblemon.mod.common.client.render.models.blockbench.bedrock.animation.BedrockAnimationRepository")
//     let $ParticleStormCompanion = Java.loadClass("com.cobblemon.mod.common.client.particle.ParticleStorm").Companion
//     let $SoundEvent = Java.loadClass("net.minecraft.sounds.SoundEvent")
//     let animation = $BedrockAnimationRepository.INSTANCE.getAnimation("evolution","animation.evolution.evolution")
//     let effect = animation.effects.get(0).effect
//     let sound = animation.effects.get(1).sound
//     let player = event.player

//     console.log(sound)
//     if (sound != null) {
//         let soundEvent = $SoundEvent.createVariableRangeEvent(sound) // Means we don't need to setup a sound registry entry for every single thing
//         if (soundEvent != null) {
//             if (player != null) {
//                 if (!player.isSilent()) {
//                     player.level.playLocalSound(player, soundEvent, player.soundSource, 1, 1)

//                 }
//             }
//         }
//     }
//     let particlePos = player.blockPosition()


//     //entity.setNoGravity(true)

//     //entity.level.addFreshEntity(entity)
//     //entity.setInvisible(true)
//     //entity.setInvulnerable(true)

//     // let snowParticle = $ParticleStormCompanion.createAtPosition(event.level, effect, [particlePos.x, particlePos.y, particlePos.z])
//     // console.log(snowParticle)
//     // snowParticle.spawn()
//     let snowParticleList = $ParticleStormCompanion.createAtEntity(event.level, effect, entity, [])
//     snowParticleList.forEach(part => {
//         console.log(part)
//         part.spawn()
//     })
//     setTimeout(() => entity.discard(), 240*1000/20)
// })
