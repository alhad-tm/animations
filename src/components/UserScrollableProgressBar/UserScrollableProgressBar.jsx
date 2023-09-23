import React, { useState } from 'react';
import css from "./UserScrollableProgressBar.css"

function UserScrollableProgressBar() {
  const [userCount, setUserCount] = useState(0);

  // Function to increment the user count
  const incrementUserCount = () => {
    setUserCount(userCount + 1);
  };

  // Function to decrement the user count
  const decrementUserCount = () => {
    if (userCount > 0) {
      setUserCount(userCount - 1);
    }
  };

  return (
    <div className="user-scrollable-progress-bar">
      <h2>User Progress</h2>
      <button onClick={incrementUserCount}>Add User</button>
      <button onClick={decrementUserCount}>Remove User</button>
      <div className="progress-bar1">
        <div
          className="progress1"
          style={{ width: `${userCount}%` }}
        ></div>
        <span className="count-label">{userCount}%</span>
      </div>
    </div>
  );
}

export default UserScrollableProgressBar;
