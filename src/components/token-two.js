import React, { useState } from 'react';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';
import { Avatar } from '@material-ui/core';
import { updateTokenLocation } from '../store/players.js';

const Token = (props) => {

  const [activeDrags, setActiveDrags] = useState(0);
  const [activePlayer, setActivePlayer] = useState();


  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };
  const onStop = () => {
    setActiveDrags(activeDrags - 1);
    props.socket.emit('player-moved', activePlayer);
  };

  if (Object.keys(props.socket).length) {
    props.socket.on('player-moved', (results) => {
     props.updateTokenLocation(results);
    })
  };

  const dragHandlers = { onStart: onStart, onStop: onStop };
  
  return (
    <>
      {props.playerList.length > 0 && props.playerList.map((player, idx) => {
        return (
          <Draggable 
            bounds="parent" 
            {...dragHandlers} 
            onDrag={(e, data) => {
              props.updateTokenLocation({...player, location: {controlledPosition: {x: data.x, y: data.y}, deltaPosition: {x: data.deltaX, y: data.deltaY}}});
              setActivePlayer(player);
            }}
            position={{...player.location.controlledPosition}}
            >
            <Avatar key={idx}>{player.name[0]}  </Avatar>
          </Draggable>
        )
      })
      }
    </>
  );
  // }
}

const mapStateToProps = state => {

  return {
    playerList: state.players,
    socket: state.room.socket,
    room: state.room,
  };
};

const mapDispatchToProps = { updateTokenLocation };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Token); 
