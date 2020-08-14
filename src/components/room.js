import React, { useState, useEffect } from 'react';
import { Button, TextField, Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import { createRoom, joinRoom, leaveRoom, connectSocket } from '../store/room.js';
import { createPlayers, leavePlayers } from '../store/players.js';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  RoomRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40vw',
    margin: '20px',
    marginLeft: '-15px'
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '2em'
  },
  joinRoom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
  },
  button: {
    margin: '10px',
  }
}));






const Room = (props) => {
  const classes = useStyles();

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
      'score': 0,
      'location': {
        'activeDrags': 0,
        'deltaPosition': {
          'x': 0,
          'y': 0,
        },
        'controlledPosition': {
          'x': -400,
          'y': 200,
        }
      }
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

    < >
      <div className={classes.RoomRoot}>
        <Paper>
          <div className={classes.buttonsContainer}>
            <Button className={classes.button}
              variant="contained"
              color="primary"

              onClick={(e) => {
                e.preventDefault();
                makeRoom();
              }}
            >Create </Button>
            <Button className={classes.button}
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                exitRoom();
              }}
            >Leave </Button>
          </div>
          <form className={classes.joinRoom}>
            <TextField placeholder="Room ID" value={input} label="Room" onChange={
              (e) => {
                setInput(e.target.value);
                console.log(input);
              }
            }></TextField>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                e.preventDefault();
                enterRoom();
              }}
            >Join</Button>
          </form>
          <h1>Room: {props.room.room}</h1>


        </Paper>
      </div>

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
