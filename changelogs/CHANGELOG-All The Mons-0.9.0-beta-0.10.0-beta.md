# Changelog

# 📦 0.10.0-beta

## 📰 General changes and notes

Summary of changes here!

<details open>
<summary>Github Commits :octocat:</summary>
<blockquote>

- Hydrogen now generates 10x less energy (Uncandango)
- Some caps recipes were removed from Cobblemon Utility+ (will come back with a new recipe in the future) (Uncandango)
- Prevent tick acceleration on Cobblemon Pasture (Uncandango)
- Prevent ways to capture cobblemon with mods (Uncandango)
- Prevent capture outside battle if:
  - party leader is weaker
  - pokemon is mythical, ultra beast, paradox or legendary
- Prevent fighting mons before acquiring Pika Star if:
  - pokemon is gen3+ AND mythical, ultra beast, paradox or legendary
- Added notification when a shiny spawns for a player (LobsterJonn)
- Added paradox pokemon spawning mechanic (LobsterJonn)
- Added textures for custom balls in battle extras gui (LobsterJonn)
- Capture XP implementation (LobsterJonn)
- Added inheritance of regional form when breeding (LobsterJonn)
- Giving a link cable to one of the mon parents will act as if it has been traded and increase shiny chance (LobsterJonn)
- Hatched mons can no longer inherit egg moves that are not in their moveset (LobsterJonn)
- You can stop egg laying by putting a redstone block under the pasture block (temporary solution) (LobsterJonn)
- Campfire Pots now have their inventory exposed to item handlers (LobsterJonn)
- Silent gear sinew now drops from Wooloo, Dubwool, Mareep, Flaaffy, Ampharos, Lechonk, Oinkologne, Tauros and Bouffalant (LobsterJonn)
- Everlasting beef drop from Miltanks (LobsterJonn)
- Adjusted custom ball catch rates (LobsterJonn)
- Moved pokedex counter from pack into coremod (LobsterJonn)
- Trophies now have better cobblemon support including poses (LobsterJonn)
- Added KubeJS tasks custom tasks validation (Uncandango)
- Whitelisted pokeballs to be used in claimed chunks (Uncandango)
- Update JDT configs (Uncandango)
- Evolution Chapter fix and added to BDSP chapter (ToshibaEC0Microwave)
- Updated PT_BR localization (PrincessStellar)
  </blockquote>

</details>

---

## 🛠️ Mods

<details>
<summary>Updated (25)</summary>

- AE2 Import Export Card (1.21.1-1.4.1) -> (1.21.1-1.4.3)
- All The Mons (0.0.24) -> (0.0.32)
- AllTheTweaks (2.8.2) -> (2.8.3)
- Berry Pouch (0.4.3-beta) -> (0.5.3-beta)
- BotanyTrees (21.1.1) -> (21.1.3)
- L_Ender's Cataclysm 1.21.1 (3.19) -> (3.23)
- Cobblemon (1.7.2+1.21.1) -> (1.7.3+1.21.1)
- Cobblemon Battle Extras (1.7.24) -> (1.7.26)
- Euphoria Patcher (1.7.8-r5.6.1-neoforge) -> (1.8.2-r5.7.1-neoforge)
- FramedBlocks (10.5.1) -> (10.5.2)
- FTB Ultimine (2101.1.12) -> (2101.1.13)
- Fzzy Config (0.7.5+1.21+neoforge) -> (0.7.6+1.21+neoforge)
- IntegratedCrafting (1.4.2) -> (1.4.3)
- Little Big Redstone (1.4.16-beta-1.21.1) -> (1.5.0-beta-1.21.1)
- Cobblemon:Mega Showdown (1.6.4+1.7.2+1.21.1) -> (1.6.8+1.7.3+1.21.1)
- Mekanism: MoreMachine (1.2.3) -> (1.3.0)
- NeoForge (21.1.218) -> (21.1.219)
- Not Enough Glyphs (4.2.4) -> (4.2.6)
- Occultism (1.204.0) -> (1.205.0)
- Oritech (1.0.0-rc3) -> (1.0.0)
- QuarryPlus (21.1.141) -> (21.1.144)
- Sophisticated Storage (1.5.24) -> (1.5.26)
- Tesseract API (1.11.6-1.21.1) -> (1.11.8-1.21.1)
- Time In A Bottle (6.5.3) -> (6.5.4)
- Jonn's Trophies (1.21.1-2.3.0) -> (1.21.1-2.4.0)

</details>

<details open>
<summary>Removed (4)</summary>

- Cobblemon Capture XP (1.7.2-neoforge-1.3.0)
- Controlling (19.0.5)
- SparseStructures (3.0)
- Tim Core (1.7.2-neoforge-1.31.0)

</details>

## 🍳 Recipes

<details open>
<summary>Added (4)</summary>
<blockquote>

<details>
<summary>allthemons/mekanism/infusing/ancient_allthemodium_ball_lid</summary>

```diff
+{
+  type: "mekanism:metallurgic_infusing"
+  chemical_input: {
+    amount: 400
+    chemical: "allthemons:standard_tumblestone"
+  }
+  item_input: {
+    count: 1
+    item: "allthemons:allthemodium_ball_lid"
+  }
+  output: {
+    count: 1
+    id: "allthemons:ancient_allthemodium_ball_lid"
+  }
+  per_tick_usage: false
+}

```


</details>

<details>
<summary>berrypouch/berry_pouch</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    A: {
+      item: "minecraft:string"
+    }
+    B: {
+      item: "minecraft:white_wool"
+    }
+    C: {
+      tag: "berrypouch:natural_berries"
+    }
+  }
+  pattern: [
+    " A "
+    "BCB"
+    " B "
+  ]
+  result: {
+    count: 1
+    id: "berrypouch:berry_pouch"
+  }
+}

