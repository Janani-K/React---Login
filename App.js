import React from 'react';
import './App.css';
import Menu from './Menu/Menu.react'
import Login from './Login/Login.react'

function App() {
  return (
    <div className="App">
      <h1>Redux Tutorial</h1>
      <hr></hr>
      <Menu></Menu>
      <hr></hr>
      <Login></Login>
    </div>
  );
}

export default App;
