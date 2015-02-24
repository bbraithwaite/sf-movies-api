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
	var qs = url.parse(req.url, true).query;
	sfMoviesLogic.locations(qs.title, qs.director, function(err, data) {
		next.ifError(err);
		res.json(data);
		return next();
	});
};
