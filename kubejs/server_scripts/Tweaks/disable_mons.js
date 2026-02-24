ServerEvents.generateData('last', allthemons => {

  let mons = [
      "blacephalon", "buzzwole", "celebi", "chienpao", "cobalion", "fluttermane", "genesect",
      "ironcrown", "jirachi", "kartana", "magearna", "marshadow", "meltan", "nihilego", "ogerpon",
      "pecharunt", "poipole", "screamtail", "shaymin", "stakataka", "terrakion", "xurkitree"
  ]

  mons.forEach((mon) => {
      allthemons.json("cobblemon:spawn_pool_world/" + mon + ".json", {
        "enabled": true,
        "neededInstalledMods": [],
        "neededUninstalledMods": [],
        "spawns": []
      })
  })
  
})