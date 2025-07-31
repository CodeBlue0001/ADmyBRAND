import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/login";
import Reports from "./components/Reports";
import { Provider } from "./components/ui/provider";
import { Sidebar } from "./components/Sidebar";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization or fetch
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              // <Sidebar>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/reports" element={<Reports />} />
                </Routes>
              // {/* </Sidebar> */}
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}
