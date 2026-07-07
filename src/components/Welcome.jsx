export default function Welcome({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-5xl font-semibold tracking-tight text-charcoal mb-2">Brew Craft</h1>
      <p className="text-lg text-charcoal/70 mb-1">Modul Alkimia Kopi</p>
      <p className="text-sm text-charcoal/50 mb-12">Personalisasi Rasa Kiosk</p>
      <button
        onClick={onStart}
        className="bg-terracotta text-warm-cream font-bold px-10 py-4 rounded-lg text-lg cursor-pointer hover:brightness-110 active:brightness-90"
      >
        Racik Kopiku
      </button>
    </div>
  )
}
