"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Question ORM model
 * Refers to many Answers
 * Belongs to one Questionnaire
 * 
 * @param {Object} sequelize 
 * @param {Object} DataTypes 
 */
const question = (sequelize, DataTypes) => {
  const Question = sequelize.define('question', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: _sequelize.default.UUID,
      defaultValue: () => (0, _uuid.v4)()
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
      type: _sequelize.default.UUID,
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

  Question.associate = models => {
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
exports.default = _default;
//# sourceMappingURL=question.js.map