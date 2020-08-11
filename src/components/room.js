import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { createRoom, joinRoom, leaveRoom } from '../store/room.js';

const io = require('socket.io-client');








const Room = (props) => {

  const [input, setInput] = useState('');

  const socket = io('http://localhost:3000');
  
  socket.on('new-room', (results) => {
    console.log('new room results: ', results);
    props.createRoom(results.id);
  }) 

 
  

  function makeRoom() {
    console.log('createRoom from client running');
    socket.emit('createRoom');
  }

  function enterRoom() {
    console.log('input from enterRoom: ', input);
    
    socket.emit('join', input);
    props.joinRoom(input);
    setInput('');
  }

  console.log(props.room);

  return (
    <>
      <Button
        onClick={(e) => { 
          e.preventDefault();
          makeRoom();
          console.log('button clicked');
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
        console.log('button clicked');
      }}
      >Join Room</Button>
      </form>
      <h1>Room: {props.room.room}</h1>
    </>


  )
};

const mapStateToProps = state => {  

  return {
    room: state.room,        
  };
};

const mapDispatchToProps = { createRoom, joinRoom, leaveRoom };


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Room);
