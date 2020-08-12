import React from 'react';
import Upload from './components/upload.js';
// import GameBoard from './components/gameBoard.js';
import Room from './components/room.js';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header.js';


export default class App extends React.Component {

  render() {
    console.log('from the document location', window.location.search);
    // decode the params and pull out the token
    // somewhere in a react component, 
    return (
        <Provider store={store}>
          <Header />
          <Room />
          <Upload/>
        </Provider>
        );
    }
  }
