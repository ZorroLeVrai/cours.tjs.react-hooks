import { useReducer } from "react";
import styles from "../Global.module.css";
import Counter from "./Counter";
import CounterModifier from "./CounterModifier";

function reducer(state, action) {
  switch (action.type) {
    case "counter_offset":
      return state + action.payload;
    case "counter_reset":
      return 0;
    default:
      throw new Error("Unkown action type");
  }
}

const UseReducerSimpleDemo = () => {
  const [counter, dispatch] = useReducer(reducer, 0);

  return (<div className={styles.border}>
    <div>Componant {UseReducerSimpleDemo.name}</div>
    <Counter counter={counter} />
    <CounterModifier dispatch={dispatch} />
  </div> );
}
 
export default UseReducerSimpleDemo;