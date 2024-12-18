import React from 'react'
import styles from "./rightbar.module.css"
import Image from 'next/image'
import { MdPlayCircleFilled } from 'react-icons/md'

const RightBar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.bgContainer}>
                <Image src="/astronaut.png" alt="" fill className={styles.bg}/>
                
            </div>
            <div className={styles.texts}>
                <span className={styles.notification}>
                Disponible maintenant! 🔥

                </span>
                <h3 className={styles.title}> 
                    Simplifiez votre gestion quotidienne en quelques clics 🚀

                </h3>
                <span className={styles.subtitle}>
                ⏱️ Prenez 4 minutes pour lire.
                </span>
                <p className={styles.para}>
                Maîtrisez les nouvelles fonctionnalités intuitives qui vous feront gagner du temps et simplifieront votre gestion quotidienne. Une interface moderne, des options améliorées : tout ce qu’il vous faut pour booster votre productivité.


                </p>
                <button className={styles.button}>
                    <MdPlayCircleFilled/>
                    Regardez

                </button>
            </div>
        </div>
        <div className={styles.item}>
    
            <div className={styles.texts}>
                <span className={styles.notification}>
                Disponible maintenant! 🔥

                </span>
                <h3 className={styles.title}> 
                    Simplifiez votre gestion quotidienne en quelques clics 🚀

                </h3>
                <span className={styles.subtitle}>
                ⏱️ Prenez 4 minutes pour lire.
                </span>
                <p className={styles.para}>
                Maîtrisez les nouvelles fonctionnalités intuitives qui vous feront gagner du temps et simplifieront votre gestion quotidienne. Une interface moderne, des options améliorées : tout ce qu’il vous faut pour booster votre productivité.


                </p>
                <button className={styles.button}>
                    <MdPlayCircleFilled/>
                    Regardez

                </button>
            </div>
        </div>
      
    </div>
  )
}

export default RightBar
