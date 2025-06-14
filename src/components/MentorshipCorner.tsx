
export function MentorshipCorner() {
  return (
    <div className="max-w-xl mx-auto mb-8 bg-white/90 rounded-lg shadow p-6 animate-fade-in">
      <h4 className="font-semibold mb-2 text-pink-700">Mentoria: Rotina estratégica</h4>
      <ul className="list-disc pl-6 text-sm text-gray-800 space-y-1">
        <li>Diagnóstico: <span className="font-semibold text-pink-500">Roda da Vida</span></li>
        <li>Metas SMART & checklist semanal</li>
        <li>Framework: priorização, time blocking, manutenção de hábitos</li>
        <li>Modelos e técnicas contra procrastinação e sobrecarga</li>
      </ul>
      <div className="mt-3 flex items-center gap-2">
        <a href="/mentoria" className="text-pink-600 hover:underline text-xs font-bold">Ver área completa</a>
        <span className="bg-pink-50 text-pink-700 rounded-full px-2 py-0.5 font-medium text-xs">Beta</span>
      </div>
    </div>
  );
}
