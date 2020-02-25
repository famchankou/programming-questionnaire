"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = require("uuid");

var _sequelize = _interopRequireDefault(require("sequelize"));

/**
 * Answer ORM model
 * Belongs to one Question
 * 
 * @param {Object} sequelize 
 * @param {Object} DataTypes 
 */
var answer = function answer(sequelize, DataTypes) {
  var Answer = sequelize.define('answer', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: _sequelize["default"].UUID,
      defaultValue: function defaultValue() {
        return (0, _uuid.v4)();
      }
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
      type: _sequelize["default"].UUID,
      field: 'question_id',
      onDelete: 'CASCADE',
      references: {
        model: 'questions',
        key: 'id',
        as: 'questionId'
      }
    }
  });

  Answer.associate = function (models) {
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
exports["default"] = _default;
//# sourceMappingURL=answer.js.map