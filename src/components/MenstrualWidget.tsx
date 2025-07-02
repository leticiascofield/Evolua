import { Heart, Droplets } from "lucide-react";

export function MenstrualWidget() {
  return (
    <div className="max-w-xl mx-auto mb-8 bg-white/90 rounded-lg shadow p-6 animate-fade-in text-sm text-gray-800">
      <h3 className="font-semibold text-lg text-gray-900 flex items-center gap-2 mb-3">
        <Droplets className="w-5 h-5 text-pink-700" />
        Ciclo menstrual e sexual
      </h3>
      <div className="flex items-center gap-6 justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-pink-300 w-3 h-3 inline-block"></span>
          <span className="text-xs text-pink-500">Dia do ciclo: 12</span>
        </div>
        <div className="flex items-center gap-1">
          <Heart className="w-4 h-4 text-rose-400" />
          <span className="text-xs text-rose-700">Última atividade: 3 dias</span>
        </div>
      </div>
      <div className="text-xs text-gray-500">
        Visualize seu ciclo e atividades diretamente na agenda!
      </div>
    </div>
  );
}
