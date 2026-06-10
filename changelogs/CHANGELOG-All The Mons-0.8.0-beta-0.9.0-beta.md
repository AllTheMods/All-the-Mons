# Changelog

# 📦 0.9.0-beta

## 📰 General changes and notes

Summary of changes here!

<details open>
<summary>Github Commits :octocat:</summary>
<blockquote>

- Disable preview feature on Compact Machines
- Remove Piglich Data Model (can't work with Mons)
- Prevent Queen Bee and Mons to enter Ars Jars
- Prevent many boss/mobs to be Charmed with Ars Elemental spells
</blockquote>

</details>

---

## 🛠️ Mods

<details open>
<summary>Updated (4)</summary>

- AllTheTweaks (2.8.1) -> (2.8.2)
- L_Ender's Cataclysm 1.21.1 (3.17) -> (3.19)
- Cobblemon:Mega Showdown (1.6.3+1.7.2+1.21.1) -> (1.6.4+1.7.2+1.21.1)
- Tesseract API (1.11.5-1.21.1) -> (1.11.6-1.21.1)

</details>

## 🍳 Recipes

## 🏷️ Tags

<details>
<summary>Changed (12)</summary>
<blockquote>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_armor</summary>

```diff
 [
   ... (14 entries)
-  "cataclysm:draconic_wound"
-  "cataclysm:draconic_wound_eruption"
   ... (82 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_cooldown</summary>

```diff
 [
-  "cataclysm:dagger"
-  "cataclysm:draconic_slash"
-  "cataclysm:draconic_wound"
   ... (3 entries)
-  "cataclysm:star_lance"
   ... (11 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_effects</summary>

```diff
 [
   ... (2 entries)
-  "cataclysm:draconic_wound"
   ... (15 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_enchantments</summary>

```diff
 [
   ... (1 entries)
-  "cataclysm:draconic_wound"
   ... (15 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_shield</summary>

```diff
 [
   ... (1 entries)
-  "cataclysm:draconic_slash"
-  "cataclysm:draconic_wound"
-  "cataclysm:draconic_wound_eruption"
   ... (6 entries)
-  "cataclysm:star_lance"
   ... (22 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:is_projectile</summary>

```diff
 [
   ... (4 entries)
-  "cataclysm:dagger"
   ... (2 entries)
-  "cataclysm:star_lance"
   ... (51 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:no_knockback</summary>

```diff
 [
   ... (4 entries)
-  "cataclysm:draconic_wound"
   ... (59 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:panic_causes</summary>

```diff
 [
   ... (11 entries)
-  "cataclysm:draconic_slash"
-  "cataclysm:draconic_wound"
-  "cataclysm:draconic_wound_eruption"
   ... (11 entries)
-  "cataclysm:star_lance"
   ... (38 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/allthemods:jank_blacklist</summary>

```diff
 [
   ... (104 entries)
+  "the_bumblezone:bee_queen"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/ars_elemental:charm_blacklist</summary>

```diff
 [
+  "#allthemods:jank_blacklist"
 ]

```


</details>

<details>
<summary>minecraft:entity_type/ars_nouveau:jar_blacklist</summary>

```diff
 [
   ... (3 entries)
+  "cobblemon:boat"
+  "cobblemon:chest_boat"
+  "cobblemon:empty_pokeball"
+  "cobblemon:generic_bedrock"
+  "cobblemon:npc"
+  "cobblemon:poke_bobber"
+  "cobblemon:pokemon"
+  "the_bumblezone:bee_queen"
 ]

```


</details>

<details>
<summary>minecraft:item/curios:talisman</summary>

```diff
 [
-  "cataclysm:lava_reactor"
-  "cataclysm:overgrown_geode"
-  "cataclysm:ravenous_fang"
   ... (1 entries)
 ]

```


</details>

</blockquote>

</details>

## ✍️ Registries

## 🗝️ Loot Table

