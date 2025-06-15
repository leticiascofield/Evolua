
import { ContentHighlights } from "../components/ContentHighlights";
export default function Content() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50 py-10 px-2 md:px-8 2xl:px-0">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="font-playfair text-2xl text-pink-700 font-bold mb-6">Sugestões & Novidades</h2>
        <ContentHighlights />
      </div>
    </div>
  );
}
