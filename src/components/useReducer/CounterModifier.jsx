import PropTypes from 'prop-types';
import styles from "../Global.module.css";

const CounterModifier = ({dispatch}) => {
  return (
    <div>
      <button className={styles.marginHorizontal} onClick={() => dispatch({type: "counter_offset", payload: 1})}>+</button>
      <button className={styles.marginHorizontal} onClick={() => dispatch({type: "counter_offset", payload: -1})}>-</button>
      <button className={styles.marginHorizontal} onClick={() => dispatch({type: "counter_reset"})}>Reset</button>
    </div>
  )
}

CounterModifier.propTypes = {
  dispatch: PropTypes.func,
};

export default CounterModifier;