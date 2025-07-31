import { useEffect, useState } from "react";
import Header from "./Header";
import { Sidebar } from "./Sidebar";
import { MetricCard } from "./MetricCard";
import { LineChartComponent } from "./LineChart";
import { BarChartComponent } from "./BarChart";
import { DonutChartComponent } from "./DonutChart";
import { DataTable } from "./DataTable";
import { Users, DollarSign, TrendingUp, BarChart3 } from "lucide-react";

import { ChartModal } from "./ChartModel";

export default function Dashboard() {
  const [metrics, setMetrics] = useState([]);
  const [lineData, setLineData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [donutData, setDonutData] = useState([]);
  const [tableData, setTableData] = useState([]);
  
  const [activeModal, setActiveModal] = useState(null); // 'line', 'bar', 'donut', or null


const barDataset = {
  monthly: [
    { label: "Jan", revenue: 4000 },
    { label: "Feb", revenue: 3000 },
    { label: "Mar", revenue: 5000 },
  ],
  yearly: [
    { label: "2021", revenue: 55000 },
    { label: "2022", revenue: 60000 },
    { label: "2023", revenue: 72000 },
  ],
  alltime: [
    { label: "Total", revenue: 9000000 },
  ],
};

useEffect(() => {
  setTimeout(() => {
    setMetrics([
      { title: "Revenue", value: "$900.5M", icon: <DollarSign /> },
      { title: "Users", value: "8.2M", icon: <Users /> },
      { title: "Conversions", value: "1.8K", icon: <BarChart3 /> },
      { title: "Growth", value: "4.8M(Last Month)", icon: <TrendingUp /> },
    ]);
    setLineData([
      { name: "2020", value: 200 },
      { name: "2021", value: 300 },
      { name: "2022", value: 500 },
      { name: "2024", value: 450 },
      { name: "2025", value: 600 },
    ]);
    setBarData(barDataset.monthly); // ✅ use `monthly` by default
    setDonutData([
      { name: "Google Ads", value: 400 },
      { name: "Facebook", value: 300 },
      { name: "Instagram", value: 300 },
    ]);
    setTableData([
      { name: "Alice", email: "alice@mail.com", status: "Active" },
      { name: "Bob", email: "bob@mail.com", status: "Inactive" },
      { name: "Charlie", email: "charlie@mail.com", status: "Active" },
      { name: "David", email: "david@mail.com", status: "Active" },
      { name: "Eve", email: "eve@mail.com", status: "Inactive" },
      { name: "Frank", email: "frank@mail.com", status: "Active" },
    ]);
  }, 1000);
}, []);


  return (
    <div className="min-h-screen text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900">
      <Header />
      <Sidebar>
        {/* Use lg breakpoint for sidebar visibility */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {metrics.map((metric, i) => (
            <MetricCard key={i} {...metric} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <LineChartComponent data={lineData} onClick={() => setActiveModal("line")} />

          <BarChartComponent data={barDataset} onClick={() => setActiveModal("bar")} />
        </div>

        <div className="mb-6">
          <DonutChartComponent data={donutData} />
        </div>

        <DataTable rows={tableData} />
                  {activeModal === "line" && (
            <ChartModal data={lineData} onClose={() => setActiveModal(null)} />
)}

      </Sidebar>
    </div>
  );
}
