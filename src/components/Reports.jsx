import React from "react";
import { TrendingUp, DollarSign, Users, CreditCard } from "lucide-react";

import { Sidebar } from "./Sidebar";
import Header from "./Header";

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
}

function formatNumber(num) {
  return new Intl.NumberFormat("en-US").format(num);
}

const reportData = {
  revenue: {
    current: 900000000,
    change: 12.5,
    target: 5000000000,
    icon: DollarSign,
    description: "Total revenue this quarter",
  },
  profit: {
    current: 12000000,
    change: 8.3,
    target: 11000000,
    icon: TrendingUp,
    description: "Net profit margin growth",
  },
  users: {
    current: 45000,
    change: 6.7,
    target: 420000,
    icon: Users,
    description: "Active user base",
  },
  expenditure: {
    current: 150000,
    change: -5.5,
    target: 160000,
    icon: CreditCard,
    description: "Total operational costs",
  },
};

function Reports() {
  const totalRevenue = reportData.revenue.current;
  const totalProfit = reportData.profit.current;
  const profitMargin = ((totalProfit / totalRevenue) * 100).toFixed(1);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header on top */}
      <Header />

      {/* Sidebar + Main content side by side */}
      {/* <div className="flex flex-1"> */}
        {/* Sidebar will control dark mode and navigation */}
        <Sidebar>
          {/* Main content */}
          <div className="flex-1 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-500 p-6 md:p-10 overflow-auto">
            <h1 className="text-4xl font-bold mb-6 text-indigo-700 dark:text-indigo-400">
              Analytics & Reports
            </h1>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {Object.entries(reportData).map(([key, data]) => {
                const isPositive = data.change >= 0;
                const Icon = data.icon;

                return (
                  <div
                    key={key}
                    className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold capitalize">{key}</h3>
                      <Icon
                        className={`w-7 h-7 ${
                          isPositive ? "text-emerald-400" : "text-red-400"
                        }`}
                      />
                    </div>
                    <p className="text-3xl font-bold mb-1">
                      {key === "users"
                        ? formatNumber(data.current)
                        : formatCurrency(data.current)}
                    </p>
                    <span
                      className={`font-medium ${
                        isPositive ? "text-emerald-400" : "text-red-400"
                      }`}
                    >
                      {isPositive ? "+" : ""}
                      {data.change.toFixed(1)}%
                    </span>
                    <p className="mt-2 text-sm opacity-70">{data.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Key Metrics Summary */}
            <section className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <h2 className="flex items-center mb-6 text-xl font-bold text-gray-900 dark:text-gray-100">
                <TrendingUp className="w-6 h-6 text-emerald-400 mr-2" />
                Key Metrics Summary
              </h2>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Revenue</span>
                    <span className="text-2xl font-bold text-emerald-400">
                      {formatCurrency(totalRevenue)}
                    </span>
                  </div>
                  <p className="text-sm mt-1 opacity-70">
                    +{reportData.revenue.change}% from last period
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Profit Margin</span>
                    <span className="text-2xl font-bold text-indigo-400">
                      {profitMargin}%
                    </span>
                  </div>
                  <p className="text-sm mt-1 opacity-70">
                    Healthy profit margin maintained
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Active Users</span>
                    <span className="text-2xl font-bold text-purple-400">
                      {formatNumber(reportData.users.current)}
                    </span>
                  </div>
                  <p className="text-sm mt-1 opacity-70">Growing user engagement</p>
                </div>
              </div>
            </section>
          </div>
        </Sidebar>
      </div>
    // </div>
  );
}

export default Reports;
