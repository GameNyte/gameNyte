import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { createRoom, joinRoom, leaveRoom, connectSocket } from '../store/room.js';


const Room = (props) => {

  

  const [input, setInput] = useState('');
  

  
  useEffect(() => {  
    props.connectSocket();    
  }
, []);


if (Object.keys(props.socket).length) {
  props.socket.on('new-room', (results) => {
    console.log('new room results: ', results);
    props.createRoom(results);
  })
};

  function makeRoom() {
    console.log('createRoom from client running');
    props.socket.emit('createRoom');
  }

  function enterRoom() {
    console.log('input from enterRoom: ', input);
    
    props.socket.emit('join', input);
    props.joinRoom(input);
    setInput('');
  }

  function exitRoom() {  
    props.socket.emit('leave', props.room.room);
    props.leaveRoom();
    
  }


  return (
    <>
      <Button
        onClick={(e) => { 
          e.preventDefault();
          makeRoom();          
        }}
      >Create Room</Button>
      <form id="join">
      <TextField placeholder="Room ID" value={input} label="Room" onChange={
        (e) => {
          setInput(e.target.value);
          console.log(input);
        }
        }></TextField>
      <Button
      onClick={(e) => { 
        e.preventDefault();
        enterRoom();
      }}
      >Join Room</Button>
      </form>
      <h1>Room: {props.room.room}</h1>
      <Button
      onClick={(e) => { 
        e.preventDefault();
        exitRoom();        
      }}
      >Leave Room</Button>
    </>


  )
};

const mapStateToProps = state => {  

  return {
    room: state.room,
    socket: state.room.socket,        
  };
};

const mapDispatchToProps = { createRoom, joinRoom, leaveRoom, connectSocket };


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Room);
