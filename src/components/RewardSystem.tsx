
import { useState } from "react";
export function RewardSystem() {
  const [xp, setXp] = useState(120);
  const [coins, setCoins] = useState(6);
  return (
    <div className="max-w-xl mx-auto my-8 bg-white/90 rounded-lg shadow p-4 flex flex-col items-center animate-fade-in">
      <h3 className="font-semibold mb-2 text-pink-700 text-lg">Recompensas e Gamificação</h3>
      <div className="flex items-center gap-6 mb-3">
        <span className="bg-pink-50 rounded px-4 py-2 font-semibold text-pink-600 text-sm">XP: {xp}</span>
        <span className="bg-yellow-50 rounded px-4 py-2 font-semibold text-yellow-600 text-sm">Moedas: {coins}</span>
      </div>
      <div className="text-xs text-gray-500 mb-3">Junte XP e moedas, troque por recompensas pessoais!</div>
      <div className="w-full flex items-center bg-gradient-to-r from-pink-200 to-pink-50 rounded h-5 overflow-hidden">
        <div className="bg-pink-400 h-full transition-all" style={{ width: `${xp/3}%` }}></div>
      </div>
      <div className="mt-3 text-sm font-medium text-pink-600">Meta: 300 XP &rarr; presente!</div>
    </div>
  );
}
