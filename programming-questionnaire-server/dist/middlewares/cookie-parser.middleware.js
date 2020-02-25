"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Parses cookies and assigns the values to the request body
 * 
 * @param {Object} req 
 * @param {Object} res 
 * @param {Function} next 
 */
const parseCookie = (req, res, next) => {
  let cookies = req.headers.cookie;
  let parsedCookies = {};

  if (cookies && cookies.length) {
    cookies.split(';').forEach(cookie => {
      let parts = cookie.split('=');
      parsedCookies[parts.shift().trim()] = decodeURI(parts.join('='));
    });
  }

  req.parsedCookies = parsedCookies;
  next();
};

var _default = parseCookie;
exports.default = _default;
//# sourceMappingURL=cookie-parser.middleware.js.map