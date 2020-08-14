import React, { useState } from 'react';
import { connect } from 'react-redux';
import Draggable, {DraggableCore} from 'react-draggable';
import { Avatar } from '@material-ui/core';
import { updateTokenLocation } from '../store/players.js';
// import '../scss/tokens.scss'

const Token = (props) => {

  const [activeDrags, setActiveDrags] = useState(0);

  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });


  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };
  const onStop = () => {
    setActiveDrags(activeDrags - 1);
  };

  const dragHandlers = { onStart: onStart, onStop: onStop };
  
  return (
    <>
      {props.playerList.length > 0 && props.playerList.map((player, idx) => {
        console.log(player.name)
        return (
          <Draggable bounds="parent" {...dragHandlers} onStop={(x) => {
            updateTokenLocation(player, x)}}>
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
  };
};

const mapDispatchToProps = { updateTokenLocation };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Token); 
