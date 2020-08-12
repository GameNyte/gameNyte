import roomReducer from '../store/room.js';
import { createRoom, joinRoom, leaveRoom } from '../store/room.js';



describe ('Testing our Room store reducers', () => {
  it('returns proper state for CREATE', () => {
    const initialState = {room: ''};

    let testAction = {
      type: 'CREATE',
      payload: 'room name'
    }

    let stateOutput = roomReducer(initialState, testAction);
    expect(stateOutput).toEqual({'room': testAction.payload});
  });

  it('returns proper state for JOIN', () => {
    const initialState = {room: ''};

    let testAction = {
      type: 'JOIN',
      payload: 'room name'
    }

    let stateOutput = roomReducer(initialState, testAction);
    expect(stateOutput).toEqual({'room': testAction.payload});
  });

  it('returns proper state for LEAVE', () => {
    const initialState = {room: ''};

    let testAction = {
      type: 'LEAVE',
      payload: ''
    }

    let stateOutput = roomReducer(initialState, testAction);
    expect(stateOutput).toEqual(initialState);
  });
});

describe ('Testing our Room store actions', () => {
  it('createRoom returns expected info', () => {

    let expectedResult = {
      type: 'CREATE',
      payload: 'room name'
    }

    let results = createRoom('room name');
    expect(results).toEqual(expectedResult);
  });

  it('joinRoom returns expected info', () => {

    let expectedResult = {
      type: 'JOIN',
      payload: 'room name'
    }

    let results = joinRoom('room name');
    expect(results).toEqual(expectedResult);
  });

  it('leaveRoom returns expected info', () => {

    let expectedResult = {
      type: 'LEAVE',
    }

    let results = leaveRoom();
    expect(results).toEqual(expectedResult);
  });

  
});