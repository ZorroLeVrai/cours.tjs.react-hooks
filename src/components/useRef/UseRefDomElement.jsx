import {useRef} from 'react';
import styles from "../Global.module.css";

function UseRefDomElement(){
  const inputRef = useRef(null);

  const setInputFocus = () => inputRef.current.focus();

  return (
    <div className={styles.border}>
      <p>Composante {UseRefDomElement.name}</p>
      <input type="text" ref={inputRef} />
      <button onClick={setInputFocus}>Get Focus</button>
    </div>
  );
};

export default UseRefDomElement;