const {
  SET_FILE,
  SET_DATA,
  PUSH_DATA,
} = require('../constants/logs');

module.exports.setFile = file => ({
  type: SET_FILE,
  payload: { file }
});

module.exports.setData = data => ({
  type: SET_DATA,
  payload: { data }
});

module.exports.pushData = entry => ({
  type: PUSH_DATA,
  payload: { entry }
})
