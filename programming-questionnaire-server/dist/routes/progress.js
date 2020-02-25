"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _middlewares = require("../middlewares");

var _controllers = require("../controllers");

var router = (0, _express.Router)();
/**
 * Route serving progress creation
 * 
 * @name post/
 * @memberof module:routers/progress~progressesRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router.post('/', _middlewares.checkToken, _controllers.ProgressController.create);
/**
 * Route serving progress update
 * 
 * @name put/:progressId
 * @memberof module:routers/progress~progressesRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router.put('/:progressId', _middlewares.checkToken, _controllers.ProgressController.update);
/**
 * Route serving progress removal
 * 
 * @name delete/:progressId
 * @memberof module:routers/progress~progressesRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router["delete"]('/:progressId', _middlewares.checkToken, _controllers.ProgressController["delete"]);
/**
 * Route serving progress retrieval
 * 
 * @name get/:progressId
 * @memberof module:routers/progress~progressesRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router.get('/:progressId', _middlewares.checkToken, _controllers.ProgressController.get);
/**
 * Route serving progresses retrieval for the specific user by User ID
 * 
 * @name get/user/:userId
 * @memberof module:routers/progress~progressesRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router.get('/user/:userId', _middlewares.checkToken, _controllers.ProgressController.getAll);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=progress.js.map