```


</details>

<details>
<summary>berrypouch/pokeball_gun</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    A: {
+      tag: "c:nuggets/iron"
+    }
+    B: {
+      tag: "c:ingots/iron"
+    }
+    C: {
+      item: "minecraft:gunpowder"
+    }
+  }
+  pattern: [
+    " A "
+    "BBC"
+    "  B"
+  ]
+  result: {
+    count: 1
+    id: "berrypouch:pokeball_gun"
+  }
+}

```


</details>

<details>
<summary>little_big_redstone/logic/tag</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    G: {
+      tag: "c:ingots/gold"
+    }
+    P: {
+      tag: "c:ender_pearls"
+    }
+    Q: {
+      tag: "c:gems/quartz"
+    }
+    R: {
+      tag: "c:dusts/redstone"
+    }
+    r: {
+      item: "little_big_redstone:redstone_bit"
+    }
+  }
+  pattern: [
+    "PQG"
+    "PrR"
+    "PQG"
+  ]
+  result: {
+    count: 1
+    id: "little_big_redstone:tag"
+  }
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (104)</summary>
<blockquote>

<details>
<summary>allthemons/atomicforge/ancient_gigaton_ball_lid</summary>

```diff
 {
   type: "oritech:atomic_forge"
   fluidInput: {
     amount: 0
     fluid: "minecraft:empty"
   }
   fluidOutputs: [
   ]
   ingredients: [
     {
       item: "createmonballsoverhaul:dense_coated_black_ball_lid"
     }
-    {
-      tag: "c:dyes/white"
-    }
     {
       item: "createmonballsoverhaul:white_apricorn_bits"
     }
     {
       item: "createmonballsoverhaul:black_apricorn_bits"
     }
   ]
   results: [
     {
       count: 1
       id: "createmonballsoverhaul:ancient_gigaton_ball_lid"
     }
   ]
   time: 200
 }

```


</details>

<details>
<summary>allthemons/atomicforge/ancient_jet_ball_lid</summary>

```diff
 {
   type: "oritech:atomic_forge"
   fluidInput: {
     amount: 0
     fluid: "minecraft:empty"
   }
   fluidOutputs: [
   ]
   ingredients: [
     {
       item: "createmonballsoverhaul:light_coated_blue_ball_lid"
     }
     {
       item: "createmonballsoverhaul:white_apricorn_bits"
     }
     {
       item: "createmonballsoverhaul:blue_apricorn_bits"
     }
-    {
-      tag: "c:dyes/blue"
-    }
   ]
   results: [
     {
       count: 1
       id: "createmonballsoverhaul:ancient_jet_ball_lid"
     }
   ]
   time: 200
 }

```


</details>

<details>
<summary>allthemons/atomicforge/beast_ball_lid</summary>

```diff
 {
   type: "oritech:atomic_forge"
   fluidInput: {
     amount: 0
     fluid: "minecraft:empty"
   }
   fluidOutputs: [
   ]
   ingredients: [
     {
       item: "createmonballsoverhaul:blue_ball_lid"
     }
     {
       tag: "c:nuggets/gold"
     }
-    {
-      tag: "c:nuggets/gold"
-    }
     {
       item: "minecraft:echo_shard"
     }
   ]
   results: [
     {
       count: 1
       id: "createmonballsoverhaul:beast_ball_lid"
     }
   ]
   time: 200
 }

```


</details>

<details>
<summary>almostunified/berrypouch</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "berrypouch"
   recipes: [
-    "1$berry_pouch_69"
+    "1$pokeball_gun"
   ]
 }

```


</details>

<details>
<summary>little_big_redstone/logic/pulse_throttler</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    P: {
-      item: "minecraft:sticky_piston"
-    }
+    p: {
+      item: "minecraft:sticky_piston"
+    }
     R: {
       tag: "c:dusts/redstone"
     }
     r: {
       item: "little_big_redstone:redstone_bit"
     }
   }
   pattern: [
-    " P "
+    " p "
     "RrR"
   ]
   result: {
     count: 1
     id: "little_big_redstone:pulse_throttler"
   }
 }

```


</details>

<details>
<summary>minecraft/shulker_box_from_vanilla_shulker_box</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:shulker_box"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:shulker_box_from_vanilla_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:shulker_box"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     count: 1
     id: "sophisticatedstorage:shulker_box"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/acacia_barrel</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:barrel"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:acacia_planks"
     }
     S: {
       item: "minecraft:acacia_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "acacia"
     }
     count: 1
     id: "sophisticatedstorage:barrel"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/acacia_chest</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:chest"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:acacia_planks"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
     "PPP"
-    "PRP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "acacia"
     }
     count: 1
     id: "sophisticatedstorage:chest"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/acacia_limited_barrel_1</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_1"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:acacia_planks"
     }
     S: {
       item: "minecraft:acacia_slab"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
-    "PRP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "acacia"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_1"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/acacia_limited_barrel_2</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_2"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:acacia_planks"
     }
     S: {
       item: "minecraft:acacia_slab"
     }
   }
   pattern: [
     "PPP"
     "PPP"
-    "SRS"
+    "SLS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "acacia"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_2"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/acacia_limited_barrel_3</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_3"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:acacia_planks"
     }
     S: {
       item: "minecraft:acacia_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "acacia"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_3"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/acacia_limited_barrel_4</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_4"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:acacia_planks"
     }
     S: {
       item: "minecraft:acacia_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "SPS"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "acacia"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_4"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/bamboo_barrel</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:barrel"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:bamboo_planks"
     }
     S: {
       item: "minecraft:bamboo_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "bamboo"
     }
     count: 1
     id: "sophisticatedstorage:barrel"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/bamboo_chest</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:chest"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:bamboo_planks"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
     "PPP"
