const initialState = [];



export default (state = initialState, action) => {
  const { type, payload } = action;  


  switch (type) {

    case 'ADD':
      return payload;

    case 'QUIT':
      return initialState;

    case 'UPDATE_LOCATION':      
    
      return state.map((player, idx) => {
        if(player.name === payload.name)  {
          return payload 
        }
        return player
      });


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


export const updateTokenLocation = (player) => {
  return {
    type: 'UPDATE_LOCATION',
    payload: player, 
  }
}
