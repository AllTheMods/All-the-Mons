let $Villager = Java.loadClass("net.minecraft.world.entity.npc.Villager")
let $BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")
let $FireworkRocketEntity = Java.loadClass("net.minecraft.world.entity.projectile.FireworkRocketEntity")
let $LivingEntity = Java.loadClass("net.minecraft.world.entity.LivingEntity")
let $ParticleTypes = Java.loadClass("net.minecraft.core.particles.ParticleTypes")
let $SoundEvents = Java.loadClass("net.minecraft.sounds.SoundEvents")
let $SoundSource = Java.loadClass("net.minecraft.sounds.SoundSource")
let $EquipmentSlot = Java.loadClass("net.minecraft.world.entity.EquipmentSlot")
let $Attributes = Java.loadClass("net.minecraft.world.entity.ai.attributes.Attributes")

const BLAST_RADIUS = 4.0

// Altar pos -> Kurt's saved movement speed while frozen.
let frozenKurts = {}

const GATE_ADVANCEMENT = "allthemons:complete_regional_shiny_pika_star"
const KURT_PROFESSION = "allthemons:trader"
const KURT_NAME = "Kurt"

const PIKA_REGIONS = [
  "kantonian", "johtonian", "hoennian", "sinnohan", "unovan",
  "kalosian", "alolan", "galarian", "hisuian", "paldean"
]

const FIREWORK_SHAPES = ["small_ball", "large_ball", "star", "creeper", "burst"]
// red, orange, yellow, lime, green, aqua, blue, magenta, pink, white
const FIREWORK_COLORS = [16711680, 16753920, 16776960, 8388352, 65280, 65535, 255, 16711935, 16738740, 16777215]

let MELODY_INSTRUMENT = $SoundEvents.NOTE_BLOCK_HARP
let BASS_INSTRUMENT = $SoundEvents.NOTE_BLOCK_BASS
const THEME_UNIT_MS = 190
// Pokémon theme verse + chorus: [noteblock note 0-24, length in units], -1 = rest.
const POKEMON_THEME = [
  // Verse 1
  [15, 2], [15, 1], [15, 1], [15, 2], [15, 2], [13, 1], [10, 1], [6, 4], [-1, 2],
  [6, 2], [15, 2], [15, 2], [13, 1], [11, 1], [13, 4], [-1, 2],
  [11, 2], [16, 2], [16, 2], [16, 2], [15, 2], [13, 2], [11, 4], [-1, 2],
  [11, 2], [15, 2], [15, 2], [13, 2], [11, 2], [15, 4], [-1, 2],
  // Verse 2
  [15, 2], [15, 2], [15, 1], [15, 1], [15, 1], [13, 1], [10, 2], [6, 4], [-1, 2],
  [15, 2], [15, 2], [13, 2], [11, 2], [13, 4], [-1, 2],
  [16, 2], [16, 1], [16, 1], [16, 1], [16, 2], [15, 1], [13, 1], [11, 3], [-1, 2],
  [11, 2], [15, 1], [15, 1], [13, 2], [11, 1], [15, 3], [-1, 2],
  // Chorus
  [15, 1], [18, 1], [20, 3], [-1, 2],
  [15, 1], [15, 1], [18, 2], [20, 2], [20, 1], [18, 3], [-1, 2],
  [18, 2], [18, 2], [20, 2], [20, 1], [18, 3], [-1, 2],
  [18, 2], [20, 2], [22, 2], [23, 2], [22, 1], [20, 1], [18, 3], [-1, 2],
  [15, 1], [18, 1], [20, 3], [-1, 2],
  [20, 2], [20, 2], [18, 2], [15, 2], [11, 4], [-1, 2],
  [11, 2], [13, 2], [15, 2], [15, 2], [13, 2], [11, 1], [15, 3], [-1, 2],
  // Final
  [15, 1], [18, 1], [20, 3], [-1, 2],
  [15, 1], [15, 1], [18, 2], [20, 2], [20, 1], [18, 3], [-1, 2],
  [18, 2], [18, 2], [20, 2], [20, 1], [18, 3], [-1, 2],
  [20, 2], [20, 1], [22, 1], [23, 2], [22, 2], [20, 2], [18, 4], [-1, 2],
  [16, 2], [23, 2], [23, 2], [23, 2], [18, 2], [23, 2], [23, 4], [-1, 2],
  [23, 1], [23, 1], [23, 1], [22, 3], [-1, 2],
  [15, 2], [15, 2], [18, 2], [20, 2], [20, 4], [-1, 2],
  [15, 2], [15, 2], [18, 2], [20, 2], [23, 1], [20, 3], [-1, 2],
  [15, 1], [18, 1], [20, 3], [-1, 2]
]

