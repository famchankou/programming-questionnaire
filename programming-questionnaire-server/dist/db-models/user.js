"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _uuid = require("uuid");

var _sequelize = _interopRequireDefault(require("sequelize"));

/**
 * User ORM model
 * Refers to many Progresses
 * 
 * @param {Object} sequelize 
 * @param {Object} DataTypes 
 */
var user = function user(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: _sequelize["default"].UUID,
      defaultValue: function defaultValue() {
        return (0, _uuid.v4)();
      }
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

  User.associate = function (models) {
    User.hasMany(models.Progress, {
      foreignKey: 'userId',
      as: 'progress'
    });
  };

  return User;
};

var _default = user;
exports["default"] = _default;
//# sourceMappingURL=user.js.map