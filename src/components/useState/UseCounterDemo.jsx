// @flow 
import { useState } from 'react';
import Counter from './Counter';
import CounterModifier from './CounterModifier';
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
      <Counter counter={counter}/>
      <CounterModifier onIncrement={incrementCounter} onDecrement={decrementCounter} onReset={resetCounter}/>
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