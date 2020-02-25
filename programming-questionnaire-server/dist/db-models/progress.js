"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Progress ORM model
 * Belongs to one User/Questionnaire
 * 
 * @param {Object} sequelize 
 * @param {Object} DataTypes 
 */
const progress = (sequelize, DataTypes) => {
  const Progress = sequelize.define('progress', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: _sequelize.default.UUID,
      defaultValue: () => (0, _uuid.v4)()
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      field: 'is_complete',
      allowNull: false
    },
    userId: {
      type: _sequelize.default.UUID,
      onDelete: 'CASCADE',
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id',
        as: 'userId'
      }
    },
    questionnaireId: {
      type: _sequelize.default.UUID,
      field: 'questionnaire_id',
      onDelete: 'CASCADE',
      references: {
        model: 'questionnaires',
        key: 'id',
        as: 'questionnaireId'
      }
    }
  }, {
    indexes: [{
      fields: ['user_id', 'questionnaire_id'],
      unique: {
        args: true,
        msg: 'Progress with such user and questionnaire already exist'
      }
    }]
  });

  Progress.associate = models => {
    Progress.belongsTo(models.Questionnaire, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    });
    Progress.belongsTo(models.User, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    });
    Progress.belongsToMany(models.Answer, {
      through: 'progress_answers',
      foreignKey: 'progress_id'
    });
  };

  return Progress;
};

var _default = progress;
exports.default = _default;
//# sourceMappingURL=progress.js.map