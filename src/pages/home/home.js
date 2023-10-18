import styles from './styles.module.css';
import Countdown from "../../components/countdown/countdown";

const HomePage = () => {
  return (
   <div className={styles.contentWrapper}>
    <div className={styles.container}>
        <Countdown />
    </div>
   </div>
  )
}

export default HomePage