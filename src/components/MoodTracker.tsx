
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const WEEK = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
const initialData = WEEK.map((day) => ({
  day,
  humor: Math.floor(Math.random() * 5) + 1,
  energia: Math.floor(Math.random() * 5) + 1,
  foco: Math.floor(Math.random() * 5) + 1,
}));

export function MoodTracker() {
  const [data] = useState(initialData);
  return (
    <div className="rounded-lg bg-white/90 shadow p-6 max-w-xl mx-auto mb-6 animate-fade-in">
      <h3 className="font-semibold text-lg mb-2 text-gray-900">Seu humor, energia e foco na semana</h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f1f2" />
            <XAxis dataKey="day" />
            <YAxis domain={[0, 5]} hide />
            <Tooltip />
            <Bar dataKey="humor" fill="#f472b6" radius={[6, 6, 0, 0]} />
            <Bar dataKey="energia" fill="#a5b4fc" radius={[6, 6, 0, 0]} />
            <Bar dataKey="foco" fill="#6ee7b7" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <span className="text-xs text-muted-foreground block mt-2">
        Rastreie como você se sente, visualize padrões &gt; ajuste sua rotina!
      </span>
    </div>
  );
}
