
export default function Mentorship() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-pink-50 py-10 px-4">
      <div className="max-w-2xl mx-auto rounded-xl bg-white/80 p-8 shadow">
        <h2 className="font-playfair text-xl font-bold text-pink-700 mb-4">Mentoria: Roda da Vida & Metas SMART</h2>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-violet-600 mb-1">Roda da Vida</h4>
            <div className="bg-violet-100 rounded p-3 text-xs text-gray-700 mb-2">
              Faça um diagnóstico das suas áreas principais (trabalho, autocuidado, finanças, estudos, relações...) e acompanhe sua evolução!
            </div>
            <div className="flex gap-4">
              {[8,7,6,8,9,5,8,7].map((n,i)=>(
                <div key={i} className="flex flex-col items-center">
                  <span className="block w-8 h-8 rounded-full bg-violet-400/70 text-white flex items-center justify-center">{n}</span>
                  <span className="text-xs text-gray-500 mt-1">Área {i+1}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-violet-600 mb-1">Metas SMART</h4>
            <div className="bg-yellow-100 rounded p-3 text-xs text-gray-700 mb-2">
              Defina metas específicas, mensuráveis, alcançáveis, relevantes e temporais!
            </div>
            <ul className="list-disc pl-6 text-gray-700 mb-2 text-sm">
              <li>Ler 1 livro por mês até dezembro</li>
              <li>Fazer 3 horas de autocuidado por semana</li>
              <li>Economizar R$200/mês até as férias</li>
            </ul>
          </div>
          <div>
            <div className="rounded bg-pink-100/60 px-4 py-2 text-xs text-pink-900 mb-1">Quer sugestões ou ajuda para montar suas metas?</div>
            <a href="#" className="text-pink-700 hover:underline text-xs font-semibold">Falar com assistente IA</a>
          </div>
        </div>
      </div>
    </div>
  );
}
