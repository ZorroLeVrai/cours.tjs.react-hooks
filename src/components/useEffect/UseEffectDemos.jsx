import UseEffectDemo from "./UseEffectDemo";
import UseEffectDemo2 from "./UseEffectDemo2";
import { UseEffectMontageDemontage } from "./UseEffectMontageDemontage";
import styles from "../Global.module.css";

function UseEffectDemos() {
  const divStyle = [styles.border, styles.marginTop].join(" ");

  return (
    <>
      <div className={divStyle}><UseEffectDemo /></div>
      <div className={divStyle}><UseEffectDemo2 /></div>
      <div className={divStyle}><UseEffectMontageDemontage /></div>
    </>
  );
}

export default UseEffectDemos;