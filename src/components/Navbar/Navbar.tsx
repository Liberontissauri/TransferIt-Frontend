import React from 'react'
import logo from "@/assets/icon.png"
import styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className={styles.container}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={logo} className={styles.logo}></img>
        </Link>
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <a className={styles.navItem}>Profile</a>
        </Link>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <a className={styles.navItem}>Files</a>
        </Link>
        <Link to="/upload" style={{ textDecoration: 'none' }}>
          <a className={styles.navItem}>Upload</a>
        </Link>
    </div>
  )
}

export default Navbar