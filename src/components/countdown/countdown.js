import Christmas from "../christmas/christmas";
import Spinner from "../spinner/spinner";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isChristmas, setIsChristmas] = useState(false);

  const countdown = () => {
    const today = new Date();
    const currentYear = new Date().getFullYear();
    let christmasDay = new Date(currentYear, 11, 25, 0, 0, 0);
    const nextDay = new Date(currentYear, 11, 26, 0, 0, 0);

    const isChristmas = today.getMonth() === 11 && today.getDate() === 25;

    setIsChristmas(isChristmas);

    if (today >= nextDay) {
      christmasDay = new Date(currentYear + 1, 11, 25, 0, 0, 0);
    }

    const timeDifference = christmasDay.getTime() - today.getTime();

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(timeDifference / days);
    let timeHours = Math.floor((timeDifference % days) / hours);
    let timeMinutes = Math.floor((timeDifference % hours) / minutes);
    let timeSeconds = Math.floor((timeDifference % minutes) / seconds);

    timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

    setDays(timeDays);
    setHours(timeHours);
    setMinutes(timeMinutes);
    setSeconds(timeSeconds);
    setLoading(false);
  };

  useEffect(() => {
    countdown();
    const interval = setInterval(countdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.countdownWrapper}>
      {loading ? (
        <Spinner />
      ) : isChristmas ? (
        <Christmas />
      ) : (
        <div className={styles.countdown}>
          <h1 className={styles.subtitle}>How many days until</h1>
          <h2 className={styles.title}>Christmas</h2>
          <div className={styles.timer}>
            <div className={styles.daySectionTop}>
              <div className={styles.daySection}>
                <span className={styles.day}>{days}</span>
                <span className={styles.dayTitle}>days</span>
              </div>
            </div>
            <div className={styles.daySectionBottom}>
              <div className={styles.timerSection}>
                <span className={styles.timerNumber}>{hours}</span>
                <span className={styles.timerTitle}>hours</span>
              </div>
              <div className={styles.timerSection}>
                <span className={styles.timerNumber}>{minutes}</span>
                <span className={styles.timerTitle}>minutes</span>
              </div>
              <div className={styles.timerSection}>
                <span className={styles.timerNumber}>{seconds}</span>
                <span className={styles.timerTitle}>seconds</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Countdown;
