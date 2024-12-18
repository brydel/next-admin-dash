import React from 'react'
import styles from "./card.module.css"
import { MdSupervisedUserCircle } from 'react-icons/md'

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24}/>
      <div className={styles.texts}>
        <span className={styles.title}>Etudiant Total</span>
        <span className={styles.number}>1000</span>
        <span className={styles.detail}>
          <span className={styles.positive}>1</span>Plus que la semaine derniere
        </span>
      </div>

    </div>
  )
}

export default Card
