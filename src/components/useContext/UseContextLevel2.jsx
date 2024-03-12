import { useContext } from 'react';
import { DataContext } from "./UseContextDemo";
import styles from "../Global.module.css";

const UseContextLevel2 = () => {
  const {value1, value2} = useContext(DataContext);

  return (
    <div className={styles.border}>
      Level2
      <div className={styles.smallPadding}>
        <div><label>Input1:{value1}</label></div>
        <div><label>Input2:{value2}</label></div>
      </div>
    </div>
  );
}
 
export default UseContextLevel2;