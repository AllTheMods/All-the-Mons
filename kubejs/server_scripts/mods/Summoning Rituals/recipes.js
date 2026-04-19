import { $BlockPos } from "net.minecraft.core.BlockPos"

ServerEvents.recipes(event => {
  event.recipes.kubejs.shaped("summoningrituals:altar",["CSC","CEC","UTV"],{
    "C": "#minecraft:candles",
    "S": "minecraft:wither_skeleton_skull",
    "E": "minecraft:enchanting_table",
    "U": "allthemodium:unobtainium_vibranium_alloy_block",
    "V": "allthemodium:vibranium_allthemodium_alloy_block",
    "T": "minecraft:crafting_table"
  }).id("allthemons:summoning_ritual_altar")
  
  event.recipes.summoningrituals.altar(Ingredient.withData("allthemons:pika_star", {}, true))
    .itemInputs([
      "cobblemon:ancient_origin_ball",
      "allthemons:ancient_vibranium_ball",
      "allthemons:ancient_unobtainium_ball",
      "allthemons:ancient_allthemodium_ball"
    ])
    .entityInputZone([5, 3, 5])
    .ticks(240)
    .blockPattern(pattern => {
        pattern
          .name("Statues and display cases filled with Mega Stones")
          // .block([0,0,-3],"cobblefurnies:statue_pikachu")
          // //.block([0,1,-3],"cobblefurnies:statue_pikachu", {"facing":"south","half":"upper"})
          // .block([0,0,3],"cobblefurnies:statue_charmander")
          // //.block([0,1,3],"cobblefurnies:statue_charmander", {"facing":"north","half":"upper"})
          // .block([-3,0,0],"cobblefurnies:statue_bulbasaur")
          // //.block([-3,1,0],"cobblefurnies:statue_bulbasaur", {"facing":"east","half":"upper"})
          // .block([3,0,0],"cobblefurnies:statue_ancient")
          // //.block([3,1,0],"cobblefurnies:statue_ancient", {"facing":"west","half":"upper"})
          .block([0, 0, -3], "cobblefurnies:statue_pikachu", { "facing": "south", "half": "lower" })
          //.block([0,1,-3],"cobblefurnies:statue_pikachu", {"facing":"south","half":"upper"})
          .block([0, 0, 3], "cobblefurnies:statue_charmander", { "facing": "north", "half": "lower" })
          //.block([0,1,3],"cobblefurnies:statue_charmander", {"facing":"north","half":"upper"})
          .block([-3, 0, 0], "cobblefurnies:statue_bulbasaur", { "facing": "east", "half": "lower" })
          //.block([-3,1,0],"cobblefurnies:statue_bulbasaur", {"facing":"east","half":"upper"})
          .block([3, 0, 0], "cobblefurnies:statue_squirtle", { "facing": "west", "half": "lower" })
          //.block([3,1,0],"cobblefurnies:statue_ancient", {"facing":"west","half":"upper"})
          // .queryableBlock([0, 0, 2], "cobblemon:display_case", "mega_stones_inv_test")
          .queryableBlock([2, 0, 2], "cobblemon:display_case", "mega_stones_inv")
          .queryableBlock([-2, 0, 2], "cobblemon:display_case", "mega_stones_inv")
          .queryableBlock([2, 0, -2], "cobblemon:display_case", "mega_stones_inv")
          .queryableBlock([-2, 0, -2], "cobblemon:display_case", "mega_stones_inv")
        //.block([2,0,0],"create:mechanical_crafter",{"facing":"west"})
        //.block([-2,0,0],"minecraft:white_bed")
        return pattern
    })
    .fakeEntityInputs(
      SummoningEntity.fakeInput(`cobblemon:pokemon_model[cobblemon:pokemon_item={"species":"cobblemon:charizard","aspects":[]},custom_name='{"color":"gold","text":"6 Pokémons from same Region"}',lore=['{"color":"gray","text":"Send out all your 6 pokémons from a"}','{"color":"gray","text":"certain region to craft that regional Pika Star."}']]`, 6, e => e.type == "cobblemon:pokemon" && e.getOwner() != null)
    )
    .displayOutputs([
      "allthemons:pika_star[allthemons:region='kantonian']",
      "allthemons:pika_star[allthemons:region='johtonian']",
      "allthemons:pika_star[allthemons:region='hoennian']",
      "allthemons:pika_star[allthemons:region='sinnohan']",
      "allthemons:pika_star[allthemons:region='unovan']",
      "allthemons:pika_star[allthemons:region='kalosian']",
      "allthemons:pika_star[allthemons:region='alolan']",
      "allthemons:pika_star[allthemons:region='galarian']",
      "allthemons:pika_star[allthemons:region='hisuian']",
      "allthemons:pika_star[allthemons:region='paldean']"
    ])
    .id("allthemons:regional_pika_star")

  event.recipes.summoningrituals.altar('allthemons:pokemon_egg[allthemons:features=["atm"],allthemons:species="cobblemon:staryu"]')
    .itemInputs([
      "allthetweaks:patrick_star",
      "#create:sandpaper",
      "productivetrees:maple_syrup"
    ])
    //.entityInputZone([5,3,5])
    .ticks(240)
    //.itemOutputs(['allthemons:pokemon_egg[allthemons:features=["atm"],allthemons:species="cobblemon:staryu"]'])
    .displayOutputs(['allthemons:imbued_pokemon_egg'])
    .blockPattern(pattern => {
        pattern
          .name("Create crafters for Star Recipe")
          .block([2, 8, 3], "create:mechanical_crafter")
          .block([3, 8, 3], "create:mechanical_crafter")
          .block([4, 8, 3], "create:mechanical_crafter")
          .block([-2, 8, 3], "create:mechanical_crafter")
          .block([-3, 8, 3], "create:mechanical_crafter")
          .block([-4, 8, 3], "create:mechanical_crafter")

          .block([1, 7, 3], "create:mechanical_crafter")
          .block([2, 7, 3], "create:mechanical_crafter")
          .block([3, 7, 3], "create:mechanical_crafter")
          .block([4, 7, 3], "create:mechanical_crafter")
          .block([-1, 7, 3], "create:mechanical_crafter")
          .block([-2, 7, 3], "create:mechanical_crafter")
          .block([-3, 7, 3], "create:mechanical_crafter")
          .block([-4, 7, 3], "create:mechanical_crafter")

          .block([0, 6, 3], "create:mechanical_crafter")
          .block([1, 6, 3], "create:mechanical_crafter")
          .block([2, 6, 3], "create:mechanical_crafter")
          .block([3, 6, 3], "create:mechanical_crafter")
          .block([-1, 6, 3], "create:mechanical_crafter")
          .block([-2, 6, 3], "create:mechanical_crafter")
          .block([-3, 6, 3], "create:mechanical_crafter")

          .block([0, 5, 3], "create:mechanical_crafter")
          .block([1, 5, 3], "create:mechanical_crafter")
          .block([2, 5, 3], "create:mechanical_crafter")
          .block([-1, 5, 3], "create:mechanical_crafter")
          .block([-2, 5, 3], "create:mechanical_crafter")

          .queryableBlock([0, 4, 3], "create:mechanical_crafter", "imbued_egg_slot")
          .block([1, 4, 3], "create:mechanical_crafter")
          .block([2, 4, 3], "create:mechanical_crafter")
          .block([3, 4, 3], "create:mechanical_crafter")
          .block([-1, 4, 3], "create:mechanical_crafter")
          .block([-2, 4, 3], "create:mechanical_crafter")
          .block([-3, 4, 3], "create:mechanical_crafter")

          .block([0, 3, 3], "create:mechanical_crafter")
          .block([1, 3, 3], "create:mechanical_crafter")
          .block([2, 3, 3], "create:mechanical_crafter")
          .block([3, 3, 3], "create:mechanical_crafter")
          .block([4, 3, 3], "create:mechanical_crafter")
          .block([-1, 3, 3], "create:mechanical_crafter")
          .block([-2, 3, 3], "create:mechanical_crafter")
          .block([-3, 3, 3], "create:mechanical_crafter")
          .block([-4, 3, 3], "create:mechanical_crafter")

          .block([0, 2, 3], "create:mechanical_crafter")
          .block([1, 2, 3], "create:mechanical_crafter")
          .block([2, 2, 3], "create:mechanical_crafter")
          .block([3, 2, 3], "create:mechanical_crafter")
          .block([4, 2, 3], "create:mechanical_crafter")
          .block([-1, 2, 3], "create:mechanical_crafter")
          .block([-2, 2, 3], "create:mechanical_crafter")
          .block([-3, 2, 3], "create:mechanical_crafter")
          .block([-4, 2, 3], "create:mechanical_crafter")

          .block([0, 1, 3], "create:mechanical_crafter")
          .block([1, 1, 3], "create:mechanical_crafter")
          .block([-1, 1, 3], "create:mechanical_crafter")

          .block([0, 0, 3], "create:mechanical_crafter")
        return pattern
    })
    .id("allthemons:imbued_pokemon_egg")
})

