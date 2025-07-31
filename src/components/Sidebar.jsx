import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Sun,Moon} from "lucide-react"
import {
  HomeIcon,
  ChartBarIcon,
  MegaphoneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export function Sidebar({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const navLinks = [
    { name: "Dashboard", href: "/", icon: HomeIcon },
    { name: "Campaigns", href: "#", icon: MegaphoneIcon },
    { name: "Reports", href: "/reports", icon: ChartBarIcon },
    { name: "Login", href: "/login", icon: UserIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white lg:flex">
      {/* Mobile Header */}
      <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          aria-label="Open menu"
          className="text-gray-800 dark:text-gray-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Dark mode toggle (optional) */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-gray-800 dark:text-gray-200"
        >
          {darkMode ? (
            <div className="flex items-center gap-1">
              {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16z" />
              </svg> */}
              <Sun className="w-5 h-5"></Sun>
              <span className="text-sm">Light</span>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              {/* <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293a8 8 0 01-11.586-11.586..." />
              </svg> */}
              <Moon className="w-5 h-5"></Moon>
              <span className="text-sm">Dark</span>
            </div>
          )}
        </button>
      </header>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 shadow-lg p-4 z-40 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:flex-shrink-0`}
      >
        {/* Logo - ONLY visible on mobile */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-3 py-1 rounded-full shadow text-xl font-extrabold">
              AD
            </div>
            <span className="text-xl font-bold tracking-wide text-gray-800 dark:text-gray-200">
              my<span className="text-blue-600 dark:text-blue-400">BRAND</span>
            </span>
          </Link>

          <button
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
            className="lg:hidden text-gray-800 dark:text-gray-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="space-y-2">
          {navLinks.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              to={href}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-100 hover:dark:bg-gray-700 transition-all group"
              onClick={() => setSidebarOpen(false)} // Close sidebar on nav click (mobile UX)
            >
              <Icon className="w-5 h-5 mr-3 text-blue-500 group-hover:scale-110 transition-transform" />
              <span>{name}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-700">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center px-3 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 overflow-x-hidden">{children}</main>
    </div>
  );
}
