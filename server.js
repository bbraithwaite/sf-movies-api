'use strict';

/**
 * Module dependencies.
 */

var restify = require('restify');
var port = (process.env.PORT || 5000);

/**
 * Create server object.
 **/
var server = restify.createServer({
  name: 'sf-movies-api'
});

/**
 * Register Middleware.
 **/
server.use(restify.CORS());

/**
 * Register api modules.
 **/
require('./app/movies')(server);

/**
 * Start listening on server.
 **/
server.listen(port, function listenMessage() {
	console.log('Server running at http://127.0.0.1:' + port);	
});
