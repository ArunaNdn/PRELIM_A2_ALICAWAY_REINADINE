import React from "react";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";

function Profile({ user, setUser }) {
  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  return (
    <div className="d-flex justify-content-center">
      <div
        className={`card p-4 w-50 ${user.settings.darkMode ? "dark-mode" : ""}`}
      >
        <h2 className="text-center">Profile Page</h2>
        <div className="text-center">
          <ProfilePicture />
        </div>
        <UserInfo name={user.name} />

        <label className="form-label mt-3">Update Name:</label>
        <input
          type="text"
          className="form-control"
          value={user.name}
          onChange={handleNameChange}
        />
      </div>
    </div>
  );
}

export default Profile;
