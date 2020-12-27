import React from 'react';
import logo from './logo.svg';
import './App.css';
import EditorWrapper from "./components/editor/editor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          reless
        </p>
      </header>
      <EditorWrapper/>
    </div>
  );
}

export default App;
