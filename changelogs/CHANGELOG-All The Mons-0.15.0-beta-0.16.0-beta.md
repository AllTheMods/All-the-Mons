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
- removed raw materials from angler hat loot (Uncandango)
- fix darkmode font duplication (Uncandango)
- radical red gyms now always spawn in villages (Uncandango)
</blockquote>

</details>

---

## 🛠️ Mods

<details>
<summary>Updated (16)</summary>

- All The Mons (0.0.44) -> (0.0.46)
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

<details open>
<summary>Added (8)</summary>
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

<details open>
<summary>Changed (3)</summary>
<blockquote>

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
<summary>Removed (1)</summary>
<blockquote>

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
-  "#c:raw_materials?"
   ... (5 entries)
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

