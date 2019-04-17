import React, { Component } from 'react';
import caozinho1 from './caozinho1.jpg';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-feed">
            <h3 className="App-feed-title">Cãosinhos fofinhos</h3>
            <div className="App-feed-firstNews">
              <img src={caozinho1} className="App-imgNoticia"></img>
              <p>caozinho muito fofo.</p>
            </div>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ul>
            <li>Evelyn</li>
            <li>Cassio</li>
            <li>Yasmin</li>
            <li>Kelvin</li>
            <li>Alice Cissa</li>
          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>Bem Na Web</h1>
        </header>
      </div>
    );
  }
}

export default App;
