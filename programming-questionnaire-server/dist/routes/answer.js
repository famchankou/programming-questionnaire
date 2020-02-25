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
 * Route serving answer creation
 * 
 * @name post/
 * @memberof module:routers/answer~answeresRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router.post('/', _middlewares.checkToken, _controllers.AnswerController.create);
/**
 * Route serving answer update
 * 
 * @name post/:answerId
 * @memberof module:routers/answer~answeresRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router.put('/:answerId', _middlewares.checkToken, _controllers.AnswerController.update);
/**
 * Route serving answer removal
 * 
 * @name delete/:answerId
 * @memberof module:routers/answer~answeresRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router["delete"]('/:answerId', _middlewares.checkToken, _controllers.AnswerController["delete"]);
/**
 * Route serving answer retrieval
 * 
 * @name get/:answerId
 * @memberof module:routers/answer~answeresRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router.get('/:answerId', _middlewares.checkToken, _controllers.AnswerController.get);
/**
 * Route serving answers retrieval for a specific question by Question ID
 * 
 * @name get/question/:questionId
 * @memberof module:routers/answer~answeresRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router.get('/question/:questionId', _middlewares.checkToken, _controllers.AnswerController.getAll);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=answer.js.map