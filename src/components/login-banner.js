import React, { useState } from 'react';
import { makeStyles, Modal, TextField, FormLabel, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { createAccount, login } from '../store/login.js';



// import useForm from '../hooks/use-form.js';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',

    },
  },
}));

const SimpleModal = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Login or create account</h2>
      <p id="simple-modal-description">
        Welcome to Game Nyte!
      </p>

      {/* <a target="_blank" href="https://discord.com/api/oauth2/authorize?client_id=742459492511252501&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth&response_type=code&scope=identify">Login with Discord</a> */}

      <form   
         className={classes.root} noValidate autoComplete="off">

      <FormLabel component="legend">Login to Game Nyte</FormLabel>
        <TextField name="username" value={username} onChange={(e) => setUsername(e.target.value)} id="filled-basic" label="User Name" variant="filled" />
        <TextField name="password" value={password} onChange={(e) => setPassword(e.target.value)} id="filled-basic" label="Password" variant="filled" />
        <Button onClick={ (e) => {
        e.preventDefault();
        props.login({username, password})}
      }  color="primary">Login</Button>
        
      </form>
      
      <form onSubmit={(e) => {
        e.preventDefault();
        props.createAccount(e)} 
      }
        className={classes.root} noValidate autoComplete="off">
      <FormLabel component="legend">Create Account</FormLabel>
        <TextField name="username" value="" id="filled-basic" label="User Name" variant="filled" onChange={
          (e) => {
            
            // handleChange(e);
          }
        }/>
        <TextField name="password" value="" id="filled-basic" label="Password" variant="filled" onChange={
          (e) => {
        
            // handleChange(e);
          }
        }/>
        <Button type="submit"  color="primary">Create Account</Button>
        
      </form>

          
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {  

  return {
    userInfo: state.login,        
  };
};

const mapDispatchToProps = { createAccount, login };


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleModal);