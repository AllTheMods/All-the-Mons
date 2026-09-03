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

  const affixTemplates = [
    {
      name: "brass",
      base: "create:copper_sheet",
      steps: [
        { type: "create:deploying", item: "minecraft:paper" },
        { type: "create:deploying", item: "apotheosis:mysterious_scrap_metal" },
        { type: "create:pressing" }
      ]
    },
    {
      name: "crystal",
      base: "create:brass_sheet",
      steps: [
        { type: "create:deploying", item: "minecraft:paper" },
        { type: "create:filling", fluid: "create_enchantment_industry:crystal_essence", amount: 50 },
        { type: "create:deploying", item: "minecraft:amethyst_shard" },
        { type: "create:pressing" }
      ]
    },
    {
      name: "apotheotic",
      base: "create:sturdy_sheet",
      steps: [
        { type: "create:deploying", item: "minecraft:paper" },
        { type: "create:filling", fluid: "create_enchantment_industry:apotheotic_essence", amount: 50 },
        { type: "create:deploying", item: "apotheosis:godforged_pearl" },
        { type: "create:pressing" }
      ]
    }
  ];

  affixTemplates.forEach((template) => {
    const incomplete = `create_enchantment_industry:incomplete_${template.name}_affix_template`;

    allthemods.remove({
      id: `create_enchantment_industry:sequenced_assembly/${template.name}_affix_template`
    });

    allthemods
      .custom({
        type: "create:sequenced_assembly",
        ingredient: { item: template.base },
        results: [{ id: `create_enchantment_industry:${template.name}_affix_template` }],
        transitional_item: { id: incomplete },
        sequence: template.steps.map((step) => {
          const ingredients = [{ item: incomplete }];
          if (step.item) ingredients.push({ item: step.item });
          if (step.fluid)
            ingredients.push({ type: "neoforge:single", amount: step.amount, fluid: step.fluid });
          return { type: step.type, ingredients: ingredients, results: [{ id: incomplete }] };
        })
      })
      .id(`allthemods:sequenced_assembly/${template.name}_affix_template`);
  });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
