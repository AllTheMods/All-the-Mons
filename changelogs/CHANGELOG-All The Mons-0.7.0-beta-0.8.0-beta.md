# Changelog

# 📦 0.8.0-beta

## 📰 General changes and notes

Summary of changes here!

<details open>
<summary>Github Commits :octocat:</summary>
<blockquote>

- Disabled controller navigation on Cobblemon Extras
</blockquote>

</details>

---

## 🛠️ Mods

<details open>
<summary>Added (2)</summary>

- Cobblemon Capture XP (1.7.2-neoforge-1.3.0)
- Tim Core (1.7.2-neoforge-1.31.0)

</details>

<details open>
<summary>Updated (9)</summary>

- L_Ender's Cataclysm 1.21.1 (3.16) -> (3.17)
- Compact Machines (7.0.79) -> (7.0.80)
- Ender Core (8.1.0) -> (8.1.1-beta)
- Ender IO (8.1.0) -> (8.1.1-beta)
- Ender IO - Modded Conduits (8.1.0) -> (8.1.1-beta)
- Cobblemon Fight or Flight (0.10.5) -> (0.10.6)
- Occultism (1.203.0) -> (1.204.0)
- Rechiseled (1.2.0) -> (1.2.1)
- Tesseract API (1.11.4-1.21.1) -> (1.11.5-1.21.1)

</details>

## 🍳 Recipes

<details open>
<summary>Added (2)</summary>
<blockquote>

<details>
<summary>cataclysm/belt_of_beginner</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    R: {
+      item: "minecraft:leather"
+    }
+    n: {
+      tag: "c:ingots/iron"
+    }
+  }
+  pattern: [
+    "   "
+    "RnR"
+    "   "
+  ]
+  result: {
+    id: "cataclysm:belt_of_beginner"
+  }
+}

```


</details>

<details>
<summary>cataclysm/weapon_infusion/brontes</summary>

```diff
+{
+  type: "cataclysm:weapon_fusion"
+  base: {
+    item: "cataclysm:infernal_forge"
+  }
+  addition: {
+    item: "cataclysm:astrape"
+  }
+  result: {
+    id: "cataclysm:brontes"
+  }
+}

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (2)</summary>
<blockquote>

<details>
<summary>almostunified/cataclysm</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "cataclysm"
   recipes: [
     "1$abyssal_sacrifice"
     "1$abyssal_sacrifice2"
     "1$azure_sea_shield"
+    "1$belt_of_beginner"
     "1$cursed_eye"
     "1$cursium_upgrade_smithing_template"
     "1$desert_eye"
     "1$laser_gatling"
     "1$meat_shredder"
     "1$mech_eye"
     "1$mechanical_fusion_anvil"
     "1$netherite_effigy"
     "1$storm_eye"
     "1$wither_assault_shoulder_weapon"
   ]
 }

```


</details>

<details>
<summary>cataclysm/chiseled_purpur_block</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   pattern: [
     "#"
     "#"
   ]
   key: {
     #: {
-      item: "minecraft:purpur_slab"
+      item: "cataclysm:purpur_tile_slab"
     }
   }
   result: {
     id: "cataclysm:chiseled_purpur_block"
     count: 1
   }
 }

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details open>
<summary>Added (7)</summary>
<blockquote>

<details>
<summary>minecraft:entity_type/enderio:spawner_whitelist</summary>

```diff
+[
+]

```


</details>

<details>
<summary>minecraft:item/curios:rings</summary>

```diff
+[
+  "cataclysm:ring_of_grudged"
+]

```


</details>

<details>
<summary>minecraft:item/curios:talisman</summary>

```diff
+[
+  "cataclysm:lava_reactor"
+  "cataclysm:overgrown_geode"
+  "cataclysm:ravenous_fang"
+  "cataclysm:unbreakable_skull"
+]

```


</details>

<details>
<summary>minecraft:item/curios:waist</summary>

```diff
+[
+  "cataclysm:belt_of_beginner"
+  "cataclysm:belt_of_monstrosity"
+]

