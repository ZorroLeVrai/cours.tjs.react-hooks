import React, { useState } from 'react';

export const MyComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>compteur: {counter}</div>
      <button onClick={() => setCounter(current => current+1)}>Mise à jour</button>
    </>
  );
};
