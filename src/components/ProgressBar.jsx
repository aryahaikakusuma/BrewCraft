import { STEPS } from '../data/options'

export default function ProgressBar({ currentStep }) {
  const stepIndex = STEPS.findIndex(s => s.id === currentStep)
  const total = STEPS.length - 1

  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {STEPS.slice(0, -1).map((step, i) => {
        const done = i < stepIndex
        const active = i === stepIndex
        return (
          <div key={step.id} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                ${done ? 'bg-terracotta text-warm-cream' : ''}
                ${active ? 'bg-terracotta text-warm-cream ring-2 ring-terracotta/30' : ''}
                ${!done && !active ? 'bg-clay text-charcoal/40' : ''}
              `}
            >
              {done ? '✓' : i + 1}
            </div>
            {i < total - 1 && (
              <div className={`w-8 h-0.5 ${i < stepIndex ? 'bg-terracotta' : 'bg-clay'}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}
