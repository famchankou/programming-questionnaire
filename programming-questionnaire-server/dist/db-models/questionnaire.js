"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = require("uuid");

var _sequelize = _interopRequireDefault(require("sequelize"));

/**
 * Questionnaire ORM model
 * Refers to many Questions/Progresses
 * 
 * @param {Object} sequelize 
 * @param {Object} DataTypes 
 */
var questionnaire = function questionnaire(sequelize, DataTypes) {
  var Questionnaire = sequelize.define('questionnaire', {
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

  Questionnaire.associate = function (models) {
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
exports["default"] = _default;
//# sourceMappingURL=questionnaire.js.map