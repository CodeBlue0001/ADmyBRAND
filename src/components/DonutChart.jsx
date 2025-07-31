// src/components/DonutChart.jsx
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ['#3b82f6', '#f97316', '#10b981'];

export function DonutChartComponent({ data, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-lg bg-white dark:bg-gray-800 p-4 shadow hover:shadow-lg transition"
    >
      <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-white">
        Marketing platform Chart
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Data value display section */}
      <div className="mt-4 space-y-2">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-300">
            <div className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <span>{entry.name}</span>
            </div>
            <span className="font-medium">{entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
