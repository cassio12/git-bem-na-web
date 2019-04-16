import React, { Component } from 'react';
import caozinho1 from './caozinho1.jpg';
import './App.css';

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
        </header>
      </div>
    );
  }
}

export default App;
