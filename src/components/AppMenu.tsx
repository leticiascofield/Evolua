
import { User, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function AppMenu() {
  return (
    <header className="flex items-center justify-between py-4 px-8 border-b bg-white/80 backdrop-blur-md shadow-sm h-20">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-pink-600 font-playfair tracking-tight">
          rotina feminina
        </span>
        <span className="ml-2 text-xs bg-pink-50 text-pink-700 px-3 py-1 rounded-full font-medium">
          Beta
        </span>
      </div>
      <nav className="flex items-center gap-8">
        <Link className="hover:text-pink-600 transition-colors font-semibold" to="/">Início</Link>
        <Link className="hover:text-pink-600 transition-colors font-semibold" to="/agenda">Agenda</Link>
        <Link className="hover:text-pink-600 transition-colors font-semibold" to="/habitos">Hábitos</Link>
        <Link className="hover:text-pink-600 transition-colors font-semibold" to="/mentoria">Mentoria</Link>
        <Link className="hover:text-pink-600 transition-colors font-semibold" to="/conteudo">Conteúdo</Link>
        <Link className="hover:text-pink-600 transition-colors font-semibold" to="/wishlist">Wishlist</Link>
      </nav>
      <div className="flex items-center gap-4">
        <Link to="/perfil" className="group relative flex items-center">
          <User className="w-7 h-7 group-hover:text-pink-600" />
          <span className="sr-only">Perfil</span>
        </Link>
        <Link to="/menu" className="group relative flex items-center">
          <Settings className="w-6 h-6 group-hover:text-pink-600" />
          <span className="sr-only">Configurações</span>
        </Link>
      </div>
    </header>
  );
}
