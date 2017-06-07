import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChatHistory from '../../components/ChatHistory/ChatHistory';
import SelectedChat from '../../components/SelectedChat/SelectedChat';

import './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Chat">
        <ChatHistory />
        <SelectedChat />
      </div>
    );
  }
}


const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
