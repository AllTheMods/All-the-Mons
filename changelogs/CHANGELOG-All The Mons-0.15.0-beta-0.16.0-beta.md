# Changelog

# 📦 0.16.0-beta

## 📰 General changes and notes

Summary of changes here!

<details open>
<summary>Github Commits :octocat:</summary>
<blockquote>

- fixed worldgen crash on futuristic steelworks (Uncandango)
- removed TF seeds from quests (Uncandango)
- Clair (Radical Red) rematch is now optional (Uncandango)
- allowed NOT owned pokemon to be captured with imprisonment tool (Uncandango)
- Quest Fix (PrincessStellar)
- Updated PT_BR localization (PrincessStellar)
- Changed base apricorn bits cutting recipe to be consistent with the other methods (LobsterJonn)
- Added textures for shiny Creepyon and Piglichu (LobsterJonn)
- Added basic ball lid recipes for water bee item conversion (LobsterJonn)
- Added configs for disabling TM Machine and Campfire Pots inv handlers (LobsterJonn)
- Improved TM Machine inv handler (LobsterJonn)
</blockquote>

</details>

---

## 🛠️ Mods

<details>
<summary>Updated (17)</summary>

- All The Mons (0.0.44) -> (0.0.46)
- AlmostUnified (1.21.1-1.3.0) -> (1.21.1-1.4.0)
- Cobblemon Battle Extras (1.11.40) -> (1.12.41)
- Cobblemon Raid Dens (0.9.1+1.21.1) -> (0.10.0+1.21.1)
- Cooking for Blockheads (21.1.18) -> (21.1.19)
- ExtendedAE (1.21-2.2.30-neoforge) -> (1.21-2.2.31-neoforge)
- Moonlight Lib (1.21-2.29.23) -> (1.21-2.29.26)
- Relics (0.11.10) -> (0.11.11)
- reliquified_artifacts (1.0.1) -> (1.0.3)
- Silent Gear (4.1.4) -> (4.1.5)
- Sophisticated Core (1.4.14) -> (1.4.15)
- Sophisticated Storage (1.5.32) -> (1.5.34)
- Sophisticated Storage Create Integration (0.1.13) -> (0.1.14)
- Supplementaries (1.21-3.5.29) -> (1.21-3.5.30)
- The Bumblezone (7.12.1+1.21.1-neoforge) -> (7.13.0+1.21.1-neoforge)
- The Undergarden (0.9.5) -> (0.9.6)
- zamega (1.6.1) -> (1.7.1)

</details>

<details open>
<summary>Removed (1)</summary>

- Cobblemon Ultra Wormholes (1.0.0)

</details>

## 🍳 Recipes

<details>
<summary>Added (11)</summary>
<blockquote>

<details>
<summary>allthemons/pbees/black_ball_lid</summary>

```diff
+{
+  type: "productivebees:item_conversion"
+  bees: [
+    "productivebees:water"
+  ]
+  ingredients: [
+    {
+      item: "createmonballsoverhaul:half_black_apricorn"
+    }
+  ]
+  result: {
+    id: "createmonballsoverhaul:black_ball_lid"
+  }
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "productivebees:bee_exists"
+          bee: "productivebees:water"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pbees/blue_ball_lid</summary>

```diff
+{
+  type: "productivebees:item_conversion"
+  bees: [
+    "productivebees:water"
+  ]
+  ingredients: [
+    {
+      item: "createmonballsoverhaul:half_blue_apricorn"
+    }
+  ]
+  result: {
+    id: "createmonballsoverhaul:blue_ball_lid"
+  }
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "productivebees:bee_exists"
+          bee: "productivebees:water"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pbees/green_ball_lid</summary>

```diff
+{
+  type: "productivebees:item_conversion"
+  bees: [
+    "productivebees:water"
+  ]
+  ingredients: [
+    {
+      item: "createmonballsoverhaul:half_green_apricorn"
+    }
+  ]
+  result: {
+    id: "createmonballsoverhaul:green_ball_lid"
+  }
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "productivebees:bee_exists"
+          bee: "productivebees:water"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pbees/pink_ball_lid</summary>

```diff
+{
+  type: "productivebees:item_conversion"
+  bees: [
+    "productivebees:water"
+  ]
+  ingredients: [
+    {
+      item: "createmonballsoverhaul:half_pink_apricorn"
+    }
+  ]
+  result: {
+    id: "createmonballsoverhaul:pink_ball_lid"
+  }
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "productivebees:bee_exists"
+          bee: "productivebees:water"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pbees/red_ball_lid</summary>

```diff
+{
+  type: "productivebees:item_conversion"
+  bees: [
+    "productivebees:water"
+  ]
+  ingredients: [
+    {
+      item: "createmonballsoverhaul:half_red_apricorn"
+    }
+  ]
+  result: {
+    id: "createmonballsoverhaul:red_ball_lid"
+  }
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "productivebees:bee_exists"
+          bee: "productivebees:water"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pbees/white_ball_lid</summary>

```diff
+{
+  type: "productivebees:item_conversion"
+  bees: [
+    "productivebees:water"
+  ]
+  ingredients: [
+    {
+      item: "createmonballsoverhaul:half_white_apricorn"
+    }
+  ]
+  result: {
+    id: "createmonballsoverhaul:white_ball_lid"
+  }
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "productivebees:bee_exists"
+          bee: "productivebees:water"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pbees/yellow_ball_lid</summary>

```diff
+{
+  type: "productivebees:item_conversion"
+  bees: [
+    "productivebees:water"
+  ]
+  ingredients: [
+    {
+      item: "createmonballsoverhaul:half_yellow_apricorn"
+    }
+  ]
+  result: {
+    id: "createmonballsoverhaul:yellow_ball_lid"
+  }
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "productivebees:bee_exists"
+          bee: "productivebees:water"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>create/splashing/mekanism/crushed_raw_lead</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "mekanism"
+        }
+      ]
+    }
+  ]
+  type: "create:splashing"
+  ingredients: [
+    {
+      item: "create:crushed_raw_lead"
+    }
+  ]
+  results: [
+    {
+      count: 9
+      id: "mekanism:nugget_lead"
+    }
+  ]
+}

```


</details>

<details>
<summary>create/splashing/mekanism/crushed_raw_uranium</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "mekanism"
+        }
+      ]
+    }
+  ]
+  type: "create:splashing"
+  ingredients: [
+    {
+      item: "create:crushed_raw_uranium"
+    }
+  ]
+  results: [
+    {
+      count: 9
+      id: "mekanism:nugget_uranium"
+    }
+  ]
+}

```


</details>

<details>
<summary>createaddition/pressing/electrum_ingot</summary>

```diff
+{
+  type: "create:pressing"
+  ingredients: [
+    {
+      tag: "c:ingots/electrum"
+    }
+  ]
+  results: [
+    {
+      id: "createaddition:electrum_sheet"
+    }
+  ]
+}

```


</details>

<details>
<summary>zamega/chimechite</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  key: {
+    #: {
+      tag: "c:gems/diamond"
+    }
+    b: {
+      item: "minecraft:bell"
+    }
+    l: {
+      tag: "c:ingots/gold"
+    }
+    e: {
+      item: "mega_showdown:mega_stone"
+    }
+  }
+  pattern: [
+    " b "
+    "lel"
+    " # "
+  ]
+  result: {
+    id: "zamega:chimechite"
+  }
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (125)</summary>
<blockquote>

<details>
<summary>almostunified/create</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "create"
   recipes: [
     "1$blasting/copper_ingot_from_crushed"
     "1$blasting/gold_ingot_from_crushed"
     "1$blasting/ingot_aluminum_compat_immersiveengineering"
     "1$blasting/ingot_nickel_compat_immersiveengineering"
     "1$blasting/ingot_osmium_compat_mekanism"
     "1$blasting/ingot_silver_compat_immersiveengineering"
     "1$blasting/ingot_tin_compat_mekanism"
     "1$blasting/iron_ingot_from_crushed"
     "1$blasting/zinc_ingot_from_crushed"
     "1$crafting/schematics/schematicannon"
-    "1$crushing/asurine"
-    "1$crushing/asurine_recycling"
-    "1$crushing/coal_ore"
-    "1$crushing/copper_ore"
-    "1$crushing/crimsite"
-    "1$crushing/crimsite_recycling"
-    "1$crushing/deepslate_coal_ore"
-    "1$crushing/deepslate_copper_ore"
-    "1$crushing/deepslate_diamond_ore"
-    "1$crushing/deepslate_emerald_ore"
-    "1$crushing/deepslate_gold_ore"
-    "1$crushing/deepslate_iron_ore"
-    "1$crushing/deepslate_lapis_ore"
-    "1$crushing/deepslate_redstone_ore"
-    "1$crushing/deepslate_zinc_ore"
-    "1$crushing/diamond_ore"
-    "1$crushing/emerald_ore"
-    "1$crushing/gloomslate_coal_ore"
-    "1$crushing/gloomslate_copper_ore"
-    "1$crushing/gloomslate_diamond_ore"
-    "1$crushing/gloomslate_emerald_ore"
-    "1$crushing/gloomslate_gold_ore"
-    "1$crushing/gloomslate_iron_ore"
-    "1$crushing/gloomslate_lapis_ore"
-    "1$crushing/gloomslate_redstone_ore"
-    "1$crushing/gold_ore"
-    "1$crushing/iron_ore"
-    "1$crushing/lapis_ore"
-    "1$crushing/nether_gold_ore"
-    "1$crushing/nickel_ore"
-    "1$crushing/obsidian"
-    "1$crushing/ochrum"
-    "1$crushing/ochrum_recycling"
-    "1$crushing/osmium_ore"
-    "1$crushing/platinum_ore"
-    "1$crushing/raw_copper"
-    "1$crushing/raw_copper_block"
-    "1$crushing/raw_gold"
-    "1$crushing/raw_gold_block"
-    "1$crushing/raw_iron"
-    "1$crushing/raw_iron_block"
-    "1$crushing/raw_nickel"
-    "1$crushing/raw_nickel_block"
-    "1$crushing/raw_osmium"
-    "1$crushing/raw_osmium_block"
-    "1$crushing/raw_platinum"
-    "1$crushing/raw_platinum_block"
-    "1$crushing/raw_uranium"
-    "1$crushing/raw_uranium_block"
-    "1$crushing/raw_zinc"
-    "1$crushing/raw_zinc_block"
-    "1$crushing/redstone_ore"
-    "1$crushing/sculk_stone_coal_ore"
-    "1$crushing/sculk_stone_copper_ore"
-    "1$crushing/sculk_stone_diamond_ore"
-    "1$crushing/sculk_stone_emerald_ore"
-    "1$crushing/sculk_stone_gold_ore"
-    "1$crushing/sculk_stone_iron_ore"
-    "1$crushing/sculk_stone_lapis_ore"
-    "1$crushing/sculk_stone_redstone_ore"
-    "1$crushing/tuff"
-    "1$crushing/tuff_recycling"
-    "1$crushing/uranium_ore"
-    "1$crushing/veridium"
-    "1$crushing/veridium_recycling"
-    "1$crushing/zinc_ore"
-    "1$deploying/waxed_copper_block_from_adding_wax"
-    "1$milling/lapis_lazuli"
-    "1$mixing/brass_ingot"
     "1$ornate_iron_window"
-    "1$pressing/brass_ingot"
-    "1$pressing/compat/immersiveengineering/plate_aluminum"
-    "1$pressing/compat/immersiveengineering/plate_constantan"
-    "1$pressing/compat/immersiveengineering/plate_lead"
-    "1$pressing/compat/immersiveengineering/plate_nickel"
-    "1$pressing/compat/immersiveengineering/plate_silver"
-    "1$pressing/compat/immersiveengineering/plate_steel"
-    "1$pressing/compat/immersiveengineering/plate_uranium"
-    "1$pressing/copper_ingot"
-    "1$pressing/gold_ingot"
-    "1$pressing/iron_ingot"
-    "1$sequenced_assembly/precision_mechanism"
     "1$smelting/copper_ingot_from_crushed"
     "1$smelting/gold_ingot_from_crushed"
     "1$smelting/ingot_aluminum_compat_immersiveengineering"
     "1$smelting/ingot_nickel_compat_immersiveengineering"
     "1$smelting/ingot_osmium_compat_mekanism"
     "1$smelting/ingot_silver_compat_immersiveengineering"
     "1$smelting/ingot_tin_compat_mekanism"
     "1$smelting/iron_ingot_from_crushed"
     "1$smelting/zinc_ingot_from_crushed"
-    "1$splashing/crushed_raw_copper"
-    "1$splashing/crushed_raw_gold"
-    "1$splashing/crushed_raw_iron"
-    "1$splashing/crushed_raw_zinc"
-    "1$splashing/immersiveengineering/crushed_raw_aluminum"
-    "1$splashing/immersiveengineering/crushed_raw_nickel"
-    "1$splashing/immersiveengineering/crushed_raw_silver"
-    "1$splashing/mekanism/crushed_raw_osmium"
-    "1$splashing/mekanism/crushed_raw_tin"
     "3$blasting/ingot_lead_compat_immersiveengineering"
     "3$blasting/ingot_lead_compat_mekanism"
     "3$blasting/ingot_uranium_compat_immersiveengineering"
     "3$blasting/ingot_uranium_compat_mekanism"
     "3$blasting/zinc_ingot_from_ore"
     "3$blasting/zinc_ingot_from_raw_ore"
     "3$crafting/materials/brass_block_from_compacting"
     "3$crafting/materials/brass_ingot_from_compacting"
     "3$crafting/materials/brass_ingot_from_decompacting"
     "3$crafting/materials/brass_nugget_from_decompacting"
     "3$crafting/materials/copper_nugget"
     "3$crafting/materials/raw_zinc"
     "3$crafting/materials/raw_zinc_block"
     "3$crafting/materials/zinc_block_from_compacting"
     "3$crafting/materials/zinc_ingot_from_compacting"
     "3$crafting/materials/zinc_ingot_from_decompacting"
     "3$crafting/materials/zinc_nugget_from_decompacting"
-    "3$pressing/compat/immersiveengineering/plate_electrum"
     "3$smelting/ingot_lead_compat_immersiveengineering"
     "3$smelting/ingot_lead_compat_mekanism"
     "3$smelting/ingot_uranium_compat_immersiveengineering"
     "3$smelting/ingot_uranium_compat_mekanism"
     "3$smelting/zinc_ingot_from_ore"
     "3$smelting/zinc_ingot_from_raw_ore"
-    "3$splashing/immersiveengineering/crushed_raw_lead"
-    "3$splashing/immersiveengineering/crushed_raw_uranium"
-    "3$splashing/mekanism/crushed_raw_lead"
-    "3$splashing/mekanism/crushed_raw_uranium"
   ]
 }

```


