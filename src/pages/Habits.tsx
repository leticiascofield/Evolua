
import { HabitTracker } from "../components/HabitTracker";
export default function Habits() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-green-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-playfair text-2xl text-pink-700 font-bold mb-6">Seus hábitos</h2>
        <HabitTracker />
        <div className="text-xs text-right text-gray-400 mt-6">Inclua métricas detalhadas em breve!</div>
      </div>
    </div>
  );
}
