import React, { useState } from 'react';
import styles from "../Global.module.css";

export const UseSimpleCounterDemo = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.border}>
      <div>UseSimpleCounterDemo</div>
      <div>compteur: {counter}</div>
      <button onClick={() => setCounter(current => current+1)}>Mise à jour</button>
    </div>
  );
};