-    "PRP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "bamboo"
     }
     count: 1
     id: "sophisticatedstorage:chest"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/bamboo_limited_barrel_1</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_1"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:bamboo_planks"
     }
     S: {
       item: "minecraft:bamboo_slab"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
-    "PRP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "bamboo"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_1"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/bamboo_limited_barrel_2</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_2"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:bamboo_planks"
     }
     S: {
       item: "minecraft:bamboo_slab"
     }
   }
   pattern: [
     "PPP"
     "PPP"
-    "SRS"
+    "SLS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "bamboo"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_2"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/bamboo_limited_barrel_3</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_3"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:bamboo_planks"
     }
     S: {
       item: "minecraft:bamboo_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "bamboo"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_3"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/bamboo_limited_barrel_4</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_4"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:bamboo_planks"
     }
     S: {
       item: "minecraft:bamboo_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "SPS"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "bamboo"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_4"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/basic_tier_upgrade</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:basic_tier_upgrade"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     S: {
       tag: "c:rods/wooden"
     }
   }
   pattern: [
     " S "
     " S "
-    "SRS"
+    "SLS"
   ]
   result: {
     count: 1
     id: "sophisticatedstorage:basic_tier_upgrade"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/basic_to_copper_tier_upgrade</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:basic_to_copper_tier_upgrade"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     C: {
       tag: "c:ingots/copper"
     }
   }
   pattern: [
     "CCC"
     "CCC"
-    "CRC"
+    "CLC"
   ]
   result: {
     count: 1
     id: "sophisticatedstorage:basic_to_copper_tier_upgrade"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/basic_to_iron_tier_upgrade</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:basic_to_iron_tier_upgrade"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     I: {
       tag: "c:ingots/iron"
     }
   }
   pattern: [
     "III"
     "III"
-    "IRI"
+    "ILI"
   ]
   result: {
     count: 1
     id: "sophisticatedstorage:basic_to_iron_tier_upgrade"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/birch_barrel</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:barrel"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:birch_planks"
     }
     S: {
       item: "minecraft:birch_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "birch"
     }
     count: 1
     id: "sophisticatedstorage:barrel"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/birch_chest</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:chest"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:birch_planks"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
     "PPP"
-    "PRP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "birch"
     }
     count: 1
     id: "sophisticatedstorage:chest"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/birch_limited_barrel_1</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_1"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:birch_planks"
     }
     S: {
       item: "minecraft:birch_slab"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
-    "PRP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "birch"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_1"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/birch_limited_barrel_2</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_2"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:birch_planks"
     }
     S: {
       item: "minecraft:birch_slab"
     }
   }
   pattern: [
     "PPP"
     "PPP"
-    "SRS"
+    "SLS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "birch"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_2"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/birch_limited_barrel_3</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_3"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:birch_planks"
     }
     S: {
       item: "minecraft:birch_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "birch"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_3"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/birch_limited_barrel_4</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_4"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:birch_planks"
     }
     S: {
       item: "minecraft:birch_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "SPS"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "birch"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_4"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/black_shulker_box_to_sophisticated</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:shulker_box"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:shulker_box_from_vanilla_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:black_shulker_box"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     components: {
       sophisticatedcore:accent_color: -14869215
       sophisticatedcore:main_color: -14869215
     }
     count: 1
     id: "sophisticatedstorage:shulker_box"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/blue_shulker_box_to_sophisticated</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:shulker_box"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:shulker_box_from_vanilla_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:blue_shulker_box"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     components: {
       sophisticatedcore:accent_color: -12827478
       sophisticatedcore:main_color: -12827478
     }
     count: 1
     id: "sophisticatedstorage:shulker_box"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/brown_shulker_box_to_sophisticated</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:shulker_box"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:shulker_box_from_vanilla_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:brown_shulker_box"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     components: {
       sophisticatedcore:accent_color: -8170446
       sophisticatedcore:main_color: -8170446
     }
     count: 1
     id: "sophisticatedstorage:shulker_box"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/cherry_barrel</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:barrel"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:cherry_planks"
     }
     S: {
       item: "minecraft:cherry_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "cherry"
     }
     count: 1
     id: "sophisticatedstorage:barrel"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/cherry_chest</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:chest"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:cherry_planks"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
     "PPP"
-    "PRP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "cherry"
     }
     count: 1
     id: "sophisticatedstorage:chest"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/cherry_limited_barrel_1</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_1"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:cherry_planks"
     }
     S: {
       item: "minecraft:cherry_slab"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
-    "PRP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "cherry"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_1"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/cherry_limited_barrel_2</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_2"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:cherry_planks"
     }
     S: {
       item: "minecraft:cherry_slab"
     }
   }
   pattern: [
     "PPP"
     "PPP"
-    "SRS"
+    "SLS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "cherry"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_2"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/cherry_limited_barrel_3</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_3"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:cherry_planks"
     }
     S: {
       item: "minecraft:cherry_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "cherry"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_3"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/cherry_limited_barrel_4</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_4"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:cherry_planks"
     }
     S: {
       item: "minecraft:cherry_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "SPS"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "cherry"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_4"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/copper_to_iron_tier_upgrade</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:copper_to_iron_tier_upgrade"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     I: {
       tag: "c:ingots/iron"
     }
   }
   pattern: [
     " I "
     " I "
-    "IRI"
+    "ILI"
   ]
   result: {
     count: 1
     id: "sophisticatedstorage:copper_to_iron_tier_upgrade"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/crimson_barrel</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:barrel"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:crimson_planks"
     }
     S: {
       item: "minecraft:crimson_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "crimson"
     }
     count: 1
     id: "sophisticatedstorage:barrel"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/crimson_chest</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:chest"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:crimson_planks"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
     "PPP"
