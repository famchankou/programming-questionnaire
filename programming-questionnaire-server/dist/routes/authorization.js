"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _controllers = require("../controllers");

const router = (0, _express.Router)();
/**
 * Route serving user authorization
 * 
 * @name post/
 * @memberof module:routers/authorization~authorizationsRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router.post('/', _controllers.AuthorizationController.auth);
var _default = router;
exports.default = _default;
//# sourceMappingURL=authorization.js.map