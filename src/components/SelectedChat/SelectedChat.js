import React, { Component } from 'react';

import TextBox from  '../../components/TextBox/TextBox';
import ChatMessage from '../../components/ChatMessage/ChatMessage';

import './SelectedChat.css';

class SelectedChat extends Component {
  render() {
    const { message } = this.props;
    return (
      <div className="Selected-chat">
        <h3>Selected Chat</h3>

        <ChatMessage type="app" message='app'/>

        <ChatMessage type="user" message='user'/>

        <TextBox/>
      </div>
    );
  }
}

export default SelectedChat;