</details>

<details>
<summary>almostunified/create_aquatic_ambitions</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "create_aquatic_ambitions"
   recipes: [
     "1$channeling/exposed_copper"
     "1$crafting/materials/prismarine_alloy"
-    "1$crushing/prismarine_bricks_to_lapis_and_copper"
-    "1$mixing/prismarine_alloy"
   ]
 }

```


</details>

<details>
<summary>almostunified/create_hypertube</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "create_hypertube"
   recipes: [
     "1$hypertube"
+    "1$sequenced_assembly/tube_scanner"
   ]
 }

```


</details>

<details>
<summary>almostunified/createaddition</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "createaddition"
   recipes: [
     "1$charging/electrify_gold_block"
     "1$charging/electrify_gold_ingot"
     "1$charging/electrify_gold_nugget"
     "1$charging/electrify_gold_rod"
     "1$charging/electrify_gold_sheet"
     "1$charging/electrify_gold_wire"
-    "1$compat/immersiveengineering/constantan"
-    "1$compat/immersiveengineering/crushing/steel_ingot"
     "1$compat/immersiveengineering/rolling/aluminum_ingot"
     "1$compat/immersiveengineering/rolling/steel_ingot"
-    "1$crushing/diamond"
-    "1$crushing/ochrum_recycling"
-    "1$crushing/tuff_recycling"
-    "1$mixing/electrum"
-    "1$pressing/zinc_ingot"
     "1$rolling/brass_rod"
     "1$rolling/copper_ingot"
     "1$rolling/electrum_ingot"
     "1$rolling/gold_ingot"
     "1$rolling/iron_ingot"
     "3$crafting/electrum_block"
     "3$crafting/electrum_ingot_from_electrum_block"
     "3$crafting/electrum_ingot_from_nugget"
     "3$crafting/electrum_nugget"
-    "3$pressing/electrum_ingot"
   ]
 }

