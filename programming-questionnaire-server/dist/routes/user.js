"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _middlewares = require("../middlewares");

var _controllers = require("../controllers");

const router = (0, _express.Router)();
/**
 * Route serving user creation
 * 
 * @name post/
 * @memberof module:routers/user~usersRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */

router.post('/', _controllers.UserController.create);
/**
 * Route serving user update
 * 
 * @name put/:userId
 * @memberof module:routers/user~usersRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */

router.put('/:userId', _middlewares.checkToken, _controllers.UserController.update);
/**
 * Route serving user removal
 * 
 * @name delete/:userId
 * @memberof module:routers/user~usersRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */

router.delete('/:userId', _middlewares.checkToken, _controllers.UserController.delete);
/**
 * Route serving user retrieval
 * 
 * @name get/:userId
 * @memberof module:routers/user~usersRouter
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 * @param {callback} middleware - Express middleware
 */

router.get('/:userId', _middlewares.checkToken, _controllers.UserController.get);
var _default = router;
exports.default = _default;
//# sourceMappingURL=user.js.map