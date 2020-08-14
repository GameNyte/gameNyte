const initialState = [{
  name: 'Melissa',
  room: 'happyDaze',
  score: 0,
  location: {
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    }
  }
},
{
  name: "Dave",
  score: 0,
},
{
  name: "Ruhai",
  score: 0,
}
];


export default (state = initialState, action) => {
  const { type, payload } = action;


  switch (type) {


    case 'ADD':
      return [payload];

    case 'QUIT':
      return initialState;

    case 'UPDATE_LOCATION':
      return { ...state, } // need to update ALL tokens.player.location - the entire location


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


export const updateTokenLocation = (something) => {
  console.log(something);
  return {
    type: 'UPDATE_LOCATION',
    payload: something,
  }
}