-    "PRP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "crimson"
     }
     count: 1
     id: "sophisticatedstorage:chest"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/crimson_limited_barrel_1</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_1"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:crimson_planks"
     }
     S: {
       item: "minecraft:crimson_slab"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
-    "PRP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "crimson"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_1"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/crimson_limited_barrel_2</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_2"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:crimson_planks"
     }
     S: {
       item: "minecraft:crimson_slab"
     }
   }
   pattern: [
     "PPP"
     "PPP"
-    "SRS"
+    "SLS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "crimson"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_2"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/crimson_limited_barrel_3</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_3"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:crimson_planks"
     }
     S: {
       item: "minecraft:crimson_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "crimson"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_3"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/crimson_limited_barrel_4</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_4"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:crimson_planks"
     }
     S: {
       item: "minecraft:crimson_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "SPS"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "crimson"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_4"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/cyan_shulker_box_to_sophisticated</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:shulker_box"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:shulker_box_from_vanilla_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:cyan_shulker_box"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     components: {
       sophisticatedcore:accent_color: -15295332
       sophisticatedcore:main_color: -15295332
     }
     count: 1
     id: "sophisticatedstorage:shulker_box"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/dark_oak_barrel</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:barrel"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:dark_oak_planks"
     }
     S: {
       item: "minecraft:dark_oak_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "dark_oak"
     }
     count: 1
     id: "sophisticatedstorage:barrel"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/dark_oak_chest</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:chest"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:dark_oak_planks"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
     "PPP"
-    "PRP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "dark_oak"
     }
     count: 1
     id: "sophisticatedstorage:chest"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/dark_oak_limited_barrel_1</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_1"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:dark_oak_planks"
     }
     S: {
       item: "minecraft:dark_oak_slab"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
-    "PRP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "dark_oak"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_1"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/dark_oak_limited_barrel_2</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_2"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:dark_oak_planks"
     }
     S: {
       item: "minecraft:dark_oak_slab"
     }
   }
   pattern: [
     "PPP"
     "PPP"
-    "SRS"
+    "SLS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "dark_oak"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_2"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/dark_oak_limited_barrel_3</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_3"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:dark_oak_planks"
     }
     S: {
       item: "minecraft:dark_oak_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "dark_oak"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_3"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/dark_oak_limited_barrel_4</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_4"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:dark_oak_planks"
     }
     S: {
       item: "minecraft:dark_oak_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "SPS"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "dark_oak"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_4"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/diamond_to_netherite_tier_upgrade</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:diamond_to_netherite_tier_upgrade"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
     {
       tag: "c:ingots/netherite"
     }
   ]
   result: {
     count: 1
     id: "sophisticatedstorage:diamond_to_netherite_tier_upgrade"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/generic_barrel</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:barrel"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:generic_wood_storage"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       tag: "minecraft:planks"
     }
     S: {
       tag: "minecraft:wooden_slabs"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "spruce"
     }
     count: 1
     id: "sophisticatedstorage:barrel"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/generic_chest</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:chest"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:generic_wood_storage"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       tag: "minecraft:planks"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
     "PPP"
-    "PRP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "oak"
     }
     count: 1
     id: "sophisticatedstorage:chest"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/generic_limited_barrel_1</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_1"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:generic_wood_storage"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       tag: "minecraft:planks"
     }
     S: {
       tag: "minecraft:wooden_slabs"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
-    "PRP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "spruce"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_1"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/generic_limited_barrel_2</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_2"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:generic_wood_storage"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       tag: "minecraft:planks"
     }
     S: {
       tag: "minecraft:wooden_slabs"
     }
   }
   pattern: [
     "PPP"
     "PPP"
-    "SRS"
+    "SLS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "spruce"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_2"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/generic_limited_barrel_3</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_3"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:generic_wood_storage"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       tag: "minecraft:planks"
     }
     S: {
       tag: "minecraft:wooden_slabs"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "spruce"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_3"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/generic_limited_barrel_4</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_4"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:generic_wood_storage"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       tag: "minecraft:planks"
     }
     S: {
       tag: "minecraft:wooden_slabs"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "SPS"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "spruce"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_4"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/gold_to_diamond_tier_upgrade</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:gold_to_diamond_tier_upgrade"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     D: {
       tag: "c:gems/diamond"
     }
   }
   pattern: [
     "DDD"
     "DDD"
-    "DRD"
+    "DLD"
   ]
   result: {
     count: 1
     id: "sophisticatedstorage:gold_to_diamond_tier_upgrade"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/gray_shulker_box_to_sophisticated</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:shulker_box"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:shulker_box_from_vanilla_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:gray_shulker_box"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     components: {
       sophisticatedcore:accent_color: -12103854
       sophisticatedcore:main_color: -12103854
     }
     count: 1
     id: "sophisticatedstorage:shulker_box"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/green_shulker_box_to_sophisticated</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:shulker_box"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:shulker_box_from_vanilla_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:green_shulker_box"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     components: {
       sophisticatedcore:accent_color: -10585066
       sophisticatedcore:main_color: -10585066
     }
     count: 1
     id: "sophisticatedstorage:shulker_box"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/iron_to_gold_tier_upgrade</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:iron_to_gold_tier_upgrade"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     G: {
       tag: "c:ingots/gold"
     }
   }
   pattern: [
     "GGG"
     "GGG"
-    "GRG"
+    "GLG"
   ]
   result: {
     count: 1
     id: "sophisticatedstorage:iron_to_gold_tier_upgrade"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/jungle_barrel</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:barrel"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:jungle_planks"
     }
     S: {
       item: "minecraft:jungle_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "jungle"
     }
     count: 1
     id: "sophisticatedstorage:barrel"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/jungle_chest</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:chest"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:jungle_planks"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
     "PPP"
