'use strict';

const importJsx = require('import-jsx');
const { h, Component } = require('ink');
const { Provider } = require('ink-redux');
const PropTypes = require('prop-types');

const store = require('./store');

const Index = importJsx('./containers/Index');

class UI extends Component {
	render() {
		return (
      <Provider store={store}>
        <Index/>
      </Provider>
		);
	}
}

UI.propTypes = {
	name: PropTypes.string
};

UI.defaultProps = {
	name: 'Ink'
};

module.exports = UI;
