const {h, render, Component, Color } = require('ink');
const Box = require('ink-box');

class Counter extends Component {
	constructor() {
		super();

		this.state = {
			i: 0
		};
	}

	render() {
		return (
      <Box>
        <Color green>
          {this.state.i} tests passed
        </Color>
      </Box>
		);
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				i: this.state.i + 1
			});
		}, 100);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}
}

module.exports = Counter;