-    "PRP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "jungle"
     }
     count: 1
     id: "sophisticatedstorage:chest"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/jungle_limited_barrel_1</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_1"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:jungle_planks"
     }
     S: {
       item: "minecraft:jungle_slab"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
-    "PRP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "jungle"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_1"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/jungle_limited_barrel_2</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_2"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:jungle_planks"
     }
     S: {
       item: "minecraft:jungle_slab"
     }
   }
   pattern: [
     "PPP"
     "PPP"
-    "SRS"
+    "SLS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "jungle"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_2"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/jungle_limited_barrel_3</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_3"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:jungle_planks"
     }
     S: {
       item: "minecraft:jungle_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "jungle"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_3"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/jungle_limited_barrel_4</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_4"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:jungle_planks"
     }
     S: {
       item: "minecraft:jungle_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "SPS"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "jungle"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_4"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/light_blue_shulker_box_to_sophisticated</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:shulker_box"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:shulker_box_from_vanilla_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:light_blue_shulker_box"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     components: {
       sophisticatedcore:accent_color: -12930086
       sophisticatedcore:main_color: -12930086
     }
     count: 1
     id: "sophisticatedstorage:shulker_box"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/light_gray_shulker_box_to_sophisticated</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:shulker_box"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:shulker_box_from_vanilla_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:light_gray_shulker_box"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     components: {
       sophisticatedcore:accent_color: -6447721
       sophisticatedcore:main_color: -6447721
     }
     count: 1
     id: "sophisticatedstorage:shulker_box"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/lime_shulker_box_to_sophisticated</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:shulker_box"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:shulker_box_from_vanilla_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:lime_shulker_box"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     components: {
       sophisticatedcore:accent_color: -8337633
       sophisticatedcore:main_color: -8337633
     }
     count: 1
     id: "sophisticatedstorage:shulker_box"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/magenta_shulker_box_to_sophisticated</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:shulker_box"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:shulker_box_from_vanilla_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:magenta_shulker_box"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     components: {
       sophisticatedcore:accent_color: -3715395
       sophisticatedcore:main_color: -3715395
     }
     count: 1
     id: "sophisticatedstorage:shulker_box"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/mangrove_barrel</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:barrel"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:mangrove_planks"
     }
     S: {
       item: "minecraft:mangrove_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "mangrove"
     }
     count: 1
     id: "sophisticatedstorage:barrel"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/mangrove_chest</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:chest"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:mangrove_planks"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
     "PPP"
-    "PRP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "mangrove"
     }
     count: 1
     id: "sophisticatedstorage:chest"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/mangrove_limited_barrel_1</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_1"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:mangrove_planks"
     }
     S: {
       item: "minecraft:mangrove_slab"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
-    "PRP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "mangrove"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_1"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/mangrove_limited_barrel_2</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_2"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:mangrove_planks"
     }
     S: {
       item: "minecraft:mangrove_slab"
     }
   }
   pattern: [
     "PPP"
     "PPP"
-    "SRS"
+    "SLS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "mangrove"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_2"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/mangrove_limited_barrel_3</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_3"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:mangrove_planks"
     }
     S: {
       item: "minecraft:mangrove_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "mangrove"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_3"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/mangrove_limited_barrel_4</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_4"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:mangrove_planks"
     }
     S: {
       item: "minecraft:mangrove_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "SPS"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "mangrove"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_4"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/oak_barrel</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:barrel"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:oak_planks"
     }
     S: {
       item: "minecraft:oak_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "oak"
     }
     count: 1
     id: "sophisticatedstorage:barrel"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/oak_chest</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:chest"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:oak_planks"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
     "PPP"
-    "PRP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "oak"
     }
     count: 1
     id: "sophisticatedstorage:chest"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/oak_chest_from_vanilla_chest</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:chest"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "oak"
     }
     count: 1
     id: "sophisticatedstorage:chest"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/oak_limited_barrel_1</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_1"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:oak_planks"
     }
     S: {
       item: "minecraft:oak_slab"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
-    "PRP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "oak"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_1"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/oak_limited_barrel_2</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_2"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:oak_planks"
     }
     S: {
       item: "minecraft:oak_slab"
     }
   }
   pattern: [
     "PPP"
     "PPP"
-    "SRS"
+    "SLS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "oak"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_2"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/oak_limited_barrel_3</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_3"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:oak_planks"
     }
     S: {
       item: "minecraft:oak_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "oak"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_3"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/oak_limited_barrel_4</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_4"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:oak_planks"
     }
     S: {
       item: "minecraft:oak_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "SPS"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "oak"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_4"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/orange_shulker_box_to_sophisticated</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:shulker_box"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:shulker_box_from_vanilla_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:orange_shulker_box"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     components: {
       sophisticatedcore:accent_color: -425955
       sophisticatedcore:main_color: -425955
     }
     count: 1
     id: "sophisticatedstorage:shulker_box"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/pink_shulker_box_to_sophisticated</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:shulker_box"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:shulker_box_from_vanilla_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:pink_shulker_box"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     components: {
       sophisticatedcore:accent_color: -816214
       sophisticatedcore:main_color: -816214
     }
     count: 1
     id: "sophisticatedstorage:shulker_box"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/purple_shulker_box_to_sophisticated</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:shulker_box"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:shulker_box_from_vanilla_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:purple_shulker_box"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     components: {
       sophisticatedcore:accent_color: -7785800
       sophisticatedcore:main_color: -7785800
     }
     count: 1
     id: "sophisticatedstorage:shulker_box"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/red_shulker_box_to_sophisticated</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:shulker_box"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:shulker_box_from_vanilla_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:red_shulker_box"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     components: {
       sophisticatedcore:accent_color: -5231066
       sophisticatedcore:main_color: -5231066
     }
     count: 1
     id: "sophisticatedstorage:shulker_box"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/shulker_box</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:shulker_box"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     C: {
       tag: "c:chests"
     }
     S: {
       item: "minecraft:shulker_shell"
     }
   }
   pattern: [
     " S"
     " S"
-    "RC"
+    "LC"
   ]
   result: {
     count: 1
     id: "sophisticatedstorage:shulker_box"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/spruce_barrel</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:barrel"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:spruce_planks"
     }
     S: {
       item: "minecraft:spruce_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "spruce"
     }
     count: 1
     id: "sophisticatedstorage:barrel"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/spruce_barrel_from_vanilla_barrel</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:barrel"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:barrel"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "spruce"
     }
     count: 1
     id: "sophisticatedstorage:barrel"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/spruce_chest</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:chest"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:spruce_planks"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
     "PPP"
