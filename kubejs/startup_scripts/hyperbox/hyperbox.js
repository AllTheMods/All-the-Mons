NativeEvents.onEvent("net.neoforged.neoforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent", event => {
    if (event.to.location().getNamespace().equals("hyperbox")){
        event.entity.tell(Text.translate('kubejs.atm.hyper.removal_warning'))
        if (Platform.clientEnvironment) {
            Client["submit(java.lang.Runnable)"](() => {
                Client.gui.setTitle(Text.translate('kubejs.atm.hyper.title_fmt', Text.translate('kubejs.atm.hyper.title').blue()))
                Client.gui.setSubtitle(Text.translate('kubejs.atm.hyper.subtitle_fmt', Text.translate('kubejs.atm.hyper.subtitle_mod').blue()))
            })
        }
    }
})
