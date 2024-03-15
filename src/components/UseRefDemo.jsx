import {useRef} from 'react';

const UseRefDemo = () => {
  const inputRef = useRef(null);

  const setInputFocus = () => inputRef.current.focus();

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={setInputFocus}>Get Focus</button>
    </div>
  );
};

export default UseRefDemo;