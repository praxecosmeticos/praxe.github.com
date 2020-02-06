import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Site em manutenção programada
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/praxecosmeticos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acesse o nosso Instagram
        </a>
      </header>
    </div>
  );
}

export default App;