```


</details>

<details>
<summary>almostunified/oritech</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "oritech"
   recipes: [
     "1$assembler/claybeads"
     "1$atomicforge/dust/copper"
     "1$atomicforge/dust/gold"
     "1$atomicforge/dust/iron"
     "1$atomicforge/dust/nickel"
     "1$atomicforge/dust/platinum"
     "1$blasting/compat/create/crushed_nickel_to_nickel_ingot"
     "1$blasting/compat/create/crushed_platinum_to_platinum_ingot"
     "1$centrifuge/compat/clump/crushed_uranium"
     "1$centrifuge/compat/create/clump/zinc"
     "1$centrifuge/compat/enderio/endericcompound"
     "1$centrifuge/compat/mekanism/clump/lead"
     "1$centrifuge/compat/mekanism/clump/osmium"
     "1$centrifuge/compat/mekanism/clump/tin"
     "1$centrifuge/fluid/compat/clumpwet/crushed_uranium"
     "1$centrifuge/fluid/compat/create/clump/zinc"
     "1$centrifuge/fluid/compat/create/clumpacid/zinc"
     "1$centrifuge/fluid/compat/mekanism/clump/lead"
     "1$centrifuge/fluid/compat/mekanism/clump/osmium"
     "1$centrifuge/fluid/compat/mekanism/clump/tin"
     "1$centrifuge/fluid/compat/mekanism/clumpacid/lead"
     "1$centrifuge/fluid/compat/mekanism/clumpacid/osmium"
     "1$centrifuge/fluid/compat/mekanism/clumpacid/tin"
     "1$compat/enderio/alloy/steel"
     "1$compat/immersiveengineering/alloying/electrum"
     "1$compat/immersiveengineering/arcalloying/electrum"
     "1$compat/mekanism/infusing/electrum_dust"
     "1$compat/productivemetalworks/casting/block/electrum"
     "1$compat/productivemetalworks/casting/block/steel"
     "1$compat/productivemetalworks/casting/ingot/electrum"
     "1$compat/productivemetalworks/casting/ingot/nickel"
     "1$compat/productivemetalworks/casting/ingot/platinum"
     "1$compat/productivemetalworks/casting/ingot/steel"
     "1$compat/productivemetalworks/casting/nugget/nickel"
     "1$compat/productivemetalworks/casting/nugget/platinum"
     "1$copper_clump"
     "1$copper_dust"
     "1$copper_nugget_from_blasting_small_copper_dust"
     "1$copper_nugget_from_smelting_small_copper_dust"
     "1$crafting/_netheritepaint"
     "1$crafting/_redstonepaint"
     "1$crafting/addon/burst"
     "1$crafting/alloy/electrum"
     "1$crafting/alloy/steel"
     "1$crafting/basicjetpackalt"
     "1$crafting/claybeads"
     "1$crafting/pulverizer"
     "1$crafting/pulverizeralt"
-    "1$crushing/compat/create/coal"
-    "1$crushing/compat/create/copperingot"
-    "1$crushing/compat/create/goldingot"
-    "1$crushing/compat/create/ironingot"
-    "1$crushing/compat/create/nickelingot"
-    "1$crushing/compat/create/platinumingot"
     "1$deepdrill/nickel"
     "1$deepdrill/platinum"
     "1$deepdrill/uranium"
     "1$foundry/alloy/compat/create/brass"
     "1$foundry/alloy/compat/immersiveengineering/constantan"
     "1$foundry/alloy/compat/mekanism/bronze"
     "1$foundry/alloy/electrum"
     "1$foundry/alloy/gem/nickel"
     "1$foundry/alloy/gem/platinum"
     "1$foundry/alloy/steel"
     "1$gold_clump"
     "1$gold_dust"
     "1$grinder/coal"
     "1$grinder/compat/create/ore/zinc"
     "1$grinder/compat/create/raw/zinc"
     "1$grinder/compat/immersiveengineering/dust/aluminum"
     "1$grinder/compat/immersiveengineering/dust/silver"
     "1$grinder/compat/immersiveengineering/ore/aluminum"
     "1$grinder/compat/immersiveengineering/ore/lead"
     "1$grinder/compat/immersiveengineering/ore/silver"
     "1$grinder/compat/immersiveengineering/raw/aluminum"
     "1$grinder/compat/immersiveengineering/raw/lead"
     "1$grinder/compat/immersiveengineering/raw/silver"
     "1$grinder/compat/mekanism/dust/bronze"
     "1$grinder/compat/mekanism/dust/diamond"
     "1$grinder/compat/mekanism/dust/fluorite"
     "1$grinder/compat/mekanism/dust/netherite"
     "1$grinder/compat/mekanism/dust/osmium"
     "1$grinder/compat/mekanism/dust/tin"
     "1$grinder/compat/mekanism/ore/lead"
     "1$grinder/compat/mekanism/ore/osmium"
     "1$grinder/compat/mekanism/ore/tin"
     "1$grinder/compat/mekanism/raw/lead"
     "1$grinder/compat/mekanism/raw/osmium"
     "1$grinder/compat/mekanism/raw/tin"
     "1$grinder/dust/copper"
     "1$grinder/dust/gold"
     "1$grinder/dust/iron"
     "1$grinder/dust/nickel"
     "1$grinder/dust/platinum"
     "1$grinder/electrum"
     "1$grinder/ore/iron"
     "1$grinder/ore/nickel"
     "1$grinder/ore/platinum"
     "1$grinder/raw/copper"
     "1$grinder/raw/gold"
     "1$grinder/raw/iron"
     "1$grinder/raw/nickel"
     "1$grinder/raw/platinum"
     "1$grinder/recycle/iron_dust"
     "1$grinder/uranium"
     "1$grinder/uraniumcrystal"
     "1$grinder/uraniumore"
     "1$iron_clump"
     "1$iron_dust"
-    "1$mixing/compat/create/electrum"
-    "1$mixing/compat/create/nickelgem"
-    "1$mixing/compat/create/platinumgem"
-    "1$mixing/compat/create/steel"
     "1$nickel_clump"
     "1$nickel_dust"
     "1$nickel_ingot"
     "1$nickel_ingot_from_blasting_nickel_gem"
     "1$nickel_ingot_from_smelting_nickel_gem"
     "1$nickel_nugget_from_blasting_small_nickel_dust"
     "1$nickel_nugget_from_smelting_small_nickel_dust"
     "1$particle/platinum_dust"
     "1$platinum_clump"
     "1$platinum_dust"
     "1$platinum_ingot"
     "1$platinum_ingot_from_blasting_platinum_gem"
     "1$platinum_ingot_from_smelting_platinum_gem"
     "1$platinum_nugget_from_blasting_small_platinum_dust"
     "1$platinum_nugget_from_smelting_small_platinum_dust"
     "1$pulverizer/coal"
     "1$pulverizer/compat/create/ore/zinc"
     "1$pulverizer/compat/immersiveengineering/dust/aluminum"
     "1$pulverizer/compat/immersiveengineering/dust/silver"
     "1$pulverizer/compat/immersiveengineering/ore/aluminum"
     "1$pulverizer/compat/immersiveengineering/ore/silver"
     "1$pulverizer/compat/immersiveengineering/raw/aluminum"
     "1$pulverizer/compat/immersiveengineering/raw/silver"
     "1$pulverizer/compat/mekanism/dust/bronze"
     "1$pulverizer/compat/mekanism/dust/diamond"
     "1$pulverizer/compat/mekanism/dust/fluorite"
     "1$pulverizer/compat/mekanism/dust/netherite"
     "1$pulverizer/compat/mekanism/dust/osmium"
     "1$pulverizer/compat/mekanism/dust/tin"
     "1$pulverizer/compat/mekanism/ore/osmium"
     "1$pulverizer/compat/mekanism/ore/tin"
     "1$pulverizer/compat/mekanism/raw/osmium"
     "1$pulverizer/compat/mekanism/raw/tin"
     "1$pulverizer/dust/copper"
     "1$pulverizer/dust/gold"
     "1$pulverizer/dust/iron"
     "1$pulverizer/dust/nickel"
     "1$pulverizer/dust/platinum"
     "1$pulverizer/electrum"
     "1$pulverizer/ore/nickel"
     "1$pulverizer/ore/platinum"
     "1$pulverizer/raw/copper"
     "1$pulverizer/raw/gold"
     "1$pulverizer/raw/iron"
     "1$pulverizer/raw/nickel"
     "1$pulverizer/raw/platinum"
     "1$pulverizer/recycle/copper_dust"
     "1$pulverizer/recycle/gold_dust"
     "1$pulverizer/recycle/iron_dust"
     "1$pulverizer/uranium"
     "1$pulverizer/uraniumcrystal"
     "1$pulverizer/uraniumore"
     "1$refinery/compat/create/rawsheol/zinc"
     "1$refinery/compat/immersiveengineering/rawsheol/aluminum"
     "1$refinery/compat/immersiveengineering/rawsheol/lead"
     "1$refinery/compat/immersiveengineering/rawsheol/silver"
     "1$refinery/compat/mekanism/rawsheol/lead"
     "1$refinery/compat/mekanism/rawsheol/osmium"
     "1$refinery/compat/mekanism/rawsheol/tin"
     "1$refinery/rawsheol/copper"
     "1$refinery/rawsheol/gold"
     "1$refinery/rawsheol/iron"
     "1$refinery/rawsheol/nickel"
     "1$refinery/rawsheol/platinum"
     "1$refinery/siliconwashing"
     "1$silicon_blockblockinv"
     "1$silicon_from_smelting_raw_silicon"
-    "1$splashing/compat/create/nickelclump"
-    "1$splashing/compat/create/platinumclump"
-    "1$splashing/compat/create/uraniumclump"
     "1$uranium_dust_blockblockinv"
     "1$uranium_dustblock"
     "3$compat/productivemetalworks/casting/block/nickel"
     "3$compat/productivemetalworks/casting/block/platinum"
     "3$compat/productivemetalworks/melting/clump/nickel"
     "3$compat/productivemetalworks/melting/clump/platinum"
     "3$copper_ingot_from_blasting_copper_dust"
     "3$copper_ingot_from_smelting_copper_dust"
     "3$electrum_blockblock"
     "3$electrum_blockblockinv"
     "3$electrum_ingot_from_blasting_electrum_dust"
     "3$electrum_ingot_from_smelting_electrum_dust"
     "3$gold_ingot_from_blasting_gold_dust"
     "3$gold_ingot_from_smelting_gold_dust"
     "3$grinder/compat/immersiveengineering/dust/lead"
     "3$grinder/compat/mekanism/dust/lead"
     "3$grinder/compat/mekanism/dust/steel"
     "3$grinder/steel"
     "3$iron_ingot_from_blasting_iron_dust"
     "3$iron_ingot_from_smelting_iron_dust"
     "3$nickel_blockblock"
     "3$nickel_blockblockinv"
     "3$nickel_ingot_from_blasting_nickel_dust"
     "3$nickel_ingot_from_blasting_raw_nickel"
     "3$nickel_ingot_from_smelting_nickel_dust"
     "3$nickel_ingot_from_smelting_raw_nickel"
     "3$nickel_nugget"
     "3$platinum_blockblock"
     "3$platinum_blockblockinv"
     "3$platinum_ingot_from_blasting_platinum_dust"
     "3$platinum_ingot_from_blasting_raw_platinum"
     "3$platinum_ingot_from_smelting_platinum_dust"
     "3$platinum_ingot_from_smelting_raw_platinum"
     "3$platinum_nugget"
     "3$pulverizer/compat/immersiveengineering/dust/lead"
     "3$pulverizer/compat/immersiveengineering/ore/lead"
     "3$pulverizer/compat/immersiveengineering/raw/lead"
     "3$pulverizer/compat/mekanism/dust/lead"
     "3$pulverizer/compat/mekanism/dust/steel"
     "3$pulverizer/compat/mekanism/ore/lead"
     "3$pulverizer/compat/mekanism/raw/lead"
     "3$pulverizer/steel"
     "3$raw_nickel_blockblock"
     "3$raw_nickel_blockblockinv"
     "3$raw_platinum_blockblock"
     "3$raw_platinum_blockblockinv"
     "3$raw_uranium_blockblock"
     "3$raw_uranium_blockblockinv"
     "3$steel_blockblock"
     "3$steel_blockblockinv"
     "3$steel_ingot_from_blasting_steel_dust"
     "3$steel_ingot_from_smelting_steel_dust"
   ]
 }

```


</details>

<details>
<summary>almostunified/zamega</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "zamega"
   recipes: [
     "1$absolitez"
     "1$barbaracite"
     "1$baxcalibrite"
     "1$chandelurite"
     "1$chesnaughtite"
-    "1$chimechoite"
+    "1$chimechite"
     "1$clefablite"
     "1$crabominite"
     "1$darkranite"
     "1$delphoxite"
     "1$dragalgite"
     "1$dragoninite"
     "1$drampanite"
     "1$eelektrossite"
     "1$emboarite"
     "1$excadrite"
     "1$falinksite"
     "1$feraligite"
     "1$floettite"
     "1$froslassite"
     "1$garchompitez"
     "1$glimmoranite"
     "1$golisopite"
     "1$golurkite"
     "1$greninjite"
     "1$hawluchanite"
     "1$heatranite"
     "1$lucarionitez"
     "1$magearnite"
     "1$malamarite"
     "1$meganiumite"
     "1$meowsticite"
     "1$pyroarite"
     "1$raichunitex"
     "1$raichunitey"
     "1$scolipite"
     "1$scovillainite"
     "1$scraftinite"
     "1$skarmorite"
     "1$staraptite"
     "1$starminite"
     "1$tatsugirinite"
     "1$victreebelite"
     "1$zeraorite"
     "1$zygardite"
   ]
 }

