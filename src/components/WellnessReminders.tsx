
import { useEffect, useState } from "react";
const reminders = ["Beba água 💧", "Separe um tempo para lazer 🎨", "Descanse sua mente 💤", "Respire fundo 🌸"];
export function WellnessReminders() {
  const [msg, setMsg] = useState(reminders[0]);
  useEffect(() => {
    const i = setInterval(() => {
      setMsg(reminders[Math.floor(Math.random() * reminders.length)]);
    }, 7000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="flex justify-center my-7">
      <span className="px-6 py-3 bg-gradient-to-r from-pink-100 via-violet-100 to-green-100 rounded-full shadow text-pink-700 font-semibold animate-fade-in transition">
        {msg}
      </span>
    </div>
  );
}
