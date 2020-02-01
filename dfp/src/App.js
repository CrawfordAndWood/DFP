import React from 'react';
import Content from './components/mainplayer/Content';
import Accordian from './components/accordian/Accordian';
import './App.css';

const App = () => (
  <div className="App">
  <header className="App-header">
    <h1>Dominoes Falling Productions</h1>
    <Content />
    <Accordian/>
  </header>
</div>
);

export default App;