```


</details>

<details>
<summary>create/crushing/asurine</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       item: "create:asurine"
     }
   ]
   processing_time: 250
   results: [
     {
       chance: 0.3
-      id: "alltheores:zinc_clump"
+      id: "create:crushed_raw_zinc"
     }
     {
       chance: 0.3
-      id: "alltheores:zinc_nugget"
+      id: "create:zinc_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/asurine_recycling</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       tag: "create:stone_types/asurine"
     }
   ]
   processing_time: 250
   results: [
     {
       chance: 0.3
-      id: "alltheores:zinc_clump"
+      id: "create:crushed_raw_zinc"
     }
     {
       chance: 0.3
-      id: "alltheores:zinc_nugget"
+      id: "create:zinc_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/coal_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/coal"
+      item: "minecraft:coal_ore"
     }
   ]
   processing_time: 150
   results: [
     {
       id: "minecraft:coal"
     }
     {
       chance: 0.75
       id: "minecraft:coal"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:cobblestone"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/copper_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/copper"
+      item: "minecraft:copper_ore"
     }
   ]
   processing_time: 250
   results: [
     {
       count: 5
-      id: "alltheores:copper_clump"
+      id: "create:crushed_raw_copper"
     }
     {
       chance: 0.25
-      id: "alltheores:copper_clump"
+      id: "create:crushed_raw_copper"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:cobblestone"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/crimsite</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       item: "create:crimsite"
     }
   ]
   processing_time: 250
   results: [
     {
       chance: 0.4
-      id: "alltheores:iron_clump"
+      id: "create:crushed_raw_iron"
     }
     {
       chance: 0.4
       id: "minecraft:iron_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/crimsite_recycling</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       tag: "create:stone_types/crimsite"
     }
   ]
   processing_time: 250
   results: [
     {
       chance: 0.4
-      id: "alltheores:iron_clump"
+      id: "create:crushed_raw_iron"
     }
     {
       chance: 0.4
       id: "minecraft:iron_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/deepslate_coal_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/coal"
+      item: "minecraft:deepslate_coal_ore"
     }
   ]
   processing_time: 300
   results: [
     {
       count: 2
       id: "minecraft:coal"
     }
     {
       chance: 0.25
       id: "minecraft:coal"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:cobbled_deepslate"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/deepslate_copper_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/copper"
+      item: "minecraft:deepslate_copper_ore"
     }
   ]
   processing_time: 350
   results: [
     {
       count: 7
-      id: "alltheores:copper_clump"
+      id: "create:crushed_raw_copper"
     }
     {
       chance: 0.25
-      id: "alltheores:copper_clump"
+      id: "create:crushed_raw_copper"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:cobbled_deepslate"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/deepslate_diamond_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/diamond"
+      item: "minecraft:deepslate_diamond_ore"
     }
   ]
   processing_time: 450
   results: [
     {
       count: 2
       id: "minecraft:diamond"
     }
     {
       chance: 0.25
       id: "minecraft:diamond"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:cobbled_deepslate"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/deepslate_emerald_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/emerald"
+      item: "minecraft:deepslate_emerald_ore"
     }
   ]
   processing_time: 450
   results: [
     {
       count: 2
       id: "minecraft:emerald"
     }
     {
       chance: 0.25
       id: "minecraft:emerald"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:cobbled_deepslate"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/deepslate_gold_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/gold"
+      item: "minecraft:deepslate_gold_ore"
     }
   ]
   processing_time: 350
   results: [
     {
       count: 2
-      id: "alltheores:gold_clump"
+      id: "create:crushed_raw_gold"
     }
     {
       chance: 0.25
-      id: "alltheores:gold_clump"
+      id: "create:crushed_raw_gold"
     }
     {
       chance: 0.75
       count: 2
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:cobbled_deepslate"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/deepslate_iron_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/iron"
+      item: "minecraft:deepslate_iron_ore"
     }
   ]
   processing_time: 350
   results: [
     {
       count: 2
-      id: "alltheores:iron_clump"
+      id: "create:crushed_raw_iron"
     }
     {
       chance: 0.25
-      id: "alltheores:iron_clump"
+      id: "create:crushed_raw_iron"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:cobbled_deepslate"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/deepslate_lapis_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/lapis"
+      item: "minecraft:deepslate_lapis_ore"
     }
   ]
   processing_time: 350
   results: [
     {
       count: 12
       id: "minecraft:lapis_lazuli"
     }
     {
       chance: 0.5
       id: "minecraft:lapis_lazuli"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:cobbled_deepslate"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/deepslate_redstone_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/redstone"
+      item: "minecraft:deepslate_redstone_ore"
     }
   ]
   processing_time: 350
   results: [
     {
       count: 7
       id: "minecraft:redstone"
     }
     {
       chance: 0.5
       id: "minecraft:redstone"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:cobbled_deepslate"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/deepslate_zinc_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/zinc"
+      item: "create:deepslate_zinc_ore"
     }
   ]
   processing_time: 350
   results: [
     {
       count: 2
-      id: "alltheores:zinc_clump"
+      id: "create:crushed_raw_zinc"
     }
     {
       chance: 0.25
-      id: "alltheores:zinc_clump"
+      id: "create:crushed_raw_zinc"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:cobbled_deepslate"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/diamond_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/diamond"
+      item: "minecraft:diamond_ore"
     }
   ]
   processing_time: 350
   results: [
     {
       id: "minecraft:diamond"
     }
     {
       chance: 0.75
       id: "minecraft:diamond"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:cobblestone"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/emerald_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/emerald"
+      item: "minecraft:emerald_ore"
     }
   ]
   processing_time: 350
   results: [
     {
       id: "minecraft:emerald"
     }
     {
       chance: 0.75
       id: "minecraft:emerald"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:cobblestone"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/gloomslate_coal_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/coal"
+      item: "deeperdarker:gloomslate_coal_ore"
     }
   ]
   processingTime: 250
   results: [
     {
       count: 2
       id: "minecraft:coal"
     }
     {
       chance: 0.75
       id: "minecraft:coal"
     }
     {
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "deeperdarker:cobbled_gloomslate"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/gloomslate_copper_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/copper"
+      item: "deeperdarker:gloomslate_copper_ore"
     }
   ]
   processingTime: 350
   results: [
     {
       count: 10
-      id: "alltheores:copper_clump"
+      id: "create:crushed_raw_copper"
     }
     {
       chance: 0.75
-      id: "alltheores:copper_clump"
+      id: "create:crushed_raw_copper"
     }
     {
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "deeperdarker:cobbled_gloomslate"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/gloomslate_diamond_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/diamond"
+      item: "deeperdarker:gloomslate_diamond_ore"
     }
   ]
   processingTime: 550
   results: [
     {
       count: 3
       id: "minecraft:diamond"
     }
     {
       chance: 0.25
       id: "minecraft:diamond"
     }
     {
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "deeperdarker:cobbled_gloomslate"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/gloomslate_emerald_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/emerald"
+      item: "deeperdarker:gloomslate_emerald_ore"
     }
   ]
   processingTime: 550
   results: [
     {
       count: 3
       id: "minecraft:emerald"
     }
     {
       chance: 0.25
       id: "minecraft:emerald"
     }
     {
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "deeperdarker:cobbled_gloomslate"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/gloomslate_gold_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/gold"
+      item: "deeperdarker:gloomslate_gold_ore"
     }
   ]
   processingTime: 350
   results: [
     {
       count: 3
-      id: "alltheores:gold_clump"
+      id: "create:crushed_raw_gold"
     }
     {
       chance: 0.75
-      id: "alltheores:gold_clump"
+      id: "create:crushed_raw_gold"
     }
     {
       count: 2
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "deeperdarker:cobbled_gloomslate"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/gloomslate_iron_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/iron"
+      item: "deeperdarker:gloomslate_iron_ore"
     }
   ]
   processingTime: 350
   results: [
     {
       count: 3
-      id: "alltheores:iron_clump"
+      id: "create:crushed_raw_iron"
     }
     {
       chance: 0.75
-      id: "alltheores:iron_clump"
+      id: "create:crushed_raw_iron"
     }
     {
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "deeperdarker:cobbled_gloomslate"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/gloomslate_lapis_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/lapis"
+      item: "deeperdarker:gloomslate_lapis_ore"
     }
   ]
   processingTime: 450
   results: [
     {
       count: 15
       id: "minecraft:lapis_lazuli"
     }
     {
       chance: 0.5
       id: "minecraft:lapis_lazuli"
     }
     {
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "deeperdarker:cobbled_gloomslate"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/gloomslate_redstone_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/redstone"
+      item: "deeperdarker:gloomslate_redstone_ore"
     }
   ]
   processingTime: 450
   results: [
     {
       count: 12
       id: "minecraft:redstone"
     }
     {
       chance: 0.5
       id: "minecraft:redstone"
     }
     {
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "deeperdarker:cobbled_gloomslate"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/gold_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/gold"
+      item: "minecraft:gold_ore"
     }
   ]
   processing_time: 250
   results: [
     {
-      id: "alltheores:gold_clump"
+      id: "create:crushed_raw_gold"
     }
     {
       chance: 0.75
-      id: "alltheores:gold_clump"
+      id: "create:crushed_raw_gold"
     }
     {
       chance: 0.75
       count: 2
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:cobblestone"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/iron_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/iron"
+      item: "minecraft:iron_ore"
     }
   ]
   processing_time: 250
   results: [
     {
-      id: "alltheores:iron_clump"
+      id: "create:crushed_raw_iron"
     }
     {
       chance: 0.75
-      id: "alltheores:iron_clump"
+      id: "create:crushed_raw_iron"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:cobblestone"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/lapis_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/lapis"
+      item: "minecraft:lapis_ore"
     }
   ]
   processing_time: 250
   results: [
     {
       count: 10
       id: "minecraft:lapis_lazuli"
     }
     {
       chance: 0.5
       id: "minecraft:lapis_lazuli"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:cobblestone"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/nether_gold_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/gold"
+      item: "minecraft:nether_gold_ore"
     }
   ]
   processing_time: 350
   results: [
     {
       count: 18
       id: "minecraft:gold_nugget"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:netherrack"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/nickel_ore</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:ores/nickel"
           }
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:ores/nickel"
     }
   ]
   processing_time: 400
   results: [
     {
-      id: "alltheores:nickel_clump"
+      id: "create:crushed_raw_nickel"
     }
     {
       chance: 0.75
-      id: "alltheores:nickel_clump"
+      id: "create:crushed_raw_nickel"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/obsidian</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       item: "minecraft:obsidian"
     }
   ]
   processing_time: 500
   results: [
     {
-      id: "mekanism:dust_obsidian"
+      id: "create:powdered_obsidian"
     }
     {
       chance: 0.75
       id: "minecraft:obsidian"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/ochrum</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       item: "create:ochrum"
     }
   ]
   processing_time: 250
   results: [
     {
       chance: 0.2
-      id: "alltheores:gold_clump"
+      id: "create:crushed_raw_gold"
     }
     {
       chance: 0.2
       id: "minecraft:gold_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/ochrum_recycling</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       tag: "create:stone_types/ochrum"
     }
   ]
   processing_time: 250
   results: [
     {
       chance: 0.2
-      id: "alltheores:gold_clump"
+      id: "create:crushed_raw_gold"
     }
     {
       chance: 0.2
       id: "minecraft:gold_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/osmium_ore</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:ores/osmium"
           }
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:ores/osmium"
     }
   ]
   processing_time: 400
   results: [
     {
-      id: "alltheores:osmium_clump"
+      id: "create:crushed_raw_osmium"
     }
     {
       chance: 0.75
-      id: "alltheores:osmium_clump"
+      id: "create:crushed_raw_osmium"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/platinum_ore</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:ores/platinum"
           }
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:ores/platinum"
     }
   ]
   processing_time: 400
   results: [
     {
-      id: "alltheores:platinum_clump"
+      id: "create:crushed_raw_platinum"
     }
     {
       chance: 0.75
-      id: "alltheores:platinum_clump"
+      id: "create:crushed_raw_platinum"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/raw_copper</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:raw_materials/copper"
     }
   ]
   processing_time: 400
   results: [
     {
-      id: "alltheores:copper_clump"
+      id: "create:crushed_raw_copper"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/raw_copper_block</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:storage_blocks/raw_copper"
     }
   ]
   processing_time: 400
   results: [
     {
       count: 9
-      id: "alltheores:copper_clump"
+      id: "create:crushed_raw_copper"
     }
     {
       chance: 0.75
       count: 9
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/raw_gold</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:raw_materials/gold"
     }
   ]
   processing_time: 400
   results: [
     {
-      id: "alltheores:gold_clump"
+      id: "create:crushed_raw_gold"
     }
     {
       chance: 0.75
       count: 2
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/raw_gold_block</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:storage_blocks/raw_gold"
     }
   ]
   processing_time: 400
   results: [
     {
       count: 9
-      id: "alltheores:gold_clump"
+      id: "create:crushed_raw_gold"
     }
     {
       chance: 0.75
       count: 18
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/raw_iron</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:raw_materials/iron"
     }
   ]
   processing_time: 400
   results: [
     {
-      id: "alltheores:iron_clump"
+      id: "create:crushed_raw_iron"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/raw_iron_block</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:storage_blocks/raw_iron"
     }
   ]
   processing_time: 400
   results: [
     {
       count: 9
-      id: "alltheores:iron_clump"
+      id: "create:crushed_raw_iron"
     }
     {
       chance: 0.75
       count: 9
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/raw_nickel</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:raw_materials/nickel"
           }
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:raw_materials/nickel"
     }
   ]
   processing_time: 400
   results: [
     {
-      id: "alltheores:nickel_clump"
+      id: "create:crushed_raw_nickel"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/raw_nickel_block</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:storage_blocks/raw_nickel"
           }
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:storage_blocks/raw_nickel"
     }
   ]
   processing_time: 400
   results: [
     {
       count: 9
-      id: "alltheores:nickel_clump"
+      id: "create:crushed_raw_nickel"
     }
     {
       chance: 0.75
       count: 9
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/raw_osmium</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:raw_materials/osmium"
           }
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:raw_materials/osmium"
     }
   ]
   processing_time: 400
   results: [
     {
-      id: "alltheores:osmium_clump"
+      id: "create:crushed_raw_osmium"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/raw_osmium_block</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:storage_blocks/raw_osmium"
           }
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:storage_blocks/raw_osmium"
     }
   ]
   processing_time: 400
   results: [
     {
       count: 9
-      id: "alltheores:osmium_clump"
+      id: "create:crushed_raw_osmium"
     }
     {
       chance: 0.75
       count: 9
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/raw_platinum</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:raw_materials/platinum"
           }
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:raw_materials/platinum"
     }
   ]
   processing_time: 400
   results: [
     {
-      id: "alltheores:platinum_clump"
+      id: "create:crushed_raw_platinum"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/raw_platinum_block</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:storage_blocks/raw_platinum"
           }
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:storage_blocks/raw_platinum"
     }
   ]
   processing_time: 400
   results: [
     {
       count: 9
-      id: "alltheores:platinum_clump"
+      id: "create:crushed_raw_platinum"
     }
     {
       chance: 0.75
       count: 9
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/raw_uranium</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:raw_materials/uranium"
           }
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:raw_materials/uranium"
     }
   ]
   processing_time: 400
   results: [
     {
-      id: "alltheores:uranium_clump"
+      id: "create:crushed_raw_uranium"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/raw_uranium_block</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:storage_blocks/raw_uranium"
           }
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:storage_blocks/raw_uranium"
     }
   ]
   processing_time: 400
   results: [
     {
       count: 9
-      id: "alltheores:uranium_clump"
+      id: "create:crushed_raw_uranium"
     }
     {
       chance: 0.75
       count: 9
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/raw_zinc</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:raw_materials/zinc"
     }
   ]
   processing_time: 400
   results: [
     {
-      id: "alltheores:zinc_clump"
+      id: "create:crushed_raw_zinc"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/raw_zinc_block</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:storage_blocks/raw_zinc"
     }
   ]
   processing_time: 400
   results: [
     {
       count: 9
-      id: "alltheores:zinc_clump"
+      id: "create:crushed_raw_zinc"
     }
     {
       chance: 0.75
       count: 9
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/redstone_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/redstone"
+      item: "minecraft:redstone_ore"
     }
   ]
   processing_time: 250
   results: [
     {
       count: 6
       id: "minecraft:redstone"
     }
     {
       chance: 0.5
       id: "minecraft:redstone"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:cobblestone"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/sculk_stone_coal_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/coal"
+      item: "deeperdarker:sculk_stone_coal_ore"
     }
   ]
   processingTime: 250
   results: [
     {
       count: 2
       id: "minecraft:coal"
     }
     {
       chance: 0.75
       id: "minecraft:coal"
     }
     {
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "deeperdarker:cobbled_sculk_stone"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/sculk_stone_copper_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/copper"
+      item: "deeperdarker:sculk_stone_copper_ore"
     }
   ]
   processingTime: 350
   results: [
     {
       count: 10
-      id: "alltheores:copper_clump"
+      id: "create:crushed_raw_copper"
     }
     {
       chance: 0.75
-      id: "alltheores:copper_clump"
+      id: "create:crushed_raw_copper"
     }
     {
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "deeperdarker:cobbled_sculk_stone"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/sculk_stone_diamond_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/diamond"
+      item: "deeperdarker:sculk_stone_diamond_ore"
     }
   ]
   processingTime: 550
   results: [
     {
       count: 3
       id: "minecraft:diamond"
     }
     {
       chance: 0.25
       id: "minecraft:diamond"
     }
     {
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "deeperdarker:cobbled_sculk_stone"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/sculk_stone_emerald_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/emerald"
+      item: "deeperdarker:sculk_stone_emerald_ore"
     }
   ]
   processingTime: 550
   results: [
     {
       count: 3
       id: "minecraft:emerald"
     }
     {
       chance: 0.25
       id: "minecraft:emerald"
     }
     {
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "deeperdarker:cobbled_sculk_stone"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/sculk_stone_gold_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/gold"
+      item: "deeperdarker:sculk_stone_gold_ore"
     }
   ]
   processingTime: 350
   results: [
     {
       count: 3
-      id: "alltheores:gold_clump"
+      id: "create:crushed_raw_gold"
     }
     {
       chance: 0.75
-      id: "alltheores:gold_clump"
+      id: "create:crushed_raw_gold"
     }
     {
       count: 2
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "deeperdarker:cobbled_sculk_stone"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/sculk_stone_iron_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/iron"
+      item: "deeperdarker:sculk_stone_iron_ore"
     }
   ]
   processingTime: 350
   results: [
     {
       count: 3
-      id: "alltheores:iron_clump"
+      id: "create:crushed_raw_iron"
     }
     {
       chance: 0.75
-      id: "alltheores:iron_clump"
+      id: "create:crushed_raw_iron"
     }
     {
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "deeperdarker:cobbled_sculk_stone"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/sculk_stone_lapis_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/lapis"
+      item: "deeperdarker:sculk_stone_lapis_ore"
     }
   ]
   processingTime: 450
   results: [
     {
       count: 15
       id: "minecraft:lapis_lazuli"
     }
     {
       chance: 0.5
       id: "minecraft:lapis_lazuli"
     }
     {
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "deeperdarker:cobbled_sculk_stone"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/sculk_stone_redstone_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/redstone"
+      item: "deeperdarker:sculk_stone_redstone_ore"
     }
   ]
   processingTime: 450
   results: [
     {
       count: 12
       id: "minecraft:redstone"
     }
     {
       chance: 0.5
       id: "minecraft:redstone"
     }
     {
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "deeperdarker:cobbled_sculk_stone"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/tuff</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       item: "minecraft:tuff"
     }
   ]
   processing_time: 350
   results: [
     {
       chance: 0.25
       id: "minecraft:flint"
     }
     {
       chance: 0.1
       id: "minecraft:gold_nugget"
     }
     {
       chance: 0.1
-      id: "alltheores:copper_nugget"
+      id: "create:copper_nugget"
     }
     {
       chance: 0.1
-      id: "alltheores:zinc_nugget"
+      id: "create:zinc_nugget"
     }
     {
       chance: 0.1
       id: "minecraft:iron_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/tuff_recycling</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       tag: "create:stone_types/tuff"
     }
   ]
   processing_time: 350
   results: [
     {
       chance: 0.25
       id: "minecraft:flint"
     }
     {
       chance: 0.1
       id: "minecraft:gold_nugget"
     }
     {
       chance: 0.1
-      id: "alltheores:copper_nugget"
+      id: "create:copper_nugget"
     }
     {
       chance: 0.1
-      id: "alltheores:zinc_nugget"
+      id: "create:zinc_nugget"
     }
     {
       chance: 0.1
       id: "minecraft:iron_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/uranium_ore</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:ores/uranium"
           }
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:ores/uranium"
     }
   ]
   processing_time: 400
   results: [
     {
-      id: "alltheores:uranium_clump"
+      id: "create:crushed_raw_uranium"
     }
     {
       chance: 0.75
-      id: "alltheores:uranium_clump"
+      id: "create:crushed_raw_uranium"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/veridium</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       item: "create:veridium"
     }
   ]
   processing_time: 250
   results: [
     {
       chance: 0.8
-      id: "alltheores:copper_clump"
+      id: "create:crushed_raw_copper"
     }
     {
       chance: 0.8
-      id: "alltheores:copper_nugget"
+      id: "create:copper_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/veridium_recycling</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       tag: "create:stone_types/veridium"
     }
   ]
   processing_time: 250
   results: [
     {
       chance: 0.8
-      id: "alltheores:copper_clump"
+      id: "create:crushed_raw_copper"
     }
     {
       chance: 0.8
-      id: "alltheores:copper_nugget"
+      id: "create:copper_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create/crushing/zinc_ore</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:ores/zinc"
+      item: "create:zinc_ore"
     }
   ]
   processing_time: 250
   results: [
     {
-      id: "alltheores:zinc_clump"
+      id: "create:crushed_raw_zinc"
     }
     {
       chance: 0.75
-      id: "alltheores:zinc_clump"
+      id: "create:crushed_raw_zinc"
     }
     {
       chance: 0.75
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
       id: "minecraft:cobblestone"
     }
   ]
 }

```


