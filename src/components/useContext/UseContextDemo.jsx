import { createContext, useState } from 'react';
import UseContextLevel1 from "./UseContextLevel1";
import styles from "../Global.module.css";

const createContextValue = (val1, val2) => ({value1: val1, value2: val2});
const myDefaultData = createContextValue("","");
//myDefaultData est la donnée par défaut en dehors du contexte
const DataContext = createContext(myDefaultData);
DataContext.displayName = "DataContext";

const UseContextDemo = () => {
  const [inputData, setInputData] = useState(() => createContextValue("", ""));

  const handleTextChange = (index, event) => {
    const val = event.target.value;
    if (index === 1)
      setInputData({...inputData, value1: val});
    else
      setInputData({...inputData, value2: val});
  };

  return (
    <>
      <div className={styles.marginTop}>
        <div>
          <label htmlFor="text1">Input1:</label>
          <input type="text" id="text1" onChange={e => handleTextChange(1, e)}></input>
        </div>
        <div>
          <label htmlFor="text2">Input2:</label>
          <input type="text" id="text2" onChange={e => handleTextChange(2, e)}></input>
        </div>
      </div>
      <div  className={styles.marginTop}>
        <DataContext.Provider value={inputData}>
          <UseContextLevel1 />
        </DataContext.Provider>
      </div>
    </>
  );
};
 
export {DataContext, UseContextDemo}