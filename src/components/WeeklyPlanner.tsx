import { CalendarDays } from "lucide-react";

export function WeeklyPlanner() {
  return (
    <div className="max-w-xl mx-auto mb-8 bg-white/90 rounded-lg shadow p-6 animate-fade-in text-sm text-gray-800">
      <div className="flex items-center gap-2 mb-3">
        <CalendarDays className="w-5 h-5 text-pink-700" />
        <h3 className="font-semibold text-lg text-gray-900">Planejamento semanal</h3>
      </div>
      <div className="space-y-2">
        <div className="bg-pink-50/80 rounded px-4 py-2 flex items-center justify-between">
          <span className="font-medium">Estágio</span>
          <span className="text-gray-600 text-xs">12h - 16h</span>
        </div>
        <div className="bg-sky-50/80 rounded px-4 py-2 flex items-center justify-between">
          <span className="font-medium">Faculdade</span>
          <span className="text-gray-600 text-xs">18h - 22h</span>
        </div>
        <div className="bg-green-50/80 rounded px-4 py-2 flex items-center justify-between">
          <span className="font-medium">Autocuidado</span>
          <span className="text-gray-600 text-xs">21h</span>
        </div>
      </div>
      <div className="mt-4 text-xs text-gray-500">
        Anote lembretes para a semana! <span className="ml-2">📝</span>
      </div>
    </div>
  );
}
