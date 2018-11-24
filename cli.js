#!/usr/bin/env node
'use strict';

const importJsx = require('import-jsx');
const {h, render} = require('ink');
const meow = require('meow');

const Ui = importJsx('./ui');
const cli = meow(`
	Usage
	  $ me-heydemoura-monink [input]

	Options
	  --name  Lorem ipsum [Default: false]

	Examples
	  $ me-heydemoura-monink
	  I love Ink
	  $ me-heydemoura-monink --name=ponies
	  I love ponies
`);

render(h(Ui, cli.flags));
