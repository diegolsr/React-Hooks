import React, { useState } from 'react';

function ComponentC() {
  // defined count and setCount and set value 0 in count variable
  const [count, setCount] = useState(0);

  return (
    <div className="cp3">
      <p>ComponentC - {count}</p>
      {/* Call setCount in onClick event and increment count variable */}
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}

export default ComponentC;