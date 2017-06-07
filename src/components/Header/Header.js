import React, { Component } from 'react';

import Button from '../common/Button/Button';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="App-header">
          <h2>An Awesome Chat App</h2>
          <div className="Button-wrapper">
            <Button text="Add Chat"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
