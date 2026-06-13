function startMythicalPechaBerry(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  let level = event.level

  for (let offset of event.getTransformedBlockPattern().keySet()) {
    let pos = event.pos.offset(offset)
    let state = level.getBlockState(pos)
    if (String(state.getBlock().id) === "cobblemon:pecha_berry") {
      let reset = setBlockStateIntProperty(state, "age", 3)
      if (reset != null) {
        level.setBlock(pos, reset, 3)
        let be = level.getBlockEntity(pos)
        if (be != null) {
          be.resetGrowTimers(pos, reset)
        }
      }
    }
  }
}

function setBlockStateIntProperty(blockState, propertyName, value) {
  for (let prop of blockState.getProperties()) {
    if (prop.getName().equals(propertyName)) {
      let parsed = prop.getValue(String(value))
      if (parsed.isPresent()) {
        return blockState.setValue(prop, parsed.get())
      }
    }
  }
  return null
}
