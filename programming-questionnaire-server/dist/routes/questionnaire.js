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
 * Route serving questionnaire creation
 * 
 * @name post/
 * @memberof module:routers/questionnaire~questionnairesRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router.post('/', _middlewares.checkToken, _controllers.QuestionnaireController.create);
/**
 * Route serving questionnaire update
 * 
 * @name put/:questId
 * @memberof module:routers/questionnaire~questionnairesRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router.put('/:questId', _middlewares.checkToken, _controllers.QuestionnaireController.update);
/**
 * Route serving questionnaire removal
 * 
 * @name delete/:questId
 * @memberof module:routers/questionnaire~questionnairesRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router["delete"]('/:questId', _middlewares.checkToken, _controllers.QuestionnaireController["delete"]);
/**
 * Route serving questionnaire retrieval
 * 
 * @name get/:questId
 * @memberof module:routers/questionnaire~questionnairesRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router.get('/:questId', _middlewares.checkToken, _controllers.QuestionnaireController.get);
/**
 * Route serving retrieval of all questionnaires
 * 
 * @name get/all/questionnaires
 * @memberof module:routers/questionnaire~questionnairesRouter
 * @param {String} path - Express path
 * @param {Function} middleware - Express middleware
 * @param {Function} middleware - Express middleware
 */

router.get('/all/questionnaires', _middlewares.checkToken, _controllers.QuestionnaireController.getAll);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=questionnaire.js.map