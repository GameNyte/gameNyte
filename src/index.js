import React from 'react';
import ReactDOM from 'react-dom';
import Room from './components/room.js';
import { Provider } from 'react-redux';
import store from './store';
import SimpleModal from './components/login-banner.js'

import Header from './components/header.js';

const App = () => {
  return (

  <Provider store={store}>
    <Header />
    <SimpleModal />      
    
    <Room />
  </Provider>

  );

};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
