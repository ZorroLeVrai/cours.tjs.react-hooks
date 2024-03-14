import React from 'react';
import { useState, useEffect } from 'react';
import styles from "./Global.module.css";

const Child = ({componentName, value}) => {
  useEffect(() => console.log(`${componentName} re-rendered val:${value}`));

  return <div >{value}</div>;
}

const ChildMemo = React.memo(Child);

export default function MemoDemo() {
  const [fakeState, setFakeState] = useState(false);

  return (
    <div className={styles.border}>
      <button onClick={() => setFakeState(current => !current)}>{fakeState ? "true":"false"}</button>
      <Child componentName={"Child"} value={42} />
      <ChildMemo componentName={"ChildMemo"} value={42} />
    </div>
  );
}
