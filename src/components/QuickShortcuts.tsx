
import { Link } from "react-router-dom";
const shortcuts = [
  { label: "Tarefas", to: "/agenda", color: "bg-pink-100 text-pink-700" },
  { label: "Faculdade", to: "/agenda", color: "bg-blue-100 text-blue-700" },
  { label: "Estágio", to: "/agenda", color: "bg-green-100 text-green-800" },
  { label: "Finanças", to: "/desejos", color: "bg-yellow-100 text-yellow-800" },
];
export function QuickShortcuts() {
  return (
    <div className="max-w-xl mx-auto mb-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
      {shortcuts.map(({ label, to, color }) => (
        <Link key={label} to={to} 
          className={`rounded-lg font-medium shadow-sm hover:scale-105 active:scale-95 transition ${color} py-4 text-center text-sm sm:text-base animate-fade-in`}>
          {label}
        </Link>
      ))}
    </div>
  );
}
