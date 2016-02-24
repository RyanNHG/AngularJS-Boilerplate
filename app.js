'use strict';

var express = require('express');

var app = express();

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/static', express.static(__dirname + '/frontend/dist'));

app.use(function(req, res){
	res.status(200).sendFile(__dirname+'/frontend/dist/index.html');
});

if (module === require.main) {
  var server = app.listen(process.env.PORT || 8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
  });
}

module.exports = app;

