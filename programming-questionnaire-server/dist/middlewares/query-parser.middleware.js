"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var URL = _interopRequireWildcard(require("url"));

/**
 * Parses the request parameters and assigns them to the request body
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 */
var parseQueryParams = function parseQueryParams(req, res, next) {
  req.parsedQuery = URL.parse(req._parsedUrl);
  next();
};

var _default = parseQueryParams;
exports["default"] = _default;
//# sourceMappingURL=query-parser.middleware.js.map