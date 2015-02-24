'use strict';

var url = require('url');
var sfMoviesLogic = require('sf-movies-logic');

module.exports = function(req, res, next) {
	var qs = url.parse(req.url, true).query;
	sfMoviesLogic.content(qs.title, qs.director, function(err, data) {
		next.ifError(err);
		res.json(data);
		return next();
	});
};
