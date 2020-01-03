import React, { useContext } from 'react';
import { CountCtx } from './CountContext'; // import the context
import ComponentB from './ComponentB';

function ComponentA() {
  // Plug the context in 'cout' variable and in 'setCount'
  const [count, setCount] = useContext(CountCtx);

  return (
    <div className="cp2">
      <p><b>Component A</b><br/>Counter is {count}</p>
      <button onClick={() => setCount(0)}>Reset</button>
      <ComponentB/>
    </div>
  )
}

export default ComponentA;