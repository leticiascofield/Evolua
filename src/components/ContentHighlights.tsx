import { Lightbulb } from "lucide-react";

export function ContentHighlights() {
  return (
    <div className="max-w-xl mx-auto mb-8 bg-white/90 rounded-lg shadow p-6 animate-fade-in text-sm text-gray-800">
      <h3 className="font-semibold text-lg text-gray-900 flex items-center gap-2 mb-3">
        <Lightbulb className="w-5 h-5 text-pink-700" />
        Novidades
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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
      <a href="/conteudo" className="text-pink-600 hover:underline text-xs font-semibold">Ver mais</a>
    </div>
  );
}
