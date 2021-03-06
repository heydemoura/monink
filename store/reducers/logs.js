const C = require('../constants/logs');
const initialState = {
  file: '',
  data: []
}

module.exports = function logsReducer(state = initialState, action) {
  switch (action.type) {
    case C.SET_FILE:
      return {
        ...state,
        file: action.payload.file
      }
    case C.SET_DATA:
      return {
        ...state,
        data: action.payload.data
      }

    case C.PUSH_DATA:
      const { data } = state; 
      data.push(action.payload.entry);
      return {
        ...state,
        data,
      }
  }

  return state;
}
