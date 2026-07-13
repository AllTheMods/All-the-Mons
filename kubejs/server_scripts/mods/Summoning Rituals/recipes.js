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

  event.recipes.summoningrituals.altar('allthemons:pokemon_egg[allthemons:features=["atm=true"],allthemons:species="cobblemon:staryu"]')
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

  // Deoxys
  event.recipes.summoningrituals.altar('mega_showdown:deoxys_meteorite')
    .itemInputs([
      "cobblemon:power_bracer",
      "cobblemon:power_belt",
      "cobblemon:power_anklet",
      "cobblemon:power_weight"
    ])
    .ticks(400)
    .displayOutputs([
      `cobblemon:pokemon_model[cobblemon:pokemon_item={"species":"cobblemon:deoxys","aspects":[]}]`
    ])
    .blockPattern(pattern => {
      pattern
        .name(Text.translatable("kubejs.atm.sr.deoxys_structure"))
        // Deoxys base with the lit, fully-charged crystal from the minigame on top
        .block([0, 0, 4], "allthemons:deoxys_base")
        .block([0, 1, 4], "allthemons:deoxys_crystal", {"lit": true})
        // Source Jars flanking the base, with their relays above
        .block([-3, 0, 4], "ars_nouveau:source_jar")
        .block([3, 0, 4], "ars_nouveau:source_jar")
        .block([-3, 1, 4], "ars_nouveau:relay")
        .block([3, 1, 4], "ars_nouveau:relay")
        // Five 3-tall arcane crystal obelisks ringing the base
        .block([-6, 0, 5], "forbidden_arcanus:arcane_crystal_obelisk")
        .block([-6, 1, 5], "forbidden_arcanus:arcane_crystal_obelisk")
        .block([-6, 2, 5], "forbidden_arcanus:arcane_crystal_obelisk")
        .block([-4, 0, 8], "forbidden_arcanus:arcane_crystal_obelisk")
        .block([-4, 1, 8], "forbidden_arcanus:arcane_crystal_obelisk")
        .block([-4, 2, 8], "forbidden_arcanus:arcane_crystal_obelisk")
        .block([0, 0, 9], "forbidden_arcanus:arcane_crystal_obelisk")
        .block([0, 1, 9], "forbidden_arcanus:arcane_crystal_obelisk")
        .block([0, 2, 9], "forbidden_arcanus:arcane_crystal_obelisk")
        .block([4, 0, 8], "forbidden_arcanus:arcane_crystal_obelisk")
        .block([4, 1, 8], "forbidden_arcanus:arcane_crystal_obelisk")
        .block([4, 2, 8], "forbidden_arcanus:arcane_crystal_obelisk")
        .block([6, 0, 6], "forbidden_arcanus:arcane_crystal_obelisk")
        .block([6, 1, 6], "forbidden_arcanus:arcane_crystal_obelisk")
        .block([6, 2, 6], "forbidden_arcanus:arcane_crystal_obelisk")
      return pattern
    })
    .id("allthemons:deoxys")

    event.recipes.summoningrituals.altar(Ingredient.of("sgearmetalworks:ring_cast"))
        .itemInputs([
            "morered:red_network_cable",
            "reliquary:salamander_eye",
            "industrialforegoing:black_laser_lens"
        ])
        .ticks(120)
        .displayOutputs([
            `cobblemon:pokemon_model[cobblemon:pokemon_item={"species":"cobblemon:meltan","aspects":[]}]`
        ])
        .blockPattern(pattern => {
            pattern
                .tag([1, 0, 2], "productivemetalworks:foundry_drains")
                .tag([0, 0, 2], "productivemetalworks:foundry_controllers")
                .tag([-1, 0, 2], "productivemetalworks:foundry_drains")
            return pattern
        })
        .id("allthemons:meltan")

    event.recipes.summoningrituals.altar(Ingredient.of("cobblemon:metal_coat"))
        .itemInputs([
            "allthemodium:soul_lava_bucket",
            "allthemodium:soul_lava_bucket",
            "allthemodium:soul_lava_bucket"
        ])
        .entityInputZone([5, 3, 5])
        .ticks(240)
        .fakeEntityInputs(
            SummoningEntity.fakeInput(`cobblemon:pokemon_model[cobblemon:pokemon_item={"species":"cobblemon:meltan","aspects":[]},custom_name='{"color":"gold","translate":"kubejs.atm.sr.melmetal_req_name"}',lore=['{"color":"gray","translate":"kubejs.atm.sr.melmetal_req_lore1"}']]`, 6, e => e.type == "cobblemon:pokemon" && e.getOwner() != null)
        )
        .displayOutputs([
            `cobblemon:pokemon_model[cobblemon:pokemon_item={"species":"cobblemon:melmetal","aspects":[]}]`
        ])
        .blockPattern(pattern => {
            pattern
                .block([0, -1, 0], "productivemetalworks:high_powered_heating_coil", {"attached": true})
                .block([0, -1, 1], "productivemetalworks:high_powered_heating_coil", {"attached": true})
                .block([0, -1, -1], "productivemetalworks:high_powered_heating_coil", {"attached": true})
                .block([1, -1, 0], "productivemetalworks:high_powered_heating_coil", {"attached": true})
                .block([-1, -1, 0], "productivemetalworks:high_powered_heating_coil", {"attached": true})
                .block([1, -1, 1], "productivemetalworks:high_powered_heating_coil", {"attached": true})
                .block([1, -1, -1], "productivemetalworks:high_powered_heating_coil", {"attached": true})
                .block([-1, -1, 1], "productivemetalworks:high_powered_heating_coil", {"attached": true})
                .block([-1, -1, -1], "productivemetalworks:high_powered_heating_coil", {"attached": true})
            return pattern
        })
        .id("allthemons:melmetal")

    event.recipes.summoningrituals.altar('productivebees:spawn_egg_configurable_bee[minecraft:entity_data={id:"productivebees:configurable_bee",type:"productivebees:diamond"}]')
        .itemInputs([
            "bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost",
            "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "stellar", "water"
        ].map(type => `mega_showdown:${type}_tera_shard`))
        .itemOutputs(['productivebees:spawn_egg_configurable_bee[minecraft:entity_data={id:"productivebees:configurable_bee",type:"productivebees:terabeegos"}]'])
        .ticks(200)
        .id("allthemons:terabeegos")

    event.recipes.summoningrituals.altar(Ingredient.of("cobblemon:life_orb"))
        .itemInputs([
            "bhc:blue_heart",
            "bhc:yellow_heart",
            "bhc:red_heart",
            "bhc:green_heart"
        ])
        .ticks(200)
        .displayOutputs([
            `cobblemon:pokemon_model[cobblemon:pokemon_item={"species":"cobblemon:terapagos","aspects":[]}]`
        ])
        .blockPattern(pattern => {
            pattern
                .block([-1, 0, 3], "extendedae:entro_cluster", {"facing": "north"})
                .block([-1, 0, 4], "productivemetalworks:meat_block")
                .block([-1, 0, 5], "extendedae:entro_cluster", {"facing": "north"})
                .block([-1, 0, 6], "productivemetalworks:meat_block")
                .block([-1, 2, 3], "pneumaticcraft:wall_lamp_inverted_gray", {"facing": "west"})
                .block([0, 1, 4], "productivemetalworks:meat_block")
                .block([0, 1, 5], "allthemons:terapagos_crystal", {"axis": "x"})
                .block([0, 2, 3], "productivemetalworks:meat_block")
                .block([0, 2, 4], "justdirethings:time_crystal_cluster", {"facing": "south"})
                .block([1, 0, 3], "extendedae:entro_cluster", {"facing": "north"})
                .block([1, 0, 4], "productivemetalworks:meat_block")
                .block([1, 0, 5], "extendedae:entro_cluster", {"facing": "north"})
                .block([1, 0, 6], "productivemetalworks:meat_block")
                .block([1, 2, 3], "pneumaticcraft:wall_lamp_inverted_gray", {"facing": "east"})
            return pattern
        })
        .id("allthemons:terapagos")

    event.recipes.summoningrituals.altar(Ingredient.of("mysticalagriculture:mystical_fertilizer"))
        .itemInputs([
            "reliquary:fortune_coin",
            "minecraft:rabbit_foot"
        ])
        .itemOutputs(["allthemons:mythical_pecha_berry"])
        .ticks(200)
        .blockPattern(pattern => {
            pattern
                .block([0, 0, -2], "cobblemon:pecha_berry", {"age": 5})
                .block([0, 0, 2], "cobblemon:pecha_berry", {"age": 5})
                .block([2, 0, 0], "cobblemon:pecha_berry", {"age": 5})
                .block([-2, 0, 0], "cobblemon:pecha_berry", {"age": 5})
                .block([2, 0, -2], "cobblemon:pecha_berry", {"age": 5})
                .block([-2, 0, -2], "cobblemon:pecha_berry", {"age": 5})
                .block([2, 0, 2], "cobblemon:pecha_berry", {"age": 5})
                .block([-2, 0, 2], "cobblemon:pecha_berry", {"age": 5})
            return pattern
        })
        .id("allthemons:mythical_pecha_berry")

    // Shiny Pika Star — activated by an unbound Pika Star. Extra gates are in events/shiny_pika_star.js.
    event.recipes.summoningrituals.altar(Ingredient.withData("allthemons:pika_star", {}, true))
        .itemInputs([
            "cobblemon:light_ball",
            "cobblemon:thunder_stone",
            "allthemodium:unobtainium_vibranium_alloy_ingot",
            "cobblemon:master_ball"
        ])
        .itemOutputs(["allthemons:shiny_pika_star"])
        .ticks(1202)
        .blockPattern(pattern => {
            pattern
                .name(Text.translatable("kubejs.atm.sr.shiny_pika_star_structure"))
                // Pikachu statues at the corners
                .block([-4, 0, -4], "cobblefurnies:statue_pikachu")
                .block([-4, 1, -4], "cobblefurnies:statue_pikachu")
                .block([-4, 0, 4], "cobblefurnies:statue_pikachu")
                .block([-4, 1, 4], "cobblefurnies:statue_pikachu")
                .block([4, 0, -4], "cobblefurnies:statue_pikachu")
                .block([4, 1, -4], "cobblefurnies:statue_pikachu")
                .block([4, 0, 4], "cobblefurnies:statue_pikachu")
                .block([4, 1, 4], "cobblefurnies:statue_pikachu")
                // Display cases on the edges (contents checked in the event, not consumed)
                .queryableBlock([-4, 1, -2], "cobblemon:display_case", "pika_star_cases")
                .queryableBlock([-4, 1, 0], "cobblemon:display_case", "pika_star_cases")
                .queryableBlock([-4, 1, 2], "cobblemon:display_case", "pika_star_cases")
                .queryableBlock([-2, 1, -4], "cobblemon:display_case", "pika_star_cases")
                .queryableBlock([0, 1, -4], "cobblemon:display_case", "pika_star_cases")
                .queryableBlock([2, 1, -4], "cobblemon:display_case", "pika_star_cases")
                .queryableBlock([-2, 1, 4], "cobblemon:display_case", "pika_star_cases")
                .queryableBlock([0, 1, 4], "cobblemon:display_case", "pika_star_cases")
                .queryableBlock([2, 1, 4], "cobblemon:display_case", "pika_star_cases")
                .queryableBlock([4, 1, -2], "cobblemon:display_case", "pika_star_cases")
                .queryableBlock([4, 1, 0], "cobblemon:display_case", "pika_star_cases")
                .queryableBlock([4, 1, 2], "cobblemon:display_case", "pika_star_cases")
                // Note blocks under each case
                .block([-4, 0, -2], "minecraft:note_block")
                .block([-4, 0, 0], "minecraft:note_block")
                .block([-4, 0, 2], "minecraft:note_block")
                .block([-2, 0, -4], "minecraft:note_block")
                .block([0, 0, -4], "minecraft:note_block")
                .block([2, 0, -4], "minecraft:note_block")
                .block([-2, 0, 4], "minecraft:note_block")
                .block([0, 0, 4], "minecraft:note_block")
                .block([2, 0, 4], "minecraft:note_block")
                .block([4, 0, -2], "minecraft:note_block")
                .block([4, 0, 0], "minecraft:note_block")
                .block([4, 0, 2], "minecraft:note_block")
            return pattern
        })
        .id("allthemons:shiny_pika_star")

    // Magearna
    event.recipes.summoningrituals.altar(Ingredient.of("forbidden_arcanus:enchanted_soul"))
        .itemInputs([
            "ars_technica:mark_of_technomancy"
        ])
        .entityInputZone([5, 3, 5])
        .ticks(300)
        .fakeEntityInputs(
            SummoningEntity.fakeInput(`cobblemon:pokemon_model[cobblemon:pokemon_item={"species":"cobblemon:volcanion","aspects":[]},custom_name='{"color":"gold","translate":"kubejs.atm.sr.magearna_req_name"}',lore=['{"color":"gray","translate":"kubejs.atm.sr.magearna_req_lore1"}']]`, 1, e => e.type == "cobblemon:pokemon" && e.getOwner() != null && e.pokemon.species.resourceIdentifier == "cobblemon:volcanion")
        )
        .displayOutputs([
            `cobblemon:pokemon_model[cobblemon:pokemon_item={"species":"cobblemon:magearna","aspects":[]}]`
        ])
        .blockPattern(pattern => {
            pattern
                .name(Text.translatable("kubejs.atm.sr.magearna_structure"))
                .block([-1, 2, 3], "minecraft:gold_block")
                .block([0, 2, 3], "minecraft:gold_block")
                .block([1, 2, 3], "minecraft:gold_block")
                .block([-1, 3, 3], "minecraft:gold_block")
                .block([0, 3, 3], "alltheores:silver_block")
                .block([1, 3, 3], "minecraft:gold_block")
                .block([-1, 4, 3], "minecraft:gold_block")
                .block([0, 4, 3], "minecraft:gold_block")
                .block([1, 4, 3], "minecraft:gold_block")
                .block([-1, 1, 4], "alltheores:silver_block")
                .block([0, 1, 4], "alltheores:silver_block")
                .block([1, 1, 4], "alltheores:silver_block")
                .block([-2, 2, 4], "alltheores:silver_block")
                .block([-1, 2, 4], "sgearmetalworks:uru_metal_block")
                .block([0, 2, 4], "sgearmetalworks:uru_metal_block")
                .block([1, 2, 4], "sgearmetalworks:uru_metal_block")
                .block([2, 2, 4], "alltheores:silver_block")
                .block([-2, 3, 4], "alltheores:silver_block")
                .block([-1, 3, 4], "sgearmetalworks:uru_metal_block")
                .block([0, 3, 4], "sgearmetalworks:uru_metal_block")
                .block([1, 3, 4], "sgearmetalworks:uru_metal_block")
                .block([2, 3, 4], "alltheores:silver_block")
                .block([-2, 4, 4], "alltheores:silver_block")
                .block([-1, 4, 4], "sgearmetalworks:uru_metal_block")
                .block([0, 4, 4], "sgearmetalworks:uru_metal_block")
                .block([1, 4, 4], "sgearmetalworks:uru_metal_block")
                .block([2, 4, 4], "alltheores:silver_block")
                .block([-1, 5, 4], "alltheores:silver_block")
                .block([0, 5, 4], "alltheores:silver_block")
                .block([1, 5, 4], "alltheores:silver_block")
                .block([-1, 0, 5], "alltheores:silver_block")
                .block([0, 0, 5], "alltheores:silver_block")
                .block([1, 0, 5], "alltheores:silver_block")
                .block([-2, 1, 5], "alltheores:silver_block")
                .block([-1, 1, 5], "sgearmetalworks:uru_metal_block")
                .block([0, 1, 5], "sgearmetalworks:uru_metal_block")
                .block([1, 1, 5], "sgearmetalworks:uru_metal_block")
                .block([2, 1, 5], "alltheores:silver_block")
                .block([-3, 2, 5], "alltheores:silver_block")
                .block([-2, 2, 5], "sgearmetalworks:uru_metal_block")
                .block([2, 2, 5], "sgearmetalworks:uru_metal_block")
                .block([3, 2, 5], "alltheores:silver_block")
                .block([-3, 3, 5], "alltheores:silver_block")
                .block([-2, 3, 5], "sgearmetalworks:uru_metal_block")
                .block([2, 3, 5], "sgearmetalworks:uru_metal_block")
                .block([3, 3, 5], "alltheores:silver_block")
                .block([-3, 4, 5], "alltheores:silver_block")
                .block([-2, 4, 5], "sgearmetalworks:uru_metal_block")
                .block([2, 4, 5], "sgearmetalworks:uru_metal_block")
                .block([3, 4, 5], "alltheores:silver_block")
                .block([-2, 5, 5], "alltheores:silver_block")
                .block([-1, 5, 5], "sgearmetalworks:uru_metal_block")
                .block([0, 5, 5], "sgearmetalworks:uru_metal_block")
                .block([1, 5, 5], "sgearmetalworks:uru_metal_block")
                .block([2, 5, 5], "alltheores:silver_block")
                .block([-1, 6, 5], "alltheores:silver_block")
                .block([0, 6, 5], "alltheores:silver_block")
                .block([1, 6, 5], "alltheores:silver_block")
                .block([-1, 0, 6], "alltheores:silver_block")
                .block([0, 0, 6], "alltheores:silver_block")
                .block([1, 0, 6], "alltheores:silver_block")
                .block([-2, 1, 6], "alltheores:silver_block")
                .block([-1, 1, 6], "sgearmetalworks:uru_metal_block")
                .block([0, 1, 6], "sgearmetalworks:uru_metal_block")
                .block([1, 1, 6], "sgearmetalworks:uru_metal_block")
                .block([2, 1, 6], "alltheores:silver_block")
                .block([-3, 2, 6], "alltheores:silver_block")
                .block([-2, 2, 6], "sgearmetalworks:uru_metal_block")
                .block([2, 2, 6], "sgearmetalworks:uru_metal_block")
                .block([3, 2, 6], "alltheores:silver_block")
                .block([-3, 3, 6], "alltheores:silver_block")
                .block([-2, 3, 6], "sgearmetalworks:uru_metal_block")
                .block([0, 3, 6], "allthemons:soul_heart_mechanism")
                .block([2, 3, 6], "sgearmetalworks:uru_metal_block")
                .block([3, 3, 6], "alltheores:silver_block")
                .block([-3, 4, 6], "alltheores:silver_block")
                .block([-2, 4, 6], "sgearmetalworks:uru_metal_block")
                .block([2, 4, 6], "sgearmetalworks:uru_metal_block")
                .block([3, 4, 6], "alltheores:silver_block")
                .block([-2, 5, 6], "alltheores:silver_block")
                .block([-1, 5, 6], "sgearmetalworks:uru_metal_block")
                .block([0, 5, 6], "sgearmetalworks:uru_metal_block")
                .block([1, 5, 6], "sgearmetalworks:uru_metal_block")
                .block([2, 5, 6], "alltheores:silver_block")
                .block([-1, 6, 6], "alltheores:silver_block")
                .block([0, 6, 6], "alltheores:silver_block")
                .block([1, 6, 6], "alltheores:silver_block")
                .block([-1, 0, 7], "alltheores:silver_block")
                .block([0, 0, 7], "alltheores:silver_block")
                .block([1, 0, 7], "alltheores:silver_block")
                .block([-2, 1, 7], "alltheores:silver_block")
                .block([-1, 1, 7], "sgearmetalworks:uru_metal_block")
                .block([0, 1, 7], "sgearmetalworks:uru_metal_block")
                .block([1, 1, 7], "sgearmetalworks:uru_metal_block")
                .block([2, 1, 7], "alltheores:silver_block")
                .block([-3, 2, 7], "alltheores:silver_block")
                .block([-2, 2, 7], "sgearmetalworks:uru_metal_block")
                .block([2, 2, 7], "sgearmetalworks:uru_metal_block")
                .block([3, 2, 7], "alltheores:silver_block")
                .block([-3, 3, 7], "alltheores:silver_block")
                .block([-2, 3, 7], "sgearmetalworks:uru_metal_block")
                .block([2, 3, 7], "sgearmetalworks:uru_metal_block")
                .block([3, 3, 7], "alltheores:silver_block")
                .block([-3, 4, 7], "alltheores:silver_block")
                .block([-2, 4, 7], "sgearmetalworks:uru_metal_block")
                .block([2, 4, 7], "sgearmetalworks:uru_metal_block")
                .block([3, 4, 7], "alltheores:silver_block")
                .block([-2, 5, 7], "alltheores:silver_block")
                .block([-1, 5, 7], "sgearmetalworks:uru_metal_block")
                .block([0, 5, 7], "sgearmetalworks:uru_metal_block")
                .block([1, 5, 7], "sgearmetalworks:uru_metal_block")
                .block([2, 5, 7], "alltheores:silver_block")
                .block([-1, 6, 7], "alltheores:silver_block")
                .block([0, 6, 7], "alltheores:silver_block")
                .block([1, 6, 7], "alltheores:silver_block")
                .block([-1, 1, 8], "alltheores:silver_block")
                .block([0, 1, 8], "alltheores:silver_block")
                .block([1, 1, 8], "alltheores:silver_block")
                .block([-2, 2, 8], "alltheores:silver_block")
                .block([-1, 2, 8], "sgearmetalworks:uru_metal_block")
                .block([0, 2, 8], "sgearmetalworks:uru_metal_block")
                .block([1, 2, 8], "sgearmetalworks:uru_metal_block")
                .block([2, 2, 8], "alltheores:silver_block")
                .block([-2, 3, 8], "alltheores:silver_block")
                .block([-1, 3, 8], "sgearmetalworks:uru_metal_block")
                .block([0, 3, 8], "sgearmetalworks:uru_metal_block")
                .block([1, 3, 8], "sgearmetalworks:uru_metal_block")
                .block([2, 3, 8], "alltheores:silver_block")
                .block([-2, 4, 8], "alltheores:silver_block")
                .block([-1, 4, 8], "sgearmetalworks:uru_metal_block")
                .block([0, 4, 8], "sgearmetalworks:uru_metal_block")
                .block([1, 4, 8], "sgearmetalworks:uru_metal_block")
                .block([2, 4, 8], "alltheores:silver_block")
                .block([-1, 5, 8], "alltheores:silver_block")
                .block([0, 5, 8], "alltheores:silver_block")
                .block([1, 5, 8], "alltheores:silver_block")
                .block([-1, 2, 9], "alltheores:silver_block")
                .block([0, 2, 9], "alltheores:silver_block")
                .block([1, 2, 9], "alltheores:silver_block")
                .block([-1, 3, 9], "alltheores:silver_block")
                .block([0, 3, 9], "alltheores:silver_block")
                .block([1, 3, 9], "alltheores:silver_block")
                .block([-1, 4, 9], "alltheores:silver_block")
                .block([0, 4, 9], "alltheores:silver_block")
                .block([1, 4, 9], "alltheores:silver_block")
            return pattern
        })
        .id("allthemons:magearna")
})
