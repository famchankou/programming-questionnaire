"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * User ORM model
 * Refers to many Progresses
 * 
 * @param {Object} sequelize 
 * @param {Object} DataTypes 
 */
const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: _sequelize.default.UUID,
      defaultValue: () => (0, _uuid.v4)()
    },
    username: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      field: 'username',
      allowNull: false,
      unique: {
        args: true,
        msg: 'Username already exist'
      }
    },
    email: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      field: 'email',
      allowNull: false,
      validate: {
        isEmail: true
      },
      unique: {
        args: true,
        msg: 'Email address already exist'
      }
    },
    password: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      field: 'password',
      allowNull: false
    }
  });

  User.associate = models => {
    User.hasMany(models.Progress, {
      foreignKey: 'userId',
      as: 'progress'
    });
  };

  return User;
};

var _default = user;
exports.default = _default;
//# sourceMappingURL=user.js.map