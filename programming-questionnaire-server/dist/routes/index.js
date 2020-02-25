"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("./user"));

var _authorization = _interopRequireDefault(require("./authorization"));

var _answer = _interopRequireDefault(require("./answer"));

var _progress = _interopRequireDefault(require("./progress"));

var _question = _interopRequireDefault(require("./question"));

var _questionnaire = _interopRequireDefault(require("./questionnaire"));

var _default = {
  user: _user["default"],
  authorization: _authorization["default"],
  answer: _answer["default"],
  progress: _progress["default"],
  question: _question["default"],
  questionnaire: _questionnaire["default"]
};
exports["default"] = _default;
//# sourceMappingURL=index.js.map