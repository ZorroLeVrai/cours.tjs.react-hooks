import { useReducer } from "react";
import SimpleInput from "./SimpleInput";

function getState(c1, c2) {
  return ({counter1:c1, counter2:c2, sum:c1+c2});
}

function reducer(state, action) {
  switch (action.type) {
    case "update_counter1":
      return getState(action.payload, state.counter2);
    case "update_counter2":
      return getState(state.counter1, action.payload);
    default:
      throw new Error("Unknown action type");
  }
}

const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, getState(0,0));

  return (
    <>
      <p>Reducer Demo</p>
      <p>Sum: {state.sum}</p>
      <div>
        <SimpleInput name="counter1" content={state.counter1} dispatch={dispatch} />
      </div>
      <div>
        <SimpleInput name="counter2" content={state.counter2} dispatch={dispatch} />
      </div>
    </>
  );
}
 
export default UseReducerDemo;