// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMod 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

RecipeViewerEvents.removeEntriesCompletely('item', allthemods => {
  allthemods.remove('cobblemon_utility:shinycard')
  allthemods.remove('cobblemon_utility:goldencap')
  allthemods.remove('cobblemon_utility:mastercandy')
  allthemods.remove('cobblemon_utility:cobblemax')
  allthemods.remove('cobblemon_utility:poketreat')
  allthemods.remove('cobblemon_utility:atksilvercap')
  allthemods.remove('cobblemon_utility:spatksilvercap')
  allthemods.remove('cobblemon_utility:spdefsilvercap')
  allthemods.remove('cobblemon_utility:speedsilvercap')
  allthemods.remove('cobblemon_utility:defsilvercap')
  allthemods.remove('cobblemon_utility:hpsilvercap')
  allthemods.remove('cobblemon_utility:shiningatksilvercap')
  allthemods.remove('cobblemon_utility:shiningspatksilvercap')
  allthemods.remove('cobblemon_utility:shiningspdefsilvercap')
  allthemods.remove('cobblemon_utility:shiningspeedsilvercap')
  allthemods.remove('cobblemon_utility:shiningdefsilvercap')
  allthemods.remove('cobblemon_utility:shininghpsilvercap')
  allthemods.remove('quarryplus:adv_quarry')
  allthemods.remove('allthetweaks:greg_star')
  allthemods.remove('allthetweaks:greg_star_block')

  for (let i = 1; i < 10; i++) {
    allthemods.remove(`allthecompressed:greg_star_block_${i}x`)
  }

  //allthemods.remove('relics:researching_table')
  // allthemods.remove("extradisks:infinite_chemical_storage_block")
  // allthemods.remove("extradisks:infinite_chemical_storage_disk")
  // allthemods.remove("extradisks:infinite_chemical_storage_part")
  // allthemods.remove("extradisks:infinite_fluid_storage_block")
  // allthemods.remove("extradisks:infinite_fluid_storage_disk")
  // allthemods.remove("extradisks:infinite_fluid_storage_part")
  // allthemods.remove("extradisks:infinite_item_storage_block")
  // allthemods.remove("extradisks:infinite_item_storage_disk")
  // allthemods.remove("extradisks:infinite_item_storage_part")

  let $DyeColor = Java.loadClass("net.minecraft.world.item.DyeColor")
  for (let color of $DyeColor.values()) {
    allthemods.remove(`/refinedstorage:${color}_.*/`)
  }

  allthemods.remove('mekmm:scrap')
  allthemods.remove('mekmm:scrap_box')
  allthemods.remove('mekmm:empty_crystal')
  allthemods.remove('mekmm:uu_matter')
  allthemods.remove('mekmm:ambient_gas_collector')
  allthemods.remove(/mekmm:.*replicat.*/)
  allthemods.remove(/mekmm:.*recycl.*/)
  allthemods.remove(/mekmm:.*planting.*/)
  // allthemods.remove('mekmm:cnc_lathe')
  // allthemods.remove(/mekmm:.*lathing.*/)
  allthemods.remove(/mekmm:.*rolling_mill.*/)

  allthemods.remove("supplementaries:faucet")
  allthemods.remove('ars_elemental:glyph_nullify_defense')

  allthemods.remove('legendarymonuments:meltan_box')
  allthemods.remove('legendarymonuments:meltan_candy')

  // PKGBadges: hide gym badges with no drop source; only the 16 dropped by RCT gym leaders (BDSP Sinnoh + Radical Red Kanto) are obtainable
  allthemods.remove('pkgbadges:starfall_street_dark_badge')
  allthemods.remove('pkgbadges:starfall_street_fairy_badge')
  allthemods.remove('pkgbadges:starfall_street_fightning_badge')
  allthemods.remove('pkgbadges:starfall_street_fire_badge')
  allthemods.remove('pkgbadges:starfall_street_poison_badge')
  allthemods.remove('pkgbadges:the_balance_badge')
  allthemods.remove('pkgbadges:the_basic_badge')
  allthemods.remove('pkgbadges:the_bolt_badge')
  allthemods.remove('pkgbadges:the_bug_badge')
  allthemods.remove('pkgbadges:the_bug_badge_paldea')
  allthemods.remove('pkgbadges:the_cliff_badge')
  allthemods.remove('pkgbadges:the_coral_eye_badge')
  allthemods.remove('pkgbadges:the_dark_badge')
  allthemods.remove('pkgbadges:the_dragon_badge')
  allthemods.remove('pkgbadges:the_dragon_badge_pathof_legends')
  allthemods.remove('pkgbadges:the_dynamo_badge')
  allthemods.remove('pkgbadges:the_electric_badge_paldea')
  allthemods.remove('pkgbadges:the_fairy_badge')
  allthemods.remove('pkgbadges:the_fairy_badge_galar')
  allthemods.remove('pkgbadges:the_feather_badge')
  allthemods.remove('pkgbadges:the_fighting_badge')
  allthemods.remove('pkgbadges:the_fire_badge')
  allthemods.remove('pkgbadges:the_flying_badge')
  allthemods.remove('pkgbadges:the_fog_badge')
  allthemods.remove('pkgbadges:the_freedom_badge')
  allthemods.remove('pkgbadges:the_freeze_badge')
  allthemods.remove('pkgbadges:the_ghost_badge')
  allthemods.remove('pkgbadges:the_ghost_badge_paldea')
  allthemods.remove('pkgbadges:the_glacier_badge')
  allthemods.remove('pkgbadges:the_grass_badge')
  allthemods.remove('pkgbadges:the_grass_badge_paldea')
  allthemods.remove('pkgbadges:the_ground_badge')
  allthemods.remove('pkgbadges:the_harmony_badge')
  allthemods.remove('pkgbadges:the_heat_badge')
  allthemods.remove('pkgbadges:the_hive_badge')
  allthemods.remove('pkgbadges:the_ice_badge')
  allthemods.remove('pkgbadges:the_ice_badge_paldea')
  allthemods.remove('pkgbadges:the_iceberg_badge')
  allthemods.remove('pkgbadges:the_insect_badge')
  allthemods.remove('pkgbadges:the_jade_star_badge')
  allthemods.remove('pkgbadges:the_jet_badge')
  allthemods.remove('pkgbadges:the_knuckle_badge')
  allthemods.remove('pkgbadges:the_legend_badge')
  allthemods.remove('pkgbadges:the_mind_badge')
  allthemods.remove('pkgbadges:the_mineral_badge')
  allthemods.remove('pkgbadges:the_normal_badge_paldea')
  allthemods.remove('pkgbadges:the_patience_badge')
  allthemods.remove('pkgbadges:the_plain_badge')
  allthemods.remove('pkgbadges:the_plant_badge')
  allthemods.remove('pkgbadges:the_pride_badge')
  allthemods.remove('pkgbadges:the_psychic_badge')
  allthemods.remove('pkgbadges:the_psychic_badge_paldea')
  allthemods.remove('pkgbadges:the_quake_badge')
  allthemods.remove('pkgbadges:the_rain_badge')
  allthemods.remove('pkgbadges:the_rising_badge')
  allthemods.remove('pkgbadges:the_rock_badge')
  allthemods.remove('pkgbadges:the_rock_badge_pathof_legends')
  allthemods.remove('pkgbadges:the_rumble_badge')
  allthemods.remove('pkgbadges:the_sea_ruby_badge')
  allthemods.remove('pkgbadges:the_spike_shell_badge')
  allthemods.remove('pkgbadges:the_steel_badge')
  allthemods.remove('pkgbadges:the_stone_badge')
  allthemods.remove('pkgbadges:the_storm_badge')
  allthemods.remove('pkgbadges:the_tranquility_badge')
  allthemods.remove('pkgbadges:the_trio_badge')
  allthemods.remove('pkgbadges:the_voltage_badge')
  allthemods.remove('pkgbadges:the_water_badge')
  allthemods.remove('pkgbadges:the_water_badge_paldea')
  allthemods.remove('pkgbadges:the_zephyr_badge')

  allthemods.remove('pkgbadges:badges_box_johto_league')
  allthemods.remove('pkgbadges:badges_box_hoenn_league')
  allthemods.remove('pkgbadges:badges_box_unova_league')
  allthemods.remove('pkgbadges:badges_box_kalos_league')
  allthemods.remove('pkgbadges:badges_box_galar_league')
  allthemods.remove('pkgbadges:badges_box_paldea')
  allthemods.remove('pkgbadges:badges_box_orange_league')
  allthemods.remove('pkgbadges:badges_box_starfall_street')
  allthemods.remove('pkgbadges:big_badges_box')
})

