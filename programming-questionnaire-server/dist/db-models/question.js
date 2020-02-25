"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = require("uuid");

var _sequelize = _interopRequireDefault(require("sequelize"));

/**
 * Question ORM model
 * Refers to many Answers
 * Belongs to one Questionnaire
 * 
 * @param {Object} sequelize 
 * @param {Object} DataTypes 
 */
var question = function question(sequelize, DataTypes) {
  var Question = sequelize.define('question', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: _sequelize["default"].UUID,
      defaultValue: function defaultValue() {
        return (0, _uuid.v4)();
      }
    },
    title: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      field: 'title',
      allowNull: false
    },
    question: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      field: 'question',
      allowNull: false
    },
    questionnaireId: {
      type: _sequelize["default"].UUID,
      allowNull: false,
      field: 'questionnaire_id',
      onDelete: 'CASCADE',
      references: {
        model: 'questionnaires',
        key: 'id',
        as: 'questionnaireId'
      }
    }
  });

  Question.associate = function (models) {
    Question.belongsTo(models.Questionnaire, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    });
    Question.hasMany(models.Answer, {
      foreignKey: 'questionId',
      as: 'answers'
    });
  };

  return Question;
};

var _default = question;
exports["default"] = _default;
//# sourceMappingURL=question.js.map