</details>

<details>
<summary>create/deploying/waxed_copper_block_from_adding_wax</summary>

```diff
 {
   type: "create:deploying"
   ingredients: [
-    {
-      tag: "c:storage_blocks/copper"
-    }
     {
       item: "minecraft:honeycomb_block"
     }
+    {
+      item: "minecraft:copper_block"
+    }
   ]
   keep_held_item: true
   results: [
     {
       id: "minecraft:waxed_copper_block"
     }
   ]
 }

```


</details>

<details>
<summary>create/milling/lapis_lazuli</summary>

```diff
 {
   type: "create:milling"
   ingredients: [
     {
-      tag: "c:gems/lapis"
+      item: "minecraft:lapis_lazuli"
     }
   ]
   processing_time: 100
   results: [
     {
       count: 2
       id: "minecraft:blue_dye"
     }
     {
       chance: 0.1
       id: "minecraft:blue_dye"
     }
   ]
 }

```


</details>

<details>
<summary>create/mixing/brass_ingot</summary>

```diff
 {
   type: "create:mixing"
   heat_requirement: "heated"
   ingredients: [
     {
       tag: "c:ingots/copper"
     }
     {
       tag: "c:ingots/zinc"
     }
   ]
   results: [
     {
       count: 2
-      id: "alltheores:brass_ingot"
+      id: "create:brass_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>create/pressing/brass_ingot</summary>

```diff
 {
   type: "create:pressing"
   ingredients: [
     {
       tag: "c:ingots/brass"
     }
   ]
   results: [
     {
-      id: "alltheores:brass_plate"
+      id: "create:brass_sheet"
     }
   ]
 }

```


</details>

<details>
<summary>create/pressing/compat/immersiveengineering/plate_aluminum</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "immersiveengineering"
         }
       ]
     }
   ]
   type: "create:pressing"
   ingredients: [
     {
       tag: "c:ingots/aluminum"
     }
   ]
   results: [
     {
-      id: "alltheores:aluminum_plate"
+      id: "immersiveengineering:plate_aluminum"
     }
   ]
 }

```


</details>

<details>
<summary>create/pressing/compat/immersiveengineering/plate_constantan</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "immersiveengineering"
         }
       ]
     }
   ]
   type: "create:pressing"
   ingredients: [
     {
       tag: "c:ingots/constantan"
     }
   ]
   results: [
     {
-      id: "alltheores:constantan_plate"
+      id: "immersiveengineering:plate_constantan"
     }
   ]
 }

```


</details>

<details>
<summary>create/pressing/compat/immersiveengineering/plate_electrum</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "immersiveengineering"
         }
       ]
     }
   ]
   type: "create:pressing"
   ingredients: [
     {
       tag: "c:ingots/electrum"
     }
   ]
   results: [
     {
-      id: "alltheores:electrum_plate"
+      id: "immersiveengineering:plate_electrum"
     }
   ]
 }

```


