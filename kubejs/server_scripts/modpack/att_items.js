// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  // Dragon Soul
  allthemods.shaped('allthetweaks:dragon_soul', ['CDA', 'SNI', 'BGE'], {
    C: 'apothic_enchanting:infused_breath',
    D: 'occultism:soul_gem',
    A: Ingredient.of('justdirethings:creaturecatcher[justdirethings:entitytype="occultism:dragon_familiar"]').or('occultism:spawn_egg/familiar_dragon'),
    S: 'productivetrees:socotra_dragon_sapling',
    N: ['hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:ender_dragon",hostilenetworks:data=1255]', 'hostilenetworks:data_model[hostilenetworks:data_model="hostilenetworks:ender_dragon",hostilenetworks:data=1254]'],
    I: 'allthemodium:piglich_heart_block',
    B: 'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:soul_lava"}]',
	  G: 'cataclysm:abyssal_sacrifice',
    E: 'eternal_starlight:chain_of_souls'
  }).id('allthemods:allthetweaks/dragon_soul')

 // Improbable Probability Device
 allthemods.shaped('allthetweaks:improbable_probability_device', ['ABA', 'CGC', 'FDF'], {
  A: 'mekanism:pellet_antimatter',
  B: 'ae2:singularity',
  C: 'megacells:portable_item_cell_256m',
  D: 'pneumaticcraft:aerial_interface',
  F: 'ironfurnaces:million_furnace', 
  G: 'mega_showdown:zygarde_cube'
  }).id('allthemods:allthetweaks/improbable_probability_device')

  // Dimensional Seed Recipe
  allthemods.shaped('allthetweaks:dimensional_seed', ['ABC', 'DEF', 'GHI'], {
    A: 'allthecompressed:netherrack_6x',
    B: 'allthecompressed:dirt_6x',
    C: 'allthecompressed:obsidian_5x',
    D: 'allthetweaks:mini_exit',
    E: 'allthetweaks:mini_nether',
    F: 'allthetweaks:mini_end',
    G: 'allthecompressed:end_stone_5x',
    H: 'allthecompressed:emerald_block_4x',
    I: 'allthecompressed:diamond_block_4x'
  }).id('allthemods:allthetweaks/dimensional_seed')

  // Withers Compass
  allthemods.shaped('allthetweaks:withers_compass', ['ABC', 'DEF', 'GHI'], {
    A: 'productivebees:configurable_comb[productivebees:bee_type="productivebees:withered"]',
    B: 'industrialforegoing:wither_builder',
    C: 'deeperdarker:heart_of_the_deep',
    D: 'generatorgalore:netherstar_generator_64x',
    E: 'occultism:witherite_dust',
    F: 'mysticalagriculture:witherproof_bricks',
    G: 'minecraft:tipped_arrow[potion_contents={potion:"apothic_attributes:long_wither"}]',
    H: 'ars_nouveau:glyph_wither',
    I: 'mysticalagradditions:nether_star_crux'
  }).id('allthemods:allthetweaks/withers_compass')

  // Philosopher's Fuel
  allthemods.shaped('allthetweaks:philosophers_fuel', ['ABC', 'DEF', 'GHI'], {
  A: 'generatorgalore:ender_generator',
	B: 'ironfurnaces:rainbow_coal'  ,
	C: 'bigreactors:insanite_block' ,
	D: 'create:blaze_burner',
	E: 'mysticalagradditions:insanium_coal_block',
  F: 'forbidden_arcanus:smelter_prism',
	G: 'mysticalagriculture:awakened_supremium_ingot_block',
	H: 'generatorgalore:magmatic_generator_64x',
  I: 'oritech:solid_biofuel'
  }).id('allthemods:allthetweaks/philosophers_fuel')

 // Nexium Emitter
 allthemods.shaped('allthetweaks:nexium_emitter', ['A B', ' CF', 'GED'], {
  A: 'powah:player_transmitter_nitro',
  B: 'ae2wtlib:wireless_universal_terminal[ae2wtlib:has_ex_pattern_access_terminal={},ae2wtlib:has_pattern_encoding_terminal={},ae2wtlib:has_crafting_terminal={},ae2wtlib:has_pattern_access_terminal={},ae2:stored_energy=6400000.0d]',
  F: [Item.of('mekanism:module_gravitational_modulating_unit')],
  D: 'create:mechanical_arm',
  E: 'immersiveengineering:tesla_coil',
  C: 'advanced_ae:quantum_multi_threader',
  G: 'aeinfinitybooster:infinity_card'
}).id('allthemods:allthetweaks/nexium_emitter')

// Oblivion Shard
allthemods.shaped('allthetweaks:oblivion_shard', [' AB', 'DCF', 'BE '], {
  A: 'stevescarts:module_galgadorian_drill',
  B: 'forbidden_arcanus:eternal_stella',
  C: 'cataclysm:gauntlet_of_maelstrom',
  D: 'cataclysm:meat_shredder',
  E: 'mega_showdown:zygarde_cube',
  F: 'cataclysm:void_forge'
}).id('allthemods:allthetweaks/oblivion_shard')

// Pulsating Black Hole
allthemods.shaped('allthetweaks:pulsating_black_hole', ['ABC', 'DEF', 'GHI'], {
  A: 'oritech:nuke',
  B: 'ae2:quantum_ring'  ,
  C: 'pneumaticcraft:micromissiles' ,
  D: 'justdirethings:paradoxmachine',
  E: 'pocketstorage:psu_4',
  F: 'occultism:stable_wormhole',
  G: 'rootsclassic:crystal_staff',
  H: 'industrialforegoing:mycelial_explosive',
  I: 'eternal_starlight:tear_bomb'
}).id('allthemods:pressure/allthetweaks/pulsating_black_hole')

  // Creative Essence
  allthemods.shaped('mysticalagradditions:creative_essence', ['CAC', 'ABA', 'CAC'], {
    A: 'mysticalagradditions:insanium_block',
    C: 'mysticalagradditions:insanium_gemstone_block',
    B: 'mysticalagriculture:master_infusion_crystal'
  }).id('allthemods:allthetweaks/creative_essence')

})


// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
