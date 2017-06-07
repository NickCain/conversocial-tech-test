import React, { Component } from 'react';

import Header from '../components/Header/Header'
import ChatHistory from '../components/ChatHistory/ChatHistory'
import SelectedChat from '../components/SelectedChat/SelectedChat'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-main">
          <ChatHistory />
          <SelectedChat />
        </div>
      </div>
    );
  }
}

export default App;
