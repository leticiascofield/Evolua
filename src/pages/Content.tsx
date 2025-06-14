
import { ContentHighlights } from "../components/ContentHighlights";
export default function Content() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl text-pink-700 font-bold mb-6">Sugestões & Novidades</h2>
        <ContentHighlights />
        <div className="mt-8 text-xs text-gray-400 text-right">Explore conteúdos por podcast, vídeo, artigo ou tema.</div>
      </div>
    </div>
  );
}
