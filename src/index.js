
import React from 'react';
import ReactDOM from 'react-dom';


import Room from './components/room.js';
import Chat from './components/chat.js';
import { Provider } from 'react-redux';
import store from './store';
import { makeStyles } from '@material-ui/core/styles';


import Header from './components/header.js';
import Board from './components/board.js';


const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'space-between',
  },
  roomModule: {

  }
}));


const App = () => {

  const classes = useStyles();

  return (

  <Provider store={store}>
    <Header />
    <div className={classes.root}>
    <Room className={classes.roomModule}/>
    {/* <Board /> */}
    <Chat />
    </div>
  </Provider>

  );

};

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);

