import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap Styles
import "../style.css"; // ✅ Custom Styles

function Navbar({ darkMode }) {
  return (
    <nav className={`custom-navbar ${darkMode ? "dark-mode" : ""}`}>
      <div className="nav-links">
        <Link className="nav-btn" to="/">
          🏠 Home
        </Link>
        <Link className="nav-btn" to="/profile">
          👤 Profile
        </Link>
        <Link className="nav-btn" to="/settings">
          ⚙️ Settings
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
