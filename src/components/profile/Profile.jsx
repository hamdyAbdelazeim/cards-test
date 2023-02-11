import React from "react";
import "./profile.css";
function Profile() {
  return (
    <div className="profile">
      <div className="profile-top">
        <div className="img ">
          <img src="https://i.pravatar.cc/" />
        </div>
        <span>Report For</span>
        <p>Best Sales</p>
      </div>
      <div className="profile-bottom">
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </div>
      <div></div>
    </div>
  );
}

export default Profile;
