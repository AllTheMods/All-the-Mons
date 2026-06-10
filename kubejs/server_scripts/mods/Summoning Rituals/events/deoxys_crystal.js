function startDeoxysCrystal(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  assertRealPlayerContext(event)
  let radiationUnit = Registry.of("mekanism:module").get("mekanism:radiation_shielding_unit")
  let armorWithRadiationProtection = 0
  ;[event.player.getHeadArmorItem(),
  event.player.getChestArmorItem(),
  event.player.getLegsArmorItem(),
  event.player.getFeetArmorItem()].forEach(item => {
    let moduleContainer = item.get("mekanism:module_container")
    if (moduleContainer == null) return
    if (moduleContainer.installedCount(radiationUnit) > 0) {
      armorWithRadiationProtection++
    }
  })

  if (armorWithRadiationProtection != 4) {
    event.player.tell(Text.translatable("kubejs.atm.sr.mekasuit_req").red())
    event.cancel()
  }

  let nextMeteorShowerInSeconds = getNextMeteorShowerEvent(event.altar.level)
  if (nextMeteorShowerInSeconds == -1) {
    event.player.tell(Text.translatable("kubejs.atm.sr.meteor_shower_check_error").red())
    event.cancel()
  } else if (nextMeteorShowerInSeconds > 0) {
    let duration = Duration.ofSeconds(nextMeteorShowerInSeconds)
    console.log(nextMeteorShowerInSeconds)
    let $String = Java.loadClass("java.lang.String")
    let $Locale = Java.loadClass("java.util.Locale")
    let timeRemainingFormatted = $String["format(java.util.Locale,java.lang.String,java.lang.Object[])"]($Locale.ROOT, "%02dh:%02dm:%02ds", duration.toHours(), duration.toMinutesPart(), duration.toSecondsPart())
    event.player.tell(Text.translatable("kubejs.atm.sr.meteor_shower_forecast", timeRemainingFormatted).red())
    event.cancel()
  }
  scheduleDeoxysCrystalEffects(event.altar)
}

function completeDeoxysCrystal(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  let facing = getBlockStateProperty(event.altar.level.getBlockState(event.altar.blockPos), "facing")
  let crystalPos = event.altar.blockPos.relative(facing.opposite)
  let crystalPosCenter = crystalPos.getCenter()
  let players = getNearbyPlayers(event.altar.level, event.altar.blockPos, 16)

  for (let player of players) {
    event.altar.level.sendParticles(player, "eternal_starlight:meteor",true, crystalPosCenter.x(), crystalPosCenter.y() + 75, crystalPosCenter.z(), 0, 0, 0, 0, 0)
    event.altar.level.server.schedule(2000, () => {
      event.altar.level["playSound(net.minecraft.world.entity.player.Player,net.minecraft.core.BlockPos,net.minecraft.sounds.SoundEvent,net.minecraft.sounds.SoundSource,float,float)"](null, crystalPosCenter, "creeperoverhaul:entity.plant.creeper.explosion", "ambient", 1, 1)
      let $ScreenShakeVfx = Java.loadClass("cn.leolezury.eternalstarlight.common.vfx.ScreenShakeVfx")
      $ScreenShakeVfx.createInstance(event.altar.level.dimensionKey, crystalPosCenter, 40, 50, 0.5, 0.5, 3, 5.5).send(event.altar.level)
      event.altar.level.sendParticles(player, "eternal_starlight:aethersent_explosion",false, crystalPosCenter.x(), crystalPosCenter.y(), crystalPosCenter.z(), 0, 0, 0, 0, 0)
    })
  }

  event.altar.level.server.schedule(2000, () => {
    event.altar.level.getBlock(crystalPos).set("allthemons:deoxys_crystal")
    
    let fireAABB = AABB.of(crystalPos.x, crystalPos.y, crystalPos.z, crystalPos.x, crystalPos.y, crystalPos.z).inflate(1,0,1)
    BlockPos.betweenClosedStream(fireAABB).forEach(pos => {
      if (event.altar.level.getBlockState(pos).isAir()) {
        event.altar.level.setBlockAndUpdate(pos, Blocks.FIRE.getState(event.altar.level, pos))
      }
    })
  })
}

// Helper functions

/**
 * 
 * @param {import("net.minecraft.server.level.ServerLevel").$ServerLevel} level 
 */
function getNextMeteorShowerEvent(level){
  /** @type {typeof import("cn.leolezury.eternalstarlight.common.util.ESWeatherUtil").$ESWeatherUtil} */
  let $ESWeatherUtil = Java.loadClass("cn.leolezury.eternalstarlight.common.util.ESWeatherUtil")
  let weathers = $ESWeatherUtil.getOrCreateWeathers(level)
  let nextTick = -1
  
  weathers.getWeathers().forEach(instance => {
    if (instance.getWeather().getDescriptionId() == "weather.eternal_starlight.meteor_shower") {
      let currentNext = instance.ticksUntilNext
      if (nextTick == -1 || nextTick > currentNext) {
        nextTick = currentNext
      }
    }
  })

  if (nextTick != -1) {
    let nextInSeconds = (nextTick / 20)
    return nextInSeconds
  } else {
    return nextTick
  }
}

function scheduleDeoxysCrystalEffects(/** @type {import("com.almostreliable.summoningrituals.altar.AltarBlockEntity").$AltarBlockEntity} */altar) {
  let altarPos = altar.blockPos
  
  for (let index = 0; index <= 8; index++) {
    altar.level.server.scheduleInTicks(40 * index, () => {
      if (altar.isRemoved()) return
      let randomPos = altarPos.getCenter().offsetRandom(altar.level.random, 1.5)
      let players = getNearbyPlayers(altar.level, altarPos, 16)
      
      for (let player of players) {
        altar.level.sendParticles(player, "eternal_starlight:meteor",true, randomPos.x(), randomPos.y() + 75, randomPos.z(), 0, 0, 0, 0, 0)
      }

      altar.level.server.schedule(2000, () => {
        altar.level["playSound(net.minecraft.world.entity.player.Player,net.minecraft.core.BlockPos,net.minecraft.sounds.SoundEvent,net.minecraft.sounds.SoundSource,float,float)"](null, randomPos, "creeperoverhaul:entity.plant.creeper.explosion", "ambient", 1, 1)
        /** @type {typeof import("cn.leolezury.eternalstarlight.common.vfx.ScreenShakeVfx").$ScreenShakeVfx} */
        let $ScreenShakeVfx = Java.loadClass("cn.leolezury.eternalstarlight.common.vfx.ScreenShakeVfx")
        $ScreenShakeVfx.createInstance(altar.level.dimensionKey, randomPos, 40, 50, 0.5, 0.5, 3, 5.5).send(altar.level)
        altar.level.server.runCommandSilent(`execute in ${altar.level.dimensionKey.location()} run summon area_effect_cloud ${randomPos.x()} ${altarPos.y} ${randomPos.z} {Radius:2,Duration:20,potion_contents:{custom_color:3847130}}`)
      })
    })
  }
}
