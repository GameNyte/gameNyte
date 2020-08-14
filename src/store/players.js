const initialState = [];



export default (state = initialState, action) => {
  const { type, payload } = action;


  switch (type) {


    case 'ADD':
      return payload;

    case 'QUIT':
      return initialState;

    case 'UPDATE':
      // return {...state, state[payload.name]:{'x':payload.x, 'y':payload.y}}


    default:
      return state;
  }
}

export const createPlayers = (player) => {
  return {
    type: 'ADD',
    payload: player,
  }
}



export const leavePlayers = (player) => {
  return {
    type: 'QUIT',
    payload: player,
  }
}


export const updateTokenLocation = (player, x) => {
  const location = { 'name': player.name, 'x': x.x, 'y': x.y}
  return {
    type: 'UPDATE',
    payload: location, 
  }
}
