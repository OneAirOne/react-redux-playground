import React, { Component } from 'react';
import './App.css';
import Player from './components/player/Player';
import Playlist from './components/player/List';
import Add from './components/comment/Add';
import List from './components/comment/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header container center-align">
          <h4>React / Redux démo</h4>
        </header>
        <div className="App-player container">
          <div className="row">
            <div className="col s3">
              <Playlist />
            </div>
            <div className="col s9">
              <Player />
            </div>
            <div className="col s12">
            <Add />
            <List />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
