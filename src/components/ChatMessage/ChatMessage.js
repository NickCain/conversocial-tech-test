import React, { Component } from 'react';

import './ChatMessage.css';

class ChatMessage extends Component {
  render() {
    const { type, message } = this.props;

    if (type === 'app') {
      return (
        <div className="Chat-message app">
          <div className="message">
            {message}
          </div>
        </div>
      );
    }

    return (
      <div className="Chat-message user">
        <div className="message">
          {message}
        </div>
      </div>
    );
  }
}

export default ChatMessage;
