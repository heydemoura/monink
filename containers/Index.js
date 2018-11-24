'use strict';

const path = require('path');
const fs = require('fs');
const importJsx = require('import-jsx');
const {h, Component, Color} = require('ink');
const { connect } = require('ink-redux');
const Box = require('ink-box');

const act = require('../store/actions/logs');

const Logs = importJsx('../components/Logs')

class Index extends Component {
  componentDidMount() {
    const { logs, pushData, setFile } =  this.props;

    const filePath = path.resolve(__dirname, '../data.txt');
    setFile(filePath);

    let logStream = fs.createReadStream(filePath, {
      encoding: 'utf-8'
    })

    logStream.on('data', chunk => {
      setTimeout(() => pushData(chunk), 1000);
    });
  }

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
  setFile: act.setFile,
  pushData: act.pushData,
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Index);