</details>

<details>
<summary>create/pressing/compat/immersiveengineering/plate_lead</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "immersiveengineering"
         }
       ]
     }
   ]
   type: "create:pressing"
   ingredients: [
     {
       tag: "c:ingots/lead"
     }
   ]
   results: [
     {
-      id: "alltheores:lead_plate"
+      id: "immersiveengineering:plate_lead"
     }
   ]
 }

```


</details>

<details>
<summary>create/pressing/compat/immersiveengineering/plate_nickel</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "immersiveengineering"
         }
       ]
     }
   ]
   type: "create:pressing"
   ingredients: [
     {
       tag: "c:ingots/nickel"
     }
   ]
   results: [
     {
-      id: "alltheores:nickel_plate"
+      id: "immersiveengineering:plate_nickel"
     }
   ]
 }

```


</details>

<details>
<summary>create/pressing/compat/immersiveengineering/plate_silver</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "immersiveengineering"
         }
       ]
     }
   ]
   type: "create:pressing"
   ingredients: [
     {
       tag: "c:ingots/silver"
     }
   ]
   results: [
     {
-      id: "alltheores:silver_plate"
+      id: "immersiveengineering:plate_silver"
     }
   ]
 }

```


</details>

<details>
<summary>create/pressing/compat/immersiveengineering/plate_steel</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "immersiveengineering"
         }
       ]
     }
   ]
   type: "create:pressing"
   ingredients: [
     {
       tag: "c:ingots/steel"
     }
   ]
   results: [
     {
-      id: "alltheores:steel_plate"
+      id: "immersiveengineering:plate_steel"
     }
   ]
 }

```


</details>

<details>
<summary>create/pressing/compat/immersiveengineering/plate_uranium</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "immersiveengineering"
         }
       ]
     }
   ]
   type: "create:pressing"
   ingredients: [
     {
       tag: "c:ingots/uranium"
     }
   ]
   results: [
     {
-      id: "alltheores:uranium_plate"
+      id: "immersiveengineering:plate_uranium"
     }
   ]
 }

```


</details>

<details>
<summary>create/pressing/copper_ingot</summary>

```diff
 {
   type: "create:pressing"
   ingredients: [
     {
       tag: "c:ingots/copper"
     }
   ]
   results: [
     {
-      id: "alltheores:copper_plate"
+      id: "create:copper_sheet"
     }
   ]
 }

```


</details>

<details>
<summary>create/pressing/gold_ingot</summary>

```diff
 {
   type: "create:pressing"
   ingredients: [
     {
       tag: "c:ingots/gold"
     }
   ]
   results: [
     {
-      id: "alltheores:gold_plate"
+      id: "create:golden_sheet"
     }
   ]
 }

```


</details>

<details>
<summary>create/pressing/iron_ingot</summary>

```diff
 {
   type: "create:pressing"
   ingredients: [
     {
       tag: "c:ingots/iron"
     }
   ]
   results: [
     {
-      id: "alltheores:iron_plate"
+      id: "create:iron_sheet"
     }
   ]
 }

```


</details>

<details>
<summary>create/sequenced_assembly/precision_mechanism</summary>

```diff
 {
   type: "create:sequenced_assembly"
   ingredient: {
     tag: "c:plates/gold"
   }
   loops: 5
   results: [
     {
       chance: 120
       id: "create:precision_mechanism"
     }
     {
       chance: 8
-      id: "alltheores:gold_plate"
+      id: "create:golden_sheet"
     }
     {
       chance: 8
       id: "create:andesite_alloy"
     }
     {
       chance: 5
       id: "create:cogwheel"
     }
     {
       chance: 3
       id: "minecraft:gold_nugget"
     }
     {
       chance: 2
       id: "create:shaft"
     }
     {
       chance: 2
-      id: "alltheores:gold_clump"
+      id: "create:crushed_raw_gold"
     }
     {
       id: "minecraft:iron_ingot"
     }
     {
       id: "minecraft:clock"
     }
   ]
   sequence: [
     {
       type: "create:deploying"
       ingredients: [
         {
           item: "create:incomplete_precision_mechanism"
         }
         {
           item: "create:cogwheel"
         }
       ]
       results: [
         {
           id: "create:incomplete_precision_mechanism"
         }
       ]
     }
     {
       type: "create:deploying"
       ingredients: [
         {
           item: "create:incomplete_precision_mechanism"
         }
         {
           item: "create:large_cogwheel"
         }
       ]
       results: [
         {
           id: "create:incomplete_precision_mechanism"
         }
       ]
     }
     {
       type: "create:deploying"
       ingredients: [
         {
           item: "create:incomplete_precision_mechanism"
         }
         {
           tag: "c:nuggets/iron"
         }
       ]
       results: [
         {
           id: "create:incomplete_precision_mechanism"
         }
       ]
     }
   ]
   transitional_item: {
     id: "create:incomplete_precision_mechanism"
   }
 }

```


</details>

<details>
<summary>create/splashing/crushed_raw_copper</summary>

```diff
 {
   type: "create:splashing"
   ingredients: [
     {
-      tag: "c:clumps/copper"
+      item: "create:crushed_raw_copper"
     }
   ]
   results: [
     {
       count: 9
-      id: "alltheores:copper_nugget"
+      id: "create:copper_nugget"
     }
     {
       chance: 0.5
       id: "minecraft:clay_ball"
     }
   ]
 }

```


</details>

<details>
<summary>create/splashing/crushed_raw_gold</summary>

```diff
 {
   type: "create:splashing"
   ingredients: [
     {
-      tag: "c:clumps/gold"
+      item: "create:crushed_raw_gold"
     }
   ]
   results: [
     {
       count: 9
       id: "minecraft:gold_nugget"
     }
     {
       chance: 0.5
       id: "minecraft:quartz"
     }
   ]
 }

```


</details>

<details>
<summary>create/splashing/crushed_raw_iron</summary>

```diff
 {
   type: "create:splashing"
   ingredients: [
     {
-      tag: "c:clumps/iron"
+      item: "create:crushed_raw_iron"
     }
   ]
   results: [
     {
       count: 9
       id: "minecraft:iron_nugget"
     }
     {
       chance: 0.75
       id: "minecraft:redstone"
     }
   ]
 }

```


</details>

<details>
<summary>create/splashing/crushed_raw_zinc</summary>

```diff
 {
   type: "create:splashing"
   ingredients: [
     {
-      tag: "c:clumps/zinc"
+      item: "create:crushed_raw_zinc"
     }
   ]
   results: [
     {
       count: 9
-      id: "alltheores:zinc_nugget"
+      id: "create:zinc_nugget"
     }
     {
       chance: 0.25
       id: "minecraft:gunpowder"
     }
   ]
 }

```


</details>

<details>
<summary>create/splashing/immersiveengineering/crushed_raw_aluminum</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "immersiveengineering"
         }
       ]
     }
   ]
   type: "create:splashing"
   ingredients: [
     {
       item: "create:crushed_raw_aluminum"
     }
   ]
   results: [
     {
       count: 9
-      id: "alltheores:aluminum_nugget"
+      id: "immersiveengineering:nugget_aluminum"
     }
   ]
 }

```


</details>

<details>
<summary>create/splashing/immersiveengineering/crushed_raw_lead</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "immersiveengineering"
         }
       ]
     }
   ]
   type: "create:splashing"
   ingredients: [
     {
       item: "create:crushed_raw_lead"
     }
   ]
   results: [
     {
       count: 9
-      id: "alltheores:lead_nugget"
+      id: "immersiveengineering:nugget_lead"
     }
   ]
 }

```


</details>

<details>
<summary>create/splashing/immersiveengineering/crushed_raw_nickel</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "immersiveengineering"
         }
       ]
     }
   ]
   type: "create:splashing"
   ingredients: [
     {
-      tag: "c:clumps/nickel"
+      item: "create:crushed_raw_nickel"
     }
   ]
   results: [
     {
       count: 9
-      id: "alltheores:nickel_nugget"
+      id: "immersiveengineering:nugget_nickel"
     }
   ]
 }

```


</details>

<details>
<summary>create/splashing/immersiveengineering/crushed_raw_silver</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "immersiveengineering"
         }
       ]
     }
   ]
   type: "create:splashing"
   ingredients: [
     {
       item: "create:crushed_raw_silver"
     }
   ]
   results: [
     {
       count: 9
-      id: "alltheores:silver_nugget"
+      id: "immersiveengineering:nugget_silver"
     }
   ]
 }

```


</details>

<details>
<summary>create/splashing/immersiveengineering/crushed_raw_uranium</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "immersiveengineering"
         }
       ]
     }
   ]
   type: "create:splashing"
   ingredients: [
     {
-      tag: "c:clumps/uranium"
+      item: "create:crushed_raw_uranium"
     }
   ]
   results: [
     {
       count: 9
-      id: "alltheores:uranium_nugget"
+      id: "immersiveengineering:nugget_uranium"
     }
   ]
 }

```


</details>

<details>
<summary>create/splashing/mekanism/crushed_raw_osmium</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "mekanism"
         }
       ]
     }
   ]
   type: "create:splashing"
   ingredients: [
     {
-      tag: "c:clumps/osmium"
+      item: "create:crushed_raw_osmium"
     }
   ]
   results: [
     {
       count: 9
-      id: "alltheores:osmium_nugget"
+      id: "mekanism:nugget_osmium"
     }
   ]
 }

```


</details>

<details>
<summary>create/splashing/mekanism/crushed_raw_tin</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "mekanism"
         }
       ]
     }
   ]
   type: "create:splashing"
   ingredients: [
     {
       item: "create:crushed_raw_tin"
     }
   ]
   results: [
     {
       count: 9
-      id: "alltheores:tin_nugget"
+      id: "mekanism:nugget_tin"
     }
   ]
 }

```


</details>

