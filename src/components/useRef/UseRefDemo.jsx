import { useState } from "react";
import UseRefDomElement from "./UseRefDomElement";
import { UseRefSimple } from "./UseRefSimple";

const UseRefDemo = () => {
  const [active, setActive] = useState(true);

  return (
    <>
      {active}
      <button onClick={() => setActive(cur => !cur)}>Envoi</button>
      <UseRefSimple />
    </>);
}
 
export default UseRefDemo;