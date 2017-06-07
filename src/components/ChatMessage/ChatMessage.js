import React, { Component } from 'react';

import './ChatMessage.css';

class ChatMessage extends Component {
  render() {
    const { message } = this.props;
    return (
      <div className="Chat-message">
        {message}
      </div>
    );
  }
}

export default ChatMessage;