-    "PRP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "spruce"
     }
     count: 1
     id: "sophisticatedstorage:chest"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/spruce_limited_barrel_1</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_1"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:spruce_planks"
     }
     S: {
       item: "minecraft:spruce_slab"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
-    "PRP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "spruce"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_1"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/spruce_limited_barrel_2</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_2"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:spruce_planks"
     }
     S: {
       item: "minecraft:spruce_slab"
     }
   }
   pattern: [
     "PPP"
     "PPP"
-    "SRS"
+    "SLS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "spruce"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_2"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/spruce_limited_barrel_3</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_3"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:spruce_planks"
     }
     S: {
       item: "minecraft:spruce_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "spruce"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_3"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/spruce_limited_barrel_4</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_4"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:spruce_planks"
     }
     S: {
       item: "minecraft:spruce_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "SPS"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "spruce"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_4"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/warped_barrel</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:barrel"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:warped_planks"
     }
     S: {
       item: "minecraft:warped_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "warped"
     }
     count: 1
     id: "sophisticatedstorage:barrel"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/warped_chest</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:chest"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:warped_planks"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
     "PPP"
-    "PRP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "warped"
     }
     count: 1
     id: "sophisticatedstorage:chest"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/warped_limited_barrel_1</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_1"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:warped_planks"
     }
     S: {
       item: "minecraft:warped_slab"
     }
   }
   pattern: [
+    "PLP"
     "PPP"
-    "PRP"
     "PSP"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "warped"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_1"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/warped_limited_barrel_2</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_2"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:warped_planks"
     }
     S: {
       item: "minecraft:warped_slab"
     }
   }
   pattern: [
     "PPP"
     "PPP"
-    "SRS"
+    "SLS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "warped"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_2"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/warped_limited_barrel_3</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_3"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:warped_planks"
     }
     S: {
       item: "minecraft:warped_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "PSP"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "warped"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_3"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/warped_limited_barrel_4</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:limited_barrel_4"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    R: {
-      item: "minecraft:redstone_torch"
-    }
+    L: {
+      item: "minecraft:lever"
+    }
     P: {
       item: "minecraft:warped_planks"
     }
     S: {
       item: "minecraft:warped_slab"
     }
   }
   pattern: [
-    "PRP"
+    "PLP"
     "SPS"
     "SPS"
   ]
   result: {
     components: {
       sophisticatedstorage:wood_type: "warped"
     }
     count: 1
     id: "sophisticatedstorage:limited_barrel_4"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/white_shulker_box_to_sophisticated</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:shulker_box"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:shulker_box_from_vanilla_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:white_shulker_box"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     components: {
       sophisticatedcore:accent_color: -393218
       sophisticatedcore:main_color: -393218
     }
     count: 1
     id: "sophisticatedstorage:shulker_box"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/yellow_shulker_box_to_sophisticated</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "sophisticatedcore:item_enabled"
           itemRegistryName: "sophisticatedstorage:shulker_box"
         }
       ]
     }
   ]
   type: "sophisticatedstorage:shulker_box_from_vanilla_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:yellow_shulker_box"
     }
     {
-      item: "minecraft:redstone_torch"
+      item: "minecraft:lever"
     }
   ]
   result: {
     components: {
       sophisticatedcore:accent_color: -75715
       sophisticatedcore:main_color: -75715
     }
     count: 1
     id: "sophisticatedstorage:shulker_box"
   }
 }

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (10)</summary>
<blockquote>

<details>
<summary>allthemons/mekanism/infusing/ancient_unobtainium_ball_lid</summary>

```diff
-{
-  type: "mekanism:metallurgic_infusing"
-  chemical_input: {
-    amount: 400
-    chemical: "allthemons:standard_tumblestone"
-  }
-  item_input: {
-    count: 1
-    item: "allthemons:unobtainium_ball_lid"
-  }
-  output: {
-    count: 1
-    id: "allthemons:ancient_unobtainium_ball_lid"
-  }
-  per_tick_usage: false
-}

```


</details>

