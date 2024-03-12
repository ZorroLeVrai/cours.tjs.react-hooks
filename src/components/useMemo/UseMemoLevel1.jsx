import { useRef, useEffect, memo } from "react";
import styles from "../Global.module.css";

const UseMemoLevel1 = memo(({coord}) => {
  const {x, y} = coord;
  const nbRendering = useRef(1);

  useEffect(()=> {
    nbRendering.current += 1;
  });

  return (
    <div className={styles.border}>
      UseMemoLevel1 Component
      <div className={styles.smallPadding}>
        <div>PropData: {`{x: ${x}, y: ${y}}`}</div>
        <div>Nb Rendering: {nbRendering.current}</div>
      </div>
    </div>
  );
});

export default UseMemoLevel1;