export function MentorshipCorner() {
  return (
    <div className="max-w-xl mx-auto mb-8 bg-white/90 rounded-lg shadow p-6 animate-fade-in text-sm text-gray-800">
      <h4 className="font-playfair text-xl font-bold text-pink-700 mb-2">Mentoria</h4>
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
