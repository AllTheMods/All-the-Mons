let $Cobblemon = Java.loadClass("com.cobblemon.mod.common.Cobblemon")

PlayerEvents.loggedIn(event => {
  let player = event.player
  event.server.scheduleInTicks(40, () => {
    if (player.hasDisconnected()) return
    let storage = $Cobblemon.INSTANCE.storage
    let pokemons = []
    for (let pokemon of storage.getParty(player)) pokemons.push(pokemon)
    for (let pokemon of storage.getPC(player)) pokemons.push(pokemon)
    global.completeSpeciesTasks(player, pokemons)
  })
})
