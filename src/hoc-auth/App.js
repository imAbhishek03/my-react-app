import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import withAuth from "./auth/withAuth";

const ProtectedDashboard = withAuth(Dashboard);
const ProtectedSettings = withAuth(Settings);

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<ProtectedDashboard />} />
        <Route path="/settings" element={<ProtectedSettings />} />
      </Routes>
    </Router>
  );
};

export default App;
