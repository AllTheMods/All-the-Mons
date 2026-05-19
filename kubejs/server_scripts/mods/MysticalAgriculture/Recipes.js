// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove({id: 'mysticalagriculture:essence/common/niter'})

    allthemods.remove({input: 'mysticalagriculture:rubber_essence'})
    allthemods.shaped('4x industrialforegoing:dryrubber', ['   ', 'AAA', '   '], {
        A: 'mysticalagriculture:rubber_essence'
    }).id('allthemods:essence/industrialforegoing/rubber')

    allthemods.shaped('kubejs:magical_soil', ['ABC', 'DEF', 'GHI'], {
        A: 'mysticalagradditions:insanium_block',
        B: 'allthecompressed:nether_star_block_2x',
        C: 'allthecompressed:dirt_3x',
        D: 'mysticalagriculture:awakened_supremium_growth_accelerator',
        E: 'mysticalagradditions:insanium_farmland',
        F: 'minecraft:dragon_head',
        G: 'allthemodium:piglich_heart',
        H: 'allthecompressed:ender_pearl_block_3x',
        I: 'productivetrees:moonlight_magic_crepe_myrtle_sapling'
    }).id('allthemods:kjs/magical_soil')

    allthemods.shaped('mysticalagradditions:withering_soul',
        [
            'PRP',
            'BSB',
            'PRP'
        ], {
            B: 'productivebees:configurable_comb[productivebees:bee_type="productivebees:withered"]',
            P: 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:wither"]',
            R: 'reliquary:witherless_rose',
            S: 'minecraft:wither_skeleton_skull',
        }
    ).id('allthemods:mysticalagradditions/withering_soul')

    allthemods.shaped('enderio:enderman_head',
        [
            'eee',
            'ebe',
            'eee'
        ],
        {
            b: 'mysticalagriculture:blank_skull',
            e: 'mysticalagriculture:enderman_essence'
        }
    ).id('allthemods:essence/enderio/enderman_head')

    // Warped Wart Blocks
    allthemods.shaped('8x minecraft:warped_wart_block', [' A ', 'A  ', 'AAA'], {
        A: 'mysticalagriculture:nether_essence'
    }).id('allthemods:essence/minecraft/warped_wart_block')

    // Moss Blocks
    allthemods.shaped('8x minecraft:moss_block', ['NNN', 'NDN', 'NNN'],{
        N: 'mysticalagriculture:nature_essence',
        D: 'mysticalagriculture:dirt_essence'
    }).id('allthemods:essence/minecraft/moss_block')

    // Shroomlights
    allthemods.shaped('6x minecraft:shroomlight', ['AGA', 'GAG', 'AGA'],{
        A: 'mysticalagriculture:nether_essence',
        G: 'mysticalagriculture:glowstone_essence'
    }).id('allthemods:essence/minecraft/shroomlight')

    // Froglights
    allthemods.shaped('8x minecraft:ochre_froglight', ['NDG', 'GDN', 'NDG'],{
        N: 'mysticalagriculture:nature_essence',
        D: 'mysticalagriculture:dye_essence',
        G: 'mysticalagriculture:glowstone_essence'
    }).id('allthemods:essence/minecraft/ochre_froglight')
    allthemods.shaped('8x minecraft:pearlescent_froglight', ['DDD', 'GNG', 'NGN'],{
        N: 'mysticalagriculture:nature_essence',
        D: 'mysticalagriculture:dye_essence',
        G: 'mysticalagriculture:glowstone_essence'
    }).id('allthemods:essence/minecraft/pearlescent_froglight')
    allthemods.shaped('8x minecraft:verdant_froglight', ['NGD', 'GND', 'NGD'],{
        N: 'mysticalagriculture:nature_essence',
        D: 'mysticalagriculture:dye_essence',
        G: 'mysticalagriculture:glowstone_essence'
    }).id('allthemods:essence/minecraft/verdant_froglight')

    // Nether Vines
    allthemods.shaped('12x minecraft:twisting_vines', ['NA ', ' A ', ' AN'], {
        A: 'mysticalagriculture:nature_essence',
        N: 'mysticalagriculture:nether_essence'
    }).id('allthemods:essence/minecraft/twisiting_vines')
    allthemods.shaped('12x minecraft:weeping_vines', [' A ', 'NAN', ' A '], {
        A: 'mysticalagriculture:nature_essence',
        N: 'mysticalagriculture:nether_essence'
    }).id('allthemods:essence/minecraft/weeping_vines')


    //addInfustion('mysticalagriculture:silicon_seeds', 'ae2:silicon', 'mysticalagriculture:prudentium_essence')
    //addInfustion('mysticalagriculture:steel_seeds', 'alltheores:steel_ingot', 'mysticalagriculture:imperium_essence')

    allthemods.custom(
        {
            type: "mysticalagriculture:soul_extraction",
            input: {
              tag: "c:foods/raw_fish"
            },
            result: {
              type: "mysticalagriculture:fish",
              souls: 0.5
            }
        })

    // 2 Tall flower recipes
    allthemods.shaped(
    Item.of('minecraft:rose_bush', 2),
  [
    'ABA',
    'BCA', 
    'BAA'
  ],
  {
    A: 'mysticalagriculture:nature_essence',
    B: 'mysticalagriculture:dye_essence',
    C: 'minecraft:red_dye'
  }
)
    allthemods.shaped(
    Item.of('minecraft:peony', 2),
  [
    'BAA',
    'ACA', 
    'BAB'
  ],
  {
    A: 'mysticalagriculture:nature_essence',
    B: 'mysticalagriculture:dye_essence',
    C: 'minecraft:pink_dye'
  }
)
    allthemods.shaped(
    Item.of('minecraft:sunflower', 2),
  [
    'AAB',
    'BCA', 
    'ABA'
  ],
  {
    A: 'mysticalagriculture:nature_essence',
    B: 'mysticalagriculture:dye_essence',
    C: 'minecraft:yellow_dye'
  }
)
    allthemods.shaped(
    Item.of('minecraft:lilac', 2),
  [
    'ABA',
    'ACB', 
    'BAA'
  ],
  {
    A: 'mysticalagriculture:nature_essence',
    B: 'mysticalagriculture:dye_essence',
    C: 'minecraft:magenta_dye'
  }
)

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
