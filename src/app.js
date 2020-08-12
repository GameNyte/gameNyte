import React from 'react';
import Upload from './components/upload.js';
import GameHUD from './components/gameHUD.js';
import Board from './components/board.js';
import Player from './components/player.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <GameHUD/>
          <Board/>
            <Player/>
          <Board/>
          {/* <Upload/> */}
        </div>
      </>
    );
  }
}