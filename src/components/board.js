import React from 'react';
import Player from './player.js';
import GameHud from './gameHUD.js';
import Upload from './upload.js'
import Draggable from 'react-draggable';

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
            }
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

    handleAwsRes = (req, res) => {
        this.setState({ maps: res.body })
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
                    <img src="http://www.quadibloc.com/other/images/game.gif" />
                    <GameHud />
                    <Draggable bounds="parent" {...dragHandlers}>
                        {/* <Player/> */}
                        <div className="handle" style={{height:'25px', width:'25px'}}></div>
                    </Draggable>
                </div>
            </>
        );
    }
}

export default Board;