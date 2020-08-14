import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createAccount, login } from '../store/login.js';
import { AppBar, Typography, IconButton, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginBanner from './login-banner.js'
// import GameHUD from './gameHUD.js'
import If from '../components/if.js';

const jwt = require('jsonwebtoken');

const SECRET = 'secretsignature'; //FIXME: this needs to come from process.env.SECRET... but having trouble getting it to find it(or find it in time?)

const Header = (props) => {
  const classes = useStyles();

  let reqToken = (window.location.href).split('=')[1];


    useEffect(() => {
      if (reqToken) {
      let userFromJWT = jwt.verify(reqToken, SECRET);
      console.log('userFromJWT.username', userFromJWT.username);
    
      props.login({ 'username': userFromJWT.username });
    
      console.log('props.userInfo from state: ', props.userInfo)
      }
    }
    , []);


  return (

    <AppBar position="static">
      <div className={classes.header}>
        <div className={classes.title}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

            <GameHUD />
          </IconButton>
          <Typography style={{ fontSize: 32 }} className={classes.title} component="h1">Game Nyte</Typography>
        </div>
        {/* <If condition={displayName}>
          <Typography component="h3">Welcome, {displayName}!</Typography>
        </If> */}
        <LoginBanner />

      </div>
    </AppBar>
  )
}

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px',
    margin: '5px',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const mapStateToProps = state => {

  return {
    userInfo: state.login,
  };
};

const mapDispatchToProps = { createAccount, login };


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);