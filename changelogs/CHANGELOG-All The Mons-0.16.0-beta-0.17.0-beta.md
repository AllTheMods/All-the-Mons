# Changelog

# 📦 0.17.0-beta

## 📰 General changes and notes

Summary of changes here!

<details open>
<summary>Github Commits :octocat:</summary>
<blockquote>

- Remove invalid seeds from reward table
- Blacklist capturing of trainer mobs
- Modular bees nerfs from ATM10
- Restrict bell tower spawn to 64-87 Y
</blockquote>

</details>

---

## 🛠️ Mods

<details>
<summary>Updated (25)</summary>

- AllTheTweaks (2.9.1) -> (2.9.2)
- AlmostUnified (1.21.1-1.3.0) -> (1.21.1-1.4.1)
- Ars Elemancy (1.15) -> (1.16)
- Artifacts (13.2.0) -> (13.2.1)
- Cobblemon Battle Extras (1.12.41) -> (1.12.42)
- Common Networking (1.0.21-1.21.1) -> (1.0.20-1.21.1)
- Cooking for Blockheads (21.1.19) -> (21.1.20)
- FTB Quests (2101.1.23) -> (2101.1.24)
- FTB Teams (2101.1.9) -> (2101.1.10)
- Journeymap (1.21.1-6.0.0-beta.60) -> (1.21.1-6.0.0-beta.58)
- Moonlight Lib (1.21-2.29.26) -> (1.21-2.29.29)
- NeoForge (21.1.222) -> (21.1.224)
- Occultism (1.206.0) -> (1.207.2)
- Productive Bees (1.21.1-13.13.2) -> (1.21.1-13.13.3)
- Productive Metalworks (1.21.1-1.14.0) -> (1.21.1-1.15.0)
- Relics (0.11.11) -> (0.11.13)
- reliquified_artifacts (1.0.3) -> (1.0.4)
- Roots Classic (1.21.1-1.5.6) -> (1.21.1-1.5.7)
- Sauce Library (0.0.28.72) -> (0.0.29.73)
- Sophisticated Backpacks (3.25.36) -> (3.25.37)
- Sophisticated Core (1.4.15) -> (1.4.19)
- Sophisticated Storage (1.5.34) -> (1.5.35)
- Supplementaries (1.21-3.5.30) -> (1.21-3.5.32)
- The Bumblezone (7.13.0+1.21.1-neoforge) -> (7.13.1+1.21.1-neoforge)
- Theurgy (1.70.0) -> (1.71.0)

</details>

## 🍳 Recipes

<details>
<summary>Added (11)</summary>
<blockquote>

<details>
<summary>allthemods/modularbees/electrode_copper</summary>

```diff
+{
+  type: "kubejs:shaped"
+  result: {
+    id: "modularbees:electrode_copper"
+    count: 1
+  }
+  pattern: [
+    " NG"
+    " BN"
+    "I  "
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/copper"
+    }
+    B: {
+      tag: "c:storage_blocks/copper"
+    }
+    N: {
+      tag: "c:ingots/netherite"
+    }
+    G: {
+      tag: "c:storage_blocks/gold"
+    }
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/modularbees/recipes.js"
+    line: 31
+  }
+}

```


</details>

<details>
<summary>allthemods/modularbees/electrode_gold</summary>

```diff
+{
+  type: "kubejs:shaped"
+  result: {
+    id: "modularbees:electrode_gold"
+    count: 1
+  }
+  pattern: [
+    " NG"
+    " BN"
+    "I  "
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/gold"
+    }
+    B: {
+      tag: "c:storage_blocks/gold"
+    }
+    N: {
+      item: "modularbees:electrode_iron"
+    }
+    G: {
+      tag: "c:storage_blocks/gold"
+    }
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/modularbees/recipes.js"
+    line: 57
+  }
+}

```


</details>

<details>
<summary>allthemods/modularbees/electrode_iron</summary>

```diff
+{
+  type: "kubejs:shaped"
+  result: {
+    id: "modularbees:electrode_iron"
+    count: 1
+  }
+  pattern: [
+    " NG"
+    " BN"
+    "I  "
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    B: {
+      tag: "c:storage_blocks/iron"
+    }
+    N: {
+      item: "modularbees:electrode_copper"
+    }
+    G: {
+      tag: "c:storage_blocks/gold"
+    }
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/modularbees/recipes.js"
+    line: 44
+  }
+}

```


