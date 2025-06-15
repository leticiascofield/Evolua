
import { HabitTracker } from "../components/HabitTracker";
export default function Habits() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-green-50 py-10 px-2 md:px-8 2xl:px-0">
      <div className="max-w-7xl mx-auto w-full">
        <HabitTracker />
      </div>
    </div>
  );
}
