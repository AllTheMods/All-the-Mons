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
        .name(Text.translatable("kubejs.atm.sr.mega_stones_statues"))
        .block([0, 0, -3], "cobblefurnies:statue_pikachu", { "facing": "south", "half": "lower" })
        .block([0, 0, 3], "cobblefurnies:statue_charmander", { "facing": "north", "half": "lower" })
        .block([-3, 0, 0], "cobblefurnies:statue_bulbasaur", { "facing": "east", "half": "lower" })
        .block([3, 0, 0], "cobblefurnies:statue_squirtle", { "facing": "west", "half": "lower" })
        .queryableBlock([2, 0, 2], "cobblemon:display_case", "mega_stones_inv")
        .queryableBlock([-2, 0, 2], "cobblemon:display_case", "mega_stones_inv")
        .queryableBlock([2, 0, -2], "cobblemon:display_case", "mega_stones_inv")
        .queryableBlock([-2, 0, -2], "cobblemon:display_case", "mega_stones_inv")
      return pattern
    })
    .fakeEntityInputs(
      SummoningEntity.fakeInput(`cobblemon:pokemon_model[cobblemon:pokemon_item={"species":"cobblemon:charizard","aspects":[]},custom_name='{"color":"gold","translate":"kubejs.atm.sr.pika_star_req_name"}',lore=['{"color":"gray","translate":"kubejs.atm.sr.pika_star_req_lore1"}','{"color":"gray","translate":"kubejs.atm.sr.pika_star_req_lore2"}']]`, 6, e => e.type == "cobblemon:pokemon" && e.getOwner() != null)
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
    .ticks(240)
    .displayOutputs(['allthemons:imbued_pokemon_egg'])
    .blockPattern(pattern => {
        pattern
          .name(Text.translatable("kubejs.atm.sr.crafters_for_star"))
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

  event.recipes.summoningrituals.altar('allthemons:ancient_dna_sample')
    .itemInputs([
      "oritech:plutonium_pellet"
    ])
    .ticks(360)
    .displayOutputs(['allthemons:deoxys_crystal'])
    .conditions(cond => cond.biomes("eternal_starlight:ether_river"))
    .blockPattern(pattern => {
        pattern
          .block([0, -1, 0], "utilitarian:magnet")
          .block([0, -1, 1], "utilitarian:magnet")
          .block([0, -1, -1], "utilitarian:magnet")
          .block([1, -1, 0], "utilitarian:magnet")
          .block([-1, -1, 0], "utilitarian:magnet")
          .block([1, -1, 1], "utilitarian:magnet")
          .block([1, -1, -1], "utilitarian:magnet")
          .block([-1, -1, 1], "utilitarian:magnet")
          .block([-1, -1, -1], "utilitarian:magnet")
        return pattern
    })
    .id("allthemons:deoxys_crystal")
})
