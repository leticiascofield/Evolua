import { useState } from "react";
import { Smile } from "lucide-react";

const moods = [
  { emoji: "😊", label: "Bem" },
  { emoji: "🙂", label: "Normal" },
  { emoji: "😔", label: "Cansada" },
  { emoji: "😡", label: "Estressada" },
];

export function DailyCheckIn() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  return (
    <div className="bg-white/90 rounded-lg shadow-md p-6 mb-6 max-w-xl mx-auto animate-fade-in">
      <div className="flex items-center gap-2 mb-2">
        <Smile className="w-5 h-5 text-pink-700" />
        <h3 className="font-semibold text-lg text-gray-900">Check-in diário</h3>
      </div>
      <div className="text-base text-muted-foreground mb-4">Como você está se sentindo hoje?</div>
      <div className="flex gap-4 justify-center mb-2">
        {moods.map(({ emoji, label }) => (
          <button
            key={label}
            className={`px-3 py-2 rounded-lg text-lg hover:bg-pink-50 transition border ${
              selectedMood === label
                ? "bg-pink-100 border-pink-400 text-pink-700"
                : "border-gray-200"
            }`}
            onClick={() => setSelectedMood(label)}
          >
            <span className="mr-1">{emoji}</span>
            {label}
          </button>
        ))}
      </div>
      {selectedMood && (
        <div className="text-pink-700 mt-2 text-sm font-medium animate-fade-in">
          Seu humor hoje: {selectedMood}
        </div>
      )}
    </div>
  );
}
