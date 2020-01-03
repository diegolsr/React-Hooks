import React from 'react';

export const themes = {
    light: {
        color: 'white',
        foreground: '#000000',
        background: '#5a90e8',
    },
    dark: {
        color: 'white',
        foreground: '#ffffff',
        background: '#145e07',
    },
};

export const ThemeContext = React.createContext(
    themes.light, // default value
);

export const LocaleContext = React.createContext(
    themes.dark, // default value
);
