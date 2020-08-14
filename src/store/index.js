import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import room from './room.js';
import login from './login.js';
import players from './players.js';
import upload from './upload.js';

let reducers = combineReducers({ room, login, players, upload });

let store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();