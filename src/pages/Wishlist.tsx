
export default function Wishlist() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 py-10 px-4">
      <div className="max-w-2xl mx-auto rounded-xl bg-white/80 p-8 shadow">
        <h2 className="font-playfair text-xl font-bold text-yellow-700 mb-4">Wishlist • Suas listas pessoais</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded bg-pink-50 px-4 py-3">
            <h4 className="font-bold text-pink-600 mb-1">Livros pra ler</h4>
            <ul className="ml-2 list-disc text-xs text-gray-600">
              <li>Lorem Ipsum</li>
              <li>Mulheres que Correm com Lobos</li>
            </ul>
          </div>
          <div className="rounded bg-green-50 px-4 py-3">
            <h4 className="font-bold text-green-600 mb-1">Filmes/Séries</h4>
            <ul className="ml-2 list-disc text-xs text-gray-600">
              <li>O Sorriso de Monalisa</li>
            </ul>
          </div>
          <div className="rounded bg-blue-50 px-4 py-3">
            <h4 className="font-bold text-blue-600 mb-1">Compras desejadas</h4>
            <ul className="ml-2 list-disc text-xs text-gray-600">
              <li>Planner novo</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-400">Edite suas listas livremente em breve!</div>
      </div>
    </div>
  );
}
