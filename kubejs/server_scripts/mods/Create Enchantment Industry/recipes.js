// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  allthemods
    .shaped(Item.of(`create_enchantment_industry:infuser`), [" B ", " S ", "NGN"], {
      B: `#c:plates/brass`,
      S: `create:spout`,
      N: `create:nixie_tube`,
      G: `apotheosis:god_fused_pearl`
    })
    .id("create_enchantment_industry:crafting/infuser");
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
