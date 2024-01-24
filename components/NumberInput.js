import React, { useState } from 'react';
import styles from '../styles/NumberInput.module.css';

const NumberInput = ({ handleInput }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleInput(input);
    setInput('');
  };

  return (
    <div className={styles.numberInput}>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          id="number-input"
          value={input}
          onChange={handleChange}
          placeholder="Enter a number"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NumberInput;