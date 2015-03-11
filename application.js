'use strict';

/**
 * Module dependencies.
 */

var restify = require('restify');

module.exports = function(server) {
	/**
	 * Register Middleware.
	 **/
	server.use(restify.CORS());

	/**
	 * Register api modules.
	 **/
	require('./app/movies')(server);
};