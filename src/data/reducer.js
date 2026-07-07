export const STEPS = [
  'welcome', 'base', 'origin', 'modifier', 'topping', 'result',
]

export const initialState = {
  step: 'welcome',
  base: null,
  origin: null,
  modifiers: [],
  toppings: [],
  warnings: [],
  badges: [],
}

export function reducer(state, action) {
  switch (action.type) {
    case 'START':
      return { ...state, step: 'base' }
    case 'SET_BASE':
      return { ...state, base: action.payload, step: 'origin' }
    case 'SET_ORIGIN':
      return { ...state, origin: action.payload, step: 'modifier' }
    case 'TOGGLE_MODIFIER': {
      const modifiers = state.modifiers.includes(action.payload)
        ? state.modifiers.filter(m => m !== action.payload)
        : [...state.modifiers, action.payload]
      return { ...state, modifiers }
    }
    case 'TOGGLE_TOPPING': {
      const toppings = state.toppings.includes(action.payload)
        ? state.toppings.filter(t => t !== action.payload)
        : [...state.toppings, action.payload]
      return { ...state, toppings }
    }
    case 'SET_WARNINGS':
      return { ...state, warnings: action.payload.warnings, badges: action.payload.badges }
    case 'NEXT_MODIFIER':
      return { ...state, step: 'topping' }
    case 'NEXT_TOPPING':
      return { ...state, step: 'result' }
    case 'BACK':
      return { ...state, step: action.payload }
    case 'RESET':
      return { ...initialState }
    default:
      return state
  }
}
