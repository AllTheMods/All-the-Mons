import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"

// ServerEvents.basicCommand("check_patrick_dex", event => {
//   let $Cobblemon = Java.loadClass("com.cobblemon.mod.common.Cobblemon")
//   let $PokemonSpecies = Java.loadClass("com.cobblemon.mod.common.api.pokemon.PokemonSpecies")
//   let dex = $Cobblemon.playerDataManager["getPokedexData(net.minecraft.server.level.ServerPlayer)"](event.player)
//   let staryuRecord = dex.getSpeciesRecord("cobblemon:staryu")
//   console.log("Staryu record: " + staryuRecord)
//   if (staryuRecord != null) {
//     console.log("Describe: " + staryuRecord.describe())
//     let atmForm = staryuRecord.getFormRecord("heat")
//     //let atmForm = staryuRecord.getFormRecord("atm")
//     console.log(atmForm)
//     console.log(staryuRecord.aspects)
//     console.log("Has aspect: " + staryuRecord.hasAspect("atm"))
//     if (atmForm != null) {
//       console.log("Knownledge: " + atmForm.struct)
//     }
//   }
// })

let regions = [
    "kantonian",
    "johtonian",
    "hoennian",
    "sinnohan",
    "unovan",
    "kalosian",
    "alolan",
    "galarian",
    "hisuian",
    "paldean"
  ]

ServerEvents.generateData("after_mods", event => {
  let patrickStarJson = {
    "criteria": {
      "own_patrick_staryu": {
        "conditions": {
          "items": [
            {
              "items": "allthemons:pokemon_egg",
              "components": {
                "allthemons:features": ["atm"],
                "allthemons:species": "cobblemon:staryu"
              }
            }
          ]
        },
        "trigger": "minecraft:inventory_changed"
      }
    },
    "display": {
      "announce_to_chat": true,
      "background": "cobblemon:textures/gui/advancements/backgrounds/cobblemon.png",
      "description": {
        "translate": "advancements.allthemons.own_patrick_staryu.description"
      },
      "frame": "goal",
      "hidden": false,
      "icon": {
        "id": "cobblemon:pokemon_model",
        "components": {
          "cobblemon:pokemon_item": {
            "species": "cobblemon:staryu",
            "aspects": ["atm"]
          }
        }
      },
      "show_toast": true,
      "title": {
        "translate": "advancements.allthemons.own_patrick_staryu.title"
      }
    },
    "requirements": [
      [
        "own_patrick_staryu"
      ]
    ]
  }

  event.json("allthemons:advancement/root", patrickStarJson)

  let imbuedEggJson = {
    "criteria": {
      "imbued_egg": {
        "trigger": "minecraft:impossible"
      }
    },
    "display": {
      "announce_to_chat": true,
      "background": null,
      "description": {
        "translate": "advancements.allthemons.imbued_egg.description"
      },
      "frame": "goal",
      "hidden": false,
      "icon": {
        "id": "allthemons:imbued_pokemon_egg"
      },
      "show_toast": true,
      "title": {
        "translate": "advancements.allthemons.imbued_egg.title"
      }
    },
    "requirements": [
      [
        "imbued_egg"
      ]
    ],
    "parent": "allthemons:root"
  }

  event.json("allthemons:advancement/imbued_egg", imbuedEggJson)

  let unboundPikaStar = {
    "criteria": {
      "unbound_pika_star": {
        "conditions": {
          "items": [
            {
              "items": "allthemons:pika_star"
            }
          ]
        },
        "trigger": "minecraft:inventory_changed"
      }
    },
    "display": {
      "announce_to_chat": true,
      "background": null,
      "description": {
        "translate": "advancements.allthemons.unbound_pika_star.description"
      },
      "frame": "challenge",
      "hidden": false,
      "icon": {
        "id": "allthemons:pika_star"
      },
      "show_toast": true,
      "title": {
        "translate": "advancements.allthemons.unbound_pika_star.title"
      }
    },
    "requirements": [
      [
        "unbound_pika_star"
      ]
    ],
    "parent": "allthemons:imbued_egg"
  }

  event.json("allthemons:advancement/unbound_pika_star", unboundPikaStar)

  let index = 0
  regions.forEach(region => {
    let regionJson = {
      "criteria": {
      },
      "display": {
        "announce_to_chat": true,
        "background": null,
        "description": {
          "translate": "advancements.allthemons." + region + "_pika_star.description"
        },
        "frame": "challenge",
        "hidden": false,
        "icon": {
          "id": "allthemons:pika_star",
          "components": {
            "allthemons:region": region
          }
        },
        "show_toast": true,
        "title": {
          "translate": "advancements.allthemons." + region + "_pika_star.title"
        }
      },
      "requirements": [
        [
          region + "_pika_star"
        ]
      ],
      "parent": "allthemons:unbound_pika_star"
    }

    regionJson.criteria = Utils.newMap()
    regionJson.criteria.put(region + "_pika_star", {
        "trigger": "minecraft:impossible"
    })

    event.json("allthemons:advancement/" + region + "_pika_star", regionJson)
    index++
  })

  regions.forEach(region => {
    let regionJson = {
      "criteria": {
      },
      "display": {
        "announce_to_chat": true,
        "background": null,
        "description": {
          "translate": "advancements.allthemons." + region + "_complete_pika_star.description"
        },
        "frame": "challenge",
        "hidden": false,
        "icon": {
          "id": "allthemons:pika_star",
          "components": {
            "allthemons:region": region,
            "minecraft:enchantment_glint_override": true
          }
        },
        "show_toast": true,
        "title": {
          "translate": "advancements.allthemons." + region + "_complete_pika_star.title"
        }
      },
      "requirements": [
        [
          region + "_complete_pika_star"
        ]
      ],
      "parent": "allthemons:" + region + "_pika_star"
    }

    regionJson.criteria = Utils.newMap()
    regionJson.criteria.put(region + "_complete_pika_star", {
        "trigger": "minecraft:impossible"
    })

    event.json("allthemons:advancement/" + region + "_complete_pika_star", regionJson)
  })

  let completeRegionalPikaStar = {
    "criteria": {
      "complete_regional_pika_star": {
        "trigger": "minecraft:impossible"
      }
    },
    "display": {
      "announce_to_chat": true,
      "background": null,
      "description": {
        "translate": "advancements.allthemons.complete_regional_pika_star.description"
      },
      "frame": "challenge",
      "hidden": false,
      "icon": {
        "id": "cobblemon:pokedex_red"
      },
      "show_toast": true,
      "title": {
        "translate": "advancements.allthemons.complete_regional_pika_star.title"
      }
    },
    "requirements": [
      [
        "complete_regional_pika_star"
      ]
    ],
    "parent": "allthemons:unbound_pika_star"
  }

  event.json("allthemons:advancement/complete_regional_pika_star", completeRegionalPikaStar)
  

  let completeRegionalShinyPikaStar = {
    "criteria": {
      "complete_regional_shiny_pika_star": {
        "trigger": "minecraft:impossible"
      }
    },
    "display": {
      "announce_to_chat": true,
      "background": null,
      "description": {
        "translate": "advancements.allthemons.complete_regional_shiny_pika_star.description"
      },
      "frame": "challenge",
      "hidden": false,
      "icon": {
        "id": "cobblemon:pokedex_red",
        "components": {
          "minecraft:enchantment_glint_override": true
        }
      },
      "show_toast": true,
      "title": {
        "translate": "advancements.allthemons.complete_regional_shiny_pika_star.title"
      }
    },
    "requirements": [
      [
        "complete_regional_shiny_pika_star"
      ]
    ],
    "parent": "allthemons:complete_regional_pika_star"
  }

  event.json("allthemons:advancement/complete_regional_shiny_pika_star", completeRegionalShinyPikaStar)
  
  let shinyPikaStar = {
    "criteria": {
      "shiny_pika_star": {
        "conditions": {
          "items": [
            {
              "items": "allthemons:shiny_pika_star"
            }
          ]
        },
        "trigger": "minecraft:inventory_changed"
      }
    },
    "display": {
      "announce_to_chat": true,
      "background": null,
      "description": {
        "translate": "advancements.allthemons.shiny_pika_star.description"
      },
      "frame": "challenge",
      "hidden": false,
      "icon": {
        "id": "allthemons:shiny_pika_star"
      },
      "show_toast": true,
      "title": {
        "translate": "advancements.allthemons.shiny_pika_star.title"
      }
    },
    "requirements": [
      [
        "shiny_pika_star"
      ]
    ],
    "parent": "allthemons:complete_regional_shiny_pika_star"
  }

  event.json("allthemons:advancement/shiny_pika_star", shinyPikaStar)
})

