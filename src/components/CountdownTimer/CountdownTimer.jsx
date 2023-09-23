import React, { useState, useEffect } from 'react';
import css from "./CountdownTimer.css"

function CountdownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Set the target date and time for the countdown
  const targetDate = new Date("2023-10-01T11:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const timeLeft = targetDate - currentDate;

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const newDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const newHours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const newMinutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const newSeconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-timer">
      <div className="timer-box">
        <span className="timer">{days}</span>
        <span className="timer-label">Days</span>
      </div>
      <span className="dotspan">:</span>
      <div className="timer-box">
        <span className="timer">{hours}</span>
        <span className="timer-label">Hours</span>
      </div>
      <div className="timer-box">
        <span className="timer">{minutes}</span>
        <span className="timer-label">Minutes</span>
      </div>
      <div className="timer-box">
        <span className="timer">{seconds}</span>
        <span className="timer-label">Seconds</span>
      </div>
    </div>
  );
}

export default CountdownTimer;
