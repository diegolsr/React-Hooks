import React, { useState } from 'react';
import CpB from './ComponentB';

function ComponentA() {
  // define 'state' like objet and 'setState' like function, set the value {hello: false} in the state
  const [state, setState] = useState({hello: false});

  return (
    <div className="cp1">
      {/* if hello property of 'state' is true print 'true' or 'false' */}
      <p>ComponentA - {state['hello'] ? "true" : "false"}</p>
      {/* use setState in onClick event and toggle hello property  */}
      <button onClick={() => setState({hello: !state.hello})}>Toggle</button>
      <CpB/>
    </div>
  )
}

export default ComponentA;