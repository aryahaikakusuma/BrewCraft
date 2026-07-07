import { ORIGINS } from '../data/options'
import ProgressBar from './ProgressBar'

export default function NodeOrigin({ onSelect, onBack }) {
  return (
    <div className="flex flex-col min-h-0 flex-1 p-6">
      <ProgressBar currentStep="origin" />
      <button onClick={onBack} className="text-terracotta text-sm font-medium mb-2 self-start cursor-pointer">
        ← Kembali
      </button>
      <h2 className="text-terracotta font-medium text-xl mb-1">Node 2</h2>
      <h1 className="text-3xl font-semibold tracking-tight text-charcoal mb-6">Pilih Origin Kopi</h1>
      <div className="grid grid-cols-3 gap-3 flex-1">
        {ORIGINS.map(o => (
          <button
            key={o.id}
            onClick={() => onSelect(o.id)}
            className="bg-clay hover:bg-warm-cream hover:border-terracotta hover:border-2 border-2 border-transparent rounded-lg p-5 text-center cursor-pointer active:brightness-95 transition-all flex flex-col items-center justify-center"
          >
            <span className="text-3xl mb-2">{o.icon}</span>
            <h3 className="font-semibold text-charcoal text-sm">{o.label}</h3>
            <p className="text-xs text-charcoal/50 mt-1">{o.desc}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
