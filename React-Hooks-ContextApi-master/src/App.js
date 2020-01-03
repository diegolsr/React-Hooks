import React, { Component } from 'react';

import CpAHooks from './Components/Hooks/ComponentA';
import CpContext from './Components/ContextApi/CountContext';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="h2">Hooks</p>
          <p className="h4">More information about hooks</p>
          <a href="https://reactjs.org/docs/hooks-intro.html">https://reactjs.org/docs/hooks-intro.html</a>
          <CpAHooks/>
          <p className="h2">Context API</p>
          <p className="h4">More information about context api</p>
          <a href="https://reactjs.org/docs/context.html">https://reactjs.org/docs/context.html</a>
          <CpContext/>
          <p className="h2">Reducer</p>
          <p className="h4">Soon ..</p>
          <a href="https://reactjs.org/docs/hooks-reference.html#usereducer">https://reactjs.org/docs/hooks-reference.html#usereducer</a>
        </header>
      </div>
    );
  }
}

export default App;