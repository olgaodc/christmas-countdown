import { useState } from "react";
import { CONFETTI } from "../../consts/confetti.js";
import styles from "./styles.module.css";

const Christmas = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.christmas}>
      <h1 className={styles.title}>Merry Christmas!</h1>

      <button
        type="button"
        className={`${styles.gift} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close box" : "Open box"}
      >
        <div className={styles.shadow} />

        <div className={styles.shake}>
          <div className={styles.giftMessage}> Happy holidays!</div>

          <div className={styles.confetti} aria-hidden="true">
            {CONFETTI.map((p, i) => (
              <span
                key={i}
                className={styles.piece}
                style={{
                  "--x": `${p.x}px`,
                  "--y": `${p.y}px`,
                  "--r": `${p.r}deg`,
                  "--c": p.c,
                  "--d": `${p.d}s`,
                }}
              />
            ))}
          </div>

          <div className={styles.lid}>
            <div className={styles.ribbonVertical} />
            <div className={styles.bow}>
              <span className={`${styles.tail} ${styles.tailLeft}`} />
              <span className={`${styles.tail} ${styles.tailRight}`} />
              <span className={`${styles.loop} ${styles.loopLeft}`} />
              <span className={`${styles.loop} ${styles.loopRight}`} />
              <span className={styles.knot} />
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.ribbonVertical} />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Christmas;
