
import { Heart, CalendarMinus } from "lucide-react";
export function MenstrualWidget() {
  return (
    <div className="max-w-xl mx-auto mb-8 bg-white/90 rounded-lg shadow p-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-3">
        <CalendarMinus className="w-5 h-5 text-pink-400" />
        <h4 className="font-semibold text-gray-900">Ciclo menstrual & Sexual</h4>
      </div>
      <div className="flex items-center gap-6 justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-pink-300 w-3 h-3 inline-block"></span>
            <span className="text-xs text-pink-500">Dia do ciclo: 12</span>
          </div>
        </div>
        <div>
          <Heart className="w-5 h-5 inline text-rose-400 mr-1" />
          <span className="text-xs text-rose-700">Última atividade: 3 dias</span>
        </div>
      </div>
      <div className="mt-4 text-xs text-gray-500">Visualize seu ciclo e atividades diretamente na agenda!</div>
    </div>
  );
}
