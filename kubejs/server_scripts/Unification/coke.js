// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove(
        [
            {
                id: 'immersiveengineering:crusher/coke_block'
            },
            {
                id: 'immersiveengineering:crusher/coke'
            },
            {
                id: 'immersiveengineering:crafting/coke_to_slab'
            }
        ]
    )
})

ServerEvents.tags('item', allthemods => {
    allthemods.add('c:dusts', 'immersiveengineering:dust_coke')

    allthemods.add('almostunified:hide', ['immersiveengineering:coke', 'immersiveengineering:dust_coke', 'railcraft:coal_coke_block', 'immersiveengineering:slab_coke'])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.