import React from 'react';
import ReactDOM from 'react-dom';
import Room from './components/room.js';
import { Provider } from 'react-redux';
import store from './store';


import Header from './components/header.js';

const App = () => {
  return (

  <Provider store={store}>
    <Header />
    <Room />
  </Provider>

  );

};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
