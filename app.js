'use strict';

var express = require('express');
var app = express();
var router = express.Router();

var bodyParser = require('body-parser');

var api = require('./backend/api');

// Serve static files
app.use('/node_modules', express.static(__dirname + '/node_modules')); //  TODO: Remove this
app.use('/static', express.static(__dirname + '/frontend/dist/static'));

// Configure body-parser for POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//  Send all /api calls to the api
api(router);
app.use('/api', router);

//  Send all other requests to the webapp.
app.use(function(req, res){
	res.status(200).sendFile(__dirname+'/frontend/dist/index.html');
});

//  Start the server
if (module === require.main) {
    var server = app.listen(process.env.PORT || 8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
  });
}

module.exports = app;