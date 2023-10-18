import Spinner from '../spinner/spinner';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [loading, setLoading] = useState(true);

  const countdown = () => {
    const today = new Date().getTime();
    const christmasDay = new Date('December 25, 2023 00:00:00').getTime();

    const timeDifference = christmasDay - today;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(timeDifference / days);
    let timeHours = Math.floor((timeDifference % days) / hours);
    let timeMinutes = Math.floor((timeDifference % hours) / minutes);
    let timeSeconds = Math.floor((timeDifference % minutes) / seconds);

    timeHours = timeHours < 10 ? '0' + timeHours : timeHours;
    timeMinutes = timeMinutes < 10 ? '0' + timeMinutes : timeMinutes;
    timeSeconds = timeSeconds < 10 ? '0' + timeSeconds : timeSeconds;

    setDays(timeDays);
    setHours(timeHours);
    setMinutes(timeMinutes);
    setSeconds(timeSeconds);
    setLoading(false);
  }

  useEffect(() => {
    setInterval(countdown, 1000);
  }, [])

  return (
    <div className={styles.countdownWrapper}>
      {loading ? (<Spinner />) : (
        <div className={styles.countdown}>
          <h1 className={styles.title}>Countdown</h1>
          <div className={styles.timer}>
            <div className={styles.timerSection}>
              <span id='days'>{days}</span>
              <span>days</span>
            </div>
            <div className={styles.timerSection}>
              <span id='hours'>{hours}</span>
              <span>hours</span>
            </div>
            <div className={styles.timerSection}>
              <span id='minutes'>{minutes}</span>
              <span>minutes</span>
            </div>
            <div className={styles.timerSection}>
              <span id='seconds'>{seconds}</span>
              <span>seconds</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Countdown