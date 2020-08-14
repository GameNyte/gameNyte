import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import { Button, TextField, Paper, List, ListItem } from '@material-ui/core';
import { connect } from 'react-redux';




const useStyles = makeStyles((theme) => ({
  messengerRoot: {
    display:'flex',
    flexDirection:'column-reverse',
    alignItems:'center',
    justifyContent:'center',
    
  },
  sendMessages: {
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    margin:'5px',
  },
  view: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'20vw',
    height:'50vw',
  }
}));



const Chat = (props) => {
  const classes = useStyles();

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
  }
    props.socket.emit('message', payload);
    setInput('');
  }

  return (
    <>
    <div className={classes.messengerRoot}>
      <form className={classes.sendMessages} onSubmit={handleSubmit}>
        <TextField label="Message" value={input} placeholder="Write a message" onChange={
        (e) => {
          setInput(e.target.value);
        } }/>
          <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
      </form>

        <Paper className={classes.view}>
        <List >{messageArchive.map((data, idx) => <ListItem key={idx}>{data}</ListItem>)}</List>
        </Paper>
        </div>

    </>


  )
};



const mapStateToProps = state => {  

  return {
    room: state.room, 
    socket: state.room.socket      
  };
};


export default connect(
  mapStateToProps,
  null,
)(Chat);