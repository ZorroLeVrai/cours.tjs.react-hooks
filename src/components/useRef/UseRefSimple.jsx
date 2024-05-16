import { useEffect, useRef } from "react";

//let nbRendering = 1;

export const UseRefSimple = () => {
    const nbRendering = useRef(1);
    
    useEffect(()=> {++nbRendering.current});
    return (
        <div>
        <div>UseMemoChild</div>
        <div>{nbRendering.current}</div>
        </div>
    );
}
