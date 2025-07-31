// src/components/LineChart.jsx
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export function LineChartComponent({ data, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-lg bg-white dark:bg-gray-800 p-4 shadow hover:shadow-lg transition"
    >
      <h2 className="text-lg font-semibold mb-2">Profit Growth</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="value" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
