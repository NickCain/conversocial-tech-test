import { combineReducers } from 'redux';
import chatReducer, { CHAT_STATE_KEY } from './chatReducer';

const rootReducer = combineReducers({
  [CHAT_STATE_KEY]: chatReducer
});


export default rootReducer;