// True if a Pikachu is on either shoulder.
function shoulderHasPikachu(player) {
  return isPikachuShoulderTag(player.getShoulderEntityLeft()) || isPikachuShoulderTag(player.getShoulderEntityRight())
}

function isPikachuShoulderTag(tag) {
  if (tag == null) return false
  let species = String(tag.getString("shoulder_species"))
  return species == "cobblemon:pikachu" || species == "pikachu" || species.endsWith(":pikachu")
}

// Freeze Kurt in place (movement speed 0).
function freezeKurt(level, altarPos, kurt) {
  let attr = kurt.getAttribute($Attributes.MOVEMENT_SPEED)
  if (attr == null) return
  frozenKurts[altarPos.toString()] = attr.getBaseValue()
  attr.setBaseValue(0.0)
  // Restore after 70s as a fallback (ritual runs ~50s).
  setTimeout(() => thawKurt(level, altarPos), 70000)
}

function thawKurt(level, altarPos) {
  let key = altarPos.toString()
  if (!(key in frozenKurts)) return
  let base = frozenKurts[key]
  delete frozenKurts[key]
  let kurt = findKurt(level, altarPos)
  if (kurt != null) {
    let attr = kurt.getAttribute($Attributes.MOVEMENT_SPEED)
    if (attr != null) attr.setBaseValue(base)
  }
}

// True if all four armor slots hold pkgbadges items.
function wearsFullPkgFashion(player) {
  let slots = [$EquipmentSlot.HEAD, $EquipmentSlot.CHEST, $EquipmentSlot.LEGS, $EquipmentSlot.FEET]
  for (let i = 0; i < slots.length; i++) {
    let stack = player.getItemBySlot(slots[i])
    if (stack == null || stack.isEmpty() || !String(stack.id).startsWith("pkgbadges:")) {
      return false
    }
  }
  return true
}

// Find Kurt near the altar.
function findKurt(level, altarPos) {
  let aabb = AABB.ofBlock(altarPos).inflate(6, 4, 6)
  let villagers = level.getEntitiesOfClass($Villager, aabb)
  for (let v of villagers) {
    if (!v.hasCustomName()) continue
    if (String(v.getCustomName().getString()) != KURT_NAME) continue
    let profKey = $BuiltInRegistries.VILLAGER_PROFESSION.getKey(v.getVillagerData().getProfession())
    if (profKey != null && String(profKey) == KURT_PROFESSION) {
      return v
    }
  }
  return null
}

// Which regions, and whether the Pokédex, are present in the display cases (read only).
function scanDisplayCases(event) {
  let regions = []
  let pokedex = false
  event.queryBlockPattern("pika_star_cases").forEach(offset => {
    let levelBlock = event.altar.level.getBlock(event.altar.blockPos.offset(offset))
    if (String(levelBlock.getBlock().id) != "cobblemon:display_case") return
    let be = levelBlock.getEntity()
    if (be == null) return
    if (!pokedex && be.hasAnyMatching(stack => stack.is("#cobblemon:pokedex"))) {
      pokedex = true
    }
    PIKA_REGIONS.forEach(region => {
      if (regions.indexOf(region) >= 0) return
      let has = be.hasAnyMatching(stack => {
        if (String(stack.id) != "allthemons:pika_star") return false
        let r = stack.get("allthemons:region")
        return r != null && String(r.serializedName) == region
      })
      if (has) regions.push(region)
    })
  })
  return { regions: regions, pokedex: pokedex }
}

function randomFireworkStack(rand) {
  let shape = FIREWORK_SHAPES[rand.nextInt(FIREWORK_SHAPES.length)]
  let count = 1 + rand.nextInt(3)
  let colors = []
  for (let i = 0; i < count; i++) {
    colors.push(FIREWORK_COLORS[rand.nextInt(FIREWORK_COLORS.length)])
  }
  return Item.of(`minecraft:firework_rocket[fireworks={flight_duration:1,explosions:[{shape:"${shape}",colors:[I;${colors.join(",")}],has_trail:true,has_twinkle:true}]}]`)
}

// A burst of fireworks at Kurt.
function kurtFireworks(level, kurt) {
  let rand = level.random
  let x = kurt.getX()
  let y = kurt.getY() + 1.0
  let z = kurt.getZ()
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      let rocket = new $FireworkRocketEntity(level, x + (rand.nextDouble() - 0.5), y, z + (rand.nextDouble() - 0.5), randomFireworkStack(rand))
      level.addFreshEntity(rocket)
    }, i * 500)
  }
}

function noteblockPitch(note) {
  return Math.pow(2.0, (note - 12) / 12.0)
}

