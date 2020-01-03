import React, { useState } from "react";

const App = props => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState("");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(props.count);
  };

  const setTextValue = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>
        The Current {text || "Count"} Is {count}
      </p>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-1</button>
      <input value={text} onChange={setTextValue} />
    </div>
  );
};

App.defaultProps = {
  count: 0
};
export default App;
