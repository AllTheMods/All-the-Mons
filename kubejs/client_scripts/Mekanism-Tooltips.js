// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ItemEvents.modifyTooltips(allthemods => {

    // ##### Gear #####

    //Mekasuit
    allthemods.add(/mekanism:mekasuit_/, [
        Text.translate('kubejs.atm.tip.mekanism.increased_energy_consumption').red(),
        Text.translate('kubejs.atm.tip.mekanism.increased_energy_capacity').green()
    ])
    //Meka Tool
    allthemods.add('mekanism:meka_tool', [
        Text.translate('kubejs.atm.tip.mekanism.increased_energy_consumption').red(),
        Text.translate('kubejs.atm.tip.mekanism.increased_energy_capacity_exclaim').green(),
        Text.translate('kubejs.atm.tip.mekanism.increased_attack_speed_damage').green()
    ])

    // ##### Generators #####

    //Solar Generator
    allthemods.add('mekanismgenerators:solar_generator', [
        Text.translate('kubejs.atm.tip.mekanism.increased_energy_capacity_production').green()
    ])
    //Advanced Solar Generator
    allthemods.add('mekanismgenerators:advanced_solar_generator', [
        Text.translate('kubejs.atm.tip.mekanism.increased_energy_capacity_production').green()
    ])
    //Wind Generator
    allthemods.add('mekanismgenerators:wind_generator', [
        Text.translate('kubejs.atm.tip.mekanism.increased_energy_capacity_production').green()
    ])
    //Heat Generator
    allthemods.add('mekanismgenerators:heat_generator', [
        Text.translate('kubejs.atm.tip.mekanism.increased_energy_capacity_production').green()
    ])
    //Gas Burning Generator
    allthemods.add('mekanismgenerators:gas_burning_generator', [
        Text.translate('kubejs.atm.tip.mekanism.decreased_energy_production').red(),
        Text.translate('kubejs.atm.tip.mekanism.increased_fuel_consumption').red()
    ])
    //Fission Generator
    allthemods.add(/mekanismgenerators:fission_/, [
        Text.translate('kubejs.atm.tip.mekanism.decreased_energy_production').red(),
    ])
    //Fusion Generator
    allthemods.add(/mekanismgenerators:fusion_/, [
        Text.translate('kubejs.atm.tip.mekanism.decreased_energy_production').red(),
        Text.translate('kubejs.atm.tip.mekanism.decreased_fuel_consumption').green(),
    ])
    //Turbine
    allthemods.add(/mekanismgenerators:turbine_/, [
        Text.translate('kubejs.atm.tip.mekanism.increased_production_speed').green(),
    ])
    //Boiler
    allthemods.add(/mekanism:boiler_/, [
        Text.translate('kubejs.atm.tip.mekanism.increased_production_speed').green(),
    ])

    // ##### Machines #####

    //Upgrades
    allthemods.add(/mekanism:upgrade_/, [
        Text.translate('kubejs.atm.tip.mekanism.increased_machine_boost').green()
    ])
    //Waste Barrel
    allthemods.add('mekanism:radioactive_waste_barrel', [
        Text.translate('kubejs.atm.tip.mekanism.increased_decay_rate').green()
    ])
    //Thermal Evaporation Tower
    allthemods.add(/mekanism:thermal_evaporation_/, [
        Text.translate('kubejs.atm.tip.mekanism.increased_production_speed').green()
    ])
    //Solar Neutron Activator
    allthemods.add('mekanism:solar_neutron_activator', [
        Text.translate('kubejs.atm.tip.mekanism.increased_production_speed').green(),
        Text.translate('kubejs.atm.tip.mekanism.waste_to_polonium_buffed').green()
    ])
    //Isotopic Centrifuge
    allthemods.add('mekanism:isotopic_centrifuge', [
        Text.translate('kubejs.atm.tip.mekanism.waste_to_plutonium_buffed').green()
    ])
    //Electric Pump
    allthemods.add('mekanism:electric_pump', [
        Text.translate('kubejs.atm.tip.mekanism.increased_production_speed').green()
    ])
    //SPS
    allthemods.add(/mekanism:sps_/, [
        Text.translate('kubejs.atm.tip.mekanism.decreased_energy_consumption').green()
    ])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
