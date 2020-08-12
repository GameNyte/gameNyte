
import React from 'react';
import ReactDOM from 'react-dom';

<<<<<<< HEAD
import Room from './components/room.js';
import Chat from './components/chat.js';
import { Provider } from 'react-redux';
import store from './store';


import Header from './components/header.js';

const App = () => {
  return (

  <Provider store={store}>
    <Header />
    <Room />
    <Chat />
  </Provider>

  );

};

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);
=======
import App from './app.js';

// attach component to the DOM
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
>>>>>>> c5defce18cf636b2567d6724b52616f27f84fa55
