"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _dbModels = _interopRequireDefault(require("../db-models"));

var ProgressService =
/*#__PURE__*/
function () {
  function ProgressService() {
    (0, _classCallCheck2["default"])(this, ProgressService);
  }

  (0, _createClass2["default"])(ProgressService, null, [{
    key: "updateCurrentUserProgress",

    /**
     * Updates progress record: adds new answer to the user progress and set 
     * complete state when necessary
     * 
     * @param {String} progressId 
     * @param {Object} payload 
     */
    value: function () {
      var _updateCurrentUserProgress = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(progressId, payload) {
        var progress, answer;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _dbModels["default"].Progress.findByPk("".concat(progressId), {
                  include: [{
                    model: _dbModels["default"].Answer,
                    as: 'answers'
                  }]
                });

              case 2:
                progress = _context.sent;
                _context.next = 5;
                return _dbModels["default"].Answer.findOne({
                  where: {
                    id: payload.answerId
                  }
                });

              case 5:
                answer = _context.sent;
                progress.setAnswers([].concat((0, _toConsumableArray2["default"])(progress.answers), [answer]));
                progress.update({
                  isComplete: payload.isComplete
                });
                return _context.abrupt("return", progress);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function updateCurrentUserProgress(_x, _x2) {
        return _updateCurrentUserProgress.apply(this, arguments);
      }

      return updateCurrentUserProgress;
    }()
    /**
     * Returns combined progress: Progress, Answered Questions, Correct Answers
     * 
     * @param {String} userId 
     */

  }, {
    key: "getCombinedProgress",
    value: function () {
      var _getCombinedProgress = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(userId) {
        var progresses, generateCombinedProgress;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _dbModels["default"].Progress.findAll({
                  where: {
                    userId: userId
                  },
                  include: [{
                    model: _dbModels["default"].Answer,
                    as: 'answers'
                  }]
                });

              case 2:
                progresses = _context3.sent;

                /**
                 * Forms combined progerss for a certain user which includes data necessary for
                 * forming the charts statistics
                 * 
                 * @param {Object} progress 
                 */
                generateCombinedProgress =
                /*#__PURE__*/
                function () {
                  var _ref = (0, _asyncToGenerator2["default"])(
                  /*#__PURE__*/
                  _regenerator["default"].mark(function _callee2(progress) {
                    var quest, correctAnswers, filterQuestions;
                    return _regenerator["default"].wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return _dbModels["default"].Questionnaire.findByPk(progress.questionnaireId, {
                              include: [{
                                model: _dbModels["default"].Question,
                                as: 'questions'
                              }]
                            });

                          case 2:
                            quest = _context2.sent;
                            correctAnswers = (0, _toConsumableArray2["default"])(progress.answers).filter(function (answer) {
                              return answer.isCorrect;
                            });

                            filterQuestions = function filterQuestions(question) {
                              return (0, _toConsumableArray2["default"])(progress.answers).map(function (answer) {
                                return answer.questionId;
                              }).indexOf(question.id) !== -1;
                            };

                            return _context2.abrupt("return", {
                              progressId: progress.id,
                              userId: progress.userId,
                              questionnaireTitle: quest.title,
                              questionnaireId: progress.questionnaireId,
                              correctAnswers: correctAnswers,
                              answeredQuestions: (0, _toConsumableArray2["default"])(quest.questions.filter(filterQuestions)),
                              isComplete: progress.isComplete
                            });

                          case 6:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function generateCombinedProgress(_x4) {
                    return _ref.apply(this, arguments);
                  };
                }();

                return _context3.abrupt("return", Promise.all(progresses.map(function (progress) {
                  return generateCombinedProgress(progress);
                })));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getCombinedProgress(_x3) {
        return _getCombinedProgress.apply(this, arguments);
      }

      return getCombinedProgress;
    }()
  }]);
  return ProgressService;
}();

exports["default"] = ProgressService;
//# sourceMappingURL=progress.service.js.map