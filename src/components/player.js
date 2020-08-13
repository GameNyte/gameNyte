import React from 'react';

import '../scss/player.scss'

class Player extends React.Component {

    eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
    };
    // TODO: defaultPosition property should contain a function that ties the player token to state and our turn-taking functionality || disabled property is a boolean so we can toggle it by state.
    // TODO: When a player's turn ends, we need set the property "axis" to the string of 'none', which stops the piece from moving.
    render() {
        return (
            <div className="handle"></div>
        );
    }
}

export default Player;