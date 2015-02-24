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
	server.get('/movies/content', content.get);
	server.get('/movies/locations', locations.get);
	server.get('/movies/search', search.get);
};
