import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { createRoom, joinRoom, leaveRoom, connectSocket } from '../store/room.js';
import { createPlayers, leavePlayers } from '../store/players.js';



const Room = (props) => {
  

  const [input, setInput] = useState('');
  
  
  useEffect(() => {  
    props.connectSocket();    
  }
, []);


useEffect(() => { 
  if (Object.keys(props.socket).length) {
  addPlayer();
  console.log(props.room);
  }
}
, [props.room.room]);



if (Object.keys(props.socket).length) {

  

  props.socket.on('new-room', (results) => {
    props.createRoom(results);
  })
  
  props.socket.on('update-players', (results) => {
    props.createPlayers(results);
  })
};

  function addPlayer() {
    
    const player = {
      'name': props.user,
      'room': props.room.room,
    }
    props.socket.emit('player', player);

  }


  function makeRoom() {  
    props.socket.emit('createRoom');  
  }

  function enterRoom() {    
    props.socket.emit('join', input);
    props.joinRoom(input);
    setInput('');
  }

  function exitRoom() {  
    props.socket.emit('leave', props.room.room);
    props.leaveRoom();
    props.leavePlayers();
    
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
    user: state.login.userInfo.username, 
    players: state.players       
  };
};

const mapDispatchToProps = { createRoom, joinRoom, leaveRoom, connectSocket, createPlayers, leavePlayers };


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Room);
