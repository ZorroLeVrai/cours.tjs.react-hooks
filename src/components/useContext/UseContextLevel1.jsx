import UseContextLevel2 from "./UseContextLevel2";
import styles from "../Global.module.css";

const UseContextLevel1 = () => {
  return (
    <div className={styles.border}>
      Level1
      <UseContextLevel2/>
    </div>
  );
}
 
export default UseContextLevel1;