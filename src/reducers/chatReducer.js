import _ from 'lodash';
import * as actions from '../actions/chatActions';

const initialState = {
  initalMessage: 'Welcome to the chat'
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SEND_MESSAGE:
      return {
        ...state,
        message: action.data

      };

    default:
      return state;
  }
};

export const CHAT_STATE_KEY = 'chatState';

//Selectors
export const getMessage = state => _.get(state, [CHAT_STATE_KEY, 'message']);

export default chatReducer;
