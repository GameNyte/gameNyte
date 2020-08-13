import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink as Link } from 'react-router-dom';
import Upload from './components/upload.js';
// import GameBoard from './components/gameBoard.js';
import Room from './components/room.js';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header.js';
import Login from './components/login-banner.js';
import If from './components/if.js';


export default class App extends React.Component {
  render() {
    // console.log('from the document location APP', window.location.search);
    // decode the params and pull out the token
    // somewhere in a react component, 
    return (
      <Provider store={store}>
        <BrowserRouter>

          <Header />

          <If condition={!window.location.search}>
            <Login />
          </If>


          <If condition={window.location.search} >
            <Room />
            <Upload />
          </If>

        </BrowserRouter>
      </Provider>
    );
  }
}
