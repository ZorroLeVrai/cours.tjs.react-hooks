import { useReducer } from "react";
import styles from "../Global.module.css";

function reducer(state, action) {
  switch (action.type) {
    case "counter_offset":
      return state + action.payload;
    default:
      throw new Error("Unkown action type");
  }
}

const UseReducerSimpleDemo = () => {
  const [counter, dispatch] = useReducer(reducer, 0);

  return (<div className={styles.border}>
    <div>Componant {UseReducerSimpleDemo.name}</div>
    <p>Counter: {counter}</p>
    <div>
      <button onClick={() => dispatch({type: "counter_offset", payload: 1})}>Incrémenter</button>
      <button onClick={() => dispatch({type: "counter_offset", payload: -1})}>Décrémenter</button>
    </div>
  </div> );
}
 
export default UseReducerSimpleDemo;