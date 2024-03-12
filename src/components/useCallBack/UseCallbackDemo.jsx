import { useCallback, useState } from "react";
import UseCallbackLevel1 from "./UseCallbackLevel1";
import styles from "../Global.module.css";

const UseCallbackDemo = () => {
  const [value, setValue] = useState(true);
  const [counter, setCounter] = useState(0);
  const [isCallbackActivated, setIsCallbackActivated] = useState(false);

  const updateValue = () => setValue(current => !current);

  const handleCallback = (e) => {
    setIsCallbackActivated(e.target.checked);
  };

  const addValueToCounter = (val) => setCounter(current => current + val);
  const addValueToCounterCallback = useCallback(addValueToCounter, []);

  return (
    <div className={styles.border}>
      <div className={styles.smallMargin}>UseCallbackDemo Component</div>
      <div>Compteur actuel: {counter}</div>
      <div>
        <input type="checkbox" onChange={e => handleCallback(e)} />
        <label>Activer UseCallback</label>
      </div>
      <div className={styles.smallMargin}><button onClick={e => updateValue(e)}>Rerender UseCallbackDemo</button></div>
      <UseCallbackLevel1 addValue={isCallbackActivated ? addValueToCounterCallback : addValueToCounter}/>
    </div>
  );
}
 
export default UseCallbackDemo;