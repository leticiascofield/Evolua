export function AllContent() {
  return (
    <div className="bg-white/90 rounded-lg shadow p-6 max-w-xl w-full mx-auto mb-10 animate-fade-in">
      <h4 className="font-semibold text-lg mb-3 text-gray-900">O que gostaria de ver?</h4>

      {/* Novidades */}
      <div className="mb-6">
        <h5 className="font-semibold text-sm text-pink-700 mb-2">Novidades</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="#" className="block rounded-lg p-4 bg-pink-50 hover:bg-pink-100 transition">
            <div className="font-bold text-pink-600 mb-2">Como planejar semanas leves?</div>
            <div className="text-xs text-gray-700">Artigo • 4min</div>
          </a>
          <a href="#" className="block rounded-lg p-4 bg-violet-50 hover:bg-violet-100 transition">
            <div className="font-bold text-violet-600 mb-2">Vídeo: técnicas para manter foco</div>
            <div className="text-xs text-gray-700">Vídeo • 8min</div>
          </a>
          <a href="#" className="block rounded-lg p-4 bg-orange-50 hover:bg-orange-100 transition">
            <div className="font-bold text-orange-600 mb-2">Como dizer mais “não” na rotina</div>
            <div className="text-xs text-gray-700">Artigo • 5min</div>
          </a>
          <a href="#" className="block rounded-lg p-4 bg-rose-50 hover:bg-rose-100 transition">
            <div className="font-bold text-rose-600 mb-2">Mini-curso: Organização gentil</div>
            <div className="text-xs text-gray-700">Vídeo • 15min</div>
          </a>
        </div>
      </div>

      {/* Recomendados */}
      <div className="mb-6">
        <h5 className="font-semibold text-sm text-green-700 mb-2">Recomendados pra você</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="#" className="block rounded-lg p-4 bg-green-50 hover:bg-green-100 transition">
            <div className="font-bold text-green-600 mb-2">Podcast: Autocuidado na rotina</div>
            <div className="text-xs text-gray-700">Podcast • 12min</div>
          </a>
          <a href="#" className="block rounded-lg p-4 bg-yellow-50 hover:bg-yellow-100 transition">
            <div className="font-bold text-yellow-600 mb-2">Finanças pessoais sem stress</div>
            <div className="text-xs text-gray-700">Artigo • 3min</div>
          </a>
          <a href="#" className="block rounded-lg p-4 bg-lime-50 hover:bg-lime-100 transition">
            <div className="font-bold text-lime-600 mb-2">Checklist semanal para revisar sua vida</div>
            <div className="text-xs text-gray-700">PDF • 1 página</div>
          </a>
          <a href="#" className="block rounded-lg p-4 bg-teal-50 hover:bg-teal-100 transition">
            <div className="font-bold text-teal-600 mb-2">Guia prático: rotina de estudos</div>
            <div className="text-xs text-gray-700">Artigo • 6min</div>
          </a>
        </div>
      </div>

      {/* Em alta */}
      <div className="mb-6">
        <h5 className="font-semibold text-sm text-indigo-700 mb-2">Em alta</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="#" className="block rounded-lg p-4 bg-indigo-50 hover:bg-indigo-100 transition">
            <div className="font-bold text-indigo-600 mb-2">Técnicas de foco profundo (deep work)</div>
            <div className="text-xs text-gray-700">Vídeo • 10min</div>
          </a>
          <a href="#" className="block rounded-lg p-4 bg-red-50 hover:bg-red-100 transition">
            <div className="font-bold text-red-600 mb-2">Como lidar com sobrecarga mental</div>
            <div className="text-xs text-gray-700">Podcast • 9min</div>
          </a>
          <a href="#" className="block rounded-lg p-4 bg-cyan-50 hover:bg-cyan-100 transition">
            <div className="font-bold text-cyan-600 mb-2">Ritual noturno pra relaxar</div>
            <div className="text-xs text-gray-700">Vídeo • 6min</div>
          </a>
          <a href="#" className="block rounded-lg p-4 bg-sky-50 hover:bg-sky-100 transition">
            <div className="font-bold text-sky-600 mb-2">Como manter motivação durante a semana</div>
            <div className="text-xs text-gray-700">Podcast • 7min</div>
          </a>
        </div>
      </div>

      {/* Extras */}
      <div className="mb-4">
        <h5 className="font-semibold text-sm text-gray-700 mb-2">Extras</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="#" className="block rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition">
            <div className="font-bold text-gray-600 mb-2">Template de planejamento semanal</div>
            <div className="text-xs text-gray-700">Download • Canva</div>
          </a>
          <a href="#" className="block rounded-lg p-4 bg-blue-50 hover:bg-blue-100 transition">
            <div className="font-bold text-blue-600 mb-2">Desafio 7 dias de foco e bem-estar</div>
            <div className="text-xs text-gray-700">Desafio guiado • Comece hoje</div>
          </a>
        </div>
      </div>

      <div className="text-right mt-3">
        <a href="/conteudo" className="text-pink-600 hover:underline text-xs font-semibold">Ver mais</a>
      </div>
    </div>
  );
}
