import { useState } from "react";
const habitsList = ["Beber água", "Estudar", "Dormir 8h", "Exercício"];
export function HabitTracker() {
  const [habits, setHabits] = useState(() =>
    habitsList.map((name) => ({
      name,
      days: Array(7).fill(false),
    })),
  );
  const toggle = (hIdx: number, dIdx: number) => {
    setHabits((h) =>
      h.map((habit, idx) =>
        idx === hIdx
          ? { ...habit, days: habit.days.map((done, id) => id === dIdx ? !done : done) }
          : habit
      )
    );
  };
  return (
    <div className="bg-white/90 rounded-lg shadow p-6 max-w-xl w-full mx-auto my-8 animate-fade-in">
      <h3 className="font-semibold text-lg mb-3 text-gray-900">Habit tracker</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr>
              <th className="py-1"></th>
              {["S", "T", "Q", "Q", "S", "S", "D"].map((d, i) => (
                <th key={i} className="font-light text-xs px-2 text-right">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {habits.map((h, i) => (
              <tr key={h.name}>
                <td className="font-medium">{h.name}</td>
                {h.days.map((done, j) => (
                  <td key={j}>
                    <button
                      aria-label={done ? "Concluído" : "Pendente"}
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition 
                        ${done ? "bg-pink-400 text-white" : "bg-gray-100 text-gray-400 hover:bg-pink-100"}`}
                      onClick={() => toggle(i, j)}
                    >
                      {done ? "✓" : ""}
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
