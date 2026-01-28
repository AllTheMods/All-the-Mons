// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove({type: "minecraft:crafting_shaped", output: "#cobblemon:poke_balls"})
    // allthemods.shaped('cobblemon:master_ball', ['EBE', 'BUB', 'NNN'], {
    //     U: 'allthemons:unobtainium_ball',
    //     B: 'allthemons:soul_lava_ball',
    //     E: 'allthemons:vibranium_ball',
    //     N: 'allthemons:allthemodium_ball'
    // }).id('cobblemon:master_ball')
    allthemods.remove("createmonballsoverhaul:sequenced_assembly/balls/master_ball")
    allthemods.remove("createmonballsoverhaul:sequenced_assembly/balls/ancient_origin_ball")
})

ServerEvents.recipes(event => {event.shaped(
    Item.of('cobblemon:poke_ball', 1),
 ['AB ', 'DEF', 'GH '], {
    A:'cobblemon:red_apricorn',
    B:'minecraft:iron_ingot',

    D:'cobblemon:red_apricorn',
    E:'minecraft:iron_ingot',
    F:'minecraft:stone_button',
    G:'cobblemon:red_apricorn',
    H:'minecraft:iron_ingot',
})})

ServerEvents.recipes(event => {event.shaped(
     Item.of('cobblemon:great_ball', 1), ['AB ', 'DEF', 'GH '],  {
    A:'cobblemon:blue_apricorn',
    B:'minecraft:gold_ingot',
 
    D:'cobblemon:blue_apricorn',
    E:'minecraft:gold_ingot',
    F:'minecraft:stone_button',
    G:'cobblemon:blue_apricorn',
    H:'minecraft:gold_ingot',
 })})

ServerEvents.recipes(event => {event.shaped(
     Item.of('cobblemon:ultra_ball', 1), ['AB ', 'DEF', 'GH '], {
    A:'cobblemon:yellow_apricorn',
    B:'minecraft:diamond',
 
    D:'cobblemon:yellow_apricorn',
    E:'minecraft:diamond',
    F:'minecraft:stone_button',
    G:'cobblemon:yellow_apricorn',
    H:'minecraft:diamond',
})})

ServerEvents.recipes(event => {event.shaped(
     Item.of('cobblemon:master_ball', 1), ['ABC', 'DEF', 'GHI'], {
    A:'allthemons:allthemodium_apricorn',
    B:'allthemodium:vibranium_allthemodium_alloy_ingot',
    C:'mysticalagriculture:awakened_supremium_ingot',
    D:'allthemons:vibranium_apricorn',
    E:'allthemodium:unobtainium_allthemodium_alloy_ingot',
    F:'minecraft:stone_button',
    G:'allthemons:unobtainium_apricorn',
    H:'allthemodium:unobtainium_vibranium_alloy_ingot',
    I:'draconicevolution:awakened_draconium_ingot',
})})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
