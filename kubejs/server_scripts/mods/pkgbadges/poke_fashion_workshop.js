// Crafting recipe for the PokéFashion Workshop (PKGBadges ships none).
ServerEvents.recipes(event => {
  event.recipes.kubejs.shaped("pkgbadges:poke_fashion_workshop", [
    "WSW",
    "WLW",
    "WCW"
  ], {
    W: "#minecraft:wool",
    S: "minecraft:shears",
    L: "minecraft:loom",
    C: "minecraft:crafter"
  }).id("allthemons:poke_fashion_workshop")
})