<details>
<summary>create_aquatic_ambitions/crushing/prismarine_bricks_to_lapis_and_copper</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       item: "minecraft:prismarine_bricks"
     }
   ]
   processing_time: 150
   results: [
     {
       chance: 0.9
       id: "minecraft:lapis_lazuli"
     }
     {
       count: 2
       id: "create:experience_nugget"
     }
     {
       chance: 0.5
       id: "create:experience_nugget"
     }
     {
       chance: 0.125
-      id: "alltheores:copper_nugget"
+      id: "create:copper_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>create_aquatic_ambitions/mixing/prismarine_alloy</summary>

```diff
 {
   type: "create:mixing"
   ingredients: [
     {
       item: "minecraft:prismarine"
     }
-    {
-      tag: "c:nuggets/copper"
-    }
+    {
+      item: "create:copper_nugget"
+    }
   ]
   results: [
     {
       id: "create_aquatic_ambitions:prismarine_alloy"
     }
   ]
 }

```


</details>

<details>
<summary>create_enchantment_industry/compacting/experience_cake_base</summary>

```diff
 {
   type: "create:compacting"
   ingredients: [
     {
       tag: "c:eggs"
     }
     {
       item: "minecraft:sugar"
     }
-    {
-      tag: "c:gems/lapis"
-    }
+    {
+      item: "minecraft:lapis_lazuli"
+    }
   ]
   results: [
     {
       id: "create_enchantment_industry:experience_cake_base"
     }
   ]
 }

```


</details>

<details>
<summary>create_hypertube/sequenced_assembly/tube_scanner</summary>

```diff
 {
   type: "create:sequenced_assembly"
   ingredient: {
     item: "create_hypertube:redstone_detector_tube_attachment"
   }
   loops: 1
   results: [
     {
       chance: 100
       id: "create_hypertube:tube_scanner_attachment"
     }
   ]
   sequence: [
     {
       type: "create:deploying"
       ingredients: [
         {
           item: "create_hypertube:tube_scanner_unfinished"
         }
         {
-          item: "create:brass_sheet"
+          tag: "c:plates/brass"
         }
       ]
       results: [
         {
           id: "create_hypertube:tube_scanner_unfinished"
         }
       ]
     }
     {
       type: "create:deploying"
       ingredients: [
         {
           item: "create_hypertube:tube_scanner_unfinished"
         }
         {
           item: "create:electron_tube"
         }
       ]
       results: [
         {
           id: "create_hypertube:tube_scanner_unfinished"
         }
       ]
     }
     {
       type: "create:deploying"
       ingredients: [
         {
           item: "create_hypertube:tube_scanner_unfinished"
         }
         {
-          item: "create:brass_sheet"
+          tag: "c:plates/brass"
         }
       ]
       results: [
         {
           id: "create_hypertube:tube_scanner_unfinished"
         }
       ]
     }
   ]
   transitional_item: {
     id: "create_hypertube:tube_scanner_unfinished"
   }
 }

```


</details>

<details>
<summary>createaddition/compat/immersiveengineering/constantan</summary>

```diff
 {
   type: "create:mixing"
   ingredients: [
     {
       tag: "c:ingots/nickel"
     }
     {
       tag: "c:ingots/copper"
     }
   ]
   results: [
     {
-      id: "alltheores:constantan_ingot"
+      id: "immersiveengineering:ingot_constantan"
       count: 2
     }
   ]
   heatRequirement: "heated"
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "immersiveengineering"
         }
       ]
     }
   ]
 }

```


</details>

<details>
<summary>createaddition/compat/immersiveengineering/crushing/steel_ingot</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:ingots/steel"
     }
   ]
   results: [
     {
-      id: "alltheores:steel_dust"
+      id: "immersiveengineering:dust_steel"
     }
   ]
   processingTime: 300
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "immersiveengineering"
         }
       ]
     }
   ]
 }

```


</details>

<details>
<summary>createaddition/crushing/diamond</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:dusts/diamond"
           }
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
-      tag: "c:gems/diamond"
+      item: "minecraft:diamond"
     }
   ]
   processing_time: 300
   results: [
     {
-      id: "alltheores:diamond_dust"
+      id: "createaddition:diamond_grit"
     }
   ]
 }

```


</details>

<details>
<summary>createaddition/crushing/ochrum_recycling</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       tag: "create:stone_types/ochrum"
     }
   ]
   processing_time: 250
   results: [
     {
       chance: 0.2
-      id: "alltheores:gold_clump"
+      id: "create:crushed_raw_gold"
     }
     {
       chance: 0.2
       id: "minecraft:gold_nugget"
     }
     {
       chance: 0.2
-      id: "alltheores:electrum_nugget"
+      id: "createaddition:electrum_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>createaddition/crushing/tuff_recycling</summary>

```diff
 {
   type: "create:crushing"
   ingredients: [
     {
       tag: "create:stone_types/tuff"
     }
   ]
   processing_time: 350
   results: [
     {
       chance: 0.25
       id: "minecraft:flint"
     }
     {
       chance: 0.1
       id: "minecraft:gold_nugget"
     }
     {
       chance: 0.1
-      id: "alltheores:copper_nugget"
+      id: "create:copper_nugget"
     }
     {
       chance: 0.1
-      id: "alltheores:zinc_nugget"
+      id: "create:zinc_nugget"
     }
     {
       chance: 0.1
       id: "minecraft:iron_nugget"
     }
     {
       chance: 0.1
-      id: "alltheores:electrum_nugget"
+      id: "createaddition:electrum_nugget"
     }
   ]
 }

```


</details>

<details>
<summary>createaddition/mixing/electrum</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:ingots/silver"
           }
         }
       ]
     }
   ]
   type: "create:mixing"
   heat_requirement: "heated"
   ingredients: [
     {
       tag: "c:ingots/gold"
     }
     {
       tag: "c:ingots/silver"
     }
   ]
   results: [
     {
       count: 2
-      id: "alltheores:electrum_ingot"
+      id: "createaddition:electrum_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>createaddition/pressing/zinc_ingot</summary>

```diff
 {
   type: "create:pressing"
   ingredients: [
     {
       tag: "c:ingots/zinc"
     }
   ]
   results: [
     {
-      id: "alltheores:zinc_plate"
+      id: "createaddition:zinc_sheet"
     }
   ]
 }

```


</details>

<details>
<summary>oritech/crushing/compat/create/coal</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
       tag: "minecraft:coals"
     }
   ]
   results: [
     {
-      id: "mekanism:dust_coal"
+      id: "oritech:coal_dust"
     }
   ]
 }

```


</details>

<details>
<summary>oritech/crushing/compat/create/copperingot</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:ingots/copper"
     }
   ]
   results: [
     {
-      id: "alltheores:copper_dust"
+      id: "oritech:copper_dust"
     }
   ]
 }

```


</details>

<details>
<summary>oritech/crushing/compat/create/goldingot</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:ingots/gold"
     }
   ]
   results: [
     {
-      id: "alltheores:gold_dust"
+      id: "oritech:gold_dust"
     }
   ]
 }

```


</details>

<details>
<summary>oritech/crushing/compat/create/ironingot</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:ingots/iron"
     }
   ]
   results: [
     {
-      id: "alltheores:iron_dust"
+      id: "oritech:iron_dust"
     }
   ]
 }

```


</details>

<details>
<summary>oritech/crushing/compat/create/nickelingot</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:ingots/nickel"
     }
   ]
   results: [
     {
-      id: "alltheores:nickel_dust"
+      id: "oritech:nickel_dust"
     }
   ]
 }

```


</details>

<details>
<summary>oritech/crushing/compat/create/platinumingot</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
   type: "create:crushing"
   ingredients: [
     {
       tag: "c:ingots/platinum"
     }
   ]
   results: [
     {
-      id: "alltheores:platinum_dust"
+      id: "oritech:platinum_dust"
     }
   ]
 }

```


</details>

