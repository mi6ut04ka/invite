import React, { useState, useEffect } from 'react';
import '../style/style-main.css';

const MainSection: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-07-06T00:00:00') - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <section className="main">
      <div className="main-container">
        <img src="img/dec-1.svg" alt="dec" className="dec-1" />
        <img src="img/dec-2.svg" alt="dec" className="dec-2" />
        <div className="main-date">
          <div className="main-date-date">24</div>
          <div className="main-date-divider"></div>
          <div className="main-date-date">07</div>
          <div className="main-date-divider"></div>
          <div className="main-date-date">06</div>
        </div>
        <div className="main-wedding-day">
          <img src="img/weddingday.svg" alt="weddingday" />
        </div>
        <div className="main-bottom">
          <div className="main-bottom-text">ЛИСТАТЬ ВНИЗ</div>
          <img src="img/arrow.svg" alt="arrow" className="main-bottom-arrow" />
        </div>
        <div className="main-wrapper">
          <img src="img/logo.svg" alt="logo" className="logo" />
        </div>
      </div>
      <div className="main-timer-wrapper">
        <div className="main-timer">
          <div className="timer-block">
            <div className="timer-date" id="days">{timeLeft.days}</div>
            дней
          </div>
          <div className="timer-block">
            <div className="timer-date" id="hours">{timeLeft.hours}</div>
            часов
          </div>
          <div className="timer-block">
            <div className="timer-date" id="minutes">{timeLeft.minutes}</div>
            минут
          </div>
          <div className="timer-block">
            <div className="timer-date" id="seconds">{timeLeft.seconds}</div>
            секунд
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
