
const initialState = [ 
  {name: 'bob'},
  {name: 'carl'}

];


export default (state = initialState, action) => {
  const { type, payload } = action;


  switch (type) {


    case 'ADD':
      return [payload];

    case 'QUIT':

      return initialState;  
    
    case 'UPDATE': 
      return state.map((player, idx) => {
        if(player.name === payload[2].name)  {
          return{...player, x: payload[0], y: payload[1]};
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


export const updatePlayers = (player) => {
  return {
    type: 'UPDATE',
    payload: player,
  }
}

