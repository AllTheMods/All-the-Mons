let $Tags = Java.loadClass("dev.latvian.mods.kubejs.util.Tags")

let machinesTag = $Tags.block("cobblemon:machines")
NativeEvents.onEvent("net.neoforged.neoforge.event.entity.player.PlayerEvent$BreakSpeed", event => {
  if (event.state["is(net.minecraft.tags.TagKey)"](machinesTag)) {
	  let natural = event.state.block?.Companion?.NATURAL
	  if (natural != null) {
	    event.state.getOptionalValue(natural).ifPresent(value => {if (value) event.setCanceled(true)})		  
	  }
  }
})