</details>

<details>
<summary>allthemods/modularbees/modular_beehive_alveary</summary>

```diff
+{
+  type: "kubejs:shaped"
+  result: {
+    id: "modularbees:modular_beehive_alveary"
+    count: 1
+  }
+  pattern: [
+    "EPE"
+    "PNP"
+    "EPE"
+  ]
+  key: {
+    P: {
+      item: "modularbees:modular_beehive_part"
+    }
+    E: {
+      tag: "productivebees:expansion_boxes"
+    }
+    N: {
+      tag: "c:nuggets/vibranium"
+    }
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/modularbees/recipes.js"
+    line: 117
+  }
+}

```


</details>

<details>
<summary>allthemods/modularbees/modular_beehive_core</summary>

```diff
+{
+  type: "kubejs:shaped"
+  result: {
+    id: "modularbees:modular_beehive_core"
+    count: 1
+  }
+  pattern: [
+    "POP"
+    "UBU"
+    "PAP"
+  ]
+  key: {
+    P: {
+      item: "modularbees:scented_plank"
+    }
+    A: {
+      item: "productivelib:upgrade_adult"
+    }
+    B: {
+      item: "minecraft:iron_bars"
+    }
+    U: {
+      tag: "c:ingots/unobtainium"
+    }
+    O: {
+      item: "productivelib:upgrade_productivity_4"
+    }
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/modularbees/recipes.js"
+    line: 83
+  }
+}

```


</details>

<details>
<summary>allthemods/modularbees/modular_beehive_feeder</summary>

```diff
+{
+  type: "kubejs:shaped"
+  result: {
+    id: "modularbees:modular_beehive_feeder"
+    count: 1
+  }
+  pattern: [
+    " P "
+    "PFP"
+    " P "
+  ]
+  key: {
+    P: {
+      item: "modularbees:modular_beehive_part"
+    }
+    F: {
+      item: "productivebees:feeder"
+    }
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/modularbees/recipes.js"
+    line: 105
+  }
+}

```


</details>

<details>
<summary>allthemods/modularbees/modular_beehive_overclocker</summary>

```diff
+{
+  type: "kubejs:shaped"
+  result: {
+    id: "modularbees:modular_beehive_overclocker"
+    count: 1
+  }
+  pattern: [
+    "PBP"
+    "BOB"
+    "PBP"
+  ]
+  key: {
+    P: {
+      item: "modularbees:modular_beehive_part"
+    }
+    B: {
+      item: "minecraft:iron_bars"
+    }
+    O: {
+      item: "productivelib:upgrade_productivity_4"
+    }
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/modularbees/recipes.js"
+    line: 129
+  }
+}

```


</details>

<details>
<summary>allthemods/modularbees/modular_beehive_part</summary>

```diff
+{
+  type: "kubejs:shaped"
+  result: {
+    id: "modularbees:modular_beehive_part"
+    count: 1
+  }
+  pattern: [
+    "PPP"
+    "PVP"
+    "PPP"
+  ]
+  key: {
+    P: {
+      item: "modularbees:scented_plank"
+    }
+    V: {
+      tag: "c:ingots/vibranium"
+    }
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/modularbees/recipes.js"
+    line: 94
+  }
+}

```


</details>

<details>
<summary>allthemods/modularbees/scented_plank</summary>

```diff
+{
+  type: "kubejs:shaped"
+  result: {
+    id: "modularbees:scented_plank"
+    count: 4
+  }
+  pattern: [
+    "NHN"
+    "PPP"
+    "NHN"
+  ]
+  key: {
+    H: {
+      item: "minecraft:honey_block"
+    }
+    P: {
+      tag: "minecraft:planks"
+    }
+    N: {
+      tag: "c:nuggets/allthemodium"
+    }
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/modularbees/recipes.js"
+    line: 69
+  }
+}

```


</details>

<details>
<summary>modularbees/kjs/modularbees_electrode_gold</summary>

```diff
+{
+  type: "modularbees:overclocker_electrode"
+  electrode: {
+    id: "modularbees:electrode_gold"
+    count: 1
+  }
+  power: 1.8
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/modularbees/recipes.js"
+    line: 17
+  }
+}

```


