import React, { useState } from 'react';

function UserProgressBar() {
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
    <div className="user-progress-bar">
      <h2>User Progress</h2>
      <button onClick={incrementUserCount}>Add User</button>
      <button onClick={decrementUserCount}>Remove User</button>
      <p>User Count: {userCount}</p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(userCount / 100) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export default UserProgressBar;
