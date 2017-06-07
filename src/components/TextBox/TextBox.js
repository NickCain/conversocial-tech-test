import React, { Component } from 'react';

import './TextBox.css';

class TextBox extends Component {
  render() {
    return (
      <div className="Textbox">
        <textarea placeholder="write your message here..."></textarea>
      </div>
    );
  }
}

export default TextBox;
