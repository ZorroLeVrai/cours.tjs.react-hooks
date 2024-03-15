import { useEffect, useRef } from "react";
import styles from "../Global.module.css";

const UseMemoChild = () => {
  const nbRendering = useRef(1);
  useEffect(()=> {++nbRendering.current});

  return (
    <div className={styles.border}>
      <div>UseMemoChild</div>
      <div>{nbRendering.current}</div>
    </div>
  );
}
 
export default UseMemoChild;