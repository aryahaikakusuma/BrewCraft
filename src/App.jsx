import { useReducer, useCallback } from 'react'
import { reducer, initialState } from './data/reducer'
import { checkAllRules } from './data/rules'
import { generateName, generateDescription } from './data/naming'
import Welcome from './components/Welcome'
import NodeBase from './components/NodeBase'
import NodeOrigin from './components/NodeOrigin'
import NodeModifier from './components/NodeModifier'
import NodeTopping from './components/NodeTopping'
import NodeResult from './components/NodeResult'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleBase = useCallback((id) => {
    dispatch({ type: 'SET_BASE', payload: id })
  }, [])

  const handleOrigin = useCallback((id) => {
    dispatch({ type: 'SET_ORIGIN', payload: id })
  }, [])

  const handleToggleModifier = useCallback((id) => {
    dispatch({ type: 'TOGGLE_MODIFIER', payload: id })
  }, [])

  const handleToggleTopping = useCallback((id) => {
    dispatch({ type: 'TOGGLE_TOPPING', payload: id })
  }, [])

  const handleNextModifier = useCallback(() => {
    const { warnings, badges } = checkAllRules(state)
    dispatch({ type: 'SET_WARNINGS', payload: { warnings, badges } })
    dispatch({ type: 'NEXT_MODIFIER' })
  }, [state])

  const handleNextTopping = useCallback(() => {
    const { warnings, badges } = checkAllRules(state)
    dispatch({ type: 'SET_WARNINGS', payload: { warnings, badges } })
    dispatch({ type: 'NEXT_TOPPING' })
  }, [state])

  const handleBack = useCallback((step) => {
    dispatch({ type: 'BACK', payload: step })
  }, [])

  const handleReset = useCallback(() => {
    dispatch({ type: 'RESET' })
  }, [])

  const step = state.step

  return (
    <div className="kiosk-frame">
      {step === 'welcome' && <Welcome onStart={() => dispatch({ type: 'START' })} />}
      {step === 'base' && <NodeBase onSelect={handleBase} />}
      {step === 'origin' && <NodeOrigin onSelect={handleOrigin} onBack={() => handleBack('base')} />}
      {step === 'modifier' && (
        <NodeModifier
          selected={state.modifiers}
          onToggle={handleToggleModifier}
          onNext={handleNextModifier}
          onBack={() => handleBack('origin')}
          warning={null}
        />
      )}
      {step === 'topping' && (
        <NodeTopping
          selected={state.toppings}
          onToggle={handleToggleTopping}
          onNext={handleNextTopping}
          onBack={() => handleBack('modifier')}
          badges={state.badges}
        />
      )}
      {step === 'result' && (
        <NodeResult
          state={state}
          name={generateName(state)}
          description={generateDescription(state)}
          onReset={handleReset}
        />
      )}
    </div>
  )
}
