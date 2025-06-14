
export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-10 px-4">
      <div className="max-w-2xl mx-auto rounded bg-white/90 p-8 shadow">
        <h2 className="font-playfair text-xl text-pink-700 font-bold mb-2">Perfil & Progresso</h2>
        <div className="flex flex-col gap-4 mb-8">
          <div>
            <div className="text-xs text-gray-400 mb-1">Nome:</div>
            <div className="font-bold">Usuária</div>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-1">Progresso:</div>
            <div>Média de tarefas concluídas: <span className="font-bold text-pink-600">68%</span></div>
            <div>Hábitos acompanhados: <span className="font-bold text-pink-600">3/4</span></div>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-pink-700 font-semibold mb-2">Métricas por categoria</h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="rounded bg-pink-200/50 px-3 py-2">Trabalho: 72%</div>
            <div className="rounded bg-green-200/50 px-3 py-2">Autocuidado: 57%</div>
            <div className="rounded bg-sky-200/50 px-3 py-2">Faculdade: 64%</div>
            <div className="rounded bg-yellow-200/50 px-3 py-2">Pessoal: 82%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
