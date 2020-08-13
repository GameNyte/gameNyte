import React, { useState } from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import If from '../components/if.js';
const jwt = require('jsonwebtoken');

const SECRET = 'secretsignature'; //FIXME: this needs to come from process.env.SECRET... but having trouble getting it to find it(or find it in time?)

const Header = (props) => {
  const classes = useStyles();

  const [username, setUsername] = useState('');

  let reqToken = (window.location.href).split('=')[1];

  async function verifyAndSetUsername(token) {

    if (reqToken) {
      let userFromJWT = await jwt.verify(reqToken, SECRET);
      console.log('userFromJWT.username', userFromJWT.username);

      if (username === '') {
        console.log('inside of setting username space');
        setUsername(userFromJWT); //TODO: get this to actually set to state
        console.log('username from state: ', username)
      }
    }
  }

  verifyAndSetUsername(reqToken);

  return (
    <div className={classes.header}>
      <AppBar position="static">
        <Typography className={classes.title} component="h1">Game Nyte</Typography>
        {/* <If condition={displayName}>
          <Typography component="h3">Welcome, {displayName}!</Typography>
        </If> */}
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    alignItems: 'center'
  },
  toolbar: {
    alignItems: 'center'
  }
}));

export default Header;