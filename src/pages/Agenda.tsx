
const mockTasks = [
  { id: 1, title: "Enviar relatório", category: "Trabalho", done: false, color: "bg-pink-300", important: true },
  { id: 2, title: "Reunião do estágio", category: "Estágio", done: false, color: "bg-green-300", important: false },
  { id: 3, title: "Comprar presente", category: "Pessoal", done: true, color: "bg-yellow-200", important: false },
  { id: 4, title: "Estudar matéria X", category: "Faculdade", done: false, color: "bg-sky-300", important: false }
];

export default function Agenda() {
  return (
    <div className="bg-white/95 min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-playfair text-pink-700 mb-6 font-bold">Agenda inteligente</h2>
        <div className="mb-8">
          <span className="text-xs text-gray-500 mb-2 block">Visualização simples • MVP</span>
          <ul className="space-y-3">
            {mockTasks.map(t => (
              <li key={t.id} className={`flex items-center gap-2 border-b pb-2 ${t.done ? "opacity-60 line-through" : ""}`}>
                <span className={`w-3 h-3 rounded-full inline-block ${t.color}`}></span>
                <span className="font-medium">{t.title}</span>
                <span className="text-xs px-2 bg-gray-100 rounded-full ml-2">{t.category}</span>
                {t.important && <span className="ml-2 text-xs text-red-500 animate-pulse">!</span>}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <h4 className="font-semibold text-pink-700">Ficou pra depois</h4>
          <p className="text-xs text-gray-500">Tarefas não concluídas na semana aparecem aqui para revisão.</p>
          <div className="mt-2 bg-gray-50/60 min-h-[40px] rounded p-3 text-gray-400 italic">Nenhuma tarefa adiada.</div>
        </div>
        <div className="mb-8">
          <h4 className="font-semibold text-pink-700">Fazer eventualmente</h4>
          <div className="mt-2 bg-gray-50/60 min-h-[40px] rounded p-3 text-gray-400 italic">Ex: trocar lâmpada, organizar fotos...</div>
        </div>
      </div>
    </div>
  );
}
