import React from 'react';
import Draggable from 'react-draggable';
import { Avatar } from '@material-ui/core';
// import '../scss/tokens.scss'

class Token extends React.Component {
    constructor() {
        super();
        this.stringToColor = this.stringToColor.bind(this);
    }
    // eventLogger = (e: MouseEvent, data: Object) => {
    //     console.log('Event: ', e);
    //     console.log('Data: ', data);
    // };

    // TODO: defaultPosition property should contain a function that ties the player token to state and our turn-taking functionality || disabled property is a boolean so we can toggle it by state.
    // TODO: When a player's turn ends, we need set the property "axis" to the string of 'none', which stops the piece from moving.
    stringToColor = (string) => {
        let hash = 0;
        let i;
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.substr(-2);
        }
        /* eslint-enable no-bitwise */
        return color;
    }

    render() {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        return (
            <>
                {this.props.playerList.map((player, idx) => {
                    // const color = this.props.playerList[idx].color;
                    return (
                        <Draggable bounds="parent" {...dragHandlers}>
                            <Avatar key={idx} className={`classes.orange`}> {this.props.playerList[idx].name.split('')[0]} </Avatar>
                        </Draggable>
                    )
                })
                }
            </>
        );
    }
}
// stringToColor('Material-UI') // "#da90b2"
// stringToColor('React') // "#5fe9b2"


export default Token;