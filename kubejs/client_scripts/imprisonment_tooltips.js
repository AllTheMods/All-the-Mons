ItemEvents.modifyTooltips(event => {
    event.modify('industrialforegoing:mob_imprisonment_tool', tooltip => {
        tooltip.dynamic('cobblemon_species')
    })
})

ItemEvents.dynamicTooltips('cobblemon_species', event => {
    var raw = event.item.components.toString()
    if (!raw) return

    var speciesMatch = raw.match(/Species:"([^"]+)"/)
    if (!speciesMatch) return

    var nameOnly = speciesMatch[1].includes(':') ? speciesMatch[1].split(':')[1] : speciesMatch[1]
    var formatted = nameOnly.charAt(0).toUpperCase() + nameOnly.slice(1)

    var shinyMatch = raw.match(/Shiny:(\w+)/)
    var isShiny = shinyMatch && shinyMatch[1] === '1b'

    event.add(Text.of('§6Captured: §f' + formatted))
    if (isShiny) event.add(Text.of('§e★ SHINY ★'))
})
