const PREFIX = {
  sumatra: ['Gahar', 'Jiwa', 'Semesta'],
  gayo: ['Senja', 'Flora', 'Riang'],
  toraja: ['Rempah', 'Mistis', 'Mulia'],
  coldbrew: ['Beku', 'Teduh', 'Senyap'],
}

const CORE = {
  sumatra: ['Eliksir', 'Mantra'],
  gayo: ['Sulingan', 'Ramuan'],
  toraja: ['Artefak', 'Serum'],
  coldbrew: ['Kristal', 'Aliran'],
  espresso: ['Eliksir', 'Mantra'],
  seasalt: ['Puncak', 'Mahkota'],
  choco: ['Karunia', 'Nebula'],
}

const SUFFIX = {
  sumatra: ['Hitam', 'Pekat', 'Jagad'],
  gayo: ['Molekul', 'Tropis', 'Kasturi'],
  toraja: ['Khatulistiwa', 'Karat'],
  coldbrew: ['Lab', 'Fajar', 'Esensi'],
  seasalt: ['Swara', 'Segara'],
  choco: ['Pekat', 'Arang'],
  fruit_berry: ['Tropis', 'Molekul', 'Kasturi'],
  fruit_citrus: ['Fajar', 'Esensi', 'Segara'],
  syrup_caramel: ['Pekat', 'Jagad', 'Arang'],
  syrup_vanilla: ['Molekul', 'Esensi', 'Kasturi'],
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function generateName(state) {
  const word1 = pick(PREFIX[state.origin] || PREFIX.sumatra)
  const word2 = pick(CORE[state.base] || CORE.espresso)

  const suffixPool = state.modifiers.length > 0
    ? SUFFIX[state.modifiers[0]] || SUFFIX.sumatra
    : state.toppings.length > 0
      ? SUFFIX[state.toppings[0]] || SUFFIX.sumatra
      : SUFFIX.sumatra
  const word3 = pick(suffixPool)
  return `${word1} ${word2} ${word3}`
}

export function generateDescription(state) {
  const baseFlavor = {
    espresso: 'ekstraksi espresso',
    coldbrew: 'sulingan kopi dingin',
    milk: 'sajian susu creamy',
    oatmilk: 'sajian oat nabati',
  }
  const originFlavor = {
    sumatra: 'Sumatra pekat',
    gayo: 'Gayo berkarakter buah segar',
    toraja: 'Toraja rempah khas',
  }
  const modifierFlavor = {
    syrup_caramel: 'dengan sentuhan karamel manis',
    syrup_vanilla: 'dengan aroma vanilla lembut',
    fruit_citrus: 'dengan cita rasa citrus cerah',
    fruit_berry: 'dengan rasa buah segar',
  }

  const modDesc = state.modifiers.map(m => modifierFlavor[m]).filter(Boolean).join(', ')
  return `${baseFlavor[state.base] || 'sajian'} ${originFlavor[state.origin] || 'pilihan'} ${modDesc}`
}
