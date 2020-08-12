
const initialState = {
  room: '',
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