import React from 'react';
import Player from './player.js';
import GameHud from './gameHUD.js';
import Upload from './upload.js'

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            maps: []
        }
        this.handleAwsRes = this.handleAwsRes.bind(this);
    }

    handleAwsRes = (req, res) => {
        this.setState({maps: res.body})
    }

    render() {
        return (
            <>
                <div>
                    <Upload
                        maps={this.state.maps}
                        handleAwsRes={this.handleAwsRes}
                    />
                </div>
                <div className="board">
                    <img src="http://www.quadibloc.com/other/images/game.gif"/>
                    <GameHud/>
                    <Player/>
                </div>
            </>
        );
    }
}

export default Board;