// RecipeViewerEvents.removeEntriesCompletely('mekanism:chemical', allthemods => {
//
//     allthemods.remove('mekmm:uu_matter')
//     allthemods.remove('mekmm:unstable_dimensional_gas')
// })

RecipeViewerEvents.removeRecipes(event => {
  event.remove(["xycraft_machines:extractor/enderio/grains_of_infinity"])
})

NetworkEvents.dataReceived("battle_tower_shop_items", event => {
  if (Platform.isLoaded("jei")) {
    let jeiRuntime = global.jeiRuntime
    let recipes = []
    if (jeiRuntime != null) {
      let $RecipeTypes = Java.loadClass("mezz.jei.api.constants.RecipeTypes")
      let $IngredientInfoRecipe = Java.loadClass("mezz.jei.library.plugins.jei.info.IngredientInfoRecipe")
      let $VanillaTypes = Java.loadClass("mezz.jei.api.constants.VanillaTypes")
      let recipeManager = jeiRuntime.getRecipeManager()

      for (let item of event.data.get("shop_items")) {
        let cost = item.get("cost").getAsInt()
        let count = item.get("count").getAsInt()
        let itemId = item.get("item").getAsString()
        if (Item.exists(itemId)) {
          let stack = Item.of(itemId)
          let recipe = $IngredientInfoRecipe.create(jeiRuntime.getIngredientManager(), [stack], $VanillaTypes.ITEM_STACK, [Text.translate('kubejs.atm.rv.battle_tower_sale', count, cost)])
          recipes.push(recipe)			
        } else {
          console.log("[Battle Tower Shop] Item for id " + itemId + " does not exist!")
        }
      }
      recipeManager.addRecipes($RecipeTypes.INFORMATION, recipes)
    }
  }
  //console.log(event.data)
})

RecipeViewerEvents.addInformation('item', allthemods => {
  allthemods.add('justdirethings:polymorphic_catalyst', [
    Text.translate('kubejs.atm.rv.polymorphic_catalyst.1')
  ])
  allthemods.add('justdirethings:portal_fluid_catalyst', [
    Text.translate('kubejs.atm.rv.portal_fluid_catalyst.1')
  ])
  allthemods.add('cobblemon:leftovers', [
    Text.translate('kubejs.atm.rv.leftovers.1')
  ])
})

RecipeViewerEvents.addInformation('fluid', allthemods => {
  allthemods.add("advanced_ae:quantum_infusion_source", [
    Text.translate('kubejs.atm.rv.quantum_infusion_source.1')
  ])
  allthemods.add("justdirethings:polymorphic_fluid_source", [
    Text.translate('kubejs.atm.rv.polymorphic_fluid_source.1')
  ])
  allthemods.add("justdirethings:unstable_portal_fluid_source", [
    Text.translate('kubejs.atm.rv.unstable_portal_fluid_source.1')
  ])
})

RecipeViewerEvents.registerSubtypes("item", event => {
  event.useComponents("allthemons:pika_star",["allthemons:region"])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

