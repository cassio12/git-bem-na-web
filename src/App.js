import React, { Component } from 'react';

import Footer from './components/Footer';

import caozinho1 from './caozinho1.jpg';
import caozinho2 from './assets/maltes.jpeg';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Bem na Web!</h1>
        <header className="App-header">
          <div className="App-feed">
            <h3 className="App-feed-title">Cãozinhos fofinhos</h3>
            <div className="App-feed-firstNews">
              <div className="App-feed-firstNews--content"> 
                <img src={caozinho1} className="App-imgNoticia" />
                <p>caozinho muito fofo.</p>
              </div>
              <div className="App-feed-firstNews--content">
                <img src={caozinho2} className="App-imgNoticia" />
                <p>outro caozinho muito fofo.</p>
              </div>
            </div>
          </div>
          <ul className="App-nameList">
            <li><a href="https://github.com/Evymendes">Evelyn</a></li>
            <li><a href="https://github.com/cassio12">Cassio</a></li>
            <li><a href="https://github.com/mymrtt">Yasmin</a></li>
            <li><a href="https://github.com/kelvgraf">Kelvin</a></li>
            <li><a href="https://github.com/CissaNina">Alice Cissa</a></li>
          </ul>
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