</details>

<details>
<summary>modularbees/kjs/modularbees_electrode_netherite</summary>

```diff
+{
+  type: "modularbees:overclocker_electrode"
+  electrode: {
+    id: "modularbees:electrode_netherite"
+    count: 1
+  }
+  power: 2.25
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/modularbees/recipes.js"
+    line: 18
+  }
+}

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (3)</summary>
<blockquote>

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
<summary>minecraft/repair_item</summary>

```diff
 {
-  type: "minecraft:crafting_special_repairitem"
+  type: "occultism:crafting_special_repairitem"
   category: "misc"
 }

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (11)</summary>
<blockquote>

<details>
<summary>modularbees/electrode/electrode_gold</summary>

```diff
-{
-  type: "modularbees:overclocker_electrode"
-  electrode: {
-    count: 1
-    id: "modularbees:electrode_gold"
-  }
-  power: 2.8
-}

```


</details>

<details>
<summary>modularbees/electrode/electrode_netherite</summary>

```diff
-{
-  type: "modularbees:overclocker_electrode"
-  electrode: {
-    count: 1
-    id: "modularbees:electrode_netherite"
-  }
-  power: 5
-}

```


</details>

<details>
<summary>modularbees/electrode_copper</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    B: {
-      tag: "c:dyes/black"
-    }
-    G: {
-      tag: "c:nuggets/gold"
-    }
-    M: {
-      tag: "c:ingots/copper"
-    }
-    Z: {
-      tag: "c:storage_blocks/copper"
-    }
-  }
-  pattern: [
-    " BG"
-    " ZB"
-    "M  "
-  ]
-  result: {
-    count: 1
-    id: "modularbees:electrode_copper"
-  }
-}

```


</details>

<details>
<summary>modularbees/electrode_gold</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    B: {
-      tag: "c:dyes/black"
-    }
-    G: {
-      tag: "c:nuggets/gold"
-    }
-    M: {
-      tag: "c:ingots/gold"
-    }
-    Z: {
-      tag: "c:storage_blocks/gold"
-    }
-  }
-  pattern: [
-    " BG"
-    " ZB"
-    "M  "
-  ]
-  result: {
-    count: 1
-    id: "modularbees:electrode_gold"
-  }
-}

```


</details>

<details>
<summary>modularbees/electrode_iron</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    B: {
-      tag: "c:dyes/black"
-    }
-    G: {
-      tag: "c:nuggets/gold"
-    }
-    M: {
-      tag: "c:ingots/iron"
-    }
-    Z: {
-      tag: "c:storage_blocks/iron"
-    }
-  }
-  pattern: [
-    " BG"
-    " ZB"
-    "M  "
-  ]
-  result: {
-    count: 1
-    id: "modularbees:electrode_iron"
-  }
-}

```


</details>

<details>
<summary>modularbees/modular_alveary</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      tag: "productivebees:expansion_boxes"
-    }
-    {
-      item: "modularbees:modular_beehive_part"
-    }
-  ]
-  result: {
-    count: 1
-    id: "modularbees:modular_beehive_alveary"
-  }
-}

```


</details>

<details>
<summary>modularbees/modular_beehive_core</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    1: {
-      item: "productivelib:upgrade_simulator"
-    }
-    2: {
-      item: "productivelib:upgrade_adult"
-    }
-    B: {
-      item: "minecraft:iron_bars"
-    }
-    H: {
-      tag: "productivebees:advanced_beehives"
-    }
-    P: {
-      item: "modularbees:scented_plank"
-    }
-  }
-  pattern: [
-    "P1P"
-    "BHB"
-    "P2P"
-  ]
-  result: {
-    count: 1
-    id: "modularbees:modular_beehive_core"
-  }
-}

```


</details>

<details>
<summary>modularbees/modular_beehive_part</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    B: {
-      item: "minecraft:iron_bars"
-    }
-    P: {
-      item: "modularbees:scented_plank"
-    }
-  }
-  pattern: [
-    "PPP"
-    "PBP"
-    "PPP"
-  ]
-  result: {
-    count: 1
-    id: "modularbees:modular_beehive_part"
-  }
-}

```


</details>

