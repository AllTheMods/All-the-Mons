import { $SimplePlayerKubeEvent } from "dev.latvian.mods.kubejs.player.SimplePlayerKubeEvent";
import { $CompoundTag } from "net.minecraft.nbt.CompoundTag";
import { $ListTag } from "net.minecraft.nbt.ListTag";

PlayerEvents.loggedIn(event => {
  if (event.player.getHealth().toString() == "NaN") event.player.setHealth(event.player.getMaxHealth())
  if (event.player.getAbsorptionAmount().toString() == "NaN") event.player.setAbsorptionAmount(0)
  syncBattleTowerShop(event)
})

function syncBattleTowerShop(/** @type {$SimplePlayerKubeEvent} */  event) {
  let btJsonConfig = JsonIO.readJson("config/cobblemon_battle_tower/bp_shop_items.json")
  if (btJsonConfig != null) {
    /** @type {$CompoundTag} */
    let syncData = NBT.compoundTag()
    /** @type {$ListTag} */
    let shopItems = NBT.listTag()
    syncData.put("shop_items", shopItems)
    let mapById = Utils.newMap()
    let loadDefaultItems = btJsonConfig.getAsJsonObject().get("load_default_items").getAsBoolean()
    if (loadDefaultItems) {
      let defaultItems = btJsonConfig.getAsJsonObject().get("_default_items").getAsJsonArray()
      for (let item of defaultItems) {
        let itemObj = item.getAsJsonObject()
        let itemId = itemObj.get("item_id")
        if (itemId != null) {
          /** @type {$CompoundTag} */
          let currentItem = NBT.compoundTag()
          currentItem.putString("item", itemId.getAsString())
          currentItem.putInt("count", itemObj.get("quantity").getAsInt())
          currentItem.putInt("cost", itemObj.get("bp_cost").getAsInt())
          mapById.put(itemObj.get("id").getAsString(), currentItem)
          //allthemods.add(itemId.getAsString(), [`This item is for sale at Holo Battle Tower. Each ${itemObj.get("quantity").getAsInt()} for ${itemObj.get("bp_cost").getAsInt()} Battle Points.`])
        }
      }
    }
    let customItems = btJsonConfig.getAsJsonObject().get("items").getAsJsonArray()
    for (let item of customItems) {
      let itemObj = item.getAsJsonObject()
      let itemId = itemObj.get("item_id")
      if (itemId != null) {
          let currentItem = NBT.compoundTag()
          currentItem.putString("item", itemId.getAsString())
          currentItem.putInt("count", itemObj.get("quantity").getAsInt())
          currentItem.putInt("cost", itemObj.get("bp_cost").getAsInt())
          mapById.put(itemObj.get("id").getAsString(), currentItem)
        //allthemods.add(itemId.getAsString(), [`This item is for sale at Holo Battle Tower. Each ${itemObj.get("quantity").getAsInt()} for ${itemObj.get("bp_cost").getAsInt()} Battle Points.`])
      }
    }

    mapById.values().forEach(value => {
      shopItems.addLast(value)
    })

    event.player.sendData("battle_tower_shop_items", syncData)
  }
} 