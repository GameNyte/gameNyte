import React, { useState, useEffect } from 'react';
import { Button, TextField, Paper, Typography, List, ListItem } from '@material-ui/core';
import { connect } from 'react-redux';




const Chat = (props) => {

  const [input, setInput] = useState('');
  const [messageArchive, setMessageArchive] = useState([]);

  if (Object.keys(props.socket).length) {
    props.socket.on('message', (results) => {
      setMessageArchive([...messageArchive, results])
    })
  };

  if (Object.keys(props.socket).length) {
    props.socket.on('load-messages', (results) => {
      setMessageArchive(results);
    })
  };

   
  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      createdAt: `${new Date()}`,
      text: input,
      room: props.room.room,
      // user: props.user,
  }
    props.socket.emit('message', payload);
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
        <Paper >
        <Typography component="h3">Messages</Typography>
        <List >{messageArchive.map((data, idx) => <ListItem key={idx}>{data}</ListItem>)}</List>
        </Paper>
    </>


  )
};




const mapStateToProps = state => {  

  return {
    room: state.room, 
    socket: state.room.socket 
    // user: state.user      
  };
};

// const mapDispatchToProps = { createRoom, joinRoom, leaveRoom };


export default connect(
  mapStateToProps,
  null,
)(Chat);