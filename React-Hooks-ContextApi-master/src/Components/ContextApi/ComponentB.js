import React, { useContext } from 'react';
import { CountCtx } from './CountContext'; // import the context

function ComponentB() {
  // Plug the context in 'cout' variable and in 'setCount'
  const [count, setCount] = useContext(CountCtx);

  return (
    <div className="cp3">
      <p><b>Component B</b><br/>Counter is {count}</p>
      <button onClick={() => setCount(count -1)}>Decrement</button>
    </div>
  )
}

export default ComponentB;