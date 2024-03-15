// @flow 
import * as React from 'react';
import { useState } from 'react';
import styles from "../Global.module.css";
import PropTypes from 'prop-types';

const UseCounterDemo = ({initialCounter}) => {
  const [counter, setCounter] = useState(initialCounter);

  const incrementCounter = () => setCounter(current => current + 1);
  const decrementCounter = () => setCounter(current => current - 1);
  const resetCounter = () => setCounter(0);

  return (
    <div className={styles.border}>
      <div>UseCounterDemo</div>
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

UseCounterDemo.propTypes = {
  initialCounter: PropTypes.number
};

UseCounterDemo.defaultProps = {
  initialCounter: 0
};

export default UseCounterDemo;