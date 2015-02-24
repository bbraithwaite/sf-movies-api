'use strict';

var content = require('./content');
var locations = require('./locations');
var search = require('./search');

module.exports = function(server) {
	server.get('/movies/content', content);
	server.get('/movies/locations', locations);
	server.get('/movies/search', search);
};
