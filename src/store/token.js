
// const { default: players } = require("./players");

//needs to be a copy of all the players as well as x amount of extra players based on how many tokens were created ... 

const tokens = [];
// , ...extraTokens
const extraTokens = [];


const initialState = {
  tokens: [],
  extraTokens: [],
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case 'CREATE_TOKENS':
      return { ...state, tokens: [...payload] };

    case 'ADD_TOKEN':
      return { ...state, extraTokens: [...payload], tokens: [...tokens, ...extraTokens] };

    case 'RESET_TOKENS':
      return initialState;

    case 'UPDATE_LOCATION':
      return { ...state, } // need to update ALL tokens.player.location - the entire location

    default:
      return state;
  }
}

export const createTokens = (players) => {
  return {
    type: 'CREATE_TOKENS',
    payload: players,
  }
}

export const addToken = () => {

}

export const resetTokens = () => {

}

export const updateTokenLocation = (players) => {
  return {
    type: 'UPDATE_LOCATION',
    payload: players,
  }
}