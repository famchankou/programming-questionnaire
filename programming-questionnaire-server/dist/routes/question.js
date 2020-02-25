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
 * Route serving question creation
 * 
 * @name post/
 * @memberof module:routers/question~questionsRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router.post('/', _middlewares.checkToken, _controllers.QuestionController.create);
/**
 * Route serving question update
 * 
 * @name put/:questionId
 * @memberof module:routers/question~questionsRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router.put('/:questionId', _middlewares.checkToken, _controllers.QuestionController.update);
/**
 * Route serving question removal
 * 
 * @name delete/:questionId
 * @memberof module:routers/question~questionsRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router["delete"]('/:questionId', _middlewares.checkToken, _controllers.QuestionController["delete"]);
/**
 * Route serving question retrieval
 * 
 * @name get/:questionId
 * @memberof module:routers/question~questionsRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router.get('/:questionId', _middlewares.checkToken, _controllers.QuestionController.get);
/**
 * Route serving questions retrieval by Questionnaire ID (All questions relevant to a Questionnaire)
 * 
 * @name get/quest/:questId
 * @memberof module:routers/question~questionsRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router.get('/quest/:questId', _middlewares.checkToken, _controllers.QuestionController.getAll);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=question.js.map