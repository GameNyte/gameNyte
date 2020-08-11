import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';

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

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

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

      <a target="_blank" href="https://discord.com/api/oauth2/authorize?client_id=742459492511252501&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth&response_type=code&scope=identify">Login with Discord</a>

      <form className={classes.root} noValidate autoComplete="off">
      <FormLabel component="legend">Login to Game Nyte</FormLabel>
        <TextField id="filled-basic" label="User Name" variant="filled" />
        <TextField id="filled-basic" label="Password" variant="filled" />
        
      </form>
      
      <form className={classes.root} noValidate autoComplete="off">
      <FormLabel component="legend">Create Account</FormLabel>
        <TextField id="filled-basic" label="User Name" variant="filled" />
        <TextField id="filled-basic" label="Password" variant="filled" />
        
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