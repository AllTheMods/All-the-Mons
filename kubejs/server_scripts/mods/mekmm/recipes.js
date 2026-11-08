// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    allthemods.remove({id: 'mekmm:scrap'})
    allthemods.remove({id: 'mekmm:compressing/scrap_box'})
    allthemods.remove({id: 'mekmm:empty_crystal'})
    allthemods.remove({id: 'mekmm:nucleosynthesizing/uu_matter'})
    allthemods.remove({id: 'mekmm:ambient_gas_collector'})

    allthemods.remove({id: 'mekmm:reaction/empty_crystal'})
    allthemods.remove({id: 'mekmm:oxidizing/uu_matter'})
    allthemods.remove({id: 'mekmm:compressing/author_doll'})

    allthemods.remove({id: /mekmm:.*replicat.*/})
    allthemods.remove({id: /mekmm:.*recycl.*/})
    allthemods.remove({id: /mekmm:.*planting.*/})
    // allthemods.remove({id: 'mekmm:cnc_lathe'})
    // allthemods.remove({id: /mekmm:.*lathing.*/})
    allthemods.remove({id: /mekmm:.*rolling_mill.*/})
    allthemods.remove({type: 'mekmm:recycling'})

    allthemods.remove({id: /mekmm:compat\/appflux.*/})
    allthemods.remove({id: /mekmm:compat\/advanced_ae.*/})
    allthemods.remove({id: /mekmm:compat\/ae2.*/})
    allthemods.remove({id: /mekmm:compat\/extendedae.*/})
    allthemods.remove({id: /mekmm:compat\/megacells.*/})

    // All AllTheOres materials with plates and rods
    const alltheoresMaterials = [
        'aluminum', 'brass', 'bronze', 'constantan', 'copper',
        'electrum', 'enderium', 'gold', 'invar', 'iridium', 'iron',
        'lead', 'lumium', 'netherite', 'nickel', 'osmium', 'platinum',
        'signalum', 'silver', 'steel', 'tin', 'uranium', 'zinc'
    ]
    alltheoresMaterials.forEach(material => {
        let rod = `alltheores:${material}_rod`
        let plate = `alltheores:${material}_plate`
        let ingotTag = `c:ingots/${material}`

        if (Item.exists(rod)) {
            allthemods.custom({
                type: 'mekmm:lathe',
                input: { count: 1, tag: ingotTag },
                output: { count: 2, id: rod }
            }).id(`allthemons:mekmm/lathe/${material}_rod`)

            allthemods.custom({
                type: 'mekmm:stamper',
                input: { count: 1, tag: ingotTag },
                mold: { count: 1, item: 'immersiveengineering:mold_rod' },
                output: { count: 2, id: rod }
            }).id(`allthemons:mekmm/stamper/${material}_rod`)
        }

        if (Item.exists(plate)) {
            allthemods.custom({
                type: 'mekmm:stamper',
                input: { count: 1, tag: ingotTag },
                mold: { count: 1, item: 'immersiveengineering:mold_plate' },
                output: { count: 1, id: plate }
            }).id(`allthemons:mekmm/stamper/${material}_plate`)
        }
    })
    //Diamond Rods and plate as Diamond's tag is c:gems/diamond not c:ingot/diamond
    allthemods.custom({
                type: 'mekmm:lathe',
                input: { count: 1, tag: `c:gems/diamond` },
                output: { count: 2, id: `alltheores:diamond_rod` }
    }).id(`allthemons:mekmm/lathe/diamond_rod`)
    allthemods.custom({
                type: 'mekmm:stamper',
                input: { count: 1, tag: `c:gems/diamond` },
                mold: { count: 1, item: 'immersiveengineering:mold_rod' },
                output: { count: 2, id: `alltheores:diamond_rod`}
        }).id(`allthemons:mekmm/stamper/diamond_rod`)
    allthemods.custom({
                type: 'mekmm:stamper',
                input: { count: 1, tag: `c:gems/diamond` },
                mold: { count: 1, item: 'immersiveengineering:mold_plate' },
                output: { count: 1, id: `alltheores:diamond_plate` }
        }).id(`allthemons:mekmm/stamper/diamond_plate`)

    // CNC Stamper wire recipes
    const stamperWires = ['electrum', 'iron', 'copper', 'gold']
    stamperWires.forEach((material, candidates) => {
        allthemods.custom({
            type: 'mekmm:stamper',
            input: { count: 1, tag: `c:ingots/${material}` },
            mold: { count: 1, item: 'immersiveengineering:mold_wire' },
            output: { count: 2, id: `createaddition:${material}_wire` }
        }).id(`allthemons:mekmm/stamper/createaddition/${material}_wire`)
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
