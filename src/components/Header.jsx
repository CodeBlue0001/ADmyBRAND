import { useEffect, useState } from "react";

export default function Header() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow p-4 flex justify-between items-center">
      <a href="/" className="flex items-center space-x-2">
  <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white dark:text-white px-3 py-1 rounded-full shadow-md text-xl font-extrabold tracking-tight transition hover:scale-105">
    AD
  </div>
  <span className="text-xl font-bold tracking-wide text-gray-800 dark:text-gray-200 transition">
    my<span className="text-blue-600 dark:text-blue-400">BRAND</span>
  </span>
</a>

      {/* <h1 className="text-2xl font-bold text-gray-800 dark:text-white">ADmyBRAND Insights</h1> */}
      {/* <button
        onClick={() => setDark(!dark)}
        className="text-sm px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button> */}
    </header>
  );
}