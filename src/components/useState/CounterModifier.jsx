import PropTypes from 'prop-types';
import styles from "../Global.module.css";

const CounterModifier = ({onIncrement, onDecrement, onReset}) => {
  return (
    <div>
      <button className={styles.marginHorizontal} onClick={onIncrement}>+</button>
      <button className={styles.marginHorizontal} onClick={onDecrement}>-</button>
      <button className={styles.marginHorizontal} onClick={onReset}>Reset</button>
    </div>
  )
}

CounterModifier.propTypes = {
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onReset: PropTypes.func,
};

export default CounterModifier;