<details>
<summary>modularbees/modular_feeder</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "productivebees:feeder"
-    }
-    {
-      item: "modularbees:modular_beehive_part"
-    }
-  ]
-  result: {
-    count: 1
-    id: "modularbees:modular_beehive_feeder"
-  }
-}

```


</details>

<details>
<summary>modularbees/modular_overclocker</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    B: {
-      item: "minecraft:iron_bars"
-    }
-    C: {
-      item: "minecraft:clock"
-    }
-    P: {
-      item: "modularbees:modular_beehive_part"
-    }
-    R: {
-      item: "minecraft:repeater"
-    }
-    X: {
-      item: "minecraft:comparator"
-    }
-  }
-  pattern: [
-    "BCB"
-    "RPR"
-    "BXB"
-  ]
-  result: {
-    count: 1
-    id: "modularbees:modular_beehive_overclocker"
-  }
-}

```


</details>

<details>
<summary>modularbees/scented_plank</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "building"
-  key: {
-    H: {
-      item: "modularbees:honey_jelly"
-    }
-    P: {
-      tag: "minecraft:planks"
-    }
-    W: {
-      item: "productivebees:wax"
-    }
-  }
-  pattern: [
-    "WHW"
-    "PPP"
-    "WHW"
-  ]
-  result: {
-    count: 3
-    id: "modularbees:scented_plank"
-  }
-}

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details open>
<summary>Changed (6)</summary>
<blockquote>

<details>
<summary>minecraft:block/cookingforblockheads:kitchen_connectors</summary>

```diff
 [
   ... (154 entries)
+  "farmersdelight:stove?"
   ... (46 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/c:capturing_not_supported</summary>

```diff
 [
   ... (12 entries)
+  "rctmod:trainer"
+  "rctmod:trainer_association"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:loom_patterns</summary>

```diff
 [
   ... (2 entries)
+  "minecraft:creeper_banner_pattern"
+  "minecraft:flow_banner_pattern"
   ... (2 entries)
+  "minecraft:flower_banner_pattern"
+  "minecraft:globe_banner_pattern"
   ... (2 entries)
+  "minecraft:guster_banner_pattern"
+  "minecraft:mojang_banner_pattern"
   ... (2 entries)
+  "minecraft:piglin_banner_pattern"
   ... (1 entries)
+  "minecraft:skull_banner_pattern"
 ]

```


</details>

<details>
<summary>minecraft:item/relics:relic</summary>

```diff
 [
-  "relics:amphibian_boot"
-  "relics:aqua_walker"
-  "relics:bastion_ring"
-  "relics:chorus_inhibitor"
-  "relics:drowned_belt"
-  "relics:elytra_booster"
-  "relics:enders_hand"
-  "relics:holy_locket"
-  "relics:hunter_belt"
-  "relics:ice_breaker"
-  "relics:ice_skates"
-  "relics:infinity_ham"
+  "relics:chef_hat"
+  "relics:chorus_staff"
+  "relics:clot_of_time"
+  "relics:cut_glass_boot"
+  "relics:experience_disperser"
+  "relics:hunting_belt"
   ... (1 entries)
-  "relics:leather_belt"
-  "relics:magic_mirror"
-  "relics:magma_walker"
-  "relics:midnight_robe"
-  "relics:phantom_boot"
-  "relics:rage_glove"
-  "relics:reflection_necklace"
-  "relics:roller_skates"
-  "relics:shadow_glaive"
-  "relics:space_dissector"
-  "relics:spore_sack"
+  "relics:kinetic_belt"
+  "relics:leafy_mantle"
+  "relics:midnight_mantle"
+  "relics:piglin_mask"
+  "relics:reflective_necklace"
+  "relics:rider_flute"
+  "relics:ring_of_the_seven_deadly_sins"
+  "relics:roller_skate"
+  "relics:sphere_of_self_sacrifice"
   ... (1 entries)
-  "relics:wool_mitten"
 ]

```


</details>

<details>
<summary>minecraft:item/reliquified_artifacts:mimic_loot</summary>

```diff
 [
   ... (52 entries)
+  "relics:experience_disperser"
   ... (12 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/reliquified_artifacts:mimificable</summary>

```diff
 [
   ... (52 entries)
+  "relics:experience_disperser"
   ... (12 entries)
 ]

```


</details>

</blockquote>

</details>

## ✍️ Registries

## 🗝️ Loot Table

