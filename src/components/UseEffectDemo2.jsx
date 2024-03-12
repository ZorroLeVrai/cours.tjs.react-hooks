import { useEffect, useState } from 'react';

const UseEffectDemo2 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleClickMove = e => setPosition({x: e.clientX, y: e.clientY});
    window.addEventListener('pointermove', handleClickMove);

    return () => window.removeEventListener('pointermove', handleClickMove);
  }, []);

  const displayPosition = () => `(${Math.round(position.x)}, ${Math.round(position.y)})`;

  return (
    <div>
      Position: {displayPosition()}
    </div>);
};

export default UseEffectDemo2;