// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ItemEvents.modifyTooltips(allthemods => {

    //AllTheModium

    allthemods.add(['allthemodium:allthemodium_ore', 'allthemodium:allthemodium_slate_ore'],[
        Text.of('§7Needs at least Netherite to be mined'),
        Text.of('§6Found in the Deep Dark Biome and will always spawn air exposed'),
        Text.of('§6Also found in the Deep Slate Layer of Mining Dimension')
    ])
    allthemods.add(['allthemodium:vibranium_ore', 'allthemodium:other_vibranium_ore'],[
        Text.of('§7Needs at least AllTheModium to be mined'),
        Text.of('§bFound in any Nether biome'),
        Text.of('§bAlso found in The Other')
    ])
    allthemods.add('allthemodium:unobtainium_ore',[
        Text.of('§7Needs at least Vibranium to be mined'),
        Text.of('§dFound in the End Highlands')
    ])

    allthemods.add('kubejs:silent_allthemodium_plate',[
        Text.of("§7§oIt's less... talkative now")
    ])
    allthemods.add('kubejs:silent_vibranium_plate',[
        Text.of("§7§oIt's less... talkative now")
    ])
    allthemods.add('kubejs:silent_unobtainium_plate',[
        Text.of("§7§oIt's less... talkative now")
    ])

    allthemods.add('allthemodium:allthemodium_ingot',[
        Text.of("§7§oThese arent the ingots you are looking for"),
        Text.of("§6Look for the [Silent Allthemodium Plate]")
    ])
    allthemods.add('allthemodium:vibranium_ingot',[
        Text.of("§7§oThese arent the ingots you are looking for"),
        Text.of("§6Look for the [Silent Vibranium Plate]")
    ])
    allthemods.add('allthemodium:unobtainium_ingot',[
        Text.of("§7§oThese arent the ingots you are looking for"),
        Text.of("§6Look for the [Silent Unobtainium Plate]")
    ])


    allthemods.add('allthemodium:allthemodium_upgrade_smithing_template',[
        Text.of('§6Found in Suspicious Clay in Ancient Cities')
    ])
    allthemods.add('allthemodium:vibranium_upgrade_smithing_template',[
        Text.of('§bFound in Suspicious Soul Sand in Bastions')
    ])
    allthemods.add('allthemodium:unobtainium_upgrade_smithing_template',[
        Text.of('§dDropped by the Trial Spawner in the Library of the Dungeon within The Other')
    ])
	// All The Mons
	allthemods.add('allthemons:pokemon_egg[allthemons:features=["atm"],allthemons:species="cobblemon:staryu"]',[
        Text.of("§6Patrickyu Variant"),
    ])

    //Forbidden Arcanus
    allthemods.add('forbidden_arcanus:hephaestus_forge_tier_1',[
        Text.of("§c§lShift-Right-Click§r§c the §c§lSmithing Table§r§c with §lMundabitur Dust"),
        Text.of("§c█ = Gilded Chiseled Polished Darkstone with Smithing Table on top"),
        Text.of("§7█ = Polished Darkstone"),
        Text.of("§5█§7 = Gilded Chiseled Polished Darkstone"),
        Text.of("§6█§7 = Chiseled Arcane Polished Darkstone"),
        Text.of("§0███§7███§0███"),
        Text.of("§0█§7███§5█§7███§0█"),
        Text.of("§0█§7█§5█§7███§5█§7█§0█"),
        Text.of("§7████§6█§7████"),
        Text.of("§7█§5█§7█§6█§c█§6█§7█§5█§7█"),
        Text.of("§7████§6█§7████"),
        Text.of("§0█§7█§5█§7███§5█§7█§0█"),
        Text.of("§0█§7███§5█§7███§0█"),
        Text.of("§0███§7███§0███")

    ])
    allthemods.add('forbidden_arcanus:clibano_core',[
        Text.of("§c§lShift-Right-Click§r§c the §c§lClibano Core§r§c with §c§lMundabitur Dust"),
        Text.of("§5█§7 = Polished Darkstone"),
        Text.of("§7█ = Polished Darkstone Bricks"),
        Text.of("§6█§7 = Clibano Core"),
        Text.of("§7Right to Left -> Bottom to Top"),
        Text.of("§5█§7█§5█§0█§7███§0█§5█§7█§5█"),
        Text.of("§7███§0█§7█§0█§7█§0█§7███"),
        Text.of("§5█§7█§5█§0█§7█§6█§7█§0█§5█§7█§5█"),
    ])
    allthemods.add('forbidden_arcanus:growing_edelwood',[
        Text.of("§4Obtainable from the Wandering Trader"),
        Text.of("§4Or by using a Corrupt Soul on an Oak Sapling"),
    ])
    allthemods.add('forbidden_arcanus:magnetized_darkstone_pedestal',[
        Text.of("§7Use Ferrognetic Mixture on the Darkstone Pedesta"),
    ])
    allthemods.add('forbidden_arcanus:soul',[
        Text.of("§7Use a Soul Extractor on Soul Sand"),
        Text.of("§7Rarely spawns in world"),
    ])
    allthemods.add('forbidden_arcanus:enchanted_soul',[
        Text.of("§7Use a Splash Aureal Bottle on a normal soul")
    ])
    allthemods.add('forbidden_arcanus:corrupt_soul',[
        Text.of("§7Rarely spawns when killing mobs")
    ])
    allthemods.add('forbidden_arcanus:blood_test_tube',[
        Text.of("§7Hold a test tube in your off-hand and then kill mobs")
    ])
    allthemods.add('forbidden_arcanus:xpetrified_orb',[
        Text.of("§7Only obtainable via the Black Hole"),
        Text.of("§7To make a Black Hole throw Dark Matter together with Corrupti Dust on the ground"),
        Text.of("§7Feed it enough xp to make it spit out an Xpetrified Orb")
    ])
    allthemods.add('forbidden_arcanus:dragon_scale',[
        Text.of("§7Dropped by the Ender Dragon")
    ])
    allthemods.add('forbidden_arcanus:stella_arcanum',[
        Text.of("§7Very rarely spawns between Y -44 and Y 42"),
        Text.of("§cWill explode when you mine it!")
    ])
    allthemods.add(/forbidden_arcanus:runic_[sd]/,[
        Text.of("§7Spawns at the bottom of the world up to Y 2"),
    ])
    allthemods.add(['forbidden_arcanus:arcane_crystal_ore', 'forbidden_arcanus:deepslate_arcane_crystal_ore'],[
        Text.of("§7Very rarely spawns between Y -40 and Y 14"),
        Text.of("§7Most common at Y -13")
    ])
    allthemods.add('forbidden_arcanus:artisan_relic',[
        Text.of("§aFound in the Armorer, Toolsmith, or Weaponsmith villager buildings"),
    ])
    allthemods.add('forbidden_arcanus:crescent_moon',[
        Text.of("§cUnobtainable"),
    ])
    allthemods.add('forbidden_arcanus:crimson_stone',[
        Text.of("§aFound in Pillager Outposts"),
    ])
    allthemods.add('forbidden_arcanus:soul_crimson_stone',[
        Text.of("§cWill turn into a Crimson Stone after 1 use"),
    ])
    allthemods.add('forbidden_arcanus:elementarium',[
        Text.of("§aFound in Jungle Temples, Desert Pyramids, and Underwater Ruins"),
    ])
    allthemods.add('forbidden_arcanus:divine_pact',[
        Text.of("§aFound in the Village and Pyramid in The Other"),
    ])
    allthemods.add('forbidden_arcanus:maledictus_pact',[
        Text.of("§aFound in Treasure Bastions"),
    ])

    //Mystical Agriculture
    allthemods.add(/mysticalagriculture:.*watering_can/,[
        Text.of("§cDisabled for Fake Player"),
        Text.of("§c(Blocks like Modular Routers, Clickers, etc)")
    ])

	//Easy Villagers
    allthemods.add(['easy_villagers:trader', 'easy_villagers:auto_trader'], [
        Text.of("§aRight click with job site block to put it inside and allow trade restocking")
    ])

	//Eternal Starlight
    allthemods.add('eternal_starlight:loot_bag[eternal_starlight:loot_table="eternal_starlight:bosses/lunar_monstrosity"]', [
        Text.of('This loot bag is from the \"Lunar Monstrosity\".')
    ])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
