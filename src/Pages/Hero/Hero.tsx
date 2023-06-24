import logo from "@/assets/icon.png"
import styles from './Hero.module.css'
import { Link } from "react-router-dom";

function Hero() {

  return (
    <>
      <div className={styles.Container}>
        <img className={styles.Logo} src={logo}></img>
        <h1 className={styles.Title}>Transfer.It</h1>
        <h2 className={styles.SubTitle}>File sharing made easy</h2>
        <Link to="/dashboard">
          <button className={styles.Button}>Start Sharing</button>
        </Link>
      </div>
    </>
  )
}

export default Hero
