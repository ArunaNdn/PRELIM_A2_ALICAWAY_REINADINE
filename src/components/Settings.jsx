import React from "react";

function Settings({ user, setUser }) {
  const toggleDarkMode = () => {
    const newDarkMode = !user.settings.darkMode;
    setUser((prevUser) => ({
      ...prevUser,
      settings: { ...prevUser.settings, darkMode: newDarkMode },
    }));

    // Apply dark mode class to body
    if (newDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div
        className={`card p-4 w-50 ${user.settings.darkMode ? "dark-mode" : ""}`}
      >
        <h2>Settings</h2>
        <div className="form-check form-switch mt-3">
          <input
            type="checkbox"
            className="form-check-input"
            checked={user.settings.darkMode}
            onChange={toggleDarkMode}
          />
          <label className="form-check-label ms-2">
            Dark Mode: {user.settings.darkMode ? "ON 🌙" : "OFF ☀️"}
          </label>
        </div>
      </div>
    </div>
  );
}

export default Settings;