let outputPerRecipe = Utils.newMap()
let $ItemHandler = Java.loadClass("net.neoforged.neoforge.capabilities.Capabilities$ItemHandler")
let $ItemHandlerHelper = Java.loadClass("net.neoforged.neoforge.items.ItemHandlerHelper")
let $MechanicalCrafterBlockEntity = Java.loadClass("com.simibubi.create.content.kinetics.crafter.MechanicalCrafterBlockEntity")

SummoningRituals.complete(event => {
  // let altarBlockState = event.altar.level.getBlockState(event.altar.blockPos)
  // let facing
  // for (let prop of altarBlockState.getProperties()) {
  //   if (prop.getName().equals("facing")) {
  //     facing = altarBlockState.getValue(prop)
  //   }
  // }
  // let rotation = getRotation(facing)

  if (event.recipeInfo.getRecipeId() == "allthemons:regional_pika_star") {
    let outputs = outputPerRecipe.remove(event.recipeInfo.recipe) || []
    for (let output of outputs) {
      let region = output.get("allthemons:region")
      if (region != null) {
        event.player.unlockAdvancement("allthemons:" + region.serializedName + "_pika_star")
      }
      event.altar.spawnItemAboveAltar(output)
    }
  }
  if (event.recipeInfo.getRecipeId() == "allthemons:imbued_pokemon_egg") {
    let eggSlotOffset = event.queryBlockPattern("imbued_egg_slot")[0]
    //let blockPattern = event.recipeInfo.recipe.blockPattern().get()
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
})

let $Region = Java.loadClass("net.allthemods.allthemons.util.Region")
let $EntityFollowProjectile = Java.loadClass("com.hollingsworth.arsnouveau.common.entity.EntityFollowProjectile")
let $CraftingInput = Java.loadClass("net.minecraft.world.item.crafting.CraftingInput")
let $PokedexDef = Java.loadClass("com.cobblemon.mod.common.api.pokedex.def.PokedexDef")
let $Dexes = Java.loadClass("com.cobblemon.mod.common.api.pokedex.Dexes")

// ServerEvents.basicCommand("dex_test", event => {
//   let pokemon = event.player.rayTraceEntity(ent => ent.pokemon != null)
//   if (pokemon != null) {
//     let region = getPokemonRegion(pokemon.pokemon, $Region.ALOLA)
//     event.player.tell(region)
//   }
// })

function getPokemonRegion(pokemon, fromRegion) {
  fromRegion = fromRegion != null ? "cobblemon:" + fromRegion.name().toLowerCase() : null
  let id = pokemon.species.resourceIdentifier
  let map = Utils.newMap()
  $Dexes.INSTANCE.dexEntryMap.forEach((dexId, dexEntry) => {
    if (dexEntry.typeId == "cobblemon:simple_pokedex_def") {
      if (fromRegion != null && fromRegion != dexId) return
      let list = dexEntry.entries.stream().filter(entry => entry.speciesId == id).toList()
      if (!list.isEmpty()) {
        map.computeIfAbsent(dexId, (key) => Utils.newList()).addAll(list)
      }        
    }
  })
  let formName = pokemon.form.name
  let result = null
  map.forEach((key,value) => {
    value.forEach(entry => {
      entry.getForms().forEach(form => {
        if (form.displayForm.equalsIgnoreCase(formName)) {
          result = key
        }
      })
    })
  })
  if (result != null) {
    for (let region of $Region.values()) {
      if (region.name().equalsIgnoreCase(result.getPath())){
        return region
      }
    }
  }
}

let $RCTMod = Java.loadClass("com.gitlab.srcmc.rctmod.api.RCTMod")

SummoningRituals.start(event => {
  let altarBlockState = event.altar.level.getBlockState(event.altar.blockPos)
  let facing
  for (let prop of altarBlockState.getProperties()) {
    if (prop.getName().equals("facing")) {
      facing = altarBlockState.getValue(prop)
    }
  }
  // let rotation = getRotation(facing)

  if (event.recipeInfo.getRecipeId() == "allthemons:imbued_pokemon_egg") {
    let level = event.altar.level
    let recipeOpt = level.recipeManager.byKey("allthemons:pika_star")
    if (!recipeOpt.isEmpty()) {
      
      let defeatCount = $RCTMod.getInstance().getTrainerManager().getData(event.player).getCompletedSeries().get("atm_team")
      if (defeatCount <= 0) {
        event.player.tell(Text.red("You didn't defeat ATM Series yet..."))
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

      //console.log(event.recipeInfo.recipe)

      let blockPattern = event.getTransformedBlockPattern().keySet()
      //let blockPattern = event.recipeInfo.recipe.blockPattern().get()

      blockPattern.forEach(offset => {
        //let offset = patternEntry.offset().rotate(rotation)
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
        event.player.tell(Text.red("Something is wrong with recipe, report to ATM Devs"))
        event.cancel()
      }

      let targetPos = event.altar.blockPos.offset(eggSlot[0])

      let inputStacks = Utils.newList()
      let enoughSpeed = true
      
      topLeftToBottomRight(toOffset, fromOffset, facing, offset => {
        //console.log("Offset loop is: " + offset)
        let pos = event.altar.blockPos.offset(offset)
        //console.log("Pos being tested: " + pos.toShortString())
        let be = level.getBlockEntity(pos)
        if (be instanceof $MechanicalCrafterBlockEntity) {
          if (enoughSpeed) {
            enoughSpeed = Math.abs(be.getSpeed()) > 0
          }
          let capability = level.getCapability($ItemHandler.BLOCK, pos, null)
          //console.log(capability)
          //console.log(capability.getSlots())
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



      //BlockPos.betweenClosedStream(event.altar.blockPos.offset(toOffset), event.altar.blockPos.offset(fromOffset)).forEach(pos => {

      //})

      let $CraftingInput = Java.loadClass("net.minecraft.world.item.crafting.CraftingInput")

      if (!enoughSpeed) {
        event.player.tell(Text.red("Your Create crafters are not running..."))
        event.cancel()
      }

      //console.log("Stacks: " + inputStacks)
      //console.log("Stacks Reversed: " + inputStacks.reversed())
      let matches = pattern.matches($CraftingInput.of(pattern.maxWidth, pattern.maxHeight, inputStacks))
      // if (!matches) {
      //   matches = pattern.matches($CraftingInput.of(pattern.maxWidth, pattern.maxHeight, inputStacks.reversed()))
      // }
      if (!matches) {
        event.player.tell(Text.red("Your Create recipe is not ready yet..."))
        event.cancel()
      }
    } else {
      event.player.tell(Text.red("Something very wrong occurred while checking Create recipe, report to ATM developers."))
      event.cancel()
    }
  }

  if (event.recipeInfo.getRecipeId() == "allthemons:regional_pika_star") {
    //event.player.tell("Recipe started!")
    
    let defeatCount = $RCTMod.getInstance().getTrainerManager().getData(event.player).getCompletedSeries().get("atm_team")
    if (defeatCount <= 0) {
      event.player.tell(Text.red("You didn't defeat ATM Series yet..."))
      event.cancel()
    }

    let regionToTest = null
    let validMons = 0
    event.recipeInfo.inputEntities.forEach(ent => {
      if (ent.getOwner() == event.player) {
        if (regionToTest == null) {
          regionToTest = getPokemonRegion(ent.pokemon)
          if (regionToTest != null) {
            validMons++
          }
        } else {
          if (regionToTest == getPokemonRegion(ent.pokemon, regionToTest)) {
            validMons++
          }
        }
      }
    })
    if (event.recipeInfo.inputEntities.size() != validMons) {
      if (regionToTest == null) {
        event.player.tell(Text.red("None of those pokémons are owned by you"))
      } else {
        event.player.tell(Text.red("Not all your pokémons are from region " + regionToTest))
      }
      event.cancel()
    }

    let enoughMegaStones = true
    //let blockPattern = event.recipeInfo.recipe.blockPattern().get()

    let firstPass = true
    let containers = Utils.newList()
    
    // let megaStoneInvsTest = event.queryBlockPattern("mega_stones_inv_test")
    // console.log(megaStoneInvsTest)

    let megaStoneInvs = event.queryBlockPattern("mega_stones_inv")
    if (megaStoneInvs.length != 4) {
      event.player.tell(Text.red("Something is wrong with mega stone display cases, report to ATM Devs"))
      event.cancel()
    }

    megaStoneInvs.forEach(offset => {
      //let offset = patt.offset().rotate(rotation)
      let levelBlock = event.altar.level.getBlock(event.altar.blockPos.offset(offset))
      if (levelBlock.getBlock().id == "cobblemon:display_case") {
        let be = levelBlock.getEntity()
        if (!be.hasAnyMatching(stack => stack.hasTag("mega_showdown:mega_stone"))) {
          firstPass = false
        }
        containers.add(be)
      }
    })
    if (firstPass) {
      containers.forEach(be => {
        be.removeItem(0, 1)
        $EntityFollowProjectile.spawn(event.altar.level, be.getBlockPos(), event.altar.blockPos)
      })
    } else {
      enoughMegaStones = false
    }

    if (!enoughMegaStones) {
      event.player.tell(Text.red("You don't have enough Mega Stones in the Display Cases"))
      event.cancel()
    }
    event.recipeInfo.inputEntities.clear()
    let output = Item.of(`allthemons:pika_star[allthemons:region='${regionToTest.getSerializedName()}']`)
    let component = NBT.compoundTag()
    component.putUUID("uuid", event.player.uuid)
    output.set("allthemons:uuid", NBT.toJson(component.get("uuid")))
    outputPerRecipe.put(event.recipeInfo.recipe, [output])
  }
})

function getAABB(/** @type {$BlockPos} */ bePos, /** @type {$BlockPos} */ sizePos) {
  let startBounds = bePos.offset(sizePos.multiply(-1))
  let endBounds = bePos.offset(sizePos)
  return AABB.of(startBounds.x, startBounds.y, startBounds.z, endBounds.x, endBounds.y, endBounds.z)
}

let $Rotation = Java.loadClass("net.minecraft.world.level.block.Rotation")

function getRotation(altarFacing) {
  let rotationStep
  if (Direction.NORTH == altarFacing) {
    rotationStep = 0
  } else if (Direction.EAST == altarFacing) {
    rotationStep = 1
  } else if (Direction.SOUTH == altarFacing) {
    rotationStep = 2
  } else if (Direction.WEST == altarFacing) {
    rotationStep = 3
  }
  return $Rotation.values()[rotationStep]
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