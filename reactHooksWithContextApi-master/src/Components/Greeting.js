import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext, LocaleContext } from '../Context/theme-context';

const Greeting = props => {
    const theme = useContext(ThemeContext);
    const locale = useContext(LocaleContext);

    const handleInputValue = initialValue => {
        const [value, setValue] = useState(initialValue);

        return {
            value,
            placeholder: props.placeholder,
            onChange: e => setValue(e.target.value),
        };
    };

    const nameInput = handleInputValue('');
    const ageInput = handleInputValue('');
    const test = handleInputValue('');

    useEffect(() => {
        document.title = nameInput.value;
        console.count('useEffect');
    });

    console.count('Rendered');
    return (
        <section>
            <div style={{ ...theme, padding: 20 }}>
                Name: <input {...nameInput} />
                <br />
                Age: <input {...ageInput} />
                <br />
            </div>
            <br />
            <div style={{ ...locale, padding: 20 }}>
                Another 1: <input {...test} />
            </div>
        </section>
    );
};

export default Greeting;
