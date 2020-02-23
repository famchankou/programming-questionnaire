import { v4 as uuidv4 } from 'uuid';
import Sequelize from 'sequelize';

const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: () => uuidv4()
    },
    username: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      field: 'username',
      allowNull: false,
      unique: {
        args: true,
        msg: 'Username already exist!'
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
        msg: 'Email address already exist!'
      }
    },
    password: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      field: 'password',
      allowNull: false
    }
  });

  User.associate = (models) => {
    User.hasMany(models.Progress, {
      foreignKey: 'id',
      as: 'progress'
    });
  };

  return User;
};

export default user;
