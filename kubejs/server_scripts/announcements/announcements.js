let $TreeMap = Java.loadClass("java.util.TreeMap")
/** @type {import("org.apache.maven.artifact.versioning.DefaultArtifactVersion").$DefaultArtifactVersion$$Type} */
let $DefaultArtifactVersion = Java.loadClass("org.apache.maven.artifact.versioning.DefaultArtifactVersion")
/** @type {import("java.util.TreeMap").$TreeMap$$Type<(import("org.apache.maven.artifact.versioning.DefaultArtifactVersion").$DefaultArtifactVersion$$Original), (import("java.util.List").$List$$Type<(import("net.minecraft.network.chat.MutableComponent").$MutableComponent$$Original) >) >} */
let announcements = new $TreeMap()
/** @type {import("org.apache.maven.artifact.versioning.DefaultArtifactVersion").$DefaultArtifactVersion$$Original} */
let currentVersion = null
/** @type {import("java.util.List").$List<import("net.minecraft.network.chat.MutableComponent").$MutableComponent$$Original>} */
let permanentAnnouncements = Utils.newList()
// files related:
// kubejs/assets/atm/lang/en_us.json

// Add your announcements here
function initAnnouncements(){
  addAnnouncement("0.3.0-beta", Text.translate('kubejs.atm.ann.0_3_0_beta'))
  addAnnouncement("0.11.0-beta", Text.translate('kubejs.atm.ann.0_11_0_beta'))
  addAnnouncement("0.12.0-beta", Text.translate('kubejs.atm.ann.0_12_0_beta'))
  addAnnouncement("0.13.0-beta", Text.translate('kubejs.atm.ann.0_13_0_beta'))
  addAnnouncement("0.15.0-beta", Text.translate('kubejs.atm.ann.0_15_0_beta'))

  addPermanentAnnouncement(Text.of('').append(Text.translate('kubejs.atm.ann.beta_warning').red()))
  addPermanentAnnouncement(Text.translate('kubejs.atm.ann.for_issues_visit', Text.translate('kubejs.atm.ann.github_issues').green().clickOpenUrl("https://github.com/AllTheMods/All-the-Mons/issues").hover(Text.translatable("mco.notification.visitUrl.buttonText.default"))))
  addPermanentAnnouncement(Text.translate('kubejs.atm.ann.for_suggestions_visit', Text.translate('kubejs.atm.ann.discussions').green().clickOpenUrl("https://github.com/AllTheMods/All-the-Mons/discussions").hover(Text.translatable("mco.notification.visitUrl.buttonText.default"))))
  addPermanentAnnouncement(Text.translate('kubejs.atm.ann.for_support_visit', Text.translate('kubejs.atm.ann.discord_techsupport').green().clickOpenUrl("https://discord.gg/allthemods").hover(Text.translatable("mco.notification.visitUrl.buttonText.default"))))
  addPermanentAnnouncement(Text.translate('kubejs.atm.ann.check_progress_at', Text.translate('kubejs.atm.ann.tracker_spoilers').green().clickOpenUrl("https://github.com/AllTheMods/All-the-Mons/issues/37").hover(Text.translatable("mco.notification.visitUrl.buttonText.default"))))      

  // keep this at last line
  addAnnouncement(currentVersion.toString(), Text.translate('kubejs.atm.ann.click_for_changelog', Text.translate('kubejs.atm.ann.here').green().clickOpenUrl("https://github.com/AllTheMods/All-the-Mons/blob/main/CHANGELOG.md").hover(Text.translatable("mco.notification.visitUrl.buttonText.default"))))
}

ServerEvents.loaded(event => {
  if (!Platform.isLoaded("bcc")) return
  announcements.clear()
  permanentAnnouncements.clear()
  /** @type {import("dev.wuffs.bcc.BetterCompatibilityChecker").$BetterCompatibilityChecker$$Original} */
  let $BccInstance = Java.loadClass("dev.wuffs.bcc.BetterCompatibilityChecker")
  currentVersion = new $DefaultArtifactVersion($BccInstance.betterStatus.version())
  initAnnouncements()
})

function addAnnouncement(/** @type {string} */version, /** @type {import("net.minecraft.network.chat.MutableComponent").$MutableComponent$$Original} */ component) {
  announcements.computeIfAbsent(new $DefaultArtifactVersion(version), (key) => Utils.newList()).addLast(typeof component == "string" ? Text.of(component) : component)
}

function addPermanentAnnouncement(/** @type {import("net.minecraft.network.chat.MutableComponent").$MutableComponent$$Original} */ component) {
  permanentAnnouncements.addLast(typeof component == "string" ? Text.of(component) : component)
}

PlayerEvents.loggedIn(event => {
  if (currentVersion == null) return
  let currentDismissed = event.player.persistentData.getString("LastDismissedAnnouncementVersion")
  if (currentDismissed == null) {
    currentDismissed = new $DefaultArtifactVersion("0.0.0")
  } else {
    currentDismissed = new $DefaultArtifactVersion(currentDismissed)
  }
  let ableToDismiss = false
  let printHeader = true
  announcements.forEach((key, listComponents) => {
    if (currentDismissed.compareTo(key) < 0 && currentVersion.compareTo(key) >= 0) {
      ableToDismiss = true
      if (printHeader) {
        event.player.tell(Text.translate('kubejs.atm.ann.header_wrapper', Text.translate('kubejs.atm.ann.header_title').yellow().bold()).gold().bold())
        printHeader = false
      }
      for (let component of listComponents) {
        let message = Text.translate('kubejs.atm.ann.versioned_entry', Text.gold(key.toString()), component.yellow()).yellow()
        event.player.tell(message)
      }            
    }
  })
  
  permanentAnnouncements.forEach(component => {
      if (printHeader) {
        event.player.tell(Text.translate('kubejs.atm.ann.header_wrapper', Text.translate('kubejs.atm.ann.header_title').yellow().bold()).gold().bold())
        printHeader = false
      }
      let message = Text.translate('kubejs.atm.ann.entry', component.yellow()).yellow()
      event.player.tell(message)
  })

  if (ableToDismiss) {
    let message = Text.translate("announcements.atm.dismiss_up_to_version", Text.blue(currentVersion.toString()))
      .green()
      .hover(Text.translate("kubejs.atm.click_here"))
      .clickRunCommand("/dismiss_announcements")
        
    event.player.tell(message)
  }
})

ServerEvents.basicPublicCommand("dismiss_announcements", event => {
  let player = event.player
  if (player == null) {
    event.cancel(Text.translate('kubejs.atm.ann.error.player_not_found'))
  } else {
    let pData = player.getPersistentData()
    if (event.input == "clear") {
      pData.putString("LastDismissedAnnouncementVersion", "0.0.0")
      event.respond(Text.translate('kubejs.atm.ann.cleared_dismissed_version').yellow())
    } else {
      if (currentVersion == null) {
        event.cancel(Text.translate('kubejs.atm.ann.error.current_version_missing'))
      } else {
        pData.putString("LastDismissedAnnouncementVersion", currentVersion.toString())
        event.respond(Text.translate("announcements.atm.dismissed_up_to_version", currentVersion.toString()).yellow())
      }
    }
  }
})
