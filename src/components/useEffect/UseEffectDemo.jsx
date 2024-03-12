import { useEffect, useState } from 'react';
import styles from "../Global.module.css";

const UseEffectDemo = () => {
  const localStorageItemName = "counter";
  const [counter, setCounter] = useState(0);

  const updateCounter = value => {
    localStorage.setItem(localStorageItemName, value);
    setCounter(value);
  };

  useEffect(()=>{
    setCounter(Number(localStorage.getItem(localStorageItemName)));
  }, []);

  const incrementCounter = () => updateCounter(counter + 1);
  const decrementCounter = () => updateCounter(counter - 1);
  const resetCounter = () => updateCounter(0);

  return (
    <div>
      <p>UseEffect Demo</p>
      <div>
        Compteur: {counter}
      </div>
      <div>
        <button className={styles.marginHorizontal} onClick={incrementCounter}>+</button>
        <button className={styles.marginHorizontal} onClick={decrementCounter}>-</button>
        <button className={styles.marginHorizontal} onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
};
 
export default UseEffectDemo;