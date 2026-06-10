let $FluidHandler = Java.loadClass("net.neoforged.neoforge.capabilities.Capabilities$FluidHandler")
let $FluidStack = Java.loadClass("net.neoforged.neoforge.fluids.FluidStack")
let $FluidAction = Java.loadClass("net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction")
let $MonUtil = Java.loadClass("net.allthemods.allthemons.util.MonUtil")

const DRAIN_SIG = "drain(net.neoforged.neoforge.fluids.FluidStack,net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction)"

function getFoundryFluidHandler(event) {
  for (let offset of event.getTransformedBlockPattern().keySet()) {
    let pos = event.pos.offset(offset)
    let handler = event.level.getCapability($FluidHandler.BLOCK, pos, null)
    if (handler != null) return handler
  }
  return null
}

function startMeltan(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  assertRealPlayerContext(event)

  let goldAmount = 0
  let steelAmount = 0
  const fluidHandler = getFoundryFluidHandler(event)
  if (fluidHandler != null) {
    for (let i = 0; i < fluidHandler.getTanks(); i++) {
      let stack = fluidHandler.getFluidInTank(i)
      let id = stack.getFluid().builtInRegistryHolder().key().location().toString()
      if (id === 'productivemetalworks:molten_steel') {
        steelAmount = stack.getAmount()
      } else if (id === 'productivemetalworks:molten_gold') {
        goldAmount = stack.getAmount()
      }
    }

    if (goldAmount < 1000) {
      event.player.tell(Text.translatable("kubejs.atm.sr.not_enough_molten_gold").red())
      event.cancel()
    }
    if (steelAmount < 2000) {
      event.player.tell(Text.translatable("kubejs.atm.sr.not_enough_molten_steel").red())
      event.cancel()
    }
  } else {
    event.player.tell(Text.translatable("kubejs.atm.sr.invalid_foundry").red())
    event.cancel()
  }
}

function completeMeltan(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  const fluidHandler = getFoundryFluidHandler(event)
  if (fluidHandler != null) {
    let steelFluid = null
    let goldFluid = null
    for (let i = 0; i < fluidHandler.getTanks(); i++) {
      let stack = fluidHandler.getFluidInTank(i)
      let id = stack.getFluid().builtInRegistryHolder().key().location().toString()
      if (id === 'productivemetalworks:molten_steel') {
        steelFluid = stack.getFluid()
      } else if (id === 'productivemetalworks:molten_gold') {
        goldFluid = stack.getFluid()
      }
    }

    if (steelFluid != null) {
      fluidHandler[DRAIN_SIG](new $FluidStack(steelFluid, 2000), $FluidAction.EXECUTE)
    }
    if (goldFluid != null) {
      fluidHandler[DRAIN_SIG](new $FluidStack(goldFluid, 1000), $FluidAction.EXECUTE)
    }
  }

  $MonUtil.spawnPokemon(event.level, event.pos.above(), "meltan", event.level.random.nextInt(10, 25))
}
