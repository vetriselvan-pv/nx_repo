import React from 'react'
import { Link } from 'react-router-dom'
import styles from './app.module.scss'

export default function Portfolio() {
  return (
    <div className={styles.wrapper}>
      <img src="../assets/Union.svg" alt="" />
      <div className={styles.nav_bar}>
        <ul>
          <li>
            <Link to={'#home'}>Home</Link>
          </li>
          <li>
            <Link to={'#home'}>About</Link>
          </li>
          <li>
            <Link to={'#home'}>Skills</Link>
          </li>
          <li>
            <Link to={'#home'}>Works</Link>
          </li>
          <li>
            <Link to={'#home'}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles.title_block}>
        <h4 className={styles.name_text}>VETRISELVAN</h4>
        <span className={styles.job_role}>
          Engineer + Junior Front-end Developer
        </span>
      </div>
    </div>
  )
}
