import { useMemo, useState } from "react";
import UseMemoLevel1 from "./UseMemoLevel1";
import UseMemoChild from "./UseMemoChild";
import styles from "../Global.module.css";

const UseMemoDemo = () => {
  const [value, setValue] = useState(true);
  const [isMemoActivated, setIsMemoActivated] = useState(false);

  const coordinateObj = { x: 1, y: 1};
  const coordinateMemo = useMemo(() => ({ x: 1, y: 1}), []);
  const coordinate = isMemoActivated ? coordinateMemo : coordinateObj;

  const updateValue = () => setValue(current => !current);

  const handleMemo = (e) => {
    setIsMemoActivated(e.target.checked);
  };

  return (
    <div className={styles.border}>
      <div className={styles.smallMargin}>UseMemoDemo Component</div>
      <div>
        <input id="activateMemo" type="checkbox" onChange={e => handleMemo(e)} />
        <label htmlFor="activateMemo">Activate UseMemo</label>
      </div>
      <div className={styles.smallMargin}><button onClick={e => updateValue(e)}>Rerender UseMemoDemo</button></div>
      <UseMemoLevel1 coord={coordinate}/>
      <UseMemoChild />
    </div>
  );
}
 
export default UseMemoDemo;