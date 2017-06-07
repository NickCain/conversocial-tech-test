import React, { Component } from 'react';

import './TextBox.css';

class TextBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSendMessage } = this.props;
    onSendMessage(this.state.text);
  };

  handleOnChange = (e) => {
    console.log(e.target.value);
    this.setState({
      text: e.target.value
    })
  };

  render() {
    return (
      <div className="Textbox">
        <form type="submit" onSubmit={this.handleSubmit}>
          <input
            placeholder="write your message here..."
            onSubmit={this.handleSubmit}
            onChange={this.handleOnChange}>
          </input>
        </form>
      </div>
    );
  }
}

export default TextBox;
