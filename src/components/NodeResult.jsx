import { BASES, ORIGINS, MODIFIERS, TOPPINGS } from '../data/options'

export default function NodeResult({ state, name, description, onReset }) {
  const findLabel = (arr, id) => arr.find(x => x.id === id)?.label || id
  const findLabels = (arr, ids) => ids.map(id => findLabel(arr, id)).join(', ')

  return (
    <div className="flex flex-col min-h-0 flex-1 p-6">

      <div className="text-center mb-6">
        <h2 className="text-terracotta font-medium text-lg mb-1">Racikan Eksklusif</h2>
        <h1 className="text-3xl font-semibold tracking-tight text-charcoal mb-2">{name}</h1>
        <p className="text-xs text-charcoal/60 italic">{description}</p>
      </div>

      <div className="bg-clay rounded-xl p-5 mb-5 text-sm">
        <h3 className="font-semibold text-charcoal mb-3">Barista Ticket</h3>
        <div className="space-y-1.5 text-charcoal/80">
          <p><span className="font-medium">Base:</span> {findLabel(BASES, state.base)}</p>
          <p><span className="font-medium">Origin:</span> {findLabel(ORIGINS, state.origin)}</p>
          {state.modifiers.length > 0 && (
            <p><span className="font-medium">Modifier:</span> {findLabels(MODIFIERS, state.modifiers)}</p>
          )}
          {state.toppings.length > 0 && (
            <p><span className="font-medium">Topping:</span> {findLabels(TOPPINGS, state.toppings)}</p>
          )}
        </div>
        <hr className="border-charcoal/10 my-3" />
        <div className="text-xs text-charcoal/60 space-y-1">
          <p className="font-semibold text-charcoal text-sm mb-2">Instruksi Perakitan:</p>
          <p>• Ambil gelas saji 12oz</p>
          <p>• Tuang base sesuai takaran baku</p>
          <p>• Ekstraksi 1 shot ({findLabel(ORIGINS, state.origin)})</p>
          <p>• Tambahkan {state.modifiers.length + state.toppings.length} layer racikan</p>
          <p className="font-medium text-charcoal mt-3 pt-3 border-t border-charcoal/10">
            Label: "{name} — Racikan Rahasia Milik [Nama Pelanggan]"
          </p>
        </div>
      </div>

      {state.warnings.length > 0 && (
        <div className="border border-terracotta rounded-lg p-4 mb-5">
          <p className="text-terracotta font-semibold text-sm mb-2">Sensory Note</p>
          {state.warnings.map((w, i) => (
            <p key={i} className="text-sm text-charcoal/70">{w.message}</p>
          ))}
        </div>
      )}

      <div className="flex gap-3 mt-auto">
        <button
          onClick={onReset}
          className="flex-1 bg-clay text-charcoal font-semibold py-3 rounded-lg cursor-pointer hover:brightness-95 active:brightness-90"
        >
          Racik Ulang
        </button>
        <button
          className="flex-1 bg-terracotta text-warm-cream font-bold py-3 rounded-lg cursor-pointer hover:brightness-110 active:brightness-90"
        >
          Simpan Racikan
        </button>
      </div>
    </div>
  )
}
