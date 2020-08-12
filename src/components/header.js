import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SimpleModal from './login-banner.js'

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <AppBar position="static">
        <Typography className={classes.title} component="h1">Game Nyte</Typography>
      
        <SimpleModal />
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