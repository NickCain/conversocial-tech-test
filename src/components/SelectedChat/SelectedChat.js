import React, { Component } from 'react';

import TextBox from  '../../components/TextBox/TextBox';

import './SelectedChat.css';

class SelectedChat extends Component {
  render() {
    return (
      <div className="Selected-chat">
        <h3>Selected Chat</h3>
        <TextBox/>
      </div>
    );
  }
}

export default SelectedChat;
