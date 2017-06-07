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
    console.log('ssend')
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
          <textarea placeholder="write your message here..." onSubmit={this.handleSubmit} onChange={this.handleOnChange}></textarea>
        </form>
      </div>
    );
  }
}

export default TextBox;
