// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods =>{

    const dyenamicdyes = [
		"honey",
		"mint",
		"lavender",
		"navy",
		"bubblegum",
		"amber",
		"conifer",
		"icy_blue",
		"ultramarine",
		"maroon",
		"wine",
		"rose",
		"fluorescent",
		"spring_green",
		"peach",
		"cherenkov",
		"aquamarine",
		"persimmon"
	]
	dyenamicdyes.forEach((name) => {
		let material = `dyenamics:${name}_dye`
		
		allthemods.shapeless(Item.of(material, 3), [`occultism:otherflower`, material]).id(`allthemods:crafting/otherflower_to_${name}_dye`)
	})
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.