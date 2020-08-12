import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

class Player extends React.Component {

    eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
    };
    // TODO: When a player's turn ends, we need set the property "axis" to the string of 'none', which stops the piece from moving.
    render() {
        return (
            <Draggable
                axis="both"
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[1, 1]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div>
                    <div className="handle"> Player </div>
                </div>
            </Draggable>
        );
    }
}

export default Player;