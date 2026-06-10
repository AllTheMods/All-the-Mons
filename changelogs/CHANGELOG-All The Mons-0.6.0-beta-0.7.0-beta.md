# Changelog

# 📦 0.7.0-beta

## 📰 General changes and notes

Summary of changes here!

<details open>
<summary>Github Commits :octocat:</summary>
<blockquote>

- Fixed shiny modifier not being applied to egg item when picked up (LobsterJonn)
- Alternative recipes for washing half apricorn (LobsterJonn)
- Replaced horse and donkey spawns (LobsterJonn)
- Loading screen now uses Pika Star (LobsterJonn)
- Many quest changes/ports from ATM10 [link here](https://github.com/AllTheMods/All-the-Mons/pull/92) (DivineFinal)
- Updated PT_BR localization (PrincessStellar)
- New/Update quests (ToshibaEC0Microwave)
- IF and Pylons Quest Adjustments (DivineFinal)
- Removed xycraft seeds (Uncandango)
- Pokecenter now spawns more frequently (Uncandango)
- Pokecenter now spawns on terralith biomes (LobsterJonn)
- Oritech overworld nodes are now rarer (Uncandango)
- Blacklisted campfire pot from building gadgets due to crash (Uncandango)
- Pokecenter now has natural machines (Uncandango)
- PC and Healing machine are now unbreakable if natural (Uncandango)
</blockquote>

</details>

---

## 🛠️ Mods

<details open>
<summary>Removed (5)</summary>

- Cobblemon Capture XP (1.7.1-neoforge-1.3.0)
- Embeddium (1.0.15+mc1.21.1)
- Monocle (0.2.2.ms)
- Nolijium (0.5.6)
- Tim Core (1.7.1-neoforge-1.29.1)

</details>

<details open>
<summary>Added (6)</summary>

- Colorwheel (1.2.1+mc1.21.1)
- Colorwheel Patcher (1.0.4+mc1.21.1)
- Sodium (0.6.13+mc1.21.1)
- SparseStructures (3.0)
- Terralith (2.5.8)
- Torchmaster Cobblemon Compat (1.6-neoforge-1.0.0)

</details>

<details>
<summary>Updated (19)</summary>

- All The Mons (0.0.22) -> (0.0.24)
- Ars Controle (1.21.1-1.6.14) -> (1.21.1-1.6.15)
- Cobblemon (1.7.1+1.21.1) -> (1.7.2+1.21.1)
- Cobblemon Raid Dens (0.6.4+1.21.1) -> (0.6.5+1.21.1)
- Crafting Tweaks (21.1.6) -> (21.1.7)
- Ender IO (8.0.7-alpha) -> (8.1.0)
- Eternal Starlight (0.6.3+1.21.1+neoforge) -> (0.6.4+1.21.1+neoforge)
- Glassential-renewed (3.4.0) -> (3.4.1)
- ImmediatelyFast (1.6.9+1.21.1) -> (1.6.10+1.21.1)
- Jade (15.10.4+neoforge) -> (15.10.5+neoforge)
- Little Big Redstone (1.4.15-beta-1.21.1) -> (1.4.16-beta-1.21.1)
- Cobblemon:Mega Showdown (1.6.1+1.7.1+1.21.1) -> (1.6.3+1.7.2+1.21.1)
- PneumaticCraft: Repressurized (8.2.15) -> (8.2.16)
- Pylons (5.4.0) -> (5.4.1)
- Radical Cobblemon Trainers (0.17.4-beta) -> (0.17.6-beta)
- Relics (0.10.7.6) -> (0.10.7.7)
- Sophisticated Core (1.3.107) -> (1.4.1)
- Sophisticated Storage (1.5.23) -> (1.5.24)
- Tesseract API (1.11.3-1.21.1) -> (1.11.4-1.21.1)

</details>


## 🍳 Recipes

<details>
<summary>Added (226)</summary>
<blockquote>

<details>
<summary>allthemons/enderio/tank_fill/black_ball_lid</summary>

```diff
+{
+  type: "enderio:tank"
+  fluid: {
+    amount: 100
+    fluid: "minecraft:water"
+  }
+  input: {
+    item: "createmonballsoverhaul:half_black_apricorn"
+  }
+  mode: "fill"
+  output: {
+    count: 1
+    id: "createmonballsoverhaul:black_ball_lid"
+  }
+}

```


</details>

<details>
<summary>allthemons/enderio/tank_fill/blue_ball_lid</summary>

```diff
+{
+  type: "enderio:tank"
+  fluid: {
+    amount: 100
+    fluid: "minecraft:water"
+  }
+  input: {
+    item: "createmonballsoverhaul:half_blue_apricorn"
+  }
+  mode: "fill"
+  output: {
+    count: 1
+    id: "createmonballsoverhaul:blue_ball_lid"
+  }
+}

```


</details>

<details>
<summary>allthemons/enderio/tank_fill/green_ball_lid</summary>

```diff
+{
+  type: "enderio:tank"
+  fluid: {
+    amount: 100
+    fluid: "minecraft:water"
+  }
+  input: {
+    item: "createmonballsoverhaul:half_green_apricorn"
+  }
+  mode: "fill"
+  output: {
+    count: 1
+    id: "createmonballsoverhaul:green_ball_lid"
+  }
+}

```


</details>

<details>
<summary>allthemons/enderio/tank_fill/pink_ball_lid</summary>

```diff
+{
+  type: "enderio:tank"
+  fluid: {
+    amount: 100
+    fluid: "minecraft:water"
+  }
+  input: {
+    item: "createmonballsoverhaul:half_pink_apricorn"
+  }
+  mode: "fill"
+  output: {
+    count: 1
+    id: "createmonballsoverhaul:pink_ball_lid"
+  }
+}

```


</details>

<details>
<summary>allthemons/enderio/tank_fill/red_ball_lid</summary>

```diff
+{
+  type: "enderio:tank"
+  fluid: {
+    amount: 100
+    fluid: "minecraft:water"
+  }
+  input: {
+    item: "createmonballsoverhaul:half_red_apricorn"
+  }
+  mode: "fill"
+  output: {
+    count: 1
+    id: "createmonballsoverhaul:red_ball_lid"
+  }
+}

```


</details>

<details>
<summary>allthemons/enderio/tank_fill/white_ball_lid</summary>

```diff
+{
+  type: "enderio:tank"
+  fluid: {
+    amount: 100
+    fluid: "minecraft:water"
+  }
+  input: {
+    item: "createmonballsoverhaul:half_white_apricorn"
+  }
+  mode: "fill"
+  output: {
+    count: 1
+    id: "createmonballsoverhaul:white_ball_lid"
+  }
+}

```


</details>

<details>
<summary>allthemons/enderio/tank_fill/yellow_ball_lid</summary>

```diff
+{
+  type: "enderio:tank"
+  fluid: {
+    amount: 100
+    fluid: "minecraft:water"
+  }
+  input: {
+    item: "createmonballsoverhaul:half_yellow_apricorn"
+  }
+  mode: "fill"
+  output: {
+    count: 1
+    id: "createmonballsoverhaul:yellow_ball_lid"
+  }
+}

```


</details>

<details>
<summary>allthemons/pnc/assembly/apricorn_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:assembly_laser"
+  input: {
+    count: 1
+    item: "cobblemon:stripped_apricorn_log"
+  }
+  program: "laser"
+  result: {
+    count: 4
+    id: "createmonballsoverhaul:apricorn_ball_lid"
+  }
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/ancient_feather_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:light_coated_blue_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/blue"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:white_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:ancient_feather_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/ancient_gigaton_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:dense_coated_black_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/white"
+    }
+    {
+      count: 2
+      item: "createmonballsoverhaul:black_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:ancient_gigaton_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/ancient_great_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:coated_blue_ball_lid"
+    }
+    {
+      count: 2
+      item: "createmonballsoverhaul:red_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:ancient_great_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/ancient_heavy_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:dense_coated_black_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/gray"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:black_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:ancient_heavy_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/ancient_jet_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:light_coated_blue_ball_lid"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:white_apricorn_bits"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:blue_apricorn_bits"
+    }
+    {
+      count: 1
+      tag: "c:dyes/blue"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:ancient_jet_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/ancient_leaden_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:dense_coated_black_ball_lid"
+    }
+    {
+      count: 2
+      item: "createmonballsoverhaul:black_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:ancient_leaden_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/ancient_ultra_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:coated_black_ball_lid"
+    }
+    {
+      count: 2
+      item: "createmonballsoverhaul:yellow_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:ancient_ultra_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/ancient_wing_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:light_coated_blue_ball_lid"
+    }
+    {
+      count: 2
+      item: "createmonballsoverhaul:blue_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:ancient_wing_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/beast_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:blue_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:nuggets/gold"
+    }
+    {
+      count: 1
+      tag: "c:nuggets/gold"
+    }
+    {
+      count: 1
+      item: "minecraft:echo_shard"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:beast_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/black_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:blank_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/black"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:black_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/blue_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:blank_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/blue"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:blue_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/cherish_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:red_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/black"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:red_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:cherish_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/coated_black_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:black_ball_lid"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:tumblestone_dust"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:coated_black_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/coated_blue_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:blue_ball_lid"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:tumblestone_dust"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:coated_blue_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/coated_green_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:green_ball_lid"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:tumblestone_dust"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:coated_green_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/coated_pink_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:pink_ball_lid"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:tumblestone_dust"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:coated_pink_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/coated_red_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:red_ball_lid"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:tumblestone_dust"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:coated_red_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/coated_white_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:white_ball_lid"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:tumblestone_dust"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:coated_white_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/coated_yellow_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:yellow_ball_lid"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:tumblestone_dust"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:coated_yellow_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/dense_coated_black_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:black_ball_lid"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:black_tumblestone_dust"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:dense_coated_black_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/dive_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:blue_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/white"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:white_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:dive_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/dream_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:pink_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:gems/rose_quartz"
+    }
+    {
+      count: 1
+      tag: "create:sandpaper"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:dream_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/dusk_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:green_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/black"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:red_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:dusk_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/fast_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:yellow_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/red"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:yellow_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:fast_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/friend_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:green_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/red"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:yellow_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:friend_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/great_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:blue_ball_lid"
+    }
+    {
+      count: 2
+      item: "createmonballsoverhaul:red_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:great_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/green_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:blank_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/green"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:green_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/heal_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:pink_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/white"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:blue_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:heal_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/heavy_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:black_ball_lid"
+    }
+    {
+      count: 2
+      item: "createmonballsoverhaul:blue_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:heavy_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/level_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:yellow_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/black"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:red_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:level_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/light_coated_blue_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:blue_ball_lid"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:sky_tumblestone_dust"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:light_coated_blue_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/love_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:pink_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/pink"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:white_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:love_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/lure_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:red_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/cyan"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:yellow_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:lure_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/luxury_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:black_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/yellow"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:red_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:luxury_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/moon_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:blue_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/black"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:yellow_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:moon_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/nest_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:green_ball_lid"
+    }
+    {
+      count: 2
+      item: "createmonballsoverhaul:yellow_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:nest_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/net_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:blue_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/cyan"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:black_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:net_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/park_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:green_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/cyan"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:red_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:park_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/pink_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:blank_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/pink"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:pink_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/quick_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:blue_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/yellow"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:yellow_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:quick_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/red_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:blank_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/red"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:red_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/repeat_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:red_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/yellow"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:black_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:repeat_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/safari_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:green_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/green"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:yellow_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:safari_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/sport_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:red_ball_lid"
+    }
+    {
+      count: 2
+      item: "createmonballsoverhaul:white_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:sport_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/timer_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:black_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/white"
+    }
+    {
+      count: 1
+      item: "createmonballsoverhaul:red_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:timer_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/ultra_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:black_ball_lid"
+    }
+    {
+      count: 2
+      item: "createmonballsoverhaul:yellow_apricorn_bits"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:ultra_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/white_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:blank_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/white"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:white_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>allthemons/pnc/chamber/yellow_ball_lid</summary>

```diff
+{
+  type: "pneumaticcraft:pressure_chamber"
+  inputs: [
+    {
+      count: 1
+      item: "createmonballsoverhaul:blank_ball_lid"
+    }
+    {
+      count: 1
+      tag: "c:dyes/yellow"
+    }
+  ]
+  pressure: 3.5
+  results: [
+    {
+      count: 1
+      id: "createmonballsoverhaul:yellow_ball_lid"
+    }
+  ]
+}

```


</details>

<details>
<summary>almostunified/terralith</summary>

```diff
+{
+  type: "almostunified:client_recipe_tracker"
+  namespace: "terralith"
+  recipes: [
+    "1$dispenser_alt"
+    "1$dropper_alt"
+    "1$observer_alt"
+    "1$piston_alt"
+  ]
+}

```


</details>

<details>
<summary>cobblemon/black_plaque</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "CC"
+    "ID"
+    "II"
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    C: {
+      tag: "c:chains"
+    }
+    D: {
+      tag: "c:dyes/black"
+    }
+  }
+  result: {
+    id: "cobblemon:black_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/black_plaque_redye</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  group: "plaque_redye"
+  ingredients: [
+    {
+      tag: "cobblemon:plaques"
+    }
+    {
+      tag: "c:dyes/black"
+    }
+  ]
+  result: {
+    id: "cobblemon:black_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/blue_plaque</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "CC"
+    "ID"
+    "II"
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    C: {
+      tag: "c:chains"
+    }
+    D: {
+      tag: "c:dyes/blue"
+    }
+  }
+  result: {
+    id: "cobblemon:blue_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/blue_plaque_redye</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  group: "plaque_redye"
+  ingredients: [
+    {
+      tag: "cobblemon:plaques"
+    }
+    {
+      tag: "c:dyes/blue"
+    }
+  ]
+  result: {
+    id: "cobblemon:blue_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/brown_plaque</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "CC"
+    "ID"
+    "II"
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    C: {
+      tag: "c:chains"
+    }
+    D: {
+      tag: "c:dyes/brown"
+    }
+  }
+  result: {
+    id: "cobblemon:brown_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/brown_plaque_redye</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  group: "plaque_redye"
+  ingredients: [
+    {
+      tag: "cobblemon:plaques"
+    }
+    {
+      tag: "c:dyes/brown"
+    }
+  ]
+  result: {
+    id: "cobblemon:brown_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/cyan_plaque</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "CC"
+    "ID"
+    "II"
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    C: {
+      tag: "c:chains"
+    }
+    D: {
+      tag: "c:dyes/cyan"
+    }
+  }
+  result: {
+    id: "cobblemon:cyan_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/cyan_plaque_redye</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  group: "plaque_redye"
+  ingredients: [
+    {
+      tag: "cobblemon:plaques"
+    }
+    {
+      tag: "c:dyes/cyan"
+    }
+  ]
+  result: {
+    id: "cobblemon:cyan_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/gray_plaque</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "CC"
+    "ID"
+    "II"
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    C: {
+      tag: "c:chains"
+    }
+    D: {
+      tag: "c:dyes/gray"
+    }
+  }
+  result: {
+    id: "cobblemon:gray_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/gray_plaque_redye</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  group: "plaque_redye"
+  ingredients: [
+    {
+      tag: "cobblemon:plaques"
+    }
+    {
+      tag: "c:dyes/gray"
+    }
+  ]
+  result: {
+    id: "cobblemon:gray_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/green_plaque</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "CC"
+    "ID"
+    "II"
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    C: {
+      tag: "c:chains"
+    }
+    D: {
+      tag: "c:dyes/green"
+    }
+  }
+  result: {
+    id: "cobblemon:green_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/green_plaque_redye</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  group: "plaque_redye"
+  ingredients: [
+    {
+      tag: "cobblemon:plaques"
+    }
+    {
+      tag: "c:dyes/green"
+    }
+  ]
+  result: {
+    id: "cobblemon:green_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/iron_nugget_from_blasting_plaque</summary>

```diff
+{
+  type: "minecraft:blasting"
+  category: "misc"
+  cookingtime: 100
+  experience: 0.1
+  ingredient: [
+    {
+      tag: "cobblemon:plaques"
+    }
+  ]
+  result: {
+    id: "minecraft:iron_nugget"
+  }
+}

```


</details>

<details>
<summary>cobblemon/iron_nugget_from_smelting_plaque</summary>

```diff
+{
+  type: "minecraft:smelting"
+  category: "misc"
+  cookingtime: 200
+  experience: 0.1
+  ingredient: [
+    {
+      tag: "cobblemon:plaques"
+    }
+  ]
+  result: {
+    id: "minecraft:iron_nugget"
+  }
+}

```


</details>

<details>
<summary>cobblemon/light_blue_plaque</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "CC"
+    "ID"
+    "II"
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    C: {
+      tag: "c:chains"
+    }
+    D: {
+      tag: "c:dyes/light_blue"
+    }
+  }
+  result: {
+    id: "cobblemon:light_blue_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/light_blue_plaque_redye</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  group: "plaque_redye"
+  ingredients: [
+    {
+      tag: "cobblemon:plaques"
+    }
+    {
+      tag: "c:dyes/light_blue"
+    }
+  ]
+  result: {
+    id: "cobblemon:light_blue_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/light_gray_plaque</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "CC"
+    "ID"
+    "II"
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    C: {
+      tag: "c:chains"
+    }
+    D: {
+      tag: "c:dyes/light_gray"
+    }
+  }
+  result: {
+    id: "cobblemon:light_gray_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/light_gray_plaque_redye</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  group: "plaque_redye"
+  ingredients: [
+    {
+      tag: "cobblemon:plaques"
+    }
+    {
+      tag: "c:dyes/light_gray"
+    }
+  ]
+  result: {
+    id: "cobblemon:light_gray_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/lime_plaque</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "CC"
+    "ID"
+    "II"
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    C: {
+      tag: "c:chains"
+    }
+    D: {
+      tag: "c:dyes/lime"
+    }
+  }
+  result: {
+    id: "cobblemon:lime_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/lime_plaque_redye</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  group: "plaque_redye"
+  ingredients: [
+    {
+      tag: "cobblemon:plaques"
+    }
+    {
+      tag: "c:dyes/lime"
+    }
+  ]
+  result: {
+    id: "cobblemon:lime_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/magenta_plaque</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "CC"
+    "ID"
+    "II"
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    C: {
+      tag: "c:chains"
+    }
+    D: {
+      tag: "c:dyes/magenta"
+    }
+  }
+  result: {
+    id: "cobblemon:magenta_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/magenta_plaque_redye</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  group: "plaque_redye"
+  ingredients: [
+    {
+      tag: "cobblemon:plaques"
+    }
+    {
+      tag: "c:dyes/magenta"
+    }
+  ]
+  result: {
+    id: "cobblemon:magenta_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/orange_plaque</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "CC"
+    "ID"
+    "II"
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    C: {
+      tag: "c:chains"
+    }
+    D: {
+      tag: "c:dyes/orange"
+    }
+  }
+  result: {
+    id: "cobblemon:orange_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/orange_plaque_redye</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  group: "plaque_redye"
+  ingredients: [
+    {
+      tag: "cobblemon:plaques"
+    }
+    {
+      tag: "c:dyes/orange"
+    }
+  ]
+  result: {
+    id: "cobblemon:orange_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/pink_plaque</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "CC"
+    "ID"
+    "II"
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    C: {
+      tag: "c:chains"
+    }
+    D: {
+      tag: "c:dyes/pink"
+    }
+  }
+  result: {
+    id: "cobblemon:pink_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/pink_plaque_redye</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  group: "plaque_redye"
+  ingredients: [
+    {
+      tag: "cobblemon:plaques"
+    }
+    {
+      tag: "c:dyes/pink"
+    }
+  ]
+  result: {
+    id: "cobblemon:pink_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/purple_plaque</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "CC"
+    "ID"
+    "II"
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    C: {
+      tag: "c:chains"
+    }
+    D: {
+      tag: "c:dyes/purple"
+    }
+  }
+  result: {
+    id: "cobblemon:purple_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/purple_plaque_redye</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  group: "plaque_redye"
+  ingredients: [
+    {
+      tag: "cobblemon:plaques"
+    }
+    {
+      tag: "c:dyes/purple"
+    }
+  ]
+  result: {
+    id: "cobblemon:purple_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/red_plaque</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "CC"
+    "ID"
+    "II"
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    C: {
+      tag: "c:chains"
+    }
+    D: {
+      tag: "c:dyes/red"
+    }
+  }
+  result: {
+    id: "cobblemon:red_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/red_plaque_redye</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  group: "plaque_redye"
+  ingredients: [
+    {
+      tag: "cobblemon:plaques"
+    }
+    {
+      tag: "c:dyes/red"
+    }
+  ]
+  result: {
+    id: "cobblemon:red_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/white_plaque</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "CC"
+    "ID"
+    "II"
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    C: {
+      tag: "c:chains"
+    }
+    D: {
+      tag: "c:dyes/white"
+    }
+  }
+  result: {
+    id: "cobblemon:white_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/white_plaque_redye</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  group: "plaque_redye"
+  ingredients: [
+    {
+      tag: "cobblemon:plaques"
+    }
+    {
+      tag: "c:dyes/white"
+    }
+  ]
+  result: {
+    id: "cobblemon:white_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/yellow_plaque</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "CC"
+    "ID"
+    "II"
+  ]
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    C: {
+      tag: "c:chains"
+    }
+    D: {
+      tag: "c:dyes/yellow"
+    }
+  }
+  result: {
+    id: "cobblemon:yellow_plaque"
+  }
+}

```


</details>

<details>
<summary>cobblemon/yellow_plaque_redye</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  group: "plaque_redye"
+  ingredients: [
+    {
+      tag: "cobblemon:plaques"
+    }
+    {
+      tag: "c:dyes/yellow"
+    }
+  ]
+  result: {
+    id: "cobblemon:yellow_plaque"
+  }
+}

```


</details>

<details>
<summary>enderio/alloy_smelting/black_dye</summary>

```diff
+{
+  type: "enderio:alloy_smelting"
+  energy: 1000
+  experience: 0.3
+  inputs: [
+    {
+      count: 1
+      tag: "c:dusts/coal"
+    }
+    {
+      count: 1
+      item: "minecraft:egg"
+    }
+  ]
+  output: {
+    count: 1
+    id: "minecraft:black_dye"
+  }
+}

```


</details>

<details>
<summary>enderio/alloy_smelting/black_dye_double</summary>

```diff
+{
+  type: "enderio:alloy_smelting"
+  energy: 1600
+  experience: 0.3
+  inputs: [
+    {
+      count: 2
+      tag: "c:dusts/coal"
+    }
+    {
+      count: 1
+      tag: "c:slimeballs"
+    }
+  ]
+  output: {
+    count: 2
+    id: "minecraft:black_dye"
+  }
+}

```


</details>

<details>
<summary>enderio/alloy_smelting/brown_dye_twigs</summary>

```diff
+{
+  type: "enderio:alloy_smelting"
+  energy: 1000
+  experience: 0.3
+  inputs: [
+    {
+      count: 6
+      item: "enderio:plant_matter_brown"
+    }
+    {
+      count: 1
+      item: "minecraft:egg"
+    }
+  ]
+  output: {
+    count: 1
+    id: "minecraft:brown_dye"
+  }
+}

```


</details>

<details>
<summary>enderio/alloy_smelting/brown_dye_twigs_double</summary>

```diff
+{
+  type: "enderio:alloy_smelting"
+  energy: 1600
+  experience: 0.3
+  inputs: [
+    {
+      count: 12
+      item: "enderio:plant_matter_brown"
+    }
+    {
+      count: 1
+      tag: "c:slimeballs"
+    }
+  ]
+  output: {
+    count: 2
+    id: "minecraft:brown_dye"
+  }
+}

```


</details>

<details>
<summary>enderio/alloy_smelting/green_dye_clippings</summary>

```diff
+{
+  type: "enderio:alloy_smelting"
+  energy: 1000
+  experience: 0.3
+  inputs: [
+    {
+      count: 6
+      item: "enderio:plant_matter_green"
+    }
+    {
+      count: 1
+      item: "minecraft:egg"
+    }
+  ]
+  output: {
+    count: 1
+    id: "minecraft:green_dye"
+  }
+}

```


</details>

<details>
<summary>enderio/alloy_smelting/green_dye_double_clippings</summary>

```diff
+{
+  type: "enderio:alloy_smelting"
+  energy: 1600
+  experience: 0.3
+  inputs: [
+    {
+      count: 12
+      item: "enderio:plant_matter_green"
+    }
+    {
+      count: 1
+      tag: "c:slimeballs"
+    }
+  ]
+  output: {
+    count: 2
+    id: "minecraft:green_dye"
+  }
+}

```


</details>

<details>
<summary>enderio/alloy_smelting/industrial_insulation</summary>

```diff
+{
+  type: "enderio:alloy_smelting"
+  energy: 3200
+  experience: 0.5
+  inputs: [
+    {
+      count: 1
+      tag: "c:dusts/lapis"
+    }
+    {
+      count: 1
+      tag: "minecraft:wool"
+    }
+    {
+      count: 1
+      tag: "enderio:insulation_metals"
+    }
+  ]
+  output: {
+    count: 1
+    id: "enderio:industrial_insulation"
+  }
+}

```


</details>

<details>
<summary>enderio/energetic_item_conduit</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    A: {
+      tag: "c:ingots/pulsating_alloy"
+    }
+    B: {
+      item: "enderio:conduit_binder"
+    }
+    I: {
+      tag: "c:ingots/energetic_alloy"
+    }
+  }
+  pattern: [
+    "BBB"
+    "IAI"
+    "BBB"
+  ]
+  result: {
+    components: {
+      enderio:conduit: "enderio:enhanced_item"
+    }
+    count: 8
+    id: "enderio:conduit"
+  }
+}

```


</details>

<details>
<summary>enderio/energetic_item_conduit_upgrade</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    B: {
+      item: "enderio:conduit_binder"
+    }
+    C: {
+      type: "enderio:conduit"
+      conduit_type: "enderio:item"
+    }
+    I: {
+      tag: "c:ingots/energetic_alloy"
+    }
+  }
+  pattern: [
+    "BBB"
+    "ICI"
+    "BBB"
+  ]
+  result: {
+    components: {
+      enderio:conduit: "enderio:enhanced_item"
+    }
+    count: 8
+    id: "enderio:conduit"
+  }
+}

```


</details>

<details>
<summary>enderio/erase_farming_station</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "enderio:farming_station"
+    }
+  ]
+  result: {
+    count: 1
+    id: "enderio:farming_station"
+  }
+}

```


</details>

<details>
<summary>enderio/erase_niard</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "enderio:niard"
+    }
+  ]
+  result: {
+    count: 1
+    id: "enderio:niard"
+  }
+}

```


</details>

<details>
<summary>enderio/farming_station</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    C: {
+      item: "enderio:ensouled_chassis"
+    }
+    D: {
+      tag: "c:ingots/dark_steel"
+    }
+    E: {
+      tag: "c:gears/energized"
+    }
+    G: {
+      tag: "c:gems/pulsating_crystal"
+    }
+    S: {
+      tag: "c:ingots/soularium"
+    }
+    Z: {
+      item: "enderio:z_logic_controller"
+    }
+  }
+  pattern: [
+    "EGE"
+    "SCS"
+    "DZD"
+  ]
+  result: {
+    count: 1
+    id: "enderio:farming_station"
+  }
+}

```


</details>

<details>
<summary>enderio/niard</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    B: {
+      item: "minecraft:bucket"
+    }
+    I: {
+      tag: "c:ingots/dark_steel"
+    }
+    P: {
+      item: "minecraft:piston"
+    }
+    R: {
+      item: "enderio:dark_steel_bars"
+    }
+    T: {
+      item: "enderio:fluid_tank"
+    }
+    V: {
+      item: "enderio:void_chassis"
+    }
+  }
+  pattern: [
+    "BTB"
+    "PVP"
+    "IRI"
+  ]
+  result: {
+    count: 1
+    id: "enderio:niard"
+  }
+}

```


</details>

<details>
<summary>enderio/vibrant_item_conduit</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    A: {
+      tag: "c:ingots/pulsating_alloy"
+    }
+    B: {
+      item: "enderio:conduit_binder"
+    }
+    I: {
+      tag: "c:ingots/vibrant_alloy"
+    }
+  }
+  pattern: [
+    "BBB"
+    "IAI"
+    "BBB"
+  ]
+  result: {
+    components: {
+      enderio:conduit: "enderio:ender_item"
+    }
+    count: 8
+    id: "enderio:conduit"
+  }
+}

```


</details>

<details>
<summary>enderio/vibrant_item_conduit_upgrade</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    B: {
+      item: "enderio:conduit_binder"
+    }
+    C: {
+      type: "enderio:conduit"
+      conduit_type: "enderio:enhanced_item"
+    }
+    I: {
+      tag: "c:ingots/vibrant_alloy"
+    }
+  }
+  pattern: [
+    "BBB"
+    "ICI"
+    "BBB"
+  ]
+  result: {
+    components: {
+      enderio:conduit: "enderio:ender_item"
+    }
+    count: 8
+    id: "enderio:conduit"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/chiseled_toxite</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:toxite_slab"
+    }
+  }
+  pattern: [
+    "#"
+    "#"
+  ]
+  result: {
+    count: 1
+    id: "eternal_starlight:chiseled_toxite"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/chiseled_toxite_from_toxite_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:toxite"
+  }
+  result: {
+    count: 1
+    id: "eternal_starlight:chiseled_toxite"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/copper_from_ores</summary>

```diff
+{
+  type: "eternal_starlight:alloy"
+  burn_time: 400
+  ingredients: [
+    {
+      tag: "c:ores/copper"
+    }
+    {
+      tag: "c:ores/copper"
+    }
+    {
+      item: "eternal_starlight:starcore"
+    }
+    {
+      tag: "c:dusts/saltpeter"
+    }
+  ]
+  results: [
+    {
+      amount: 3
+      item: {
+        count: 1
+        id: "minecraft:copper_ingot"
+      }
+    }
+    {
+      amount: {
+        type: "minecraft:uniform"
+        max_inclusive: 3
+        min_inclusive: 0
+      }
+      item: {
+        count: 1
+        id: "eternal_starlight:dimslag"
+      }
+    }
+    {
+      amount: {
+        type: "minecraft:uniform"
+        max_inclusive: 3
+        min_inclusive: 0
+      }
+      item: {
+        count: 1
+        id: "eternal_starlight:dimslag"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>eternal_starlight/copper_from_raw_materials</summary>

```diff
+{
+  type: "eternal_starlight:alloy"
+  burn_time: 400
+  ingredients: [
+    {
+      tag: "c:raw_materials/copper"
+    }
+    {
+      tag: "c:raw_materials/copper"
+    }
+    {
+      tag: "c:raw_materials/copper"
+    }
+    {
+      item: "eternal_starlight:starcore"
+    }
+    {
+      tag: "c:dusts/saltpeter"
+    }
+  ]
+  results: [
+    {
+      amount: 4
+      item: {
+        count: 1
+        id: "minecraft:copper_ingot"
+      }
+    }
+    {
+      amount: {
+        type: "minecraft:uniform"
+        max_inclusive: 3
+        min_inclusive: 0
+      }
+      item: {
+        count: 1
+        id: "eternal_starlight:dimslag"
+      }
+    }
+    {
+      amount: {
+        type: "minecraft:uniform"
+        max_inclusive: 3
+        min_inclusive: 0
+      }
+      item: {
+        count: 1
+        id: "eternal_starlight:dimslag"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>eternal_starlight/deepsilver_from_ores</summary>

```diff
+{
+  type: "eternal_starlight:alloy"
+  burn_time: 400
+  ingredients: [
+    {
+      tag: "c:ores/deepsilver"
+    }
+    {
+      tag: "c:dusts/saltpeter"
+    }
+  ]
+  results: [
+    {
+      amount: 2
+      item: {
+        count: 1
+        id: "eternal_starlight:deepsilver_ingot"
+      }
+    }
+    {
+      amount: {
+        type: "minecraft:uniform"
+        max_inclusive: 2
+        min_inclusive: 0
+      }
+      item: {
+        count: 1
+        id: "eternal_starlight:dimslag"
+      }
+    }
+    {
+      amount: {
+        type: "minecraft:uniform"
+        max_inclusive: 2
+        min_inclusive: 0
+      }
+      item: {
+        count: 1
+        id: "eternal_starlight:dimslag"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>eternal_starlight/deepsilver_from_raw_materials</summary>

```diff
+{
+  type: "eternal_starlight:alloy"
+  burn_time: 400
+  ingredients: [
+    {
+      tag: "c:raw_materials/deepsilver"
+    }
+    {
+      tag: "c:raw_materials/deepsilver"
+    }
+    {
+      tag: "c:dusts/saltpeter"
+    }
+  ]
+  results: [
+    {
+      amount: 3
+      item: {
+        count: 1
+        id: "eternal_starlight:deepsilver_ingot"
+      }
+    }
+    {
+      amount: {
+        type: "minecraft:uniform"
+        max_inclusive: 2
+        min_inclusive: 0
+      }
+      item: {
+        count: 1
+        id: "eternal_starlight:dimslag"
+      }
+    }
+    {
+      amount: {
+        type: "minecraft:uniform"
+        max_inclusive: 2
+        min_inclusive: 0
+      }
+      item: {
+        count: 1
+        id: "eternal_starlight:dimslag"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>eternal_starlight/gold_from_ores</summary>

```diff
+{
+  type: "eternal_starlight:alloy"
+  burn_time: 400
+  ingredients: [
+    {
+      tag: "c:ores/gold"
+    }
+    {
+      tag: "c:ores/gold"
+    }
+    {
+      item: "eternal_starlight:starcore"
+    }
+    {
+      tag: "c:dusts/saltpeter"
+    }
+  ]
+  results: [
+    {
+      amount: 3
+      item: {
+        count: 1
+        id: "minecraft:gold_ingot"
+      }
+    }
+    {
+      amount: {
+        type: "minecraft:uniform"
+        max_inclusive: 3
+        min_inclusive: 0
+      }
+      item: {
+        count: 1
+        id: "eternal_starlight:dimslag"
+      }
+    }
+    {
+      amount: {
+        type: "minecraft:uniform"
+        max_inclusive: 3
+        min_inclusive: 0
+      }
+      item: {
+        count: 1
+        id: "eternal_starlight:dimslag"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>eternal_starlight/gold_from_raw_materials</summary>

```diff
+{
+  type: "eternal_starlight:alloy"
+  burn_time: 400
+  ingredients: [
+    {
+      tag: "c:raw_materials/gold"
+    }
+    {
+      tag: "c:raw_materials/gold"
+    }
+    {
+      tag: "c:raw_materials/gold"
+    }
+    {
+      item: "eternal_starlight:starcore"
+    }
+    {
+      tag: "c:dusts/saltpeter"
+    }
+  ]
+  results: [
+    {
+      amount: 4
+      item: {
+        count: 1
+        id: "minecraft:gold_ingot"
+      }
+    }
+    {
+      amount: {
+        type: "minecraft:uniform"
+        max_inclusive: 3
+        min_inclusive: 0
+      }
+      item: {
+        count: 1
+        id: "eternal_starlight:dimslag"
+      }
+    }
+    {
+      amount: {
+        type: "minecraft:uniform"
+        max_inclusive: 3
+        min_inclusive: 0
+      }
+      item: {
+        count: 1
+        id: "eternal_starlight:dimslag"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>eternal_starlight/golem_steel</summary>

```diff
+{
+  type: "eternal_starlight:alloy"
+  burn_time: 400
+  ingredients: [
+    {
+      tag: "c:ingots/deepsilver"
+    }
+    {
+      tag: "c:ingots/deepsilver"
+    }
+    {
+      tag: "c:ingots/deepsilver"
+    }
+    {
+      tag: "c:nuggets/golem_steel"
+    }
+    {
+      tag: "c:nuggets/golem_steel"
+    }
+    {
+      item: "eternal_starlight:starcore"
+    }
+    {
+      tag: "c:dusts/saltpeter"
+    }
+  ]
+  results: [
+    {
+      amount: 1
+      item: {
+        count: 1
+        id: "eternal_starlight:golem_steel_ingot"
+      }
+    }
+    {
+      amount: {
+        type: "minecraft:uniform"
+        max_inclusive: 3
+        min_inclusive: 0
+      }
+      item: {
+        count: 1
+        id: "eternal_starlight:dimslag"
+      }
+    }
+    {
+      amount: {
+        type: "minecraft:uniform"
+        max_inclusive: 3
+        min_inclusive: 0
+      }
+      item: {
+        count: 1
+        id: "eternal_starlight:dimslag"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>eternal_starlight/iron_from_ores</summary>

```diff
+{
+  type: "eternal_starlight:alloy"
+  burn_time: 400
+  ingredients: [
+    {
+      tag: "c:ores/iron"
+    }
+    {
+      tag: "c:dusts/saltpeter"
+    }
+  ]
+  results: [
+    {
+      amount: 2
+      item: {
+        count: 1
+        id: "minecraft:iron_ingot"
+      }
+    }
+    {
+      amount: {
+        type: "minecraft:uniform"
+        max_inclusive: 2
+        min_inclusive: 0
+      }
+      item: {
+        count: 1
+        id: "eternal_starlight:dimslag"
+      }
+    }
+    {
+      amount: {
+        type: "minecraft:uniform"
+        max_inclusive: 2
+        min_inclusive: 0
+      }
+      item: {
+        count: 1
+        id: "eternal_starlight:dimslag"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>eternal_starlight/iron_from_raw_materials</summary>

```diff
+{
+  type: "eternal_starlight:alloy"
+  burn_time: 400
+  ingredients: [
+    {
+      tag: "c:raw_materials/iron"
+    }
+    {
+      tag: "c:raw_materials/iron"
+    }
+    {
+      tag: "c:dusts/saltpeter"
+    }
+  ]
+  results: [
+    {
+      amount: 3
+      item: {
+        count: 1
+        id: "minecraft:iron_ingot"
+      }
+    }
+    {
+      amount: {
+        type: "minecraft:uniform"
+        max_inclusive: 2
+        min_inclusive: 0
+      }
+      item: {
+        count: 1
+        id: "eternal_starlight:dimslag"
+      }
+    }
+    {
+      amount: {
+        type: "minecraft:uniform"
+        max_inclusive: 2
+        min_inclusive: 0
+      }
+      item: {
+        count: 1
+        id: "eternal_starlight:dimslag"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>eternal_starlight/netherite</summary>

```diff
+{
+  type: "eternal_starlight:alloy"
+  burn_time: 400
+  ingredients: [
+    {
+      tag: "c:ingots/gold"
+    }
+    {
+      tag: "c:ingots/gold"
+    }
+    {
+      tag: "c:ingots/gold"
+    }
+    {
+      tag: "c:ingots/gold"
+    }
+    {
+      item: "minecraft:netherite_scrap"
+    }
+    {
+      item: "minecraft:netherite_scrap"
+    }
+    {
+      item: "eternal_starlight:starcore"
+    }
+    {
+      tag: "c:dusts/saltpeter"
+    }
+  ]
+  results: [
+    {
+      amount: 1
+      item: {
+        count: 1
+        id: "minecraft:netherite_ingot"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>eternal_starlight/shapeless/waxed_alloy_furnace</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "eternal_starlight:alloy_furnace"
+    }
+    {
+      item: "minecraft:honeycomb"
+    }
+  ]
+  result: {
+    count: 1
+    id: "eternal_starlight:waxed_alloy_furnace"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/shapeless/waxed_alloy_furnace_from_raw_amaramber</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "eternal_starlight:alloy_furnace"
+    }
+    {
+      item: "eternal_starlight:raw_amaramber"
+    }
+  ]
+  result: {
+    count: 1
+    id: "eternal_starlight:waxed_alloy_furnace"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/toxite_brick_slab</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:toxite_bricks"
+    }
+  }
+  pattern: [
+    "###"
+  ]
+  result: {
+    count: 6
+    id: "eternal_starlight:toxite_brick_slab"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/toxite_brick_slab_from_polished_toxite_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:polished_toxite"
+  }
+  result: {
+    count: 2
+    id: "eternal_starlight:toxite_brick_slab"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/toxite_brick_slab_from_toxite_bricks_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:toxite_bricks"
+  }
+  result: {
+    count: 2
+    id: "eternal_starlight:toxite_brick_slab"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/toxite_brick_slab_from_toxite_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:toxite"
+  }
+  result: {
+    count: 2
+    id: "eternal_starlight:toxite_brick_slab"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/toxite_brick_stairs</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:toxite_bricks"
+    }
+  }
+  pattern: [
+    "#  "
+    "## "
+    "###"
+  ]
+  result: {
+    count: 4
+    id: "eternal_starlight:toxite_brick_stairs"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/toxite_brick_stairs_from_polished_toxite_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:polished_toxite"
+  }
+  result: {
+    count: 1
+    id: "eternal_starlight:toxite_brick_stairs"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/toxite_brick_stairs_from_toxite_bricks_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:toxite_bricks"
+  }
+  result: {
+    count: 1
+    id: "eternal_starlight:toxite_brick_stairs"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/toxite_brick_stairs_from_toxite_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:toxite"
+  }
+  result: {
+    count: 1
+    id: "eternal_starlight:toxite_brick_stairs"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/toxite_brick_wall</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:toxite_bricks"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+  ]
+  result: {
+    count: 6
+    id: "eternal_starlight:toxite_brick_wall"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/toxite_brick_wall_from_polished_toxite_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:polished_toxite"
+  }
+  result: {
+    count: 1
+    id: "eternal_starlight:toxite_brick_wall"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/toxite_brick_wall_from_toxite_bricks_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:toxite_bricks"
+  }
+  result: {
+    count: 1
+    id: "eternal_starlight:toxite_brick_wall"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/toxite_brick_wall_from_toxite_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:toxite"
+  }
+  result: {
+    count: 1
+    id: "eternal_starlight:toxite_brick_wall"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/toxite_bricks</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:polished_toxite"
+    }
+  }
+  pattern: [
+    "##"
+    "##"
+  ]
+  result: {
+    count: 4
+    id: "eternal_starlight:toxite_bricks"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/toxite_bricks_from_polished_toxite_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:polished_toxite"
+  }
+  result: {
+    count: 1
+    id: "eternal_starlight:toxite_bricks"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/toxite_bricks_from_toxite_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:toxite"
+  }
+  result: {
+    count: 1
+    id: "eternal_starlight:toxite_bricks"
+  }
+}

```


</details>

<details>
<summary>little_big_redstone/redstone_circuit_board</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    D: {
+      item: "minecraft:polished_deepslate"
+    }
+    Q: {
+      tag: "c:gems/quartz"
+    }
+    R: {
+      tag: "c:dusts/redstone"
+    }
+    d: {
+      tag: "c:gems/diamond"
+    }
+  }
+  pattern: [
+    "DdD"
+    "RQR"
+    "DdD"
+  ]
+  result: {
+    count: 1
+    id: "little_big_redstone:redstone_circuit_board"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/apricorn/black_apricorn</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:black_apricorn"
+  output: {
+    count: 1
+    id: "cobblemon:black_apricorn"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/apricorn/blue_apricorn</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:blue_apricorn"
+  output: {
+    count: 1
+    id: "cobblemon:blue_apricorn"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/apricorn/green_apricorn</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:green_apricorn"
+  output: {
+    count: 1
+    id: "cobblemon:green_apricorn"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/apricorn/pink_apricorn</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:pink_apricorn"
+  output: {
+    count: 1
+    id: "cobblemon:pink_apricorn"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/apricorn/red_apricorn</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:red_apricorn"
+  output: {
+    count: 1
+    id: "cobblemon:red_apricorn"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/apricorn/white_apricorn</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:white_apricorn"
+  output: {
+    count: 1
+    id: "cobblemon:white_apricorn"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/apricorn/yellow_apricorn</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:yellow_apricorn"
+  output: {
+    count: 1
+    id: "cobblemon:yellow_apricorn"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/aguav_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:aguav_berry"
+  output: {
+    count: 2
+    id: "cobblemon:aguav_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/apicot_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:apicot_berry"
+  output: {
+    count: 2
+    id: "cobblemon:apicot_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/aspear_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:aspear_berry"
+  output: {
+    count: 2
+    id: "cobblemon:aspear_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/babiri_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:babiri_berry"
+  output: {
+    count: 2
+    id: "cobblemon:babiri_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/belue_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:belue_berry"
+  output: {
+    count: 2
+    id: "cobblemon:belue_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/bluk_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:bluk_berry"
+  output: {
+    count: 2
+    id: "cobblemon:bluk_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/charti_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:charti_berry"
+  output: {
+    count: 2
+    id: "cobblemon:charti_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/cheri_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:cheri_berry"
+  output: {
+    count: 2
+    id: "cobblemon:cheri_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/chesto_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:chesto_berry"
+  output: {
+    count: 2
+    id: "cobblemon:chesto_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/chilan_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:chilan_berry"
+  output: {
+    count: 2
+    id: "cobblemon:chilan_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/chople_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:chople_berry"
+  output: {
+    count: 2
+    id: "cobblemon:chople_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/coba_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:coba_berry"
+  output: {
+    count: 2
+    id: "cobblemon:coba_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/colbur_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:colbur_berry"
+  output: {
+    count: 2
+    id: "cobblemon:colbur_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/cornn_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:cornn_berry"
+  output: {
+    count: 2
+    id: "cobblemon:cornn_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/custap_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:custap_berry"
+  output: {
+    count: 2
+    id: "cobblemon:custap_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/durin_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:durin_berry"
+  output: {
+    count: 2
+    id: "cobblemon:durin_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/eggant_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:eggant_berry"
+  output: {
+    count: 2
+    id: "cobblemon:eggant_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/enigma_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:enigma_berry"
+  output: {
+    count: 2
+    id: "cobblemon:enigma_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/figy_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:figy_berry"
+  output: {
+    count: 2
+    id: "cobblemon:figy_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/ganlon_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:ganlon_berry"
+  output: {
+    count: 2
+    id: "cobblemon:ganlon_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/grepa_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:grepa_berry"
+  output: {
+    count: 2
+    id: "cobblemon:grepa_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/haban_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:haban_berry"
+  output: {
+    count: 2
+    id: "cobblemon:haban_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/hondew_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:hondew_berry"
+  output: {
+    count: 2
+    id: "cobblemon:hondew_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/hopo_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:hopo_berry"
+  output: {
+    count: 2
+    id: "cobblemon:hopo_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/iapapa_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:iapapa_berry"
+  output: {
+    count: 2
+    id: "cobblemon:iapapa_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/jaboca_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:jaboca_berry"
+  output: {
+    count: 2
+    id: "cobblemon:jaboca_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/kasib_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:kasib_berry"
+  output: {
+    count: 2
+    id: "cobblemon:kasib_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/kebia_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:kebia_berry"
+  output: {
+    count: 2
+    id: "cobblemon:kebia_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/kee_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:kee_berry"
+  output: {
+    count: 2
+    id: "cobblemon:kee_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/kelpsy_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:kelpsy_berry"
+  output: {
+    count: 2
+    id: "cobblemon:kelpsy_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/lansat_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:lansat_berry"
+  output: {
+    count: 2
+    id: "cobblemon:lansat_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/leppa_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:leppa_berry"
+  output: {
+    count: 2
+    id: "cobblemon:leppa_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/liechi_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:liechi_berry"
+  output: {
+    count: 2
+    id: "cobblemon:liechi_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/lum_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:lum_berry"
+  output: {
+    count: 2
+    id: "cobblemon:lum_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/mago_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:mago_berry"
+  output: {
+    count: 2
+    id: "cobblemon:mago_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/magost_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:magost_berry"
+  output: {
+    count: 2
+    id: "cobblemon:magost_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/maranga_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:maranga_berry"
+  output: {
+    count: 2
+    id: "cobblemon:maranga_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/micle_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:micle_berry"
+  output: {
+    count: 2
+    id: "cobblemon:micle_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/nanab_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:nanab_berry"
+  output: {
+    count: 2
+    id: "cobblemon:nanab_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/nomel_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:nomel_berry"
+  output: {
+    count: 2
+    id: "cobblemon:nomel_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/occa_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:occa_berry"
+  output: {
+    count: 2
+    id: "cobblemon:occa_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/oran_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:oran_berry"
+  output: {
+    count: 2
+    id: "cobblemon:oran_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/pamtre_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:pamtre_berry"
+  output: {
+    count: 2
+    id: "cobblemon:pamtre_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/passho_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:passho_berry"
+  output: {
+    count: 2
+    id: "cobblemon:passho_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/payapa_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:payapa_berry"
+  output: {
+    count: 2
+    id: "cobblemon:payapa_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/pecha_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:pecha_berry"
+  output: {
+    count: 2
+    id: "cobblemon:pecha_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/persim_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:persim_berry"
+  output: {
+    count: 2
+    id: "cobblemon:persim_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/petaya_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:petaya_berry"
+  output: {
+    count: 2
+    id: "cobblemon:petaya_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/pinap_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:pinap_berry"
+  output: {
+    count: 2
+    id: "cobblemon:pinap_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/pomeg_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:pomeg_berry"
+  output: {
+    count: 2
+    id: "cobblemon:pomeg_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/qualot_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:qualot_berry"
+  output: {
+    count: 2
+    id: "cobblemon:qualot_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/rabuta_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:rabuta_berry"
+  output: {
+    count: 2
+    id: "cobblemon:rabuta_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/rawst_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:rawst_berry"
+  output: {
+    count: 2
+    id: "cobblemon:rawst_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/razz_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:razz_berry"
+  output: {
+    count: 2
+    id: "cobblemon:razz_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/rindo_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:rindo_berry"
+  output: {
+    count: 2
+    id: "cobblemon:rindo_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/roseli_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:roseli_berry"
+  output: {
+    count: 2
+    id: "cobblemon:roseli_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/rowap_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:rowap_berry"
+  output: {
+    count: 2
+    id: "cobblemon:rowap_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/salac_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:salac_berry"
+  output: {
+    count: 2
+    id: "cobblemon:salac_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/shuca_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:shuca_berry"
+  output: {
+    count: 2
+    id: "cobblemon:shuca_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/sitrus_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:sitrus_berry"
+  output: {
+    count: 2
+    id: "cobblemon:sitrus_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/spelon_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:spelon_berry"
+  output: {
+    count: 2
+    id: "cobblemon:spelon_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/starf_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:starf_berry"
+  output: {
+    count: 2
+    id: "cobblemon:starf_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/tamato_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:tamato_berry"
+  output: {
+    count: 2
+    id: "cobblemon:tamato_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/tanga_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:tanga_berry"
+  output: {
+    count: 2
+    id: "cobblemon:tanga_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/touga_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:touga_berry"
+  output: {
+    count: 2
+    id: "cobblemon:touga_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/wacan_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:wacan_berry"
+  output: {
+    count: 2
+    id: "cobblemon:wacan_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/watmel_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:watmel_berry"
+  output: {
+    count: 2
+    id: "cobblemon:watmel_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/wepear_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:wepear_berry"
+  output: {
+    count: 2
+    id: "cobblemon:wepear_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/wiki_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:wiki_berry"
+  output: {
+    count: 2
+    id: "cobblemon:wiki_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/berry/yache_berry</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:yache_berry"
+  output: {
+    count: 2
+    id: "cobblemon:yache_berry"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/hearty_grains</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:hearty_grains"
+  output: {
+    count: 2
+    id: "cobblemon:hearty_grains"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/mint/blue_mint</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:blue_mint"
+  output: {
+    count: 2
+    id: "cobblemon:blue_mint_leaf"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/mint/cyan_mint</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:cyan_mint"
+  output: {
+    count: 2
+    id: "cobblemon:cyan_mint_leaf"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/mint/green_mint</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:green_mint"
+  output: {
+    count: 2
+    id: "cobblemon:green_mint_leaf"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/mint/pink_mint</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:pink_mint"
+  output: {
+    count: 2
+    id: "cobblemon:pink_mint_leaf"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/mint/red_mint</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:red_mint"
+  output: {
+    count: 2
+    id: "cobblemon:red_mint_leaf"
+  }
+}

```


</details>

<details>
<summary>pylons/harvesting/cobblemon/mint/white_mint</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "cobblemon"
+        }
+      ]
+    }
+  ]
+  type: "pylons:harvesting"
+  block: "cobblemon:white_mint"
+  output: {
+    count: 2
+    id: "cobblemon:white_mint_leaf"
+  }
+}

```


</details>

<details>
<summary>terralith/cobblestone_from_stone_slab</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  pattern: [
+    "S"
+    "S"
+  ]
+  key: {
+    S: {
+      item: "minecraft:stone_slab"
+    }
+  }
+  result: {
+    item: "minecraft:cobblestone"
+    id: "minecraft:cobblestone"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>terralith/dispenser_alt</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  pattern: [
+    "###"
+    "#X#"
+    "#R#"
+  ]
+  key: {
+    #: {
+      tag: "minecraft:stone_crafting_materials"
+    }
+    R: {
+      tag: "c:dusts/redstone"
+    }
+    X: {
+      item: "minecraft:bow"
+    }
+  }
+  result: {
+    item: "minecraft:dispenser"
+    id: "minecraft:dispenser"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>terralith/dropper_alt</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  pattern: [
+    "###"
+    "# #"
+    "#R#"
+  ]
+  key: {
+    #: {
+      tag: "minecraft:stone_crafting_materials"
+    }
+    R: {
+      tag: "c:dusts/redstone"
+    }
+  }
+  result: {
+    item: "minecraft:dropper"
+    id: "minecraft:dropper"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>terralith/lever_alt</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  pattern: [
+    "X"
+    "#"
+  ]
+  key: {
+    #: {
+      tag: "minecraft:stone_crafting_materials"
+    }
+    X: {
+      item: "minecraft:stick"
+    }
+  }
+  result: {
+    item: "minecraft:lever"
+    id: "minecraft:lever"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>terralith/observer_alt</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  pattern: [
+    "###"
+    "RRQ"
+    "###"
+  ]
+  key: {
+    #: {
+      tag: "minecraft:stone_crafting_materials"
+    }
+    Q: {
+      item: "minecraft:quartz"
+    }
+    R: {
+      tag: "c:dusts/redstone"
+    }
+  }
+  result: {
+    item: "minecraft:observer"
+    id: "minecraft:observer"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>terralith/piston_alt</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  pattern: [
+    "TTT"
+    "#X#"
+    "#R#"
+  ]
+  key: {
+    #: {
+      tag: "minecraft:stone_crafting_materials"
+    }
+    R: {
+      tag: "c:dusts/redstone"
+    }
+    T: {
+      tag: "minecraft:planks"
+    }
+    X: {
+      tag: "c:ingots/iron"
+    }
+  }
+  result: {
+    item: "minecraft:piston"
+    id: "minecraft:piston"
+    count: 1
+  }
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (96)</summary>
<blockquote>

<details>
<summary>allthemons/pnc/chamber/allthemodium_ball_mechanism</summary>

```diff
 {
   type: "pneumaticcraft:pressure_chamber"
   inputs: [
     {
-      count: 1
+      count: 2
       item: "allthemons:allthemodium_ball_base"
     }
     {
       count: 1
       item: "allthemodium:allthemodium_nugget"
     }
     {
       count: 1
       item: "create:shaft"
     }
-    {
-      count: 1
-      item: "allthemons:allthemodium_ball_base"
-    }
   ]
   pressure: 4
   results: [
     {
       count: 1
       id: "allthemons:allthemodium_ball_mechanism"
     }
   ]
 }

```


</details>

<details>
<summary>allthemons/pnc/chamber/ancient_allthemodium_ball_mechanism</summary>

```diff
 {
   type: "pneumaticcraft:pressure_chamber"
   inputs: [
     {
-      count: 1
+      count: 2
       item: "allthemons:allthemodium_ball_base"
     }
     {
       count: 1
       item: "allthemodium:allthemodium_ingot"
     }
     {
       count: 1
       item: "create:shaft"
     }
-    {
-      count: 1
-      item: "allthemons:allthemodium_ball_base"
-    }
   ]
   pressure: 4
   results: [
     {
       count: 1
       id: "allthemons:ancient_allthemodium_ball_mechanism"
     }
   ]
 }

```


</details>

<details>
<summary>allthemons/pnc/chamber/ancient_unobtainium_ball</summary>

```diff
 {
   type: "pneumaticcraft:pressure_chamber"
   inputs: [
     {
       count: 1
       item: "allthemons:ancient_unobtainium_ball_mechanism"
     }
     {
-      count: 1
+      count: 2
       item: "allthemons:ancient_unobtainium_ball_lid"
     }
-    {
-      count: 1
-      item: "allthemons:ancient_unobtainium_ball_lid"
-    }
     {
       count: 1
       tag: "c:rods/iron"
     }
   ]
   pressure: 5
   results: [
     {
       count: 1
       id: "allthemons:ancient_unobtainium_ball"
     }
   ]
 }

```


</details>

<details>
<summary>allthemons/pnc/chamber/ancient_unobtainium_ball_mechanism</summary>

```diff
 {
   type: "pneumaticcraft:pressure_chamber"
   inputs: [
     {
-      count: 1
+      count: 2
       item: "allthemons:unobtainium_ball_base"
     }
     {
       count: 1
       item: "allthemodium:unobtainium_ingot"
     }
     {
       count: 1
       item: "create:shaft"
     }
-    {
-      count: 1
-      item: "allthemons:unobtainium_ball_base"
-    }
   ]
   pressure: 4
   results: [
     {
       count: 1
       id: "allthemons:ancient_unobtainium_ball_mechanism"
     }
   ]
 }

```


</details>

<details>
<summary>allthemons/pnc/chamber/ancient_vibranium_ball_mechanism</summary>

```diff
 {
   type: "pneumaticcraft:pressure_chamber"
   inputs: [
     {
-      count: 1
+      count: 2
       item: "allthemons:vibranium_ball_base"
     }
     {
       count: 1
       item: "allthemodium:vibranium_ingot"
     }
     {
       count: 1
       item: "create:shaft"
     }
-    {
-      count: 1
-      item: "allthemons:vibranium_ball_base"
-    }
   ]
   pressure: 4
   results: [
     {
       count: 1
       id: "allthemons:ancient_vibranium_ball_mechanism"
     }
   ]
 }

```


</details>

<details>
<summary>allthemons/pnc/chamber/unobtainium_ball</summary>

```diff
 {
   type: "pneumaticcraft:pressure_chamber"
   inputs: [
     {
       count: 1
       item: "allthemons:unobtainium_ball_mechanism"
     }
     {
-      count: 1
+      count: 2
       item: "allthemons:unobtainium_ball_lid"
     }
-    {
-      count: 1
-      item: "allthemons:unobtainium_ball_lid"
-    }
     {
       count: 1
       tag: "c:rods/iron"
     }
   ]
   pressure: 5
   results: [
     {
       count: 1
       id: "allthemons:unobtainium_ball"
     }
   ]
 }

```


</details>

<details>
<summary>allthemons/pnc/chamber/unobtainium_ball_mechanism</summary>

```diff
 {
   type: "pneumaticcraft:pressure_chamber"
   inputs: [
     {
-      count: 1
+      count: 2
       item: "allthemons:unobtainium_ball_base"
     }
     {
       count: 1
       item: "allthemodium:unobtainium_nugget"
     }
     {
       count: 1
       item: "create:shaft"
     }
-    {
-      count: 1
-      item: "allthemons:unobtainium_ball_base"
-    }
   ]
   pressure: 4
   results: [
     {
       count: 1
       id: "allthemons:unobtainium_ball_mechanism"
     }
   ]
 }

```


</details>

<details>
<summary>allthemons/pnc/chamber/vibranium_ball_mechanism</summary>

```diff
 {
   type: "pneumaticcraft:pressure_chamber"
   inputs: [
     {
-      count: 1
+      count: 2
       item: "allthemons:vibranium_ball_base"
     }
     {
       count: 1
       item: "allthemodium:vibranium_nugget"
     }
     {
       count: 1
       item: "create:shaft"
     }
-    {
-      count: 1
-      item: "allthemons:vibranium_ball_base"
-    }
   ]
   pressure: 4
   results: [
     {
       count: 1
       id: "allthemons:vibranium_ball_mechanism"
     }
   ]
 }

```


</details>

<details>
<summary>allthemons/refinery/ancient_soul_lava_ball_lid</summary>

```diff
 {
   type: "oritech:refinery"
   fluidInput: {
-    amount: 1000000
+    amount: 1000
     fluid: "allthemodium:soul_lava"
   }
   fluidOutputs: [
   ]
   ingredients: [
     {
       item: "createmonballsoverhaul:ancient_great_ball_lid"
     }
   ]
   results: [
     {
       count: 1
       id: "allthemons:ancient_soul_lava_ball_lid"
     }
   ]
   time: 80
 }

```


</details>

<details>
<summary>allthemons/refinery/soul_lava_ball_lid</summary>

```diff
 {
   type: "oritech:refinery"
   fluidInput: {
-    amount: 1000000
+    amount: 1000
     fluid: "allthemodium:soul_lava"
   }
   fluidOutputs: [
   ]
   ingredients: [
     {
       item: "createmonballsoverhaul:great_ball_lid"
     }
   ]
   results: [
     {
       count: 1
       id: "allthemons:soul_lava_ball_lid"
     }
   ]
   time: 80
 }

```


</details>

<details>
<summary>almostunified/enderio</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "enderio"
   recipes: [
-    "1$dark_steel_upgrade_jump_1"
-    "1$dark_steel_upgrade_speedboost1"
     "1$enderios"
     "1$energetic_photovoltaic_module"
     "1$inhibitor_obelisk"
     "1$iron_gear"
     "1$painting/painted_redstone_block"
     "1$sag_milling/clay"
     "1$sag_milling/coal"
     "1$sag_milling/coal_ore"
     "1$sag_milling/diamond_ore"
     "1$sag_milling/ender_pearl"
     "1$sag_milling/flower_pot"
     "1$sag_milling/gold"
     "1$sag_milling/iron"
     "1$sag_milling/lapis"
     "1$sag_milling/obsidian"
     "1$sag_milling/raw_copper"
     "1$sag_milling/raw_gold"
     "1$sag_milling/raw_iron"
     "1$sag_milling/redstone_ore"
     "1$sag_milling/sand"
     "1$slicing/z_logic_controller"
     "3$item.minecraft.copper_ingot_from_blasting"
     "3$item.minecraft.copper_ingot_from_smelting"
     "3$item.minecraft.gold_ingot_from_blasting"
     "3$item.minecraft.gold_ingot_from_smelting"
     "3$item.minecraft.iron_ingot_from_blasting"
     "3$item.minecraft.iron_ingot_from_smelting"
   ]
 }

```


</details>

<details>
<summary>almostunified/eternal_starlight</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "eternal_starlight"
   recipes: [
     "1$accumulator"
     "1$amaramber_lantern"
     "1$blast_furnace_from_cinder_brick"
+    "1$copper_from_ores"
+    "1$copper_from_raw_materials"
     "1$crystalborn_catalyst"
+    "1$deepsilver_from_ores"
+    "1$deepsilver_from_raw_materials"
     "1$dispenser_from_cinder_brick"
     "1$dropper_from_cinder_brick"
     "1$energy_transmitter"
     "1$energy_transmitter_from_cinder_brick"
+    "1$gold_from_ores"
+    "1$gold_from_raw_materials"
+    "1$golem_steel"
+    "1$iron_from_ores"
+    "1$iron_from_raw_materials"
+    "1$netherite"
     "1$observer_from_cinder_brick"
     "1$observer_from_cinder_brick_and_nightfall_spider_eye"
     "1$observer_from_nightfall_spider_eye"
     "1$piston_from_cinder_brick"
     "1$repeater_from_cinder_brick"
     "1$saltpeter_block"
     "1$saltpeter_powder_from_saltpeter_block"
     "3$redstone_blasting_from_eternal_ice_redstone_ore"
     "3$redstone_blasting_from_grimstone_redstone_ore"
     "3$redstone_blasting_from_haze_ice_redstone_ore"
     "3$redstone_blasting_from_voidstone_redstone_ore"
     "3$redstone_smelting_from_eternal_ice_redstone_ore"
     "3$redstone_smelting_from_grimstone_redstone_ore"
     "3$redstone_smelting_from_haze_ice_redstone_ore"
     "3$redstone_smelting_from_voidstone_redstone_ore"
     "3$saltpeter_powder_blasting_from_eternal_ice_saltpeter_ore"
     "3$saltpeter_powder_blasting_from_grimstone_saltpeter_ore"
     "3$saltpeter_powder_blasting_from_haze_ice_saltpeter_ore"
     "3$saltpeter_powder_blasting_from_voidstone_saltpeter_ore"
     "3$saltpeter_powder_smelting_from_eternal_ice_saltpeter_ore"
     "3$saltpeter_powder_smelting_from_grimstone_saltpeter_ore"
     "3$saltpeter_powder_smelting_from_haze_ice_saltpeter_ore"
     "3$saltpeter_powder_smelting_from_voidstone_saltpeter_ore"
   ]
 }

```


</details>

<details>
<summary>enderio/advanced_capacitor_bank</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
-      tag: "c:ingots/copper_alloy"
+      tag: "c:ingots/conductive_alloy"
     }
     C: {
       item: "enderio:double_layer_capacitor"
     }
     R: {
       tag: "c:storage_blocks/redstone"
     }
   }
   pattern: [
     "ACA"
     "CRC"
     "ACA"
   ]
   result: {
     count: 1
     id: "enderio:advanced_capacitor_bank"
   }
 }

```


</details>

<details>
<summary>enderio/advanced_item_filter</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    P: [
-      {
-        item: "minecraft:paper"
-      }
-      {
-        item: "enderio:black_paper"
-      }
-    ]
+    P: {
+      item: "minecraft:paper"
+    }
     R: {
       tag: "c:dusts/redstone"
     }
     Z: {
       item: "enderio:z_logic_controller"
     }
   }
   pattern: [
     "RPR"
     "PZP"
     "RPR"
   ]
   result: {
     count: 1
     id: "enderio:advanced_item_filter"
   }
 }

```


</details>

<details>
<summary>enderio/alloy_smelting/conductive_alloy_ingot</summary>

```diff
 {
   type: "enderio:alloy_smelting"
-  energy: 4800
+  energy: 3200
   experience: 0.3
   inputs: [
-    {
-      count: 1
-      tag: "c:ingots/copper_alloy"
-    }
     {
       count: 1
       tag: "c:ingots/iron"
     }
-    {
-      count: 1
-      tag: "c:dusts/redstone"
-    }
+    {
+      count: 1
+      tag: "c:ingots/copper"
+    }
   ]
   output: {
     count: 1
     id: "enderio:conductive_alloy_ingot"
   }
 }

```


</details>

<details>
<summary>enderio/alloy_smelting/dark_steel_ingot</summary>

```diff
 {
   type: "enderio:alloy_smelting"
-  energy: 6400
+  energy: 3200
   experience: 0.3
   inputs: [
     {
       count: 1
       tag: "c:ingots/iron"
     }
     {
       count: 1
       tag: "c:dusts/coal"
     }
     {
       count: 1
       tag: "c:obsidians"
     }
   ]
   output: {
     count: 1
     id: "enderio:dark_steel_ingot"
   }
 }

```


</details>

<details>
<summary>enderio/alloy_smelting/energetic_alloy_ingot</summary>

```diff
 {
   type: "enderio:alloy_smelting"
   energy: 4800
   experience: 0.3
   inputs: [
     {
       count: 1
       tag: "c:dusts/redstone"
     }
     {
       count: 1
       tag: "c:ingots/gold"
     }
-    {
-      count: 1
-      tag: "c:dusts/glowstone"
-    }
+    {
+      count: 1
+      tag: "c:ingots/conductive_alloy"
+    }
   ]
   output: {
     count: 1
     id: "enderio:energetic_alloy_ingot"
   }
 }

```


</details>

<details>
<summary>enderio/alloy_smelting/pulsating_alloy_ingot</summary>

```diff
 {
   type: "enderio:alloy_smelting"
   energy: 4800
   experience: 0.3
   inputs: [
     {
       count: 1
       tag: "c:ingots/iron"
     }
     {
       count: 1
       tag: "c:ender_pearls"
     }
   ]
   output: {
-    count: 1
+    count: 2
     id: "enderio:pulsating_alloy_ingot"
   }
 }

```


</details>

<details>
<summary>enderio/alloy_smelting/redstone_alloy_ingot</summary>

```diff
 {
   type: "enderio:alloy_smelting"
   energy: 3200
   experience: 0.3
   inputs: [
     {
       count: 1
       tag: "c:dusts/redstone"
     }
     {
       count: 1
-      tag: "c:silicon"
+      tag: "c:ingots/copper"
     }
   ]
   output: {
     count: 1
     id: "enderio:redstone_alloy_ingot"
   }
 }

```


</details>

<details>
<summary>enderio/alloy_smelting/vibrant_alloy_ingot</summary>

```diff
 {
   type: "enderio:alloy_smelting"
-  energy: 4800
+  energy: 5600
   experience: 0.3
   inputs: [
     {
       count: 1
       tag: "c:ingots/energetic_alloy"
     }
     {
       count: 1
       tag: "c:ender_pearls"
     }
+    {
+      count: 1
+      tag: "c:dusts/glowstone"
+    }
   ]
   output: {
     count: 1
     id: "enderio:vibrant_alloy_ingot"
   }
 }

```


</details>

<details>
<summary>enderio/basic_fluid_filter</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     B: {
       item: "minecraft:bucket"
     }
-    P: [
-      {
-        item: "minecraft:paper"
-      }
-      {
-        item: "enderio:black_paper"
-      }
-    ]
+    P: {
+      item: "minecraft:paper"
+    }
   }
   pattern: [
     " P "
     "PBP"
     " P "
   ]
   result: {
     count: 1
     id: "enderio:basic_fluid_filter"
   }
 }

```


</details>

<details>
<summary>enderio/basic_item_filter</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     H: {
       item: "minecraft:hopper"
     }
-    P: [
-      {
-        item: "minecraft:paper"
-      }
-      {
-        item: "enderio:black_paper"
-      }
-    ]
+    P: {
+      item: "minecraft:paper"
+    }
   }
   pattern: [
     " P "
     "PHP"
     " P "
   ]
   result: {
     count: 1
     id: "enderio:basic_item_filter"
   }
 }

```


</details>

<details>
<summary>enderio/basic_soul_filter</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    P: [
-      {
-        item: "minecraft:paper"
-      }
-      {
-        item: "enderio:black_paper"
-      }
-    ]
+    P: {
+      item: "minecraft:paper"
+    }
     S: {
       item: "enderio:soul_vial"
     }
   }
   pattern: [
     " P "
     "PSP"
     " P "
   ]
   result: {
     count: 1
     id: "enderio:basic_soul_filter"
   }
 }

```


</details>

<details>
<summary>enderio/coordinate_selector</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "equipment"
   key: {
     C: {
       item: "minecraft:compass"
     }
     E: {
       tag: "c:ender_pearls"
     }
     I: {
-      tag: "c:ingots/copper_alloy"
+      tag: "c:ingots/conductive_alloy"
     }
   }
   pattern: [
     "IEI"
     " CI"
     "  I"
   ]
   result: {
     count: 1
     id: "enderio:coordinate_selector"
   }
 }

```


</details>

<details>
<summary>enderio/dark_steel_ingot_with_coal</summary>

```diff
 {
   type: "enderio:alloy_smelting"
-  energy: 6400
+  energy: 3200
   experience: 0.3
   inputs: [
     {
       count: 1
       tag: "c:ingots/iron"
     }
     {
       count: 2
       item: "minecraft:coal"
     }
     {
       count: 1
       tag: "c:obsidians"
     }
   ]
   output: {
     count: 1
     id: "enderio:dark_steel_ingot"
   }
 }

```


</details>

<details>
<summary>enderio/drain</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     B: {
       item: "minecraft:bucket"
     }
     C: {
       tag: "c:glass_blocks/clear"
     }
     G: {
       tag: "c:gears/iron"
     }
     I: {
-      tag: "c:ingots/copper_alloy"
+      tag: "c:ingots/conductive_alloy"
     }
     V: {
       item: "enderio:void_chassis"
     }
   }
   pattern: [
     "ICI"
     "IVI"
     "GBG"
   ]
   result: {
     count: 1
     id: "enderio:drain"
   }
 }

```


</details>

<details>
<summary>enderio/electromagnet</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "equipment"
   key: {
     C: {
       tag: "c:ingots/conductive_alloy"
     }
     E: {
-      tag: "c:ingots/copper_alloy"
+      tag: "c:ingots/energetic_alloy"
     }
     V: {
       tag: "c:gems/vibrant_crystal"
     }
   }
   pattern: [
     "C C"
-    "CVC"
     "E E"
+    "EVE"
   ]
   result: {
     count: 1
     id: "enderio:electromagnet"
   }
 }

```


</details>

<details>
<summary>enderio/ender_fluid_conduit_upgrade</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "building"
   key: {
     B: {
       item: "enderio:conduit_binder"
     }
     C: {
       type: "enderio:conduit"
       conduit_type: "enderio:pressurized_fluid"
     }
     I: {
-      item: "enderio:vibrant_alloy_ingot"
+      tag: "c:ingots/vibrant_alloy"
     }
   }
   pattern: [
     "BBB"
     "ICI"
     "BBB"
   ]
   result: {
     components: {
       enderio:conduit: "enderio:ender_fluid"
     }
     count: 8
     id: "enderio:conduit"
   }
 }

```


</details>

<details>
<summary>enderio/fermenting/fluid_cloud_seed_concentrated_still</summary>

```diff
 {
   type: "enderio:vat_fermenting"
   input: {
     amount: 1000
-    fluid: "enderio:fluid_cloud_seed_concentrated_still"
+    fluid: "enderio:fluid_cloud_seed_still"
   }
   left_reagent: "enderio:lightning_rod"
   output: {
     amount: 500
     id: "enderio:fluid_cloud_seed_concentrated_still"
   }
   right_reagent: "enderio:wind_charges"
   ticks: 600
 }

```


</details>

<details>
<summary>enderio/fluid_conduit</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "building"
   key: {
+    C: {
+      tag: "c:ingots/conductive_alloy"
+    }
     B: {
       item: "enderio:conduit_binder"
     }
     G: {
       tag: "c:glass_blocks/clear"
     }
   }
   pattern: [
     "BBB"
     "BBB"
-    "GGG"
+    "CGC"
   ]
   result: {
     components: {
       enderio:conduit: "enderio:fluid"
     }
     count: 8
     id: "enderio:conduit"
   }
 }

```


</details>

<details>
<summary>enderio/impulse_hopper</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     C: {
       item: "enderio:void_chassis"
     }
     G: {
       tag: "c:gears/iron"
     }
     H: {
       item: "minecraft:hopper"
     }
     I: {
-      tag: "c:ingots/copper_alloy"
+      tag: "c:ingots/conductive_alloy"
     }
     R: {
       tag: "c:ingots/redstone_alloy"
     }
   }
   pattern: [
     "IHI"
     "GCG"
     "IRI"
   ]
   result: {
     count: 1
     id: "enderio:impulse_hopper"
   }
 }

```


</details>

<details>
<summary>enderio/item_conduit</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "building"
   key: {
-    P: {
-      tag: "c:nuggets/pulsating_alloy"
-    }
+    C: {
+      tag: "c:ingots/conductive_alloy"
+    }
+    I: {
+      tag: "c:ingots/pulsating_alloy"
+    }
     B: {
       item: "enderio:conduit_binder"
     }
   }
   pattern: [
     "BBB"
     "BBB"
-    "PPP"
+    "CIC"
   ]
   result: {
     components: {
       enderio:conduit: "enderio:item"
     }
     count: 8
     id: "enderio:conduit"
   }
 }

```


</details>

<details>
<summary>enderio/mek_chemical_filter</summary>

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
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     O: {
       tag: "c:ingots/osmium"
     }
-    P: [
-      {
-        item: "minecraft:paper"
-      }
-      {
-        item: "enderio:black_paper"
-      }
-    ]
+    P: {
+      item: "minecraft:paper"
+    }
   }
   pattern: [
     " P "
     "POP"
     " P "
   ]
   result: {
     count: 1
     id: "enderio:basic_chemical_filter"
   }
 }

```


</details>

<details>
<summary>enderio/painting/conduit_facade</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
+          modid: "enderio"
         }
       ]
     }
   ]
   type: "enderio:painting"
   input: {
     item: "enderio:conduit_facade"
   }
   output: {
     count: 1
     id: "enderio:conduit_facade"
   }
 }

```


</details>

<details>
<summary>enderio/painting/hardened_conduit_facade</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
+          modid: "enderio"
         }
       ]
     }
   ]
   type: "enderio:painting"
   input: {
     item: "enderio:hardened_conduit_facade"
   }
   output: {
     count: 1
     id: "enderio:hardened_conduit_facade"
   }
 }

```


</details>

<details>
<summary>enderio/painting/transparent_conduit_facade</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
+          modid: "enderio"
         }
       ]
     }
   ]
   type: "enderio:painting"
   input: {
     item: "enderio:transparent_conduit_facade"
   }
   output: {
     count: 1
     id: "enderio:transparent_conduit_facade"
   }
 }

```


</details>

<details>
<summary>enderio/painting/transparent_hardened_conduit_facade</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
+          modid: "enderio"
         }
       ]
     }
   ]
   type: "enderio:painting"
   input: {
     item: "enderio:transparent_hardened_conduit_facade"
   }
   output: {
     count: 1
     id: "enderio:transparent_hardened_conduit_facade"
   }
 }

```


</details>

<details>
<summary>enderio/painting_machine</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "c:ingots/redstone_alloy"
     }
     B: {
       tag: "c:dyes/blue"
     }
     C: {
       item: "enderio:void_chassis"
     }
     G: {
       tag: "c:dyes/green"
     }
     I: {
-      tag: "c:ingots/copper_alloy"
+      tag: "c:ingots/conductive_alloy"
     }
     M: {
       tag: "c:gears/iron"
     }
     R: {
       tag: "c:dyes/red"
     }
   }
   pattern: [
     "RGB"
     "ICI"
     "MAM"
   ]
   result: {
     count: 1
     id: "enderio:painting_machine"
   }
 }

```


</details>

<details>
<summary>enderio/pressurized_fluid_conduit</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "building"
   key: {
+    I: {
+      tag: "c:ingots/energetic_alloy"
+    }
     B: {
       item: "enderio:conduit_binder"
     }
     G: {
       tag: "c:glass_blocks/fused_quartz"
     }
   }
   pattern: [
     "BBB"
     "BBB"
-    "GGG"
+    "IGI"
   ]
   result: {
     components: {
       enderio:conduit: "enderio:pressurized_fluid"
     }
     count: 8
     id: "enderio:conduit"
   }
 }

```


</details>

<details>
<summary>enderio/pressurized_fluid_conduit_upgrade</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "building"
   key: {
-    G: {
-      tag: "c:glass_blocks/fused_quartz"
-    }
+    I: {
+      tag: "c:ingots/energetic_alloy"
+    }
     B: {
       item: "enderio:conduit_binder"
     }
     C: {
       type: "enderio:conduit"
       conduit_type: "enderio:fluid"
     }
   }
   pattern: [
     "BBB"
     "BBB"
-    "GCG"
+    "ICI"
   ]
   result: {
     components: {
       enderio:conduit: "enderio:pressurized_fluid"
     }
     count: 8
     id: "enderio:conduit"
   }
 }

```


</details>

<details>
<summary>enderio/redstone_filter_base</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     I: {
       tag: "c:ingots/iron"
     }
-    P: [
-      {
-        item: "minecraft:paper"
-      }
-      {
-        item: "enderio:black_paper"
-      }
-    ]
+    P: {
+      item: "minecraft:paper"
+    }
     R: {
       tag: "c:ingots/redstone_alloy"
     }
   }
   pattern: [
     "RPR"
     "PIP"
     "RPR"
   ]
   result: {
     count: 1
     id: "enderio:redstone_filter_base"
   }
 }

```


</details>

<details>
<summary>enderio/sag_mill</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
+    O: {
+      tag: "c:obsidians"
+    }
     F: {
       item: "minecraft:flint"
     }
     G: {
       tag: "c:gears/iron"
     }
     I: {
-      tag: "c:ingots/dark_steel"
+      tag: "c:ingots/iron"
     }
     P: {
       item: "minecraft:piston"
     }
     V: {
       item: "enderio:void_chassis"
     }
   }
   pattern: [
-    "FFF"
-    "GPG"
+    "GFG"
     "IVI"
+    "OPO"
   ]
   result: {
     count: 1
     id: "enderio:sag_mill"
   }
 }

```


</details>

<details>
<summary>enderio/tank_empty/glass_bottle</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "enderio:fluid_xp_juice_still"
+    tag: "c:experience"
     amount: 250
   }
   input: {
     item: "minecraft:experience_bottle"
   }
   mode: "empty"
   output: {
     count: 1
     id: "minecraft:glass_bottle"
   }
 }

```


</details>

<details>
<summary>enderio/tank_empty/sponge</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "minecraft:water"
+    fluid: "minecraft:water"
     amount: 1000
   }
   input: {
     item: "minecraft:wet_sponge"
   }
   mode: "empty"
   output: {
     count: 1
     id: "minecraft:sponge"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/black_concrete</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "minecraft:water"
+    fluid: "minecraft:water"
     amount: 1000
   }
   input: {
     item: "minecraft:black_concrete_powder"
   }
   mode: "fill"
   output: {
     count: 1
     id: "minecraft:black_concrete"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/blue_concrete</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "minecraft:water"
+    fluid: "minecraft:water"
     amount: 1000
   }
   input: {
     item: "minecraft:blue_concrete_powder"
   }
   mode: "fill"
   output: {
     count: 1
     id: "minecraft:blue_concrete"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/brown_concrete</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "minecraft:water"
+    fluid: "minecraft:water"
     amount: 1000
   }
   input: {
     item: "minecraft:brown_concrete_powder"
   }
   mode: "fill"
   output: {
     count: 1
     id: "minecraft:brown_concrete"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/cyan_concrete</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "minecraft:water"
+    fluid: "minecraft:water"
     amount: 1000
   }
   input: {
     item: "minecraft:cyan_concrete_powder"
   }
   mode: "fill"
   output: {
     count: 1
     id: "minecraft:cyan_concrete"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/experience_bottle</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "enderio:fluid_xp_juice_still"
+    tag: "c:experience"
     amount: 250
   }
   input: {
     item: "minecraft:glass_bottle"
   }
   mode: "fill"
   output: {
     count: 1
     id: "minecraft:experience_bottle"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/gray_concrete</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "minecraft:water"
+    fluid: "minecraft:water"
     amount: 1000
   }
   input: {
     item: "minecraft:gray_concrete_powder"
   }
   mode: "fill"
   output: {
     count: 1
     id: "minecraft:gray_concrete"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/green_concrete</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "minecraft:water"
+    fluid: "minecraft:water"
     amount: 1000
   }
   input: {
     item: "minecraft:green_concrete_powder"
   }
   mode: "fill"
   output: {
     count: 1
     id: "minecraft:green_concrete"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/light_blue_concrete</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "minecraft:water"
+    fluid: "minecraft:water"
     amount: 1000
   }
   input: {
     item: "minecraft:light_blue_concrete_powder"
   }
   mode: "fill"
   output: {
     count: 1
     id: "minecraft:light_blue_concrete"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/light_gray_concrete</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "minecraft:water"
+    fluid: "minecraft:water"
     amount: 1000
   }
   input: {
     item: "minecraft:light_gray_concrete_powder"
   }
   mode: "fill"
   output: {
     count: 1
     id: "minecraft:light_gray_concrete"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/lime_concrete</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "minecraft:water"
+    fluid: "minecraft:water"
     amount: 1000
   }
   input: {
     item: "minecraft:lime_concrete_powder"
   }
   mode: "fill"
   output: {
     count: 1
     id: "minecraft:lime_concrete"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/magenta_concrete</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "minecraft:water"
+    fluid: "minecraft:water"
     amount: 1000
   }
   input: {
     item: "minecraft:magenta_concrete_powder"
   }
   mode: "fill"
   output: {
     count: 1
     id: "minecraft:magenta_concrete"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/nutritious_stick</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "enderio:fluid_nutrient_distillation_still"
+    fluid: "enderio:fluid_nutrient_distillation_still"
     amount: 1000
   }
   input: {
     item: "minecraft:stick"
   }
   mode: "fill"
   output: {
     count: 1
     id: "enderio:nutritious_stick"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/orange_concrete</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "minecraft:water"
+    fluid: "minecraft:water"
     amount: 1000
   }
   input: {
     item: "minecraft:orange_concrete_powder"
   }
   mode: "fill"
   output: {
     count: 1
     id: "minecraft:orange_concrete"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/pink_concrete</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "minecraft:water"
+    fluid: "minecraft:water"
     amount: 1000
   }
   input: {
     item: "minecraft:pink_concrete_powder"
   }
   mode: "fill"
   output: {
     count: 1
     id: "minecraft:pink_concrete"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/purple_concrete</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "minecraft:water"
+    fluid: "minecraft:water"
     amount: 1000
   }
   input: {
     item: "minecraft:purple_concrete_powder"
   }
   mode: "fill"
   output: {
     count: 1
     id: "minecraft:purple_concrete"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/red_concrete</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "minecraft:water"
+    fluid: "minecraft:water"
     amount: 1000
   }
   input: {
     item: "minecraft:red_concrete_powder"
   }
   mode: "fill"
   output: {
     count: 1
     id: "minecraft:red_concrete"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/wet_sponge</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "minecraft:water"
+    fluid: "minecraft:water"
     amount: 1000
   }
   input: {
     item: "minecraft:sponge"
   }
   mode: "fill"
   output: {
     count: 1
     id: "minecraft:wet_sponge"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/white_concrete</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "minecraft:water"
+    fluid: "minecraft:water"
     amount: 1000
   }
   input: {
     item: "minecraft:white_concrete_powder"
   }
   mode: "fill"
   output: {
     count: 1
     id: "minecraft:white_concrete"
   }
 }

```


</details>

<details>
<summary>enderio/tank_fill/yellow_concrete</summary>

```diff
 {
   type: "enderio:tank"
   fluid: {
-    id: "minecraft:water"
+    fluid: "minecraft:water"
     amount: 1000
   }
   input: {
     item: "minecraft:yellow_concrete_powder"
   }
   mode: "fill"
   output: {
     count: 1
     id: "minecraft:yellow_concrete"
   }
 }

```


</details>

<details>
<summary>enderio/vat</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
-      tag: "c:ingots/copper_alloy"
+      tag: "c:ingots/conductive_alloy"
     }
     B: {
       item: "minecraft:barrel"
     }
     C: {
       item: "enderio:void_chassis"
     }
     M: {
       tag: "c:gears/iron"
     }
     R: {
       tag: "c:ingots/redstone_alloy"
     }
     S: {
       tag: "c:ingots/dark_steel"
     }
   }
   pattern: [
     "SBS"
     "ACA"
     "MRM"
   ]
   result: {
     count: 1
     id: "enderio:vat"
   }
 }

```


</details>

<details>
<summary>enderio/vibrant_capacitor_bank_upgrade</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
-      tag: "c:ingots/copper_alloy"
+      tag: "c:ingots/conductive_alloy"
     }
     C: {
       tag: "c:gems/vibrant_crystal"
     }
     O: {
       item: "enderio:octadic_capacitor"
     }
   }
   pattern: [
     "AOA"
     "OCO"
     "AOA"
   ]
   result: {
     count: 1
     id: "enderio:vibrant_capacitor_bank"
   }
 }

```


</details>

<details>
<summary>enderio/wired_charger</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     C: {
-      tag: "c:ingots/copper_alloy"
+      tag: "c:ingots/conductive_alloy"
     }
     V: {
       item: "enderio:void_chassis"
     }
   }
   pattern: [
     "CCC"
     "CVC"
     "CCC"
   ]
   result: {
     count: 1
     id: "enderio:wired_charger"
   }
 }

```


</details>

<details>
<summary>enderio/wireless_charger</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     C: {
-      tag: "c:ingots/copper_alloy"
+      tag: "c:ingots/conductive_alloy"
     }
     E: {
       item: "enderio:ender_resonator"
     }
     V: {
       item: "enderio:void_chassis"
     }
   }
   pattern: [
     "CCC"
     "CVC"
     "CEC"
   ]
   result: {
     count: 1
     id: "enderio:wireless_charger"
   }
 }

```


</details>

<details>
<summary>enderio/wireless_charger_antenna</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     C: {
-      tag: "c:ingots/copper_alloy"
+      tag: "c:ingots/conductive_alloy"
     }
     E: {
       item: "enderio:ender_resonator"
     }
     S: {
       tag: "c:ingots/pulsating_alloy"
     }
   }
   pattern: [
     " S "
     " S "
     "CEC"
   ]
   result: {
     count: 1
     id: "enderio:wireless_charger_antenna"
   }
 }

```


</details>

<details>
<summary>enderio/wireless_charger_antenna_advanced</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     C: {
-      tag: "c:ingots/copper_alloy"
+      tag: "c:ingots/conductive_alloy"
     }
     E: {
       item: "enderio:sentient_ender"
     }
     S: {
       tag: "c:ingots/vibrant_alloy"
     }
   }
   pattern: [
     " S "
     " S "
     "CEC"
   ]
   result: {
     count: 1
     id: "enderio:wireless_charger_antenna_advanced"
   }
 }

```


</details>

<details>
<summary>eternal_starlight/chiseled_grimstone</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "building"
   key: {
     #: {
-      item: "eternal_starlight:grimstone_brick_slab"
+      item: "eternal_starlight:cobbled_grimstone_slab"
     }
   }
   pattern: [
     "#"
     "#"
   ]
   result: {
     count: 1
     id: "eternal_starlight:chiseled_grimstone"
   }
 }

```


</details>

<details>
<summary>eternal_starlight/chiseled_polished_abysslate</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "building"
   key: {
     #: {
-      item: "eternal_starlight:polished_abysslate_brick_slab"
+      item: "eternal_starlight:polished_abysslate_slab"
     }
   }
   pattern: [
     "#"
     "#"
   ]
   result: {
     count: 1
     id: "eternal_starlight:chiseled_polished_abysslate"
   }
 }

```


</details>

<details>
<summary>eternal_starlight/chiseled_polished_cryobysslate</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "building"
   key: {
     #: {
-      item: "eternal_starlight:polished_cryobysslate_brick_slab"
+      item: "eternal_starlight:polished_cryobysslate_slab"
     }
   }
   pattern: [
     "#"
     "#"
   ]
   result: {
     count: 1
     id: "eternal_starlight:chiseled_polished_cryobysslate"
   }
 }

```


</details>

<details>
<summary>eternal_starlight/chiseled_polished_thermabysslate</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "building"
   key: {
     #: {
-      item: "eternal_starlight:polished_thermabysslate_brick_slab"
+      item: "eternal_starlight:polished_thermabysslate_slab"
     }
   }
   pattern: [
     "#"
     "#"
   ]
   result: {
     count: 1
     id: "eternal_starlight:chiseled_polished_thermabysslate"
   }
 }

```


</details>

<details>
<summary>eternal_starlight/chiseled_springstone</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "building"
   key: {
     #: {
-      item: "eternal_starlight:springstone_brick_slab"
+      item: "eternal_starlight:springstone_slab"
     }
   }
   pattern: [
     "#"
     "#"
   ]
   result: {
     count: 1
     id: "eternal_starlight:chiseled_springstone"
   }
 }

```


</details>

<details>
<summary>eternal_starlight/chiseled_twilight_sandstone</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "building"
   key: {
     #: {
-      item: "eternal_starlight:cut_twilight_sandstone_slab"
+      item: "eternal_starlight:twilight_sandstone_slab"
     }
   }
   pattern: [
     "#"
     "#"
   ]
   result: {
     count: 1
     id: "eternal_starlight:chiseled_twilight_sandstone"
   }
 }

```


</details>

<details>
<summary>eternal_starlight/chiseled_voidstone</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "building"
   key: {
     #: {
-      item: "eternal_starlight:voidstone_brick_slab"
+      item: "eternal_starlight:cobbled_voidstone_slab"
     }
   }
   pattern: [
     "#"
     "#"
   ]
   result: {
     count: 1
     id: "eternal_starlight:chiseled_voidstone"
   }
 }

```


</details>

<details>
<summary>little_big_redstone/microchip/black</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    N: {
-      item: "minecraft:netherite_scrap"
-    }
+    C: {
+      item: "little_big_redstone:redstone_circuit_board"
+    }
     F: {
       item: "little_big_redstone:black_floppy_disk"
     }
     I: {
       tag: "c:storage_blocks/iron"
     }
     R: {
       tag: "c:dusts/redstone"
     }
   }
   pattern: [
+    "IFI"
     "III"
-    "INI"
-    "RFR"
+    "RCR"
   ]
   result: {
     count: 1
     id: "little_big_redstone:black_microchip"
   }
 }

```


</details>

<details>
<summary>little_big_redstone/microchip/blue</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    N: {
-      item: "minecraft:netherite_scrap"
-    }
+    C: {
+      item: "little_big_redstone:redstone_circuit_board"
+    }
     F: {
       item: "little_big_redstone:blue_floppy_disk"
     }
     I: {
       tag: "c:storage_blocks/iron"
     }
     R: {
       tag: "c:dusts/redstone"
     }
   }
   pattern: [
+    "IFI"
     "III"
-    "INI"
-    "RFR"
+    "RCR"
   ]
   result: {
     count: 1
     id: "little_big_redstone:blue_microchip"
   }
 }

```


</details>

<details>
<summary>little_big_redstone/microchip/brown</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    N: {
-      item: "minecraft:netherite_scrap"
-    }
+    C: {
+      item: "little_big_redstone:redstone_circuit_board"
+    }
     F: {
       item: "little_big_redstone:brown_floppy_disk"
     }
     I: {
       tag: "c:storage_blocks/iron"
     }
     R: {
       tag: "c:dusts/redstone"
     }
   }
   pattern: [
+    "IFI"
     "III"
-    "INI"
-    "RFR"
+    "RCR"
   ]
   result: {
     count: 1
     id: "little_big_redstone:brown_microchip"
   }
 }

```


</details>

<details>
<summary>little_big_redstone/microchip/cyan</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    N: {
-      item: "minecraft:netherite_scrap"
-    }
+    C: {
+      item: "little_big_redstone:redstone_circuit_board"
+    }
     F: {
       item: "little_big_redstone:cyan_floppy_disk"
     }
     I: {
       tag: "c:storage_blocks/iron"
     }
     R: {
       tag: "c:dusts/redstone"
     }
   }
   pattern: [
+    "IFI"
     "III"
-    "INI"
-    "RFR"
+    "RCR"
   ]
   result: {
     count: 1
     id: "little_big_redstone:cyan_microchip"
   }
 }

```


</details>

<details>
<summary>little_big_redstone/microchip/gray</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    N: {
-      item: "minecraft:netherite_scrap"
-    }
+    C: {
+      item: "little_big_redstone:redstone_circuit_board"
+    }
     F: {
       item: "little_big_redstone:gray_floppy_disk"
     }
     I: {
       tag: "c:storage_blocks/iron"
     }
     R: {
       tag: "c:dusts/redstone"
     }
   }
   pattern: [
+    "IFI"
     "III"
-    "INI"
-    "RFR"
+    "RCR"
   ]
   result: {
     count: 1
     id: "little_big_redstone:gray_microchip"
   }
 }

```


</details>

<details>
<summary>little_big_redstone/microchip/green</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    N: {
-      item: "minecraft:netherite_scrap"
-    }
+    C: {
+      item: "little_big_redstone:redstone_circuit_board"
+    }
     F: {
       item: "little_big_redstone:green_floppy_disk"
     }
     I: {
       tag: "c:storage_blocks/iron"
     }
     R: {
       tag: "c:dusts/redstone"
     }
   }
   pattern: [
+    "IFI"
     "III"
-    "INI"
-    "RFR"
+    "RCR"
   ]
   result: {
     count: 1
     id: "little_big_redstone:green_microchip"
   }
 }

```


</details>

<details>
<summary>little_big_redstone/microchip/light_blue</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    N: {
-      item: "minecraft:netherite_scrap"
-    }
+    C: {
+      item: "little_big_redstone:redstone_circuit_board"
+    }
     F: {
       item: "little_big_redstone:light_blue_floppy_disk"
     }
     I: {
       tag: "c:storage_blocks/iron"
     }
     R: {
       tag: "c:dusts/redstone"
     }
   }
   pattern: [
+    "IFI"
     "III"
-    "INI"
-    "RFR"
+    "RCR"
   ]
   result: {
     count: 1
     id: "little_big_redstone:light_blue_microchip"
   }
 }

```


</details>

<details>
<summary>little_big_redstone/microchip/light_gray</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    N: {
-      item: "minecraft:netherite_scrap"
-    }
+    C: {
+      item: "little_big_redstone:redstone_circuit_board"
+    }
     F: {
       item: "little_big_redstone:light_gray_floppy_disk"
     }
     I: {
       tag: "c:storage_blocks/iron"
     }
     R: {
       tag: "c:dusts/redstone"
     }
   }
   pattern: [
+    "IFI"
     "III"
-    "INI"
-    "RFR"
+    "RCR"
   ]
   result: {
     count: 1
     id: "little_big_redstone:light_gray_microchip"
   }
 }

```


</details>

<details>
<summary>little_big_redstone/microchip/lime</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    N: {
-      item: "minecraft:netherite_scrap"
-    }
+    C: {
+      item: "little_big_redstone:redstone_circuit_board"
+    }
     F: {
       item: "little_big_redstone:lime_floppy_disk"
     }
     I: {
       tag: "c:storage_blocks/iron"
     }
     R: {
       tag: "c:dusts/redstone"
     }
   }
   pattern: [
+    "IFI"
     "III"
-    "INI"
-    "RFR"
+    "RCR"
   ]
   result: {
     count: 1
     id: "little_big_redstone:lime_microchip"
   }
 }

```


</details>

<details>
<summary>little_big_redstone/microchip/magenta</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    N: {
-      item: "minecraft:netherite_scrap"
-    }
+    C: {
+      item: "little_big_redstone:redstone_circuit_board"
+    }
     F: {
       item: "little_big_redstone:magenta_floppy_disk"
     }
     I: {
       tag: "c:storage_blocks/iron"
     }
     R: {
       tag: "c:dusts/redstone"
     }
   }
   pattern: [
+    "IFI"
     "III"
-    "INI"
-    "RFR"
+    "RCR"
   ]
   result: {
     count: 1
     id: "little_big_redstone:magenta_microchip"
   }
 }

```


</details>

<details>
<summary>little_big_redstone/microchip/orange</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    N: {
-      item: "minecraft:netherite_scrap"
-    }
+    C: {
+      item: "little_big_redstone:redstone_circuit_board"
+    }
     F: {
       item: "little_big_redstone:orange_floppy_disk"
     }
     I: {
       tag: "c:storage_blocks/iron"
     }
     R: {
       tag: "c:dusts/redstone"
     }
   }
   pattern: [
+    "IFI"
     "III"
-    "INI"
-    "RFR"
+    "RCR"
   ]
   result: {
     count: 1
     id: "little_big_redstone:orange_microchip"
   }
 }

```


</details>

<details>
<summary>little_big_redstone/microchip/pink</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    N: {
-      item: "minecraft:netherite_scrap"
-    }
+    C: {
+      item: "little_big_redstone:redstone_circuit_board"
+    }
     F: {
       item: "little_big_redstone:pink_floppy_disk"
     }
     I: {
       tag: "c:storage_blocks/iron"
     }
     R: {
       tag: "c:dusts/redstone"
     }
   }
   pattern: [
+    "IFI"
     "III"
-    "INI"
-    "RFR"
+    "RCR"
   ]
   result: {
     count: 1
     id: "little_big_redstone:pink_microchip"
   }
 }

```


</details>

<details>
<summary>little_big_redstone/microchip/purple</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    N: {
-      item: "minecraft:netherite_scrap"
-    }
+    C: {
+      item: "little_big_redstone:redstone_circuit_board"
+    }
     F: {
       item: "little_big_redstone:purple_floppy_disk"
     }
     I: {
       tag: "c:storage_blocks/iron"
     }
     R: {
       tag: "c:dusts/redstone"
     }
   }
   pattern: [
+    "IFI"
     "III"
-    "INI"
-    "RFR"
+    "RCR"
   ]
   result: {
     count: 1
     id: "little_big_redstone:purple_microchip"
   }
 }

```


</details>

<details>
<summary>little_big_redstone/microchip/red</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    N: {
-      item: "minecraft:netherite_scrap"
-    }
+    C: {
+      item: "little_big_redstone:redstone_circuit_board"
+    }
     F: {
       item: "little_big_redstone:red_floppy_disk"
     }
     I: {
       tag: "c:storage_blocks/iron"
     }
     R: {
       tag: "c:dusts/redstone"
     }
   }
   pattern: [
+    "IFI"
     "III"
-    "INI"
-    "RFR"
+    "RCR"
   ]
   result: {
     count: 1
     id: "little_big_redstone:red_microchip"
   }
 }

```


</details>

<details>
<summary>little_big_redstone/microchip/white</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    N: {
-      item: "minecraft:netherite_scrap"
-    }
+    C: {
+      item: "little_big_redstone:redstone_circuit_board"
+    }
     F: {
       item: "little_big_redstone:white_floppy_disk"
     }
     I: {
       tag: "c:storage_blocks/iron"
     }
     R: {
       tag: "c:dusts/redstone"
     }
   }
   pattern: [
+    "IFI"
     "III"
-    "INI"
-    "RFR"
+    "RCR"
   ]
   result: {
     count: 1
     id: "little_big_redstone:white_microchip"
   }
 }

```


</details>

<details>
<summary>little_big_redstone/microchip/yellow</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    N: {
-      item: "minecraft:netherite_scrap"
-    }
+    C: {
+      item: "little_big_redstone:redstone_circuit_board"
+    }
     F: {
       item: "little_big_redstone:yellow_floppy_disk"
     }
     I: {
       tag: "c:storage_blocks/iron"
     }
     R: {
       tag: "c:dusts/redstone"
     }
   }
   pattern: [
+    "IFI"
     "III"
-    "INI"
-    "RFR"
+    "RCR"
   ]
   result: {
     count: 1
     id: "little_big_redstone:yellow_microchip"
   }
 }

```


</details>

<details>
<summary>pneumaticcraft/jet_boots_upgrade_4</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     M: {
       item: "minecraft:phantom_membrane"
     }
     N: {
       item: "minecraft:nether_star"
     }
     P: {
-      strict: true
       type: "neoforge:components"
       components: {
-        minecraft:attribute_modifiers: {
-          modifiers: [
-          ]
-        }
-        minecraft:enchantments: {
-          levels: {
-          }
-        }
-        minecraft:lore: [
-        ]
-        minecraft:max_stack_size: 1
-        minecraft:rarity: "common"
-        minecraft:repair_cost: 0
         minecraft:potion_contents: {
-          potion: "minecraft:long_slow_falling"
+          potion: "minecraft:slow_falling"
         }
       }
       items: "minecraft:potion"
     }
     U: {
       item: "pneumaticcraft:jet_boots_upgrade_3"
     }
     V: {
       item: "pneumaticcraft:vortex_cannon"
     }
   }
   pattern: [
     "MNM"
     "VUV"
     "P P"
   ]
   result: {
     count: 1
     id: "pneumaticcraft:jet_boots_upgrade_4"
   }
 }

```


</details>

<details>
<summary>pneumaticcraft/jumping_upgrade_3</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     C: {
       item: "pneumaticcraft:pneumatic_cylinder"
     }
     J: {
-      strict: true
       type: "neoforge:components"
       components: {
-        minecraft:attribute_modifiers: {
-          modifiers: [
-          ]
-        }
-        minecraft:enchantments: {
-          levels: {
-          }
-        }
-        minecraft:lore: [
-        ]
-        minecraft:max_stack_size: 1
-        minecraft:rarity: "common"
-        minecraft:repair_cost: 0
         minecraft:potion_contents: {
           potion: "minecraft:leaping"
         }
       }
       items: "minecraft:potion"
     }
     P: {
       item: "minecraft:piston"
     }
     U: {
       item: "pneumaticcraft:jumping_upgrade_2"
     }
   }
   pattern: [
     "PCP"
     "JUJ"
     " J "
   ]
   result: {
     count: 1
     id: "pneumaticcraft:jumping_upgrade_3"
   }
 }

```


</details>

<details>
<summary>pneumaticcraft/jumping_upgrade_4</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     C: {
       item: "pneumaticcraft:pneumatic_cylinder"
     }
     J: {
-      strict: true
       type: "neoforge:components"
       components: {
-        minecraft:attribute_modifiers: {
-          modifiers: [
-          ]
-        }
-        minecraft:enchantments: {
-          levels: {
-          }
-        }
-        minecraft:lore: [
-        ]
-        minecraft:max_stack_size: 1
-        minecraft:rarity: "common"
-        minecraft:repair_cost: 0
         minecraft:potion_contents: {
           potion: "minecraft:strong_leaping"
         }
       }
       items: "minecraft:potion"
     }
     P: {
       item: "minecraft:piston"
     }
     U: {
       item: "pneumaticcraft:jumping_upgrade_3"
     }
   }
   pattern: [
     "PCP"
     "JUJ"
     " J "
   ]
   result: {
     count: 1
     id: "pneumaticcraft:jumping_upgrade_4"
   }
 }

```


</details>

<details>
<summary>pneumaticcraft/night_vision_upgrade</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     G: {
       item: "pneumaticcraft:pressure_chamber_glass"
     }
     L: {
       tag: "pneumaticcraft:upgrade_components"
     }
     N: {
-      strict: true
       type: "neoforge:components"
       components: {
-        minecraft:attribute_modifiers: {
-          modifiers: [
-          ]
-        }
-        minecraft:enchantments: {
-          levels: {
-          }
-        }
-        minecraft:lore: [
-        ]
-        minecraft:max_stack_size: 1
-        minecraft:rarity: "common"
-        minecraft:repair_cost: 0
         minecraft:potion_contents: {
-          potion: "minecraft:long_night_vision"
+          potion: "minecraft:night_vision"
         }
       }
       items: "minecraft:potion"
     }
   }
   pattern: [
     "LNL"
     "GNG"
     "LNL"
   ]
   result: {
     count: 1
     id: "pneumaticcraft:night_vision_upgrade"
   }
 }

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (179)</summary>
<blockquote>

<details>
<summary>allthemods/immersiveengineering/cloche/mysticalagriculture/kivi</summary>

```diff
-{
-  type: "immersiveengineering:cloche"
-  results: [
-    {
-      basePredicate: {
-        item: "mysticalagriculture:kivi_essence"
-      }
-      count: 2
-    }
-  ]
-  input: {
-    item: "mysticalagriculture:kivi_seeds"
-  }
-  soil: {
-    tag: "kubejs:farmland/prudentium"
-  }
-  time: 1750
-  render: {
-    type: "immersiveengineering:crop"
-    block: "mysticalagriculture:kivi_crop"
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/MysticalAgriculture/Crops.js"
-    line: 78
-  }
-}

```


</details>

<details>
<summary>allthemods/immersiveengineering/cloche/mysticalagriculture/xychorium_gem</summary>

```diff
-{
-  type: "immersiveengineering:cloche"
-  results: [
-    {
-      basePredicate: {
-        item: "mysticalagriculture:xychorium_gem_essence"
-      }
-      count: 2
-    }
-  ]
-  input: {
-    item: "mysticalagriculture:xychorium_gem_seeds"
-  }
-  soil: {
-    tag: "kubejs:farmland/tertium"
-  }
-  time: 2500
-  render: {
-    type: "immersiveengineering:crop"
-    block: "mysticalagriculture:xychorium_gem_crop"
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/MysticalAgriculture/Crops.js"
-    line: 78
-  }
-}

```


</details>

<details>
<summary>allthemons/ancient_feather_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:light_coated_blue_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/blue"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:white_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:ancient_feather_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/ancient_gigaton_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:dense_coated_black_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/white"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:white_apricorn_bits"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:black_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:ancient_gigaton_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/ancient_great_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:coated_blue_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:red_apricorn_bits"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:red_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:ancient_great_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/ancient_heavy_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:dense_coated_black_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/gray"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:black_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:ancient_heavy_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/ancient_jet_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:light_coated_blue_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:white_apricorn_bits"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:blue_apricorn_bits"
-    }
-    {
-      count: 1
-      tag: "c:dyes/blue"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:ancient_jet_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/ancient_leaden_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:dense_coated_black_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:white_apricorn_bits"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:black_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:ancient_leaden_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/ancient_ultra_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:coated_black_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:yellow_apricorn_bits"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:yellow_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:ancient_ultra_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/ancient_wing_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:light_coated_blue_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:blue_apricorn_bits"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:blue_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:ancient_wing_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/apricorn_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:assembly_laser"
-  input: {
-    count: 1
-    item: "cobblemon:stripped_apricorn_log"
-  }
-  program: "laser"
-  result: {
-    count: 4
-    id: "createmonballsoverhaul:apricorn_ball_lid"
-  }
-}

```


</details>

<details>
<summary>allthemons/beast_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:blue_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:nuggets/gold"
-    }
-    {
-      count: 1
-      tag: "c:nuggets/gold"
-    }
-    {
-      count: 1
-      item: "minecraft:echo_shard"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:beast_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/black_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:blank_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/black"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:black_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/blue_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:blank_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/blue"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:blue_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/cherish_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:red_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/black"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:red_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:cherish_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/coated_black_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:black_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:tumblestone_dust"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:coated_black_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/coated_blue_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:blue_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:tumblestone_dust"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:coated_blue_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/coated_green_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:green_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:tumblestone_dust"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:coated_green_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/coated_pink_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:pink_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:tumblestone_dust"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:coated_pink_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/coated_red_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:red_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:tumblestone_dust"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:coated_red_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/coated_white_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:white_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:tumblestone_dust"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:coated_white_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/coated_yellow_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:yellow_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:tumblestone_dust"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:coated_yellow_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/dense_coated_black_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:black_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:black_tumblestone_dust"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:dense_coated_black_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/dive_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:blue_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/white"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:white_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:dive_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/dream_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:pink_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:gems/rose_quartz"
-    }
-    {
-      count: 1
-      tag: "create:sandpaper"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:dream_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/dusk_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:green_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/black"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:red_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:dusk_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/fast_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:yellow_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/red"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:yellow_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:fast_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/friend_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:green_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/red"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:yellow_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:friend_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/great_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:blue_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:red_apricorn_bits"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:red_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:great_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/green_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:blank_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/green"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:green_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/heal_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:pink_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/white"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:blue_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:heal_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/heavy_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:black_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:blue_apricorn_bits"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:blue_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:heavy_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/level_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:yellow_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/black"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:red_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:level_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/light_coated_blue_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:blue_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:sky_tumblestone_dust"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:light_coated_blue_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/love_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:pink_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/pink"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:white_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:love_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/lure_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:red_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/cyan"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:yellow_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:lure_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/luxury_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:black_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/yellow"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:red_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:luxury_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/moon_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:blue_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/black"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:yellow_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:moon_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/nest_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:green_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:yellow_apricorn_bits"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:yellow_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:nest_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/net_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:blue_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/cyan"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:black_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:net_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/park_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:green_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/cyan"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:red_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:park_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/pink_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:blank_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/pink"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:pink_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/quick_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:blue_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/yellow"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:yellow_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:quick_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/red_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:blank_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/red"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:red_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/repeat_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:red_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/yellow"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:black_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:repeat_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/safari_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:green_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/green"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:yellow_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:safari_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/sport_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:red_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:white_apricorn_bits"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:white_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:sport_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/timer_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:black_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/white"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:red_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:timer_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/ultra_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:black_ball_lid"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:yellow_apricorn_bits"
-    }
-    {
-      count: 1
-      item: "createmonballsoverhaul:yellow_apricorn_bits"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:ultra_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/white_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:blank_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/white"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:white_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>allthemons/yellow_ball_lid</summary>

```diff
-{
-  type: "pneumaticcraft:pressure_chamber"
-  inputs: [
-    {
-      count: 1
-      item: "createmonballsoverhaul:blank_ball_lid"
-    }
-    {
-      count: 1
-      tag: "c:dyes/yellow"
-    }
-  ]
-  pressure: 3.5
-  results: [
-    {
-      count: 1
-      id: "createmonballsoverhaul:yellow_ball_lid"
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/alloy_smelting/brass_ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:alloy_smelting"
-  energy: 4800
-  experience: 0.3
-  inputs: [
-    {
-      count: 3
-      tag: "c:ingots/copper"
-    }
-    {
-      count: 1
-      tag: "c:ingots/zinc"
-    }
-  ]
-  output: {
-    count: 4
-    id: "alltheores:brass_ingot"
-  }
-}

```


</details>

<details>
<summary>alltheores/alloy_smelting/bronze_ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:alloy_smelting"
-  energy: 4800
-  experience: 0.3
-  inputs: [
-    {
-      count: 3
-      tag: "c:ingots/copper"
-    }
-    {
-      count: 1
-      tag: "c:ingots/tin"
-    }
-  ]
-  output: {
-    count: 4
-    id: "alltheores:bronze_ingot"
-  }
-}

```


</details>

<details>
<summary>alltheores/alloy_smelting/constantan_ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:alloy_smelting"
-  energy: 4800
-  experience: 0.3
-  inputs: [
-    {
-      count: 1
-      tag: "c:ingots/copper"
-    }
-    {
-      count: 1
-      tag: "c:ingots/nickel"
-    }
-  ]
-  output: {
-    count: 2
-    id: "alltheores:constantan_ingot"
-  }
-}

```


</details>

<details>
<summary>alltheores/alloy_smelting/electrum_ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:alloy_smelting"
-  energy: 4800
-  experience: 0.3
-  inputs: [
-    {
-      count: 1
-      tag: "c:ingots/gold"
-    }
-    {
-      count: 1
-      tag: "c:ingots/silver"
-    }
-  ]
-  output: {
-    count: 2
-    id: "alltheores:electrum_ingot"
-  }
-}

```


</details>

<details>
<summary>alltheores/alloy_smelting/enderium_ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:alloy_smelting"
-  energy: 4800
-  experience: 0.3
-  inputs: [
-    {
-      count: 3
-      tag: "c:ingots/lead"
-    }
-    {
-      count: 1
-      tag: "c:ingots/platinum"
-    }
-    {
-      count: 2
-      tag: "c:ender_pearls"
-    }
-  ]
-  output: {
-    count: 4
-    id: "alltheores:enderium_ingot"
-  }
-}

```


</details>

<details>
<summary>alltheores/alloy_smelting/invar_ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:alloy_smelting"
-  energy: 4800
-  experience: 0.3
-  inputs: [
-    {
-      count: 2
-      tag: "c:ingots/iron"
-    }
-    {
-      count: 1
-      tag: "c:ingots/nickel"
-    }
-  ]
-  output: {
-    count: 3
-    id: "alltheores:invar_ingot"
-  }
-}

```


</details>

<details>
<summary>alltheores/alloy_smelting/lumium_ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:alloy_smelting"
-  energy: 4800
-  experience: 0.3
-  inputs: [
-    {
-      count: 4
-      tag: "c:dusts/glowstone"
-    }
-    {
-      count: 1
-      tag: "c:ingots/silver"
-    }
-    {
-      count: 3
-      tag: "c:ingots/tin"
-    }
-  ]
-  output: {
-    count: 4
-    id: "alltheores:lumium_ingot"
-  }
-}

```


</details>

<details>
<summary>alltheores/alloy_smelting/signalum_ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:alloy_smelting"
-  energy: 4800
-  experience: 0.3
-  inputs: [
-    {
-      count: 3
-      tag: "c:ingots/copper"
-    }
-    {
-      count: 1
-      tag: "c:ingots/silver"
-    }
-    {
-      count: 4
-      tag: "c:dusts/redstone"
-    }
-  ]
-  output: {
-    count: 4
-    id: "alltheores:signalum_ingot"
-  }
-}

```


</details>

<details>
<summary>alltheores/alloy_smelting/steel_ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:alloy_smelting"
-  energy: 4800
-  experience: 0.3
-  inputs: [
-    {
-      count: 1
-      tag: "c:ingots/iron"
-    }
-    {
-      count: 1
-      tag: "minecraft:coals"
-    }
-  ]
-  output: {
-    count: 1
-    id: "alltheores:steel_ingot"
-  }
-}

```


</details>

<details>
<summary>alltheores/sag_milling/aluminum/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/aluminum"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:aluminum_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/aluminum/ore</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:ores/aluminum"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:raw_aluminum"
-      }
-    }
-    {
-      chance: 0.33
-      item: {
-        count: 1
-        id: "alltheores:raw_aluminum"
-      }
-    }
-    {
-      chance: 0.15
-      item: {
-        count: 1
-        id: "minecraft:cobblestone"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/aluminum/raw</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:raw_materials/aluminum"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:aluminum_dust"
-      }
-    }
-    {
-      chance: 0.25
-      item: {
-        count: 1
-        id: "alltheores:aluminum_dust"
-      }
-    }
-    {
-      chance: 0.05
-      item: {
-        count: 1
-        id: "alltheores:zinc_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/brass/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/brass"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:brass_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/bronze/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/bronze"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:bronze_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/cinnabar/gem</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:gems/cinnabar"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:cinnabar_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/cinnabar/ore</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:ores/cinnabar"
-  }
-  outputs: [
-    {
-      item: {
-        count: 6
-        id: "alltheores:cinnabar"
-      }
-    }
-    {
-      chance: 0.15
-      item: {
-        count: 1
-        id: "minecraft:cobblestone"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/constantan/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/constantan"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:constantan_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/electrum/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/electrum"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:electrum_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/enderium/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/enderium"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:enderium_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/fluorite/gem</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:gems/fluorite"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:fluorite_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/fluorite/ore</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:ores/fluorite"
-  }
-  outputs: [
-    {
-      item: {
-        count: 6
-        id: "alltheores:fluorite"
-      }
-    }
-    {
-      chance: 0.15
-      item: {
-        count: 1
-        id: "minecraft:cobblestone"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/invar/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/invar"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:invar_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/iridium/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/iridium"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:iridium_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/iridium/ore</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:ores/iridium"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:raw_iridium"
-      }
-    }
-    {
-      chance: 0.33
-      item: {
-        count: 1
-        id: "alltheores:raw_iridium"
-      }
-    }
-    {
-      chance: 0.15
-      item: {
-        count: 1
-        id: "minecraft:cobblestone"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/iridium/raw</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:raw_materials/iridium"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:iridium_dust"
-      }
-    }
-    {
-      chance: 0.25
-      item: {
-        count: 1
-        id: "alltheores:iridium_dust"
-      }
-    }
-    {
-      chance: 0.3
-      item: {
-        count: 1
-        id: "alltheores:osmium_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/lead/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/lead"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:lead_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/lead/ore</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:ores/lead"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:raw_lead"
-      }
-    }
-    {
-      chance: 0.33
-      item: {
-        count: 1
-        id: "alltheores:raw_lead"
-      }
-    }
-    {
-      chance: 0.15
-      item: {
-        count: 1
-        id: "minecraft:cobblestone"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/lead/raw</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:raw_materials/lead"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:lead_dust"
-      }
-    }
-    {
-      chance: 0.25
-      item: {
-        count: 1
-        id: "alltheores:lead_dust"
-      }
-    }
-    {
-      chance: 0.45
-      item: {
-        count: 1
-        id: "alltheores:silver_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/lumium/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/lumium"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:lumium_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/nickel/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/nickel"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:nickel_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/nickel/ore</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:ores/nickel"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:raw_nickel"
-      }
-    }
-    {
-      chance: 0.33
-      item: {
-        count: 1
-        id: "alltheores:raw_nickel"
-      }
-    }
-    {
-      chance: 0.15
-      item: {
-        count: 1
-        id: "minecraft:cobblestone"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/nickel/raw</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:raw_materials/nickel"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:nickel_dust"
-      }
-    }
-    {
-      chance: 0.25
-      item: {
-        count: 1
-        id: "alltheores:nickel_dust"
-      }
-    }
-    {
-      chance: 0.25
-      item: {
-        count: 1
-        id: "alltheores:platinum_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/osmium/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/osmium"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:osmium_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/osmium/ore</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:ores/osmium"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:raw_osmium"
-      }
-    }
-    {
-      chance: 0.33
-      item: {
-        count: 1
-        id: "alltheores:raw_osmium"
-      }
-    }
-    {
-      chance: 0.15
-      item: {
-        count: 1
-        id: "minecraft:cobblestone"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/osmium/raw</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:raw_materials/osmium"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:osmium_dust"
-      }
-    }
-    {
-      chance: 0.25
-      item: {
-        count: 1
-        id: "alltheores:osmium_dust"
-      }
-    }
-    {
-      chance: 0.3
-      item: {
-        count: 1
-        id: "alltheores:iridium_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/peridot/gem</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:gems/peridot"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:peridot_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/peridot/ore</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:ores/peridot"
-  }
-  outputs: [
-    {
-      item: {
-        count: 6
-        id: "alltheores:peridot"
-      }
-    }
-    {
-      chance: 0.15
-      item: {
-        count: 1
-        id: "minecraft:cobblestone"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/platinum/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/platinum"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:platinum_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/platinum/ore</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:ores/platinum"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:raw_platinum"
-      }
-    }
-    {
-      chance: 0.33
-      item: {
-        count: 1
-        id: "alltheores:raw_platinum"
-      }
-    }
-    {
-      chance: 0.15
-      item: {
-        count: 1
-        id: "minecraft:cobblestone"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/platinum/raw</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:raw_materials/platinum"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:platinum_dust"
-      }
-    }
-    {
-      chance: 0.25
-      item: {
-        count: 1
-        id: "alltheores:platinum_dust"
-      }
-    }
-    {
-      chance: 0.1
-      item: {
-        count: 1
-        id: "alltheores:gold_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/ruby/gem</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:gems/ruby"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:ruby_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/ruby/ore</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:ores/ruby"
-  }
-  outputs: [
-    {
-      item: {
-        count: 6
-        id: "alltheores:ruby"
-      }
-    }
-    {
-      chance: 0.15
-      item: {
-        count: 1
-        id: "minecraft:cobblestone"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/salt/ore</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ores/salt"
-  }
-  outputs: [
-    {
-      item: {
-        count: 6
-        id: "alltheores:salt"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/sapphire/gem</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:gems/sapphire"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:sapphire_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/sapphire/ore</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:ores/sapphire"
-  }
-  outputs: [
-    {
-      item: {
-        count: 6
-        id: "alltheores:sapphire"
-      }
-    }
-    {
-      chance: 0.15
-      item: {
-        count: 1
-        id: "minecraft:cobblestone"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/signalum/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/signalum"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:signalum_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/silver/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/silver"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:silver_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/silver/ore</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:ores/silver"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:raw_silver"
-      }
-    }
-    {
-      chance: 0.33
-      item: {
-        count: 1
-        id: "alltheores:raw_silver"
-      }
-    }
-    {
-      chance: 0.15
-      item: {
-        count: 1
-        id: "minecraft:cobblestone"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/silver/raw</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:raw_materials/silver"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:silver_dust"
-      }
-    }
-    {
-      chance: 0.25
-      item: {
-        count: 1
-        id: "alltheores:silver_dust"
-      }
-    }
-    {
-      chance: 0.45
-      item: {
-        count: 1
-        id: "alltheores:lead_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/steel/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/steel"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:steel_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/sulfur/ore</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ores/sulfur"
-  }
-  outputs: [
-    {
-      item: {
-        count: 6
-        id: "alltheores:sulfur"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/tin/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/tin"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:tin_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/tin/ore</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:ores/tin"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:raw_tin"
-      }
-    }
-    {
-      chance: 0.33
-      item: {
-        count: 1
-        id: "alltheores:raw_tin"
-      }
-    }
-    {
-      chance: 0.15
-      item: {
-        count: 1
-        id: "minecraft:cobblestone"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/tin/raw</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:raw_materials/tin"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:tin_dust"
-      }
-    }
-    {
-      chance: 0.25
-      item: {
-        count: 1
-        id: "alltheores:tin_dust"
-      }
-    }
-    {
-      chance: 0.2
-      item: {
-        count: 1
-        id: "alltheores:iron_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/uranium/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/uranium"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:uranium_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/uranium/ore</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:ores/uranium"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:raw_uranium"
-      }
-    }
-    {
-      chance: 0.33
-      item: {
-        count: 1
-        id: "alltheores:raw_uranium"
-      }
-    }
-    {
-      chance: 0.15
-      item: {
-        count: 1
-        id: "minecraft:cobblestone"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/uranium/raw</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:raw_materials/uranium"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:uranium_dust"
-      }
-    }
-    {
-      chance: 0.25
-      item: {
-        count: 1
-        id: "alltheores:uranium_dust"
-      }
-    }
-    {
-      chance: 0.5
-      item: {
-        count: 1
-        id: "alltheores:lead_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/zinc/ingot</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  bonus: "none"
-  energy: 2400
-  input: {
-    tag: "c:ingots/zinc"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:zinc_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/zinc/ore</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:ores/zinc"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:raw_zinc"
-      }
-    }
-    {
-      chance: 0.33
-      item: {
-        count: 1
-        id: "alltheores:raw_zinc"
-      }
-    }
-    {
-      chance: 0.15
-      item: {
-        count: 1
-        id: "minecraft:cobblestone"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>alltheores/sag_milling/zinc/raw</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio_machines"
-        }
-      ]
-    }
-  ]
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:raw_materials/zinc"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "alltheores:zinc_dust"
-      }
-    }
-    {
-      chance: 0.25
-      item: {
-        count: 1
-        id: "alltheores:zinc_dust"
-      }
-    }
-    {
-      chance: 0.05
-      item: {
-        count: 1
-        id: "alltheores:aluminum_dust"
-      }
-    }
-  ]
-}

```


</details>

<details>
<summary>botanypots/mysticalcustomization/kivi_seeds</summary>

```diff
-{
-  bookshelf:load_conditions: [
-    {
-      type: "bookshelf:block_exists"
-      values: [
-        "mysticalagriculture:kivi_crop"
-      ]
-    }
-    {
-      type: "bookshelf:item_exists"
-      values: [
-        "mysticalagriculture:kivi_seeds"
-      ]
-    }
-  ]
-  type: "botanypotsmystical:mystical_crop"
-  crop_id: "mysticalcustomization:kivi"
-}

```


</details>

<details>
<summary>botanypots/mysticalcustomization/xychorium_gem_seeds</summary>

```diff
-{
-  bookshelf:load_conditions: [
-    {
-      type: "bookshelf:block_exists"
-      values: [
-        "mysticalagriculture:xychorium_gem_crop"
-      ]
-    }
-    {
-      type: "bookshelf:item_exists"
-      values: [
-        "mysticalagriculture:xychorium_gem_seeds"
-      ]
-    }
-  ]
-  type: "botanypotsmystical:mystical_crop"
-  crop_id: "mysticalcustomization:xychorium_gem"
-}

```


</details>

<details>
<summary>enderio/alloy_smelting/cake_base</summary>

```diff
-{
-  type: "enderio:alloy_smelting"
-  energy: 2000
-  experience: 0.3
-  inputs: [
-    {
-      count: 3
-      item: "enderio:flour"
-    }
-    {
-      count: 1
-      item: "minecraft:egg"
-    }
-  ]
-  output: {
-    count: 2
-    id: "enderio:cake_base"
-  }
-}

```


</details>

<details>
<summary>enderio/alloy_smelting/clayed_glowstone</summary>

```diff
-{
-  type: "enderio:alloy_smelting"
-  energy: 3200
-  experience: 0.3
-  inputs: [
-    {
-      count: 1
-      tag: "c:dusts/glowstone"
-    }
-    {
-      count: 1
-      item: "minecraft:clay_ball"
-    }
-  ]
-  output: {
-    count: 2
-    id: "enderio:clayed_glowstone"
-  }
-}

```


</details>

<details>
<summary>enderio/alloy_smelting/cookie</summary>

```diff
-{
-  type: "enderio:alloy_smelting"
-  energy: 2000
-  experience: 0.3
-  inputs: [
-    {
-      count: 1
-      item: "enderio:flour"
-    }
-    {
-      count: 1
-      item: "minecraft:cocoa_beans"
-    }
-  ]
-  output: {
-    count: 8
-    id: "minecraft:cookie"
-  }
-}

```


</details>

<details>
<summary>enderio/alloy_smelting/copper_alloy_ingot</summary>

```diff
-{
-  type: "enderio:alloy_smelting"
-  energy: 3200
-  experience: 0.3
-  inputs: [
-    {
-      count: 1
-      tag: "c:ingots/copper"
-    }
-    {
-      count: 1
-      tag: "c:silicon"
-    }
-  ]
-  output: {
-    count: 1
-    id: "enderio:copper_alloy_ingot"
-  }
-}

```


</details>

<details>
<summary>enderio/alloy_smelting/dark_steel_upgrade_blank</summary>

```diff
-{
-  type: "enderio:alloy_smelting"
-  energy: 6400
-  experience: 0.3
-  inputs: [
-    {
-      count: 1
-      item: "enderio:dark_steel_bars"
-    }
-    {
-      count: 1
-      item: "minecraft:clay_ball"
-    }
-    {
-      count: 4
-      item: "minecraft:string"
-    }
-  ]
-  output: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_blank"
-  }
-}

```


</details>

<details>
<summary>enderio/alloy_smelting/industrial_insulation_block</summary>

```diff
-{
-  type: "enderio:alloy_smelting"
-  energy: 3200
-  experience: 0.5
-  inputs: [
-    {
-      count: 1
-      tag: "c:dusts/lapis"
-    }
-    {
-      count: 1
-      tag: "minecraft:wool"
-    }
-    {
-      count: 1
-      tag: "enderio:insulation_metals"
-    }
-  ]
-  output: {
-    count: 1
-    id: "enderio:industrial_insulation_block"
-  }
-}

```


</details>

<details>
<summary>enderio/alloy_smelting/nethercotta</summary>

```diff
-{
-  type: "enderio:alloy_smelting"
-  energy: 7600
-  experience: 0.3
-  inputs: [
-    {
-      count: 1
-      tag: "c:bricks/nether"
-    }
-    {
-      count: 4
-      item: "minecraft:nether_wart"
-    }
-    {
-      count: 6
-      item: "minecraft:clay_ball"
-    }
-  ]
-  output: {
-    count: 1
-    id: "enderio:nethercotta"
-  }
-}

```


</details>

<details>
<summary>enderio/alloy_smelting/organic_black_dye</summary>

```diff
-{
-  type: "enderio:alloy_smelting"
-  energy: 1000
-  experience: 0.3
-  inputs: [
-    {
-      count: 1
-      tag: "c:dusts/coal"
-    }
-    {
-      count: 1
-      item: "minecraft:egg"
-    }
-  ]
-  output: {
-    count: 1
-    id: "enderio:organic_black_dye"
-  }
-}

```


</details>

<details>
<summary>enderio/alloy_smelting/organic_black_dye_double</summary>

```diff
-{
-  type: "enderio:alloy_smelting"
-  energy: 1600
-  experience: 0.3
-  inputs: [
-    {
-      count: 2
-      tag: "c:dusts/coal"
-    }
-    {
-      count: 1
-      tag: "c:slimeballs"
-    }
-  ]
-  output: {
-    count: 2
-    id: "enderio:organic_black_dye"
-  }
-}

```


</details>

<details>
<summary>enderio/alloy_smelting/organic_brown_dye_twigs</summary>

```diff
-{
-  type: "enderio:alloy_smelting"
-  energy: 1000
-  experience: 0.3
-  inputs: [
-    {
-      count: 6
-      item: "enderio:plant_matter_brown"
-    }
-    {
-      count: 1
-      item: "minecraft:egg"
-    }
-  ]
-  output: {
-    count: 1
-    id: "enderio:organic_brown_dye"
-  }
-}

```


</details>

<details>
<summary>enderio/alloy_smelting/organic_brown_dye_twigs_double</summary>

```diff
-{
-  type: "enderio:alloy_smelting"
-  energy: 1600
-  experience: 0.3
-  inputs: [
-    {
-      count: 12
-      item: "enderio:plant_matter_brown"
-    }
-    {
-      count: 1
-      tag: "c:slimeballs"
-    }
-  ]
-  output: {
-    count: 2
-    id: "enderio:organic_brown_dye"
-  }
-}

```


</details>

<details>
<summary>enderio/alloy_smelting/organic_green_dye_clippings</summary>

```diff
-{
-  type: "enderio:alloy_smelting"
-  energy: 1000
-  experience: 0.3
-  inputs: [
-    {
-      count: 6
-      item: "enderio:plant_matter_green"
-    }
-    {
-      count: 1
-      item: "minecraft:egg"
-    }
-  ]
-  output: {
-    count: 1
-    id: "enderio:organic_green_dye"
-  }
-}

```


</details>

<details>
<summary>enderio/alloy_smelting/organic_green_dye_double_clippings</summary>

```diff
-{
-  type: "enderio:alloy_smelting"
-  energy: 1600
-  experience: 0.3
-  inputs: [
-    {
-      count: 12
-      item: "enderio:plant_matter_green"
-    }
-    {
-      count: 1
-      tag: "c:slimeballs"
-    }
-  ]
-  output: {
-    count: 2
-    id: "enderio:organic_green_dye"
-  }
-}

```


</details>

<details>
<summary>enderio/black_paper</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "minecraft:paper"
-    }
-    {
-      tag: "c:dyes/black"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:black_paper"
-  }
-}

```


</details>

<details>
<summary>enderio/cake</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    C: {
-      item: "enderio:cake_base"
-    }
-    M: {
-      item: "minecraft:milk_bucket"
-    }
-    S: {
-      item: "minecraft:sugar"
-    }
-  }
-  pattern: [
-    "MMM"
-    "SCS"
-  ]
-  result: {
-    count: 1
-    id: "minecraft:cake"
-  }
-}

```


</details>

<details>
<summary>enderio/copper_alloy_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    I: {
-      item: "enderio:copper_alloy_ingot"
-    }
-  }
-  pattern: [
-    "III"
-    "III"
-    "III"
-  ]
-  result: {
-    count: 1
-    id: "enderio:copper_alloy_block"
-  }
-}

```


</details>

<details>
<summary>enderio/copper_alloy_grinding_ball</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    I: {
-      tag: "c:ingots/copper_alloy"
-    }
-  }
-  pattern: [
-    " I "
-    "III"
-    " I "
-  ]
-  result: {
-    count: 24
-    id: "enderio:copper_alloy_grinding_ball"
-  }
-}

```


</details>

<details>
<summary>enderio/copper_alloy_ingot</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:copper_alloy_block"
-    }
-  ]
-  result: {
-    count: 9
-    id: "enderio:copper_alloy_ingot"
-  }
-}

```


</details>

<details>
<summary>enderio/copper_alloy_nugget</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:copper_alloy_ingot"
-    }
-  ]
-  result: {
-    count: 9
-    id: "enderio:copper_alloy_nugget"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_axe</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "equipment"
-  key: {
-    I: {
-      tag: "c:ingots/dark_steel"
-    }
-    S: {
-      tag: "c:rods/wooden"
-    }
-  }
-  pattern: [
-    "II"
-    "IS"
-    " S"
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_axe"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_boots</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "equipment"
-  key: {
-    I: {
-      tag: "c:ingots/dark_steel"
-    }
-  }
-  pattern: [
-    "I I"
-    "I I"
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_boots"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_chestplate</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "equipment"
-  key: {
-    I: {
-      tag: "c:ingots/dark_steel"
-    }
-  }
-  pattern: [
-    "I I"
-    "III"
-    "III"
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_chestplate"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_helmet</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "equipment"
-  key: {
-    I: {
-      tag: "c:ingots/dark_steel"
-    }
-  }
-  pattern: [
-    "III"
-    "I I"
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_helmet"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_leggings</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "equipment"
-  key: {
-    I: {
-      tag: "c:ingots/dark_steel"
-    }
-  }
-  pattern: [
-    "III"
-    "I I"
-    "I I"
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_leggings"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_pickaxe</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "equipment"
-  key: {
-    I: {
-      tag: "c:ingots/dark_steel"
-    }
-    S: {
-      tag: "c:rods/wooden"
-    }
-  }
-  pattern: [
-    "III"
-    " S "
-    " S "
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_pickaxe"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_direct</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    B: {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    E: {
-      tag: "c:ender_pearls"
-    }
-    I: {
-      item: "enderio:vibrant_alloy_ingot"
-    }
-    N: {
-      item: "enderio:vibrant_alloy_nugget"
-    }
-  }
-  pattern: [
-    "NIN"
-    "IEI"
-    "NBN"
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_direct"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_elytra</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      item: "minecraft:elytra"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_elytra"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_empowered_1</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      item: "enderio:vibrant_crystal"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_empowered_1"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_empowered_2</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      item: "enderio:basic_capacitor"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_empowered_2"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_empowered_3</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      item: "enderio:double_layer_capacitor"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_empowered_3"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_empowered_4</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      item: "enderio:octadic_capacitor"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_empowered_4"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_fork</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      item: "minecraft:diamond_hoe"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_fork"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_glider</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      item: "enderio:glider"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_glider"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_jump_1</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      tag: "c:gears/iron"
-    }
-    {
-      item: "minecraft:piston"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_jump_1"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_jump_2</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      item: "enderio:energized_gear"
-    }
-    {
-      item: "minecraft:piston"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_jump_2"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_nightvision</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      item: "minecraft:golden_carrot"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_nightvision"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_penetration_1</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      item: "minecraft:gunpowder"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_penetration_1"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_penetration_2</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      item: "minecraft:creeper_head"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_penetration_2"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_solar_1</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      item: "enderio:energetic_photovoltaic_module"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_solar_1"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_solar_2</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      item: "enderio:pulsating_photovoltaic_module"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_solar_2"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_solar_3</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      item: "enderio:vibrant_photovoltaic_module"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_solar_3"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_speedboost1</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      tag: "c:gears/iron"
-    }
-    {
-      item: "minecraft:sugar"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_speedboost1"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_speedboost2</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      item: "enderio:energized_gear"
-    }
-    {
-      item: "minecraft:sugar"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_speedboost2"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_speedboost3</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      item: "enderio:vibrant_gear"
-    }
-    {
-      item: "minecraft:sugar"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_speedboost3"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_spoon</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      item: "minecraft:diamond_shovel"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_spoon"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_step_assist</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    B: {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    I: {
-      item: "minecraft:brick"
-    }
-  }
-  pattern: [
-    "  I"
-    " II"
-    "IIB"
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_step_assist"
-  }
-}

```


</details>

<details>
<summary>enderio/dark_steel_upgrade_travel</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "enderio:dark_steel_upgrade_blank"
-    }
-    {
-      item: "enderio:staff_of_travelling"
-    }
-  ]
-  result: {
-    count: 1
-    id: "enderio:dark_steel_upgrade_travel"
-  }
-}

```


</details>

<details>
<summary>enderio/item.enderio.copper_alloy_nugget_to_ingot</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    N: {
-      item: "enderio:copper_alloy_nugget"
-    }
-  }
-  pattern: [
-    "NNN"
-    "NNN"
-    "NNN"
-  ]
-  result: {
-    count: 1
-    id: "enderio:copper_alloy_ingot"
-  }
-}

```


</details>

<details>
<summary>enderio/sag_milling/wheat</summary>

```diff
-{
-  type: "enderio:sag_milling"
-  energy: 2400
-  input: {
-    tag: "c:crops/wheat"
-  }
-  outputs: [
-    {
-      item: {
-        count: 1
-        id: "enderio:flour"
-      }
-    }
-    {
-      chance: 0.2
-      item: {
-        count: 1
-        tag: "c:seeds/wheat"
-      }
-      optional: true
-    }
-  ]
-}

```


</details>

<details>
<summary>eternal_starlight/chiseled_grimstone_from_grimstone_bricks_stonecutting</summary>

```diff
-{
-  type: "minecraft:stonecutting"
-  ingredient: {
-    item: "eternal_starlight:grimstone_bricks"
-  }
-  result: {
-    count: 1
-    id: "eternal_starlight:chiseled_grimstone"
-  }
-}

```


</details>

<details>
<summary>eternal_starlight/chiseled_grimstone_from_polished_grimstone_stonecutting</summary>

```diff
-{
-  type: "minecraft:stonecutting"
-  ingredient: {
-    item: "eternal_starlight:polished_grimstone"
-  }
-  result: {
-    count: 1
-    id: "eternal_starlight:chiseled_grimstone"
-  }
-}

```


</details>

<details>
<summary>eternal_starlight/chiseled_polished_abysslate_from_polished_abysslate_bricks_stonecutting</summary>

```diff
-{
-  type: "minecraft:stonecutting"
-  ingredient: {
-    item: "eternal_starlight:polished_abysslate_bricks"
-  }
-  result: {
-    count: 1
-    id: "eternal_starlight:chiseled_polished_abysslate"
-  }
-}

```


</details>

<details>
<summary>eternal_starlight/chiseled_polished_cryobysslate_from_polished_cryobysslate_bricks_stonecutting</summary>

```diff
-{
-  type: "minecraft:stonecutting"
-  ingredient: {
-    item: "eternal_starlight:polished_cryobysslate_bricks"
-  }
-  result: {
-    count: 1
-    id: "eternal_starlight:chiseled_polished_cryobysslate"
-  }
-}

```


</details>

<details>
<summary>eternal_starlight/chiseled_polished_doomeden_bricks_from_polished_doomeden_bricks_stonecutting</summary>

```diff
-{
-  type: "minecraft:stonecutting"
-  ingredient: {
-    item: "eternal_starlight:polished_doomeden_bricks"
-  }
-  result: {
-    count: 1
-    id: "eternal_starlight:chiseled_polished_doomeden_bricks"
-  }
-}

```


</details>

<details>
<summary>eternal_starlight/chiseled_polished_thermabysslate_from_polished_thermabysslate_bricks_stonecutting</summary>

```diff
-{
-  type: "minecraft:stonecutting"
-  ingredient: {
-    item: "eternal_starlight:polished_thermabysslate_bricks"
-  }
-  result: {
-    count: 1
-    id: "eternal_starlight:chiseled_polished_thermabysslate"
-  }
-}

```


</details>

<details>
<summary>eternal_starlight/chiseled_radianite_from_polished_radianite_stonecutting</summary>

```diff
-{
-  type: "minecraft:stonecutting"
-  ingredient: {
-    item: "eternal_starlight:polished_radianite"
-  }
-  result: {
-    count: 1
-    id: "eternal_starlight:chiseled_radianite"
-  }
-}

```


</details>

<details>
<summary>eternal_starlight/chiseled_radianite_from_radianite_bricks_stonecutting</summary>

```diff
-{
-  type: "minecraft:stonecutting"
-  ingredient: {
-    item: "eternal_starlight:radianite_bricks"
-  }
-  result: {
-    count: 1
-    id: "eternal_starlight:chiseled_radianite"
-  }
-}

```


</details>

<details>
<summary>eternal_starlight/chiseled_springstone_from_polished_springstone_stonecutting</summary>

```diff
-{
-  type: "minecraft:stonecutting"
-  ingredient: {
-    item: "eternal_starlight:polished_springstone"
-  }
-  result: {
-    count: 1
-    id: "eternal_starlight:chiseled_springstone"
-  }
-}

```


</details>

<details>
<summary>eternal_starlight/chiseled_springstone_from_springstone_bricks_stonecutting</summary>

```diff
-{
-  type: "minecraft:stonecutting"
-  ingredient: {
-    item: "eternal_starlight:springstone_bricks"
-  }
-  result: {
-    count: 1
-    id: "eternal_starlight:chiseled_springstone"
-  }
-}

```


</details>

<details>
<summary>eternal_starlight/chiseled_twilight_sandstone_from_cut_twilight_sandstone_stonecutting</summary>

```diff
-{
-  type: "minecraft:stonecutting"
-  ingredient: {
-    item: "eternal_starlight:cut_twilight_sandstone"
-  }
-  result: {
-    count: 1
-    id: "eternal_starlight:chiseled_twilight_sandstone"
-  }
-}

```


</details>

<details>
<summary>eternal_starlight/chiseled_voidstone_from_polished_voidstone_stonecutting</summary>

```diff
-{
-  type: "minecraft:stonecutting"
-  ingredient: {
-    item: "eternal_starlight:polished_voidstone"
-  }
-  result: {
-    count: 1
-    id: "eternal_starlight:chiseled_voidstone"
-  }
-}

```


</details>

<details>
<summary>eternal_starlight/chiseled_voidstone_from_voidstone_bricks_stonecutting</summary>

```diff
-{
-  type: "minecraft:stonecutting"
-  ingredient: {
-    item: "eternal_starlight:voidstone_bricks"
-  }
-  result: {
-    count: 1
-    id: "eternal_starlight:chiseled_voidstone"
-  }
-}

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details>
<summary>Added (124)</summary>
<blockquote>

<details>
<summary>minecraft:block/c:glass_blocks/clear_glass</summary>

```diff
+[
+  "enderio:clear_glass"
+  "enderio:clear_glass_a"
+  "enderio:clear_glass_a_black"
+  "enderio:clear_glass_a_blue"
+  "enderio:clear_glass_a_brown"
+  "enderio:clear_glass_a_cyan"
+  "enderio:clear_glass_a_gray"
+  "enderio:clear_glass_a_green"
+  "enderio:clear_glass_a_light_blue"
+  "enderio:clear_glass_a_light_gray"
+  "enderio:clear_glass_a_lime"
+  "enderio:clear_glass_a_magenta"
+  "enderio:clear_glass_a_orange"
+  "enderio:clear_glass_a_pink"
+  "enderio:clear_glass_a_purple"
+  "enderio:clear_glass_a_red"
+  "enderio:clear_glass_a_white"
+  "enderio:clear_glass_a_yellow"
+  "enderio:clear_glass_black"
+  "enderio:clear_glass_blue"
+  "enderio:clear_glass_brown"
+  "enderio:clear_glass_cyan"
+  "enderio:clear_glass_d"
+  "enderio:clear_glass_d_black"
+  "enderio:clear_glass_d_blue"
+  "enderio:clear_glass_d_brown"
+  "enderio:clear_glass_d_cyan"
+  "enderio:clear_glass_d_gray"
+  "enderio:clear_glass_d_green"
+  "enderio:clear_glass_d_light_blue"
+  "enderio:clear_glass_d_light_gray"
+  "enderio:clear_glass_d_lime"
+  "enderio:clear_glass_d_magenta"
+  "enderio:clear_glass_d_orange"
+  "enderio:clear_glass_d_pink"
+  "enderio:clear_glass_d_purple"
+  "enderio:clear_glass_d_red"
+  "enderio:clear_glass_d_white"
+  "enderio:clear_glass_d_yellow"
+  "enderio:clear_glass_da"
+  "enderio:clear_glass_da_black"
+  "enderio:clear_glass_da_blue"
+  "enderio:clear_glass_da_brown"
+  "enderio:clear_glass_da_cyan"
+  "enderio:clear_glass_da_gray"
+  "enderio:clear_glass_da_green"
+  "enderio:clear_glass_da_light_blue"
+  "enderio:clear_glass_da_light_gray"
+  "enderio:clear_glass_da_lime"
+  "enderio:clear_glass_da_magenta"
+  "enderio:clear_glass_da_orange"
+  "enderio:clear_glass_da_pink"
+  "enderio:clear_glass_da_purple"
+  "enderio:clear_glass_da_red"
+  "enderio:clear_glass_da_white"
+  "enderio:clear_glass_da_yellow"
+  "enderio:clear_glass_dm"
+  "enderio:clear_glass_dm_black"
+  "enderio:clear_glass_dm_blue"
+  "enderio:clear_glass_dm_brown"
+  "enderio:clear_glass_dm_cyan"
+  "enderio:clear_glass_dm_gray"
+  "enderio:clear_glass_dm_green"
+  "enderio:clear_glass_dm_light_blue"
+  "enderio:clear_glass_dm_light_gray"
+  "enderio:clear_glass_dm_lime"
+  "enderio:clear_glass_dm_magenta"
+  "enderio:clear_glass_dm_orange"
+  "enderio:clear_glass_dm_pink"
+  "enderio:clear_glass_dm_purple"
+  "enderio:clear_glass_dm_red"
+  "enderio:clear_glass_dm_white"
+  "enderio:clear_glass_dm_yellow"
+  "enderio:clear_glass_dna"
+  "enderio:clear_glass_dna_black"
+  "enderio:clear_glass_dna_blue"
+  "enderio:clear_glass_dna_brown"
+  "enderio:clear_glass_dna_cyan"
+  "enderio:clear_glass_dna_gray"
+  "enderio:clear_glass_dna_green"
+  "enderio:clear_glass_dna_light_blue"
+  "enderio:clear_glass_dna_light_gray"
+  "enderio:clear_glass_dna_lime"
+  "enderio:clear_glass_dna_magenta"
+  "enderio:clear_glass_dna_orange"
+  "enderio:clear_glass_dna_pink"
+  "enderio:clear_glass_dna_purple"
+  "enderio:clear_glass_dna_red"
+  "enderio:clear_glass_dna_white"
+  "enderio:clear_glass_dna_yellow"
+  "enderio:clear_glass_dnm"
+  "enderio:clear_glass_dnm_black"
+  "enderio:clear_glass_dnm_blue"
+  "enderio:clear_glass_dnm_brown"
+  "enderio:clear_glass_dnm_cyan"
+  "enderio:clear_glass_dnm_gray"
+  "enderio:clear_glass_dnm_green"
+  "enderio:clear_glass_dnm_light_blue"
+  "enderio:clear_glass_dnm_light_gray"
+  "enderio:clear_glass_dnm_lime"
+  "enderio:clear_glass_dnm_magenta"
+  "enderio:clear_glass_dnm_orange"
+  "enderio:clear_glass_dnm_pink"
+  "enderio:clear_glass_dnm_purple"
+  "enderio:clear_glass_dnm_red"
+  "enderio:clear_glass_dnm_white"
+  "enderio:clear_glass_dnm_yellow"
+  "enderio:clear_glass_dnp"
+  "enderio:clear_glass_dnp_black"
+  "enderio:clear_glass_dnp_blue"
+  "enderio:clear_glass_dnp_brown"
+  "enderio:clear_glass_dnp_cyan"
+  "enderio:clear_glass_dnp_gray"
+  "enderio:clear_glass_dnp_green"
+  "enderio:clear_glass_dnp_light_blue"
+  "enderio:clear_glass_dnp_light_gray"
+  "enderio:clear_glass_dnp_lime"
+  "enderio:clear_glass_dnp_magenta"
+  "enderio:clear_glass_dnp_orange"
+  "enderio:clear_glass_dnp_pink"
+  "enderio:clear_glass_dnp_purple"
+  "enderio:clear_glass_dnp_red"
+  "enderio:clear_glass_dnp_white"
+  "enderio:clear_glass_dnp_yellow"
+  "enderio:clear_glass_dp"
+  "enderio:clear_glass_dp_black"
+  "enderio:clear_glass_dp_blue"
+  "enderio:clear_glass_dp_brown"
+  "enderio:clear_glass_dp_cyan"
+  "enderio:clear_glass_dp_gray"
+  "enderio:clear_glass_dp_green"
+  "enderio:clear_glass_dp_light_blue"
+  "enderio:clear_glass_dp_light_gray"
+  "enderio:clear_glass_dp_lime"
+  "enderio:clear_glass_dp_magenta"
+  "enderio:clear_glass_dp_orange"
+  "enderio:clear_glass_dp_pink"
+  "enderio:clear_glass_dp_purple"
+  "enderio:clear_glass_dp_red"
+  "enderio:clear_glass_dp_white"
+  "enderio:clear_glass_dp_yellow"
+  "enderio:clear_glass_e"
+  "enderio:clear_glass_e_black"
+  "enderio:clear_glass_e_blue"
+  "enderio:clear_glass_e_brown"
+  "enderio:clear_glass_e_cyan"
+  "enderio:clear_glass_e_gray"
+  "enderio:clear_glass_e_green"
+  "enderio:clear_glass_e_light_blue"
+  "enderio:clear_glass_e_light_gray"
+  "enderio:clear_glass_e_lime"
+  "enderio:clear_glass_e_magenta"
+  "enderio:clear_glass_e_orange"
+  "enderio:clear_glass_e_pink"
+  "enderio:clear_glass_e_purple"
+  "enderio:clear_glass_e_red"
+  "enderio:clear_glass_e_white"
+  "enderio:clear_glass_e_yellow"
+  "enderio:clear_glass_ea"
+  "enderio:clear_glass_ea_black"
+  "enderio:clear_glass_ea_blue"
+  "enderio:clear_glass_ea_brown"
+  "enderio:clear_glass_ea_cyan"
+  "enderio:clear_glass_ea_gray"
+  "enderio:clear_glass_ea_green"
+  "enderio:clear_glass_ea_light_blue"
+  "enderio:clear_glass_ea_light_gray"
+  "enderio:clear_glass_ea_lime"
+  "enderio:clear_glass_ea_magenta"
+  "enderio:clear_glass_ea_orange"
+  "enderio:clear_glass_ea_pink"
+  "enderio:clear_glass_ea_purple"
+  "enderio:clear_glass_ea_red"
+  "enderio:clear_glass_ea_white"
+  "enderio:clear_glass_ea_yellow"
+  "enderio:clear_glass_em"
+  "enderio:clear_glass_em_black"
+  "enderio:clear_glass_em_blue"
+  "enderio:clear_glass_em_brown"
+  "enderio:clear_glass_em_cyan"
+  "enderio:clear_glass_em_gray"
+  "enderio:clear_glass_em_green"
+  "enderio:clear_glass_em_light_blue"
+  "enderio:clear_glass_em_light_gray"
+  "enderio:clear_glass_em_lime"
+  "enderio:clear_glass_em_magenta"
+  "enderio:clear_glass_em_orange"
+  "enderio:clear_glass_em_pink"
+  "enderio:clear_glass_em_purple"
+  "enderio:clear_glass_em_red"
+  "enderio:clear_glass_em_white"
+  "enderio:clear_glass_em_yellow"
+  "enderio:clear_glass_ena"
+  "enderio:clear_glass_ena_black"
+  "enderio:clear_glass_ena_blue"
+  "enderio:clear_glass_ena_brown"
+  "enderio:clear_glass_ena_cyan"
+  "enderio:clear_glass_ena_gray"
+  "enderio:clear_glass_ena_green"
+  "enderio:clear_glass_ena_light_blue"
+  "enderio:clear_glass_ena_light_gray"
+  "enderio:clear_glass_ena_lime"
+  "enderio:clear_glass_ena_magenta"
+  "enderio:clear_glass_ena_orange"
+  "enderio:clear_glass_ena_pink"
+  "enderio:clear_glass_ena_purple"
+  "enderio:clear_glass_ena_red"
+  "enderio:clear_glass_ena_white"
+  "enderio:clear_glass_ena_yellow"
+  "enderio:clear_glass_enm"
+  "enderio:clear_glass_enm_black"
+  "enderio:clear_glass_enm_blue"
+  "enderio:clear_glass_enm_brown"
+  "enderio:clear_glass_enm_cyan"
+  "enderio:clear_glass_enm_gray"
+  "enderio:clear_glass_enm_green"
+  "enderio:clear_glass_enm_light_blue"
+  "enderio:clear_glass_enm_light_gray"
+  "enderio:clear_glass_enm_lime"
+  "enderio:clear_glass_enm_magenta"
+  "enderio:clear_glass_enm_orange"
+  "enderio:clear_glass_enm_pink"
+  "enderio:clear_glass_enm_purple"
+  "enderio:clear_glass_enm_red"
+  "enderio:clear_glass_enm_white"
+  "enderio:clear_glass_enm_yellow"
+  "enderio:clear_glass_enp"
+  "enderio:clear_glass_enp_black"
+  "enderio:clear_glass_enp_blue"
+  "enderio:clear_glass_enp_brown"
+  "enderio:clear_glass_enp_cyan"
+  "enderio:clear_glass_enp_gray"
+  "enderio:clear_glass_enp_green"
+  "enderio:clear_glass_enp_light_blue"
+  "enderio:clear_glass_enp_light_gray"
+  "enderio:clear_glass_enp_lime"
+  "enderio:clear_glass_enp_magenta"
+  "enderio:clear_glass_enp_orange"
+  "enderio:clear_glass_enp_pink"
+  "enderio:clear_glass_enp_purple"
+  "enderio:clear_glass_enp_red"
+  "enderio:clear_glass_enp_white"
+  "enderio:clear_glass_enp_yellow"
+  "enderio:clear_glass_ep"
+  "enderio:clear_glass_ep_black"
+  "enderio:clear_glass_ep_blue"
+  "enderio:clear_glass_ep_brown"
+  "enderio:clear_glass_ep_cyan"
+  "enderio:clear_glass_ep_gray"
+  "enderio:clear_glass_ep_green"
+  "enderio:clear_glass_ep_light_blue"
+  "enderio:clear_glass_ep_light_gray"
+  "enderio:clear_glass_ep_lime"
+  "enderio:clear_glass_ep_magenta"
+  "enderio:clear_glass_ep_orange"
+  "enderio:clear_glass_ep_pink"
+  "enderio:clear_glass_ep_purple"
+  "enderio:clear_glass_ep_red"
+  "enderio:clear_glass_ep_white"
+  "enderio:clear_glass_ep_yellow"
+  "enderio:clear_glass_gray"
+  "enderio:clear_glass_green"
+  "enderio:clear_glass_light_blue"
+  "enderio:clear_glass_light_gray"
+  "enderio:clear_glass_lime"
+  "enderio:clear_glass_m"
+  "enderio:clear_glass_m_black"
+  "enderio:clear_glass_m_blue"
+  "enderio:clear_glass_m_brown"
+  "enderio:clear_glass_m_cyan"
+  "enderio:clear_glass_m_gray"
+  "enderio:clear_glass_m_green"
+  "enderio:clear_glass_m_light_blue"
+  "enderio:clear_glass_m_light_gray"
+  "enderio:clear_glass_m_lime"
+  "enderio:clear_glass_m_magenta"
+  "enderio:clear_glass_m_orange"
+  "enderio:clear_glass_m_pink"
+  "enderio:clear_glass_m_purple"
+  "enderio:clear_glass_m_red"
+  "enderio:clear_glass_m_white"
+  "enderio:clear_glass_m_yellow"
+  "enderio:clear_glass_magenta"
+  "enderio:clear_glass_na"
+  "enderio:clear_glass_na_black"
+  "enderio:clear_glass_na_blue"
+  "enderio:clear_glass_na_brown"
+  "enderio:clear_glass_na_cyan"
+  "enderio:clear_glass_na_gray"
+  "enderio:clear_glass_na_green"
+  "enderio:clear_glass_na_light_blue"
+  "enderio:clear_glass_na_light_gray"
+  "enderio:clear_glass_na_lime"
+  "enderio:clear_glass_na_magenta"
+  "enderio:clear_glass_na_orange"
+  "enderio:clear_glass_na_pink"
+  "enderio:clear_glass_na_purple"
+  "enderio:clear_glass_na_red"
+  "enderio:clear_glass_na_white"
+  "enderio:clear_glass_na_yellow"
+  "enderio:clear_glass_nm"
+  "enderio:clear_glass_nm_black"
+  "enderio:clear_glass_nm_blue"
+  "enderio:clear_glass_nm_brown"
+  "enderio:clear_glass_nm_cyan"
+  "enderio:clear_glass_nm_gray"
+  "enderio:clear_glass_nm_green"
+  "enderio:clear_glass_nm_light_blue"
+  "enderio:clear_glass_nm_light_gray"
+  "enderio:clear_glass_nm_lime"
+  "enderio:clear_glass_nm_magenta"
+  "enderio:clear_glass_nm_orange"
+  "enderio:clear_glass_nm_pink"
+  "enderio:clear_glass_nm_purple"
+  "enderio:clear_glass_nm_red"
+  "enderio:clear_glass_nm_white"
+  "enderio:clear_glass_nm_yellow"
+  "enderio:clear_glass_np"
+  "enderio:clear_glass_np_black"
+  "enderio:clear_glass_np_blue"
+  "enderio:clear_glass_np_brown"
+  "enderio:clear_glass_np_cyan"
+  "enderio:clear_glass_np_gray"
+  "enderio:clear_glass_np_green"
+  "enderio:clear_glass_np_light_blue"
+  "enderio:clear_glass_np_light_gray"
+  "enderio:clear_glass_np_lime"
+  "enderio:clear_glass_np_magenta"
+  "enderio:clear_glass_np_orange"
+  "enderio:clear_glass_np_pink"
+  "enderio:clear_glass_np_purple"
+  "enderio:clear_glass_np_red"
+  "enderio:clear_glass_np_white"
+  "enderio:clear_glass_np_yellow"
+  "enderio:clear_glass_orange"
+  "enderio:clear_glass_p"
+  "enderio:clear_glass_p_black"
+  "enderio:clear_glass_p_blue"
+  "enderio:clear_glass_p_brown"
+  "enderio:clear_glass_p_cyan"
+  "enderio:clear_glass_p_gray"
+  "enderio:clear_glass_p_green"
+  "enderio:clear_glass_p_light_blue"
+  "enderio:clear_glass_p_light_gray"
+  "enderio:clear_glass_p_lime"
+  "enderio:clear_glass_p_magenta"
+  "enderio:clear_glass_p_orange"
+  "enderio:clear_glass_p_pink"
+  "enderio:clear_glass_p_purple"
+  "enderio:clear_glass_p_red"
+  "enderio:clear_glass_p_white"
+  "enderio:clear_glass_p_yellow"
+  "enderio:clear_glass_pink"
+  "enderio:clear_glass_purple"
+  "enderio:clear_glass_red"
+  "enderio:clear_glass_white"
+  "enderio:clear_glass_yellow"
+]

```


</details>

<details>
<summary>minecraft:block/c:glass_blocks/dark_fused_quartz</summary>

```diff
+[
+  "enderio:fused_quartz_d"
+  "enderio:fused_quartz_d_black"
+  "enderio:fused_quartz_d_blue"
+  "enderio:fused_quartz_d_brown"
+  "enderio:fused_quartz_d_cyan"
+  "enderio:fused_quartz_d_gray"
+  "enderio:fused_quartz_d_green"
+  "enderio:fused_quartz_d_light_blue"
+  "enderio:fused_quartz_d_light_gray"
+  "enderio:fused_quartz_d_lime"
+  "enderio:fused_quartz_d_magenta"
+  "enderio:fused_quartz_d_orange"
+  "enderio:fused_quartz_d_pink"
+  "enderio:fused_quartz_d_purple"
+  "enderio:fused_quartz_d_red"
+  "enderio:fused_quartz_d_white"
+  "enderio:fused_quartz_d_yellow"
+  "enderio:fused_quartz_da"
+  "enderio:fused_quartz_da_black"
+  "enderio:fused_quartz_da_blue"
+  "enderio:fused_quartz_da_brown"
+  "enderio:fused_quartz_da_cyan"
+  "enderio:fused_quartz_da_gray"
+  "enderio:fused_quartz_da_green"
+  "enderio:fused_quartz_da_light_blue"
+  "enderio:fused_quartz_da_light_gray"
+  "enderio:fused_quartz_da_lime"
+  "enderio:fused_quartz_da_magenta"
+  "enderio:fused_quartz_da_orange"
+  "enderio:fused_quartz_da_pink"
+  "enderio:fused_quartz_da_purple"
+  "enderio:fused_quartz_da_red"
+  "enderio:fused_quartz_da_white"
+  "enderio:fused_quartz_da_yellow"
+  "enderio:fused_quartz_dm"
+  "enderio:fused_quartz_dm_black"
+  "enderio:fused_quartz_dm_blue"
+  "enderio:fused_quartz_dm_brown"
+  "enderio:fused_quartz_dm_cyan"
+  "enderio:fused_quartz_dm_gray"
+  "enderio:fused_quartz_dm_green"
+  "enderio:fused_quartz_dm_light_blue"
+  "enderio:fused_quartz_dm_light_gray"
+  "enderio:fused_quartz_dm_lime"
+  "enderio:fused_quartz_dm_magenta"
+  "enderio:fused_quartz_dm_orange"
+  "enderio:fused_quartz_dm_pink"
+  "enderio:fused_quartz_dm_purple"
+  "enderio:fused_quartz_dm_red"
+  "enderio:fused_quartz_dm_white"
+  "enderio:fused_quartz_dm_yellow"
+  "enderio:fused_quartz_dna"
+  "enderio:fused_quartz_dna_black"
+  "enderio:fused_quartz_dna_blue"
+  "enderio:fused_quartz_dna_brown"
+  "enderio:fused_quartz_dna_cyan"
+  "enderio:fused_quartz_dna_gray"
+  "enderio:fused_quartz_dna_green"
+  "enderio:fused_quartz_dna_light_blue"
+  "enderio:fused_quartz_dna_light_gray"
+  "enderio:fused_quartz_dna_lime"
+  "enderio:fused_quartz_dna_magenta"
+  "enderio:fused_quartz_dna_orange"
+  "enderio:fused_quartz_dna_pink"
+  "enderio:fused_quartz_dna_purple"
+  "enderio:fused_quartz_dna_red"
+  "enderio:fused_quartz_dna_white"
+  "enderio:fused_quartz_dna_yellow"
+  "enderio:fused_quartz_dnm"
+  "enderio:fused_quartz_dnm_black"
+  "enderio:fused_quartz_dnm_blue"
+  "enderio:fused_quartz_dnm_brown"
+  "enderio:fused_quartz_dnm_cyan"
+  "enderio:fused_quartz_dnm_gray"
+  "enderio:fused_quartz_dnm_green"
+  "enderio:fused_quartz_dnm_light_blue"
+  "enderio:fused_quartz_dnm_light_gray"
+  "enderio:fused_quartz_dnm_lime"
+  "enderio:fused_quartz_dnm_magenta"
+  "enderio:fused_quartz_dnm_orange"
+  "enderio:fused_quartz_dnm_pink"
+  "enderio:fused_quartz_dnm_purple"
+  "enderio:fused_quartz_dnm_red"
+  "enderio:fused_quartz_dnm_white"
+  "enderio:fused_quartz_dnm_yellow"
+  "enderio:fused_quartz_dnp"
+  "enderio:fused_quartz_dnp_black"
+  "enderio:fused_quartz_dnp_blue"
+  "enderio:fused_quartz_dnp_brown"
+  "enderio:fused_quartz_dnp_cyan"
+  "enderio:fused_quartz_dnp_gray"
+  "enderio:fused_quartz_dnp_green"
+  "enderio:fused_quartz_dnp_light_blue"
+  "enderio:fused_quartz_dnp_light_gray"
+  "enderio:fused_quartz_dnp_lime"
+  "enderio:fused_quartz_dnp_magenta"
+  "enderio:fused_quartz_dnp_orange"
+  "enderio:fused_quartz_dnp_pink"
+  "enderio:fused_quartz_dnp_purple"
+  "enderio:fused_quartz_dnp_red"
+  "enderio:fused_quartz_dnp_white"
+  "enderio:fused_quartz_dnp_yellow"
+  "enderio:fused_quartz_dp"
+  "enderio:fused_quartz_dp_black"
+  "enderio:fused_quartz_dp_blue"
+  "enderio:fused_quartz_dp_brown"
+  "enderio:fused_quartz_dp_cyan"
+  "enderio:fused_quartz_dp_gray"
+  "enderio:fused_quartz_dp_green"
+  "enderio:fused_quartz_dp_light_blue"
+  "enderio:fused_quartz_dp_light_gray"
+  "enderio:fused_quartz_dp_lime"
+  "enderio:fused_quartz_dp_magenta"
+  "enderio:fused_quartz_dp_orange"
+  "enderio:fused_quartz_dp_pink"
+  "enderio:fused_quartz_dp_purple"
+  "enderio:fused_quartz_dp_red"
+  "enderio:fused_quartz_dp_white"
+  "enderio:fused_quartz_dp_yellow"
+]

```


</details>

<details>
<summary>minecraft:block/c:glass_blocks/enlighted_fused_quartz</summary>

```diff
+[
+  "enderio:fused_quartz_e"
+  "enderio:fused_quartz_e_black"
+  "enderio:fused_quartz_e_blue"
+  "enderio:fused_quartz_e_brown"
+  "enderio:fused_quartz_e_cyan"
+  "enderio:fused_quartz_e_gray"
+  "enderio:fused_quartz_e_green"
+  "enderio:fused_quartz_e_light_blue"
+  "enderio:fused_quartz_e_light_gray"
+  "enderio:fused_quartz_e_lime"
+  "enderio:fused_quartz_e_magenta"
+  "enderio:fused_quartz_e_orange"
+  "enderio:fused_quartz_e_pink"
+  "enderio:fused_quartz_e_purple"
+  "enderio:fused_quartz_e_red"
+  "enderio:fused_quartz_e_white"
+  "enderio:fused_quartz_e_yellow"
+  "enderio:fused_quartz_ea"
+  "enderio:fused_quartz_ea_black"
+  "enderio:fused_quartz_ea_blue"
+  "enderio:fused_quartz_ea_brown"
+  "enderio:fused_quartz_ea_cyan"
+  "enderio:fused_quartz_ea_gray"
+  "enderio:fused_quartz_ea_green"
+  "enderio:fused_quartz_ea_light_blue"
+  "enderio:fused_quartz_ea_light_gray"
+  "enderio:fused_quartz_ea_lime"
+  "enderio:fused_quartz_ea_magenta"
+  "enderio:fused_quartz_ea_orange"
+  "enderio:fused_quartz_ea_pink"
+  "enderio:fused_quartz_ea_purple"
+  "enderio:fused_quartz_ea_red"
+  "enderio:fused_quartz_ea_white"
+  "enderio:fused_quartz_ea_yellow"
+  "enderio:fused_quartz_em"
+  "enderio:fused_quartz_em_black"
+  "enderio:fused_quartz_em_blue"
+  "enderio:fused_quartz_em_brown"
+  "enderio:fused_quartz_em_cyan"
+  "enderio:fused_quartz_em_gray"
+  "enderio:fused_quartz_em_green"
+  "enderio:fused_quartz_em_light_blue"
+  "enderio:fused_quartz_em_light_gray"
+  "enderio:fused_quartz_em_lime"
+  "enderio:fused_quartz_em_magenta"
+  "enderio:fused_quartz_em_orange"
+  "enderio:fused_quartz_em_pink"
+  "enderio:fused_quartz_em_purple"
+  "enderio:fused_quartz_em_red"
+  "enderio:fused_quartz_em_white"
+  "enderio:fused_quartz_em_yellow"
+  "enderio:fused_quartz_ena"
+  "enderio:fused_quartz_ena_black"
+  "enderio:fused_quartz_ena_blue"
+  "enderio:fused_quartz_ena_brown"
+  "enderio:fused_quartz_ena_cyan"
+  "enderio:fused_quartz_ena_gray"
+  "enderio:fused_quartz_ena_green"
+  "enderio:fused_quartz_ena_light_blue"
+  "enderio:fused_quartz_ena_light_gray"
+  "enderio:fused_quartz_ena_lime"
+  "enderio:fused_quartz_ena_magenta"
+  "enderio:fused_quartz_ena_orange"
+  "enderio:fused_quartz_ena_pink"
+  "enderio:fused_quartz_ena_purple"
+  "enderio:fused_quartz_ena_red"
+  "enderio:fused_quartz_ena_white"
+  "enderio:fused_quartz_ena_yellow"
+  "enderio:fused_quartz_enm"
+  "enderio:fused_quartz_enm_black"
+  "enderio:fused_quartz_enm_blue"
+  "enderio:fused_quartz_enm_brown"
+  "enderio:fused_quartz_enm_cyan"
+  "enderio:fused_quartz_enm_gray"
+  "enderio:fused_quartz_enm_green"
+  "enderio:fused_quartz_enm_light_blue"
+  "enderio:fused_quartz_enm_light_gray"
+  "enderio:fused_quartz_enm_lime"
+  "enderio:fused_quartz_enm_magenta"
+  "enderio:fused_quartz_enm_orange"
+  "enderio:fused_quartz_enm_pink"
+  "enderio:fused_quartz_enm_purple"
+  "enderio:fused_quartz_enm_red"
+  "enderio:fused_quartz_enm_white"
+  "enderio:fused_quartz_enm_yellow"
+  "enderio:fused_quartz_enp"
+  "enderio:fused_quartz_enp_black"
+  "enderio:fused_quartz_enp_blue"
+  "enderio:fused_quartz_enp_brown"
+  "enderio:fused_quartz_enp_cyan"
+  "enderio:fused_quartz_enp_gray"
+  "enderio:fused_quartz_enp_green"
+  "enderio:fused_quartz_enp_light_blue"
+  "enderio:fused_quartz_enp_light_gray"
+  "enderio:fused_quartz_enp_lime"
+  "enderio:fused_quartz_enp_magenta"
+  "enderio:fused_quartz_enp_orange"
+  "enderio:fused_quartz_enp_pink"
+  "enderio:fused_quartz_enp_purple"
+  "enderio:fused_quartz_enp_red"
+  "enderio:fused_quartz_enp_white"
+  "enderio:fused_quartz_enp_yellow"
+  "enderio:fused_quartz_ep"
+  "enderio:fused_quartz_ep_black"
+  "enderio:fused_quartz_ep_blue"
+  "enderio:fused_quartz_ep_brown"
+  "enderio:fused_quartz_ep_cyan"
+  "enderio:fused_quartz_ep_gray"
+  "enderio:fused_quartz_ep_green"
+  "enderio:fused_quartz_ep_light_blue"
+  "enderio:fused_quartz_ep_light_gray"
+  "enderio:fused_quartz_ep_lime"
+  "enderio:fused_quartz_ep_magenta"
+  "enderio:fused_quartz_ep_orange"
+  "enderio:fused_quartz_ep_pink"
+  "enderio:fused_quartz_ep_purple"
+  "enderio:fused_quartz_ep_red"
+  "enderio:fused_quartz_ep_white"
+  "enderio:fused_quartz_ep_yellow"
+]

```


</details>

<details>
<summary>minecraft:block/cobblemon:mansion_bedroom_blocks</summary>

```diff
+[
+  "minecraft:blue_carpet"
+  "minecraft:cyan_carpet"
+  "minecraft:light_blue_carpet"
+  "minecraft:purple_carpet"
+  "minecraft:red_wool"
+  "minecraft:white_wool"
+]

```


</details>

<details>
<summary>minecraft:block/cobblemon:mansion_dining_blocks</summary>

```diff
+[
+  "minecraft:birch_planks"
+  "minecraft:cobblestone_stairs"
+  "minecraft:cobblestone_wall"
+  "minecraft:dark_oak_planks"
+]

```


</details>

<details>
<summary>minecraft:block/cobblemon:plaques</summary>

```diff
+[
+  "cobblemon:black_plaque"
+  "cobblemon:blue_plaque"
+  "cobblemon:brown_plaque"
+  "cobblemon:cyan_plaque"
+  "cobblemon:gray_plaque"
+  "cobblemon:green_plaque"
+  "cobblemon:light_blue_plaque"
+  "cobblemon:light_gray_plaque"
+  "cobblemon:lime_plaque"
+  "cobblemon:magenta_plaque"
+  "cobblemon:orange_plaque"
+  "cobblemon:pink_plaque"
+  "cobblemon:purple_plaque"
+  "cobblemon:red_plaque"
+  "cobblemon:white_plaque"
+  "cobblemon:yellow_plaque"
+]

```


</details>

<details>
<summary>minecraft:block/enderio:blocks_travel_when_stood_on</summary>

```diff
+[
+  "enderio:painted_travel_anchor"
+  "enderio:travel_anchor"
+]

```


</details>

<details>
<summary>minecraft:block/enderio:stem_crop</summary>

```diff
+[
+  "minecraft:melon"
+  "minecraft:pumpkin"
+]

```


</details>

<details>
<summary>minecraft:block/minecraft:mushrooms_spawnable_on</summary>

```diff
+[
+  "minecraft:coarse_dirt"
+  "minecraft:mycelium"
+  "minecraft:podzol"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:alt_stones</summary>

```diff
+[
+  "minecraft:andesite"
+  "minecraft:diorite"
+  "minecraft:granite"
+  "minecraft:sandstone"
+  "minecraft:smooth_sandstone"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:calcite</summary>

```diff
+[
+  "minecraft:calcite"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:calcite_moss</summary>

```diff
+[
+  "minecraft:calcite"
+  "minecraft:diorite"
+  "minecraft:moss_block"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:cobbled_deepslate</summary>

```diff
+[
+  "minecraft:cobbled_deepslate"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:cobblestone_snow</summary>

```diff
+[
+  "minecraft:cobbled_deepslate"
+  "minecraft:cobblestone"
+  "minecraft:powder_snow"
+  "minecraft:snow_block"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:deepslate</summary>

```diff
+[
+  "minecraft:deepslate"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:dirt_and_stone</summary>

```diff
+[
+  "#minecraft:base_stone_overworld"
+  "#minecraft:dirt"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:grass_block</summary>

```diff
+[
+  "minecraft:grass_block"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:gravel_stone</summary>

```diff
+[
+  "minecraft:gravel"
+  "minecraft:stone"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:island_ban</summary>

```diff
+[
+  "#terralith:island_ban_winter"
+  "minecraft:grass_block"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:island_ban_winter</summary>

```diff
+[
+  "minecraft:cave_air"
+  "minecraft:farmland"
+  "minecraft:moss_block"
+  "minecraft:sand"
+  "minecraft:short_grass"
+  "minecraft:stone"
+  "minecraft:sunflower"
+  "minecraft:tall_grass"
+  "minecraft:water"
+  "minecraft:wheat"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:island_blocks</summary>

```diff
+[
+  "#minecraft:base_stone_overworld"
+  "minecraft:blue_ice"
+  "minecraft:calcite"
+  "minecraft:coal_ore"
+  "minecraft:diamond_ore"
+  "minecraft:diorite"
+  "minecraft:lapis_ore"
+  "minecraft:packed_ice"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:mud</summary>

```diff
+[
+  "minecraft:mud"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:sandstones</summary>

```diff
+[
+  "minecraft:red_sandstone"
+  "minecraft:sandstone"
+  "minecraft:smooth_red_sandstone"
+  "minecraft:smooth_sandstone"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:sandy_blocks</summary>

```diff
+[
+  "#minecraft:sand"
+  "#terralith:sandstones"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:savanna_granite</summary>

```diff
+[
+  "minecraft:coarse_dirt"
+  "minecraft:dirt"
+  "minecraft:granite"
+  "minecraft:grass_block"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:savanna_terracotta</summary>

```diff
+[
+  "#minecraft:terracotta"
+  "minecraft:coarse_dirt"
+  "minecraft:dirt"
+  "minecraft:granite"
+  "minecraft:grass_block"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:soil</summary>

```diff
+[
+  "minecraft:coarse_dirt"
+  "minecraft:dirt"
+  "minecraft:grass_block"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:soil_and_gravel</summary>

```diff
+[
+  "minecraft:coarse_dirt"
+  "minecraft:dirt"
+  "minecraft:grass_block"
+  "minecraft:gravel"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:soil_stone</summary>

```diff
+[
+  "#minecraft:base_stone_overworld"
+  "minecraft:coarse_dirt"
+  "minecraft:dirt"
+  "minecraft:grass_block"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:stone</summary>

```diff
+[
+  "minecraft:stone"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:stone_diorite</summary>

```diff
+[
+  "minecraft:diorite"
+  "minecraft:stone"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:stop_emerald_geode</summary>

```diff
+[
+  "#minecraft:air"
+  "minecraft:snow_block"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:tuff</summary>

```diff
+[
+  "minecraft:tuff"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:underground_jungle_replaceable</summary>

```diff
+[
+  "#minecraft:base_stone_overworld"
+  "minecraft:mud"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:volcano_barrier</summary>

```diff
+[
+  "#minecraft:base_stone_overworld"
+  "minecraft:basalt"
+  "minecraft:blackstone"
+  "minecraft:gravel"
+  "minecraft:smooth_basalt"
+]

```


</details>

<details>
<summary>minecraft:block/terralith:volcano_blocks</summary>

```diff
+[
+  "#minecraft:base_stone_overworld"
+  "minecraft:basalt"
+  "minecraft:blackstone"
+  "minecraft:dirt"
+  "minecraft:grass_block"
+  "minecraft:gravel"
+  "minecraft:sand"
+  "minecraft:smooth_basalt"
+  "minecraft:water"
+]

```


</details>

<details>
<summary>minecraft:entity_type/eternal_starlight:affects_progression</summary>

```diff
+[
+  "eternal_starlight:freeze"
+  "eternal_starlight:shimmer_lacewing"
+  "eternal_starlight:stranghoul"
+  "eternal_starlight:tangled"
+  "eternal_starlight:thirst_walker"
+  "eternal_starlight:twilight_gaze"
+]

```


</details>

<details>
<summary>minecraft:item/cobblemon:chest_boats</summary>

```diff
+[
+  "cobblemon:apricorn_chest_boat"
+  "cobblemon:saccharine_chest_boat"
+]

```


</details>

<details>
<summary>minecraft:item/cobblemon:display_case_items</summary>

```diff
+[
+  "cobblemon:antidote"
+  "cobblemon:awakening"
+  "cobblemon:blunder_policy"
+  "cobblemon:burn_heal"
+  "cobblemon:cleanse_tag"
+  "cobblemon:dire_hit"
+  "cobblemon:elixir"
+  "cobblemon:ether"
+  "cobblemon:full_heal"
+  "cobblemon:full_restore"
+  "cobblemon:guard_spec"
+  "cobblemon:hyper_potion"
+  "cobblemon:ice_heal"
+  "cobblemon:max_elixir"
+  "cobblemon:max_ether"
+  "cobblemon:max_potion"
+  "cobblemon:paralyze_heal"
+  "cobblemon:potion"
+  "cobblemon:relic_coin_pouch"
+  "cobblemon:spell_tag"
+  "cobblemon:super_potion"
+  "cobblemon:weakness_policy"
+  "cobblemon:x_accuracy"
+  "cobblemon:x_attack"
+  "cobblemon:x_defence"
+  "cobblemon:x_special_attack"
+  "cobblemon:x_special_defence"
+  "cobblemon:x_speed"
+]

```


</details>

<details>
<summary>minecraft:item/cobblemon:item_blocks</summary>

```diff
+[
+  "cobblemon:antidote"
+  "cobblemon:awakening"
+  "cobblemon:blunder_policy"
+  "cobblemon:burn_heal"
+  "cobblemon:cleanse_tag"
+  "cobblemon:dire_hit"
+  "cobblemon:elixir"
+  "cobblemon:ether"
+  "cobblemon:full_heal"
+  "cobblemon:full_restore"
+  "cobblemon:guard_spec"
+  "cobblemon:hyper_potion"
+  "cobblemon:ice_heal"
+  "cobblemon:max_elixir"
+  "cobblemon:max_ether"
+  "cobblemon:max_potion"
+  "cobblemon:paralyze_heal"
+  "cobblemon:potion"
+  "cobblemon:relic_coin_pouch"
+  "cobblemon:spell_tag"
+  "cobblemon:super_potion"
+  "cobblemon:weakness_policy"
+  "cobblemon:x_accuracy"
+  "cobblemon:x_attack"
+  "cobblemon:x_defence"
+  "cobblemon:x_special_attack"
+  "cobblemon:x_special_defence"
+  "cobblemon:x_speed"
+]

```


</details>

<details>
<summary>minecraft:item/cobblemon:plaques</summary>

```diff
+[
+  "cobblemon:black_plaque"
+  "cobblemon:blue_plaque"
+  "cobblemon:brown_plaque"
+  "cobblemon:cyan_plaque"
+  "cobblemon:gray_plaque"
+  "cobblemon:green_plaque"
+  "cobblemon:light_blue_plaque"
+  "cobblemon:light_gray_plaque"
+  "cobblemon:lime_plaque"
+  "cobblemon:magenta_plaque"
+  "cobblemon:orange_plaque"
+  "cobblemon:pink_plaque"
+  "cobblemon:purple_plaque"
+  "cobblemon:red_plaque"
+  "cobblemon:white_plaque"
+  "cobblemon:yellow_plaque"
+]

```


</details>

<details>
<summary>minecraft:item/eternal_starlight:affects_progression</summary>

```diff
+[
+  "eternal_starlight:golem_steel_ingot"
+  "eternal_starlight:golem_steel_nugget"
+  "eternal_starlight:pungency_fruit"
+  "eternal_starlight:silver_pungency_fruit"
+]

```


</details>

<details>
<summary>minecraft:item/eternal_starlight:alloy_furnaces</summary>

```diff
+[
+  "eternal_starlight:alloy_furnace"
+  "eternal_starlight:oxidized_alloy_furnace"
+  "eternal_starlight:waxed_alloy_furnace"
+]

```


</details>

<details>
<summary>minecraft:item/terralith:spire/common_tools</summary>

```diff
+[
+  "minecraft:golden_boots"
+  "minecraft:golden_chestplate"
+  "minecraft:golden_helmet"
+  "minecraft:golden_leggings"
+  "minecraft:iron_axe"
+  "minecraft:iron_pickaxe"
+  "minecraft:iron_shovel"
+  "minecraft:iron_sword"
+]

```


</details>

<details>
<summary>minecraft:item/terralith:spire/diamond</summary>

```diff
+[
+  "minecraft:deepslate_diamond_ore"
+  "minecraft:diamond"
+  "minecraft:diamond_ore"
+]

```


</details>

<details>
<summary>minecraft:item/terralith:spire/junk_tools</summary>

```diff
+[
+  "minecraft:stone_pickaxe"
+  "minecraft:stone_sword"
+  "minecraft:wooden_axe"
+  "minecraft:wooden_hoe"
+  "minecraft:wooden_pickaxe"
+  "minecraft:wooden_shovel"
+  "minecraft:wooden_sword"
+]

```


</details>

<details>
<summary>minecraft:item/terralith:spire/leather_armor</summary>

```diff
+[
+  "minecraft:leather_boots"
+  "minecraft:leather_chestplate"
+  "minecraft:leather_horse_armor"
+  "minecraft:leather_leggings"
+]

```


</details>

<details>
<summary>minecraft:item/terralith:spire/rare_tools</summary>

```diff
+[
+  "minecraft:diamond_hoe"
+  "minecraft:diamond_shovel"
+  "minecraft:iron_axe"
+  "minecraft:iron_boots"
+  "minecraft:iron_chestplate"
+  "minecraft:iron_helmet"
+  "minecraft:iron_leggings"
+  "minecraft:iron_pickaxe"
+  "minecraft:iron_shovel"
+  "minecraft:iron_sword"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/biome_tag_villagers:villager_desert</summary>

```diff
+[
+  "#terralith:reference/desert_all"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/biome_tag_villagers:villager_jungle</summary>

```diff
+[
+  "#terralith:reference/jungle"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/biome_tag_villagers:villager_savanna</summary>

```diff
+[
+  "#terralith:reference/savanna"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/biome_tag_villagers:villager_snowy</summary>

```diff
+[
+  "#terralith:reference/temperature/frozen_all"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/biome_tag_villagers:villager_swamp</summary>

```diff
+[
+  "#terralith:reference/swamp"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/biome_tag_villagers:villager_taiga</summary>

```diff
+[
+  "#terralith:reference/taiga"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:has_wolf_variant/ashen</summary>

```diff
+[
+  "minecraft:snowy_taiga"
+  "terralith:siberian_taiga"
+  "terralith:wintry_forest"
+  "terralith:wintry_lowlands"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:has_wolf_variant/black</summary>

```diff
+[
+  "minecraft:old_growth_pine_taiga"
+  "terralith:alpine_highlands"
+  "terralith:birch_taiga"
+  "terralith:cold_shrubland"
+  "terralith:rocky_shrubland"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:has_wolf_variant/chestnut</summary>

```diff
+[
+  "minecraft:old_growth_spruce_taiga"
+  "terralith:forested_highlands"
+  "terralith:shield"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:has_wolf_variant/pale</summary>

```diff
+[
+  "minecraft:taiga"
+  "terralith:alpha_islands"
+  "terralith:alpha_islands_winter"
+  "terralith:gravel_desert"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:has_wolf_variant/rusty</summary>

```diff
+[
+  "#minecraft:is_jungle"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:has_wolf_variant/snowy</summary>

```diff
+[
+  "minecraft:grove"
+  "terralith:siberian_grove"
+  "terralith:snowy_cherry_grove"
+  "terralith:snowy_maple_forest"
+  "terralith:snowy_shield"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:has_wolf_variant/spotted</summary>

```diff
+[
+  "#minecraft:is_savanna"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:has_wolf_variant/striped</summary>

```diff
+[
+  "#minecraft:is_badlands"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:has_wolf_variant/woods</summary>

```diff
+[
+  "minecraft:forest"
+  "terralith:cloud_forest"
+  "terralith:lavender_forest"
+  "terralith:lavender_valley"
+  "terralith:temperate_highlands"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:all_terralith_biomes</summary>

```diff
+[
+  "#terralith:reference/all_with_structures"
+  "terralith:cave/frostfire_caves"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:caves</summary>

```diff
+[
+  "terralith:cave/andesite_caves"
+  "terralith:cave/deep_caves"
+  "terralith:cave/diorite_caves"
+  "terralith:cave/frostfire_caves"
+  "terralith:cave/fungal_caves"
+  "terralith:cave/granite_caves"
+  "terralith:cave/infested_caves"
+  "terralith:cave/mantle_caves"
+  "terralith:cave/thermal_caves"
+  "terralith:cave/tuff_caves"
+  "terralith:cave/underground_jungle"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:cliffs</summary>

```diff
+[
+  "terralith:basalt_cliffs"
+  "terralith:frozen_cliffs"
+  "terralith:granite_cliffs"
+  "terralith:white_cliffs"
+  "terralith:yosemite_cliffs"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/desert_outpost</summary>

```diff
+[
+  "minecraft:desert"
+  "terralith:desert_oasis"
+  "terralith:lush_desert"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/fortified_desert_village</summary>

```diff
+[
+  "minecraft:desert"
+  "terralith:desert_oasis"
+  "terralith:lush_desert"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/fortified_village</summary>

```diff
+[
+  "minecraft:meadow"
+  "minecraft:plains"
+  "minecraft:sunflower_plains"
+  "terralith:alpine_highlands"
+  "terralith:brushland"
+  "terralith:forested_highlands"
+  "terralith:temperate_highlands"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/frosted_dungeon</summary>

```diff
+[
+  "terralith:cave/frostfire_caves"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/giant_bee_hive</summary>

```diff
+[
+  "minecraft:lush_caves"
+  "terralith:cave/underground_jungle"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/igloo</summary>

```diff
+[
+  "terralith:snowy_cherry_grove"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/mage_complex</summary>

```diff
+[
+  "terralith:amethyst_rainforest"
+  "terralith:lavender_forest"
+  "terralith:moonlight_grove"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/mage_tower</summary>

```diff
+[
+  "terralith:amethyst_canyon"
+  "terralith:lavender_valley"
+  "terralith:mirage_isles"
+  "terralith:moonlight_valley"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/mining_outpost</summary>

```diff
+[
+  "terralith:cave/deep_caves"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/none</summary>

```diff
+[
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/oak_cabin</summary>

```diff
+[
+  "minecraft:lush_caves"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/old_refinery</summary>

```diff
+[
+  "terralith:cave/deep_caves"
+  "terralith:cave/fungal_caves"
+  "terralith:cave/infested_caves"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/rubble_desert</summary>

```diff
+[
+  "minecraft:desert"
+  "terralith:ancient_sands"
+  "terralith:desert_oasis"
+  "terralith:red_oasis"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/rubble_forest</summary>

```diff
+[
+  "minecraft:birch_forest"
+  "minecraft:dark_forest"
+  "minecraft:flower_forest"
+  "minecraft:forest"
+  "minecraft:old_growth_birch_forest"
+  "minecraft:windswept_forest"
+  "terralith:alpine_highlands"
+  "terralith:brushland"
+  "terralith:cloud_forest"
+  "terralith:forested_highlands"
+  "terralith:lavender_forest"
+  "terralith:moonlight_grove"
+  "terralith:temperate_highlands"
+  "terralith:valley_clearing"
+  "terralith:yosemite_lowlands"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/rubble_jungle</summary>

```diff
+[
+  "minecraft:bamboo_jungle"
+  "minecraft:jungle"
+  "minecraft:sparse_jungle"
+  "terralith:amethyst_rainforest"
+  "terralith:jungle_mountains"
+  "terralith:rocky_jungle"
+  "terralith:stony_spires"
+  "terralith:tropical_jungle"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/rubble_mesa</summary>

```diff
+[
+  "minecraft:badlands"
+  "minecraft:eroded_badlands"
+  "minecraft:wooded_badlands"
+  "terralith:arid_highlands"
+  "terralith:bryce_canyon"
+  "terralith:painted_mountains"
+  "terralith:red_oasis"
+  "terralith:savanna_badlands"
+  "terralith:savanna_slopes"
+  "terralith:white_mesa"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/rubble_mountain</summary>

```diff
+[
+  "minecraft:frozen_peaks"
+  "minecraft:jagged_peaks"
+  "minecraft:stony_peaks"
+  "terralith:basalt_cliffs"
+  "terralith:emerald_peaks"
+  "terralith:haze_mountain"
+  "terralith:jungle_mountains"
+  "terralith:rocky_mountains"
+  "terralith:yosemite_cliffs"
+  "terralith:yosemite_lowlands"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/rubble_taiga</summary>

```diff
+[
+  "minecraft:grove"
+  "minecraft:old_growth_pine_taiga"
+  "minecraft:old_growth_spruce_taiga"
+  "minecraft:snowy_taiga"
+  "minecraft:taiga"
+  "terralith:alpine_grove"
+  "terralith:birch_taiga"
+  "terralith:cold_shrubland"
+  "terralith:gravel_desert"
+  "terralith:haze_mountain"
+  "terralith:shield"
+  "terralith:shield_clearing"
+  "terralith:siberian_grove"
+  "terralith:siberian_taiga"
+  "terralith:snowy_shield"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/spire</summary>

```diff
+[
+  "minecraft:frozen_river"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/sunken_tower</summary>

```diff
+[
+  "minecraft:lush_caves"
+  "terralith:cave/underground_jungle"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/valley_lodge</summary>

```diff
+[
+  "terralith:shield_clearing"
+  "terralith:valley_clearing"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:has_structure/witch_hut</summary>

```diff
+[
+  "minecraft:swamp"
+  "terralith:ice_marsh"
+  "terralith:orchid_swamp"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:highlands</summary>

```diff
+[
+  "terralith:alpine_highlands"
+  "terralith:arid_highlands"
+  "terralith:forested_highlands"
+  "terralith:highlands"
+  "terralith:temperate_highlands"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:mystical</summary>

```diff
+[
+  "#terralith:skylands"
+  "terralith:amethyst_canyon"
+  "terralith:amethyst_rainforest"
+  "terralith:lavender_forest"
+  "terralith:lavender_valley"
+  "terralith:mirage_isles"
+  "terralith:moonlight_grove"
+  "terralith:moonlight_valley"
+  "terralith:painted_mountains"
+  "terralith:scarlet_mountains"
+  "terralith:warped_mesa"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:oases</summary>

```diff
+[
+  "terralith:desert_oasis"
+  "terralith:red_oasis"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:rare_island</summary>

```diff
+[
+  "terralith:alpha_islands"
+  "terralith:alpha_islands_winter"
+  "terralith:mirage_isles"
+  "terralith:warped_mesa"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/all_with_structures</summary>

```diff
+[
+  "terralith:alpha_islands"
+  "terralith:alpha_islands_winter"
+  "terralith:alpine_grove"
+  "terralith:alpine_highlands"
+  "terralith:amethyst_canyon"
+  "terralith:amethyst_rainforest"
+  "terralith:ancient_sands"
+  "terralith:arid_highlands"
+  "terralith:ashen_savanna"
+  "terralith:basalt_cliffs"
+  "terralith:birch_taiga"
+  "terralith:blooming_plateau"
+  "terralith:blooming_valley"
+  "terralith:brushland"
+  "terralith:bryce_canyon"
+  "terralith:caldera"
+  "terralith:cave/andesite_caves"
+  "terralith:cave/deep_caves"
+  "terralith:cave/diorite_caves"
+  "terralith:cave/fungal_caves"
+  "terralith:cave/granite_caves"
+  "terralith:cave/infested_caves"
+  "terralith:cave/mantle_caves"
+  "terralith:cave/thermal_caves"
+  "terralith:cave/tuff_caves"
+  "terralith:cave/underground_jungle"
+  "terralith:cloud_forest"
+  "terralith:cold_shrubland"
+  "terralith:desert_canyon"
+  "terralith:desert_oasis"
+  "terralith:desert_spires"
+  "terralith:emerald_peaks"
+  "terralith:forested_highlands"
+  "terralith:fractured_savanna"
+  "terralith:frozen_cliffs"
+  "terralith:glacial_chasm"
+  "terralith:granite_cliffs"
+  "terralith:gravel_beach"
+  "terralith:gravel_desert"
+  "terralith:haze_mountain"
+  "terralith:highlands"
+  "terralith:hot_shrubland"
+  "terralith:ice_marsh"
+  "terralith:jungle_mountains"
+  "terralith:lavender_forest"
+  "terralith:lavender_valley"
+  "terralith:lush_desert"
+  "terralith:lush_valley"
+  "terralith:mirage_isles"
+  "terralith:moonlight_grove"
+  "terralith:moonlight_valley"
+  "terralith:orchid_swamp"
+  "terralith:painted_mountains"
+  "terralith:red_oasis"
+  "terralith:rocky_jungle"
+  "terralith:rocky_mountains"
+  "terralith:rocky_shrubland"
+  "terralith:sakura_grove"
+  "terralith:sakura_valley"
+  "terralith:sandstone_valley"
+  "terralith:savanna_badlands"
+  "terralith:savanna_slopes"
+  "terralith:scarlet_mountains"
+  "terralith:shield"
+  "terralith:shield_clearing"
+  "terralith:shrubland"
+  "terralith:siberian_grove"
+  "terralith:siberian_taiga"
+  "terralith:skylands_autumn"
+  "terralith:skylands_spring"
+  "terralith:skylands_summer"
+  "terralith:skylands_winter"
+  "terralith:snowy_badlands"
+  "terralith:snowy_cherry_grove"
+  "terralith:snowy_maple_forest"
+  "terralith:snowy_shield"
+  "terralith:steppe"
+  "terralith:stony_spires"
+  "terralith:temperate_highlands"
+  "terralith:tropical_jungle"
+  "terralith:valley_clearing"
+  "terralith:volcanic_crater"
+  "terralith:volcanic_peaks"
+  "terralith:warm_river"
+  "terralith:warped_mesa"
+  "terralith:white_cliffs"
+  "terralith:white_mesa"
+  "terralith:windswept_spires"
+  "terralith:wintry_forest"
+  "terralith:wintry_lowlands"
+  "terralith:yellowstone"
+  "terralith:yosemite_cliffs"
+  "terralith:yosemite_lowlands"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/badlands_all</summary>

```diff
+[
+  "#terralith:reference/badlands_with_structures"
+  "terralith:snowy_badlands"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/badlands_with_structures</summary>

```diff
+[
+  "terralith:bryce_canyon"
+  "terralith:painted_mountains"
+  "terralith:red_oasis"
+  "terralith:savanna_badlands"
+  "terralith:white_mesa"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/cave</summary>

```diff
+[
+  "terralith:cave/andesite_caves"
+  "terralith:cave/diorite_caves"
+  "terralith:cave/fungal_caves"
+  "terralith:cave/granite_caves"
+  "terralith:cave/infested_caves"
+  "terralith:cave/thermal_caves"
+  "terralith:cave/underground_jungle"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/deep_cave</summary>

```diff
+[
+  "terralith:cave/deep_caves"
+  "terralith:cave/frostfire_caves"
+  "terralith:cave/mantle_caves"
+  "terralith:cave/tuff_caves"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/desert_all</summary>

```diff
+[
+  "#terralith:reference/desert_with_structures"
+  "terralith:ancient_sands"
+  "terralith:desert_canyon"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/desert_with_structures</summary>

```diff
+[
+  "terralith:desert_oasis"
+  "terralith:desert_spires"
+  "terralith:lush_desert"
+  "terralith:sandstone_valley"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/forest</summary>

```diff
+[
+  "terralith:birch_taiga"
+  "terralith:blooming_valley"
+  "terralith:cloud_forest"
+  "terralith:lavender_forest"
+  "terralith:lavender_valley"
+  "terralith:moonlight_grove"
+  "terralith:moonlight_valley"
+  "terralith:sakura_grove"
+  "terralith:sakura_valley"
+  "terralith:snowy_cherry_grove"
+  "terralith:temperate_highlands"
+  "terralith:yosemite_lowlands"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/jungle</summary>

```diff
+[
+  "terralith:amethyst_canyon"
+  "terralith:amethyst_rainforest"
+  "terralith:jungle_mountains"
+  "terralith:rocky_jungle"
+  "terralith:tropical_jungle"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/mountain</summary>

```diff
+[
+  "#terralith:reference/mountain_peak"
+  "#terralith:reference/mountain_slope"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/mountain_peak</summary>

```diff
+[
+  "terralith:emerald_peaks"
+  "terralith:painted_mountains"
+  "terralith:rocky_mountains"
+  "terralith:scarlet_mountains"
+  "terralith:volcanic_peaks"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/mountain_slope</summary>

```diff
+[
+  "terralith:alpine_grove"
+  "terralith:ashen_savanna"
+  "terralith:caldera"
+  "terralith:savanna_slopes"
+  "terralith:siberian_grove"
+  "terralith:snowy_maple_forest"
+  "terralith:snowy_shield"
+  "terralith:tropical_jungle"
+  "terralith:volcanic_crater"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/plains</summary>

```diff
+[
+  "terralith:alpine_highlands"
+  "terralith:arid_highlands"
+  "terralith:brushland"
+  "terralith:highlands"
+  "terralith:steppe"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/savanna</summary>

```diff
+[
+  "terralith:arid_highlands"
+  "terralith:ashen_savanna"
+  "terralith:fractured_savanna"
+  "terralith:savanna_badlands"
+  "terralith:savanna_slopes"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/swamp</summary>

```diff
+[
+  "terralith:ice_marsh"
+  "terralith:orchid_swamp"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/taiga</summary>

```diff
+[
+  "terralith:alpine_grove"
+  "terralith:birch_taiga"
+  "terralith:forested_highlands"
+  "terralith:shield"
+  "terralith:siberian_grove"
+  "terralith:siberian_taiga"
+  "terralith:snowy_maple_forest"
+  "terralith:snowy_shield"
+  "terralith:wintry_forest"
+  "terralith:wintry_lowlands"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/temperature/cold</summary>

```diff
+[
+  "terralith:alpine_highlands"
+  "terralith:cloud_forest"
+  "terralith:forested_highlands"
+  "terralith:lush_valley"
+  "terralith:moonlight_grove"
+  "terralith:moonlight_valley"
+  "terralith:rocky_mountains"
+  "terralith:shield"
+  "terralith:shield_clearing"
+  "terralith:white_cliffs"
+  "terralith:yellowstone"
+  "terralith:yosemite_cliffs"
+  "terralith:yosemite_lowlands"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/temperature/frozen_all</summary>

```diff
+[
+  "#terralith:reference/temperature/frozen_with_structures"
+  "terralith:frozen_cliffs"
+  "terralith:glacial_chasm"
+  "terralith:gravel_desert"
+  "terralith:ice_marsh"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/temperature/frozen_with_structures</summary>

```diff
+[
+  "terralith:alpine_grove"
+  "terralith:cold_shrubland"
+  "terralith:emerald_peaks"
+  "terralith:rocky_shrubland"
+  "terralith:scarlet_mountains"
+  "terralith:siberian_grove"
+  "terralith:siberian_taiga"
+  "terralith:skylands_winter"
+  "terralith:snowy_badlands"
+  "terralith:snowy_cherry_grove"
+  "terralith:snowy_maple_forest"
+  "terralith:snowy_shield"
+  "terralith:wintry_forest"
+  "terralith:wintry_lowlands"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/temperature/lukewarm</summary>

```diff
+[
+  "#terralith:reference/jungle"
+  "#terralith:reference/savanna"
+  "terralith:basalt_cliffs"
+  "terralith:brushland"
+  "terralith:granite_cliffs"
+  "terralith:hot_shrubland"
+  "terralith:skylands_summer"
+  "terralith:tropical_jungle"
+  "terralith:volcanic_crater"
+  "terralith:volcanic_peaks"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/temperature/temperate</summary>

```diff
+[
+  "terralith:birch_taiga"
+  "terralith:blooming_plateau"
+  "terralith:blooming_valley"
+  "terralith:caldera"
+  "terralith:gravel_beach"
+  "terralith:haze_mountain"
+  "terralith:highlands"
+  "terralith:lavender_forest"
+  "terralith:lavender_valley"
+  "terralith:orchid_swamp"
+  "terralith:sakura_grove"
+  "terralith:sakura_valley"
+  "terralith:shrubland"
+  "terralith:skylands_autumn"
+  "terralith:skylands_spring"
+  "terralith:steppe"
+  "terralith:stony_spires"
+  "terralith:temperate_highlands"
+  "terralith:valley_clearing"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/temperature/warm</summary>

```diff
+[
+  "#terralith:reference/badlands_all"
+  "#terralith:reference/desert_all"
+  "terralith:deep_warm_ocean"
+  "terralith:granite_cliffs"
+  "terralith:warm_river"
+  "terralith:white_mesa"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:reference/windswept</summary>

```diff
+[
+  "terralith:fractured_savanna"
+  "terralith:haze_mountain"
+  "terralith:stony_spires"
+  "terralith:windswept_spires"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:shrublands</summary>

```diff
+[
+  "terralith:cold_shrubland"
+  "terralith:hot_shrubland"
+  "terralith:rocky_shrubland"
+  "terralith:shrubland"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:skylands</summary>

```diff
+[
+  "terralith:skylands_autumn"
+  "terralith:skylands_spring"
+  "terralith:skylands_summer"
+  "terralith:skylands_winter"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/terralith:volcanic</summary>

```diff
+[
+  "terralith:volcanic_crater"
+  "terralith:volcanic_peaks"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/minecraft:on_desert_village_maps</summary>

```diff
+[
+  "terralith:fortified_desert_village"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/minecraft:on_plains_village_maps</summary>

```diff
+[
+  "terralith:fortified_village"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/terralith:fortified_villages</summary>

```diff
+[
+  "terralith:fortified_desert_village"
+  "terralith:fortified_village"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/terralith:mage_towers</summary>

```diff
+[
+  "terralith:mage_complex"
+  "terralith:mage_tower"
+  "terralith:mage_tower_autumn"
+  "terralith:mage_tower_spring"
+  "terralith:mage_tower_summer"
+  "terralith:mage_tower_winter"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/terralith:rubble</summary>

```diff
+[
+  "terralith:rubble_desert"
+  "terralith:rubble_forest"
+  "terralith:rubble_jungle"
+  "terralith:rubble_mesa"
+  "terralith:rubble_mountain"
+  "terralith:rubble_taiga"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/terralith:underground</summary>

```diff
+[
+  "terralith:underground/frosted_dungeon"
+  "terralith:underground/giant_bee_hive"
+  "terralith:underground/mining_outpost"
+  "terralith:underground/oak_cabin"
+  "terralith:underground/old_refinery"
+  "terralith:underground/sunken_tower"
+]

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (204)</summary>
<blockquote>

<details>
<summary>minecraft:block/adorn:benches</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_bench?"
 ]

```


</details>

<details>
<summary>minecraft:block/adorn:chairs</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_chair?"
 ]

```


</details>

<details>
<summary>minecraft:block/adorn:coffee_tables</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_coffee_table?"
 ]

```


</details>

<details>
<summary>minecraft:block/adorn:drawers</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_drawer?"
 ]

```


</details>

<details>
<summary>minecraft:block/adorn:kitchen_counters</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_kitchen_counter?"
 ]

```


</details>

<details>
<summary>minecraft:block/adorn:kitchen_cupboards</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_kitchen_cupboard?"
 ]

```


</details>

<details>
<summary>minecraft:block/adorn:kitchen_sinks</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_kitchen_sink?"
 ]

```


</details>

<details>
<summary>minecraft:block/adorn:tables</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_table?"
 ]

```


</details>

<details>
<summary>minecraft:block/adorn:wooden_platforms</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_platform?"
 ]

```


</details>

<details>
<summary>minecraft:block/adorn:wooden_posts</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_post?"
 ]

```


</details>

<details>
<summary>minecraft:block/adorn:wooden_shelves</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_shelf?"
 ]

```


</details>

<details>
<summary>minecraft:block/adorn:wooden_steps</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_step?"
 ]

```


</details>

<details>
<summary>minecraft:block/ae2:growth_acceleratable</summary>

```diff
 [
   ... (25 entries)
-  "mysticalagriculture:kivi_crop"
   ... (4 entries)
-  "mysticalagriculture:xychorium_gem_crop"
 ]

```


</details>

<details>
<summary>minecraft:block/c:ores_in_ground/deepslate</summary>

```diff
 [
   ... (43 entries)
+  "minecraft:deepslate_coal_ore"
+  "minecraft:deepslate_copper_ore"
   ... (2 entries)
+  "minecraft:deepslate_diamond_ore"
+  "minecraft:deepslate_emerald_ore"
   ... (2 entries)
+  "minecraft:deepslate_gold_ore"
+  "minecraft:deepslate_iron_ore"
   ... (2 entries)
+  "minecraft:deepslate_lapis_ore"
+  "minecraft:deepslate_redstone_ore"
   ... (18 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:ores_in_ground/stone</summary>

```diff
 [
   ... (44 entries)
+  "minecraft:coal_ore"
+  "minecraft:copper_ore"
   ... (2 entries)
+  "minecraft:diamond_ore"
+  "minecraft:emerald_ore"
   ... (2 entries)
+  "minecraft:gold_ore"
+  "minecraft:iron_ore"
   ... (2 entries)
+  "minecraft:lapis_ore"
+  "minecraft:redstone_ore"
   ... (17 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:skulls</summary>

```diff
 [
+  "enderio:enderman_head"
+  "enderio:wall_enderman_head"
   ... (20 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:storage_blocks</summary>

```diff
 [
   ... (57 entries)
-  "#c:storage_blocks/copper_alloy"
   ... (301 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/computercraft:turtle_hoe_harvestable</summary>

```diff
 [
   ... (6 entries)
-  "mysticalagriculture:kivi_crop"
   ... (4 entries)
-  "mysticalagriculture:xychorium_gem_crop"
 ]

```


</details>

<details>
<summary>minecraft:block/cucumber:mineable/sickle</summary>

```diff
 [
   ... (35 entries)
-  "mysticalagriculture:kivi_crop"
   ... (4 entries)
-  "mysticalagriculture:xychorium_gem_crop"
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:animals_spawnable_on</summary>

```diff
 [
+  "#minecraft:terracotta"
+  "eternal_starlight:fantasy_grass_block"
+  "eternal_starlight:glowing_nightfall_mud"
+  "eternal_starlight:golden_grass_block"
+  "eternal_starlight:nightfall_dirt"
+  "eternal_starlight:nightfall_grass_block"
+  "eternal_starlight:nightfall_mud"
+  "eternal_starlight:nightfall_podzol"
+  "minecraft:basalt"
+  "minecraft:blackstone"
+  "minecraft:calcite"
+  "minecraft:clay"
+  "minecraft:coarse_dirt"
   ... (1 entries)
+  "minecraft:grass_block"
+  "minecraft:netherrack"
+  "minecraft:packed_mud"
+  "minecraft:podzol"
+  "minecraft:smooth_basalt"
+  "minecraft:snow"
+  "minecraft:snow_block"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:base_stone_overworld</summary>

```diff
 [
   ... (2 entries)
+  "minecraft:blackstone"
   ... (6 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:bee_growables</summary>

```diff
 [
   ... (16 entries)
-  "mysticalagriculture:kivi_crop"
   ... (4 entries)
-  "mysticalagriculture:xychorium_gem_crop"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:crops</summary>

```diff
 [
   ... (26 entries)
-  "mysticalagriculture:kivi_crop"
   ... (4 entries)
-  "mysticalagriculture:xychorium_gem_crop"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:deepslate_ore_replaceables</summary>

```diff
 [
+  "minecraft:blackstone"
+  "minecraft:deepslate"
   ... (2 entries)
+  "minecraft:tuff"
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:dripstone_replaceable_blocks</summary>

```diff
 [
   ... (8 entries)
+  "minecraft:blue_ice"
+  "minecraft:dirt"
+  "minecraft:packed_ice"
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:features_cannot_replace</summary>

```diff
 [
   ... (5 entries)
+  "eternal_starlight:permafrost_spawner"
   ... (13 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:frogs_spawnable_on</summary>

```diff
 [
   ... (3 entries)
+  "minecraft:moss_block"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/pickaxe</summary>

```diff
 [
   ... (3443 entries)
+  "cobblemon:black_plaque"
   ... (6 entries)
+  "cobblemon:blue_plaque"
+  "cobblemon:brown_plaque"
   ... (6 entries)
+  "cobblemon:cyan_plaque"
   ... (19 entries)
+  "cobblemon:gray_plaque"
+  "cobblemon:green_plaque"
   ... (8 entries)
+  "cobblemon:light_blue_plaque"
+  "cobblemon:light_gray_plaque"
+  "cobblemon:lime_plaque"
+  "cobblemon:magenta_plaque"
   ... (7 entries)
+  "cobblemon:orange_plaque"
   ... (1 entries)
+  "cobblemon:pink_plaque"
   ... (12 entries)
+  "cobblemon:purple_plaque"
+  "cobblemon:red_plaque"
   ... (34 entries)
+  "cobblemon:white_plaque"
+  "cobblemon:yellow_plaque"
   ... (1168 entries)
-  "enderio:copper_alloy_block"
   ... (20 entries)
+  "enderio:niard"
   ... (52 entries)
+  "eternal_starlight:accumulator"
   ... (1 entries)
+  "eternal_starlight:alloy_furnace"
   ... (23 entries)
+  "eternal_starlight:chiseled_toxite"
   ... (134 entries)
+  "eternal_starlight:mechanical_spawner"
   ... (13 entries)
+  "eternal_starlight:oxidized_alloy_furnace"
   ... (130 entries)
+  "eternal_starlight:toxite_brick_slab"
+  "eternal_starlight:toxite_brick_stairs"
+  "eternal_starlight:toxite_brick_wall"
+  "eternal_starlight:toxite_bricks"
   ... (25 entries)
+  "eternal_starlight:waxed_alloy_furnace"
   ... (6352 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mushroom_grow_block</summary>

```diff
 [
   ... (7 entries)
+  "minecraft:gravel"
+  "minecraft:moss_block"
   ... (14 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:needs_iron_tool</summary>

```diff
 [
   ... (313 entries)
+  "enderio:energetic_photovoltaic_module"
   ... (5 entries)
+  "enderio:niard"
   ... (4 entries)
+  "enderio:pulsating_photovoltaic_module"
   ... (10 entries)
+  "enderio:vibrant_photovoltaic_module"
   ... (8 entries)
+  "eternal_starlight:alloy_furnace"
   ... (10 entries)
+  "eternal_starlight:eternal_ice_starlit_diamond_ore"
   ... (13 entries)
+  "eternal_starlight:grimstone_starlit_diamond_ore"
   ... (1 entries)
+  "eternal_starlight:haze_ice_starlit_diamond_ore"
   ... (7 entries)
+  "eternal_starlight:oxidized_alloy_furnace"
   ... (15 entries)
+  "eternal_starlight:starlit_diamond_block"
   ... (4 entries)
+  "eternal_starlight:voidstone_starlit_diamond_ore"
+  "eternal_starlight:waxed_alloy_furnace"
   ... (576 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:needs_stone_tool</summary>

```diff
 [
   ... (342 entries)
-  "enderio:copper_alloy_block"
   ... (13 entries)
+  "eternal_starlight:eternal_ice_deepsilver_ore"
+  "eternal_starlight:grimstone_deepsilver_ore"
+  "eternal_starlight:haze_ice_deepsilver_ore"
+  "eternal_starlight:packed_nightfall_mud_deepsilver_ore"
+  "eternal_starlight:voidstone_deepsilver_ore"
   ... (1141 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:nylium</summary>

```diff
 [
   ... (3 entries)
+  "minecraft:grass_block"
+  "minecraft:moss_block"
+  "minecraft:mycelium"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:overworld_carver_replaceables</summary>

```diff
 [
   ... (18 entries)
+  "minecraft:dirt_path"
   ... (2 entries)
+  "minecraft:packed_mud"
   ... (5 entries)
+  "minecraft:snow_block"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:sculk_replaceable_world_gen</summary>

```diff
 [
   ... (1 entries)
+  "minecraft:blue_ice"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:slabs</summary>

```diff
 [
   ... (242 entries)
+  "eternal_starlight:toxite_brick_slab"
   ... (141 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:soul_fire_base_blocks</summary>

```diff
 [
   ... (46 entries)
+  "minecraft:blue_ice"
   ... (4 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:stairs</summary>

```diff
 [
   ... (243 entries)
+  "eternal_starlight:toxite_brick_stairs"
   ... (108 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:sword_efficient</summary>

```diff
 [
   ... (195 entries)
-  "mysticalagriculture:kivi_crop"
   ... (4 entries)
-  "mysticalagriculture:xychorium_gem_crop"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:walls</summary>

```diff
 [
   ... (214 entries)
+  "eternal_starlight:toxite_brick_wall"
   ... (63 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/mysticalagriculture:crops</summary>

```diff
 [
   ... (76 entries)
-  "mysticalagriculture:kivi_crop"
   ... (73 entries)
-  "mysticalagriculture:xychorium_gem_crop"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/pneumaticcraft:crop_support_growable</summary>

```diff
 [
   ... (13 entries)
-  "mysticalagriculture:kivi_crop"
   ... (4 entries)
-  "mysticalagriculture:xychorium_gem_crop"
 ]

```


</details>

<details>
<summary>minecraft:block/silentgear:mineable/sickle</summary>

```diff
 [
   ... (30 entries)
-  "mysticalagriculture:kivi_crop"
   ... (4 entries)
-  "mysticalagriculture:xychorium_gem_crop"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/the_bumblezone:essence/life/grow_plants</summary>

```diff
 [
   ... (16 entries)
-  "mysticalagriculture:kivi_crop"
   ... (4 entries)
-  "mysticalagriculture:xychorium_gem_crop"
 ]

```


</details>

<details>
<summary>minecraft:entity_type/allthemons:replaceable_animals</summary>

```diff
 [
   ... (3 entries)
+  "minecraft:donkey"
   ... (1 entries)
+  "minecraft:horse"
   ... (4 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:fall_damage_immune</summary>

```diff
 [
   ... (46 entries)
+  "eternal_starlight:seeker"
   ... (58 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/adorn:benches</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_bench?"
 ]

```


</details>

<details>
<summary>minecraft:item/adorn:chairs</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_chair?"
 ]

```


</details>

<details>
<summary>minecraft:item/adorn:coffee_tables</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_coffee_table?"
 ]

```


</details>

<details>
<summary>minecraft:item/adorn:drawers</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_drawer?"
 ]

```


</details>

<details>
<summary>minecraft:item/adorn:kitchen_counters</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_kitchen_counter?"
 ]

```


</details>

<details>
<summary>minecraft:item/adorn:kitchen_cupboards</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_kitchen_cupboard?"
 ]

```


</details>

<details>
<summary>minecraft:item/adorn:kitchen_sinks</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_kitchen_sink?"
 ]

```


</details>

<details>
<summary>minecraft:item/adorn:tables</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_table?"
 ]

```


</details>

<details>
<summary>minecraft:item/adorn:wooden_platforms</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_platform?"
 ]

```


</details>

<details>
<summary>minecraft:item/adorn:wooden_posts</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_post?"
 ]

```


</details>

<details>
<summary>minecraft:item/adorn:wooden_shelves</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_shelf?"
 ]

```


</details>

<details>
<summary>minecraft:item/adorn:wooden_steps</summary>

```diff
 [
   ... (1 entries)
+  "adorn:cobblemon/saccharine_step?"
 ]

```


</details>

<details>
<summary>minecraft:item/ars_nouveau:whirlisprig/denied_drop</summary>

```diff
 [
   ... (8 entries)
-  "mysticalagriculture:kivi_seeds"
   ... (4 entries)
-  "mysticalagriculture:xychorium_gem_seeds"
 ]

```


</details>

<details>
<summary>minecraft:item/c:dusts</summary>

```diff
 [
   ... (17 entries)
-  "#c:dusts/cobalt"
   ... (139 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:dyes</summary>

```diff
 [
   ... (34 entries)
-  "enderio:organic_black_dye"
-  "enderio:organic_brown_dye"
-  "enderio:organic_green_dye"
 ]

```


</details>

<details>
<summary>minecraft:item/c:dyes/black</summary>

```diff
 [
   ... (1 entries)
-  "enderio:organic_black_dye"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:dyes/brown</summary>

```diff
 [
   ... (1 entries)
-  "enderio:organic_brown_dye"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:dyes/green</summary>

```diff
 [
   ... (1 entries)
-  "enderio:organic_green_dye"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:ingots</summary>

```diff
 [
   ... (19 entries)
-  "#c:ingots/copper_alloy"
   ... (119 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:music_discs</summary>

```diff
 [
   ... (14 entries)
+  "eternal_starlight:music_disc_ether_rain"
   ... (48 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:nuggets</summary>

```diff
 [
   ... (21 entries)
-  "#c:nuggets/copper_alloy"
   ... (89 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:seeds</summary>

```diff
 [
   ... (28 entries)
-  "mysticalagriculture:kivi_seeds"
   ... (4 entries)
-  "mysticalagriculture:xychorium_gem_seeds"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks</summary>

```diff
 [
   ... (65 entries)
-  "#c:storage_blocks/copper_alloy"
   ... (347 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/cobblemon:boats</summary>

```diff
 [
+  "#cobblemon:chest_boats"
   ... (1 entries)
-  "cobblemon:apricorn_chest_boat"
+  "cobblemon:saccharine_boat"
 ]

```


</details>

<details>
<summary>minecraft:item/cobblemon:evolution_items</summary>

```diff
 [
   ... (37 entries)
+  "cobblemon:syrupy_apple"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/cobblemon:held/is_held_item</summary>

```diff
 [
   ... (23 entries)
-  "cobblemon:deep_sea_scale"
-  "cobblemon:deep_sea_tooth"
   ... (11 entries)
-  "cobblemon:flame_orb"
   ... (10 entries)
-  "cobblemon:kings_rock"
   ... (2 entries)
-  "cobblemon:life_orb"
   ... (5 entries)
-  "cobblemon:lucky_egg"
   ... (4 entries)
-  "cobblemon:metal_coat"
   ... (28 entries)
-  "cobblemon:scope_lens"
   ... (6 entries)
-  "cobblemon:smoke_ball"
   ... (2 entries)
+  "cobblemon:soothe_bell"
   ... (3 entries)
-  "cobblemon:terrain_extender"
   ... (1 entries)
-  "cobblemon:throat_spray"
-  "cobblemon:toxic_orb"
   ... (3 entries)
-  "cobblemon:utility_umbrella"
   ... (2 entries)
-  "cobblemon:white_herb"
-  "cobblemon:wide_lens"
   ... (3 entries)
-  "cobblemon:zoom_lens"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/cobblemon:recipe_filters/effect_seasoning</summary>

```diff
 [
+  "#cobblemon:herbs"
   ... (6 entries)
-  "cobblemon:mirror_herb"
+  "cobblemon:moomoo_milk"
   ... (1 entries)
-  "cobblemon:power_herb"
-  "cobblemon:revival_herb"
+  "minecraft:chorus_flower"
   ... (3 entries)
+  "minecraft:milk_bucket"
   ... (4 entries)
+  "minecraft:spore_blossom"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/cobblemon:recipe_filters/tea_seasoning</summary>

```diff
 [
+  "#cobblemon:herbs"
   ... (6 entries)
-  "cobblemon:mirror_herb"
+  "cobblemon:moomoo_milk"
   ... (1 entries)
-  "cobblemon:power_herb"
-  "cobblemon:revival_herb"
   ... (3 entries)
+  "minecraft:milk_bucket"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/cobblemon:super_potion_ingredients</summary>

```diff
 [
+  "cobblemon:aguav_berry"
   ... (1 entries)
-  "cobblemon:hondew_berry"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/enderio:crops</summary>

```diff
 [
   ... (1 entries)
-  "minecraft:sugar_cane"
 ]

```


</details>

<details>
<summary>minecraft:item/enderio:grinding_balls</summary>

```diff
 [
   ... (1 entries)
-  "enderio:copper_alloy_grinding_ball"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/eternal_starlight:light_crystal_ingredients</summary>

```diff
 [
   ... (3 entries)
-  "minecraft:torch"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/extended_industrialization:farmer_plantable</summary>

```diff
 [
   ... (6 entries)
-  "mysticalagriculture:kivi_seeds"
   ... (4 entries)
-  "mysticalagriculture:xychorium_gem_seeds"
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:axes</summary>

```diff
 [
   ... (32 entries)
-  "enderio:dark_steel_axe"
   ... (53 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:chest_armor</summary>

```diff
 [
   ... (49 entries)
-  "enderio:dark_steel_chestplate"
   ... (64 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:chest_boats</summary>

```diff
 [
+  "#cobblemon:chest_boats"
   ... (1 entries)
-  "cobblemon:apricorn_chest_boat"
   ... (32 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/chest_armor</summary>

```diff
 [
   ... (30 entries)
-  "enderio:dark_steel_chestplate"
   ... (19 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/durability</summary>

```diff
 [
   ... (170 entries)
+  "eternal_starlight:tentacle_spike"
   ... (110 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/foot_armor</summary>

```diff
 [
   ... (30 entries)
-  "enderio:dark_steel_boots"
   ... (13 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/head_armor</summary>

```diff
 [
   ... (30 entries)
-  "enderio:dark_steel_helmet"
   ... (14 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/leg_armor</summary>

```diff
 [
   ... (30 entries)
-  "enderio:dark_steel_leggings"
   ... (14 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:foot_armor</summary>

```diff
 [
   ... (47 entries)
-  "enderio:dark_steel_boots"
   ... (55 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:head_armor</summary>

```diff
 [
   ... (48 entries)
-  "enderio:dark_steel_helmet"
   ... (61 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:leg_armor</summary>

```diff
 [
   ... (44 entries)
-  "enderio:dark_steel_leggings"
   ... (58 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:pickaxes</summary>

```diff
 [
   ... (32 entries)
-  "enderio:dark_steel_pickaxe"
   ... (61 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:slabs</summary>

```diff
 [
   ... (195 entries)
+  "eternal_starlight:toxite_brick_slab"
   ... (141 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:stairs</summary>

```diff
 [
   ... (195 entries)
+  "eternal_starlight:toxite_brick_stairs"
   ... (104 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:stone_crafting_materials</summary>

```diff
 [
   ... (7 entries)
+  "minecraft:andesite"
   ... (3 entries)
+  "minecraft:diorite"
+  "minecraft:granite"
+  "minecraft:tuff"
   ... (5 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:stone_tool_materials</summary>

```diff
 [
   ... (6 entries)
+  "minecraft:andesite"
   ... (3 entries)
+  "minecraft:diorite"
+  "minecraft:granite"
+  "minecraft:tuff"
   ... (5 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:walls</summary>

```diff
 [
   ... (194 entries)
+  "eternal_starlight:toxite_brick_wall"
   ... (47 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/mysticalagriculture:essences</summary>

```diff
 [
   ... (75 entries)
-  "mysticalagriculture:kivi_essence"
   ... (73 entries)
-  "mysticalagriculture:xychorium_gem_essence"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/mysticalagriculture:seeds</summary>

```diff
 [
   ... (76 entries)
-  "mysticalagriculture:kivi_seeds"
   ... (73 entries)
-  "mysticalagriculture:xychorium_gem_seeds"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/allthemons:has_structure/pokecenter</summary>

```diff
 [
-  "minecraft:badlands"
-  "minecraft:bamboo_jungle"
-  "minecraft:birch_forest"
-  "minecraft:cherry_grove"
-  "minecraft:dark_forest"
-  "minecraft:desert"
-  "minecraft:eroded_badlands"
-  "minecraft:flower_forest"
-  "minecraft:forest"
-  "minecraft:grove"
-  "minecraft:jungle"
-  "minecraft:mangrove_swamp"
-  "minecraft:meadow"
-  "minecraft:mushroom_fields"
-  "minecraft:old_growth_birch_forest"
-  "minecraft:old_growth_pine_taiga"
-  "minecraft:old_growth_spruce_taiga"
-  "minecraft:plains"
-  "minecraft:savanna"
-  "minecraft:savanna_plateau"
-  "minecraft:snowy_plains"
-  "minecraft:snowy_taiga"
-  "minecraft:sparse_jungle"
-  "minecraft:sunflower_plains"
-  "minecraft:swamp"
-  "minecraft:taiga"
-  "minecraft:windswept_forest"
-  "minecraft:windswept_gravelly_hills"
-  "minecraft:windswept_hills"
-  "minecraft:windswept_savanna"
-  "minecraft:wooded_badlands"
+  "#c:is_birch_forest"
+  "#c:is_dead"
+  "#c:is_dense_vegetation"
+  "#c:is_dry"
+  "#c:is_floral"
+  "#c:is_forest"
+  "#c:is_jungle"
+  "#c:is_magical"
+  "#c:is_old_growth"
+  "#c:is_plains"
+  "#c:is_plateau"
+  "#c:is_sandy"
+  "#c:is_sparse_vegetation"
+  "#c:is_taiga"
+  "#c:is_wasteland"
+  "#c:is_windswept"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_aquatic</summary>

```diff
 [
   ... (3 entries)
+  "terralith:warm_river"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_badlands</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/badlands_all"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_beach</summary>

```diff
 [
   ... (1 entries)
+  "terralith:gravel_beach"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_birch_forest</summary>

```diff
 [
   ... (2 entries)
+  "terralith:birch_taiga"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_cave</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/cave"
+  "#terralith:reference/deep_cave"
   ... (4 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_cold</summary>

```diff
 [
   ... (4 entries)
+  "#terralith:reference/temperature/cold"
+  "#terralith:reference/temperature/frozen_all"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_cold/overworld</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/temperature/cold"
+  "#terralith:reference/temperature/frozen_all"
   ... (20 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_dead</summary>

```diff
 [
   ... (1 entries)
+  "terralith:ashen_savanna"
+  "terralith:gravel_desert"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_dense_vegetation</summary>

```diff
 [
   ... (4 entries)
+  "#terralith:reference/jungle"
+  "#terralith:reference/taiga"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_dense_vegetation/overworld</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/jungle"
+  "#terralith:reference/taiga"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_desert</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/desert_all"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_dry</summary>

```diff
 [
   ... (4 entries)
+  "#terralith:reference/badlands_all"
+  "#terralith:reference/desert_all"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_dry/overworld</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/badlands_all"
+  "#terralith:reference/desert_all"
+  "#terralith:reference/savanna"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_floral</summary>

```diff
 [
   ... (5 entries)
+  "terralith:blooming_plateau"
+  "terralith:blooming_valley"
+  "terralith:cloud_forest"
+  "terralith:lavender_forest"
+  "terralith:lavender_valley"
+  "terralith:moonlight_grove"
+  "terralith:moonlight_valley"
+  "terralith:sakura_grove"
+  "terralith:sakura_valley"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_flower_forest</summary>

```diff
 [
   ... (1 entries)
+  "terralith:blooming_valley"
+  "terralith:cloud_forest"
+  "terralith:lavender_forest"
+  "terralith:lavender_valley"
+  "terralith:moonlight_grove"
+  "terralith:moonlight_valley"
+  "terralith:sakura_grove"
+  "terralith:sakura_valley"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_forest</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/forest"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_hill</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/windswept"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_hot</summary>

```diff
 [
   ... (4 entries)
+  "#terralith:reference/temperature/lukewarm"
+  "#terralith:reference/temperature/warm"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_hot/overworld</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/temperature/lukewarm"
+  "#terralith:reference/temperature/warm"
   ... (13 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_icy</summary>

```diff
 [
+  "#terralith:reference/temperature/frozen_all"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_jungle</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/jungle"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_lush</summary>

```diff
 [
   ... (2 entries)
+  "terralith:cave/underground_jungle"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_magical</summary>

```diff
 [
   ... (2 entries)
+  "#terralith:mystical"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_mountain</summary>

```diff
 [
   ... (4 entries)
+  "#terralith:reference/mountain"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_mountain/peak</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/mountain_peak"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_mountain/slope</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/mountain_slope"
   ... (4 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_mushroom</summary>

```diff
 [
   ... (3 entries)
+  "terralith:cave/fungal_caves"
+  "terralith:mirage_isles"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_old_growth</summary>

```diff
 [
   ... (3 entries)
+  "terralith:alpine_grove"
+  "terralith:shield"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_overworld</summary>

```diff
 [
   ... (2 entries)
+  "#terralith:all_terralith_biomes"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_plains</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/plains"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_plateau</summary>

```diff
 [
   ... (5 entries)
+  "terralith:blooming_plateau"
+  "terralith:savanna_badlands"
+  "terralith:white_mesa"
+  "terralith:yosemite_cliffs"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_rare</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:rare_island"
+  "#terralith:skylands"
   ... (13 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_river</summary>

```diff
 [
   ... (1 entries)
+  "terralith:warm_river"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_sandy</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/desert_all"
   ... (5 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_savanna</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/savanna"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_snowy</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/temperature/frozen_all"
   ... (8 entries)
+  "terralith:emerald_peaks"
+  "terralith:rocky_mountains"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_sparse_vegetation</summary>

```diff
 [
   ... (5 entries)
+  "#terralith:reference/badlands_all"
+  "#terralith:reference/savanna"
+  "#terralith:shrublands"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_sparse_vegetation/overworld</summary>

```diff
 [
   ... (2 entries)
+  "#terralith:reference/badlands_all"
+  "#terralith:reference/savanna"
+  "#terralith:shrublands"
   ... (11 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_spooky</summary>

```diff
 [
   ... (4 entries)
+  "terralith:cave/frostfire_caves"
+  "terralith:cave/infested_caves"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_stony_shores</summary>

```diff
 [
   ... (1 entries)
+  "terralith:gravel_beach"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_swamp</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/swamp"
   ... (5 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_taiga</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/taiga"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_temperate</summary>

```diff
 [
   ... (3 entries)
+  "#terralith:reference/temperature/temperate"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_temperate/overworld</summary>

```diff
 [
+  "#terralith:reference/temperature/temperate"
   ... (14 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_tree/coniferous</summary>

```diff
 [
   ... (2 entries)
+  "#terralith:reference/taiga"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_tree/deciduous</summary>

```diff
 [
+  "#terralith:reference/forest"
   ... (6 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_tree/jungle</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/jungle"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_tree/savanna</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/savanna"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_underground</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/cave"
+  "#terralith:reference/deep_cave"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_wasteland</summary>

```diff
 [
   ... (1 entries)
+  "terralith:ashen_savanna"
+  "terralith:gravel_desert"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_wet</summary>

```diff
 [
   ... (4 entries)
+  "#terralith:oases"
+  "#terralith:reference/jungle"
+  "#terralith:reference/swamp"
   ... (1 entries)
+  "terralith:cave/underground_jungle"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_wet/overworld</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:oases"
+  "#terralith:reference/jungle"
+  "#terralith:reference/swamp"
   ... (8 entries)
+  "terralith:cave/underground_jungle"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_windswept</summary>

```diff
 [
+  "#terralith:reference/windswept"
   ... (4 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:no_default_monsters</summary>

```diff
 [
+  "#terralith:rare_island"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:allows_surface_slime_spawns</summary>

```diff
 [
+  "#terralith:reference/swamp"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:allows_tropical_fish_spawns_at_any_height</summary>

```diff
 [
   ... (1 entries)
+  "terralith:cave/underground_jungle"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_closer_water_fog</summary>

```diff
 [
+  "#terralith:reference/swamp"
   ... (5 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/ancient_city</summary>

```diff
 [
   ... (1 entries)
+  "terralith:cave/frostfire_caves"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/desert_pyramid</summary>

```diff
 [
+  "#terralith:reference/desert_with_structures"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/igloo</summary>

```diff
 [
+  "#terralith:reference/temperature/frozen_with_structures"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/jungle_temple</summary>

```diff
 [
+  "#terralith:reference/jungle"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/mineshaft</summary>

```diff
 [
   ... (8 entries)
+  "#terralith:all_terralith_biomes"
   ... (15 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/mineshaft_mesa</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/badlands_with_structures"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/ocean_monument</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:skylands"
+  "terralith:deep_warm_ocean"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/ocean_ruin_warm</summary>

```diff
 [
   ... (3 entries)
+  "terralith:deep_warm_ocean"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/pillager_outpost</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/forest"
+  "#terralith:reference/taiga"
   ... (6 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/ruined_portal_desert</summary>

```diff
 [
+  "#terralith:reference/desert_with_structures"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/ruined_portal_jungle</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/jungle"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/ruined_portal_mountain</summary>

```diff
 [
   ... (7 entries)
+  "terralith:fractured_savanna"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/ruined_portal_standard</summary>

```diff
 [
   ... (4 entries)
+  "#terralith:reference/cave"
+  "#terralith:reference/plains"
   ... (8 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/ruined_portal_swamp</summary>

```diff
 [
+  "#terralith:reference/swamp"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/swamp_hut</summary>

```diff
 [
+  "#terralith:reference/swamp"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/trail_ruins</summary>

```diff
 [
+  "#terralith:reference/jungle"
+  "#terralith:reference/taiga"
   ... (6 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/trial_chambers</summary>

```diff
 [
+  "#terralith:reference/all_with_structures"
   ... (52 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/village_desert</summary>

```diff
 [
+  "#terralith:reference/desert_with_structures"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/village_plains</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/plains"
   ... (2 entries)
+  "terralith:blooming_plateau"
+  "terralith:temperate_highlands"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/village_savanna</summary>

```diff
 [
+  "#terralith:reference/savanna"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/village_snowy</summary>

```diff
 [
+  "#terralith:reference/temperature/frozen_with_structures"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/village_taiga</summary>

```diff
 [
+  "#terralith:reference/taiga"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:has_structure/woodland_mansion</summary>

```diff
 [
   ... (2 entries)
+  "terralith:sakura_grove"
+  "terralith:sakura_valley"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:increased_fire_burnout</summary>

```diff
 [
+  "#terralith:reference/jungle"
+  "#terralith:reference/swamp"
   ... (8 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:is_badlands</summary>

```diff
 [
+  "#terralith:reference/badlands_all"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:is_beach</summary>

```diff
 [
   ... (3 entries)
+  "terralith:gravel_beach"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:is_deep_ocean</summary>

```diff
 [
   ... (4 entries)
+  "terralith:deep_warm_ocean"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:is_forest</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:reference/forest"
   ... (6 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:is_hill</summary>

```diff
 [
+  "#terralith:reference/windswept"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:is_jungle</summary>

```diff
 [
+  "#terralith:reference/jungle"
   ... (4 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:is_mountain</summary>

```diff
 [
+  "#terralith:reference/mountain"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:is_overworld</summary>

```diff
 [
   ... (1 entries)
+  "#terralith:all_terralith_biomes"
   ... (54 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:is_river</summary>

```diff
 [
   ... (2 entries)
+  "terralith:warm_river"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:is_savanna</summary>

```diff
 [
+  "#terralith:reference/savanna"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:is_taiga</summary>

```diff
 [
+  "#terralith:reference/taiga"
   ... (4 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:mineshaft_blocking</summary>

```diff
 [
   ... (1 entries)
+  "terralith:cave/frostfire_caves"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:plays_underwater_music</summary>

```diff
 [
   ... (2 entries)
+  "#terralith:skylands"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:produces_corals_from_bonemeal</summary>

```diff
 [
   ... (2 entries)
+  "terralith:deep_warm_ocean"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:required_ocean_monument_surrounding</summary>

```diff
 [
   ... (2 entries)
+  "#terralith:skylands"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:snow_golem_melts</summary>

```diff
 [
+  "#terralith:reference/savanna"
+  "#terralith:reference/temperature/warm"
   ... (15 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:spawns_cold_variant_frogs</summary>

```diff
 [
   ... (2 entries)
+  "#terralith:reference/temperature/cold"
+  "#terralith:reference/temperature/frozen_all"
   ... (14 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:spawns_gold_rabbits</summary>

```diff
 [
+  "#terralith:reference/temperature/warm"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:spawns_snow_foxes</summary>

```diff
 [
+  "#terralith:reference/temperature/frozen_all"
   ... (12 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:spawns_warm_variant_frogs</summary>

```diff
 [
   ... (4 entries)
+  "#terralith:reference/temperature/warm"
   ... (5 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:spawns_white_rabbits</summary>

```diff
 [
+  "#terralith:reference/temperature/frozen_all"
   ... (12 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:stronghold_biased_to</summary>

```diff
 [
+  "#terralith:reference/all_with_structures"
   ... (35 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:water_on_map_outlines</summary>

```diff
 [
   ... (2 entries)
+  "#terralith:reference/swamp"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:without_patrol_spawns</summary>

```diff
 [
+  "#terralith:rare_island"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/minecraft:without_wandering_trader_spawns</summary>

```diff
 [
+  "#terralith:rare_island"
   ... (4 entries)
 ]

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (17)</summary>
<blockquote>

<details>
<summary>minecraft:block/c:storage_blocks/copper_alloy</summary>

```diff
-[
-  "enderio:copper_alloy_block"
-]

```


</details>

<details>
<summary>minecraft:block/enderio:dark_steel_explodable_allow_list</summary>

```diff
-[
-]

```


</details>

<details>
<summary>minecraft:block/enderio:dark_steel_explodable_deny_list</summary>

```diff
-[
-]

```


</details>

<details>
<summary>minecraft:block/enderio:glass_blocks/clear_glass</summary>

```diff
-[
-  "enderio:clear_glass"
-  "enderio:clear_glass_a"
-  "enderio:clear_glass_a_black"
-  "enderio:clear_glass_a_blue"
-  "enderio:clear_glass_a_brown"
-  "enderio:clear_glass_a_cyan"
-  "enderio:clear_glass_a_gray"
-  "enderio:clear_glass_a_green"
-  "enderio:clear_glass_a_light_blue"
-  "enderio:clear_glass_a_light_gray"
-  "enderio:clear_glass_a_lime"
-  "enderio:clear_glass_a_magenta"
-  "enderio:clear_glass_a_orange"
-  "enderio:clear_glass_a_pink"
-  "enderio:clear_glass_a_purple"
-  "enderio:clear_glass_a_red"
-  "enderio:clear_glass_a_white"
-  "enderio:clear_glass_a_yellow"
-  "enderio:clear_glass_black"
-  "enderio:clear_glass_blue"
-  "enderio:clear_glass_brown"
-  "enderio:clear_glass_cyan"
-  "enderio:clear_glass_d"
-  "enderio:clear_glass_d_black"
-  "enderio:clear_glass_d_blue"
-  "enderio:clear_glass_d_brown"
-  "enderio:clear_glass_d_cyan"
-  "enderio:clear_glass_d_gray"
-  "enderio:clear_glass_d_green"
-  "enderio:clear_glass_d_light_blue"
-  "enderio:clear_glass_d_light_gray"
-  "enderio:clear_glass_d_lime"
-  "enderio:clear_glass_d_magenta"
-  "enderio:clear_glass_d_orange"
-  "enderio:clear_glass_d_pink"
-  "enderio:clear_glass_d_purple"
-  "enderio:clear_glass_d_red"
-  "enderio:clear_glass_d_white"
-  "enderio:clear_glass_d_yellow"
-  "enderio:clear_glass_da"
-  "enderio:clear_glass_da_black"
-  "enderio:clear_glass_da_blue"
-  "enderio:clear_glass_da_brown"
-  "enderio:clear_glass_da_cyan"
-  "enderio:clear_glass_da_gray"
-  "enderio:clear_glass_da_green"
-  "enderio:clear_glass_da_light_blue"
-  "enderio:clear_glass_da_light_gray"
-  "enderio:clear_glass_da_lime"
-  "enderio:clear_glass_da_magenta"
-  "enderio:clear_glass_da_orange"
-  "enderio:clear_glass_da_pink"
-  "enderio:clear_glass_da_purple"
-  "enderio:clear_glass_da_red"
-  "enderio:clear_glass_da_white"
-  "enderio:clear_glass_da_yellow"
-  "enderio:clear_glass_dm"
-  "enderio:clear_glass_dm_black"
-  "enderio:clear_glass_dm_blue"
-  "enderio:clear_glass_dm_brown"
-  "enderio:clear_glass_dm_cyan"
-  "enderio:clear_glass_dm_gray"
-  "enderio:clear_glass_dm_green"
-  "enderio:clear_glass_dm_light_blue"
-  "enderio:clear_glass_dm_light_gray"
-  "enderio:clear_glass_dm_lime"
-  "enderio:clear_glass_dm_magenta"
-  "enderio:clear_glass_dm_orange"
-  "enderio:clear_glass_dm_pink"
-  "enderio:clear_glass_dm_purple"
-  "enderio:clear_glass_dm_red"
-  "enderio:clear_glass_dm_white"
-  "enderio:clear_glass_dm_yellow"
-  "enderio:clear_glass_dna"
-  "enderio:clear_glass_dna_black"
-  "enderio:clear_glass_dna_blue"
-  "enderio:clear_glass_dna_brown"
-  "enderio:clear_glass_dna_cyan"
-  "enderio:clear_glass_dna_gray"
-  "enderio:clear_glass_dna_green"
-  "enderio:clear_glass_dna_light_blue"
-  "enderio:clear_glass_dna_light_gray"
-  "enderio:clear_glass_dna_lime"
-  "enderio:clear_glass_dna_magenta"
-  "enderio:clear_glass_dna_orange"
-  "enderio:clear_glass_dna_pink"
-  "enderio:clear_glass_dna_purple"
-  "enderio:clear_glass_dna_red"
-  "enderio:clear_glass_dna_white"
-  "enderio:clear_glass_dna_yellow"
-  "enderio:clear_glass_dnm"
-  "enderio:clear_glass_dnm_black"
-  "enderio:clear_glass_dnm_blue"
-  "enderio:clear_glass_dnm_brown"
-  "enderio:clear_glass_dnm_cyan"
-  "enderio:clear_glass_dnm_gray"
-  "enderio:clear_glass_dnm_green"
-  "enderio:clear_glass_dnm_light_blue"
-  "enderio:clear_glass_dnm_light_gray"
-  "enderio:clear_glass_dnm_lime"
-  "enderio:clear_glass_dnm_magenta"
-  "enderio:clear_glass_dnm_orange"
-  "enderio:clear_glass_dnm_pink"
-  "enderio:clear_glass_dnm_purple"
-  "enderio:clear_glass_dnm_red"
-  "enderio:clear_glass_dnm_white"
-  "enderio:clear_glass_dnm_yellow"
-  "enderio:clear_glass_dnp"
-  "enderio:clear_glass_dnp_black"
-  "enderio:clear_glass_dnp_blue"
-  "enderio:clear_glass_dnp_brown"
-  "enderio:clear_glass_dnp_cyan"
-  "enderio:clear_glass_dnp_gray"
-  "enderio:clear_glass_dnp_green"
-  "enderio:clear_glass_dnp_light_blue"
-  "enderio:clear_glass_dnp_light_gray"
-  "enderio:clear_glass_dnp_lime"
-  "enderio:clear_glass_dnp_magenta"
-  "enderio:clear_glass_dnp_orange"
-  "enderio:clear_glass_dnp_pink"
-  "enderio:clear_glass_dnp_purple"
-  "enderio:clear_glass_dnp_red"
-  "enderio:clear_glass_dnp_white"
-  "enderio:clear_glass_dnp_yellow"
-  "enderio:clear_glass_dp"
-  "enderio:clear_glass_dp_black"
-  "enderio:clear_glass_dp_blue"
-  "enderio:clear_glass_dp_brown"
-  "enderio:clear_glass_dp_cyan"
-  "enderio:clear_glass_dp_gray"
-  "enderio:clear_glass_dp_green"
-  "enderio:clear_glass_dp_light_blue"
-  "enderio:clear_glass_dp_light_gray"
-  "enderio:clear_glass_dp_lime"
-  "enderio:clear_glass_dp_magenta"
-  "enderio:clear_glass_dp_orange"
-  "enderio:clear_glass_dp_pink"
-  "enderio:clear_glass_dp_purple"
-  "enderio:clear_glass_dp_red"
-  "enderio:clear_glass_dp_white"
-  "enderio:clear_glass_dp_yellow"
-  "enderio:clear_glass_e"
-  "enderio:clear_glass_e_black"
-  "enderio:clear_glass_e_blue"
-  "enderio:clear_glass_e_brown"
-  "enderio:clear_glass_e_cyan"
-  "enderio:clear_glass_e_gray"
-  "enderio:clear_glass_e_green"
-  "enderio:clear_glass_e_light_blue"
-  "enderio:clear_glass_e_light_gray"
-  "enderio:clear_glass_e_lime"
-  "enderio:clear_glass_e_magenta"
-  "enderio:clear_glass_e_orange"
-  "enderio:clear_glass_e_pink"
-  "enderio:clear_glass_e_purple"
-  "enderio:clear_glass_e_red"
-  "enderio:clear_glass_e_white"
-  "enderio:clear_glass_e_yellow"
-  "enderio:clear_glass_ea"
-  "enderio:clear_glass_ea_black"
-  "enderio:clear_glass_ea_blue"
-  "enderio:clear_glass_ea_brown"
-  "enderio:clear_glass_ea_cyan"
-  "enderio:clear_glass_ea_gray"
-  "enderio:clear_glass_ea_green"
-  "enderio:clear_glass_ea_light_blue"
-  "enderio:clear_glass_ea_light_gray"
-  "enderio:clear_glass_ea_lime"
-  "enderio:clear_glass_ea_magenta"
-  "enderio:clear_glass_ea_orange"
-  "enderio:clear_glass_ea_pink"
-  "enderio:clear_glass_ea_purple"
-  "enderio:clear_glass_ea_red"
-  "enderio:clear_glass_ea_white"
-  "enderio:clear_glass_ea_yellow"
-  "enderio:clear_glass_em"
-  "enderio:clear_glass_em_black"
-  "enderio:clear_glass_em_blue"
-  "enderio:clear_glass_em_brown"
-  "enderio:clear_glass_em_cyan"
-  "enderio:clear_glass_em_gray"
-  "enderio:clear_glass_em_green"
-  "enderio:clear_glass_em_light_blue"
-  "enderio:clear_glass_em_light_gray"
-  "enderio:clear_glass_em_lime"
-  "enderio:clear_glass_em_magenta"
-  "enderio:clear_glass_em_orange"
-  "enderio:clear_glass_em_pink"
-  "enderio:clear_glass_em_purple"
-  "enderio:clear_glass_em_red"
-  "enderio:clear_glass_em_white"
-  "enderio:clear_glass_em_yellow"
-  "enderio:clear_glass_ena"
-  "enderio:clear_glass_ena_black"
-  "enderio:clear_glass_ena_blue"
-  "enderio:clear_glass_ena_brown"
-  "enderio:clear_glass_ena_cyan"
-  "enderio:clear_glass_ena_gray"
-  "enderio:clear_glass_ena_green"
-  "enderio:clear_glass_ena_light_blue"
-  "enderio:clear_glass_ena_light_gray"
-  "enderio:clear_glass_ena_lime"
-  "enderio:clear_glass_ena_magenta"
-  "enderio:clear_glass_ena_orange"
-  "enderio:clear_glass_ena_pink"
-  "enderio:clear_glass_ena_purple"
-  "enderio:clear_glass_ena_red"
-  "enderio:clear_glass_ena_white"
-  "enderio:clear_glass_ena_yellow"
-  "enderio:clear_glass_enm"
-  "enderio:clear_glass_enm_black"
-  "enderio:clear_glass_enm_blue"
-  "enderio:clear_glass_enm_brown"
-  "enderio:clear_glass_enm_cyan"
-  "enderio:clear_glass_enm_gray"
-  "enderio:clear_glass_enm_green"
-  "enderio:clear_glass_enm_light_blue"
-  "enderio:clear_glass_enm_light_gray"
-  "enderio:clear_glass_enm_lime"
-  "enderio:clear_glass_enm_magenta"
-  "enderio:clear_glass_enm_orange"
-  "enderio:clear_glass_enm_pink"
-  "enderio:clear_glass_enm_purple"
-  "enderio:clear_glass_enm_red"
-  "enderio:clear_glass_enm_white"
-  "enderio:clear_glass_enm_yellow"
-  "enderio:clear_glass_enp"
-  "enderio:clear_glass_enp_black"
-  "enderio:clear_glass_enp_blue"
-  "enderio:clear_glass_enp_brown"
-  "enderio:clear_glass_enp_cyan"
-  "enderio:clear_glass_enp_gray"
-  "enderio:clear_glass_enp_green"
-  "enderio:clear_glass_enp_light_blue"
-  "enderio:clear_glass_enp_light_gray"
-  "enderio:clear_glass_enp_lime"
-  "enderio:clear_glass_enp_magenta"
-  "enderio:clear_glass_enp_orange"
-  "enderio:clear_glass_enp_pink"
-  "enderio:clear_glass_enp_purple"
-  "enderio:clear_glass_enp_red"
-  "enderio:clear_glass_enp_white"
-  "enderio:clear_glass_enp_yellow"
-  "enderio:clear_glass_ep"
-  "enderio:clear_glass_ep_black"
-  "enderio:clear_glass_ep_blue"
-  "enderio:clear_glass_ep_brown"
-  "enderio:clear_glass_ep_cyan"
-  "enderio:clear_glass_ep_gray"
-  "enderio:clear_glass_ep_green"
-  "enderio:clear_glass_ep_light_blue"
-  "enderio:clear_glass_ep_light_gray"
-  "enderio:clear_glass_ep_lime"
-  "enderio:clear_glass_ep_magenta"
-  "enderio:clear_glass_ep_orange"
-  "enderio:clear_glass_ep_pink"
-  "enderio:clear_glass_ep_purple"
-  "enderio:clear_glass_ep_red"
-  "enderio:clear_glass_ep_white"
-  "enderio:clear_glass_ep_yellow"
-  "enderio:clear_glass_gray"
-  "enderio:clear_glass_green"
-  "enderio:clear_glass_light_blue"
-  "enderio:clear_glass_light_gray"
-  "enderio:clear_glass_lime"
-  "enderio:clear_glass_m"
-  "enderio:clear_glass_m_black"
-  "enderio:clear_glass_m_blue"
-  "enderio:clear_glass_m_brown"
-  "enderio:clear_glass_m_cyan"
-  "enderio:clear_glass_m_gray"
-  "enderio:clear_glass_m_green"
-  "enderio:clear_glass_m_light_blue"
-  "enderio:clear_glass_m_light_gray"
-  "enderio:clear_glass_m_lime"
-  "enderio:clear_glass_m_magenta"
-  "enderio:clear_glass_m_orange"
-  "enderio:clear_glass_m_pink"
-  "enderio:clear_glass_m_purple"
-  "enderio:clear_glass_m_red"
-  "enderio:clear_glass_m_white"
-  "enderio:clear_glass_m_yellow"
-  "enderio:clear_glass_magenta"
-  "enderio:clear_glass_na"
-  "enderio:clear_glass_na_black"
-  "enderio:clear_glass_na_blue"
-  "enderio:clear_glass_na_brown"
-  "enderio:clear_glass_na_cyan"
-  "enderio:clear_glass_na_gray"
-  "enderio:clear_glass_na_green"
-  "enderio:clear_glass_na_light_blue"
-  "enderio:clear_glass_na_light_gray"
-  "enderio:clear_glass_na_lime"
-  "enderio:clear_glass_na_magenta"
-  "enderio:clear_glass_na_orange"
-  "enderio:clear_glass_na_pink"
-  "enderio:clear_glass_na_purple"
-  "enderio:clear_glass_na_red"
-  "enderio:clear_glass_na_white"
-  "enderio:clear_glass_na_yellow"
-  "enderio:clear_glass_nm"
-  "enderio:clear_glass_nm_black"
-  "enderio:clear_glass_nm_blue"
-  "enderio:clear_glass_nm_brown"
-  "enderio:clear_glass_nm_cyan"
-  "enderio:clear_glass_nm_gray"
-  "enderio:clear_glass_nm_green"
-  "enderio:clear_glass_nm_light_blue"
-  "enderio:clear_glass_nm_light_gray"
-  "enderio:clear_glass_nm_lime"
-  "enderio:clear_glass_nm_magenta"
-  "enderio:clear_glass_nm_orange"
-  "enderio:clear_glass_nm_pink"
-  "enderio:clear_glass_nm_purple"
-  "enderio:clear_glass_nm_red"
-  "enderio:clear_glass_nm_white"
-  "enderio:clear_glass_nm_yellow"
-  "enderio:clear_glass_np"
-  "enderio:clear_glass_np_black"
-  "enderio:clear_glass_np_blue"
-  "enderio:clear_glass_np_brown"
-  "enderio:clear_glass_np_cyan"
-  "enderio:clear_glass_np_gray"
-  "enderio:clear_glass_np_green"
-  "enderio:clear_glass_np_light_blue"
-  "enderio:clear_glass_np_light_gray"
-  "enderio:clear_glass_np_lime"
-  "enderio:clear_glass_np_magenta"
-  "enderio:clear_glass_np_orange"
-  "enderio:clear_glass_np_pink"
-  "enderio:clear_glass_np_purple"
-  "enderio:clear_glass_np_red"
-  "enderio:clear_glass_np_white"
-  "enderio:clear_glass_np_yellow"
-  "enderio:clear_glass_orange"
-  "enderio:clear_glass_p"
-  "enderio:clear_glass_p_black"
-  "enderio:clear_glass_p_blue"
-  "enderio:clear_glass_p_brown"
-  "enderio:clear_glass_p_cyan"
-  "enderio:clear_glass_p_gray"
-  "enderio:clear_glass_p_green"
-  "enderio:clear_glass_p_light_blue"
-  "enderio:clear_glass_p_light_gray"
-  "enderio:clear_glass_p_lime"
-  "enderio:clear_glass_p_magenta"
-  "enderio:clear_glass_p_orange"
-  "enderio:clear_glass_p_pink"
-  "enderio:clear_glass_p_purple"
-  "enderio:clear_glass_p_red"
-  "enderio:clear_glass_p_white"
-  "enderio:clear_glass_p_yellow"
-  "enderio:clear_glass_pink"
-  "enderio:clear_glass_purple"
-  "enderio:clear_glass_red"
-  "enderio:clear_glass_white"
-  "enderio:clear_glass_yellow"
-]

```


</details>

<details>
<summary>minecraft:item/c:dusts/cobalt</summary>

```diff
-[
-  "enderio:powdered_cobalt"
-]

```


</details>

<details>
<summary>minecraft:item/c:ingots/copper_alloy</summary>

```diff
-[
-  "enderio:copper_alloy_ingot"
-]

```


</details>

<details>
<summary>minecraft:item/c:nuggets/copper_alloy</summary>

```diff
-[
-  "enderio:copper_alloy_nugget"
-]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks/copper_alloy</summary>

```diff
-[
-  "enderio:copper_alloy_block"
-]

```


</details>

<details>
<summary>minecraft:item/enderio:dark_steel_upgradeable_axe</summary>

```diff
-[
-  "enderio:dark_steel_axe"
-]

```


</details>

<details>
<summary>minecraft:item/enderio:dark_steel_upgradeable_boots</summary>

```diff
-[
-  "enderio:dark_steel_boots"
-]

```


</details>

<details>
<summary>minecraft:item/enderio:dark_steel_upgradeable_chestplate</summary>

```diff
-[
-  "enderio:dark_steel_chestplate"
-]

```


</details>

<details>
<summary>minecraft:item/enderio:dark_steel_upgradeable_helmet</summary>

```diff
-[
-  "enderio:dark_steel_helmet"
-]

```


</details>

<details>
<summary>minecraft:item/enderio:dark_steel_upgradeable_leggings</summary>

```diff
-[
-  "enderio:dark_steel_leggings"
-]

```


</details>

<details>
<summary>minecraft:item/enderio:dark_steel_upgradeable_pickaxe</summary>

```diff
-[
-  "enderio:dark_steel_pickaxe"
-]

```


</details>

<details>
<summary>minecraft:item/enderio:dark_steel_upgradeable_sword</summary>

```diff
-[
-  "enderio:dark_steel_sword"
-]

```


</details>

<details>
<summary>minecraft:item/eternal_starlight:cools_alloy_furnace</summary>

```diff
-[
-  "eternal_starlight:frozen_tube"
-]

```


</details>

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
<summary>Changed (8)</summary>
<blockquote>

<details>
<summary>block</summary>

```diff
 [
   ... (11747 entries)
+  "cobblemon:antidote"
   ... (18 entries)
+  "cobblemon:awakening"
   ... (6 entries)
+  "cobblemon:black_plaque"
   ... (10 entries)
+  "cobblemon:blue_plaque"
   ... (1 entries)
+  "cobblemon:blunder_policy"
+  "cobblemon:brown_plaque"
+  "cobblemon:burn_heal"
   ... (19 entries)
+  "cobblemon:cleanse_tag"
   ... (5 entries)
+  "cobblemon:cyan_plaque"
   ... (12 entries)
+  "cobblemon:dire_hit"
   ... (6 entries)
+  "cobblemon:elixir"
   ... (2 entries)
+  "cobblemon:ether"
   ... (4 entries)
+  "cobblemon:full_heal"
+  "cobblemon:full_restore"
   ... (4 entries)
+  "cobblemon:gray_plaque"
   ... (4 entries)
+  "cobblemon:green_plaque"
   ... (1 entries)
+  "cobblemon:guard_spec"
   ... (6 entries)
+  "cobblemon:hyper_potion"
   ... (1 entries)
+  "cobblemon:ice_heal"
   ... (16 entries)
+  "cobblemon:light_blue_plaque"
+  "cobblemon:light_gray_plaque"
+  "cobblemon:lime_plaque"
   ... (1 entries)
+  "cobblemon:magenta_plaque"
   ... (3 entries)
+  "cobblemon:max_elixir"
+  "cobblemon:max_ether"
+  "cobblemon:max_potion"
   ... (13 entries)
+  "cobblemon:orange_plaque"
   ... (1 entries)
+  "cobblemon:paralyze_heal"
   ... (13 entries)
+  "cobblemon:pink_plaque"
   ... (15 entries)
+  "cobblemon:potion"
   ... (9 entries)
+  "cobblemon:purple_plaque"
   ... (7 entries)
+  "cobblemon:red_plaque"
   ... (49 entries)
+  "cobblemon:spell_tag"
   ... (8 entries)
+  "cobblemon:super_potion"
   ... (19 entries)
+  "cobblemon:weakness_policy"
   ... (5 entries)
+  "cobblemon:white_plaque"
   ... (1 entries)
+  "cobblemon:x_accuracy"
+  "cobblemon:x_attack"
+  "cobblemon:x_defence"
+  "cobblemon:x_special_attack"
+  "cobblemon:x_special_defence"
+  "cobblemon:x_speed"
   ... (4 entries)
+  "cobblemon:yellow_plaque"
   ... (2973 entries)
-  "enderio:copper_alloy_block"
   ... (380 entries)
-  "enderio:industrial_insulation_block"
+  "enderio:industrial_insulation"
   ... (4 entries)
+  "enderio:niard"
   ... (166 entries)
+  "eternal_starlight:chiseled_toxite"
   ... (343 entries)
+  "eternal_starlight:oxidized_alloy_furnace"
   ... (15 entries)
+  "eternal_starlight:permafrost_spawner"
   ... (258 entries)
+  "eternal_starlight:toxite_brick_slab"
+  "eternal_starlight:toxite_brick_stairs"
+  "eternal_starlight:toxite_brick_wall"
+  "eternal_starlight:toxite_bricks"
   ... (33 entries)
+  "eternal_starlight:waxed_alloy_furnace"
   ... (3748 entries)
-  "mysticalagriculture:kivi_crop"
   ... (120 entries)
-  "mysticalagriculture:xychorium_gem_crop"
   ... (9261 entries)
   ... (3344 entries)
 ]

```


</details>

<details>
<summary>block_entity_type</summary>

```diff
 [
   ... (569 entries)
+  "enderio:niard"
   ... (42 entries)
+  "eternal_starlight:permafrost_spawner"
   ... (1476 entries)
 ]

```


</details>

<details>
<summary>entity_type</summary>

```diff
 [
   ... (440 entries)
+  "eternal_starlight:seeker"
   ... (15 entries)
+  "eternal_starlight:tentacle_spike"
   ... (531 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (13737 entries)
+  "cobblemon:black_plaque"
   ... (13 entries)
+  "cobblemon:blue_plaque"
   ... (6 entries)
+  "cobblemon:brown_plaque"
   ... (57 entries)
+  "cobblemon:cyan_plaque"
   ... (95 entries)
+  "cobblemon:gray_plaque"
   ... (7 entries)
+  "cobblemon:green_plaque"
   ... (65 entries)
+  "cobblemon:light_blue_plaque"
   ... (1 entries)
+  "cobblemon:light_gray_plaque"
+  "cobblemon:lime_plaque"
   ... (15 entries)
+  "cobblemon:magenta_plaque"
   ... (61 entries)
+  "cobblemon:orange_plaque"
   ... (22 entries)
+  "cobblemon:pink_plaque"
   ... (51 entries)
+  "cobblemon:purple_plaque"
   ... (21 entries)
+  "cobblemon:red_plaque"
   ... (174 entries)
+  "cobblemon:white_plaque"
   ... (13 entries)
+  "cobblemon:yellow_plaque"
   ... (2983 entries)
-  "enderio:black_paper"
   ... (2 entries)
-  "enderio:cake_base"
-  "enderio:clayed_glowstone"
   ... (371 entries)
-  "enderio:copper_alloy_block"
-  "enderio:copper_alloy_grinding_ball"
-  "enderio:copper_alloy_ingot"
-  "enderio:copper_alloy_nugget"
   ... (2 entries)
+  "enderio:creative_tab_icon"
   ... (1 entries)
-  "enderio:dark_steel_axe"
   ... (2 entries)
-  "enderio:dark_steel_boots"
-  "enderio:dark_steel_chestplate"
   ... (2 entries)
-  "enderio:dark_steel_helmet"
   ... (2 entries)
-  "enderio:dark_steel_leggings"
   ... (1 entries)
-  "enderio:dark_steel_pickaxe"
   ... (3 entries)
-  "enderio:dark_steel_upgrade_blank"
-  "enderio:dark_steel_upgrade_direct"
-  "enderio:dark_steel_upgrade_elytra"
-  "enderio:dark_steel_upgrade_empowered_1"
-  "enderio:dark_steel_upgrade_empowered_2"
-  "enderio:dark_steel_upgrade_empowered_3"
-  "enderio:dark_steel_upgrade_empowered_4"
-  "enderio:dark_steel_upgrade_fork"
-  "enderio:dark_steel_upgrade_glider"
-  "enderio:dark_steel_upgrade_jump_1"
-  "enderio:dark_steel_upgrade_jump_2"
-  "enderio:dark_steel_upgrade_nightvision"
-  "enderio:dark_steel_upgrade_penetration_1"
-  "enderio:dark_steel_upgrade_penetration_2"
-  "enderio:dark_steel_upgrade_solar_1"
-  "enderio:dark_steel_upgrade_solar_2"
-  "enderio:dark_steel_upgrade_solar_3"
-  "enderio:dark_steel_upgrade_speedboost1"
-  "enderio:dark_steel_upgrade_speedboost2"
-  "enderio:dark_steel_upgrade_speedboost3"
-  "enderio:dark_steel_upgrade_spoon"
-  "enderio:dark_steel_upgrade_step_assist"
-  "enderio:dark_steel_upgrade_tnt"
-  "enderio:dark_steel_upgrade_tnt2"
-  "enderio:dark_steel_upgrade_travel"
   ... (14 entries)
-  "enderio:enderface_conduits"
-  "enderio:enderface_invpanel"
-  "enderio:enderface_items"
-  "enderio:enderface_machines"
-  "enderio:enderface_materials"
-  "enderio:enderface_mobs"
-  "enderio:enderface_none"
   ... (12 entries)
-  "enderio:flour"
   ... (366 entries)
-  "enderio:industrial_insulation_block"
+  "enderio:industrial_insulation"
   ... (9 entries)
-  "enderio:nethercotta"
+  "enderio:niard"
   ... (3 entries)
-  "enderio:organic_black_dye"
-  "enderio:organic_brown_dye"
-  "enderio:organic_green_dye"
   ... (19 entries)
-  "enderio:powdered_cobalt"
   ... (275 entries)
+  "eternal_starlight:chiseled_toxite"
   ... (340 entries)
+  "eternal_starlight:lunar_monstrosity_spawn_egg"
   ... (57 entries)
+  "eternal_starlight:music_disc_ether_rain"
   ... (61 entries)
+  "eternal_starlight:oxidized_alloy_furnace"
   ... (19 entries)
+  "eternal_starlight:permafrost_spawner"
   ... (141 entries)
+  "eternal_starlight:seeker_spawn_egg"
   ... (47 entries)
+  "eternal_starlight:starlight_golem_spawn_egg"
   ... (55 entries)
+  "eternal_starlight:tentacle_spike"
   ... (4 entries)
+  "eternal_starlight:the_gatekeeper_spawn_egg"
   ... (60 entries)
+  "eternal_starlight:toxite_brick_slab"
+  "eternal_starlight:toxite_brick_stairs"
+  "eternal_starlight:toxite_brick_wall"
+  "eternal_starlight:toxite_bricks"
   ... (39 entries)
+  "eternal_starlight:waxed_alloy_furnace"
   ... (2814 entries)
+  "little_big_redstone:redstone_circuit_board"
   ... (3070 entries)
-  "mysticalagriculture:kivi_essence"
-  "mysticalagriculture:kivi_seeds"
   ... (316 entries)
-  "mysticalagriculture:xychorium_gem_essence"
-  "mysticalagriculture:xychorium_gem_seeds"
   ... (10095 entries)
   ... (6262 entries)
 ]

```


</details>

<details>
<summary>mob_effect</summary>

```diff
 [
   ... (53 entries)
+  "cobblemon:cleanse_all"
+  "cobblemon:cleanse_negative"
+  "cobblemon:mental_restoration"
   ... (122 entries)
 ]

```


</details>

<details>
<summary>worldgen/biome</summary>

```diff
 [
   ... (110 entries)
+  "terralith:alpha_islands"
+  "terralith:alpha_islands_winter"
+  "terralith:alpine_grove"
+  "terralith:alpine_highlands"
+  "terralith:amethyst_canyon"
+  "terralith:amethyst_rainforest"
+  "terralith:ancient_sands"
+  "terralith:arid_highlands"
+  "terralith:ashen_savanna"
+  "terralith:basalt_cliffs"
+  "terralith:birch_taiga"
+  "terralith:blooming_plateau"
+  "terralith:blooming_valley"
+  "terralith:brushland"
+  "terralith:bryce_canyon"
+  "terralith:caldera"
+  "terralith:cave/andesite_caves"
+  "terralith:cave/deep_caves"
+  "terralith:cave/diorite_caves"
+  "terralith:cave/frostfire_caves"
+  "terralith:cave/fungal_caves"
+  "terralith:cave/granite_caves"
+  "terralith:cave/infested_caves"
+  "terralith:cave/mantle_caves"
+  "terralith:cave/thermal_caves"
+  "terralith:cave/tuff_caves"
+  "terralith:cave/underground_jungle"
+  "terralith:cloud_forest"
+  "terralith:cold_shrubland"
+  "terralith:deep_warm_ocean"
+  "terralith:desert_canyon"
+  "terralith:desert_oasis"
+  "terralith:desert_spires"
+  "terralith:emerald_peaks"
+  "terralith:forested_highlands"
+  "terralith:fractured_savanna"
+  "terralith:frozen_cliffs"
+  "terralith:glacial_chasm"
+  "terralith:granite_cliffs"
+  "terralith:gravel_beach"
+  "terralith:gravel_desert"
+  "terralith:haze_mountain"
+  "terralith:highlands"
+  "terralith:hot_shrubland"
+  "terralith:ice_marsh"
+  "terralith:jungle_mountains"
+  "terralith:lavender_forest"
+  "terralith:lavender_valley"
+  "terralith:lush_desert"
+  "terralith:lush_valley"
+  "terralith:mirage_isles"
+  "terralith:moonlight_grove"
+  "terralith:moonlight_valley"
+  "terralith:orchid_swamp"
+  "terralith:painted_mountains"
+  "terralith:red_oasis"
+  "terralith:rocky_jungle"
+  "terralith:rocky_mountains"
+  "terralith:rocky_shrubland"
+  "terralith:sakura_grove"
+  "terralith:sakura_valley"
+  "terralith:sandstone_valley"
+  "terralith:savanna_badlands"
+  "terralith:savanna_slopes"
+  "terralith:scarlet_mountains"
+  "terralith:shield"
+  "terralith:shield_clearing"
+  "terralith:shrubland"
+  "terralith:siberian_grove"
+  "terralith:siberian_taiga"
+  "terralith:skylands_autumn"
+  "terralith:skylands_spring"
+  "terralith:skylands_summer"
+  "terralith:skylands_winter"
+  "terralith:snowy_badlands"
+  "terralith:snowy_cherry_grove"
+  "terralith:snowy_maple_forest"
+  "terralith:snowy_shield"
+  "terralith:steppe"
+  "terralith:stony_spires"
+  "terralith:temperate_highlands"
+  "terralith:tropical_jungle"
+  "terralith:valley_clearing"
+  "terralith:volcanic_crater"
+  "terralith:volcanic_peaks"
+  "terralith:warm_river"
+  "terralith:warped_mesa"
+  "terralith:white_cliffs"
+  "terralith:white_mesa"
+  "terralith:windswept_spires"
+  "terralith:wintry_forest"
+  "terralith:wintry_lowlands"
+  "terralith:yellowstone"
+  "terralith:yosemite_cliffs"
+  "terralith:yosemite_lowlands"
   ... (51 entries)
 ]

```


</details>

<details>
<summary>worldgen/placed_feature</summary>

```diff
 [
   ... (269 entries)
+  "eternal_starlight:blue_crystal_moss_patch_ceiling"
   ... (51 entries)
+  "eternal_starlight:red_crystal_moss_patch_ceiling"
   ... (790 entries)
+  "terralith:alpha/clay_patch"
+  "terralith:alpha/flowers"
+  "terralith:alpha/flowers_2"
+  "terralith:alpha/sand_beaches"
+  "terralith:alpha/trees"
+  "terralith:birch/birch_tall"
+  "terralith:birch/cloud_tree_tall"
+  "terralith:birch/disk_stone"
+  "terralith:birch/fallen_tree"
+  "terralith:birch/flowers"
+  "terralith:birch/minecon_flowers"
+  "terralith:birch/tree_log"
+  "terralith:birch/tree_log_extra"
+  "terralith:birch/tree_moss"
+  "terralith:birch/trees_forest"
+  "terralith:birch/trees_forest_negative"
+  "terralith:brushland/boulders"
+  "terralith:brushland/bushes"
+  "terralith:brushland/grass"
+  "terralith:brushland/grass_extra"
+  "terralith:brushland/patch_tall_grass"
+  "terralith:caldera/crater_fixer"
+  "terralith:caldera/lakes"
+  "terralith:canyon/blooming/flowers"
+  "terralith:canyon/blooming/flowers_white"
+  "terralith:canyon/cliff/calcite_lower"
+  "terralith:canyon/cliff/calcite_upper"
+  "terralith:canyon/cliff/grass_lower"
+  "terralith:canyon/cliff/grass_upper"
+  "terralith:canyon/cliff/tuff_lower"
+  "terralith:canyon/cliff/tuff_upper"
+  "terralith:canyon/generic/slab_stone"
+  "terralith:canyon/glacial/snow_surface"
+  "terralith:canyon/red_sandstone/clay"
+  "terralith:canyon/red_sandstone/dripleaf"
+  "terralith:canyon/red_sandstone/lake_palms"
+  "terralith:canyon/red_sandstone/lakes"
+  "terralith:canyon/red_sandstone/lilypad"
+  "terralith:canyon/red_sandstone/moss"
+  "terralith:canyon/red_sandstone/moss_carpet"
+  "terralith:canyon/red_sandstone/palm_1"
+  "terralith:canyon/red_sandstone/scattered_palms"
+  "terralith:canyon/red_sandstone/terracotta"
+  "terralith:canyon/sandstone/clay"
+  "terralith:canyon/sandstone/cliff"
+  "terralith:canyon/sandstone/dripleaf"
+  "terralith:canyon/sandstone/lake_palms"
+  "terralith:canyon/sandstone/lakes"
+  "terralith:canyon/sandstone/lilypad"
+  "terralith:canyon/sandstone/moss"
+  "terralith:canyon/sandstone/moss_carpet"
+  "terralith:canyon/sandstone/palm_1"
+  "terralith:canyon/sandstone/sandstone"
+  "terralith:canyon/sandstone/scattered_palms"
+  "terralith:canyon/sandstone/slab"
+  "terralith:canyon/sandstone/slab_smooth"
+  "terralith:cave/frostfire/columns"
+  "terralith:cave/frostfire/frostfire_ceiling"
+  "terralith:cave/frostfire/frostfire_patch"
+  "terralith:cave/frostfire/lava_remover"
+  "terralith:cave/frostfire/pillar"
+  "terralith:cave/frostfire/pillar_huge"
+  "terralith:cave/frostfire/replacer"
+  "terralith:cave/frostfire/sculk_patch"
+  "terralith:cave/fuck_art_just_need_performance/andesite"
+  "terralith:cave/fuck_art_just_need_performance/blackstone"
+  "terralith:cave/fuck_art_just_need_performance/diorite"
+  "terralith:cave/fuck_art_just_need_performance/granite"
+  "terralith:cave/fuck_art_just_need_performance/split/andesite"
+  "terralith:cave/fuck_art_just_need_performance/split/diorite"
+  "terralith:cave/fuck_art_just_need_performance/split/granite"
+  "terralith:cave/fuck_art_just_need_performance/tuff"
+  "terralith:cave/fungal/ceiling"
+  "terralith:cave/fungal/floor"
+  "terralith:cave/fungal/hanging_roots_cluster"
+  "terralith:cave/fungal/hanging_roots_single"
+  "terralith:cave/fungal/lichen_patch"
+  "terralith:cave/fungal/ore_coal_extra"
+  "terralith:cave/fungal/patch_mushroom"
+  "terralith:cave/fungal/vines"
+  "terralith:cave/generic/ds_reducer"
+  "terralith:cave/generic/ds_reducer_small"
+  "terralith:cave/generic/noise_reducer"
+  "terralith:cave/generic/noise_reducer_small"
+  "terralith:cave/infested/cobble_vein"
+  "terralith:cave/infested/dungeon_extra"
+  "terralith:cave/infested/hanging_cobwebs"
+  "terralith:cave/jungle/ceiling_moss"
+  "terralith:cave/jungle/floor"
+  "terralith:cave/jungle/mud_water"
+  "terralith:cave/jungle/sugar_cane"
+  "terralith:cave/jungle/vegetation"
+  "terralith:cave/mantle/basalt_strip"
+  "terralith:cave/mantle/lava_drip"
+  "terralith:cave/mantle/magma_strip"
+  "terralith:cave/stone/andesite_boulders"
+  "terralith:cave/stone/diorite_clearing"
+  "terralith:cave/stone/diorite_clearing_large"
+  "terralith:cave/stone/diorite_clearing_small"
+  "terralith:cave/stone/granite_pillar_large"
+  "terralith:cave/stone/granite_pillar_small"
+  "terralith:cave/stone/granite_roots"
+  "terralith:cave/thermal/dripleaf_clay"
+  "terralith:cave/thermal/dripleaf_water"
+  "terralith:cave/thermal/dripstone"
+  "terralith:cave/thermal/lakes"
+  "terralith:cave/thermal/lichen_clay"
+  "terralith:cave/thermal/sea_pickle"
+  "terralith:cave/thermal/surface/ceiling"
+  "terralith:cave/thermal/surface/ceiling_low"
+  "terralith:cave/thermal/surface/clay"
+  "terralith:cave/thermal/surface/clay_low"
+  "terralith:cave/thermal/surface/floor"
+  "terralith:cave/thermal/surface/floor_low"
+  "terralith:cave/thermal/underwater_magma"
+  "terralith:cherry/azalea_bush"
+  "terralith:cherry/flowers_extra"
+  "terralith:cherry/rock"
+  "terralith:cliffs/basalt/basalt_column"
+  "terralith:cliffs/basalt/basalt_column_upper"
+  "terralith:cliffs/basalt/basaltifier"
+  "terralith:cliffs/basalt/crack"
+  "terralith:cliffs/basalt/crack_deepslate"
+  "terralith:cliffs/basalt/seed"
+  "terralith:cliffs/basalt/seed_deepslate"
+  "terralith:cliffs/frozen/blue_ice"
+  "terralith:cliffs/frozen/icicle"
+  "terralith:cliffs/frozen/puddle"
+  "terralith:cliffs/granite/granitifier"
+  "terralith:cliffs/white/andesite_crack"
+  "terralith:cliffs/white/andesite_seed"
+  "terralith:cliffs/white/birch_alt"
+  "terralith:cliffs/white/calcitifier"
+  "terralith:cliffs/white/diorite_crack"
+  "terralith:cliffs/white/diorite_seed"
+  "terralith:cliffs/white/moss_patch"
+  "terralith:cliffs/white/trees_small"
+  "terralith:coastal/bending_acacia"
+  "terralith:coastal/big_hawaii"
+  "terralith:coastal/fancy_oak"
+  "terralith:coastal/jungle_tree"
+  "terralith:coastal/trees_hawaii"
+  "terralith:dark/birch"
+  "terralith:dark/brown_mushroom"
+  "terralith:dark/brown_mushroom_2"
+  "terralith:dark/disk_mud"
+  "terralith:dark/disk_podzol"
+  "terralith:dark/grass"
+  "terralith:dark/lichen"
+  "terralith:dark/lichen_log"
+  "terralith:dark/oak"
+  "terralith:dark/patch_mushroom"
+  "terralith:dark/red_mushroom"
+  "terralith:dark/red_mushroom_2"
+  "terralith:dark/trees"
+  "terralith:dark/twilight_tree"
+  "terralith:desert/gravel/coral_fans"
+  "terralith:desert/lush/cacti"
+  "terralith:desert/lush/grass"
+  "terralith:desert/lush/grass_sand"
+  "terralith:desert/sandstone"
+  "terralith:desert/spires/calcite_tip"
+  "terralith:enchanted/big_tree"
+  "terralith:enchanted/enchanted_oak"
+  "terralith:enchanted/jungle_tree"
+  "terralith:enchanted/shrooms"
+  "terralith:enchanted/shrooms_brown"
+  "terralith:enchanted/small_shrooms"
+  "terralith:enchanted/small_shrooms_brown"
+  "terralith:enchanted/trees"
+  "terralith:erosion/cobble_line"
+  "terralith:erosion/moss_line"
+  "terralith:erosion/slabs"
+  "terralith:erosion/tuff_line"
+  "terralith:erosion/wind_line"
+  "terralith:erosion/wind_line_special"
+  "terralith:flower/blue/amethysts"
+  "terralith:flower/blue/birch_tree"
+  "terralith:flower/blue/blue_disk"
+  "terralith:flower/blue/blue_tree"
+  "terralith:flower/blue/flowers"
+  "terralith:flower/blue/main_tree"
+  "terralith:flower/blue/nylium_disk"
+  "terralith:flower/blue/orange_tulips"
+  "terralith:flower/blue/trees"
+  "terralith:flower/lavender/disk_clay"
+  "terralith:flower/lavender/flower"
+  "terralith:flower/lavender/main_tree"
+  "terralith:flower/lavender/trees"
+  "terralith:flower/white/birch_bending"
+  "terralith:flower/white/cloud_tree"
+  "terralith:flower/white/cloud_tree_bending"
+  "terralith:flower/white/flowers"
+  "terralith:flower/white/trees"
+  "terralith:flower/white/twilight_tree"
+  "terralith:forest/flower/beaches"
+  "terralith:forest/flower/cloud_tree"
+  "terralith:forest/flower/cloud_trees"
+  "terralith:forest/flower/mid/birch_mid"
+  "terralith:forest/flower/mid/oak_mid"
+  "terralith:forest/flower/mid/oak_mid_m"
+  "terralith:forest/flower/mid/trees_mid"
+  "terralith:forest/flower/small/birch_small"
+  "terralith:forest/flower/small/oak_small"
+  "terralith:forest/flower/small/oak_small_m"
+  "terralith:forest/flower/small/trees_small"
+  "terralith:forest/flower/tall/trees_tall"
+  "terralith:forest/flower/tiny/trees_tiny"
+  "terralith:forest/vanilla/flowers"
+  "terralith:forest/vanilla/trees"
+  "terralith:forest/vanilla/trees_flower"
+  "terralith:grove/alpine/trees_tiny"
+  "terralith:grove/mid/trees_mid"
+  "terralith:grove/small/trees_small"
+  "terralith:grove/tall/trees_tall"
+  "terralith:grove/tiny/trees_tiny"
+  "terralith:highlands/alpine/bushes"
+  "terralith:highlands/alpine/grass"
+  "terralith:highlands/alpine/grass_extra"
+  "terralith:highlands/alpine/pine"
+  "terralith:highlands/alpine/spruce_pine"
+  "terralith:highlands/arid/bush_medium"
+  "terralith:highlands/arid/bush_small"
+  "terralith:highlands/arid/bushes"
+  "terralith:highlands/arid/cliff"
+  "terralith:highlands/arid/tree"
+  "terralith:highlands/disk_gravel"
+  "terralith:highlands/flowers"
+  "terralith:highlands/forest/creek"
+  "terralith:highlands/forest/disk_gravel"
+  "terralith:highlands/forest/flowers"
+  "terralith:highlands/forest/grass"
+  "terralith:highlands/forest/mid/pine_mid"
+  "terralith:highlands/forest/mid/spruce_mid_m"
+  "terralith:highlands/forest/mid/trees_mid"
+  "terralith:highlands/forest/small/trees_small"
+  "terralith:highlands/forest/tall/trees_tall"
+  "terralith:highlands/forest/tall_flowers"
+  "terralith:highlands/forest/tiny/trees_tiny"
+  "terralith:highlands/forest/trees_maple"
+  "terralith:highlands/forest/trees_maple_cold"
+  "terralith:highlands/grass"
+  "terralith:highlands/lake"
+  "terralith:highlands/lichen"
+  "terralith:highlands/pillar"
+  "terralith:highlands/steppe/bush"
+  "terralith:highlands/steppe/bush_medium"
+  "terralith:highlands/steppe/bush_small"
+  "terralith:highlands/tall_flowers"
+  "terralith:highlands/temperate/cloud_trees"
+  "terralith:highlands/temperate/dark_oak"
+  "terralith:highlands/temperate/flowers"
+  "terralith:highlands/temperate/mid/pine_mid"
+  "terralith:highlands/temperate/mid/spruce_mid"
+  "terralith:highlands/temperate/mid/spruce_mid_m"
+  "terralith:highlands/temperate/pile_birch"
+  "terralith:highlands/temperate/pile_oak"
+  "terralith:highlands/temperate/small/pine_small"
+  "terralith:highlands/temperate/small/spruce_small"
+  "terralith:highlands/temperate/small/spruce_small_m"
+  "terralith:highlands/temperate/tall/pine_tall"
+  "terralith:highlands/temperate/tall/spruce_tall"
+  "terralith:highlands/temperate/tall/spruce_tall_m"
+  "terralith:highlands/temperate/tiny/pine_tiny"
+  "terralith:highlands/temperate/tiny/spruce_tiny"
+  "terralith:highlands/temperate/tiny/spruce_tiny_m"
+  "terralith:highlands/temperate/trees_neg"
+  "terralith:highlands/temperate/trees_orange"
+  "terralith:highlands/temperate/trees_pos"
+  "terralith:highlands/trees"
+  "terralith:highlands/vines_seed"
+  "terralith:highlands/vines_spread"
+  "terralith:jungle/amethyst/acacia_azalea"
+  "terralith:jungle/amethyst/bending_acacia"
+  "terralith:jungle/amethyst/big_hawaii"
+  "terralith:jungle/amethyst/cliff"
+  "terralith:jungle/amethyst/small_azalea"
+  "terralith:jungle/amethyst/tree_2x2"
+  "terralith:jungle/amethyst/tree_2x2_azalea"
+  "terralith:jungle/amethyst/tree_2x2_azalea_flowering"
+  "terralith:jungle/amethyst/trees"
+  "terralith:jungle/mega/giant_tree/branch"
+  "terralith:jungle/mega/giant_tree/branch_2"
+  "terralith:jungle/mega/giant_tree/top"
+  "terralith:jungle/mega/giant_tree/trunk"
+  "terralith:jungle/mountains/slab_andesite"
+  "terralith:jungle/mountains/slab_stone"
+  "terralith:jungle/patch_melon"
+  "terralith:jungle/rocky/cliff"
+  "terralith:jungle/vanilla/bending_jungle_tree"
+  "terralith:jungle/vanilla/fancy_oak_bend"
+  "terralith:jungle/vanilla/fence_tree"
+  "terralith:jungle/vanilla/trees_jungle"
+  "terralith:mountains/emerald/emerald_geode"
+  "terralith:mountains/emerald/trees/mid/pine_mid"
+  "terralith:mountains/emerald/trees/mid/spruce_mid"
+  "terralith:mountains/emerald/trees/mid/spruce_mid_m"
+  "terralith:mountains/emerald/trees/small/pine_small"
+  "terralith:mountains/emerald/trees/small/spruce_small"
+  "terralith:mountains/emerald/trees/small/spruce_small_m"
+  "terralith:mountains/emerald/trees/tall/pine_tall"
+  "terralith:mountains/emerald/trees/tall/spruce_tall"
+  "terralith:mountains/emerald/trees/tall/spruce_tall_m"
+  "terralith:mountains/emerald/trees/tiny/pine_tiny"
+  "terralith:mountains/emerald/trees/tiny/spruce_tiny"
+  "terralith:mountains/emerald/trees/tiny/spruce_tiny_m"
+  "terralith:mountains/misty/trees_base"
+  "terralith:mountains/misty/trees_birch"
+  "terralith:mountains/misty/trees_mid"
+  "terralith:mountains/misty/trees_top"
+  "terralith:mountains/misty/tuff"
+  "terralith:mountains/misty/tuff_lake"
+  "terralith:mountains/misty/v_lake"
+  "terralith:mountains/painted/surface_dx"
+  "terralith:mountains/rocky/deepslate"
+  "terralith:mountains/rocky/deepslate_extra"
+  "terralith:mountains/rocky/funny_snow"
+  "terralith:mountains/rocky/funny_snow_segwit_2x"
+  "terralith:mountains/rocky/snow"
+  "terralith:mountains/rocky/tuff"
+  "terralith:mountains/scarlet/crimson_patch"
+  "terralith:mountains/scarlet/remove_some_snow"
+  "terralith:mountains/scarlet/remove_steep_snow"
+  "terralith:mountains/scarlet/snow_patch"
+  "terralith:mushroom/bone_1"
+  "terralith:mushroom/bone_2"
+  "terralith:mushroom/brown_mushroom"
+  "terralith:mushroom/brown_mushroom_2"
+  "terralith:mushroom/brown_mushroom_small"
+  "terralith:mushroom/cloud_shroom_brown"
+  "terralith:mushroom/cloud_shroom_brown_2"
+  "terralith:mushroom/cloud_shroom_red"
+  "terralith:mushroom/cloud_shroom_red_2"
+  "terralith:mushroom/destroy_cliff"
+  "terralith:mushroom/huge_mushroom_scattered"
+  "terralith:mushroom/patch_mushroom"
+  "terralith:mushroom/patch_mushroom_small"
+  "terralith:mushroom/red_mushroom"
+  "terralith:mushroom/red_mushroom_2"
+  "terralith:mushroom/red_mushroom_small"
+  "terralith:mushroom/vanilla_huge_brown_mushroom"
+  "terralith:mushroom/vanilla_huge_red_mushroom"
+  "terralith:nothing"
+  "terralith:plains/patch_grass"
+  "terralith:plains/patch_tall_grass"
+  "terralith:sakura/bamboo"
+  "terralith:sakura/birch"
+  "terralith:sakura/birch_sparse"
+  "terralith:sakura/bush"
+  "terralith:sakura/cherry_trees"
+  "terralith:sakura/cherry_trees_light"
+  "terralith:sakura/clay_beaches"
+  "terralith:sakura/flowers"
+  "terralith:sakura/patch_podzol"
+  "terralith:sakura/sugarcane"
+  "terralith:sakura/tree_huge"
+  "terralith:sakura/tree_medium"
+  "terralith:sakura/tree_roof"
+  "terralith:savanna/badlands/grass"
+  "terralith:savanna/badlands/grass_granite"
+  "terralith:savanna/badlands/grass_gravel"
+  "terralith:savanna/badlands/grass_reg"
+  "terralith:savanna/baobabs"
+  "terralith:savanna/dripstone"
+  "terralith:savanna/shattered/acacia"
+  "terralith:savanna/shattered/med/acacia_med"
+  "terralith:savanna/shattered/med/oak_med"
+  "terralith:savanna/shattered/med/trees_med"
+  "terralith:savanna/shattered/oak_mutated"
+  "terralith:savanna/shattered/small/trees_small"
+  "terralith:savanna/shattered/teeth"
+  "terralith:savanna/shattered/tiny/oak_tiny"
+  "terralith:savanna/shattered/tiny/trees_tiny"
+  "terralith:savanna/shattered/trees_tall"
+  "terralith:savanna/terracotta"
+  "terralith:shield/birch"
+  "terralith:shield/spruce_big"
+  "terralith:shield/trees"
+  "terralith:shield/trees_birch"
+  "terralith:shield/trees_lark"
+  "terralith:shrubland/bushes"
+  "terralith:shrubland/cold/bushes"
+  "terralith:shrubland/cold/cone_trees"
+  "terralith:shrubland/cold/small_trees"
+  "terralith:shrubland/cold/tiny_trees"
+  "terralith:shrubland/cone_trees"
+  "terralith:shrubland/disk_podzol"
+  "terralith:shrubland/disk_terracotta"
+  "terralith:shrubland/hot/bushes"
+  "terralith:shrubland/hot/cone_trees"
+  "terralith:shrubland/hot/small_trees"
+  "terralith:shrubland/hot/tiny_trees"
+  "terralith:shrubland/small_trees"
+  "terralith:skylands/big_cone_tree"
+  "terralith:skylands/cloud_tree_birch"
+  "terralith:skylands/dirt_tops"
+  "terralith:skylands/extend_down"
+  "terralith:skylands/extend_down_high"
+  "terralith:skylands/floating_islands"
+  "terralith:skylands/grassy_tops"
+  "terralith:skylands/lichen"
+  "terralith:skylands/mega_tree"
+  "terralith:skylands/mid_tree"
+  "terralith:skylands/patch_grass"
+  "terralith:skylands/patch_pumpkin"
+  "terralith:skylands/spring/extend_down"
+  "terralith:skylands/spring/extend_down_high"
+  "terralith:skylands/spring/floating_islands"
+  "terralith:skylands/spring/flowers"
+  "terralith:skylands/spring/lake"
+  "terralith:skylands/spring/lichen"
+  "terralith:skylands/spring/trees"
+  "terralith:skylands/spring_water"
+  "terralith:skylands/summer/azalea_tree"
+  "terralith:skylands/summer/bending_acacia"
+  "terralith:skylands/summer/cactus"
+  "terralith:skylands/summer/dirt_lines"
+  "terralith:skylands/summer/extend_down"
+  "terralith:skylands/summer/extend_down_high"
+  "terralith:skylands/summer/floating_islands"
+  "terralith:skylands/summer/glowberries"
+  "terralith:skylands/summer/grassy_tops"
+  "terralith:skylands/summer/mud_lines"
+  "terralith:skylands/summer/tall_flowers"
+  "terralith:skylands/summer/trees"
+  "terralith:skylands/summer/vine"
+  "terralith:skylands/trees"
+  "terralith:skylands/waterfall"
+  "terralith:skylands/wheat"
+  "terralith:skylands/winter/big_oak"
+  "terralith:skylands/winter/extend_down"
+  "terralith:skylands/winter/extend_down_high"
+  "terralith:skylands/winter/floating_islands"
+  "terralith:skylands/winter/grassy_tops"
+  "terralith:skylands/winter/lichen"
+  "terralith:skylands/winter/mega_spruce"
+  "terralith:skylands/winter/oak"
+  "terralith:skylands/winter/trees"
+  "terralith:snowy/badlands/snow"
+  "terralith:snowy/badlands/terracotta"
+  "terralith:snowy/fix_grass"
+  "terralith:snowy/fix_snow"
+  "terralith:snowy/layer/first"
+  "terralith:snowy/layer/second"
+  "terralith:snowy/layer/third"
+  "terralith:snowy/max_spruce"
+  "terralith:snowy/mega_spruce"
+  "terralith:snowy/spruce"
+  "terralith:snowy/spruce_tiny"
+  "terralith:snowy/trees_center"
+  "terralith:snowy/trees_edge"
+  "terralith:snowy/trees_giant"
+  "terralith:snowy/trees_outer"
+  "terralith:spires/azalea_rare"
+  "terralith:spires/cliff"
+  "terralith:spires/dripstone"
+  "terralith:spires/grass"
+  "terralith:spires/oak_tree"
+  "terralith:spires/ore_diorite_upper"
+  "terralith:spires/patch_grass"
+  "terralith:spires/spruce_trees"
+  "terralith:spires/tall_foliage"
+  "terralith:swamp/ice/small/swamp_small"
+  "terralith:swamp/ice/small/swamp_special_small"
+  "terralith:swamp/ice/small/trees_small"
+  "terralith:swamp/ice/tiny/swamp_special_tiny"
+  "terralith:swamp/ice/tiny/swamp_tiny"
+  "terralith:swamp/ice/tiny/trees_tiny"
+  "terralith:swamp/orchid/dripleaf"
+  "terralith:swamp/orchid/dripleaf_clay"
+  "terralith:swamp/orchid/flowers"
+  "terralith:swamp/orchid/small/swamp_small"
+  "terralith:swamp/orchid/small/swamp_special_small"
+  "terralith:swamp/orchid/small/trees_small"
+  "terralith:swamp/orchid/tiny/swamp_special_tiny"
+  "terralith:swamp/orchid/tiny/swamp_tiny"
+  "terralith:swamp/vanilla/old_trees"
+  "terralith:swamp/vanilla/swamp_detail"
+  "terralith:swamp/vanilla/trees"
+  "terralith:swamp/vanilla/water_decor"
+  "terralith:taiga/birch/birch"
+  "terralith:taiga/birch/birch_small"
+  "terralith:taiga/birch/boulders"
+  "terralith:taiga/birch/cloud_tree"
+  "terralith:taiga/birch/oak"
+  "terralith:taiga/birch/pond"
+  "terralith:taiga/birch/trees_small"
+  "terralith:taiga/lush/flowers"
+  "terralith:taiga/mega/boulders"
+  "terralith:taiga/mid/pine_mid"
+  "terralith:taiga/mid/spruce_mid"
+  "terralith:taiga/mid/spruce_mid_m"
+  "terralith:taiga/mid/trees_mid"
+  "terralith:taiga/siberian/tall_tree"
+  "terralith:taiga/siberian/tall_tree_orange"
+  "terralith:taiga/siberian/trees_new"
+  "terralith:taiga/siberian/trees_new_orange"
+  "terralith:taiga/small/pine_small"
+  "terralith:taiga/small/spruce_small"
+  "terralith:taiga/small/spruce_small_m"
+  "terralith:taiga/small/trees_small"
+  "terralith:taiga/tall/pine_tall"
+  "terralith:taiga/tall/spruce_tall"
+  "terralith:taiga/tall/spruce_tall_m"
+  "terralith:taiga/tall/trees_tall"
+  "terralith:taiga/tiny/pine_tiny"
+  "terralith:taiga/tiny/spruce_tiny"
+  "terralith:taiga/tiny/spruce_tiny_m"
+  "terralith:taiga/tiny/trees_tiny"
+  "terralith:valley/blue_terra"
+  "terralith:valley/cyan_terra"
+  "terralith:valley/green_terra"
+  "terralith:valley/light_blue_terra"
+  "terralith:valley/lime_terra"
+  "terralith:valley/purple_terra"
+  "terralith:volcano/crater_fixer"
+  "terralith:volcano/lava_flow"
+  "terralith:volcano/lava_lakes"
+  "terralith:volcano/magma_barrier"
+  "terralith:volcano/spring_lava"
+  "terralith:volcano/top_secret_do_not_touch"
+  "terralith:yellowstone/acid_basalt"
+  "terralith:yellowstone/acid_black"
+  "terralith:yellowstone/acid_gravel"
+  "terralith:yellowstone/acid_orange"
+  "terralith:yellowstone/acid_yellow"
+  "terralith:yellowstone/birch"
+  "terralith:yellowstone/birch_alt"
+  "terralith:yellowstone/birch_trees"
+  "terralith:yellowstone/birch_trees_alt"
+  "terralith:yellowstone/lakes"
+  "terralith:yellowstone/magma"
+  "terralith:yellowstone/spruce_big"
+  "terralith:yellowstone/spruce_big_alt"
+  "terralith:yellowstone/spruce_trees_big"
+  "terralith:yellowstone/spruce_trees_big_alt"
+  "terralith:yellowstone/terra_sand"
+  "terralith:yellowstone/vents"
+  "terralith:yosemite/calcite"
+  "terralith:yosemite/diorite"
+  "terralith:yosemite/disk_stone"
+  "terralith:yosemite/grass"
+  "terralith:yosemite/oak"
+  "terralith:yosemite/oak_mega"
+  "terralith:yosemite/oaks"
+  "terralith:yosemite/waterfall"
   ... (241 entries)
 ]

```


</details>

<details>
<summary>worldgen/structure</summary>

```diff
 [
   ... (205 entries)
+  "terralith:desert_outpost"
+  "terralith:fortified_desert_village"
+  "terralith:fortified_village"
+  "terralith:glacial_hut"
+  "terralith:igloo"
+  "terralith:mage_complex"
+  "terralith:mage_tower"
+  "terralith:mage_tower_autumn"
+  "terralith:mage_tower_spring"
+  "terralith:mage_tower_summer"
+  "terralith:mage_tower_winter"
+  "terralith:rubble_desert"
+  "terralith:rubble_forest"
+  "terralith:rubble_jungle"
+  "terralith:rubble_mesa"
+  "terralith:rubble_mountain"
+  "terralith:rubble_taiga"
+  "terralith:spire"
+  "terralith:underground/frosted_dungeon"
+  "terralith:underground/giant_bee_hive"
+  "terralith:underground/mining_outpost"
+  "terralith:underground/oak_cabin"
+  "terralith:underground/old_refinery"
+  "terralith:underground/sunken_tower"
+  "terralith:underground/witch_hut"
+  "terralith:underground_cabin"
+  "terralith:valley_lodge"
+  "terralith:witch_hut"
   ... (59 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details>
<summary>Added (119)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/adorn/blocks/cobblemon/saccharine_bench</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "adorn:cobblemon/saccharine_bench"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+  fabric:load_conditions: [
+    {
+      condition: "fabric:all_mods_loaded"
+      values: [
+        "adorn"
+      ]
+    }
+  ]
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "adorn"
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/adorn/blocks/cobblemon/saccharine_chair</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "adorn:cobblemon/saccharine_chair"
+          conditions: [
+            {
+              block: "adorn:cobblemon/saccharine_chair"
+              properties: {
+                half: "lower"
+              }
+              condition: "minecraft:block_state_property"
+            }
+          ]
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+  fabric:load_conditions: [
+    {
+      condition: "fabric:all_mods_loaded"
+      values: [
+        "adorn"
+      ]
+    }
+  ]
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "adorn"
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/adorn/blocks/cobblemon/saccharine_coffee_table</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "adorn:cobblemon/saccharine_coffee_table"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+  fabric:load_conditions: [
+    {
+      condition: "fabric:all_mods_loaded"
+      values: [
+        "adorn"
+      ]
+    }
+  ]
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "adorn"
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/adorn/blocks/cobblemon/saccharine_drawer</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "adorn:cobblemon/saccharine_drawer"
+          functions: [
+            {
+              function: "minecraft:copy_name"
+              source: "block_entity"
+            }
+          ]
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+  fabric:load_conditions: [
+    {
+      condition: "fabric:all_mods_loaded"
+      values: [
+        "adorn"
+      ]
+    }
+  ]
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "adorn"
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/adorn/blocks/cobblemon/saccharine_kitchen_counter</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "adorn:cobblemon/saccharine_kitchen_counter"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+  fabric:load_conditions: [
+    {
+      condition: "fabric:all_mods_loaded"
+      values: [
+        "adorn"
+      ]
+    }
+  ]
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "adorn"
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/adorn/blocks/cobblemon/saccharine_kitchen_cupboard</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "adorn:cobblemon/saccharine_kitchen_cupboard"
+          functions: [
+            {
+              function: "minecraft:copy_name"
+              source: "block_entity"
+            }
+          ]
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+  fabric:load_conditions: [
+    {
+      condition: "fabric:all_mods_loaded"
+      values: [
+        "adorn"
+      ]
+    }
+  ]
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "adorn"
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/adorn/blocks/cobblemon/saccharine_kitchen_sink</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "adorn:cobblemon/saccharine_kitchen_sink"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+  fabric:load_conditions: [
+    {
+      condition: "fabric:all_mods_loaded"
+      values: [
+        "adorn"
+      ]
+    }
+  ]
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "adorn"
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/adorn/blocks/cobblemon/saccharine_platform</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "adorn:cobblemon/saccharine_platform"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+  fabric:load_conditions: [
+    {
+      condition: "fabric:all_mods_loaded"
+      values: [
+        "adorn"
+      ]
+    }
+  ]
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "adorn"
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/adorn/blocks/cobblemon/saccharine_post</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "adorn:cobblemon/saccharine_post"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+  fabric:load_conditions: [
+    {
+      condition: "fabric:all_mods_loaded"
+      values: [
+        "adorn"
+      ]
+    }
+  ]
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "adorn"
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/adorn/blocks/cobblemon/saccharine_shelf</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "adorn:cobblemon/saccharine_shelf"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+  fabric:load_conditions: [
+    {
+      condition: "fabric:all_mods_loaded"
+      values: [
+        "adorn"
+      ]
+    }
+  ]
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "adorn"
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/adorn/blocks/cobblemon/saccharine_step</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "adorn:cobblemon/saccharine_step"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+  fabric:load_conditions: [
+    {
+      condition: "fabric:all_mods_loaded"
+      values: [
+        "adorn"
+      ]
+    }
+  ]
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "adorn"
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/adorn/blocks/cobblemon/saccharine_table</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "adorn:cobblemon/saccharine_table"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+  fabric:load_conditions: [
+    {
+      condition: "fabric:all_mods_loaded"
+      values: [
+        "adorn"
+      ]
+    }
+  ]
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "adorn"
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/antidote</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:antidote"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:antidote"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:antidote"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:antidote"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/antidote"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/awakening</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:awakening"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:awakening"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:awakening"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:awakening"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/awakening"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/black_plaque</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cobblemon:black_plaque"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/blue_plaque</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cobblemon:blue_plaque"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/blunder_policy</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cobblemon:blunder_policy"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/brown_plaque</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cobblemon:brown_plaque"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/burn_heal</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:burn_heal"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:burn_heal"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:burn_heal"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:burn_heal"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/burn_heal"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/cleanse_tag</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:cleanse_tag"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:cleanse_tag"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:cleanse_tag"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:cleanse_tag"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "5"
+                  }
+                }
+              ]
+              count: 5
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:cleanse_tag"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "6"
+                  }
+                }
+              ]
+              count: 6
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:cleanse_tag"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "7"
+                  }
+                }
+              ]
+              count: 7
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:cleanse_tag"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "8"
+                  }
+                }
+              ]
+              count: 8
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:cleanse_tag"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/cleanse_tag"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/cyan_plaque</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cobblemon:cyan_plaque"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/dire_hit</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:dire_hit"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:dire_hit"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:dire_hit"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:dire_hit"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/dire_hit"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/elixir</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:elixir"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:elixir"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:elixir"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:elixir"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/elixir"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/ether</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:ether"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:ether"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:ether"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:ether"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/ether"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/full__heal</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:full_heal"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:full_heal"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:full_heal"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:full_heal"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/full_heal"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/full_restore</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:full_restore"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:full_restore"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:full_restore"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:full_restore"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/full_restore"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/gray_plaque</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cobblemon:gray_plaque"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/green_plaque</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cobblemon:green_plaque"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/guard_spec</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:guard_spec"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:guard_spec"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:guard_spec"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:guard_spec"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/guard_spec"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/hyper_potion</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:hyper_potion"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:hyper_potion"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:hyper_potion"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:hyper_potion"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/hyper_potion"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/ice_heal</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:ice_heal"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:ice_heal"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:ice_heal"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:ice_heal"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/ice_heal"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/light_blue_plaque</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cobblemon:light_blue_plaque"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/light_gray_plaque</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cobblemon:light_gray_plaque"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/lime_plaque</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cobblemon:lime_plaque"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/magenta_plaque</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cobblemon:magenta_plaque"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/max_elixir</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:max_elixir"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:max_elixir"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:max_elixir"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:max_elixir"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/max_elixir"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/max_ether</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:max_ether"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:max_ether"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:max_ether"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:max_ether"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/max_ether"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/max_potion</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:max_potion"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:max_potion"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:max_potion"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:max_potion"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/max_potion"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/orange_plaque</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cobblemon:orange_plaque"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/paralyze_heal</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:paralyze_heal"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:paralyze_heal"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:paralyze_heal"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:paralyze_heal"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/paralyze_heal"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/pink_plaque</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cobblemon:pink_plaque"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/potion</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:potion"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:potion"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:potion"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:potion"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/potion"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/purple_plaque</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cobblemon:purple_plaque"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/red_plaque</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cobblemon:red_plaque"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/spell_tag</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:spell_tag"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:spell_tag"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:spell_tag"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:spell_tag"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "5"
+                  }
+                }
+              ]
+              count: 5
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:spell_tag"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "6"
+                  }
+                }
+              ]
+              count: 6
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:spell_tag"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "7"
+                  }
+                }
+              ]
+              count: 7
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:spell_tag"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "8"
+                  }
+                }
+              ]
+              count: 8
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:spell_tag"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/spell_tag"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/super_potion</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:super_potion"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:super_potion"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:super_potion"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:super_potion"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/super_potion"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/weakness_policy</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cobblemon:weakness_policy"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/white_plaque</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cobblemon:white_plaque"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/x_accuracy</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:x_accuracy"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:x_accuracy"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:x_accuracy"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:x_accuracy"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/x_accuracy"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/x_attack</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:x_attack"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:x_attack"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:x_attack"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:x_attack"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/x_attack"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/x_defence</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:x_defence"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:x_defence"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:x_defence"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:x_defence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/x_defence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/x_special_attack</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:x_special_attack"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:x_special_attack"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:x_special_attack"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:x_special_attack"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/x_special_attack"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/x_special_defence</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:x_special_defence"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:x_special_defence"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:x_special_defence"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:x_special_defence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/x_special_defence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/x_speed</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:x_speed"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "2"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:x_speed"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "3"
+                  }
+                }
+              ]
+              count: 3
+              function: "minecraft:set_count"
+            }
+            {
+              add: false
+              conditions: [
+                {
+                  block: "cobblemon:x_speed"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    amount: "4"
+                  }
+                }
+              ]
+              count: 4
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cobblemon:x_speed"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cobblemon:blocks/x_speed"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cobblemon/blocks/yellow_plaque</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cobblemon:yellow_plaque"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/enderio/blocks/industrial_insulation</summary>

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
+          name: "enderio:industrial_insulation"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "enderio:blocks/industrial_insulation"
+}

```


</details>

<details>
<summary>minecraft/loot_table/enderio/blocks/niard</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              source: "block_entity"
+            }
+          ]
+          name: "enderio:niard"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "enderio:blocks/niard"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/chiseled_toxite</summary>

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
+          name: "eternal_starlight:chiseled_toxite"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/chiseled_toxite"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/oxidized_alloy_furnace</summary>

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
+          name: "eternal_starlight:oxidized_alloy_furnace"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/oxidized_alloy_furnace"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/permafrost_spawner</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "eternal_starlight:blocks/permafrost_spawner"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/toxite_brick_slab</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              conditions: [
+                {
+                  block: "eternal_starlight:toxite_brick_slab"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    type: "double"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "eternal_starlight:toxite_brick_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/toxite_brick_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/toxite_brick_stairs</summary>

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
+          name: "eternal_starlight:toxite_brick_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/toxite_brick_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/toxite_brick_wall</summary>

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
+          name: "eternal_starlight:toxite_brick_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/toxite_brick_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/toxite_bricks</summary>

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
+          name: "eternal_starlight:toxite_bricks"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/toxite_bricks"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/waxed_alloy_furnace</summary>

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
+          name: "eternal_starlight:waxed_alloy_furnace"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/waxed_alloy_furnace"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/entities/seeker</summary>

```diff
+{
+  type: "minecraft:entity"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          chance: 0.2
+          condition: "minecraft:random_chance"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:tentacle_spike"
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
+                max: 2
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 1
+                min: 0
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "eternal_starlight:seeking_eye"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:entities/seeker"
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/desert_outpost</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 0
+        max: 1
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:crossbow"
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 2
+        max: 3
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          weight: 7
+          name: "minecraft:wheat"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 3
+                max: 5
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 5
+          name: "minecraft:potato"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 2
+                max: 5
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 5
+          name: "minecraft:carrot"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 3
+                max: 5
+              }
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 1
+        max: 4
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:orange_wool"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:sandstone"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 2
+                max: 3
+              }
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 2
+        max: 3
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          weight: 7
+          name: "minecraft:experience_bottle"
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:string"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 6
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:arrow"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 2
+                max: 7
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 3
+          name: "minecraft:tripwire_hook"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 3
+          name: "minecraft:iron_ingot"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:book"
+          functions: [
+            {
+              function: "minecraft:enchant_randomly"
+              options: "#minecraft:non_treasure"
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 0
+        max: 1
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:goat_horn"
+        }
+      ]
+      functions: [
+        {
+          function: "minecraft:set_instrument"
+          options: "#minecraft:regular_goat_horns"
+        }
+      ]
+    }
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:dune_armor_trim_smithing_template"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: 2
+            }
+          ]
+        }
+        {
+          type: "minecraft:empty"
+          weight: 12
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:sentry_armor_trim_smithing_template"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: 2
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+  ]
+  random_sequence: "minecraft:chests/pillager_outpost"
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/igloo</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:cherry_sapling"
+          functions: [
+            {
+              function: "minecraft:set_components"
+              components: {
+                minecraft:enchantment_glint_override: true
+              }
+            }
+            {
+              function: "minecraft:set_name"
+              entity: "this"
+              name: {
+                text: "Wintry Cherry Sapling"
+                color: "#FFDEFB"
+                italic: false
+              }
+            }
+            {
+              function: "minecraft:set_lore"
+              entity: "this"
+              lore: [
+                {
+                  text: "\"Snowy Cherry Grove is the best biome.\""
+                  color: "gray"
+                  italic: false
+                }
+                {
+                  text: "- Apollo"
+                  color: "gray"
+                  italic: false
+                }
+                {
+                  text: "Terralith"
+                  color: "#115060"
+                }
+              ]
+              mode: "append"
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        min: 3
+        max: 5
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:snowball"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 4
+                max: 8
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:cherry_sapling"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 2
+                max: 4
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:baked_potato"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 4
+                max: 12
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:sweet_berries"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 6
+                max: 12
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:cherry_log"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 4
+                max: 12
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:emerald"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 4
+                max: 8
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:amethyst_shard"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 4
+                max: 8
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:lapis_lazuli"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 4
+                max: 8
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:writable_book"
+          weight: 1
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/lodge_drinkables</summary>

```diff
+{
+  pools: [
+    {
+      rolls: {
+        min: 0
+        max: 2
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:potion"
+          functions: [
+            {
+              function: "minecraft:set_potion"
+              id: "minecraft:strong_swiftness"
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:potion"
+          functions: [
+            {
+              function: "minecraft:set_potion"
+              id: "minecraft:long_night_vision"
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:potion"
+          functions: [
+            {
+              function: "minecraft:set_potion"
+              id: "minecraft:healing"
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        min: 1
+        max: 2
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:bowl"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 2
+                max: 4
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:potion"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+            {
+              function: "minecraft:set_potion"
+              id: "minecraft:water"
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:honey_bottle"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:glass_bottle"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        min: 0
+        max: 3
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:suspicious_stew"
+          functions: [
+            {
+              function: "minecraft:set_stew_effect"
+              effects: [
+                {
+                  type: "minecraft:haste"
+                  duration: 100
+                }
+              ]
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:suspicious_stew"
+          functions: [
+            {
+              function: "minecraft:set_stew_effect"
+              effects: [
+                {
+                  type: "minecraft:jump_boost"
+                  duration: 100
+                }
+              ]
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:suspicious_stew"
+          functions: [
+            {
+              function: "minecraft:set_stew_effect"
+              effects: [
+                {
+                  type: "minecraft:regeneration"
+                  duration: 100
+                }
+              ]
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:suspicious_stew"
+          functions: [
+            {
+              function: "minecraft:set_stew_effect"
+              effects: [
+                {
+                  type: "minecraft:saturation"
+                  duration: 100
+                }
+              ]
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:suspicious_stew"
+          functions: [
+            {
+              function: "minecraft:set_stew_effect"
+              effects: [
+                {
+                  type: "minecraft:blindness"
+                  duration: 100
+                }
+              ]
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:suspicious_stew"
+          functions: [
+            {
+              function: "minecraft:set_stew_effect"
+              effects: [
+                {
+                  type: "minecraft:slowness"
+                  duration: 100
+                }
+              ]
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/mage/barracks</summary>

```diff
+{
+  pools: [
+    {
+      rolls: {
+        type: "minecraft:binomial"
+        n: 3
+        p: 0.4
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:emerald"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:amethyst_shard"
+          weight: 4
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 4
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:bread"
+          weight: 5
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 2
+                max: 6
+              }
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:bow"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              options: "#minecraft:on_random_loot"
+              levels: {
+                min: 10
+                max: 20
+              }
+              conditions: [
+                {
+                  condition: "minecraft:random_chance"
+                  chance: 0.5
+                }
+              ]
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:crossbow"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              options: "#minecraft:on_random_loot"
+              levels: {
+                min: 10
+                max: 20
+              }
+              conditions: [
+                {
+                  condition: "minecraft:random_chance"
+                  chance: 0.5
+                }
+              ]
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        min: 1
+        max: 2
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:tipped_arrow"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:binomial"
+                n: 10
+                p: 0.6
+              }
+            }
+            {
+              function: "minecraft:set_potion"
+              id: "minecraft:weakness"
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:arrow"
+          weight: 9
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:binomial"
+                n: 15
+                p: 0.6
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/mage/extras</summary>

```diff
+{
+  pools: [
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 3
+        max: 4
+      }
+      entries: [
+        {
+          type: "minecraft:loot_table"
+          value: "terralith:mage/small_common_flowers"
+          weight: 4
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 2
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:emerald"
+          weight: 2
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:amethyst_shard"
+          weight: 4
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 4
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:bread"
+          weight: 5
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 2
+                max: 6
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/mage/small_common_flowers</summary>

```diff
+{
+  type: "minecraft:generic"
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:dandelion"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:poppy"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:blue_orchid"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:allium"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:azure_bluet"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:red_tulip"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:orange_tulip"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:white_tulip"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:pink_tulip"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:oxeye_daisy"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:cornflower"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:lily_of_the_valley"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/mage/treasure</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:diamond"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 2
+              }
+            }
+          ]
+          conditions: [
+            {
+              condition: "minecraft:random_chance"
+              chance: 0.3
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        min: 2
+        max: 4
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:warped_planks"
+          weight: 60
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:amethyst_cluster"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:leather"
+          weight: 60
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:crossbow"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:bone_meal"
+          weight: 40
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 2
+                max: 8
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:bone"
+          weight: 70
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 2
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:coal"
+          weight: 90
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 2
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:paper"
+          weight: 90
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 2
+                max: 4
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:cobweb"
+          weight: 60
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 2
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:string"
+          weight: 70
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 2
+                max: 4
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:glow_ink_sac"
+          weight: 40
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 2
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:amethyst_shard"
+          weight: 80
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 2
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:arrow"
+          weight: 100
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 9
+                max: 18
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/royal_jelly</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:potion"
+          functions: [
+            {
+              function: "minecraft:set_components"
+              components: {
+                minecraft:potion_contents: {
+                  potion: "minecraft:awkward"
+                  custom_color: 16762880
+                  custom_effects: [
+                    {
+                      id: "minecraft:absorption"
+                      duration: 1000
+                    }
+                    {
+                      id: "minecraft:glowing"
+                      duration: 300
+                    }
+                    {
+                      id: "minecraft:haste"
+                      amplifier: 1
+                      duration: 600
+                    }
+                    {
+                      id: "minecraft:saturation"
+                      amplifier: 39
+                      duration: 1
+                    }
+                    {
+                      id: "minecraft:speed"
+                      duration: 6000
+                    }
+                  ]
+                }
+              }
+            }
+            {
+              function: "minecraft:set_name"
+              entity: "this"
+              name: {
+                text: "Royal Jelly"
+                color: "light_purple"
+                bold: false
+                italic: false
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/ruin/glacial/junk</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.85
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 8
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:snow_block"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.65
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 1
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:powder_snow_bucket"
+          weight: 2
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.65
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 7
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:snowball"
+          weight: 6
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.85
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 7
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:ice"
+          weight: 5
+        }
+      ]
+      rolls: 3
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 4
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:porkchop"
+          weight: 5
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 3
+                min: 0
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:cooked_porkchop"
+          weight: 6
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.5
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 4
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:beef"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.75
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 4
+                min: 0
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:cooked_beef"
+          weight: 6
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.85
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 8
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:snow_block"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.85
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 7
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:ice"
+          weight: 5
+        }
+      ]
+      rolls: 2
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:stone_axe"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:wooden_pickaxe"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:wooden_shovel"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:wooden_axe"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:wooden_sword"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:stone_pickaxe"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:stone_shovel"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 17
+                min: 0
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:leather_boots"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 17
+                min: 0
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:leather_leggings"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 17
+                min: 0
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:leather_chestplate"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 17
+                min: 0
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:leather_helmet"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      conditions: [
+        {
+          chance: 0.4
+          condition: "minecraft:random_chance"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 5
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:chicken"
+          weight: 2
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 5
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:cooked_chicken"
+          weight: 2
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:apple"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 4
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bread"
+        }
+      ]
+      rolls: 2
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/ruin/glacial/main_cs</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 4
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:porkchop"
+          weight: 5
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 3
+                min: 0
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:cooked_porkchop"
+          weight: 6
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.5
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 4
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:beef"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.75
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 4
+                min: 0
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:cooked_beef"
+          weight: 6
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.85
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 8
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:snow_block"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.85
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 7
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:ice"
+          weight: 5
+        }
+      ]
+      rolls: 5
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:stone_axe"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:wooden_pickaxe"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:wooden_shovel"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:wooden_axe"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:wooden_sword"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:stone_pickaxe"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:stone_shovel"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 17
+                min: 0
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:leather_boots"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 17
+                min: 0
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:leather_leggings"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 17
+                min: 0
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:leather_chestplate"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 17
+                min: 0
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:leather_helmet"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      conditions: [
+        {
+          chance: 0.4
+          condition: "minecraft:random_chance"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 5
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:chicken"
+          weight: 2
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 5
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:cooked_chicken"
+          weight: 2
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:apple"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 4
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bread"
+        }
+      ]
+      rolls: 3
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/spire/common</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      entries: [
+        {
+          type: "minecraft:tag"
+          expand: true
+          functions: [
+            {
+              count: {
+                max: 8
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:candles"
+          weight: 6
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.375
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 12
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:gunpowder"
+          weight: 8
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.5
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 11
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:paper"
+          weight: 12
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.5
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: {
+                  max: 3
+                  min: 1
+                }
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:book"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.5
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 8
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:leather"
+          weight: 5
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 5
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bone_block"
+          weight: 2
+        }
+      ]
+      rolls: 4
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 2
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:powder_snow_bucket"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 12
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:packed_ice"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 7
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:blue_ice"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:snowball"
+          weight: 5
+        }
+      ]
+      rolls: 2
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.65
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 8
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:iron_ingot"
+          weight: 5
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 6
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:gold_ingot"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 12
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:copper_ingot"
+          weight: 7
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.5
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 2
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:copper_block"
+          weight: 2
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 6
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:iron_nugget"
+          weight: 9
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.5
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 15
+                min: 7
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:gold_nugget"
+          weight: 9
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.5
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 7
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:lapis_lazuli"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.1
+              condition: "minecraft:random_chance"
+            }
+          ]
+          name: "minecraft:diamond"
+          weight: 1
+        }
+      ]
+      rolls: {
+        max: 2
+        min: 1
+      }
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:tag"
+          conditions: [
+            {
+              chance: 0.75
+              condition: "minecraft:random_chance"
+            }
+          ]
+          expand: true
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.75
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              damage: {
+                max: 0.75
+                min: 0
+              }
+              function: "minecraft:set_damage"
+            }
+            {
+              conditions: [
+                {
+                  chance: 0.75
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              options: "#minecraft:on_random_loot"
+              levels: {
+                max: {
+                  max: 24
+                  min: 7
+                }
+                min: 5
+              }
+            }
+          ]
+          name: "terralith:spire/common_tools"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.125
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:enchant_randomly"
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:book"
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.125
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 15
+                min: 1
+              }
+              options: "#minecraft:non_treasure"
+            }
+          ]
+          name: "minecraft:book"
+        }
+      ]
+      rolls: 2
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/spire/junk</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 8
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bone"
+          weight: 5
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 7
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:string"
+          weight: 6
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.5
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 4
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:cobweb"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.75
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 12
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:snowball"
+          weight: 6
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.35
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 8
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:snow_block"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.35
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 7
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:ice"
+          weight: 5
+        }
+      ]
+      rolls: 4
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:stone_axe"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:wooden_pickaxe"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:wooden_shovel"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:wooden_axe"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:wooden_sword"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:stone_pickaxe"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: {
+                  max: 13
+                  min: 9
+                }
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.999999
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:stone_shovel"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 17
+                min: 0
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:leather_boots"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 17
+                min: 0
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:leather_leggings"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 17
+                min: 0
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:leather_chestplate"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4525
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 17
+                min: 0
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:leather_helmet"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      conditions: [
+        {
+          chance: 0.4
+          condition: "minecraft:random_chance"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 5
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:rotten_flesh"
+          weight: 2
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:apple"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 4
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bread"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/spire/rare</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 7
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:snow_block"
+          weight: 5
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 2
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:powder_snow_bucket"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 12
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:packed_ice"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 7
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:blue_ice"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:snowball"
+          weight: 5
+        }
+      ]
+      rolls: 3
+    }
+    {
+      conditions: [
+        {
+          chance: 0.5
+          condition: "minecraft:random_chance"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:tag"
+          expand: true
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.65
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 22
+                min: 10
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0.5
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "terralith:spire/rare_tools"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.2
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:enchant_randomly"
+              options: "#minecraft:non_treasure"
+            }
+          ]
+          name: "minecraft:book"
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.2
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 22
+                min: 1
+              }
+              options: "#minecraft:non_treasure"
+            }
+          ]
+          name: "minecraft:book"
+        }
+      ]
+      rolls: 3
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.5
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:diamond"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.33
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 11
+                min: 7
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:gold_ingot"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.2
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:iron_block"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.25
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 7
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:copper_block"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.25
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 7
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:weathered_copper"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.25
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 7
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:exposed_copper"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.25
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 7
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:oxidized_copper"
+          weight: 1
+        }
+      ]
+      rolls: 3
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/spire/treasure</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 7
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:snow_block"
+          weight: 5
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 2
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:powder_snow_bucket"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 12
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:packed_ice"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 7
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:blue_ice"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:snowball"
+          weight: 5
+        }
+      ]
+      rolls: 3
+    }
+    {
+      conditions: [
+        {
+          chance: 0.5
+          condition: "minecraft:random_chance"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              damage: {
+                max: 1
+                min: 0.7
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:trident"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 1
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 27
+                min: 10
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0.5
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:diamond_pickaxe"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 1
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 27
+                min: 10
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0.5
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:diamond_shovel"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 1
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 27
+                min: 10
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0.5
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:diamond_axe"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 1
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 27
+                min: 10
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0.5
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:diamond_sword"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 1
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 27
+                min: 10
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0.5
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:diamond_chestplate"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 1
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 27
+                min: 10
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0.5
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:diamond_leggings"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 1
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 27
+                min: 10
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 1
+                min: 0.5
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:diamond_boots"
+          weight: 1
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_randomly"
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:book"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 39
+                min: 1
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:book"
+        }
+      ]
+      rolls: 2
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:tag"
+          expand: true
+          functions: [
+            {
+              count: {
+                max: 4
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "terralith:spire/diamond"
+        }
+      ]
+      rolls: 2
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:tnt"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:ender_pearl"
+        }
+      ]
+      functions: [
+        {
+          count: {
+            max: 6
+            min: 3
+          }
+          function: "minecraft:set_count"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              options: [
+                "minecraft:mending"
+                "minecraft:silk_touch"
+                "minecraft:fortune"
+                "minecraft:looting"
+              ]
+              function: "minecraft:enchant_randomly"
+            }
+          ]
+          name: "minecraft:book"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/underground/chest</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      conditions: [
+        {
+          chance: 0.085
+          condition: "minecraft:random_chance"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              damage: {
+                max: 0.9
+                min: 0.2
+              }
+              function: "minecraft:set_damage"
+            }
+            {
+              conditions: [
+                {
+                  chance: 0.7
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 22
+                min: 5
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:golden_boots"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.6
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 25
+                min: 4
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.9
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:iron_boots"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              damage: {
+                max: 0.9
+                min: 0.2
+              }
+              function: "minecraft:set_damage"
+            }
+            {
+              conditions: [
+                {
+                  chance: 0.7
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 22
+                min: 5
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:golden_leggings"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.6
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 25
+                min: 4
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.9
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:iron_leggings"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              damage: {
+                max: 0.9
+                min: 0.2
+              }
+              function: "minecraft:set_damage"
+            }
+            {
+              conditions: [
+                {
+                  chance: 0.7
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 22
+                min: 5
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:golden_chestplate"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.6
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 25
+                min: 4
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.9
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:iron_chestplate"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              damage: {
+                max: 0.9
+                min: 0.2
+              }
+              function: "minecraft:set_damage"
+            }
+            {
+              conditions: [
+                {
+                  chance: 0.7
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 22
+                min: 5
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:golden_helmet"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.6
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 25
+                min: 4
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.9
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:iron_helmet"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 15
+                min: 4
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.95
+                min: 0.5
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:diamond_helmet"
+          weight: 10
+        }
+      ]
+      rolls: 3
+    }
+    {
+      conditions: [
+        {
+          chance: 0.75
+          condition: "minecraft:random_chance"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              damage: {
+                max: 0.9
+                min: 0.2
+              }
+              function: "minecraft:set_damage"
+            }
+            {
+              conditions: [
+                {
+                  chance: 0.7
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 22
+                min: 5
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:golden_pickaxe"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.6
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 25
+                min: 4
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.9
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:iron_pickaxe"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              damage: {
+                max: 0.9
+                min: 0.2
+              }
+              function: "minecraft:set_damage"
+            }
+            {
+              conditions: [
+                {
+                  chance: 0.7
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 22
+                min: 5
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:golden_shovel"
+          weight: 2
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.6
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 25
+                min: 4
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.9
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:iron_shovel"
+          weight: 5
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.6
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 25
+                min: 4
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.9
+                min: 0.3
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:iron_sword"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.3
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                max: 12
+                min: 4
+              }
+              options: "#minecraft:on_random_loot"
+            }
+            {
+              damage: {
+                max: 0.9
+                min: 0.55
+              }
+              function: "minecraft:set_damage"
+            }
+          ]
+          name: "minecraft:diamond_pickaxe"
+          weight: 2
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.3
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 20
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:clay_ball"
+          weight: 5
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.3
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 13
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:clay"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.365
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 9
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:moss_block"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.175
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 12
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:short_grass"
+          weight: 5
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.3
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 7
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:moss_carpet"
+          weight: 12
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.4
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              count: {
+                max: 15
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:glow_berries"
+          weight: 15
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.2
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 6
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:vine"
+          weight: 6
+        }
+      ]
+      rolls: 4
+    }
+    {
+      conditions: [
+        {
+          chance: 0.225
+          condition: "minecraft:random_chance"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:amethyst_cluster"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 10
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:small_amethyst_bud"
+          weight: 20
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:medium_amethyst_bud"
+          weight: 15
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 5
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:large_amethyst_bud"
+          weight: 12
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 10
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:amethyst_shard"
+          weight: 26
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 5
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:amethyst_block"
+          weight: 3
+        }
+      ]
+      rolls: 1
+    }
+    {
+      conditions: [
+        {
+          chance: 0.4
+          condition: "minecraft:random_chance"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: {
+                  max: 30
+                  min: 10
+                }
+                min: 7
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:book"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.95
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 7
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:paper"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.95
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 5
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:book"
+          weight: 8
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.6
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 2
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bookshelf"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.4
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 10
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:iron_ingot"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.5
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 12
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:raw_iron"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.4
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 2
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:raw_iron_block"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.4
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 10
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:gold_ingot"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.5
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 12
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:raw_gold"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.4
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 2
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:raw_gold_block"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.4
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 24
+                min: 10
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:copper_ingot"
+          weight: 4
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.5
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 16
+                min: 5
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:raw_copper"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.5
+              condition: "minecraft:random_chance"
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 4
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:raw_copper_block"
+          weight: 2
+        }
+      ]
+      rolls: 3
+    }
+    {
+      conditions: [
+        {
+          chance: 0.25
+          condition: "minecraft:random_chance"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:diamond"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              condition: "minecraft:location_check"
+              predicate: {
+                position: {
+                  y: {
+                    max: 319
+                    min: 0
+                  }
+                }
+              }
+            }
+          ]
+          functions: [
+            {
+              count: {
+                max: 2
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:diamond_ore"
+          weight: 3
+        }
+      ]
+      rolls: 1
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/underground/giant_bee_hive</summary>

```diff
+{
+  pools: [
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 15
+                min: 11
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:honeycomb"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 7
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:honey_bottle"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:loot_table"
+          value: "terralith:royal_jelly"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/desert/archer</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:crossbow"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                min: 0
+                max: 10
+              }
+              options: "#minecraft:on_random_loot"
+              conditions: [
+                {
+                  condition: "minecraft:random_chance"
+                  chance: 0.2
+                }
+              ]
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:bow"
+          weight: 2
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                min: 0
+                max: 10
+              }
+              options: "#minecraft:on_random_loot"
+              conditions: [
+                {
+                  condition: "minecraft:random_chance"
+                  chance: 0.2
+                }
+              ]
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 1
+        max: 3
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:spectral_arrow"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 4
+                max: 8
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:arrow"
+          weight: 10
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 8
+                max: 16
+              }
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 3
+        max: 6
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:rabbit_foot"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:rabbit_hide"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:flint"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_nugget"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:tripwire_hook"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:string"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:feather"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:stick"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/desert/attic</summary>

```diff
+{
+  pools: [
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:cobweb"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:bowl"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:spider_eye"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:glass_bottle"
+          weight: 1
+        }
+      ]
+      rolls: {
+        max: 7
+        min: 2
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/desert/butcher</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:loot_table"
+          value: "terralith:village/fortified/butcher"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/desert/cartographer</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.2
+              condition: "minecraft:random_chance"
+            }
+          ]
+          name: "minecraft:spyglass"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.2
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 0
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:leather_boots"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:saddle"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:bundle"
+          weight: 7
+          conditions: [
+            {
+              condition: "minecraft:value_check"
+              value: {
+                type: "minecraft:score"
+                target: {
+                  type: "minecraft:fixed"
+                  name: "%BUNDLE"
+                }
+                score: "tr.bundle"
+              }
+              range: 1
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:lead"
+          weight: 7
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:map"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:compass"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:writable_book"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:map"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:paper"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:stick"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 2
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+        }
+      ]
+      rolls: {
+        type: "minecraft:uniform"
+        max: 6
+        min: 3
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/desert/fisherman</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:loot_table"
+          value: "terralith:village/fortified/fisherman"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/desert/food</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:loot_table"
+          value: "terralith:village/fortified/food"
+        }
+      ]
+    }
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:enchanted_golden_apple"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:random_chance"
+          chance: 0.005
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/desert/generic</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:loot_table"
+          value: "terralith:village/fortified/generic"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/desert/generic_low</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:loot_table"
+          value: "terralith:village/fortified/generic_low"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/desert/junk</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:diamond_hoe"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                min: 0
+                max: 40
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          conditions: [
+            {
+              condition: "minecraft:random_chance"
+              chance: 0.01
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 3
+        max: 5
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:wooden_hoe"
+          weight: 2
+          functions: [
+            {
+              function: "minecraft:set_damage"
+              damage: {
+                type: "minecraft:uniform"
+                min: 0
+                max: 0.9
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:dead_bush"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 3
+                max: 7
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:cactus"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 3
+                max: 7
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:sand"
+          weight: 4
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:sandstone"
+          weight: 4
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:cut_sandstone"
+          weight: 4
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:clay_ball"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:terracotta"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:stripped_spruce_log"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:spruce_fence"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:acacia_door"
+          weight: 2
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:bowl"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:stick"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/desert/library</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:loot_table"
+          value: "terralith:village/fortified/library"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/desert/mason</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:loot_table"
+          value: "terralith:village/fortified/mason"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/desert/shepherd</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:loot_table"
+          value: "terralith:village/desert/food"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/desert/smith</summary>

```diff
+{
+  pools: [
+    {
+      entries: [
+        {
+          type: "minecraft:loot_table"
+          value: "terralith:village/fortified/smith/novice"
+          weight: 19
+        }
+        {
+          type: "minecraft:loot_table"
+          value: "terralith:village/fortified/smith/expert"
+          weight: 1
+        }
+      ]
+      rolls: 1
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/desert/smith/expert</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 2
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:diamond"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:diamond_pickaxe"
+        }
+      ]
+      functions: [
+        {
+          conditions: [
+            {
+              chance: 0.2
+              condition: "minecraft:random_chance"
+            }
+          ]
+          function: "minecraft:enchant_with_levels"
+          levels: {
+            type: "minecraft:uniform"
+            max: 20
+            min: 0
+          }
+          options: "#minecraft:on_random_loot"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:obsidian"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:deepslate_diamond_ore"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:gold_ore"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:deepslate_lapis_ore"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 4
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:cobbled_deepslate"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 5
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:deepslate"
+          weight: 3
+        }
+      ]
+      rolls: {
+        type: "minecraft:uniform"
+        max: 5
+        min: 3
+      }
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:lapis_lazuli"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
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
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:gold_nugget"
+          weight: 15
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:iron_nugget"
+          weight: 15
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:coal"
+          weight: 15
+        }
+      ]
+      rolls: {
+        type: "minecraft:uniform"
+        max: 4
+        min: 2
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/desert/smith/novice</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_pickaxe"
+        }
+      ]
+      functions: [
+        {
+          conditions: [
+            {
+              chance: 0.2
+              condition: "minecraft:random_chance"
+            }
+          ]
+          function: "minecraft:enchant_with_levels"
+          levels: {
+            type: "minecraft:uniform"
+            max: 10
+            min: 0
+          }
+          options: "#minecraft:on_random_loot"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:copper_ore"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:gold_ore"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:iron_ore"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 4
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:cobblestone"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 5
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:stone"
+          weight: 3
+        }
+      ]
+      rolls: {
+        type: "minecraft:uniform"
+        max: 5
+        min: 3
+      }
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:diamond"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:iron_block"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:gold_ingot"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:copper_ingot"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
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
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:gold_nugget"
+          weight: 15
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:iron_nugget"
+          weight: 15
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:coal"
+          weight: 15
+        }
+      ]
+      rolls: {
+        type: "minecraft:uniform"
+        max: 4
+        min: 2
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/desert/treasure</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:loot_table"
+          value: "terralith:village/treasure/golem"
+          weight: 1
+        }
+        {
+          type: "minecraft:loot_table"
+          value: "terralith:village/treasure/emerald"
+          weight: 3
+        }
+        {
+          type: "minecraft:loot_table"
+          value: "terralith:village/treasure/diamond"
+          weight: 3
+        }
+      ]
+    }
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:dune_armor_trim_smithing_template"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:random_chance"
+          chance: 0.15
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 2
+        max: 5
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:lantern"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:azalea_leaves"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:chain"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_nugget"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 3
+                max: 6
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/fortified/archer</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.2
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 0
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:crossbow"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.2
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 0
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:bow"
+          weight: 2
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:spectral_arrow"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                max: 16
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:arrow"
+          weight: 10
+        }
+      ]
+      rolls: {
+        type: "minecraft:uniform"
+        max: 3
+        min: 1
+      }
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:rabbit_foot"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:rabbit_hide"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:flint"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:iron_nugget"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:tripwire_hook"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:string"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:feather"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:stick"
+          weight: 3
+        }
+      ]
+      rolls: {
+        type: "minecraft:uniform"
+        max: 6
+        min: 3
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/fortified/attic</summary>

```diff
+{
+  pools: [
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:cobweb"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:bowl"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:spider_eye"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:glass_bottle"
+          weight: 1
+        }
+      ]
+      rolls: {
+        max: 7
+        min: 2
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/fortified/butcher</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_axe"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                min: 0
+                max: 10
+              }
+              options: "#minecraft:on_random_loot"
+              conditions: [
+                {
+                  condition: "minecraft:random_chance"
+                  chance: 0.2
+                }
+              ]
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:charcoal"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 5
+                max: 8
+              }
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:suspicious_stew"
+          functions: [
+            {
+              function: "minecraft:set_stew_effect"
+              effects: [
+                {
+                  type: "minecraft:saturation"
+                  duration: {
+                    type: "minecraft:uniform"
+                    min: 7
+                    max: 10
+                  }
+                }
+                {
+                  type: "minecraft:night_vision"
+                  duration: {
+                    type: "minecraft:uniform"
+                    min: 7
+                    max: 10
+                  }
+                }
+                {
+                  type: "minecraft:poison"
+                  duration: {
+                    type: "minecraft:uniform"
+                    min: 10
+                    max: 20
+                  }
+                }
+                {
+                  type: "minecraft:weakness"
+                  duration: {
+                    type: "minecraft:uniform"
+                    min: 6
+                    max: 8
+                  }
+                }
+                {
+                  type: "minecraft:blindness"
+                  duration: {
+                    type: "minecraft:uniform"
+                    min: 5
+                    max: 7
+                  }
+                }
+                {
+                  type: "minecraft:jump_boost"
+                  duration: {
+                    type: "minecraft:uniform"
+                    min: 7
+                    max: 10
+                  }
+                }
+              ]
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 2
+        max: 2
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:rabbit"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:binomial"
+                n: 3
+                p: 0.2
+              }
+              add: true
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:chicken"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:binomial"
+                n: 3
+                p: 0.2
+              }
+              add: true
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:beef"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:binomial"
+                n: 3
+                p: 0.2
+              }
+              add: true
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:porkchop"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:binomial"
+                n: 3
+                p: 0.2
+              }
+              add: true
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:rabbit_hide"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 4
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:leather"
+          weight: 2
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 4
+              }
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:stripped_oak_wood"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 3
+                max: 6
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:oak_wood"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 3
+                max: 6
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/fortified/cartographer</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chance: 0.2
+              condition: "minecraft:random_chance"
+            }
+          ]
+          name: "minecraft:spyglass"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              conditions: [
+                {
+                  chance: 0.2
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 0
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:leather_boots"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:saddle"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:bundle"
+          weight: 7
+          conditions: [
+            {
+              condition: "minecraft:value_check"
+              value: {
+                type: "minecraft:score"
+                target: {
+                  type: "minecraft:fixed"
+                  name: "%BUNDLE"
+                }
+                score: "tr.bundle"
+              }
+              range: 1
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:lead"
+          weight: 7
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:map"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:compass"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:writable_book"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:map"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:paper"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:stick"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 2
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+        }
+      ]
+      rolls: {
+        type: "minecraft:uniform"
+        max: 5
+        min: 2
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/fortified/fisherman</summary>

```diff
+{
+  pools: [
+    {
+      rolls: {
+        min: 4
+        max: 6
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:string"
+          weight: 60
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:stick"
+          weight: 80
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 8
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:cod"
+          weight: 50
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:salmon"
+          weight: 50
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:pufferfish"
+          weight: 20
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:glass_bottle"
+          weight: 30
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:water_bucket"
+          weight: 40
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:potion"
+          weight: 50
+          functions: [
+            {
+              function: "minecraft:set_potion"
+              id: "minecraft:water"
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:clay_ball"
+          weight: 30
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 6
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:tropical_fish"
+          weight: 10
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:cod_bucket"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:salmon_bucket"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:tadpole_bucket"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:axolotl_bucket"
+          weight: 5
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:pufferfish_bucket"
+          weight: 8
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:name_tag"
+          weight: 20
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/fortified/food</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 2
+        max: 4
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:enchanted_golden_apple"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:golden_apple"
+          weight: 20
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:apple"
+          weight: 150
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 2
+                max: 4
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:bread"
+          weight: 150
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 2
+                max: 4
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:cooked_beef"
+          weight: 150
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 2
+                max: 4
+              }
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 1
+        max: 3
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:stick"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 2
+                max: 4
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:bowl"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/fortified/generic</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 3
+        max: 6
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:gold_nugget"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 2
+                max: 4
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:dandelion"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:poppy"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:potato"
+          weight: 7
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 2
+                max: 4
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:bread"
+          weight: 7
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:apple"
+          weight: 7
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:book"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:feather"
+          weight: 2
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:emerald"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:oak_sapling"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/fortified/generic_low</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 2
+        max: 4
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:gold_nugget"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 2
+                max: 4
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:dandelion"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:poppy"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:potato"
+          weight: 7
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 2
+                max: 4
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:bread"
+          weight: 7
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:apple"
+          weight: 7
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:book"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:feather"
+          weight: 2
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:emerald"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:oak_sapling"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/fortified/junk</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:diamond_hoe"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                min: 0
+                max: 40
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          conditions: [
+            {
+              condition: "minecraft:random_chance"
+              chance: 0.01
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 3
+        max: 5
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:wooden_hoe"
+          weight: 2
+          functions: [
+            {
+              function: "minecraft:set_damage"
+              damage: {
+                type: "minecraft:uniform"
+                min: 0
+                max: 0.9
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:hanging_roots"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 3
+                max: 7
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:wheat_seeds"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 3
+                max: 7
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:rooted_dirt"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:coarse_dirt"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:dirt"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:mossy_cobblestone"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:cobblestone"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:stripped_oak_log"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:spruce_fence"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:oak_door"
+          weight: 2
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:bowl"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:stick"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/fortified/library</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 1
+        max: 2
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:book"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                min: 20
+                max: 30
+              }
+              options: "#minecraft:non_treasure"
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:book"
+          weight: 5
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 10
+                max: 20
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:book"
+          weight: 25
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 10
+              }
+              options: "#minecraft:non_treasure"
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 2
+        max: 4
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:flint_and_steel"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:candle"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:painting"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:glow_item_frame"
+          weight: 2
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:item_frame"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 3
+        max: 5
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:bookshelf"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:writable_book"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:paper"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/fortified/mason</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_shovel"
+        }
+      ]
+      functions: [
+        {
+          function: "minecraft:enchant_with_levels"
+          levels: {
+            type: "minecraft:uniform"
+            min: 0
+            max: 10
+          }
+          options: "#minecraft:on_random_loot"
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 3
+        max: 5
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:water_bucket"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:yellow_dye"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:flower_pot"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:brick"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:clay_ball"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 2
+        max: 4
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:clay"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:smooth_stone"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:stone_bricks"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:stone"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/fortified/smith</summary>

```diff
+{
+  pools: [
+    {
+      entries: [
+        {
+          type: "minecraft:loot_table"
+          value: "terralith:village/fortified/smith/novice"
+          weight: 19
+        }
+        {
+          type: "minecraft:loot_table"
+          value: "terralith:village/fortified/smith/expert"
+          weight: 1
+        }
+      ]
+      rolls: 1
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/fortified/smith/expert</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:diamond"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:diamond_pickaxe"
+        }
+      ]
+      functions: [
+        {
+          function: "minecraft:enchant_with_levels"
+          levels: {
+            type: "minecraft:uniform"
+            min: 0
+            max: 20
+          }
+          options: "#minecraft:on_random_loot"
+          conditions: [
+            {
+              condition: "minecraft:random_chance"
+              chance: 0.2
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 3
+        max: 5
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:obsidian"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 3
+                max: 10
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:deepslate_diamond_ore"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:gold_ore"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:deepslate_lapis_ore"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:cobbled_deepslate"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 2
+                max: 4
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:deepslate"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 2
+                max: 4
+              }
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 2
+        max: 4
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:lapis_lazuli"
+          weight: 10
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 2
+                max: 6
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_ingot"
+          weight: 10
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 2
+                max: 6
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:gold_nugget"
+          weight: 15
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 3
+                max: 10
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_nugget"
+          weight: 15
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 3
+                max: 10
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:coal"
+          weight: 15
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 3
+                max: 6
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/fortified/smith/novice</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_pickaxe"
+        }
+      ]
+      functions: [
+        {
+          function: "minecraft:enchant_with_levels"
+          levels: {
+            type: "minecraft:uniform"
+            min: 0
+            max: 10
+          }
+          options: "#minecraft:on_random_loot"
+          conditions: [
+            {
+              condition: "minecraft:random_chance"
+              chance: 0.2
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 3
+        max: 5
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:copper_ore"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:gold_ore"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_ore"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:cobblestone"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 3
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:stone"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 3
+                max: 5
+              }
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 2
+        max: 4
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:diamond"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_block"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:gold_ingot"
+          weight: 10
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:copper_ingot"
+          weight: 10
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_ingot"
+          weight: 10
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:gold_nugget"
+          weight: 15
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 3
+                max: 10
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_nugget"
+          weight: 15
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 3
+                max: 10
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:coal"
+          weight: 15
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 3
+                max: 6
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/fortified/tavern_downstairs</summary>

```diff
+{
+  pools: [
+    {
+      rolls: {
+        min: 3
+        max: 4
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:melon_slice"
+          weight: 10
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:cookie"
+          weight: 7
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:apple"
+          weight: 7
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:bread"
+          weight: 5
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:baked_potato"
+          weight: 5
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:carrot"
+          weight: 10
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        min: 1
+        max: 2
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:sweet_berries"
+          weight: 15
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 2
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:cooked_chicken"
+          weight: 5
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:cooked_porkchop"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:cooked_mutton"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:cooked_beef"
+          weight: 3
+        }
+      ]
+    }
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:beetroot_soup"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:rabbit_stew"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:mushroom_stew"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:golden_apple"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:pumpkin_pie"
+          weight: 5
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/fortified/tavern_upstairs</summary>

```diff
+{
+  pools: [
+    {
+      rolls: {
+        min: 2
+        max: 5
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:milk_bucket"
+          weight: 5
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:potato"
+          weight: 10
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:sweet_berries"
+          weight: 10
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:potion"
+          weight: 5
+          functions: [
+            {
+              function: "minecraft:set_potion"
+              id: "minecraft:water"
+            }
+            {
+              function: "minecraft:set_count"
+              count: 1
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:beetroot"
+          weight: 10
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:carrot"
+          weight: 10
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:melon_slice"
+          weight: 10
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:wheat"
+          weight: 10
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:apple"
+          weight: 10
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:pumpkin"
+          weight: 5
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:egg"
+          weight: 5
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 10
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:honey_bottle"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:sugar"
+          weight: 5
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:cocoa_beans"
+          weight: 5
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:mutton"
+          weight: 4
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:porkchop"
+          weight: 4
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:beef"
+          weight: 4
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:chicken"
+          weight: 4
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:rabbit"
+          weight: 4
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/fortified/treasure</summary>

```diff
+{
+  pools: [
+    {
+      rolls: {
+        min: 3
+        max: 5
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:cobbled_deepslate"
+          weight: 70
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 7
+                max: 12
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:raw_iron"
+          weight: 50
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:raw_gold"
+          weight: 20
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:emerald"
+          weight: 60
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_nugget"
+          weight: 60
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 3
+                max: 7
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:chain"
+          weight: 40
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 2
+                max: 4
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:coal"
+          weight: 60
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 7
+              }
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        min: 2
+        max: 3
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_ingot"
+          weight: 60
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 4
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:obsidian"
+          weight: 60
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 5
+                max: 9
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:diamond"
+          weight: 40
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:emerald_block"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:gold_ingot"
+          weight: 30
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        min: 0
+        max: 3
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:carved_pumpkin"
+          weight: 50
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:lantern"
+          weight: 50
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:dark_oak_sapling"
+          weight: 30
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 2
+                max: 4
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:oak_sapling"
+          weight: 50
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:apple"
+          weight: 40
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:golden_apple"
+          weight: 20
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:enchanted_golden_apple"
+          weight: 1
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:sentry_armor_trim_smithing_template"
+          weight: 10
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/treasure/diamond</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:obsidian"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 4
+                max: 8
+              }
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:diamond"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 2
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/treasure/emerald</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:emerald"
+          weight: 4
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 3
+                max: 12
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:emerald_block"
+          weight: 1
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/village/treasure/golem</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:carved_pumpkin"
+        }
+      ]
+    }
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_block"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: 4
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:poppy"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 3
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/terralith/witch_hut</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:potion"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:set_potion"
+              id: "minecraft:oozing"
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:golden_apple"
+          weight: 1
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: 1
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:splash_potion"
+          weight: 2
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: 1
+            }
+            {
+              function: "minecraft:set_potion"
+              id: "minecraft:long_weakness"
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:tadpole_bucket"
+          weight: 2
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: 1
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        min: 3
+        max: 4
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:cobweb"
+          weight: 2
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 5
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:lily_pad"
+          weight: 2
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 4
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:salmon"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 4
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:string"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 4
+              }
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:slime_ball"
+          weight: 3
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                min: 1
+                max: 7
+              }
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (23)</summary>
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
                 "allthemons:ivs"
                 "allthemons:moves"
                 "allthemons:nature"
+                "allthemons:shiny_modifier"
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
<summary>minecraft/loot_table/enderio/blocks/painted_crafting_table</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "enderio:copy_paint"
               should_copy_primary: true
             }
           ]
           name: "enderio:painted_crafting_table"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "enderio:blocks/painted_crafting_table"
 }

```


</details>

<details>
<summary>minecraft/loot_table/enderio/blocks/painted_fence</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "enderio:copy_paint"
               should_copy_primary: true
             }
           ]
           name: "enderio:painted_fence"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "enderio:blocks/painted_fence"
 }

```


</details>

<details>
<summary>minecraft/loot_table/enderio/blocks/painted_fence_gate</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "enderio:copy_paint"
               should_copy_primary: true
             }
           ]
           name: "enderio:painted_fence_gate"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "enderio:blocks/painted_fence_gate"
 }

```


</details>

<details>
<summary>minecraft/loot_table/enderio/blocks/painted_glowstone</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "enderio:copy_paint"
               should_copy_primary: true
             }
           ]
           name: "enderio:painted_glowstone"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "enderio:blocks/painted_glowstone"
 }

```


</details>

<details>
<summary>minecraft/loot_table/enderio/blocks/painted_redstone_block</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "enderio:copy_paint"
               should_copy_primary: true
             }
           ]
           name: "enderio:painted_redstone_block"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "enderio:blocks/painted_redstone_block"
 }

```


</details>

<details>
<summary>minecraft/loot_table/enderio/blocks/painted_sand</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "enderio:copy_paint"
               should_copy_primary: true
             }
           ]
           name: "enderio:painted_sand"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "enderio:blocks/painted_sand"
 }

```


</details>

<details>
<summary>minecraft/loot_table/enderio/blocks/painted_slab</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:inverted"
+          term: {
+            block: "enderio:painted_slab"
+            condition: "minecraft:block_state_property"
+            properties: {
+              type: "top"
+            }
+          }
+        }
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:inverted"
-              term: {
-                block: "enderio:painted_slab"
-                condition: "minecraft:block_state_property"
-                properties: {
-                  type: "top"
-                }
-              }
-            }
-          ]
           type: "minecraft:item"
           functions: [
             {
               function: "enderio:copy_paint"
               should_copy_primary: true
             }
           ]
           name: "enderio:painted_slab"
         }
       ]
       rolls: 1
     }
     {
+      conditions: [
+        {
+          condition: "minecraft:inverted"
+          term: {
+            block: "enderio:painted_slab"
+            condition: "minecraft:block_state_property"
+            properties: {
+              type: "bottom"
+            }
+          }
+        }
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:inverted"
-              term: {
-                block: "enderio:painted_slab"
-                condition: "minecraft:block_state_property"
-                properties: {
-                  type: "bottom"
-                }
-              }
-            }
-          ]
           type: "minecraft:item"
           functions: [
             {
               function: "enderio:copy_paint"
               should_copy_primary: false
             }
           ]
           name: "enderio:painted_slab"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "enderio:blocks/painted_slab"
 }

```


</details>

<details>
<summary>minecraft/loot_table/enderio/blocks/painted_stairs</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "enderio:copy_paint"
               should_copy_primary: true
             }
           ]
           name: "enderio:painted_stairs"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "enderio:blocks/painted_stairs"
 }

```


</details>

<details>
<summary>minecraft/loot_table/enderio/blocks/painted_trapdoor</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "enderio:copy_paint"
               should_copy_primary: true
             }
           ]
           name: "enderio:painted_trapdoor"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "enderio:blocks/painted_trapdoor"
 }

```


</details>

<details>
<summary>minecraft/loot_table/enderio/blocks/painted_travel_anchor</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "enderio:copy_paint"
               should_copy_primary: true
             }
           ]
           name: "enderio:painted_travel_anchor"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "enderio:blocks/painted_travel_anchor"
 }

```


</details>

<details>
<summary>minecraft/loot_table/enderio/blocks/painted_wall</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "enderio:copy_paint"
               should_copy_primary: true
             }
           ]
           name: "enderio:painted_wall"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "enderio:blocks/painted_wall"
 }

```


</details>

<details>
<summary>minecraft/loot_table/enderio/blocks/painted_wooden_pressure_plate</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "enderio:copy_paint"
               should_copy_primary: true
             }
           ]
           name: "enderio:painted_wooden_pressure_plate"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "enderio:blocks/painted_wooden_pressure_plate"
 }

```


</details>

<details>
<summary>minecraft/loot_table/enderio/chests/alloy_loot</summary>

```diff
 {
   type: "minecraft:chest"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           conditions: [
             {
               chance: 0.2
               condition: "minecraft:random_chance"
             }
           ]
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 2
                 min: 1
               }
               function: "minecraft:set_count"
             }
           ]
-          name: "enderio:copper_alloy_ingot"
+          name: "enderio:conductive_alloy_ingot"
         }
         {
           type: "minecraft:item"
           conditions: [
             {
               chance: 0.35
               condition: "minecraft:random_chance"
             }
           ]
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 3
                 min: 1
               }
               function: "minecraft:set_count"
             }
           ]
           name: "enderio:redstone_alloy_ingot"
         }
         {
           type: "minecraft:item"
           conditions: [
             {
               chance: 0.3
               condition: "minecraft:random_chance"
             }
           ]
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
           ]
           name: "enderio:pulsating_alloy_ingot"
         }
         {
           type: "minecraft:item"
           conditions: [
             {
               chance: 0.2
               condition: "minecraft:random_chance"
             }
           ]
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
           ]
           name: "enderio:vibrant_alloy_ingot"
         }
         {
           type: "minecraft:item"
           conditions: [
             {
               chance: 0.25
               condition: "minecraft:random_chance"
             }
           ]
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
           ]
           name: "enderio:iron_gear"
         }
         {
           type: "minecraft:item"
           conditions: [
             {
               chance: 0.125
               condition: "minecraft:random_chance"
             }
           ]
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
           ]
           name: "enderio:energized_gear"
         }
         {
           type: "minecraft:item"
           conditions: [
             {
               chance: 0.0625
               condition: "minecraft:random_chance"
             }
           ]
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
           ]
           name: "enderio:vibrant_gear"
         }
       ]
       name: "Ender IO"
       rolls: {
         type: "minecraft:uniform"
         max: 2
         min: 0
       }
     }
   ]
   random_sequence: "enderio:chests/alloy_loot"
 }

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/cave_moss</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       conditions: [
         {
+          terms: [
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "minecraft:shears"
+              }
+            }
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "#eternal_starlight:sickles"
+              }
+            }
+          ]
-          condition: "minecraft:survives_explosion"
+          condition: "minecraft:any_of"
         }
       ]
       entries: [
         {
           type: "minecraft:item"
           name: "eternal_starlight:cave_moss"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "eternal_starlight:blocks/cave_moss"
 }

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/cave_moss_plant</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       conditions: [
         {
+          terms: [
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "minecraft:shears"
+              }
+            }
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "#eternal_starlight:sickles"
+              }
+            }
+          ]
-          condition: "minecraft:survives_explosion"
+          condition: "minecraft:any_of"
         }
       ]
       entries: [
         {
           type: "minecraft:item"
           name: "eternal_starlight:cave_moss"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "eternal_starlight:blocks/cave_moss_plant"
 }

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/cave_moss_vein</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       conditions: [
         {
+          terms: [
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "minecraft:shears"
+              }
+            }
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "#eternal_starlight:sickles"
+              }
+            }
+          ]
-          condition: "minecraft:survives_explosion"
+          condition: "minecraft:any_of"
         }
       ]
       entries: [
         {
           type: "minecraft:item"
           name: "eternal_starlight:cave_moss"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "eternal_starlight:blocks/cave_moss_vein"
 }

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/glacite</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
                     predicates: {
                       minecraft:enchantments: [
                         {
                           enchantments: "minecraft:silk_touch"
                           levels: {
                             min: 1
                           }
                         }
                       ]
                     }
                   }
                 }
               ]
               name: "eternal_starlight:glacite"
             }
             {
               type: "minecraft:item"
               functions: [
-                {
-                  add: false
-                  count: {
-                    type: "minecraft:uniform"
-                    max: 6
-                    min: 2
-                  }
-                  function: "minecraft:set_count"
-                }
                 {
                   enchantment: "minecraft:fortune"
                   formula: "minecraft:ore_drops"
                   function: "minecraft:apply_bonus"
                 }
                 {
                   function: "minecraft:explosion_decay"
                 }
               ]
               name: "eternal_starlight:glacite_shard"
             }
           ]
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "eternal_starlight:blocks/glacite"
 }

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/hanging_fantagrass</summary>

```diff
 {
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:any_of"
+          terms: [
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "minecraft:shears"
+              }
+            }
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "#eternal_starlight:sickles"
+              }
+            }
+          ]
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:hanging_fantagrass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
   type: "minecraft:block"
   random_sequence: "eternal_starlight:blocks/hanging_fantagrass"
 }

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/hanging_fantagrass_plant</summary>

```diff
 {
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:any_of"
+          terms: [
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "minecraft:shears"
+              }
+            }
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "#eternal_starlight:sickles"
+              }
+            }
+          ]
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:air"
+        }
+      ]
+      rolls: 1
+    }
+  ]
   type: "minecraft:block"
   random_sequence: "eternal_starlight:blocks/hanging_fantagrass_plant"
 }

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/bosses/lunar_monstrosity</summary>

```diff
 {
   type: "minecraft:empty"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:loot_table"
           value: "eternal_starlight:bosses/boss_common"
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           name: "eternal_starlight:twining_armor_trim_smithing_template"
         }
       ]
       rolls: 1
     }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "eternal_starlight:music_disc_moonlight"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "eternal_starlight:music_disc_fake_light"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          conditions: [
-            {
-              chance: 0.2
-              condition: "minecraft:random_chance"
-            }
-          ]
-          functions: [
-            {
-              components: {
-                minecraft:entity_data: {
-                  id: "eternal_starlight:painting"
-                  variant: "eternal_starlight:monstrous"
-                }
-              }
-              function: "minecraft:set_components"
-            }
-          ]
-          name: "eternal_starlight:starlit_painting"
-        }
-      ]
-      rolls: 1
-    }
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          chance: 0.75
+          condition: "minecraft:random_chance"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:wand_of_teleportation"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          chance: 0.5
+          condition: "minecraft:random_chance"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:music_disc_moonlight"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          chance: 0.5
+          condition: "minecraft:random_chance"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:music_disc_fake_light"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          chance: 0.5
+          condition: "minecraft:random_chance"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              components: {
+                minecraft:entity_data: {
+                  id: "eternal_starlight:painting"
+                  variant: "eternal_starlight:monstrous"
+                }
+              }
+              function: "minecraft:set_components"
+            }
+          ]
+          name: "eternal_starlight:starlit_painting"
+        }
+      ]
+      rolls: 1
+    }
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           name: "eternal_starlight:moonring_bow"
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           name: "eternal_starlight:tenacious_petal"
         }
       ]
       rolls: {
         type: "minecraft:uniform"
         max: 15
         min: 10
       }
     }
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           name: "eternal_starlight:tenacious_vine"
         }
       ]
       rolls: {
         type: "minecraft:uniform"
         max: 15
         min: 10
       }
     }
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           name: "eternal_starlight:soul_dew"
         }
       ]
       rolls: {
         type: "minecraft:uniform"
         max: 4
         min: 3
       }
     }
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           name: "eternal_starlight:tangled_skull"
         }
       ]
       rolls: {
         type: "minecraft:uniform"
         max: 8
         min: 5
       }
     }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "eternal_starlight:wand_of_teleportation"
-        }
-      ]
-      rolls: {
-        type: "minecraft:uniform"
-        max: 1
-        min: 0
-      }
-    }
     {
       bonus_rolls: 0
       conditions: [
         {
-          chance: 0.4
+          chance: 0.75
           condition: "minecraft:random_chance"
         }
       ]
       entries: [
         {
           type: "minecraft:item"
           name: "eternal_starlight:crescent_spear"
         }
       ]
-      rolls: {
-        type: "minecraft:uniform"
-        max: 1
-        min: 0
-      }
+      rolls: 1
     }
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           name: "eternal_starlight:crescent_pendant"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "eternal_starlight:bosses/lunar_monstrosity"
 }

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/bosses/starlight_golem</summary>

```diff
 {
   type: "minecraft:empty"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:loot_table"
           value: "eternal_starlight:bosses/boss_common"
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           name: "eternal_starlight:oxidized_golem_steel_ingot"
         }
       ]
       rolls: {
         type: "minecraft:uniform"
         max: 10
         min: 8
       }
     }
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           name: "eternal_starlight:forge_armor_trim_smithing_template"
         }
       ]
       rolls: 1
     }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "eternal_starlight:energy_sword"
-        }
-      ]
-      rolls: {
-        type: "minecraft:uniform"
-        max: 1
-        min: 0
-      }
-    }
     {
+      conditions: [
+        {
+          chance: 0.5
+          condition: "minecraft:random_chance"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           name: "eternal_starlight:music_disc_mechanical_fossil"
         }
       ]
       rolls: 1
     }
     {
+      conditions: [
+        {
+          chance: 0.5
+          condition: "minecraft:random_chance"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              chance: 0.2
-              condition: "minecraft:random_chance"
-            }
-          ]
           type: "minecraft:item"
           functions: [
             {
               components: {
                 minecraft:entity_data: {
                   id: "eternal_starlight:painting"
                   variant: "eternal_starlight:energized"
                 }
               }
               function: "minecraft:set_components"
             }
           ]
           name: "eternal_starlight:starlit_painting"
         }
       ]
       rolls: 1
     }
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:oxidized_alloy_furnace"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          chance: 0.75
+          condition: "minecraft:random_chance"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:energy_sword"
+        }
+      ]
+      rolls: 1
+    }
   ]
   random_sequence: "eternal_starlight:bosses/starlight_golem"
 }

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/gameplay/starfire_bird_gift</summary>

```diff
 {
   type: "minecraft:gift"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 4
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:feather"
           weight: 25
         }
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 4
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "minecraft:wheat_seeds"
-          weight: 25
-        }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 3
                 min: 1
               }
               function: "minecraft:set_count"
             }
           ]
           name: "eternal_starlight:starfire"
           weight: 35
         }
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 5
-                min: 3
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "eternal_starlight:pungency_fruit_seeds"
-          weight: 25
-        }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 10
                 min: 5
               }
               function: "minecraft:set_count"
             }
           ]
           name: "eternal_starlight:deepsilver_nugget"
           weight: 12
         }
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 10
-                min: 5
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "eternal_starlight:thioquartz_shard"
-          weight: 12
-        }
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 10
-                min: 5
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "eternal_starlight:saltpeter_powder"
-          weight: 12
-        }
       ]
       rolls: {
         type: "minecraft:uniform"
         max: 4
         min: 2
       }
     }
   ]
   random_sequence: "eternal_starlight:gameplay/starfire_bird_gift"
 }

```


</details>

</blockquote>

</details>

<details open>
<summary>Removed (2)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/enderio/blocks/copper_alloy_block</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "enderio:copper_alloy_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "enderio:blocks/copper_alloy_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/enderio/blocks/industrial_insulation_block</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "enderio:industrial_insulation_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "enderio:blocks/industrial_insulation_block"
-}

```


</details>

</blockquote>

</details>

