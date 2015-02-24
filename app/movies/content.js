'use strict';

/**
 * Module dependencies.
 */

var url = require('url');
var sfMoviesLogic = require('sf-movies-logic');

/**
 * Controller Action for content GET.
 */

module.exports = function(req, res, next) {
	var qs = url.parse(req.url, true).query;
	sfMoviesLogic.content(qs.title, qs.director, function(err, data) {
		next.ifError(err);
		res.json(data);
		return next();
	});
};
