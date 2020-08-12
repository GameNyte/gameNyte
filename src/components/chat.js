import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
// import Room from '../store/room.js';


const io = require('socket.io-client');



const Chat = (props) => {

  const [input, setInput] = useState('');

  const socket = io('http://localhost:3000');

  socket.on('message', (results) => {
    console.log('message results: ', results);
  })

 
  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      createdAt: `${new Date()}`,
      text: input,
      room: props.room.room,
      // user: props.user,
  }
    socket.emit('message', payload);
    setInput('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField label="Message" value={input} placeholder="Write a message" onChange={
        (e) => {
          setInput(e.target.value);
        } }/>
        <Button type="submit" variant="outlined">Send Message</Button>
      </form>
        {/* <Paper >
        <Typography component="h3">Messages</Typography>
        <List >{messages.map((data, idx) => <ListItem key={idx}>{data.text}</ListItem>)}</List>
        </Paper> */}
    </>


  )
};




const mapStateToProps = state => {  

  return {
    room: state.room,  
    // user: state.user      
  };
};

// const mapDispatchToProps = { createRoom, joinRoom, leaveRoom };


export default connect(
  mapStateToProps,
  null,
)(Chat);