export default function Desejos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 py-10 px-4">
      <div className="max-w-xl mx-auto rounded-xl bg-white/80 p-8 shadow">
        <h2 className="font-playfair text-2xl font-bold text-yellow-700 mb-6">Desejos • Suas listas pessoais</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          <div className="rounded bg-pink-50 px-4 py-3">
            <h4 className="font-bold text-pink-600 mb-2">Livros pra ler</h4>
            <ul className="ml-3 list-disc text-sm text-gray-700">
              <li>Mulheres que Correm com Lobos</li>
              <li>A Coragem de Ser Imperfeito</li>
              <li>Frankenstein</li>
              <li>O Retrato de Dorian Gray</li>
            </ul>
          </div>

          <div className="rounded bg-green-50 px-4 py-3">
            <h4 className="font-bold text-green-600 mb-2">Filmes & Séries</h4>
            <ul className="ml-3 list-disc text-sm text-gray-700">
              <li>O Sorriso de Monalisa</li>
              <li>Adoráveis Mulheres</li>
              <li>Amelie Poulain</li>
              <li>Anne with an E</li>
            </ul>
          </div>

          <div className="rounded bg-blue-50 px-4 py-3">
            <h4 className="font-bold text-blue-600 mb-2">Compras desejadas</h4>
            <ul className="ml-3 list-disc text-sm text-gray-700">
              <li>Planner novo</li>
              <li>Luminária de mesa</li>
              <li>Fone bluetooth</li>
              <li>Tapete macio para o quarto</li>
              <li>Flores para a sala</li>
            </ul>
          </div>

          <div className="rounded bg-purple-50 px-4 py-3">
            <h4 className="font-bold text-purple-600 mb-2">Lugares pra visitar</h4>
            <ul className="ml-3 list-disc text-sm text-gray-700">
              <li>Inhotim</li>
              <li>Paraty</li>
              <li>Jardim Botânico (RJ)</li>
              <li>Café bonito no centro</li>
            </ul>
          </div>

          <div className="rounded bg-yellow-50 px-4 py-3">
            <h4 className="font-bold text-yellow-600 mb-2">Coisas pra mim</h4>
            <ul className="ml-3 list-disc text-sm text-gray-700">
              <li>Fazer ioga</li>
              <li>Passar uma tarde offline</li>
              <li>Ir à feira sozinha</li>
              <li>Começar um novo hobby</li>
            </ul>
          </div>

          <div className="rounded bg-red-50 px-4 py-3">
            <h4 className="font-bold text-red-600 mb-2">Presentes pra dar</h4>
            <ul className="ml-3 list-disc text-sm text-gray-700">
              <li>Livro de poesia para minha mãe</li>
              <li>Colar para uma amiga</li>
              <li>Carta escrita à mão para meu namorado</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
