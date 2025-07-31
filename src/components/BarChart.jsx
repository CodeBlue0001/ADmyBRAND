import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Dialog } from "@headlessui/react"; // make sure you have installed @headlessui/react

export function BarChartComponent({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeRange, setTimeRange] = useState("monthly");

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const filteredData = {
    monthly: data.monthly,
    yearly: data.yearly,
    alltime: data.alltime,
  }[timeRange];

  return (
    <>
      <div
        onClick={openModal}
        className="cursor-pointer rounded-lg bg-white dark:bg-gray-800 p-4 shadow hover:shadow-lg transition"
      >
        <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-white">Revenue Chart</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={filteredData}>
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-2xl rounded-xl bg-white dark:bg-gray-900 p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Detailed Revenue Chart</h3>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="ml-4 rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              >
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
                <option value="alltime">All Time</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={filteredData}>
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 text-right">
              <button
                onClick={closeModal}
                className="mt-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
