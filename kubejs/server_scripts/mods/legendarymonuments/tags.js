// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('item', allthemods => {
    const logs = ['legendarymonuments:dyna_log', 'legendarymonuments:dyna_wood', 'legendarymonuments:stripped_dyna_log']
    allthemods.add('minecraft:logs', logs)
    allthemods.add('minecraft:logs_that_burn', logs)
    allthemods.add('c:stripped_logs', 'legendarymonuments:stripped_dyna_log')
    allthemods.add('minecraft:planks', 'legendarymonuments:dyna_planks')
    allthemods.add('minecraft:slabs', 'legendarymonuments:dyna_slab')
    allthemods.add('minecraft:wooden_slabs', 'legendarymonuments:dyna_slab')
    allthemods.add('minecraft:stairs', 'legendarymonuments:dyna_stairs')
    allthemods.add('minecraft:wooden_stairs', 'legendarymonuments:dyna_stairs')
    allthemods.add('minecraft:fences', 'legendarymonuments:dyna_fence')
    allthemods.add('minecraft:wooden_fences', 'legendarymonuments:dyna_fence')
    allthemods.add('c:fences/wooden', 'legendarymonuments:dyna_fence')
    allthemods.add('minecraft:fence_gates', 'legendarymonuments:dyna_fence_gate')
    allthemods.add('c:fence_gates/wooden', 'legendarymonuments:dyna_fence_gate')
    allthemods.add('minecraft:doors', 'legendarymonuments:dyna_door')
    allthemods.add('minecraft:wooden_doors', 'legendarymonuments:dyna_door')
    allthemods.add('minecraft:trapdoors', 'legendarymonuments:dyna_trapdoor')
    allthemods.add('minecraft:wooden_trapdoors', 'legendarymonuments:dyna_trapdoor')
    allthemods.add('minecraft:buttons', 'legendarymonuments:dyna_button')
    allthemods.add('minecraft:wooden_buttons', 'legendarymonuments:dyna_button')
    allthemods.add('minecraft:wooden_pressure_plates', 'legendarymonuments:dyna_pressure_plate')
    allthemods.add('minecraft:leaves', ['legendarymonuments:dyna_leaves', 'legendarymonuments:snowy_dyna_leaves'])
    allthemods.add('minecraft:saplings', 'legendarymonuments:dyna_sapling')
})

ServerEvents.tags('block', allthemods => {
    allthemods.add('c:stripped_logs', 'legendarymonuments:stripped_dyna_log')
    allthemods.add('c:fences/wooden', 'legendarymonuments:dyna_fence')
    allthemods.add('c:fence_gates/wooden', 'legendarymonuments:dyna_fence_gate')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
