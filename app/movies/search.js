'use strict';

/**
 * Module dependencies.
 */

var url = require('url');
var sfMoviesLogic = require('sf-movies-logic');

/**
 * Controller Action for GET.
 */

module.exports.get = function(req, res, next) {
	var query = url.parse(req.url, true).query.q;
	sfMoviesLogic.search(query, function(err, data) {
		next.ifError(err);
		res.json(data.splice(0, 10));
		return next();
	});
};
