const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case 'UPDATE_MAPS':
      return [...state, payload];

    default:
      return state;
  }
}

export const handleAwsRes = (filename) => {
  return {
    type: 'UPDATE_MAPS',
    payload: filename,
  }
}
