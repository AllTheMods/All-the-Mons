ServerEvents.generateData('last', allthemons => {

  // DO NOT DELETE THIS
  // let monsToFilter = [
  // "articuno", "mew", "mewtwo", "moltres", "zapdos", "celebi", "entei", "hooh", "lugia", "raikou", "suicune",
  // "deoxys", "groudon", "jirachi", "kyogre", "latias", "latios", "rayquaza", "regice", "regirock", "registeel",
  // "arceus", "azelf", "cresselia", "darkrai", "dialga", "giratina", "heatran", "manaphy", "mesprit", "palkia",
  // "phione", "regigigas", "shaymin", "uxie", "cobalion", "genesect", "keldeo", "kyurem", "landorus", "meloetta",
  // "reshiram", "terrakion", "thundurus", "tornadus", "victini", "virizion", "zekrom", "diancie", "hoopa",
  // "volcanion", "xerneas", "yveltal", "zygarde", "blacephalon", "buzzwole", "celesteela", "cosmoem", "cosmog",
  // "guzzlord", "kartana", "lunala", "magearna", "marshadow", "naganadel", "necrozma", "nihilego", "pheromosa",
  // "poipole", "silvally", "solgaleo", "stakataka", "tapubulu", "tapufini", "tapukoko", "tapulele", "typenull",
  // "xurkitree", "zeraora", "melmetal", "meltan", "calyrex", "eternatus", "glastrier", "kubfu", "regidrago",
  // "regieleki", "spectrier", "urshifu", "zacian", "zamazenta", "zarude", "enamorus", "brutebonnet", "chienpao",
  // "chiyu", "fezandipiti", "fluttermane", "gougingfire", "greattusk", "ironboulder", "ironbundle", "ironcrown",
  // "ironhands", "ironjugulis", "ironleaves", "ironmoth", "ironthorns", "irontreads", "ironvaliant", "koraidon",
  // "miraidon", "munkidori", "ogerpon", "okidogi", "pecharunt", "ragingbolt", "roaringmoon", "sandyshocks",
  // "screamtail", "slitherwing", "terapagos", "tinglu", "walkingwake", "wochien"
  // ]

  let paths = [
    'paradox_spawns_ccc:spawn_pool_world/0984_greattusk_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/0985_screamtail_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/0986_brutebonnet_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/0987_fluttermane_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/0988_slitherwing_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/0989_sandyshocks_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/0990_irontreads_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/0991_ironbundle_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/0992_ironhands_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/0993_ironjugulis_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/0994_ironmoth_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/0995_ironthorns_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/1005_roaringmoon_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/1006_ironvaliant_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/1009_walkingwake_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/1010_ironleaves_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/1020_gougingfire_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/1021_ragingbolt_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/1022_ironboulder_ccc.json',
    'paradox_spawns_ccc:spawn_pool_world/1023_ironcrown_ccc.json',
    'ub_spawns_ccc:spawn_pool_world/0793_nihilego_ccc.json',
    'ub_spawns_ccc:spawn_pool_world/0794_buzzwole_ccc.json',
    'ub_spawns_ccc:spawn_pool_world/0795_pheromosa_ccc.json',
    'ub_spawns_ccc:spawn_pool_world/0796_xurkitree_ccc.json',
    'ub_spawns_ccc:spawn_pool_world/0797_celesteela_ccc.json',
    'ub_spawns_ccc:spawn_pool_world/0798_kartana_ccc.json',
    'ub_spawns_ccc:spawn_pool_world/0799_guzzlord_ccc.json',
    'ub_spawns_ccc:spawn_pool_world/0803_poipole_ccc.json',
    'ub_spawns_ccc:spawn_pool_world/0804_naganadel_ccc.json',
    'ub_spawns_ccc:spawn_pool_world/0805_stakataka_ccc.json',
    'ub_spawns_ccc:spawn_pool_world/0806_blacephalon_ccc.json'
  ]

  paths.forEach((path) => {
    allthemons.json(path, {
      "enabled": true,
      "neededInstalledMods": [],
      "neededUninstalledMods": [],
      "spawns": []
    })
  })

})
