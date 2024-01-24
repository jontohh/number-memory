import React, { useState } from 'react';
import NumberInput from './NumberInput';
import NumberDisplay from './NumberDisplay';
import styles from '../styles/NumberMemory.module.css';

const NumberMemory = () => {
  const [number, setNumber] = useState('');
  const [displayNumber, setDisplayNumber] = useState('');

  const handleInput = (inputNumber) => {
    setNumber(inputNumber);
  };

  const startMemoryGame = () => {
    setDisplayNumber(number);
    setNumber('');
  };

  return (
    <div className={styles.container}>
      <NumberInput handleInput={handleInput} />
      <button id="memory-button" onClick={startMemoryGame}>Start</button>
      <NumberDisplay displayNumber={displayNumber} />
    </div>
  );
};

export default NumberMemory;