import React from 'react';
import './App.css';
import { ThemeContext, LocaleContext, themes } from './Context/theme-context';
import Greeting from './Components/Greeting';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        };

        this.toggleTheme = () => {
            this.setState(state => ({
                theme: state.theme === themes.dark ? themes.light : themes.dark,
            }));
        };
    }

    render() {
        // The ThemedButton button inside the ThemeProvider
        // uses the theme from state while the one outside uses
        // the default dark theme
        return (
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                    <Greeting name="Husny Ahamed" placeholder="Type here.." />
                </ThemeContext.Provider>
                <button
                    onClick={this.toggleTheme}
                    style={{ margin: 15, cursor: 'pointer', padding: 10, borderRadius: 5, backgroundColor: 'grey', fontSize: 25, fontWeight: 600, color: 'white' }}
                >
                    Toggle Theme
                </button>
            </div>
        );
    }
}

export default App;
