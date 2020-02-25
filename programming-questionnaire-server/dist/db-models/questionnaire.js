"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Questionnaire ORM model
 * Refers to many Questions/Progresses
 * 
 * @param {Object} sequelize 
 * @param {Object} DataTypes 
 */
const questionnaire = (sequelize, DataTypes) => {
  const Questionnaire = sequelize.define('questionnaire', {
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
      allowNull: false,
      unique: {
        args: true,
        msg: 'Duplicate Questionnaire'
      }
    },
    description: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      field: 'description',
      allowNull: true
    }
  });

  Questionnaire.associate = models => {
    Questionnaire.hasMany(models.Question, {
      foreignKey: 'questionnaireId',
      as: 'questions'
    });
    Questionnaire.hasMany(models.Progress, {
      foreignKey: 'questionnaireId',
      as: 'progresses'
    });
  };

  return Questionnaire;
};

var _default = questionnaire;
exports.default = _default;
//# sourceMappingURL=questionnaire.js.map