import React, { useState } from 'react';
import styles from "../Global.module.css";

export const UseSimpleCounterDemo = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(current => current+1);
  };

  return (
    <div className={styles.border}>
      <div>UseSimpleCounterDemo</div>
      <div>compteur: {counter}</div>
      <button onClick={handleClick}>Mise à jour</button>
    </div>
  );
};