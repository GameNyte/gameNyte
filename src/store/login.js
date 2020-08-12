const initialState = {
  userInfo: '',
  
}


export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {


    case 'CREATE_ACCOUNT':
      return { ...state, userInfo: payload.username};

    case 'LOGIN':
      return {...state, userInfo: payload.username };
    
   
      default:
      return state;
  }
}

export const createAccount = (userInfo) => {
  return {
    type: 'CREATE_ACCOUNT',
    payload: userInfo,
  }
}

export const login = (username, password) => {
  const userInfo = { 'username': username, 'password': password };
  return {
    type: 'LOGIN',
    payload: userInfo,
  }
}

