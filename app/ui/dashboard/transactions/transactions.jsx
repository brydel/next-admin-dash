import React from 'react';
import styles from './transactions.module.css';
import Image from 'next/image';

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Dernières transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Prénom</td>
            <td>Statut</td>
            <td>Date</td>
            <td>Montant ($CAD)</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>En Attente</span>
            </td>
            <td>14.12.2024</td>
            <td>$400</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.Done}`}>Terminé</span>
            </td>
            <td>14.12.2024</td>
            <td>$400</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.Cancelled}`}>Échoué</span>
            </td>
            <td>14.12.2024</td>
            <td>$400</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