<details>
<summary>berrypouch/berry_pouch_30</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "equipment"
-  key: {
-    #: {
-      item: "minecraft:string"
-    }
-    X: {
-      item: "minecraft:white_wool"
-    }
-    B: {
-      tag: "berrypouch:natural_berries"
-    }
-  }
-  pattern: [
-    " # "
-    "XBX"
-    " X "
-  ]
-  result: {
-    count: 1
-    id: "berrypouch:berry_pouch_30"
-  }
-}

```


</details>

<details>
<summary>berrypouch/berry_pouch_69</summary>

```diff
-{
-  type: "berrypouch:berry_pouch_upgrade"
-  category: "equipment"
-  key: {
-    #: {
-      item: "berrypouch:berry_pouch_30"
-    }
-    X: {
-      tag: "c:gems/diamond"
-    }
-  }
-  pattern: [
-    "XXX"
-    "X#X"
-    "XXX"
-  ]
-  result: {
-    count: 1
-    id: "berrypouch:berry_pouch_69"
-  }
-}

```


</details>

<details>
<summary>cobblemon_utility/atk_bottle_cap</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    I: {
-      tag: "c:ingots/iron"
-    }
-    L: {
-      item: "cobblemon:red_mint_leaf"
-    }
-    D: {
-      tag: "c:gems/diamond"
-    }
-  }
-  pattern: [
-    "ILI"
-    "LDL"
-    "IDI"
-  ]
-  result: {
-    count: 1
-    id: "cobblemon_utility:atksilvercap"
-  }
-}

```


</details>

<details>
<summary>cobblemon_utility/def_silver_cap</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    I: {
-      tag: "c:ingots/iron"
-    }
-    L: {
-      item: "cobblemon:blue_mint_leaf"
-    }
-    D: {
-      tag: "c:gems/diamond"
-    }
-  }
-  pattern: [
-    "ILI"
-    "LDL"
-    "IDI"
-  ]
-  result: {
-    count: 1
-    id: "cobblemon_utility:defsilvercap"
-  }
-}

```


</details>

<details>
<summary>cobblemon_utility/hp_silver_cap</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    I: {
-      tag: "c:ingots/iron"
-    }
-    L: {
-      item: "cobblemon:revival_herb"
-    }
-    D: {
-      tag: "c:gems/diamond"
-    }
-  }
-  pattern: [
-    "ILI"
-    "LDL"
-    "IDI"
-  ]
-  result: {
-    count: 1
-    id: "cobblemon_utility:hpsilvercap"
-  }
-}

```


</details>

<details>
<summary>cobblemon_utility/poke_treat</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    P: {
-      item: "minecraft:paper"
-    }
-    C: {
-      tag: "cobblemon:experience_candies"
-    }
-  }
-  pattern: [
-    " P "
-    "PCP"
-    " P "
-  ]
-  result: {
-    count: 2
-    id: "cobblemon_utility:poketreat"
-  }
-}

```


</details>

<details>
<summary>cobblemon_utility/sp_atk_silver_cap</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    I: {
-      tag: "c:ingots/iron"
-    }
-    L: {
-      item: "cobblemon:cyan_mint_leaf"
-    }
-    D: {
-      tag: "c:gems/diamond"
-    }
-  }
-  pattern: [
-    "ILI"
-    "LDL"
-    "IDI"
-  ]
-  result: {
-    count: 1
-    id: "cobblemon_utility:spatksilvercap"
-  }
-}

```


</details>

<details>
<summary>cobblemon_utility/sp_def_silver_cap</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    I: {
-      tag: "c:ingots/iron"
-    }
-    L: {
-      item: "cobblemon:pink_mint_leaf"
-    }
-    D: {
-      tag: "c:gems/diamond"
-    }
-  }
-  pattern: [
-    "ILI"
-    "LDL"
-    "IDI"
-  ]
-  result: {
-    count: 1
-    id: "cobblemon_utility:spdefsilvercap"
-  }
-}

```


</details>

<details>
<summary>cobblemon_utility/speed_silver_cap</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    I: {
-      tag: "c:ingots/iron"
-    }
-    L: {
-      item: "cobblemon:green_mint_leaf"
-    }
-    D: {
-      tag: "c:gems/diamond"
-    }
-  }
-  pattern: [
-    "ILI"
-    "LDL"
-    "IDI"
-  ]
-  result: {
-    count: 1
-    id: "cobblemon_utility:speedsilvercap"
-  }
-}

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details open>
<summary>Added (3)</summary>
<blockquote>

<details>
<summary>minecraft:item/berrypouch:loot_berries</summary>

```diff
+[
+  "cobblemon:roseli_berry"
+]

```


</details>

<details>
<summary>minecraft:item/berrypouch:mutation_berries</summary>

```diff
+[
+  "cobblemon:aguav_berry"
+  "cobblemon:apicot_berry"
+  "cobblemon:belue_berry"
+  "cobblemon:cornn_berry"
+  "cobblemon:custap_berry"
+  "cobblemon:durin_berry"
+  "cobblemon:eggant_berry"
+  "cobblemon:enigma_berry"
+  "cobblemon:figy_berry"
+  "cobblemon:ganlon_berry"
+  "cobblemon:grepa_berry"
+  "cobblemon:hondew_berry"
+  "cobblemon:hopo_berry"
+  "cobblemon:iapapa_berry"
+  "cobblemon:jaboca_berry"
+  "cobblemon:kee_berry"
+  "cobblemon:kelpsy_berry"
+  "cobblemon:lansat_berry"
+  "cobblemon:leppa_berry"
+  "cobblemon:liechi_berry"
+  "cobblemon:lum_berry"
+  "cobblemon:mago_berry"
+  "cobblemon:magost_berry"
+  "cobblemon:maranga_berry"
+  "cobblemon:micle_berry"
+  "cobblemon:nomel_berry"
+  "cobblemon:pamtre_berry"
+  "cobblemon:petaya_berry"
+  "cobblemon:pomeg_berry"
+  "cobblemon:qualot_berry"
+  "cobblemon:rabuta_berry"
+  "cobblemon:rowap_berry"
+  "cobblemon:salac_berry"
+  "cobblemon:sitrus_berry"
+  "cobblemon:spelon_berry"
+  "cobblemon:starf_berry"
+  "cobblemon:tamato_berry"
+  "cobblemon:touga_berry"
+  "cobblemon:watmel_berry"
+  "cobblemon:wiki_berry"
+]

