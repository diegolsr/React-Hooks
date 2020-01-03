import React, { useState, createContext } from 'react';
import ComponentA from './ComponentA';

// Create context set default value 0 and void function and export it
export const CountCtx = createContext(0);

function CountContext() {
  // create normal hooks
  const [count, setCount] = useState(0);

  return (
    <div className="cp1">
      <CountCtx.Provider value={[count, setCount]}>
        {/*  Call CountCtx provider and link 'count' hook and 'setCount', that replace '0' value and '() => {}' function*/}
        {/* if click on this button increment 'count' variable and automaticly update CountCtx */}
        <p>Component where i created the context 'CountCtx'<br/>Counter is {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <ComponentA/>
      </CountCtx.Provider>
    </div>
  )
}

export default CountContext;