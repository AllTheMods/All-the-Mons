// Recipes for the PokeFashion Workshop ingredients (PKGBadges ships none).
// Fabrics take same-color wool + string: the wool carries the color for free, and the string keeps the
// input combo unique so it can't collide with vanilla wool dyeing or a bare single-wool recipe.
ServerEvents.recipes(event => {
  const fabricWool = {
    white: "white", black: "black", gray: "gray", red: "red", orange: "orange",
    yellow: "yellow", green: "green", cyan: "cyan", blue: "blue", purple: "purple",
    pink: "pink", brown: "brown", lime_green: "lime"
  }
  for (const [fabric, wool] of Object.entries(fabricWool)) {
    event.shapeless(`pkgbadges:${fabric}_fabric`, [`minecraft:${wool}_wool`, "minecraft:string"])
      .id(`allthemons:${fabric}_fabric`)
  }

  // No vanilla dark-blue wool; blue wool + black dye + string (the string dodges the vanilla dye recipe).
  event.shapeless("pkgbadges:dark_blue_fabric", ["minecraft:blue_wool", "minecraft:black_dye", "minecraft:string"])
    .id("allthemons:dark_blue_fabric")

  // Hat Template: a stitched paper brim.
  event.shaped("pkgbadges:hat_template", [
    "S S",
    "PPP"
  ], {
    S: "minecraft:string",
    P: "minecraft:paper"
  }).id("allthemons:hat_template")

  // Trilby Hat Template: a felt hat with a feather band.
  event.shapeless("pkgbadges:trilby_hat_template", ["pkgbadges:hat_template", "minecraft:leather", "minecraft:feather"])
    .id("allthemons:trilby_hat_template")
})
