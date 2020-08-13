import React from 'react';
import Draggable from 'react-draggable';
import { Avatar } from '@material-ui/core';
import {connect} from 'react-redux';
import {updatePlayers} from '../store/players.js'
// import '../scss/tokens.scss'
class Token extends React.Component {
    // eventLogger = (e: MouseEvent, data: Object) => {
    //     console.log('Event: ', e);
    //     console.log('Data: ', data);
    // };
    // TODO: defaultPosition property should contain a function that ties the player token to state and our turn-taking functionality || disabled property is a boolean so we can toggle it by state.
    // TODO: When a player's turn ends, we need set the property "axis" to the string of 'none', which stops the piece from moving.
    render() {
      const dragHandlers = { onStart: this.onStart, onStop: this.onStop }
        return (
            <>
            {this.props.playerList.map((player, idx) => {
                    const color = this.props.playerList[idx].color;
                    return (
                        <Draggable bounds="parent" {...dragHandlers}
                        onDrag={(element, x, y, event) => {
                                this.props.updatePlayers([x.x, x.y, player])}}
                        >
                            <Avatar key={idx} className={`classes.${color}`}> {this.props.playerList[idx].name.split()[0]} </Avatar>
                        </Draggable>
                    )
                })
            }
            </>
        );
    }
}

const mapStateToProps = {
    socket:props.room.socket,
}
const mapDispatchToProps = {
    updatePlayers,
}
export default connect(mapStateToProps, mapDispatchToProps)(Token);