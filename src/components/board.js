import React from 'react';

import Token from './tokens.js';
import GameHud from './gameHUD.js';
import Upload from './upload.js'

class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            maps: [],
            playerLocation: {
                activeDrags: 0,
                deltaPosition: {
                    x: 0, y: 0
                },
                controlledPosition: {
                    x: -400, y: 200
                }
            }, 
            playerList: [
                {
                    name: "Melissa",
                    color: "blue",
                    score: 0,
                },
                {
                    name: "Dave",
                    color: "grey",
                    score: 0,
                },
                {
                    name: "Ruhai",
                    color: "red",
                    score: 0,
                }
            ],
        }
        this.handleAwsRes = this.handleAwsRes.bind(this);
        this.onStart = this.onStart.bind(this);
        this.onStop = this.onStop.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
    }


    handleDrag = (e, ui) => {
        const { x, y } = this.state.deltaPosition;
        this.setState({
            deltaPosition: {
                x: x + ui.deltaX,
                y: y + ui.deltaY,
            }
        });
    };

    onStart = () => {
        this.setState({ activeDrags: ++this.state.activeDrags });
    };

    onStop = () => {
        this.setState({ activeDrags: --this.state.activeDrags });
    };

    handleAwsRes = (fileName) => {
        this.setState({maps: this.state.maps.concat(fileName.locationArray[0])})

    }

    render() {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        const {deltaPosition, controlledPosition} = this.state.playerLocation;
        return (
            <>
                <div>
                    <Upload
                        maps={this.state.maps}
                        handleAwsRes={this.handleAwsRes}
                    />
                </div>

                <div className="board" style={{height: '500px', width: '500px', position: 'relative', overflow: 'auto', padding: '0'}}>
                    <img src="{this.state.maps[0]}" alt=""/>
                    <GameHud/>
                    <Token playerList={this.state.playerList}/>
                </div>
            </>
        );
    }
}

export default Board;