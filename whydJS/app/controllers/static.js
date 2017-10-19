/**
 * static controller
 * redirects to static files
 * @author adrienjoly, whyd
 */
/**
 * subdir controller
 * maps to another controller, based on the path
 * @author adrienjoly, whyd
 */

var config = require("../models/config.js");
var runsLocally = config.urlPrefix.indexOf("localhost") != -1;

var STATIC_FILES = {
	"/favicon.ico": "/images/favicon.ico",
	"/favicon.png": "/images/favicon.png"
};

exports.controller = function(request, reqParams, response) {
	var path = request.url.split("?")[0];

	for (var i in STATIC_FILES)
		if (i == path)
			return response.temporaryRedirect(STATIC_FILES[i]);

	response.temporaryRedirect(path + "/"); // /index.html
};