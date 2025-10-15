// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove({ id: 'cobblemon:master_ball' })
    allthemods.shaped('cobblemon:master_ball', ['EBE', 'BUB', 'NNN'], {
        U: 'allthemons:unobtainium_ball',
        B: 'allthemons:soul_lava_ball',
        E: 'allthemons:vibranium_ball',
        N: 'allthemons:allthemodium_ball'
    }).id('cobblemon:master_ball')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.