import { $ServerPlayer } from "net.minecraft.server.level.ServerPlayer"

let $RCTMod = Java.loadClass("com.gitlab.srcmc.rctmod.api.RCTMod")

PlayerEvents.loggedIn(event => {
    /** @type {$ServerPlayer} */
    let player = event.player
    let server = player.getServer()
    if (server == null) return

    let level = server.overworld()
    let trainerManager = $RCTMod.getInstance().getTrainerManager()

    let joeyMemory = trainerManager["getBattleMemory(net.minecraft.server.level.ServerLevel,java.lang.String)"](level, "team_allthemods_joeychin01")
    if (joeyMemory.getDefeatByCount("team_allthemods_joeychin01", player) > 0) return

    let bathsaltsMemory = trainerManager["getBattleMemory(net.minecraft.server.level.ServerLevel,java.lang.String)"](level, "team_allthemods_bathsalts")
    let bathsaltsDefeats = bathsaltsMemory.getDefeatByCount("team_allthemods_bathsalts", player)
    if (bathsaltsDefeats <= 0) return

    joeyMemory.setDefeatedBy("team_allthemods_joeychin01", player, bathsaltsDefeats)
    player.unlockAdvancement("rctmod:trainers/defeat_team_allthemods_joeychin01")
})