```


</details>

<details>
<summary>minecraft:item/tim_core:exp_all</summary>

```diff
+[
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure_set/cataclysm:abandoned_structures_avoid</summary>

```diff
+[
+  "minecraft:villages"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure_set/cataclysm:desert_structures_avoid</summary>

```diff
+[
+  "minecraft:villages"
+]

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (25)</summary>
<blockquote>

<details>
<summary>minecraft:block/cataclysm:sunken_city_material</summary>

```diff
 [
   ... (3 entries)
+  "minecraft:andesite_slab"
+  "minecraft:andesite_stairs"
   ... (1 entries)
+  "minecraft:stone"
+  "minecraft:stone_brick_slab"
+  "minecraft:stone_brick_stairs"
+  "minecraft:stone_bricks"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:fences</summary>

```diff
 [
   ... (4 entries)
+  "cataclysm:obsidian_fence"
   ... (10 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/pickaxe</summary>

```diff
 [
   ... (2276 entries)
+  "cataclysm:obsidian_fence"
   ... (9205 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:needs_diamond_tool</summary>

```diff
 [
   ... (75 entries)
+  "cataclysm:obsidian_fence"
   ... (349 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_armor</summary>

```diff
 [
   ... (14 entries)
+  "cataclysm:draconic_wound"
+  "cataclysm:draconic_wound_eruption"
   ... (82 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_cooldown</summary>

```diff
 [
+  "cataclysm:dagger"
+  "cataclysm:draconic_slash"
+  "cataclysm:draconic_wound"
   ... (3 entries)
+  "cataclysm:star_lance"
   ... (11 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_effects</summary>

```diff
 [
   ... (2 entries)
+  "cataclysm:draconic_wound"
   ... (15 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_enchantments</summary>

```diff
 [
   ... (1 entries)
+  "cataclysm:draconic_wound"
   ... (15 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_shield</summary>

```diff
 [
   ... (1 entries)
+  "cataclysm:draconic_slash"
+  "cataclysm:draconic_wound"
+  "cataclysm:draconic_wound_eruption"
   ... (5 entries)
+  "cataclysm:player_ceraunus"
+  "cataclysm:star_lance"
   ... (22 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:is_projectile</summary>

```diff
 [
   ... (4 entries)
+  "cataclysm:dagger"
   ... (2 entries)
+  "cataclysm:star_lance"
   ... (51 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:no_knockback</summary>

```diff
 [
   ... (4 entries)
+  "cataclysm:draconic_wound"
   ... (59 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:panic_causes</summary>

```diff
 [
   ... (9 entries)
+  "cataclysm:dagger"
   ... (1 entries)
+  "cataclysm:draconic_slash"
+  "cataclysm:draconic_wound"
+  "cataclysm:draconic_wound_eruption"
   ... (9 entries)
+  "cataclysm:player_ceraunus"
   ... (1 entries)
+  "cataclysm:star_lance"
   ... (38 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/enderio:soul_vial_blacklist</summary>

```diff
 [
   ... (1 entries)
+  "#c:bosses"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:fall_damage_immune</summary>

```diff
 [
   ... (14 entries)
-  "cataclysm:ancient_ancient_remnant"
   ... (90 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:freeze_immune_entity_types</summary>

```diff
 [
   ... (1 entries)
-  "cataclysm:ancient_ancient_remnant"
   ... (28 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:impact_projectiles</summary>

```diff
 [
   ... (17 entries)
+  "cataclysm:star_lance"
   ... (55 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:powder_snow_walkable_mobs</summary>

```diff
 [
   ... (1 entries)
-  "cataclysm:ancient_ancient_remnant"
   ... (45 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:undead</summary>

```diff
 [
   ... (5 entries)
-  "cataclysm:ancient_ancient_remnant"
   ... (33 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:tools/pickaxes</summary>

```diff
 [
+  "cataclysm:black_steel_pickaxe"
+  "cataclysm:brontes"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/cataclysm:explosion_immune_item</summary>

```diff
 [
   ... (2 entries)
+  "cataclysm:brontes"
   ... (22 entries)
-  "cataclysm:lava_power_cell"
   ... (28 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/curios:feet</summary>

```diff
 [
   ... (1 entries)
+  "cataclysm:sturdy_boots"
   ... (8 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/curios:necklace</summary>

```diff
 [
   ... (3 entries)
+  "cataclysm:berserker_soul_amulet"
+  "cataclysm:vitality_ankh"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:cluster_max_harvestables</summary>

```diff
 [
   ... (15 entries)
+  "cataclysm:brontes"
   ... (81 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:pickaxes</summary>

```diff
 [
   ... (23 entries)
+  "cataclysm:brontes"
   ... (70 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:swords</summary>

```diff
 [
   ... (32 entries)
+  "cataclysm:brontes"
   ... (89 entries)
 ]

```


</details>

</blockquote>

</details>

## ✍️ Registries

<details open>
<summary>Changed (4)</summary>
<blockquote>

<details>
<summary>block</summary>

```diff
 [
   ... (3362 entries)
+  "cataclysm:obsidian_fence"
   ... (29346 entries)
 ]

```


</details>

<details>
<summary>entity_type</summary>

```diff
 [
   ... (179 entries)
-  "cataclysm:ancient_ancient_remnant"
   ... (7 entries)
+  "cataclysm:brontes"
   ... (59 entries)
+  "cataclysm:sky_color"
   ... (742 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (5078 entries)
+  "cataclysm:belt_of_beginner"
+  "cataclysm:belt_of_monstrosity"
+  "cataclysm:berserker_soul_amulet"
   ... (20 entries)
+  "cataclysm:brontes"
   ... (141 entries)
+  "cataclysm:obsidian_fence"
   ... (26 entries)
+  "cataclysm:ring_of_grudged"
   ... (15 entries)
+  "cataclysm:sturdy_boots"
   ... (11 entries)
+  "cataclysm:unbreakable_skull"
   ... (2 entries)
+  "cataclysm:vitality_ankh"
   ... (36526 entries)
 ]

```


</details>

<details>
<summary>worldgen/structure</summary>

```diff
 [
   ... (42 entries)
+  "cataclysm:abandoned_spire"
+  "cataclysm:abandoned_temple"
+  "cataclysm:abandoned_village"
   ... (1 entries)
+  "cataclysm:amethyst_nest"
   ... (3 entries)
+  "cataclysm:desert_occupied_village"
+  "cataclysm:desert_site"
+  "cataclysm:desert_temple"
   ... (246 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details open>
<summary>Added (4)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/cataclysm/chests/abandoned</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:sturdy_boots"
+          weight: 2
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 7
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:leather"
+          weight: 12
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 4
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:iron_ingot"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 2
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "cataclysm:black_steel_ingot"
+          weight: 7
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 2
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:gold_ingot"
+          weight: 7
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:emerald"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:saddle"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_horse_armor"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:golden_horse_armor"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:diamond_horse_armor"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 5
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:iron_sword"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 5
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:iron_boots"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 5
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:iron_chestplate"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 5
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:iron_leggings"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 5
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:iron_helmet"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 5
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:iron_pickaxe"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 5
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:iron_shovel"
+          weight: 3
+        }
+      ]
+      rolls: {
+        type: "minecraft:uniform"
+        max: 6
+        min: 2
+      }
+    }
+  ]
+  random_sequence: "cataclysm:chests/abandoned"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/chests/abandoned_treasure</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:sturdy_boots"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 7
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:leather"
+          weight: 12
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 4
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:iron_ingot"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 5
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "cataclysm:black_steel_ingot"
+          weight: 7
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 4
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:gold_ingot"
+          weight: 7
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:diamond"
+          weight: 2
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:saddle"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_horse_armor"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:golden_horse_armor"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:diamond_horse_armor"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 12
+                min: 6
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:iron_sword"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 12
+                min: 6
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:iron_boots"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 12
+                min: 6
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:iron_chestplate"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 12
+                min: 6
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:iron_leggings"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 12
+                min: 6
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:iron_helmet"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 12
+                min: 6
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:iron_pickaxe"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 5
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "cataclysm:black_steel_sword"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 5
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "cataclysm:black_steel_axe"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 5
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "cataclysm:black_steel_shovel"
+          weight: 3
+        }
+      ]
+      rolls: {
+        type: "minecraft:uniform"
+        max: 6
+        min: 2
+      }
+    }
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:ring_of_grudged"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "cataclysm:berserker_soul_amulet"
+          weight: 1
+        }
+        {
+          type: "minecraft:empty"
+          weight: 2
+        }
+      ]
+    }
+  ]
+  random_sequence: "cataclysm:chests/abandoned_treasure"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/chests/amethyst_nest_chest</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:golden_apple"
+          weight: 20
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:enchanted_golden_apple"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:name_tag"
+          weight: 30
+        }
+        {
+          type: "minecraft:empty"
+          weight: 5
+        }
+      ]
+      rolls: 1
+    }
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 5
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "cataclysm:amethyst_crab_meat"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "cataclysm:amethyst_crab_shell"
+          weight: 5
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 9
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:redstone"
+          weight: 5
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 9
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:lapis_lazuli"
+          weight: 5
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 2
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:diamond"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 8
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:coal"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bread"
+          weight: 15
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:glow_berries"
+          weight: 15
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 4
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:melon_seeds"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 4
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:pumpkin_seeds"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 4
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:beetroot_seeds"
+          weight: 10
+        }
+      ]
+      rolls: {
+        type: "minecraft:uniform"
+        max: 4
+        min: 2
+      }
+    }
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:amethyst_shard"
+          weight: 15
+        }
+      ]
+      rolls: 3
+    }
+  ]
+  random_sequence: "cataclysm:chests/amethyst_nest_chest"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/chests/desert_treasure</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:diamond"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 5
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:iron_ingot"
+          weight: 15
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "cataclysm:ancient_metal_ingot"
+          weight: 15
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+          weight: 15
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_horse_armor"
+          weight: 15
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:golden_horse_armor"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:diamond_horse_armor"
+          weight: 5
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_randomly"
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:book"
+          weight: 20
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:golden_apple"
+          weight: 20
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:enchanted_golden_apple"
+          weight: 3
+        }
+        {
+          type: "minecraft:empty"
+          weight: 15
+        }
+      ]
+      rolls: {
+        type: "minecraft:uniform"
+        max: 4
+        min: 2
+      }
+    }
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:empty"
+          weight: 6
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: 2
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:dune_armor_trim_smithing_template"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:unbreakable_skull"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "cataclysm:vitality_ankh"
+          weight: 1
+        }
+        {
+          type: "minecraft:empty"
+          weight: 2
+        }
+      ]
+    }
+  ]
+  random_sequence: "cataclysm:chests/desert_treasure"
+}

```


</details>

</blockquote>

</details>

