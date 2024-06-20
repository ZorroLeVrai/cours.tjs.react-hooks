import React, { useCallback, useMemo } from 'react';
import { useState, useEffect } from 'react';
import styles from "./Global.module.css";

const Child = ({componentName, value}) => {
  useEffect(() => console.log(`${componentName} re-rendered val:${value}`));

  return (
    <div className={styles.border}>
      <div>{componentName}</div>
      <div>{value}</div>
    </div>
  );
}

const ChildMemo = React.memo(Child);

export default function MemoDemo() {
  const [fakeState, setFakeState] = useState(false);

  const maFonction = () => {}
  const cbFunc = useCallback(maFonction, []);

  const x = 12;
  //const obj = {x};
  const obj = useMemo(()=>({ x }), [x]);

  return (
    <div className={styles.border}>
      <button onClick={() => setFakeState(current => !current)}>{fakeState ? "true":"false"}</button>
      <Child componentName={"Child"} value={42} callback={maFonction} />
      <ChildMemo componentName={"ChildMemo"} value={42} callback={maFonction} />
    </div>
  );
}