// Play the Pokémon theme on note-block sounds from the given position. Longer notes also get a
// bass note two octaves down (same note value on the bass instrument).
function playPokemonTheme(level, x, y, z) {
  let t = 0
  POKEMON_THEME.forEach(pair => {
    let note = pair[0]
    if (note >= 0) {
      let pitch = noteblockPitch(note)
      setTimeout(() => level.playSound(null, x, y, z, MELODY_INSTRUMENT, $SoundSource.RECORDS, 3.0, pitch), t)
      if (pair[1] >= 2) {
        setTimeout(() => level.playSound(null, x, y, z, BASS_INSTRUMENT, $SoundSource.RECORDS, 3.0, pitch), t)
      }
    }
    t += pair[1] * THEME_UNIT_MS
  })
}

// Explosion particles + sound + outward knockback, no damage or block breaking.
function harmlessBlast(level, cx, cy, cz) {
  level.sendParticles($ParticleTypes.EXPLOSION_EMITTER, cx, cy, cz, 1, 0, 0, 0, 0)
  level.playSound(null, cx, cy, cz, $SoundEvents.GENERIC_EXPLODE, $SoundSource.BLOCKS, 4.0, 1.0)

  let aabb = AABB.of(cx - BLAST_RADIUS, cy - BLAST_RADIUS, cz - BLAST_RADIUS, cx + BLAST_RADIUS, cy + BLAST_RADIUS, cz + BLAST_RADIUS)
  level.getEntitiesOfClass($LivingEntity, aabb).forEach(e => {
    let dx = e.getX() - cx
    let dy = e.getEyeY() - cy
    let dz = e.getZ() - cz
    let dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
    if (dist <= 0 || dist > BLAST_RADIUS) return
    let strength = (1 - dist / BLAST_RADIUS) * 1.2
    e.setDeltaMovement(e.getDeltaMovement().add((dx / dist) * strength, (dy / dist) * strength + 0.4, (dz / dist) * strength))
    e.hurtMarked = true
  })
}

function startShinyPikaStar(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  assertRealPlayerContext(event)

  // Require a complete Pokédex.
  if (!event.player.isAdvancementDone(GATE_ADVANCEMENT)) {
    event.player.tell(Text.translatable("kubejs.atm.sr.pokedex_not_complete").red())
    event.cancel()
    return
  }

  // Require Kurt at the altar.
  let kurt = findKurt(event.level, event.pos)
  if (kurt == null) {
    event.player.tell(Text.translatable("kubejs.atm.sr.kurt_missing").red())
    event.cancel()
    return
  }

  // Require all ten regional Pika Stars and the Pokédex on display.
  let displayed = scanDisplayCases(event)
  let missing = PIKA_REGIONS.filter(region => displayed.regions.indexOf(region) < 0)
  if (missing.length > 0) {
    event.player.tell(Text.translatable("kubejs.atm.sr.missing_regional_pika_stars").red())
    event.cancel()
    return
  }
  if (!displayed.pokedex) {
    event.player.tell(Text.translatable("kubejs.atm.sr.missing_pokedex").red())
    event.cancel()
    return
  }

  // Require a Pikachu on the shoulder.
  if (!shoulderHasPikachu(event.player)) {
    event.player.tell(Text.translatable("kubejs.atm.sr.shiny_pika_star_no_pikachu").red())
    event.cancel()
    return
  }

  // Require a full set of Poké Fashion attire.
  if (!wearsFullPkgFashion(event.player)) {
    event.player.tell(Text.translatable("kubejs.atm.sr.shiny_pika_star_no_attire").red())
    event.cancel()
    return
  }

  // Freeze Kurt for the ritual.
  freezeKurt(event.level, event.pos, kurt)

  // Play the Pokémon theme.
  let songPos = event.pos.getCenter()
  playPokemonTheme(event.level, songPos.x(), songPos.y() + 1.0, songPos.z())
}

function completeShinyPikaStar(/** @type {import("com.almostreliable.summoningrituals.compat.kubejs.event.SummoningKubeEvent").$SummoningKubeEvent}*/ event) {
  // Kurt congratulates the player.
  event.player.tell(
    Text.of("<")
      .append(Text.translatable("kubejs.atm.sr.kurt_name").gold())
      .append("> ")
      .append(Text.translatable("kubejs.atm.sr.kurt_proud").white())
  )

  // Fireworks at Kurt.
  let kurt = findKurt(event.level, event.pos)
  if (kurt != null) {
    kurtFireworks(event.level, kurt)
  }

  // Knockback blast above the altar.
  let center = event.pos.getCenter()
  harmlessBlast(event.level, center.x(), center.y() + 1.0, center.z())

  // Restore Kurt's movement speed.
  thawKurt(event.level, event.pos)
}
