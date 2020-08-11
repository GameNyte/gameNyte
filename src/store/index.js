import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import room from './room.js';

let reducers = combineReducers({ room });

let store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();