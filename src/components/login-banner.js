import React, { useState } from 'react';
import { makeStyles, Modal, TextField, FormLabel, Button, IconButton } from '@material-ui/core';
import { connect } from 'react-redux';
import { createAccount, login } from '../store/login.js';
import FaceIcon from '@material-ui/icons/Face';


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
  formRoot: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  formHeader:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  form:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  }
}));

const SimpleModal = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const [username, setUsername] = useState('');


  const handleOpen = () => {
  setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div className={classes.form} >
        <div className={classes.formHeader}>
      <h2 id="simple-modal-title">Login or create account</h2>
      <p id="simple-modal-description">
        Welcome to Game Nyte!
      </p>

      <a href="https://discord.com/api/oauth2/authorize?client_id=742459492511252501&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth&response_type=code&scope=identify">
      <img src="https://img.icons8.com/clouds/100/000000/discord-logo.png"/>
        </a>
  
        </div>

      <form onSubmit={(e) => {
        e.preventDefault();
        props.createAccount(e)} 
      }
        className={classes.formRoot} noValidate autoComplete="off">
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

    </div>
  );

  return (
    
    <div>

      <IconButton onClick={handleOpen} color="inherit" aria-label="menu">
      <FaceIcon/>
    </IconButton>

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