import roomReducer from '../store/room.js';
import { createRoom, joinRoom, leaveRoom, connectSocket } from '../store/room.js';



describe ('Testing our Room store reducers', () => {
  it('returns proper state for CREATE', () => {
    const initialState = {room: '', socket: ''};

    let testAction = {
      type: 'CREATE',
      payload: 'room name'
    }

    let stateOutput = roomReducer(initialState, testAction);
    expect(stateOutput).toEqual({'room': testAction.payload, socket: ''});
  });

  it('returns proper state for JOIN', () => {
    const initialState = {room: '', socket: ''};

    let testAction = {
      type: 'JOIN',
      payload: 'room name'
    }

    let stateOutput = roomReducer(initialState, testAction);
    expect(stateOutput).toEqual({'room': testAction.payload, socket: ''});
  });

  it('returns proper state for LEAVE', () => {
    const initialState = {room: '', socket: ''};

    let testAction = {
      type: 'LEAVE',
      payload: ''
    }

    let stateOutput = roomReducer(initialState, testAction);
    expect(stateOutput).toEqual(initialState);
  });

  it('returns proper state for CONNECT', () => {
    const initialState = {room: '', socket: ''};

    let testAction = {
      type: 'CONNECT',
      payload: {'socketObject': 'socketObject'}
    }

    let stateOutput = roomReducer(initialState, testAction);
    expect(stateOutput).not.toBe(null);
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

  it('connectSocket returns info', () => {

    let expectedResult = {
      type: 'CONNECT',
      payload: 'url'
    }

    let results = connectSocket();
    expect(results).not.toBe(null);
    
  });

  
});