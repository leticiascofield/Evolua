const mockTasks = [
  { id: 1, title: "Enviar relatório mensal", category: "Trabalho", done: false, color: "bg-pink-300", important: true },
  { id: 2, title: "Reunião semanal do estágio", category: "Estágio", done: false, color: "bg-green-300", important: false },
  { id: 3, title: "Comprar presente para aniversário", category: "Pessoal", done: true, color: "bg-yellow-200", important: false },
  { id: 4, title: "Estudar matéria X para prova", category: "Faculdade", done: false, color: "bg-sky-300", important: false }
];

const mockEvents = [
  { id: 1, date: "2025-06-18", title: "Apresentação do projeto final", category: "Faculdade", color: "bg-sky-300" },
  { id: 2, date: "2025-06-20", title: "Workshop de Produtividade", category: "Mentoria", color: "bg-yellow-300" },
  { id: 3, date: "2025-06-22", title: "Consulta médica", category: "Pessoal", color: "bg-pink-300" },
  { id: 4, date: "2025-06-25", title: "Entrega do relatório de estágio", category: "Estágio", color: "bg-green-300" },
];

export default function Agenda() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white/90 rounded-lg shadow p-8 animate-fade-in text-gray-800">
        <h2 className="font-playfair text-2xl font-bold text-pink-700 mb-6">Agenda Inteligente</h2>

        <section className="mb-10">
          <h3 className="font-semibold text-pink-700 text-xl mb-3 border-b border-pink-300 pb-2">Tarefas Atuais</h3>
          <ul className="space-y-4">
            {mockTasks.map(t => (
              <li
                key={t.id}
                className={`flex items-center gap-3 border rounded p-3 ${t.done ? "opacity-60 line-through bg-gray-50" : "bg-pink-50"} transition`}
              >
                <span className={`w-4 h-4 rounded-full ${t.color} flex-shrink-0`}></span>
                <div className="flex-1">
                  <p className="font-medium">{t.title}</p>
                  <span className="text-xs px-2 bg-pink-100 rounded-full text-pink-700">{t.category}</span>
                </div>
                {t.important && <span className="ml-2 text-red-500 font-bold animate-pulse">!</span>}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="font-semibold text-pink-700 text-xl mb-3 border-b border-pink-300 pb-2">Próximos Eventos</h3>
          <ul className="space-y-4">
            {mockEvents.map(e => (
              <li key={e.id} className="flex items-center gap-4 bg-yellow-50 rounded p-3 border border-yellow-200">
                <time className="text-xs text-yellow-700 font-semibold w-24 text-center">{new Date(e.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}</time>
                <div className={`w-3 h-3 rounded-full ${e.color} flex-shrink-0`}></div>
                <div>
                  <p className="font-medium text-yellow-900">{e.title}</p>
                  <span className="text-xs bg-yellow-100 px-2 rounded-full text-yellow-800">{e.category}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h3 className="font-semibold text-pink-700 text-xl mb-3 border-b border-pink-300 pb-2">Tarefas Adiadas</h3>
          <p className="text-xs text-gray-500 mb-2">Tarefas não concluídas na semana aparecem aqui para revisão.</p>
          <div className="bg-gray-50/60 min-h-[40px] rounded p-4 text-gray-400 italic">Nenhuma tarefa adiada.</div>
        </section>

        <section>
          <h3 className="font-semibold text-pink-700 text-xl mb-3 border-b border-pink-300 pb-2">Tarefas para Fazer Eventualmente</h3>
          <div className="bg-gray-50/60 min-h-[40px] rounded p-4 text-gray-400 italic">
            Exemplo: trocar lâmpada, organizar fotos antigas, revisar documentos...
          </div>
        </section>
      </div>
    </div>
  );
}
