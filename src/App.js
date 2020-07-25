import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'// Make sure to import a component to use it in a file
import HelloYourName from './HelloYourName';
import HelloStudents from './HelloStudents';

function App() {
  return (
    <div className="App">
      {/* <HelloStudents/> */}
        <Hello/>
        {/* name is called a property */}
        <HelloYourName name = "Shivani" favFood = "Pizaa"/>
        <HelloYourName name = "Senai" favFood = "Pizaa"/>
    </div>
  );
}

export default App;
