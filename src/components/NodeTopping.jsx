import { TOPPINGS } from '../data/options'
import ProgressBar from './ProgressBar'

export default function NodeTopping({ selected, onToggle, onNext, onBack, badges }) {
  return (
    <div className="flex flex-col min-h-0 flex-1 p-6">
      <ProgressBar currentStep="topping" />
      <button onClick={onBack} className="text-terracotta text-sm font-medium mb-2 self-start cursor-pointer">
        ← Kembali
      </button>
      <h2 className="text-terracotta font-medium text-xl mb-1">Node 4</h2>
      <h1 className="text-3xl font-semibold tracking-tight text-charcoal mb-2">Pilih Topping</h1>
      <p className="text-sm text-charcoal/50 mb-4">Final Texture & Sweetness Adjustment (bisa pilih lebih dari satu)</p>

      {badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {badges.map((b, i) => (
            <span key={i} className="bg-terracotta/10 text-terracotta text-xs font-semibold px-3 py-1 rounded-full">
              {b}
            </span>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 flex-1">
        {TOPPINGS.map(t => {
          const active = selected.includes(t.id)
          return (
            <button
              key={t.id}
              onClick={() => onToggle(t.id)}
              className={`rounded-lg p-4 text-left cursor-pointer active:brightness-95 transition-all
                ${active
                  ? 'bg-warm-cream border-2 border-terracotta'
                  : 'bg-clay border-2 border-transparent hover:bg-warm-cream hover:border-terracotta'
                }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xl block mb-1">{t.icon}</span>
                  <h3 className="font-semibold text-charcoal text-sm">{t.label}</h3>
                </div>
                {active && <span className="text-terracotta font-bold text-sm">✓</span>}
              </div>
              <p className="text-xs text-charcoal/50 mt-1">{t.desc}</p>
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
        Lihat Racikan ({selected.length} dipilih)
      </button>
    </div>
  )
}
