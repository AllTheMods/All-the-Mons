// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMod 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

RecipeViewerEvents.removeEntriesCompletely('item', allthemods => {
  allthemods.remove('cobblemon_utility:shinycard')
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
    'Can be randomly obtained from eating Apples'
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

