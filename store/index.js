const { createStore, combineReducers } = require('redux');
const path = require('path');
const fs = require('fs');

let reducers = fs.readdirSync(path.resolve(__dirname, 'reducers/'), {
  encoding: 'utf-8'
});

reducers = combineReducers(reducers
  .map(r => r.replace(/\.js/gi, ''))
  .reduce((acc, curr) => {
    acc[curr] = require(`./reducers/${curr}`);
    return acc;
  }, {})
);

const store = createStore(reducers);

module.exports = store;
