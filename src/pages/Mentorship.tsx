export default function Mentorship() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-10 px-4">
      <div className="bg-white/90 rounded-lg shadow p-6 max-w-xl w-full mx-auto animate-fade-in text-sm text-gray-800">
        <h2 className="font-playfair text-2xl font-bold text-green-700 mb-6">Mentoria</h2>

        <div className="mb-6 space-y-2">
          <h5 className="font-semibold text-sm text-violet-700">Guia da mentoria</h5>
          <div className="rounded-lg bg-violet-50 p-4">
            <p>
              <span className="italic">Bem-vinda!</span> Após esses encontros, você terá um <strong>diagnóstico claro e visual da sua rotina atual</strong>, identificando os principais pontos de dor e desequilíbrio. Mais do que isso, você sairá com <strong>metas definidas para as áreas mais importantes da sua vida</strong>, sabendo exatamente o que precisa ser feito e como gerenciar seu tempo para alcançar seus objetivos.
            </p>
          </div>
        </div>

        <div className="mb-6 space-y-4">
          <div className="rounded-lg bg-yellow-50 p-4">
            <h5 className="font-bold text-yellow-700 mb-1">Como implementar?</h5>
            <p>
              Para realizar seus exercícios de implementação, clique nas páginas abaixo. Cada página é um módulo da mentoria. Você pode acompanhar na medida em que for assistindo aos encontros. <em>Mantenha seu Notion atualizado e vamos construir seu império!</em>
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-pink-50 p-4">
              <h5 className="font-bold text-pink-700 mb-1">Contatos importantes</h5>
              <ul className="space-y-2">
                <li>
                  Atendimento:<br />
                  <span className="text-gray-700">seg a sex, das 10h às 18h</span>
                </li>
                <li>
                  Plantão de dúvidas:<br />
                  <span className="text-gray-700">quartas às 19h no Zoom</span>
                </li>
                <li>
                  E-mail de contato:<br />
                  <span className="text-gray-700">mentoria@evolua.com</span>
                </li>
              </ul>
            </div>


            <div className="rounded-lg bg-violet-50 p-4">
              <h5 className="font-bold text-violet-700 mb-1">Pesquisa de satisfação</h5>
              <p className="mb-3">
                Queremos te ouvir! Responda à pesquisa para compartilhar suas expectativas e nos ajudar a tornar essa experiência ainda mais transformadora.
              </p>
              <div className="text-center">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-violet-200 text-violet-800 text-xs font-semibold px-4 py-2 rounded hover:bg-violet-300 transition"
                >
                  Responder pesquisa
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-6 border-b border-gray-300 pb-6">
          <h5 className="font-semibold text-sm text-pink-700 mb-2">Objetivos da mentoria</h5>
          <div className="rounded-lg bg-pink-50 p-4">
            <ul className="list-disc pl-4 space-y-1 text-gray-800">
              <li><strong>Visualizar o caos da sua rotina</strong> como ponto de partida para mudança.</li>
              <li><strong>Entender a origem de frustrações e culpa</strong>, iniciando o caminho para liberá-las.</li>
              <li><strong>Construir um diagnóstico realista</strong> com a Roda da Vida.</li>
              <li><strong>Definir objetivos claros e prioritários</strong> para o que realmente importa.</li>
              <li><strong>Transformar objetivos em metas SMART</strong> tangíveis.</li>
              <li><strong>Conectar metas ao propósito de vida</strong>, impulsionando motivação.</li>
              <li><strong>Sentir segurança com um plano concreto</strong>, trocando “apagar incêndios” por construção intencional da vida.</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h5 className="font-semibold text-sm text-yellow-700 mb-2">Primeiros Passos</h5>
          <div className="flex flex-col gap-3 max-w-xl mx-auto">
            {[
              "Organizando o caos",
              "Definindo prioridades",
              "Organizando a rotina na prática",
              "Criação de assistentes de IA",
            ].map((text) => (
              <button
                key={text}
                className="w-full bg-yellow-100 text-yellow-700 font-semibold py-3 rounded-md hover:bg-yellow-200 transition"
                type="button"
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
