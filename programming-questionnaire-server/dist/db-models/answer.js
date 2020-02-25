"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Answer ORM model
 * Belongs to one Question
 * 
 * @param {Object} sequelize 
 * @param {Object} DataTypes 
 */
const answer = (sequelize, DataTypes) => {
  const Answer = sequelize.define('answer', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: _sequelize.default.UUID,
      defaultValue: () => (0, _uuid.v4)()
    },
    content: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      field: 'content',
      allowNull: false
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      field: 'is_correct',
      allowNull: false
    },
    questionId: {
      type: _sequelize.default.UUID,
      field: 'question_id',
      onDelete: 'CASCADE',
      references: {
        model: 'questions',
        key: 'id',
        as: 'questionId'
      }
    }
  });

  Answer.associate = models => {
    Answer.belongsTo(models.Question, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    });
    Answer.belongsToMany(models.Progress, {
      through: 'progress_answers',
      as: 'progresses',
      foreignKey: 'answer_id'
    });
  };

  return Answer;
};

var _default = answer;
exports.default = _default;
//# sourceMappingURL=answer.js.map