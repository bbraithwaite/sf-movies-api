'use strict';

/**
 * Module dependencies.
 */

var content = require('./content');
var locations = require('./locations');
var search = require('./search');

/**
 * Register module routes.
 */

module.exports = function(server) {
	server.get('/movies/content', content);
	server.get('/movies/locations', locations);
	server.get('/movies/search', search);
};
