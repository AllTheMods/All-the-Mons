let $FTBQuestsAPI = Java.loadClass("dev.ftb.mods.ftbquests.api.FTBQuestsAPI")

NativeEvents.onEvent("lowest", "net.neoforged.neoforge.event.server.ServerStartedEvent", event => {
  let questFile = $FTBQuestsAPI.api().getQuestFile(false)
  let allIds = []

  for (let taskObj of global.levelUpTasks) {
    for (let taskId in taskObj) {
      allIds.push(taskId)
    }
  }

  for (let taskObj of global.catchByTypeTask) {
    for (let taskId in taskObj) {
      allIds.push(taskId)
    }
  }

  for (let taskObj of global.catchBySpeciesTask) {
    for (let taskId in taskObj) {
      allIds.push(taskId)
    }
  }

  for (let taskId of global.evolveTask) {
    allIds.push(taskId)
  }

  for (let taskId of global.defeatWildTask) {
    allIds.push(taskId)
  }
  
  for (let taskId of allIds) {
    let taskLong = questFile.getID(taskId)
    let task = questFile.getTask(taskLong)
    if (task == null) {
      console.error(`Task id ${taskId} was not found in quests, something must be wrong with your config/ftbquests folder. Make sure you updated the pack properly!`)
    }
  }
})