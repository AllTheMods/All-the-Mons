# Changelog

# 📦 1.3.0

## 📰 General changes and notes

<em>I would walk 500 chunks<br>
And I would walk 500 more<br>
Just to get the cosmic dust I need<br>
To spawn a Cosmog at my door</em>

1.3.0 is a fix-focused release. **Cosmic Dust** now actually generates in the End at a decent rate, so **Cosmog** is obtainable without an unreasonable amount of exploring, and **Reliquified Artifacts** items no longer equip into Accessories slots where they did nothing. A batch of long-standing recipe conflicts is resolved, the compasses stop listing content the pack does not generate, and the coremod brings a large pasture performance win.

NeoForge updated to 21.1.249.

<details open>
<summary>Pack changes :octocat:</summary>
<blockquote>

- Fixed Cosmic Dust barely generating in the End, which made Cosmog effectively unobtainable (LobsterJonn)
- Stopped Reliquified Artifacts items equipping into Accessories slots, where they did nothing (LobsterJonn)
- Big pasture performance improvement, a pasture no longer scans the owner's entire PC twice every tick (LobsterJonn)
- Pokémon species names are no longer rebuilt with a regex every time they are read, which was most of the cost of CobbleWorkers jobs (LobsterJonn)
- Fixed a dupe where automation could pull the in-progress result out of a Cobblefurnies stove or cooking pot (LobsterJonn)
- Fixed a crash when scanning chunks containing a Cobblemon Gilded Chest (LobsterJonn)
- Fixed duplication when using Apokinetics Precision and Yielding gems on compression recipes (LobsterJonn)
- Fixed a memory leak in the recipe event (#720) (Uncandango)
- Dropped the Legendary Monuments Azure Flute and Ingredient mixin workarounds, fixed in LM 8.1 update (LobsterJonn)
- Coal coke and ditchbulb paste are no longer crushed into coal dust (#722) (LobsterJonn)
- Fixed the lavender dye recipe being unobtainable because brown dye claimed its pattern (#731) (LobsterJonn)
- Removed the duplicate green dye recipe (#126) (LobsterJonn)
- Fixed the affix template recipes that start from a brass plate (#670) (LobsterJonn)
- Fixed several item tags (#105, #683, #437) (LobsterJonn)
- Unified the crop tags (LobsterJonn)
- Ancient Great Ball of Fire now uses its own Ancient lid in the Pressure Chamber as it should (LobsterJonn)
- PneumaticCraft assembly now cuts apricorn bits with the drill (LobsterJonn)
- Added a Mekanism sawmill recipe turning stripped apricorn logs into apricorn ball lids (LobsterJonn)
- Added tooltips to the Cobblemon regional foods explaining that you crouch to eat them yourself (LobsterJonn)
- Radical Red gym leaders now roam instead of only staying put in their gyms (LobsterJonn)
- Added more structures to the Overlapless unskippable list so they stop being skipped (LobsterJonn)
- Hid structures the pack does not generate from Explorer's Compass (LobsterJonn)
- Hid biomes the pack does not generate from Nature's Compass (LobsterJonn)
- Swapped the Rising Badge with the Earth Badge (LobsterJonn)
- Adjusted Joey's team level to match the level cap (LobsterJonn)
- Removed unused custom items (LobsterJonn)
- The Hall of Origin quest now triggers on entering the dimension rather than the structure (LobsterJonn)
- Corrected the catch rates listed in the ATM ball quest (LobsterJonn)
- Fixed the Radical Red gym leader quest text (LobsterJonn)
- Removed placeholder text from quests (LobsterJonn)
- Quest text fixes (LobsterJonn)
- Made the recipe check ignore Apotheosis (#707) (DivineFinal)
- Prepared for Enamorus' addition to Legendary Monuments (#732) (DivineFinal)
- S'nore quest changes (#712) (DivineFinal)
- Disabled the new silver ore from Mekanism: More Machine (#729) (item4)
- Explicitly marked the Glyph of Nullify Defense as disabled (#740) (item4)
- Protected the Robit from Amber Bees and Ars Containment Jars (#723) (item4)
- Updated the Artifacts quest (#710) (PrincessStellar)
- Updated PT_BR localization (#706, #710, #721) (PrincessStellar)

</blockquote>

</details>

---

## 🛠️ Mods

<details open>
<summary>Added (1)</summary>

Mod list changes after the latest successful launch:
Added mods:

- Better Advanced Tooltips (2101.1.0-build.5)

</details>

<details open>
<summary>Updated (93)</summary>

Mod list changes after the latest successful launch:
Updated mods:

- AE2 Import Export Card (1.21.1-1.5.0 > 1.21.1-1.6.0)
- All The Leaks (1.1.11+1.21.1-neoforge > 1.1.12+1.21.1-neoforge)
- All The Mons (0.5.0 > 0.6.1)
- Amendments (1.21-2.1.7 > 1.21-2.1.9)
- Apokinetics (1.0.4 > 1.0.6)
- Apothic Enchanting (1.6.0 > 1.6.2)
- Ars Nouveau (5.13.0 > 5.13.1)
- Ars Ocultas (2.5.0 > 2.6.1)
- Ars Unification (1.2.19 > 1.2.21)
- Artifacts (13.2.1 > 13.2.3)
- Balm (21.0.64 > 21.0.65)
- Cobblemon Raid Dens (0.11.5+1.21.1 > 0.11.7+1.21.1)
- Cobblemon:Mega Showdown (1.9.3+1.7.3+1.21.1 > 1.9.9+1.7.3+1.21.1)
- Construction Sticks (1.4.1 > 1.5.0)
- Crafting Tweaks (21.1.10 > 21.1.11)
- Crash Assistant (1.11.11 > 1.11.12)
- Create Crafts & Additions (1.6.0 > 1.7.0)
- Create: Dragons Plus (1.11.4 > 1.11.8b)
- Create: Enchantment Industry (2.5.0 > 2.5.3b)
- Crystalix (3.0.0 > 3.0.1)
- Cupboard mod (3.9 > 4.1)
- Cyclops Core (1.29.2 > 1.29.4)
- Draconic Evolution (3.1.4.632 > 3.1.4.633)
- EnchantmentDescriptions (21.1.10 > 21.1.11)
- Epitaphs (2.0.3 > 2.2.0)
- Eternal Starlight (0.8.1+1.21.1+neoforge > 0.9.0+1.21.1+neoforge)
- Euphoria Patcher (1.9.3-r5.8.1-neoforge > 1.10.0-r5.9-neoforge)
- FancyMenu (3.9.9 > 3.9.12)
- Farmer's Delight (1.3.2 > 1.3.4)
- FramedBlocks (10.6.1 > 10.6.2)
- FTB Chunks (2101.1.21 > 2101.1.22)
- FTB Library (2101.1.34 > 2101.1.35)
- FTB Quests (2101.1.29 > 2101.1.34)
- FTB Quests Lang Splitter (1.0.6 > 1.0.7)
- FTB Teams (2101.1.10 > 2101.1.11)
- FTB XMod Compat (21.1.10 > 21.1.11)
- Fusion (1.3.12 > 1.3.15)
- Generator Galore (1.21.1-1.6.3 > 1.21.1-1.7.0)
- I'm Fast (1.0.2 > 1.0.3)
- ImmediatelyFast (1.6.11+1.21.1 > 1.6.13+1.21.1)
- InControl (1.21-10.2.6 > 1.21-10.3.0)
- IntegratedCrafting (1.4.6 > 1.6.0)
- IntegratedDynamics (1.34.0 > 1.36.0)
- IntegratedScripting (1.0.24 > 1.0.27)
- IntegratedTerminals (1.7.0 > 1.9.0)
- IntegratedTunnels (1.9.4 > 1.11.0)
- Jade (15.10.5+neoforge > 15.10.6+neoforge)
- Jonn's Trophies (1.21.1-2.5.0 > 1.21.1-3.0.0)
- Journeymap (1.21.1-6.0.2 > 1.21.1-6.0.7)
- Just Enough Items (19.43.0.393 > 19.53.0.425)
- Just Enough Mekanism Multiblocks (7.16 > 7.20)
- KubeJS (2101.7.2-build.368 > 2101.7.2-build.374)
- L_Ender's Cataclysm (3.32 > 3.33)
- Laser Bridges (5.3 > 6)
- Legendary Monuments (8.0.3 > 8.1-Love-for-All)
- Lithostitched (1.7.13 > 1.8.0+beta6)
- Little Big Redstone (1.9.8-1.21.1 > 1.9.11-1.21.1)
- LogisticsNetworks (1.10.1 > 1.14.2)
- Lootr (1.21.1-1.11.37.122 > 1.21.1-1.11.38.125)
- ME Requester (1.21.1-1.4.3 > 1.21.1-1.5.0)
- Mekanism: MoreMachine (1.3.3 > 1.4.1)
- ModernFix (5.27.20+mc1.21.1 > 5.27.24+mc1.21.1)
- ModularBees (1.21.1-3.3-neoforge > 1.21.1-3.4-neoforge)
- Moonlight Lib (1.21.1-3.3.0 > 1.21.1-3.6.1)
- Mystical Agriculture (8.0.27 > 8.0.28)
- NaturesAura (41.9 > 41.10)
- neoforge (21.1.248 > 21.1.249)
- Occultism (1.224.1 > 1.224.4)
- Oritech (1.2.10 > 1.2.12)
- Productive Trees (1.21.1-1.0.0 > 1.21.1-1.1.0)
- Puzzles Lib (21.1.52 > 21.1.56)
- RCT Trainers+ (resourcepack) ([1.6] v2.1. > [1.7] v2.2.)
- Rebind Narrator (2025.12.23 > 2026.08.31)
- Reliquary Reincarnations (2.0.77 > 2.0.80)
- Reliquified Artifacts (1.0.7 > 1.0.8)
- RFToolsBuilder (1.21-7.0.5 > 1.21-7.0.6)
- Roots Classic (1.21.1-1.5.7 > 1.21.1-1.5.9)
- Sodium (0.8.13-beta.1+mc1.21.1 > 0.8.13+mc1.21.1)
- Sophisticated Backpacks (3.25.73 > 3.26.1)
- Sophisticated Core (1.4.80 > 1.5.0)
- Sophisticated Storage (1.5.83 > 1.5.91)
- Sophisticated Storage In Motion (0.10.33 > 0.10.34)
- Starbunclemania (1.5.7 > 1.5.8)
- SuperMartijn642's Core Lib (1.1.22 > 1.1.24)
- Supplementaries (1.21.1-3.8.5 > 1.21.1-3.9.7)
- Tesseract API (1.12.13-1.21.1 > 1.12.16-1.21.1)
- Titanium (4.0.45 > 4.0.50)
- Torchmaster (21.1.9 > 21.1.11)
- Trash Cans (1.0.18+c > 1.1.0)
- Universal Sawmill (1.21-1.8.0 > 1.21-1.8.1)
- Waystones (21.1.40 > 21.1.42)
- YUNG's API (1.21.1-NeoForge-5.1.6 > 1.21.1-NeoForge-5.1.8)
- zamega (1.7.5-hotfix > 1.7.6)

</details>

<details open>
<summary>Removed (1)</summary>

Mod list changes after the latest successful launch:
Removed mods:

- Reap Mod (1.21.1-1.1.2)

</details>
