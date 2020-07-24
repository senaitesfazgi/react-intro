import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'// Make sure to import a component to use it in a file
import HelloYourName from './HelloYourName';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello/>
        {/* name is called a property */}
        <HelloYourName name = "Shivani" favFood = "Pizaa"/>
        <HelloYourName name = "Senai" favFood = "Pizaa"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
