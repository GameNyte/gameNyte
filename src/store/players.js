const initialState = [{
  name: "Melissa",
  color: "blue",
  score: 0,
},
{
  name: "Dave",
  color: "grey",
  score: 0,
},
{
  name: "Ruhai",
  color: "red",
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