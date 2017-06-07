import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { text, onClick } = this.props;
    return (
      <button className="Button" onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;
