import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <AppBar position="static">
        <Typography className={classes.title} component="h1">Game Nyte</Typography>
        <Toolbar classname={classes.toolbar}>

             <a target="_blank" href="https://discord.com/api/oauth2/authorize?client_id=742459492511252501&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Foauth&response_type=code&scope=identify">Login with Discord</a>

        </Toolbar>
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