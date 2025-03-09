import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"; // Ensure this file is properly linked
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Navbar from "./components/Navbar"; // Import Navbar

function App() {
  // State for user profile and settings
  const [user, setUser] = useState({
    name: "Reinadine Alicaway",
    settings: {
      darkMode: false, // Default light mode
    },
  });

  return (
    <Router>
      {/* Apply dark mode class to entire app */}
      <div className={user.settings.darkMode ? "dark-mode" : ""}>
        {/* Navbar always visible */}
        <Navbar />

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          />
          <Route
            path="/settings"
            element={<Settings user={user} setUser={setUser} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
