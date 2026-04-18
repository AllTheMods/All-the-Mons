# Changelog

# 📦 1.0.0-rc.1

## 📰 General changes and notes

Summary of changes here!

<details open>
<summary>Github Commits :octocat:</summary>
<blockquote>

- Occultism Iesnium example
- Evolution Typo
- Immersive Engineering Quest fix
- For the offense and defense one
- Deeplings no longer drop Hearts
- of the sea
- Updated PT_BR localization
- Updated PT_BR localization
- Updated PT_BR localization
- Updated PT_BR localization
- fix: Update Cataclysm Configs (#500)
- Attempted to recreate configs 1:1 with the original wherever possible (based on ATM10's configs, unsure if it is any different here), except with the DPS Cap, where I took the following liberties: DPS Cap calculated based on the following formula: Original DPS Cap*New Damage Cap/Original Damage Cap
- Also removes old cataclysm config file to clear up redundancy.
- chore: changelogs
- Quest Fix
- - Removed image from the EvilCraft mod.
- - Removed image from the Twilight mod.
- - Some lines from the quest ‘The ATM Star’ were hidden to keep the chapter cleaner.
- - Change the description for the 'Soul Lava Bee Spawn Egg' in the chapter 'The ATM Star'.
- - Updated PT_BR Localization.
- Delete image from the EvilCraft mod
- Delete image from the Twilight mod
- Quest Fix
- emoved the quest “Generalized Twilight Prediction” from the 'HNN' chapter.
- Quest Fix
- The Nexium Emitter quest was not dependent on the Infinity Range Booster quest in the chapter 'The ATM Star'
- fix: remove duplicate quest
- fix: some modifications on choc factory and include entities on bee gym
- closes #507
- Increased pc box count from 40 to 100
- updated nektar trainer team
- add log suppressor for supplementaries file spam
- added recipe for syrupy apple
- Undergarden Quest Update
- Fix duplicate Productive Bees quest
- trainer updates
- Cataclysm Quest Update
- For Mons too
- Updating more Quests
- Updated PT_BR localization
- Updated PT_BR localization
- fix: remove squid spawn
- fix: reorder jei recipe (ritual goes first)
- feat: pika star quest pics
- fix: remove silent gear book when joining fresh world
- fix: spawn greavard and houndstone
- chore: bump bcc
- feat: add regional pika stars to jei
- fix: restrict relocation of cobblemon display case
- feat: add pika star advancements
- feat: add pika star quests
- feat: add upside down atm star, patrick and shards recipe
- feat: regional pika star animations
- feat: add hint to use regional pika star when count is 0
- feat: add regional pika star recipe, altar recipe, imbued egg recipe
- feat: add catch restrictions if you don't have regional pika star
- Updated PT_BR localization - KubeJS and Quest (#523)
- * Updated PT_BR localization - KubeJS
- * Updated PT_BR localization - Quest
- fix: typo in jsons
- fix: typo
- fix: remove bypass restriction if using master ball
- fix: add extra check if player completed ATM Series
- chore: modlist</blockquote>

</details>

---

## 🛠️ Mods

<details open>
<summary>Added (2)</summary>

- Cobblemon Ultra Wormholes (1.1.1)
- Summoning Rituals (1.21.1-3.11.1)

</details>

<details open>
<summary>Updated (7)</summary>

- All The Mons (0.0.46) -> (0.1.1)
- L_Ender's Cataclysm 1.21.1 (3.26) -> (3.27)
- Epitaphs (1.0.14) -> (2.0.0)
- Journeymap (1.21.1-6.0.0-beta.60) -> (1.21.1-6.0.0-beta.63)
- lionfishapi (2.6) -> (2.7)
- NeoForge (21.1.224) -> (21.1.226)
- Utilitarian (1.21.1-0.19.0) -> (1.21.1-0.19.1)

</details>

## 🍳 Recipes

<details>
<summary>Added (12)</summary>
<blockquote>

<details>
<summary>allthemons/cutting/pika_star_shard</summary>

```diff
+{
+  type: "create:cutting"
+  ingredients: [
+    {
+      item: "allthemons:pika_star"
+    }
+  ]
+  results: [
+    {
+      count: 5
+      id: "allthemons:pika_star_chunk"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/grinder/pika_star_shard</summary>

```diff
+{
+  type: "oritech:grinder"
+  fluidInput: {
+    amount: 0
+    fluid: "minecraft:empty"
+  }
+  fluidOutputs: [
+  ]
+  ingredients: [
+    {
+      item: "allthemons:pika_star"
+    }
+  ]
+  results: [
+    {
+      count: 5
+      id: "allthemons:pika_star_chunk"
+    }
+  ]
+  time: 60
+}

```


</details>

<details>
<summary>allthemons/imbued_pokemon_egg</summary>

```diff
+{
+  type: "summoningrituals:altar"
+  initiator: {
+    items: "allthemons:pokemon_egg"
+    components: {
+      allthemons:species: "cobblemon:staryu"
+      allthemons:features: [
+        "atm"
+      ]
+    }
+    type: "neoforge:components"
+  }
+  display_outputs: [
+    {
+      id: "allthemons:imbued_pokemon_egg"
+      count: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "allthetweaks:patrick_star"
+      count: 1
+    }
+    {
+      tag: "create:sandpaper"
+      count: 1
+    }
+    {
+      item: "productivetrees:maple_syrup"
+      count: 1
+    }
+  ]
+  block_pattern: {
+    entries: [
+      {
+        offset: [
+          3
+          6
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -1
+          2
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          0
+          2
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          1
+          2
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          2
+          2
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          3
+          2
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          4
+          2
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -4
+          7
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -3
+          7
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -2
+          7
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -1
+          7
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -4
+          3
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          1
+          7
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -3
+          3
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          2
+          7
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -2
+          3
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          3
+          7
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -1
+          3
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          4
+          7
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          0
+          3
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          1
+          3
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          2
+          3
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          3
+          3
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          4
+          3
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -4
+          8
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -3
+          8
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -2
+          8
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -3
+          4
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          2
+          8
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -2
+          4
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          3
+          8
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -1
+          4
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          4
+          8
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          0
+          4
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+        query: "imbued_egg_slot"
+      }
+      {
+        offset: [
+          1
+          4
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          2
+          4
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          3
+          4
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          0
+          0
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -2
+          5
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -1
+          5
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          0
+          5
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          1
+          5
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          2
+          5
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -1
+          1
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          0
+          1
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          1
+          1
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -3
+          6
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -2
+          6
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -1
+          6
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          0
+          6
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -4
+          2
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          1
+          6
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -3
+          2
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          2
+          6
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+      {
+        offset: [
+          -2
+          2
+          3
+        ]
+        predicate: {
+          blocks: "create:mechanical_crafter"
+        }
+      }
+    ]
+    name: "Create crafters for Star Recipe"
+  }
+  ticks: 240
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Summoning Rituals/recipes.js"
+    line: 145
+  }
+}

```


</details>

<details>
<summary>allthemons/mekanism/injecting/tart_apple</summary>

```diff
+{
+  type: "mekanism:injecting"
+  chemical_input: {
+    amount: 1000
+    chemical: "mekanism:sulfuric_acid"
+  }
+  item_input: {
+    count: 1
+    item: "cobblemon:sweet_apple"
+  }
+  output: {
+    count: 1
+    id: "cobblemon:tart_apple"
+  }
+  per_tick_usage: false
+}

```


</details>

<details>
<summary>allthemons/mekanism/sawing/pika_star_shard</summary>

```diff
+{
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "allthemons:pika_star"
+  }
+  main_output: {
+    count: 5
+    id: "allthemons:pika_star_chunk"
+  }
+}

```


</details>

<details>
<summary>allthemons/pika_star</summary>

```diff
+{
+  type: "create:mechanical_crafting"
+  accept_mirrored: false
+  category: "misc"
+  key: {
+    1: {
+      item: "mega_showdown:pink_nectar"
+    }
+    2: {
+      item: "mega_showdown:purple_nectar"
+    }
+    3: {
+      item: "mega_showdown:red_nectar"
+    }
+    4: {
+      item: "mega_showdown:yellow_nectar"
+    }
+    5: {
+      item: "mega_showdown:red_orb"
+    }
+    6: {
+      item: "mega_showdown:blue_orb"
+    }
+    7: {
+      item: "mega_showdown:electric_tera_shard"
+    }
+    8: {
+      item: "mega_showdown:stellar_tera_shard"
+    }
+    9: {
+      item: "simpletms:tm_thunder"
+    }
+    X: {
+      item: "cobblemon:exp_candy_xl"
+    }
+    A: {
+      item: "allthemons:the_vortex_badge"
+    }
+    B: {
+      item: "allthemons:the_drunk_badge"
+    }
+    C: {
+      item: "allthemons:the_skyblock_badge"
+    }
+    D: {
+      item: "allthemons:the_lobster_badge"
+    }
+    E: {
+      item: "allthemons:the_kitty_badge"
+    }
+    F: {
+      item: "allthemons:the_bathsalts_badge"
+    }
+    G: {
+      item: "allthemons:the_unknown_badge"
+    }
+    H: {
+      item: "allthemons:the_microwave_badge"
+    }
+    I: {
+      item: "allthemons:the_toblerone_badge"
+    }
+    J: {
+      item: "allthemons:the_notch_badge"
+    }
+    K: {
+      item: "allthemons:the_artist_badge"
+    }
+    L: {
+      item: "allthemons:the_ralph_badge"
+    }
+    M: {
+      item: "cobblemon:custap_berry"
+    }
+    O: {
+      item: "productivetrees:star_fruit"
+    }
+    P: {
+      item: "cobblemon:liechi_berry"
+    }
+    S: {
+      item: "allthemons:imbued_pokemon_egg"
+    }
+  }
+  pattern: [
+    "XXX   XXX"
+    "XE7X X7HX"
+    " X9MXOPX "
+    "  XB4CX  "
+    " X82S3KX "
+    "XLFG1JAIX"
+    "XXX576XXX"
+    "   XDX   "
+    "    X    "
+  ]
+  result: {
+    count: 1
+    id: "allthemons:pika_star"
+  }
+  show_notification: false
+}

```


</details>

<details>
<summary>allthemons/regional_pika_star</summary>

```diff
+{
+  type: "summoningrituals:altar"
+  initiator: {
+    items: "allthemons:pika_star"
+    components: {
+    }
+    strict: true
+    type: "neoforge:components"
+  }
+  display_outputs: [
+    {
+      id: "allthemons:pika_star"
+      count: 1
+      components: {
+        allthemons:region: "kantonian"
+      }
+    }
+    {
+      id: "allthemons:pika_star"
+      count: 1
+      components: {
+        allthemons:region: "johtonian"
+      }
+    }
+    {
+      id: "allthemons:pika_star"
+      count: 1
+      components: {
+        allthemons:region: "hoennian"
+      }
+    }
+    {
+      id: "allthemons:pika_star"
+      count: 1
+      components: {
+        allthemons:region: "sinnohan"
+      }
+    }
+    {
+      id: "allthemons:pika_star"
+      count: 1
+      components: {
+        allthemons:region: "unovan"
+      }
+    }
+    {
+      id: "allthemons:pika_star"
+      count: 1
+      components: {
+        allthemons:region: "kalosian"
+      }
+    }
+    {
+      id: "allthemons:pika_star"
+      count: 1
+      components: {
+        allthemons:region: "alolan"
+      }
+    }
+    {
+      id: "allthemons:pika_star"
+      count: 1
+      components: {
+        allthemons:region: "galarian"
+      }
+    }
+    {
+      id: "allthemons:pika_star"
+      count: 1
+      components: {
+        allthemons:region: "hisuian"
+      }
+    }
+    {
+      id: "allthemons:pika_star"
+      count: 1
+      components: {
+        allthemons:region: "paldean"
+      }
+    }
+  ]
+  item_inputs: [
+    {
+      item: "cobblemon:ancient_origin_ball"
+      count: 1
+    }
+    {
+      item: "allthemons:ancient_vibranium_ball"
+      count: 1
+    }
+    {
+      item: "allthemons:ancient_unobtainium_ball"
+      count: 1
+    }
+    {
+      item: "allthemons:ancient_allthemodium_ball"
+      count: 1
+    }
+  ]
+  fake_entity_inputs: [
+    {
+      item: {
+        id: "cobblemon:pokemon_model"
+        count: 1
+        components: {
+          cobblemon:pokemon_item: {
+            species: "cobblemon:charizard"
+            aspects: [
+            ]
+          }
+          minecraft:custom_name: "{\"color\":\"gold\",\"text\":\"6 Pokémons from same Region\"}"
+          minecraft:lore: [
+            "{\"color\":\"gray\",\"text\":\"Send out all your 6 pokémons from a\"}"
+            "{\"color\":\"gray\",\"text\":\"certain region to craft that regional Pika Star.\"}"
+          ]
+        }
+      }
+      count: 6
+    }
+  ]
+  block_pattern: {
+    entries: [
+      {
+        offset: [
+          -2
+          0
+          2
+        ]
+        predicate: {
+          blocks: "cobblemon:display_case"
+        }
+        query: "mega_stones_inv"
+      }
+      {
+        offset: [
+          0
+          0
+          -3
+        ]
+        predicate: {
+          blocks: "cobblefurnies:statue_pikachu"
+          properties: {
+            half: "lower"
+            facing: "south"
+          }
+        }
+      }
+      {
+        offset: [
+          -3
+          0
+          0
+        ]
+        predicate: {
+          blocks: "cobblefurnies:statue_bulbasaur"
+          properties: {
+            half: "lower"
+            facing: "east"
+          }
+        }
+      }
+      {
+        offset: [
+          0
+          0
+          3
+        ]
+        predicate: {
+          blocks: "cobblefurnies:statue_charmander"
+          properties: {
+            half: "lower"
+            facing: "north"
+          }
+        }
+      }
+      {
+        offset: [
+          3
+          0
+          0
+        ]
+        predicate: {
+          blocks: "cobblefurnies:statue_squirtle"
+          properties: {
+            half: "lower"
+            facing: "west"
+          }
+        }
+      }
+      {
+        offset: [
+          -2
+          0
+          -2
+        ]
+        predicate: {
+          blocks: "cobblemon:display_case"
+        }
+        query: "mega_stones_inv"
+      }
+      {
+        offset: [
+          2
+          0
+          2
+        ]
+        predicate: {
+          blocks: "cobblemon:display_case"
+        }
+        query: "mega_stones_inv"
+      }
+      {
+        offset: [
+          2
+          0
+          -2
+        ]
+        predicate: {
+          blocks: "cobblemon:display_case"
+        }
+        query: "mega_stones_inv"
+      }
+    ]
+    name: "Statues and display cases filled with Mega Stones"
+  }
+  zone: [
+    5
+    3
+    5
+  ]
+  ticks: 240
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Summoning Rituals/recipes.js"
+    line: 65
+  }
+}

```


</details>

<details>
<summary>allthemons/summoning_ritual_altar</summary>

```diff
+{
+  type: "kubejs:shaped"
+  result: {
+    id: "summoningrituals:altar"
+    count: 1
+  }
+  pattern: [
+    "CSC"
+    "CEC"
+    "UTV"
+  ]
+  key: {
+    C: {
+      tag: "minecraft:candles"
+    }
+    S: {
+      item: "minecraft:wither_skeleton_skull"
+    }
+    T: {
+      item: "minecraft:crafting_table"
+    }
+    E: {
+      item: "minecraft:enchanting_table"
+    }
+    U: {
+      item: "allthemodium:unobtainium_vibranium_alloy_block"
+    }
+    V: {
+      item: "allthemodium:vibranium_allthemodium_alloy_block"
+    }
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Summoning Rituals/recipes.js"
+    line: 11
+  }
+}

```


</details>

<details>
<summary>allthetweaks/allthetweaks/atm_star_from_shard_rotated</summary>

```diff
+{
+  type: "create:mechanical_crafting"
+  accept_mirrored: false
+  category: "misc"
+  key: {
+    S: {
+      item: "allthetweaks:atm_star_shard"
+    }
+  }
+  pattern: [
+    "SSS   SSS"
+    "SSSS SSSS"
+    " SSSSSSS "
+    "  SSSSS  "
+    " SSSSSSS "
+    "SSSSSSSSS"
+    "SSSSSSSSS"
+    "   SSS   "
+    "    S    "
+  ]
+  result: {
+    count: 1
+    id: "allthetweaks:atm_star"
+  }
+  show_notification: false
+  _kubejs_changed_marker: {
+    source: "server_scripts:modpack/atm_star.js"
+    line: 306
+  }
+}

```


</details>

<details>
<summary>allthetweaks/allthetweaks/atm_star_rotated</summary>

```diff
+{
+  type: "create:mechanical_crafting"
+  accept_mirrored: false
+  category: "misc"
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_block"
+    }
+    B: {
+      item: "allthetweaks:nexium_emitter"
+    }
+    C: {
+      item: "allthetweaks:dragon_soul"
+    }
+    D: {
+      item: "allthetweaks:withers_compass"
+    }
+    E: {
+      item: "allthetweaks:pulsating_black_hole"
+    }
+    F: {
+      item: "allthetweaks:oblivion_shard"
+    }
+    G: {
+      item: "allthetweaks:improbable_probability_device"
+    }
+    H: {
+      item: "allthetweaks:dimensional_seed"
+    }
+    I: {
+      item: "allthetweaks:patrick_star"
+    }
+    J: {
+      item: "allthecompressed:nether_star_block_2x"
+    }
+    K: {
+      item: "allthetweaks:philosophers_fuel"
+    }
+    L: {
+      item: "mysticalagradditions:creative_essence"
+    }
+    M: {
+      item: "cobblemon:master_ball"
+    }
+    U: {
+      item: "sgearmetalworks:uru_metal_block"
+    }
+  }
+  pattern: [
+    "AAU   UAA"
+    "AJJU UJJA"
+    " UJJUJJU "
+    "  UKGLU  "
+    " UMBIHMU "
+    "AJJCDEJJA"
+    "AAUJFJUAA"
+    "   AJA   "
+    "    A    "
+  ]
+  result: {
+    count: 1
+    id: "allthetweaks:atm_star"
+  }
+  show_notification: false
+  _kubejs_changed_marker: {
+    source: "server_scripts:modpack/atm_star.js"
+    line: 140
+  }
+}

```


</details>

<details>
<summary>allthetweaks/allthetweaks/patrick_star_rotated</summary>

```diff
+{
+  type: "create:mechanical_crafting"
+  accept_mirrored: false
+  category: "misc"
+  key: {
+    A: {
+      item: "minecraft:magenta_concrete"
+    }
+    B: {
+      item: "minecraft:pink_concrete"
+    }
+    C: {
+      item: "minecraft:pink_concrete_powder"
+    }
+    D: {
+      item: "minecraft:green_concrete"
+    }
+    E: {
+      item: "minecraft:green_concrete_powder"
+    }
+    F: {
+      item: "minecraft:lime_concrete"
+    }
+    G: {
+      item: "minecraft:magenta_concrete_powder"
+    }
+  }
+  pattern: [
+    "AAA   AAA"
+    "BEDD DDEB"
+    " EFEDEFE "
+    "  EDDDE  "
+    " AAGGGBA "
+    "ACGCGGGCA"
+    "BBBGCABBB"
+    "   BCA   "
+    "    B    "
+  ]
+  result: {
+    count: 1
+    id: "allthetweaks:patrick_star"
+  }
+  show_notification: false
+  _kubejs_changed_marker: {
+    source: "server_scripts:modpack/atm_star.js"
+    line: 247
+  }
+}

```


</details>

<details>
<summary>kubejs/kjs/cobblemon_syrupy_apple</summary>

```diff
+{
+  type: "kubejs:shapeless"
+  result: {
+    id: "cobblemon:syrupy_apple"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "cobblemon:sweet_apple"
+    }
+    {
+      tag: "c:maple_syrup"
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Cobblemon/Recipes.js"
+    line: 14
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
<summary>allthetweaks/allthetweaks/atm_star_from_shard</summary>

```diff
 {
   type: "create:mechanical_crafting"
   accept_mirrored: false
   category: "misc"
   key: {
     S: {
       item: "allthetweaks:atm_star_shard"
     }
   }
   pattern: [
     "    S    "
     "   SSS   "
     "SSSSSSSSS"
     "SSSSSSSSS"
     " SSSSSSS "
     "  SSSSS  "
     " SSSSSSS "
     "SSSS SSSS"
     "SSS   SSS"
   ]
   result: {
     count: 1
     id: "allthetweaks:atm_star"
   }
   show_notification: false
   _kubejs_changed_marker: {
     source: "server_scripts:modpack/atm_star.js"
-    line: 156
+    line: 277
   }
 }

```


</details>

<details>
<summary>allthetweaks/allthetweaks/patrick_star</summary>

```diff
 {
   type: "create:mechanical_crafting"
   accept_mirrored: false
   category: "misc"
   key: {
     A: {
       item: "minecraft:magenta_concrete"
     }
     B: {
       item: "minecraft:pink_concrete"
     }
     C: {
       item: "minecraft:pink_concrete_powder"
     }
     D: {
       item: "minecraft:green_concrete"
     }
     E: {
       item: "minecraft:green_concrete_powder"
     }
     F: {
       item: "minecraft:lime_concrete"
     }
     G: {
       item: "minecraft:magenta_concrete_powder"
     }
   }
   pattern: [
     "    B    "
     "   BCA   "
     "BBBGCABBB"
     "ACGCGGGCA"
     " AAGGGBA "
     "  EDDDE  "
     " EFEDEFE "
     "BEDD DDEB"
     "AAA   AAA"
   ]
   result: {
     count: 1
     id: "allthetweaks:patrick_star"
   }
   show_notification: false
   _kubejs_changed_marker: {
     source: "server_scripts:modpack/atm_star.js"
-    line: 126
+    line: 194
   }
 }

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details open>
<summary>Added (4)</summary>
<blockquote>

<details>
<summary>minecraft:block/summoningrituals:altars</summary>

```diff
+[
+  "summoningrituals:altar"
+  "summoningrituals:indestructible_altar"
+]

```


</details>

<details>
<summary>minecraft:damage_type/allthemons:owned_invulnerable</summary>

```diff
+[
+  "minecraft:cactus"
+  "minecraft:hot_floor"
+  "minecraft:in_fire"
+  "minecraft:lava"
+  "minecraft:lightning_bolt"
+  "minecraft:on_fire"
+  "minecraft:sweet_berry_bush"
+]

```


</details>

<details>
<summary>minecraft:item/allthemons:badges</summary>

```diff
+[
+  "allthemons:the_artist_badge"
+  "allthemons:the_bathsalts_badge"
+  "allthemons:the_drunk_badge"
+  "allthemons:the_kitty_badge"
+  "allthemons:the_lobster_badge"
+  "allthemons:the_microwave_badge"
+  "allthemons:the_notch_badge"
+  "allthemons:the_ralph_badge"
+  "allthemons:the_skyblock_badge"
+  "allthemons:the_toblerone_badge"
+  "allthemons:the_unknown_badge"
+  "allthemons:the_vortex_badge"
+  "pkgbadges:starfall_street_dark_badge"
+  "pkgbadges:starfall_street_fairy_badge"
+  "pkgbadges:starfall_street_fightning_badge"
+  "pkgbadges:starfall_street_fire_badge"
+  "pkgbadges:starfall_street_poison_badge"
+  "pkgbadges:the_balance_badge"
+  "pkgbadges:the_basic_badge"
+  "pkgbadges:the_beacon_badge"
+  "pkgbadges:the_bolt_badge"
+  "pkgbadges:the_boulder_badge"
+  "pkgbadges:the_bug_badge"
+  "pkgbadges:the_bug_badge_paldea"
+  "pkgbadges:the_cascade_badge"
+  "pkgbadges:the_cliff_badge"
+  "pkgbadges:the_coal_badge"
+  "pkgbadges:the_cobble_badge"
+  "pkgbadges:the_coral_eye_badge"
+  "pkgbadges:the_dark_badge"
+  "pkgbadges:the_dragon_badge"
+  "pkgbadges:the_dragon_badge_pathof_legends"
+  "pkgbadges:the_dynamo_badge"
+  "pkgbadges:the_earth_badge"
+  "pkgbadges:the_electric_badge_paldea"
+  "pkgbadges:the_fairy_badge"
+  "pkgbadges:the_fairy_badge_galar"
+  "pkgbadges:the_feather_badge"
+  "pkgbadges:the_fen_badge"
+  "pkgbadges:the_fighting_badge"
+  "pkgbadges:the_fire_badge"
+  "pkgbadges:the_flying_badge"
+  "pkgbadges:the_fog_badge"
+  "pkgbadges:the_forest_badge"
+  "pkgbadges:the_freedom_badge"
+  "pkgbadges:the_freeze_badge"
+  "pkgbadges:the_ghost_badge"
+  "pkgbadges:the_ghost_badge_paldea"
+  "pkgbadges:the_glacier_badge"
+  "pkgbadges:the_grass_badge"
+  "pkgbadges:the_grass_badge_paldea"
+  "pkgbadges:the_ground_badge"
+  "pkgbadges:the_harmony_badge"
+  "pkgbadges:the_heat_badge"
+  "pkgbadges:the_hive_badge"
+  "pkgbadges:the_ice_badge"
+  "pkgbadges:the_ice_badge_paldea"
+  "pkgbadges:the_iceberg_badge"
+  "pkgbadges:the_icicle_badge"
+  "pkgbadges:the_insect_badge"
+  "pkgbadges:the_jade_star_badge"
+  "pkgbadges:the_jet_badge"
+  "pkgbadges:the_knuckle_badge"
+  "pkgbadges:the_legend_badge"
+  "pkgbadges:the_marsh_badge"
+  "pkgbadges:the_mind_badge"
+  "pkgbadges:the_mine_badge"
+  "pkgbadges:the_mineral_badge"
+  "pkgbadges:the_normal_badge_paldea"
+  "pkgbadges:the_patience_badge"
+  "pkgbadges:the_plain_badge"
+  "pkgbadges:the_plant_badge"
+  "pkgbadges:the_pride_badge"
+  "pkgbadges:the_psychic_badge"
+  "pkgbadges:the_psychic_badge_paldea"
+  "pkgbadges:the_quake_badge"
+  "pkgbadges:the_rain_badge"
+  "pkgbadges:the_rainbow_badge"
+  "pkgbadges:the_relic_badge"
+  "pkgbadges:the_rising_badge"
+  "pkgbadges:the_rock_badge"
+  "pkgbadges:the_rock_badge_pathof_legends"
+  "pkgbadges:the_rumble_badge"
+  "pkgbadges:the_sea_ruby_badge"
+  "pkgbadges:the_soul_badge"
+  "pkgbadges:the_spike_shell_badge"
+  "pkgbadges:the_steel_badge"
+  "pkgbadges:the_stone_badge"
+  "pkgbadges:the_storm_badge"
+  "pkgbadges:the_thunder_badge"
+  "pkgbadges:the_tranquility_badge"
+  "pkgbadges:the_trio_badge"
+  "pkgbadges:the_volcano_badge"
+  "pkgbadges:the_voltage_badge"
+  "pkgbadges:the_water_badge"
+  "pkgbadges:the_water_badge_paldea"
+  "pkgbadges:the_zephyr_badge"
+]

```


</details>

<details>
<summary>minecraft:item/c:tools/brushes</summary>

```diff
+[
+  "#c:tools/brush"
+]

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (4)</summary>
<blockquote>

<details>
<summary>minecraft:block/c:relocation_not_supported</summary>

```diff
 [
   ... (18 entries)
+  "cobblemon:display_case"
   ... (790 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/axe</summary>

```diff
 [
   ... (3149 entries)
+  "summoningrituals:altar"
   ... (98 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/utilitarian:mufflers</summary>

```diff
 [
-  "utilitarian:particle_muffler"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:block_entity_type/c:relocation_not_supported</summary>

```diff
 [
   ... (1 entries)
+  "cobblemon:display_case"
   ... (1 entries)
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
   ... (31146 entries)
+  "summoningrituals:altar"
+  "summoningrituals:indestructible_altar"
   ... (1273 entries)
 ]

```


</details>

<details>
<summary>block_entity_type</summary>

```diff
 [
   ... (1974 entries)
+  "summoningrituals:altar"
   ... (109 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (3148 entries)
+  "allthemons:imbued_pokemon_egg"
   ... (3 entries)
+  "allthemons:pika_star_chunk"
   ... (36418 entries)
+  "summoningrituals:altar"
+  "summoningrituals:indestructible_altar"
   ... (2099 entries)
 ]

```


</details>

<details>
<summary>recipe_type</summary>

```diff
 [
   ... (308 entries)
+  "summoningrituals:altar"
   ... (14 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details open>
<summary>Added (1)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/summoningrituals/blocks/altar</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "summoningrituals:altar"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "summoningrituals:blocks/altar"
+}

```


</details>

</blockquote>

</details>

