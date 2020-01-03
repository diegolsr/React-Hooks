import React from 'react';
import { useStateValue } from '../context/stateExample';

const Potato = () => {
    const [{ component }, dispatch] = useStateValue();

    const action = () => {
        dispatch({ type: 'SOMETHING' });
        dispatch({ type: 'ADD' });
    };

    return (
        <div>
            <h1>component with state....</h1>
            <h2 onClick={action}>Click me...</h2>
            <p>VALUE IS...{component.test.toString()}</p>
            <p>Click count IS...{component.count.toString()}</p>
        </div>
    );
};

export default Potato;