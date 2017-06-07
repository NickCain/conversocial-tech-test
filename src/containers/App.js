import React, { Component } from 'react';

import Header from '../components/Header/Header'

import Chat from '../containers/Chat/Chat';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-main">
          <Chat/>
        </div>
      </div>
    );
  }
}

export default App;
