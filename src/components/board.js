import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import Player from './player.js';
import GameHud from './gameHUD.js';
import Upload from './upload.js';

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            maps: []
        }
        this.handleAwsRes = this.handleAwsRes.bind(this);
    }

    handleAwsRes = (fileName) => {
        this.setState({maps: this.state.maps.concat(fileName.locationArray[0])})
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
                    <img src={this.state.maps[0]}/>
                    <GameHud/>
                    <Player/>
                </div>
            </>
        );
    }
}

export default Board;