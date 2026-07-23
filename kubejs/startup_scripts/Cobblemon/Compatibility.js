/*
  Cobblemon medicine recipes for the Industrial Foregoing Potion Brewer.
*/

if (Platform.isLoaded('cobblemon') && Platform.isLoaded('industrialforegoing')) {
  NativeEvents.onEvent('net.neoforged.neoforge.event.brewing.RegisterBrewingRecipesEvent', event => {
    const builder = event.getBuilder()
    const waterPotion = Ingredient.of('minecraft:potion[potion_contents={potion:"minecraft:water"}]')
    const medicineRecipes = [
      { bottle: null, input: 'cobblemon:pecha_berry', result: 'cobblemon:antidote' },
      { bottle: null, input: 'cobblemon:chesto_berry', result: 'cobblemon:awakening' },
      { bottle: null, input: 'cobblemon:rawst_berry', result: 'cobblemon:burn_heal' },
      { bottle: 'cobblemon:pp_up', input: 'cobblemon:hondew_berry', result: 'cobblemon:calcium' },
      { bottle: 'cobblemon:pp_up', input: 'cobblemon:tamato_berry', result: 'cobblemon:carbos' },
      { bottle: 'cobblemon:medicinal_brew', input: 'cobblemon:hopo_berry', result: 'cobblemon:elixir' },
      { bottle: 'cobblemon:medicinal_brew', input: 'cobblemon:leppa_berry', result: 'cobblemon:ether' },
      { bottle: 'cobblemon:max_potion', input: 'cobblemon:lum_berry', result: 'cobblemon:full_restore' },
      { bottle: 'cobblemon:pp_up', input: 'cobblemon:pomeg_berry', result: 'cobblemon:hp_up' },
      { bottle: 'cobblemon:medicinal_brew', input: 'cobblemon:sitrus_berry', result: 'cobblemon:hyper_potion' },
      { bottle: null, input: 'cobblemon:aspear_berry', result: 'cobblemon:ice_heal' },
      { bottle: 'cobblemon:pp_up', input: 'cobblemon:qualot_berry', result: 'cobblemon:iron' },
      { bottle: null, input: 'cobblemon:lum_berry', result: 'cobblemon:full_heal' },
      { bottle: 'cobblemon:elixir', input: 'cobblemon:pep_up_flower', result: 'cobblemon:max_elixir' },
      { bottle: 'cobblemon:ether', input: 'cobblemon:pep_up_flower', result: 'cobblemon:max_ether' },
      { bottle: 'cobblemon:hyper_potion', input: 'cobblemon:vivichoke', result: 'cobblemon:max_potion' },
      { bottle: null, input: 'cobblemon:medicinal_leek', result: 'cobblemon:medicinal_brew' },
      { bottle: null, input: 'cobblemon:cheri_berry', result: 'cobblemon:paralyze_heal' },
      { bottle: '#cobblemon:full_heal_bottles', input: 'cobblemon:pep_up_flower', result: 'cobblemon:full_heal' },
      { bottle: 'cobblemon:medicinal_brew', input: 'cobblemon:oran_berry', result: 'cobblemon:potion' },
      { bottle: 'cobblemon:pp_up', input: 'cobblemon:energy_root', result: 'cobblemon:pp_max' },
      { bottle: 'cobblemon:medicinal_brew', input: 'cobblemon:vivichoke', result: 'cobblemon:pp_up' },
      { bottle: 'cobblemon:pp_up', input: 'cobblemon:kelpsy_berry', result: 'cobblemon:protein' },
      { bottle: 'cobblemon:medicinal_brew', input: '#cobblemon:super_potion_ingredients', result: 'cobblemon:super_potion' },
      { bottle: 'cobblemon:potion', input: 'cobblemon:petaya_berry', result: 'cobblemon:throat_spray' },
      { bottle: 'cobblemon:pp_up', input: 'cobblemon:grepa_berry', result: 'cobblemon:zinc' }
    ]
    medicineRecipes.forEach(recipe => {
      builder.addRecipe(
          recipe.bottle === null ? waterPotion : Ingredient.of(recipe.bottle),
          Ingredient.of(recipe.input),
          Item.of(recipe.result)
      )
    })
  })
}
