import React from 'react';
import styles from '../styles/NumberDisplay.module.css';

const NumberDisplay = ({ number }) => {
  return (
    <div className={styles.numberDisplay} id="number-display">
      {number}
    </div>
  );
};

export default NumberDisplay;