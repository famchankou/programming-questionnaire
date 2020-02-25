"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _dbModels = _interopRequireDefault(require("../db-models"));

/**
 * Answer CRUD operations controller
 */
var AnswerController =
/*#__PURE__*/
function () {
  function AnswerController() {
    (0, _classCallCheck2["default"])(this, AnswerController);
  }

  (0, _createClass2["default"])(AnswerController, null, [{
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res.status(501).json('not implemented');

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                res.status(501).json('not implemented');

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                res.status(501).json('not implemented');

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function _delete(_x5, _x6) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                res.status(501).json('not implemented');

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function get(_x7, _x8) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
    /**
     * Get all Answers for the specified Question ID
     * 
     * @param {Object} req 
     * @param {Object} res 
     */

  }, {
    key: "getAll",
    value: function () {
      var _getAll = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var questionId, answers;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                questionId = req.params.questionId;
                _context5.prev = 1;
                _context5.next = 4;
                return _dbModels["default"].Answer.findAll({
                  where: {
                    questionId: questionId
                  }
                });

              case 4:
                answers = _context5.sent;
                res.status(200).json(answers);
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](1);
                res.status(400).send({
                  message: "".concat(_context5.t0.message)
                });

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 8]]);
      }));

      function getAll(_x9, _x10) {
        return _getAll.apply(this, arguments);
      }

      return getAll;
    }()
  }]);
  return AnswerController;
}();

exports["default"] = AnswerController;
//# sourceMappingURL=answer.controller.js.map