<details>
<summary>oritech/mixing/compat/create/electrum</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
   type: "create:mixing"
   heat_requirement: "heated"
   ingredients: [
     {
       tag: "c:dusts/redstone"
     }
     {
       tag: "c:ingots/gold"
     }
   ]
   results: [
     {
-      id: "alltheores:electrum_ingot"
+      id: "oritech:electrum_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>oritech/mixing/compat/create/nickelgem</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
   type: "create:mixing"
   heat_requirement: "heated"
   ingredients: [
     {
       item: "oritech:nickel_gem"
     }
     {
       item: "oritech:nickel_gem"
     }
   ]
   results: [
     {
       count: 3
-      id: "alltheores:nickel_ingot"
+      id: "oritech:nickel_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>oritech/mixing/compat/create/platinumgem</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
   type: "create:mixing"
   heat_requirement: "heated"
   ingredients: [
     {
       item: "oritech:platinum_gem"
     }
     {
       item: "oritech:platinum_gem"
     }
   ]
   results: [
     {
       count: 3
-      id: "alltheores:platinum_ingot"
+      id: "oritech:platinum_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>oritech/mixing/compat/create/steel</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
   type: "create:mixing"
   heat_requirement: "heated"
   ingredients: [
     {
       tag: "c:dusts/coal"
     }
     {
       tag: "c:ingots/iron"
     }
   ]
   results: [
     {
-      id: "alltheores:steel_ingot"
+      id: "oritech:steel_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>oritech/splashing/compat/create/nickelclump</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
   type: "create:splashing"
   ingredients: [
     {
       tag: "c:clumps/nickel"
     }
   ]
   results: [
     {
       count: 9
-      id: "alltheores:nickel_nugget"
+      id: "oritech:nickel_nugget"
     }
     {
       chance: 0.5
       count: 2
       id: "oritech:small_platinum_dust"
     }
   ]
 }

```


</details>

<details>
<summary>oritech/splashing/compat/create/platinumclump</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
   type: "create:splashing"
   ingredients: [
     {
       tag: "c:clumps/platinum"
     }
   ]
   results: [
     {
       count: 9
-      id: "alltheores:platinum_nugget"
+      id: "oritech:platinum_nugget"
     }
     {
       chance: 0.25
       id: "oritech:fluxite"
     }
   ]
 }

```


</details>

<details>
<summary>oritech/splashing/compat/create/uraniumclump</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
   type: "create:splashing"
   ingredients: [
     {
       tag: "c:clumps/uranium"
     }
   ]
   results: [
     {
       count: 2
-      id: "alltheores:uranium_dust"
+      id: "oritech:uranium_dust"
     }
     {
       chance: 0.25
       id: "oritech:small_plutonium_dust"
     }
   ]
 }

```


</details>

<details>
<summary>supplementaries/trapped_present_2</summary>

```diff
 {
   fabric:load_conditions: [
     {
       condition: "supplementaries:flag"
-      flag: "present"
+      flag: "trapped_present"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "supplementaries:flag"
-          flag: "present"
+          flag: "trapped_present"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   pattern: [
     "000"
     "010"
     "000"
   ]
   key: {
     0: {
       item: "minecraft:paper"
     }
     1: {
       item: "minecraft:tripwire_hook"
     }
   }
   result: {
-    id: "supplementaries:present"
+    id: "supplementaries:trapped_present"
     count: 1
   }
 }

```


</details>

<details>
<summary>supplementaries/trapped_present_3</summary>

```diff
 {
   fabric:load_conditions: [
     {
       condition: "supplementaries:flag"
-      flag: "present"
+      flag: "trapped_present"
     }
     {
       condition: "fabric:mod_loaded"
       modid: "create"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "supplementaries:flag"
-          flag: "present"
+          flag: "trapped_present"
         }
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   pattern: [
     "000"
     "010"
     "000"
   ]
   key: {
     0: {
-      item: "minecraft:paper"
+      item: "create:cardboard"
     }
     1: {
       item: "minecraft:tripwire_hook"
     }
   }
   result: {
-    id: "supplementaries:present"
+    id: "supplementaries:trapped_present"
     count: 1
   }
 }

```


</details>

</blockquote>

</details>

<details open>
<summary>Removed (2)</summary>
<blockquote>

<details>
<summary>almostunified/create_enchantment_industry</summary>

```diff
-{
-  type: "almostunified:client_recipe_tracker"
-  namespace: "create_enchantment_industry"
-  recipes: [
-    "1$compacting/experience_cake_base"
-  ]
-}

```


</details>

<details>
<summary>zamega/chimechoite</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  key: {
-    #: {
-      tag: "c:gems/diamond"
-    }
-    b: {
-      item: "minecraft:bell"
-    }
-    l: {
-      tag: "c:ingots/gold"
-    }
-    e: {
-      item: "mega_showdown:mega_stone"
-    }
-  }
-  pattern: [
-    " b "
-    "lel"
-    " # "
-  ]
-  result: {
-    id: "zamega:chimechoite"
-  }
-}

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details open>
<summary>Added (1)</summary>
<blockquote>

<details>
<summary>minecraft:item/c:loom_patterns</summary>

```diff
+[
+  "#the_bumblezone:banner_patterns"
+  "minecraft:creeper_banner_pattern"
+  "minecraft:flow_banner_pattern"
+  "minecraft:flower_banner_pattern"
+  "minecraft:globe_banner_pattern"
+  "minecraft:guster_banner_pattern"
+  "minecraft:mojang_banner_pattern"
+  "minecraft:piglin_banner_pattern"
+  "minecraft:skull_banner_pattern"
+]

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (8)</summary>
<blockquote>

<details>
<summary>minecraft:block/c:ores_in_ground/end_stone</summary>

```diff
 [
   ... (18 entries)
-  "silentgear:azure_silver_block"
+  "silentgear:azure_silver_ore"
 ]

```


</details>

<details>
<summary>minecraft:block/cookingforblockheads:kitchen_item_providers</summary>

```diff
 [
   ... (201 entries)
-  "storagedrawers:fractional_drawers_3?"
-  "storagedrawers:standard_drawers_1?"
-  "storagedrawers:standard_drawers_2?"
-  "storagedrawers:standard_drawers_4?"
+  "storagedrawers:acacia_full_drawers_1?"
+  "storagedrawers:acacia_full_drawers_2?"
+  "storagedrawers:acacia_full_drawers_4?"
+  "storagedrawers:acacia_half_drawers_1?"
+  "storagedrawers:acacia_half_drawers_2?"
+  "storagedrawers:acacia_half_drawers_4?"
+  "storagedrawers:bamboo_full_drawers_1?"
+  "storagedrawers:bamboo_full_drawers_2?"
+  "storagedrawers:bamboo_full_drawers_4?"
+  "storagedrawers:bamboo_half_drawers_1?"
+  "storagedrawers:bamboo_half_drawers_2?"
+  "storagedrawers:bamboo_half_drawers_4?"
+  "storagedrawers:birch_full_drawers_1?"
+  "storagedrawers:birch_full_drawers_2?"
+  "storagedrawers:birch_full_drawers_4?"
+  "storagedrawers:birch_half_drawers_1?"
+  "storagedrawers:birch_half_drawers_2?"
+  "storagedrawers:birch_half_drawers_4?"
+  "storagedrawers:cherry_full_drawers_1?"
+  "storagedrawers:cherry_full_drawers_2?"
+  "storagedrawers:cherry_full_drawers_4?"
+  "storagedrawers:cherry_half_drawers_1?"
+  "storagedrawers:cherry_half_drawers_2?"
+  "storagedrawers:cherry_half_drawers_4?"
+  "storagedrawers:crimson_full_drawers_1?"
+  "storagedrawers:crimson_full_drawers_2?"
+  "storagedrawers:crimson_full_drawers_4?"
+  "storagedrawers:crimson_half_drawers_1?"
+  "storagedrawers:crimson_half_drawers_2?"
+  "storagedrawers:crimson_half_drawers_4?"
+  "storagedrawers:dark_oak_full_drawers_1?"
+  "storagedrawers:dark_oak_full_drawers_2?"
+  "storagedrawers:dark_oak_full_drawers_4?"
+  "storagedrawers:dark_oak_half_drawers_1?"
+  "storagedrawers:dark_oak_half_drawers_2?"
+  "storagedrawers:dark_oak_half_drawers_4?"
+  "storagedrawers:jungle_full_drawers_1?"
+  "storagedrawers:jungle_full_drawers_2?"
+  "storagedrawers:jungle_full_drawers_4?"
+  "storagedrawers:jungle_half_drawers_1?"
+  "storagedrawers:jungle_half_drawers_2?"
+  "storagedrawers:jungle_half_drawers_4?"
+  "storagedrawers:mangrove_full_drawers_1?"
+  "storagedrawers:mangrove_full_drawers_2?"
+  "storagedrawers:mangrove_full_drawers_4?"
+  "storagedrawers:mangrove_half_drawers_1?"
+  "storagedrawers:mangrove_half_drawers_2?"
+  "storagedrawers:mangrove_half_drawers_4?"
+  "storagedrawers:oak_full_drawers_1?"
+  "storagedrawers:oak_full_drawers_2?"
+  "storagedrawers:oak_full_drawers_4?"
+  "storagedrawers:oak_half_drawers_1?"
+  "storagedrawers:oak_half_drawers_2?"
+  "storagedrawers:oak_half_drawers_4?"
+  "storagedrawers:spruce_full_drawers_1?"
+  "storagedrawers:spruce_full_drawers_2?"
+  "storagedrawers:spruce_full_drawers_4?"
+  "storagedrawers:spruce_half_drawers_1?"
+  "storagedrawers:spruce_half_drawers_2?"
+  "storagedrawers:spruce_half_drawers_4?"
+  "storagedrawers:warped_full_drawers_1?"
+  "storagedrawers:warped_full_drawers_2?"
+  "storagedrawers:warped_full_drawers_4?"
+  "storagedrawers:warped_half_drawers_1?"
+  "storagedrawers:warped_half_drawers_2?"
+  "storagedrawers:warped_half_drawers_4?"
 ]

```


</details>

<details>
<summary>minecraft:block/create:brittle</summary>

```diff
 [
   ... (5 entries)
+  "#supplementaries:buntings?"
+  "#supplementaries:candle_holders?"
+  "#supplementaries:sconces?"
   ... (62 entries)
+  "supplementaries:ash?"
+  "supplementaries:barnacles?"
+  "supplementaries:crank?"
+  "supplementaries:doormat?"
+  "supplementaries:item_shelf?"
+  "supplementaries:pancake?"
+  "supplementaries:sconce_lever?"
 ]

```


</details>

<details>
<summary>minecraft:block/create:movable_empty_collider</summary>

```diff
 [
   ... (4 entries)
+  "#supplementaries:timber_frames?"
   ... (10 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:combination_step_sound_blocks</summary>

```diff
 [
   ... (27 entries)
+  "supplementaries:doormat"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:inside_step_sound_blocks</summary>

```diff
 [
   ... (18 entries)
+  "supplementaries:bamboo_spikes"
   ... (1 entries)
+  "supplementaries:pancake"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/industrialforegoing:mob_imprisonment_tool_blacklist</summary>

```diff
 [
   ... (1 entries)
+  "cobblemon:pokemon?"
 ]

```


</details>

<details>
<summary>minecraft:item/reliquified_artifacts:anglers_hat_valuables</summary>

```diff
 [
-  "#c:gems?"
-  "#c:ingots?"
-  "#c:nuggets?"
   ... (6 entries)
 ]

```


</details>

</blockquote>

</details>

<details open>
<summary>Removed (2)</summary>
<blockquote>

<details>
<summary>minecraft:item/create:brittle</summary>

```diff
-[
-  "#supplementaries:candle_holders?"
-  "#supplementaries:sconces?"
-  "supplementaries:sconce_lever?"
-]

```


</details>

<details>
<summary>minecraft:item/create:movable_empty_collider</summary>

```diff
-[
-  "#supplementaries:candle_holders?"
-  "#supplementaries:sconces?"
-]

```


</details>

</blockquote>

</details>

## ✍️ Registries

<details open>
<summary>Changed (1)</summary>
<blockquote>

<details>
<summary>item</summary>

```diff
 [
   ... (3153 entries)
+  "allthemons:shiny_pika_star"
   ... (38473 entries)
-  "zamega:chimechoite"
+  "zamega:chimechite"
   ... (40 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details open>
<summary>Added (2)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/blaze</summary>

```diff
+{
+  pools: [
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/enderman</summary>

```diff
+{
+  pools: [
+  ]
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (10)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/allthemons/blocks/pokemon_egg</summary>

```diff
 {
   type: "minecraft:block"
   functions: [
     {
       function: "minecraft:explosion_decay"
     }
   ]
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_components"
               include: [
+                "allthemons:aspects"
                 "allthemons:egg_level"
                 "allthemons:egg_time"
                 "allthemons:features"
                 "allthemons:ivs"
                 "allthemons:moves"
                 "allthemons:nature"
                 "allthemons:shiny_modifier"
                 "allthemons:species"
               ]
               source: "block_entity"
             }
           ]
           name: "allthemons:pokemon_egg"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "allthemons:blocks/pokemon_egg"
 }

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/drowned</summary>

```diff
 {
-  random_sequence: "artifacts:entity_equipment/drowned"
   pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "artifacts:config_value_chance"
-          config: "entity_equipment"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/snorkel"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/flippers"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/husk</summary>

```diff
 {
-  random_sequence: "artifacts:entity_equipment/husk"
   pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "artifacts:config_value_chance"
-          config: "entity_equipment"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/vampiric_glove"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/thorn_pendant"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/piglin</summary>

```diff
 {
-  random_sequence: "artifacts:entity_equipment/piglin"
   pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "artifacts:config_value_chance"
-          config: "entity_equipment"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/golden_hook"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/universal_attractor"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/obsidian_skull"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/piglin_brute</summary>

```diff
 {
-  random_sequence: "artifacts:entity_equipment/piglin_brute"
   pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "artifacts:config_value_chance"
-          config: "entity_equipment"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/onion_ring"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/strider_shoes"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/skeleton</summary>

```diff
 {
-  random_sequence: "artifacts:entity_equipment/skeleton"
   pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "artifacts:config_value_chance"
-          config: "entity_equipment"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/night_vision_goggles"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/drinking_hat"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/flame_pendant"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/stray</summary>

```diff
 {
-  random_sequence: "artifacts:entity_equipment/stray"
   pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "artifacts:config_value_chance"
-          config: "entity_equipment"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/snowshoes"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/steadfast_spikes"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/wither_skeleton</summary>

```diff
 {
-  random_sequence: "artifacts:entity_equipment/wither_skeleton"
   pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "artifacts:config_value_chance"
-          config: "entity_equipment"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/fire_gauntlet"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/antidote_vessel"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/zombie</summary>

```diff
 {
-  random_sequence: "artifacts:entity_equipment/zombie"
   pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "artifacts:config_value_chance"
-          config: "entity_equipment"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/cowboy_hat"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/bunny_hoppers"
-        }
-        {
-          type: "minecraft:loot_table"
-          functions: [
-            {
-              components: {
-                artifacts:hide_when_invisible: {
-                  enabled: false
-                }
-              }
-              function: "minecraft:set_components"
-            }
-          ]
-          value: "artifacts:items/scarf_of_invisibility"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/zombified_piglin</summary>

```diff
 {
-  random_sequence: "artifacts:entity_equipment/zombified_piglin"
   pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "artifacts:config_value_chance"
-          config: "entity_equipment"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/golden_hook"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/universal_attractor"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/obsidian_skull"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

</blockquote>

</details>

