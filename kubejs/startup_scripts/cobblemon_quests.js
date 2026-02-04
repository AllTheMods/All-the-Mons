global.levelUpTasks = [
  { "09E7D93E692CB782": { "value": 15 } },
  { "45917FB36443E72A": { "value": 1 } }
]

global.evolveTask = [
  "6D8B0FFD3F4C0BCB"
]

global.defeatWildTask = [
  "1B2F05BF5D48329D"
]

global.catchByTypeTask = [
  { "20B3F9F1CE3390F0": ["normal"] },
  { "43147E2E5C5F82FE": ["fire"] },
  { "4AE93F7B08939F9E": ["water"] },
  { "1F594257CC0242C5": ["grass"] },
  { "00A19B1AF9190E63": ["electric"] },
  { "0AA2B65F753F73C2": ["ice"] },
  { "5B8FFDAD3656AC1F": ["fighting"] },
  { "300456D611679CBD": ["poison"] },
  { "57FC96B0E217BDDD": ["ground"] },
  { "6316CFB3E914AFA6": ["flying"] },
  { "2EC0B91DDBE09BEE": ["psychic"] },
  { "175ACBBE95D80432": ["rock"] },
  { "3BFEB36624783EBC": ["ghost"] },
  { "6C915513662EB128": ["dragon"] },
  { "66878F47E725797B": ["dark"] },
  { "3AC02DCA2CF8EB3B": ["steel"] },
  { "13EB39D62AF23E66": ["fairy"] },
  { "584C198D4FAB05FC": ["bug"] }
]

global.catchBySpeciesTask = [
  { "5B0B010CE3AB414B": "ditto" } 
]

let $FTBQuestsAPI = Java.loadClass("dev.ftb.mods.ftbquests.api.FTBQuestsAPI")
let $CobblemonEvents = Java.loadClass("com.cobblemon.mod.common.api.events.CobblemonEvents")

StartupEvents.postInit(allthemods => {
  $CobblemonEvents.LEVEL_UP_EVENT["subscribe(com.cobblemon.mod.common.api.Priority,java.util.function.Consumer)"]("LOWEST", (event) => global.pokemonLevelUp(event))
  $CobblemonEvents.EVOLUTION_ACCEPTED["subscribe(com.cobblemon.mod.common.api.Priority,java.util.function.Consumer)"]("LOWEST", (event) => global.pokemonEvolutionAccepted(event))
  $CobblemonEvents.BATTLE_VICTORY["subscribe(com.cobblemon.mod.common.api.Priority,java.util.function.Consumer)"]("LOWEST", (event) => global.battleVictoryEvent(event))
  $CobblemonEvents.POKEMON_CAPTURED["subscribe(com.cobblemon.mod.common.api.Priority,java.util.function.Consumer)"]("LOWEST", (event) => global.pokemonCaptured(event))
})

global.pokemonLevelUp = (levelUpEvent) => {
  let questFile = $FTBQuestsAPI.api().getQuestFile(false)
  let context = levelUpEvent.context
  let player = context.pokemon.obj.getOwnerPlayer()
  if (player == null) return
  let teamDataOpt = questFile.getTeamData(player)
  if (teamDataOpt.isEmpty()) return
  let teamData = teamDataOpt.get()
  for (let taskObj of global.levelUpTasks) {
    for (let taskId in taskObj) {
      let taskLong = questFile.getID(taskId)
      let task = questFile.getTask(taskLong)
      if (teamData.isCompleted(task)) continue
      let value = taskObj[taskId].value
      if (context.new_level.asDouble() >= value) {
        teamData.addProgress(task, 1)
      }
    }
  }
}

global.pokemonEvolutionAccepted = (evolutionAccepted) => {
  let questFile = $FTBQuestsAPI.api().getQuestFile(false)
  let context = evolutionAccepted.context
  let player = context.pokemon.obj.getOwnerPlayer()
  if (player == null) return
  let teamDataOpt = questFile.getTeamData(player)
  if (teamDataOpt.isEmpty()) return
  let teamData = teamDataOpt.get()
  for (let taskId of global.evolveTask) {
    let taskLong = questFile.getID(taskId)
    let task = questFile.getTask(taskLong)
    if (teamData.isCompleted(task)) continue
    teamData.addProgress(task, 1)
  }
}

global.battleVictoryEvent = (battleVictory) => {
  let questFile = $FTBQuestsAPI.api().getQuestFile(false)
  let context = battleVictory.context
  let player = battleVictory.battle.players.first
  //console.log(player)
  if (player == null) return
  if (battleVictory.wasWildCapture) return
  let teamDataOpt = questFile.getTeamData(player)
  if (teamDataOpt.isEmpty()) return
  let teamData = teamDataOpt.get()
  for (let taskId of global.defeatWildTask) {
    let taskLong = questFile.getID(taskId)
    let task = questFile.getTask(taskLong)
    //console.log(task)
    if (teamData.isCompleted(task)) continue
    //console.log(battleVictory.context.wild_pokemon_losers.map)
    if (!battleVictory.context.wild_pokemon_losers.map.isEmpty()) {
      //console.log("Setting task " + task + " as completed!")
      teamData.addProgress(task, 1)
    }	
  }
}

global.pokemonCaptured = (pokemonCaptured) => {
  let questFile = $FTBQuestsAPI.api().getQuestFile(false)
  let pokemon = pokemonCaptured.pokemon
  let player = pokemonCaptured.player
  if (player == null) return
  let teamDataOpt = questFile.getTeamData(player)
  if (teamDataOpt.isEmpty()) return
  let teamData = teamDataOpt.get()
  // by species
  for (let taskObj of global.catchBySpeciesTask) {
    for (let taskId in taskObj) {
      let taskLong = questFile.getID(taskId)
      let task = questFile.getTask(taskLong)
      if (teamData.isCompleted(task)) continue
      if (pokemon.showdownId() == taskObj[taskId]) {
        teamData.addProgress(task, 1)
      }
    }
  }
  // by type
  for (let taskObj of global.catchByTypeTask) {
    for (let taskId in taskObj) {
      let taskLong = questFile.getID(taskId)
      let task = questFile.getTask(taskLong)
      if (teamData.isCompleted(task)) continue
      let matchAll = true
      for (let typeTask of taskObj[taskId]) {
        if (!matchAll) break
        let match = false
        for (let type of pokemon.types) {
          if (type.showdownId() == typeTask) match = true	
        }
        if (!match) matchAll = false			
      }
      if (matchAll) {
        teamData.addProgress(task, 1)
      }
    }
  }
}