import React, { useState } from 'react';
import CpC from './ComponentC';

function ComponentB() {
  // defined inputText and setinputText and set value 'Hello :)' in inputText variable
  const [inputText, setInputText] = useState('Hello :)');

  return (
    <div className="cp2">
      <p>ComponentB - {inputText}</p>
      {/* Call setInputText in onChange event of input and get event as 'e' and get target.value of this input */}
      <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <CpC/>
    </div>
  )
}

export default ComponentB;