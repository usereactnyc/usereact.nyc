import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo delayed" alt="logo" />
      <p>
        Welcome to the future home of{' '}
        <a
          className="App-link"
          href="https://twitter.com/useReactNYC"
          target="_blank"
          rel="noopener noreferrer"
        >
          @useReactNYC
        </a>
      </p>
    </header>
  </div>
);

export default App;
