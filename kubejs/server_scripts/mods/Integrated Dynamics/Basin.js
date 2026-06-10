// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  function basin( /** @type {$ItemStack_} */ output, /** @type {$FluidStack_} */ input, /** @type {number} */ duration) {
    let fluidStack = Fluid.of(input)
    let itemStack = Item.of(output)
    allthemods.custom(
      {
        "type": "integrateddynamics:drying_basin",
        "input_fluid": {
          "id": fluidStack.id,
          "amount": fluidStack.amount
        },
        "duration": duration || 300,
        "output_item": {
          "id": itemStack.id,
          "count": itemStack.count
        }
      }
    )
  }

  function mechanicalBasin( /** @type {$ItemStack_} */ output, /** @type {$FluidStack_} */ input, /** @type {number} */ duration) {
    let fluidStack = Fluid.of(input)
    let itemStack = Item.of(output)
    allthemods.custom(
      {
        "type": "integrateddynamics:mechanical_drying_basin",
        "input_fluid": {
          "id": fluidStack.id,
          "amount": fluidStack.amount
        },
        "duration": duration || 30,
        "output_item": {
          "id": itemStack.id,
          "count": itemStack.count
        }
      }
    )
  }
 
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.