"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

/**
 * Checks specified JWT to authenticate a user via Bearer
 * Default token lifetime 86400
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 */
var checkToken = function checkToken(req, res, next) {
  var token = (req.headers.authorization || '').replace('Bearer ', '');

  if (!token) {
    res.status(401).send({
      auth: false,
      message: 'No token provided'
    });
  } else {
    _jsonwebtoken["default"].verify(token, _config["default"].secret, function (err, decoded) {
      if (err) {
        res.status(404).json({
          auth: false,
          message: 'Failed to authenticate'
        });
      } else {
        next();
      }
    });
  }
};

var _default = checkToken;
exports["default"] = _default;
//# sourceMappingURL=check-token.middleware.js.map