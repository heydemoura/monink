'use strict';

const fs = require('fs');
const path = require('path');
const {h, Component, Color} = require('ink');
const { connect } = require('ink-redux');
const PropTypes = require('prop-types');
const Box = require('ink-box');

class Logs extends Component {
  renderLogs(count = 0) {
    const { logs } = this.props;
    logs.data
      .splice(0, logs.data.length - count - 1)

    return logs.data
      .map(r => <div><Color white>{r}</Color></div>)
  }

	render() {
    const { logs } = this.props;
		return (
      <Box borderStyle="round" borderColor="cyan" padding={1} margin={{top: 1, bottom: 1}}>
        <span>
          {this.renderLogs(5)}
        </span>
      </Box>
		);
	}
}

const mapStateToProps = state => ({
  logs: state.logs
});

const mapDispatchToProps = {
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Logs);
