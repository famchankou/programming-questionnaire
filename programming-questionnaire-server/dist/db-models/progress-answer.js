"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ProgressAnswer ORM model
 * many-to-many relationshipt to link different user Progresses with Answers
 * 
 * @param {Object} sequelize 
 * @param {Object} DataTypes 
 */
const progressAnswer = (sequelize, DataTypes) => {
  const ProgressAnswer = sequelize.define('progress_answer', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: _sequelize.default.UUID,
      defaultValue: () => (0, _uuid.v4)()
    },
    progressId: {
      type: _sequelize.default.UUID,
      field: 'progress_id',
      allowNull: false,
      references: {
        model: 'progresses',
        key: 'id',
        as: 'progressId'
      }
    },
    answerId: {
      type: _sequelize.default.UUID,
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
exports.default = _default;
//# sourceMappingURL=progress-answer.js.map