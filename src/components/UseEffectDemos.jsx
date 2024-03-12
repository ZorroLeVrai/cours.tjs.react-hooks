import UseEffectDemo from "./UseEffectDemo";
import UseEffectDemo2 from "./UseEffectDemo2";
import styles from "./Global.module.css";

function UseEffectDemos() {
  const divStyle = [styles.border, styles.marginTop].join(" ");

  return (
    <>
      <div className={divStyle}><UseEffectDemo /></div>
      <div className={divStyle}><UseEffectDemo2 /></div>
    </>
  );
}

export default UseEffectDemos;