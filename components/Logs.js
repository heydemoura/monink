'use strict';

const fs = require('fs');
const path = require('path');
const {h, Component, Color} = require('ink');
const { connect } = require('ink-redux');
const PropTypes = require('prop-types');
const Box = require('ink-box');

class Logs extends Component {
	render() {
    const { logs } = this.props;
		return (
      <span>
        <Color white>
          Logs ({logs.data.length})
        </Color>
        <Box borderStyle="round" borderColor="cyan" padding={1} margin={{top: 1, bottom: 0}}>
          <span>
            <Color white>
              {logs.data}
            </Color>
          </span>
        </Box>
      </span>
		);
	}
}

const mapStateToProps = state => ({
  logs: state.logs
});

const mapDispatchToProps = {
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Logs);
