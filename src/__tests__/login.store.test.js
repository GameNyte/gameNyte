import loginReducer from '../store/login.js';
import { createAccount, login } from '../store/login.js';



describe ('Testing our Login store reducers', () => {
  it('returns proper state for CREATE_ACCOUNT', () => {
    const initialState = {userInfo: ''};

    let testAction = {
      type: 'CREATE_ACCOUNT',
      payload: { username: 'user', password: 'test' }
    }

    let stateOutput = loginReducer(initialState, testAction);
    expect(stateOutput).toEqual({'userInfo': testAction.payload.username});
  });

  it('returns proper state for LOGIN', () => {
    const initialState = {userInfo: ''};

    let testAction = {
      type: 'LOGIN',
      payload: { username: 'user', password: 'test' }
    }

    let stateOutput = loginReducer(initialState, testAction);
    expect(stateOutput).toEqual({'userInfo': testAction.payload.username});
  });

  
});

describe ('Testing our Login store actions', () => {
  it('createAccount returns expected info', () => {

    let expectedResult = {
      type: 'CREATE_ACCOUNT',
      payload: { username: 'user', password: 'test' }
    }

    let results = createAccount({ username: 'user', password: 'test' });
    expect(results).toEqual(expectedResult);
  });

  it('login returns expected info', () => {

    let expectedResult = {
      type: 'LOGIN',
      payload: { username: 'user', password: 'test' }
    }

    let results = login( 'user', 'test');
    expect(results).toEqual(expectedResult);
  });
  
});