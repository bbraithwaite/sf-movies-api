'use strict';

/**
 * Module dependencies.
 */

var url = require('url');
var sfMoviesLogic = require('sf-movies-logic');

/**
 * Controller Action for search GET.
 */

module.exports = function(req, res, next) {
	var query = url.parse(req.url, true).query.q;
	sfMoviesLogic.search(query, function(err, data) {
		next.ifError(err);
		res.json(data);
		return next();
	});
};
