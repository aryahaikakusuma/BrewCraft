import { MODIFIERS } from '../data/options'
import ProgressBar from './ProgressBar'

export default function NodeModifier({ selected, onToggle, onNext, onBack, warning }) {
  return (
    <div className="flex flex-col min-h-0 flex-1 p-6">
      <ProgressBar currentStep="modifier" />
      <button onClick={onBack} className="text-terracotta text-sm font-medium mb-2 self-start cursor-pointer">
        ← Kembali
      </button>
      <h2 className="text-terracotta font-medium text-xl mb-1">Node 3</h2>
      <h1 className="text-3xl font-semibold tracking-tight text-charcoal mb-2">Pilih Modifier</h1>
      <p className="text-sm text-charcoal/50 mb-4">Flavor Harmonization Engine (bisa pilih lebih dari satu)</p>

      {warning && (
        <div className="bg-warm-cream border border-terracotta rounded-lg p-4 mb-4">
          <p className="text-terracotta font-medium text-sm">{warning.message}</p>
          {warning.suggestions && (
            <ul className="mt-2 text-sm text-charcoal/70 list-disc list-inside">
              {warning.suggestions.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 flex-1">
        {MODIFIERS.map(m => {
          const active = selected.includes(m.id)
          return (
            <button
              key={m.id}
              onClick={() => onToggle(m.id)}
              className={`rounded-lg p-4 text-left cursor-pointer active:brightness-95 transition-all
                ${active
                  ? 'bg-warm-cream border-2 border-terracotta'
                  : 'bg-clay border-2 border-transparent hover:bg-warm-cream hover:border-terracotta'
                }`}
            >
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-charcoal text-sm">{m.label}</h3>
                {active && <span className="text-terracotta font-bold text-sm">✓</span>}
              </div>
              <p className="text-xs text-charcoal/50 mt-1">{m.desc}</p>
            </button>
          )
        })}
      </div>

      <button
        onClick={onNext}
        disabled={selected.length === 0}
        className="mt-5 bg-terracotta text-warm-cream font-bold py-3.5 rounded-lg text-base cursor-pointer
          disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110 active:brightness-90"
      >
        Lanjut ({selected.length} dipilih)
      </button>
    </div>
  )
}
