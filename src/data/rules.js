function hasAny(arr, items) {
  return items.some(i => arr.includes(i))
}

export function checkAcidityDairyRule(base, modifiers) {
  const dairyBases = ['milk', 'oatmilk']
  const citrusModifiers = ['fruit_citrus']
  if (dairyBases.includes(base) && hasAny(modifiers, citrusModifiers)) {
    return {
      trigger: true,
      message: 'Bahan asam tinggi dicampur susu hangat berisiko pecah tekstur.',
      suggestions: ['Ganti base ke Cold Brew Based', 'Ganti modifier ke Syrup: Caramel/Vanilla'],
    }
  }
  return { trigger: false }
}

export function checkBitternessRule(base, origin, toppings, modifiers) {
  if (origin === 'sumatra' && base === 'espresso' && toppings.includes('spice')) {
    if (!modifiers.includes('syrup_vanilla') && !toppings.includes('whipped')) {
      return {
        trigger: true,
        message: 'Kombinasi terlalu pahit & earthy untuk konsumen awam.',
        suggestions: ['Tambahkan 1 pump Syrup: Vanilla', 'Tambahkan Whipped Cream sebagai pelunak'],
      }
    }
    return {
      trigger: false,
      note: 'Rasa masuk klaster "Gahar/Bold"',
    }
  }
  return { trigger: false }
}

export function checkFruityRule(base, origin, modifiers) {
  if (origin === 'gayo' && base === 'coldbrew' && modifiers.includes('fruit_berry')) {
    return {
      trigger: true,
      badge: 'Barista Choice Pick',
      message: 'Paduan sempurna! Karakter floral Gayo berpadu dengan ekstraksi dingin dan buah segar.',
    }
  }
  return { trigger: false }
}

export function checkAllRules(state) {
  const warnings = []
  const badges = []

  const acidity = checkAcidityDairyRule(state.base, state.modifiers)
  if (acidity.trigger) warnings.push(acidity)

  const bitterness = checkBitternessRule(state.base, state.origin, state.toppings, state.modifiers)
  if (bitterness.trigger) warnings.push(bitterness)
  if (bitterness.note) badges.push(bitterness.note)

  const fruity = checkFruityRule(state.base, state.origin, state.modifiers)
  if (fruity.badge) badges.push(fruity.badge)

  return { warnings, badges }
}
