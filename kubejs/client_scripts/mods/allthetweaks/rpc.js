// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - All The Mons.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

let $Minecraft = Java.loadClass("net.minecraft.client.Minecraft")
let $I18n = Java.loadClass("net.minecraft.client.resources.language.I18n")
let $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")
let $ATTRpc = Java.loadClass("com.thevortex.allthetweaks.api.ATTRpc")
let $CobblemonClient = Java.loadClass("com.cobblemon.mod.common.client.CobblemonClient")
let $CaughtCount = Java.loadClass("com.cobblemon.mod.common.api.pokedex.CaughtCount")
let $Dexes = Java.loadClass("com.cobblemon.mod.common.api.pokedex.Dexes")
let $ClientQuestFile = Java.loadClass("dev.ftb.mods.ftbquests.client.ClientQuestFile")

let NATIONAL_DEX = $ResourceLocation.parse("cobblemon:national")
let SHINY_STAR_QUEST = "7A0693A3016549F6"
let SHINY_STAR_IMAGE = "https://raw.githubusercontent.com/AllTheMods/All-the-Mons/main/kubejs/assets/allthemons/textures/rpc/shiny_pika_star.png"

let ticks = 0

function dimensionName(level) {
  let id = String(level.dimension)
  let key = "dimension." + id.replace(":", ".")
  if ($I18n.exists(key)) return $I18n.get(key)

  return id
    .split(":")
    .pop()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

function shinyStarObtained() {
  if (!$ClientQuestFile.exists()) return false

  let file = $ClientQuestFile.getInstance()
  let data = file.selfTeamData
  if (!data) return false

  let quest = file.getQuest(file.getID(SHINY_STAR_QUEST))
  return quest != null && data.isCompleted(quest)
}

function pushPokedexProgress() {
  let dex = $Dexes.INSTANCE.getDexEntryMap().get(NATIONAL_DEX)
  let pokedex = $CobblemonClient.INSTANCE.getClientPokedexData()
  if (!dex || !pokedex) return

  let total = dex.getEntries().size()
  let caught = Number(pokedex.getDexCalculatedValue(NATIONAL_DEX, $CaughtCount.INSTANCE))

  if (total > 0 && caught > 0) {
    $ATTRpc.setState("Pokédex")
    $ATTRpc.setProgress(caught, total)
  } else {
    $ATTRpc.clearState()
    $ATTRpc.clearProgress()
  }
}

ClientEvents.tick(() => {
  ticks++
  if (ticks < 40) return
  ticks = 0

  let level = $Minecraft.getInstance().level
  if (!level) return

  try {
    $ATTRpc.setDetails("In " + dimensionName(level))
    pushPokedexProgress()
    $ATTRpc.setSmallImage(shinyStarObtained() ? SHINY_STAR_IMAGE : "")
  } catch (error) {
    console.error(`[rpc] presence update failed: ${error}`)
  }
})
