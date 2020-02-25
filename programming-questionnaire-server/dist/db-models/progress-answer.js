"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = require("uuid");

var _sequelize = _interopRequireDefault(require("sequelize"));

/**
 * ProgressAnswer ORM model
 * many-to-many relationshipt to link different user Progresses with Answers
 * 
 * @param {Object} sequelize 
 * @param {Object} DataTypes 
 */
var progressAnswer = function progressAnswer(sequelize, DataTypes) {
  var ProgressAnswer = sequelize.define('progress_answer', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: _sequelize["default"].UUID,
      defaultValue: function defaultValue() {
        return (0, _uuid.v4)();
      }
    },
    progressId: {
      type: _sequelize["default"].UUID,
      field: 'progress_id',
      allowNull: false,
      references: {
        model: 'progresses',
        key: 'id',
        as: 'progressId'
      }
    },
    answerId: {
      type: _sequelize["default"].UUID,
      field: 'answer_id',
      allowNull: false,
      references: {
        model: 'answers',
        key: 'id',
        as: 'answerId'
      }
    }
  }, {
    indexes: [{
      fields: ['progress_id', 'answer_id'],
      unique: true
    }]
  });
  return ProgressAnswer;
};

var _default = progressAnswer;
exports["default"] = _default;
//# sourceMappingURL=progress-answer.js.map