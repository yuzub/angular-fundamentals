var express = require('express');
var path = require('path');
var open = require('open');
// var events = require('./eventsController');
var port = 8000;
var app = express();
var rootPath = path.normalize(__dirname + '/../');
// var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
app.use(express.static( rootPath + '/app'));
/*
app.get('/data/event/:id', events.get);
app.get('/data/event', events.getAll);
app.post('/data/event/:id', events.save);
app.get('*', function(req, res) { res.sendFile(rootPath + '/app/index.html'); });
*/
app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log('Listening on port ' + 8000 + '...');
		open('http://localhost:' + port);
	}
});


// server from course Building js-dev-environment
/*import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});*/