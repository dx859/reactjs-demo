import React from 'react';
import styles from './statusBar.css';


const StatusBar = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.line}>
        <span className={styles.process}/>
        <span className={styles.num}>31/171</span>
      </div>
    </div>
  );
};

export default StatusBar;