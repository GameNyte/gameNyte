import React from 'react';
import Upload from './components/upload.js';

// import GameBoard from './components/gameBoard.js';
import Room from './components/room.js';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/header.js';

import GameHUD from './components/gameHUD.js';
import Board from './components/board.js';
import Player from './components/player.js';


export default class App extends React.Component {

  render() {
    return (

        <Provider store={store}>
          <Header />
          <Room />
          <Upload/>
      <div>
          <GameHUD/>
          <Board/>
            <Player/>
          <Board/>
      </div>
        </Provider>
        );
    }
    );

  }
