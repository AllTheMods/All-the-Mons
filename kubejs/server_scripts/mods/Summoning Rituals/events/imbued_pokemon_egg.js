let $ItemHandler = Java.loadClass("net.neoforged.neoforge.capabilities.Capabilities$ItemHandler")
let $ItemHandlerHelper = Java.loadClass("net.neoforged.neoforge.items.ItemHandlerHelper")
let $MechanicalCrafterBlockEntity = Java.loadClass("com.simibubi.create.content.kinetics.crafter.MechanicalCrafterBlockEntity")
let $EntityFollowProjectile = Java.loadClass("com.hollingsworth.arsnouveau.common.entity.EntityFollowProjectile")
let $RCTMod = Java.loadClass("com.gitlab.srcmc.rctmod.api.RCTMod")

function startImbuedPokemonEgg(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  assertRealPlayerContext(event)
  let facing = getBlockStateProperty(event.altar.level.getBlockState(event.altar.blockPos), "facing")
  let level = event.altar.level
  let recipeOpt = level.recipeManager.byKey("allthemons:pika_star")
  
  if (!recipeOpt.isEmpty()) {
    let defeatCount = $RCTMod.getInstance().getTrainerManager().getData(event.player).getCompletedSeries().get("atm_team")
    if (defeatCount <= 0) {
      event.player.tell(Text.translatable("kubejs.atm.sr.atm_series_not_defeated").red())
      event.cancel()
    }
    
    let createRecipe = recipeOpt.get().recipe
    let pattern = createRecipe.pattern

    let minX = 9999
    let maxX = -9999
    let minY = 9999
    let maxY = -9999
    let minZ = 9999
    let maxZ = -9999

    let blockPattern = event.getTransformedBlockPattern().keySet()

    blockPattern.forEach(offset => {
      if (level.getBlockState(event.altar.blockPos.offset(offset)).block.id == "create:mechanical_crafter") {
        minX = Math.min(offset.x, minX)
        minY = Math.min(offset.y, minY)
        minZ = Math.min(offset.z, minZ)
        maxX = Math.max(offset.x, maxX)
        maxY = Math.max(offset.y, maxY)
        maxZ = Math.max(offset.z, maxZ)
      }
    })

    let fromOffset = [maxX, maxY, maxZ]
    let toOffset = [minX, minY, minZ]

    let eggSlot = event.queryBlockPattern("imbued_egg_slot")
    if (eggSlot.length == 0) {
      event.player.tell(Text.translatable("kubejs.atm.sr.recipe_error").red())
      event.cancel()
    }

    let targetPos = event.altar.blockPos.offset(eggSlot[0])

    let inputStacks = Utils.newList()
    let enoughSpeed = true
    
    topLeftToBottomRight(toOffset, fromOffset, facing, offset => {
      let pos = event.altar.blockPos.offset(offset)
      let be = level.getBlockEntity(pos)
      if (be instanceof $MechanicalCrafterBlockEntity) {
        if (enoughSpeed) {
          enoughSpeed = Math.abs(be.getSpeed()) > 0
        }
        let capability = level.getCapability($ItemHandler.BLOCK, pos, null)
        if (capability != null) {
          if (pos.equals(targetPos)) {
            let item = event.recipeInfo.recipe.outputs().displayOutputs().getFirst()
            inputStacks.add(item)
          } else {
            inputStacks.add(capability.getStackInSlot(0))
          }
        } else {
          inputStacks.add(Item.getEmpty())
        }
      } else {
        inputStacks.add(Item.getEmpty())
      }
    })

    let $CraftingInput = Java.loadClass("net.minecraft.world.item.crafting.CraftingInput")

    if (!enoughSpeed) {
      event.player.tell(Text.translatable("kubejs.atm.sr.crafters_not_running").red())
      event.cancel()
    }

    let matches = pattern.matches($CraftingInput.of(pattern.maxWidth, pattern.maxHeight, inputStacks))
    if (!matches) {
      event.player.tell(Text.translatable("kubejs.atm.sr.recipe_not_ready").red())
      event.cancel()
    }
  } else {
    event.player.tell(Text.translatable("kubejs.atm.sr.create_recipe_check_error").red())
    event.cancel()
  }
}

function completeImbuedPokemonEgg(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  let eggSlotOffset = event.queryBlockPattern("imbued_egg_slot")[0]
  let be = event.altar.level.getBlockEntity(event.altar.blockPos.offset(eggSlotOffset))
  if (be != null) {
    if (be instanceof $MechanicalCrafterBlockEntity) {
      let capability = event.altar.level.getCapability($ItemHandler.BLOCK, be.blockPos, null)
      if (capability != null) {
        let output = Item.of('allthemons:imbued_pokemon_egg')
        $EntityFollowProjectile.spawn(event.altar.level, event.altar.blockPos.offset([0, 1, 0]), be.getBlockPos())
        setTimeout(() => {
          let remainder = $ItemHandlerHelper.insertItem(capability, output.copy(), false);
          if (remainder.count == output.count) {
            event.altar.spawnItemAboveAltar('allthemons:pokemon_egg[allthemons:features=["atm"],allthemons:species="cobblemon:staryu"]')
            event.altar.spawnItemAboveAltar('allthetweaks:patrick_star')
          } else {
            let lightningbolt = event.player.entityType.LIGHTNING_BOLT.create(event.altar.level);
            if (lightningbolt != null) {
              lightningbolt.moveTo(be.blockPos);
              lightningbolt.setVisualOnly(true);
              event.altar.level.addFreshEntity(lightningbolt);
            }
            event.player.unlockAdvancement("allthemons:imbued_egg")
          }
        }, 1000);
        return
      }
    }
  }
  event.altar.spawnItemAboveAltar('allthemons:pokemon_egg[allthemons:features=["atm"],allthemons:species="cobblemon:staryu"]')
  event.altar.spawnItemAboveAltar('allthetweaks:patrick_star')
}

function topLeftToBottomRight(minOffset, maxOffset, facing, callback){
  if (Direction.NORTH == facing) {
    for (let z = minOffset[2]; z <= maxOffset[2]; z++) {
      for (let y = maxOffset[1]; y >= minOffset[1]; y--) {
        for (let x = maxOffset[0]; x >= minOffset[0]; x--) {
          callback([x,y,z])
        }
      }
    }
  } else if (Direction.EAST == facing) {
    for (let x = minOffset[0]; x <= maxOffset[0]; x++) {
      for (let y = maxOffset[1]; y >= minOffset[1]; y--) {
        for (let z = maxOffset[2]; z >= minOffset[2]; z--) {
          callback([x,y,z])
        }
      }
    }
  } else if (Direction.SOUTH == facing) {
    for (let z = minOffset[2]; z <= maxOffset[2]; z++) {
      for (let y = maxOffset[1]; y >= minOffset[1]; y--) {
        for (let x = minOffset[0]; x <= maxOffset[0]; x++) {
          callback([x,y,z])
        }
      }
    }
  } else if (Direction.WEST == facing) {
    for (let x = minOffset[0]; x <= maxOffset[0]; x++) {
      for (let y = maxOffset[1]; y >= minOffset[1]; y--) {
        for (let z = minOffset[2]; z <= maxOffset[2]; z++) {
          callback([x,y,z])
        }
      }
    }
  }
}
