import { useRef, useEffect, memo } from "react";
import styles from "../Global.module.css";

const UseCallbackLevel1 = memo(({addValue}) => {
  const nbRendering = useRef(1);

  useEffect(()=> {
    nbRendering.current += 1;
  });

  return (
    <div className={styles.border}>
      UseCallbackLevel1 Component
      <div className={styles.smallPadding}>
        <div>
          <button onClick={() => addValue(-1)}>Décrémenter</button>
          <button onClick={() => addValue(1)}>Incrémenter</button>
        </div>
        <div>Nb Rendering: {nbRendering.current}</div>
      </div>
    </div>
  );
});

export default UseCallbackLevel1;