import React, { Component } from 'react';

import TextBox from  '../../components/TextBox/TextBox';
import ChatMessage from '../../components/ChatMessage/ChatMessage';

import './SelectedChat.css';

class SelectedChat extends Component {
  render() {
    const { onSendMessage, message } = this.props;

    const appMessage = `You said: ${message}`;
    const appMessageInital = 'welcome to the chat';

    return (
      <div className="Selected-chat">
        <h3>Selected Chat</h3>

        <ChatMessage type="app" message={message ? appMessage : appMessageInital}/>

        {
          message &&
          <ChatMessage type="user" message={message }/>
        }

        <TextBox onSendMessage={onSendMessage}/>
      </div>
    );
  }
}

export default SelectedChat;
