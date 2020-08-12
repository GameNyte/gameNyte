import React from 'react';
import ReactDOM from 'react-dom';
import Room from './components/room.js';
import Chat from './components/chat.js';
import { Provider } from 'react-redux';
import store from './store';


const App = () => {
  return (
  <Provider store={store}>
    <Room />
    <Chat />
  </Provider>

  );
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