let $HashSet = Java.loadClass("java.util.HashSet")
let regularAdvancements = new $HashSet()
let completeAdvancements = new $HashSet()

regions.forEach(region => {
    regularAdvancements.add("allthemons:" + region + "_pika_star")
    completeAdvancements.add("allthemons:" + region + "_complete_pika_star")
})

PlayerEvents.loggedIn(event => {
    /** @type {$ServerPlayer} */
    let player = event.player
    if (regularAdvancements.stream().allMatch(key => player.isAdvancementDone(key))) {
        player.unlockAdvancement("allthemons:complete_regional_pika_star")
    }
    if (completeAdvancements.stream().allMatch(key => player.isAdvancementDone(key))) {
        player.unlockAdvancement("allthemons:complete_regional_shiny_pika_star")
    }
})

PlayerEvents.advancement(event => {
    if (regularAdvancements.contains(event.advancement.id.toString())){
        if (regularAdvancements.stream().allMatch(key => event.player.isAdvancementDone(key))) {
            event.player.unlockAdvancement("allthemons:complete_regional_pika_star")
        }
    }
    if (completeAdvancements.contains(event.advancement.id.toString())){
        if (completeAdvancements.stream().allMatch(key => event.player.isAdvancementDone(key))) {
            event.player.unlockAdvancement("allthemons:complete_regional_shiny_pika_star")
        }
    }
})

// ServerEvents.basicCommand("get_all_regional_pika_stars", event => {
//     regions.forEach(region => {
//         let star = Item.of(`allthemons:pika_star[allthemons:region="${region}"]`)
//         let component = NBT.compoundTag()
//         component.putUUID("uuid", event.player.uuid)
//         star.set("allthemons:uuid", NBT.toJson(component.get("uuid")))
//         event.player.unlockAdvancement("allthemons:" + region + "_pika_star")
//         event.player.give(star)
//     })
// })