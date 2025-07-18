import { useState } from "react";
import { CheckCircle } from "lucide-react";

const habitsList = ["Beber água", "Estudar", "Dormir 8h", "Exercício"];

export function HabitTracker() {
  const [habits, setHabits] = useState(() =>
    habitsList.map((name) => ({
      name,
      days: Array(7).fill(false),
    }))
  );

  const toggle = (hIdx: number, dIdx: number) => {
    setHabits((h) =>
      h.map((habit, idx) =>
        idx === hIdx
          ? {
              ...habit,
              days: habit.days.map((done, id) => (id === dIdx ? !done : done)),
            }
          : habit
      )
    );
  };

  return (
    <div className="bg-white/90 rounded-lg shadow p-6 max-w-xl w-full mx-auto my-8 animate-fade-in text-sm text-gray-800">
      <div className="flex items-center gap-2 mb-3">
        <CheckCircle className="w-5 h-5 text-pink-700" />
        <h3 className="font-semibold text-lg text-gray-900">Habit tracker</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm table-fixed">
          <thead>
            <tr>
              <th className="w-32 text-left text-xs font-medium text-gray-600"></th>
              {["S", "T", "Q", "Q", "S", "S", "D"].map((d, i) => (
                <th
                  key={i}
                  className="w-10 text-xs font-medium text-gray-600 -translate-x-2.5"
                >
                  {d}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {habits.map((h, i) => (
              <tr key={h.name} className="border-t">
                <td className="py-2 whitespace-nowrap text-sm font-medium text-gray-800">
                  {h.name}
                </td>
                {h.days.map((done, j) => (
                  <td key={j} className="text-center py-2">
                    <button
                      aria-label={done ? "Concluído" : "Pendente"}
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition 
                        ${done ? "bg-pink-400 text-white" : "bg-gray-100 text-gray-400 hover:bg-pink-100"}`}
                      onClick={() => toggle(i, j)}
                    >
                      {done ? <CheckCircle className="w-5 h-5" /> : ""}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
