'use strict';

const importJsx = require('import-jsx');
const {h, Component, Color} = require('ink');
const { connect } = require('ink-redux');
const Box = require('ink-box');

const Logs = importJsx('../components/Logs')

class Index extends Component {
  render() {
    return (
      <Logs />
    )
  }
}

const mapStateToProps = state => ({
  logs: state.logs
});

const mapDispatchToProps = {
  onIncrement: () => ({type: 'INCREMENT'})
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Index);
