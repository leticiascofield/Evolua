
export function ContentHighlights() {
  return (
    <div className="max-w-xl mx-auto mb-8 bg-white/90 rounded-lg shadow p-6 animate-fade-in">
      <h4 className="font-semibold mb-2">O que há de novo essa semana?</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a href="#" className="block rounded-lg p-4 bg-pink-50 hover:bg-pink-100 transition">
          <div className="font-bold text-pink-600 mb-2">Como planejar semanas leves?</div>
          <div className="text-xs text-gray-700">Artigo • 4min</div>
        </a>
        <a href="#" className="block rounded-lg p-4 bg-violet-50 hover:bg-violet-100 transition">
          <div className="font-bold text-violet-600 mb-2">Vídeo: técnicas para manter foco</div>
          <div className="text-xs text-gray-700">Vídeo • 8min</div>
        </a>
        <a href="#" className="block rounded-lg p-4 bg-green-50 hover:bg-green-100 transition">
          <div className="font-bold text-green-600 mb-2">Podcast: Autocuidado na rotina</div>
          <div className="text-xs text-gray-700">Podcast • 12min</div>
        </a>
        <a href="#" className="block rounded-lg p-4 bg-yellow-50 hover:bg-yellow-100 transition">
          <div className="font-bold text-yellow-600 mb-2">Finanças pessoais sem stress</div>
          <div className="text-xs text-gray-700">Artigo • 3min</div>
        </a>
      </div>
      <div className="text-right mt-3">
        <a href="/conteudo" className="text-pink-600 hover:underline text-xs font-semibold">Ver mais</a>
      </div>
    </div>
  );
}
