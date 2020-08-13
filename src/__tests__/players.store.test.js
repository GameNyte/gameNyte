import playersReducer from '../store/players.js';
import { createPlayers, leavePlayers } from '../store/players.js';



describe ('Testing our Players store reducers', () => {
  it('returns proper state for ADD', () => {
    const initialState = [];

    let testAction = {
      type: 'ADD',
      payload: [{name: 'user', room: 'test'}] 
    }

    let stateOutput = playersReducer(initialState, testAction);
    expect(stateOutput[0]).toEqual(testAction.payload);
  });

  it('returns proper state for QUIT', () => {
    const initialState = [];

    let testAction = {
      type: 'QUIT'
    }

    let stateOutput = playersReducer(initialState, testAction);
    expect(stateOutput).toEqual(initialState);
  });

  
});

describe ('Testing our Players store actions', () => {
  it('createPlayers returns expected info', () => {

    let expectedResult = {
      type: 'ADD',
      payload: [{ name: 'user', room: 'test' }]
    }

    let results = createPlayers([{ name: 'user', room: 'test' }]);
    expect(results).toEqual(expectedResult);
  });

  it('leavePlayers returns expected info', () => {

    let expectedResult = {
      type: 'QUIT',
    }

    let results = leavePlayers();
    expect(results).toEqual(expectedResult);
  });
  
});