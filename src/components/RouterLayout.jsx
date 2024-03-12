// @flow 
import * as React from 'react';
import { Outlet } from "react-router-dom";
import LinkElement from './LinkElement';
import styles from "./RouterLayout.module.css";

export const RouterLayout = () => {
  return (
    <>
      <div>
        <LinkElement to="/" text="Home" />
      </div>
      <div>
        <span>
          Hooks:&nbsp;
        </span>
        <LinkElement to="/useState" text="useState" />
        <LinkElement to="/useEffect" text="useEffect" />
        <LinkElement to="/useRef" text="useRef" />
        <LinkElement to="/useReducer" text="useReducer" />
        <LinkElement to="/useContext" text="useContext" />
      </div>
      <div className={styles.marginTop}>
        <Outlet />
      </div>
    </>
  );
};

//export default RouterLayout;