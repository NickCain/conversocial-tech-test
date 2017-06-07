import React, { Component } from 'react';
import { connect } from 'react-redux';

import ChatHistory from '../../components/ChatHistory/ChatHistory';
import SelectedChat from '../../components/SelectedChat/SelectedChat';

import * as actions from '../../actions/chatActions';
import { getMessage } from '../../reducers/chatReducer';
import './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { sendMessage, getMessage } = this.props;
    return (
      <div className="Chat">
        <ChatHistory />
        <SelectedChat onSendMessage={sendMessage} message={getMessage}/>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  getMessage: getMessage(state)
});

const mapDispatchToProps = dispatch => ({
  sendMessage: data => dispatch(actions.sendMessage(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
