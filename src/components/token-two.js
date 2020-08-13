import React, { useState } from 'react';
import { connect } from 'react-redux';
import Draggable, {DraggableCore} from 'react-draggable';
import { Avatar } from '@material-ui/core';
import { updateTokenLocation } from '../store/players.js';
// import '../scss/tokens.scss'


const Token = (props) => {
  console.log('props from token', props);

  const [activeDrags, setActiveDrags] = useState(0);

  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  // const [controlledPosition, setControlledPosition] = useState({ x: -400, y: 200 });


  // eventLogger = (e: MouseEvent, data: Object) => {
  //     console.log('Event: ', e);
  //     console.log('Data: ', data);
  // };


  // TODO: defaultPosition property should contain a function that ties the player token to state and our turn-taking functionality || disabled property is a boolean so we can toggle it by state.
  // TODO: When a player's turn ends, we need set the property "axis" to the string of 'none', which stops the piece from moving.


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
        // const color = this.props.playerList[idx].color;
        return (
          <Draggable bounds="parent" {...dragHandlers}>
            <Avatar key={idx} className={`classes.orange`}> {props.playerList[idx].name[0]} </Avatar>
          </Draggable>
          // <Draggable onDrag={this.handleDrag} {...dragHandlers}>
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
    tokens: [...state.players],
  };
};

const mapDispatchToProps = { updateTokenLocation };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Token); 
