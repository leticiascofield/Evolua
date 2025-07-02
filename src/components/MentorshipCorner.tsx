import { GraduationCap } from "lucide-react";

export function MentorshipCorner() {
  return (
    <div className="max-w-xl mx-auto mb-8 bg-white/90 rounded-lg shadow p-6 animate-fade-in text-sm text-gray-800">
      <div className="flex items-center gap-2 mb-3">
        <GraduationCap className="w-5 h-5 text-pink-700" />
        <h3 className="font-semibold text-lg text-gray-900">Mentoria</h3>
      </div>
      <p className="text-gray-700 mb-3">
        Descubra como transformar o caos da sua rotina em um plano estratégico com metas claras e alinhadas ao seu propósito.
      </p>
      <div className="mt-3 flex items-center gap-2">
        <a href="/mentoria" className="text-pink-600 hover:underline text-xs font-bold">Ver área completa</a>
        <span className="bg-pink-100 text-pink-700 rounded-full px-2 py-0.5 font-medium text-xs">Beta</span>
      </div>
    </div>
  );
}