```


</details>

<details>
<summary>minecraft:item/berrypouch:other_baits</summary>

```diff
+[
+  "cobblemon:poke_bait"
+  "minecraft:apple"
+  "minecraft:enchanted_golden_apple"
+  "minecraft:glistering_melon_slice"
+  "minecraft:glow_berries"
+  "minecraft:golden_apple"
+  "minecraft:golden_carrot"
+  "minecraft:sweet_berries"
+]

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (17)</summary>
<blockquote>

<details>
<summary>minecraft:block/cataclysm:sunken_city_material</summary>

```diff
 [
-  "cataclysm:altar_of_abyss"
-  "cataclysm:stone_tiles"
-  "minecraft:andesite"
-  "minecraft:andesite_slab"
-  "minecraft:andesite_stairs"
-  "minecraft:polished_andesite"
-  "minecraft:stone"
-  "minecraft:stone_brick_slab"
-  "minecraft:stone_brick_stairs"
-  "minecraft:stone_bricks"
-  "minecraft:tuff"
 ]

```


</details>

<details>
<summary>minecraft:block/industrialforegoingsouls:cant_accelerate</summary>

```diff
 [
   ... (1 entries)
+  "cobblemon:pasture"
+  "industrialforegoingsouls:soul_laser_base"
+  "industrialforegoingsouls:soul_network_pipe"
+  "industrialforegoingsouls:soul_surge"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/justdirethings:tick_speed_deny</summary>

```diff
 [
+  "cobblemon:pasture"
   ... (4 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/tiab:un_acceleratable</summary>

```diff
 [
+  "cobblemon:pasture"
+  "industrialforegoingsouls:soul_laser_base"
+  "industrialforegoingsouls:soul_network_pipe"
+  "industrialforegoingsouls:soul_surge"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_shield</summary>

```diff
 [
   ... (6 entries)
-  "cataclysm:player_ceraunus"
   ... (22 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:is_projectile</summary>

```diff
 [
   ... (6 entries)
+  "cataclysm:player_ceraunus"
   ... (51 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:panic_causes</summary>

```diff
 [
   ... (9 entries)
-  "cataclysm:dagger"
   ... (50 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/c:capturing_not_supported</summary>

```diff
 [
   ... (4 entries)
+  "cobblemon:boat"
+  "cobblemon:chest_boat"
+  "cobblemon:empty_pokeball"
+  "cobblemon:generic_bedrock"
+  "cobblemon:npc"
+  "cobblemon:poke_bobber"
+  "cobblemon:pokemon"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/justdirethings:creature_catcher_deny</summary>

```diff
 [
+  "cobblemon:boat"
+  "cobblemon:chest_boat"
+  "cobblemon:empty_pokeball"
+  "cobblemon:generic_bedrock"
+  "cobblemon:npc"
+  "cobblemon:poke_bobber"
+  "cobblemon:pokemon"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:impact_projectiles</summary>

```diff
 [
   ... (17 entries)
-  "cataclysm:star_lance"
   ... (55 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/accessories:pouch</summary>

```diff
 [
-  "berrypouch:berry_pouch_30"
-  "berrypouch:berry_pouch_69"
+  "berrypouch:berry_pouch"
 ]

```


</details>

<details>
<summary>minecraft:item/c:foods</summary>

```diff
 [
   ... (9 entries)
+  "#c:foods/dough"
   ... (79 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:foods/dough</summary>

```diff
 [
+  "#c:foods/doughs?"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/ftbchunks:right_click_whitelist</summary>

```diff
 [
+  "#cobblemon:poke_balls"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/little_big_redstone:logic_components</summary>

```diff
 [
   ... (14 entries)
+  "little_big_redstone:tag"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/structure_set/cataclysm:abandoned_structures_avoid</summary>

```diff
 [
+  "cataclysm:frosted_prison"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/structure_set/cataclysm:desert_structures_avoid</summary>

```diff
 [
+  "cataclysm:cursed_pyramid"
   ... (1 entries)
 ]

```


</details>

</blockquote>

</details>

<details open>
<summary>Removed (1)</summary>
<blockquote>

<details>
<summary>minecraft:item/tim_core:exp_all</summary>

```diff
-[
-]

```


</details>

</blockquote>

</details>

## ✍️ Registries

<details open>
<summary>Changed (2)</summary>
<blockquote>

<details>
<summary>block</summary>

```diff
 [
   ... (20476 entries)
-  "oritech:quarry_beam_inner"
   ... (1 entries)
-  "oritech:quarry_beam_target"
   ... (12230 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (4697 entries)
-  "berrypouch:berry_pouch_30"
-  "berrypouch:berry_pouch_69"
+  "berrypouch:berry_pouch"
+  "berrypouch:pokeball_gun"
   ... (17390 entries)
+  "little_big_redstone:tag"
   ... (19739 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details open>
<summary>Changed (1)</summary>
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
                 "allthemons:egg_level"
                 "allthemons:egg_time"
+                "allthemons:features"
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

</blockquote>

</details>

