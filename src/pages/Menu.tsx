
export default function Menu() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 py-10 px-4">
      <div className="max-w-5xl mx-auto rounded-lg bg-white/90 shadow p-8">
        <h2 className="text-xl text-pink-700 font-bold mb-2">Configurações</h2>
        <ul className="space-y-3 mt-6 text-sm">
          <li><a href="/perfil" className="text-pink-700 hover:underline">Perfil & Progresso</a></li>
          <li><a href="/habitos" className="text-pink-700 hover:underline">Hábitos</a></li>
          <li><a href="/mentoria" className="text-pink-700 hover:underline">Área de Mentoria</a></li>
          <li><a href="/agenda" className="text-pink-700 hover:underline">Agenda Inteligente</a></li>
          <li><span className="text-gray-400">Notificações (em breve)</span></li>
        </ul>
        <div className="mt-8 text-xs text-gray-400">MVP focado na experiência – mais opções em breve. 💖</div>
      </div>
    </div>
  );
}
