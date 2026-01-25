let $CaughtCount = Java.loadClass("com.cobblemon.mod.common.api.pokedex.CaughtCount").INSTANCE
let $Cobblemon = Java.loadClass("com.cobblemon.mod.common.Cobblemon")

NativeEvents.onEvent("net.neoforged.neoforge.event.entity.player.PlayerEvent$NameFormat", event => {
  if (!event.getEntity().level.isClientSide() && !event.getEntity().isFakePlayer()) {
    let dex = $Cobblemon.playerDataManager["getPokedexData(net.minecraft.server.level.ServerPlayer)"](event.getEntity())
    //console.log(dex)
    let value = dex.getGlobalCalculatedValue($CaughtCount)
    //console.log(value)
    let newComponent = Text.translatable("[%s] ", Text.blue(value)).append(event.displayname)
    event.setDisplayname(newComponent)		
  }
})