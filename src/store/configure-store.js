/* eslint-disable no-underscore-dangle */
import rootReducer from '../reducers';
import { createStore, compose } from 'redux';

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default (initialState) => {
  return createStore(rootReducer, initialState, enhancers);
};
/* eslint-enable */
