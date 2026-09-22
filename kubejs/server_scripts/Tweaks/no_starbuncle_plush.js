const $EventPriority = Java.loadClass("net.neoforged.bus.api.EventPriority")
const $Rewards = Java.loadClass("com.hollingsworth.arsnouveau.setup.reward.Rewards")

const LOGGED_IN = "net.neoforged.neoforge.event.entity.player.PlayerEvent$PlayerLoggedInEvent"

NativeEvents.onEvent($EventPriority.HIGHEST, LOGGED_IN, event => {
  try {
    $Rewards.SEND_ONE_TIME_MESSAGE = false
    $Rewards.STARBUNCLE_PLUSH_MESSAGE = null
  } catch (err) {
    console.error(`[plush] failed to disable the Starbuncle plush reward: ${err}`)
  }
})
