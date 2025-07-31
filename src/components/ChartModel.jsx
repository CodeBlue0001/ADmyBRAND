// src/components/ChartModal.jsx
import { X, CalendarDays, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, CartesianGrid } from "recharts";

export function ChartModal({ data, onClose, type = "line" }) {
  const [showAvgLine, setShowAvgLine] = useState(false);
  const [highlightPeak, setHighlightPeak] = useState(false);
  const [timeRange, setTimeRange] = useState("30"); // Default: Last 30 days
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Simulated time filtering
    const limit = parseInt(timeRange);
    const sliced = [...data].slice(-limit);
    setFilteredData(sliced);
  }, [data, timeRange]);

  const average =
    filteredData.reduce((acc, cur) => acc + cur.value, 0) / filteredData.length;

  const peak = filteredData.reduce((max, cur) =>
    cur.value > max.value ? cur : max
  , { value: -Infinity });

  const handleDownloadCSV = () => {
    const csv = [
      ["Name", "Value"],
      ...filteredData.map((d) => [d.name, d.value]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "chart_data.csv";
    a.click();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 w-full max-w-5xl shadow-lg overflow-auto relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-700 dark:text-white">
          <X />
        </button>

        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Detailed Analysis</h2>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            <select
              className="bg-gray-100 dark:bg-gray-700 text-sm p-2 rounded"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="7">Last 7 Days</option>
              <option value="30">Last 30 Days</option>
              <option value={data.length}>All Time</option>
            </select>
          </div>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={showAvgLine}
              onChange={() => setShowAvgLine(!showAvgLine)}
            />
            Show Average Line
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={highlightPeak}
              onChange={() => setHighlightPeak(!highlightPeak)}
            />
            Highlight Peak
          </label>

          <button
            className="flex items-center text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleDownloadCSV}
          >
            <Download className="w-4 h-4 mr-1" />
            Download CSV
          </button>
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
            {showAvgLine && (
              <ReferenceLine y={average} label="Avg" stroke="green" strokeDasharray="3 3" />
            )}
            {highlightPeak && (
              <ReferenceLine
                x={peak.name}
                label={`Peak (${peak.value})`}
                stroke="red"
                strokeDasharray="3 3"
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
