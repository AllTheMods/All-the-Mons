let $Registries = Java.loadClass("net.minecraft.core.registries.Registries")

NativeEvents.onEvent("LOWEST", "net.neoforged.neoforge.event.server.ServerAboutToStartEvent", event => {
  let templatePoolRegistry = event.getServer().registryAccess().registryOrThrow($Registries.TEMPLATE_POOL);
  [
    ID.mc("village/plains/houses"),
    ID.mc("village/desert/houses"),
    ID.mc("village/savanna/houses"),
    ID.mc("village/snowy/houses"),
    ID.mc("village/taiga/houses")
  ].forEach(id => {
    let center = templatePoolRegistry.get(id)
    if (center != null) {
      let it = center.elements.iterator()
      while (it.hasNext()) {
        let value = it.next()
        if (value.toString().contains("pokecenter")) {
          console.log(`Removing ${value} from template pool`)
          it.remove()
        }
      }
    }	
  })
})