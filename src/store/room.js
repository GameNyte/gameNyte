const io = require('socket.io-client');

const initialState = {
  room: '',
  socket: '',
}


export default (state = initialState, action) => {
  const { type, payload } = action;


  switch (type) {


    case 'CREATE':
      return {...state, room: payload};

    case 'JOIN':
      return {...state, room: payload};

    case 'LEAVE':
      return initialState;  

    case 'CONNECT':
      const socket = io(payload);
      return {...state, 'socket': socket};

    default:
      return state;
  }
}

export const createRoom = (room) => {
  return {
    type: 'CREATE',
    payload: room,
  }
}

export const connectSocket = () => {
  return {
    type: 'CONNECT',
    payload: 'https://gamenyte-server.herokuapp.com/',
  }
}

export const joinRoom = (room) => {
  return {
    type: 'JOIN',
    payload: room,
  }
}

export const leaveRoom = () => {
  return {
    type: 'LEAVE',
  }
}