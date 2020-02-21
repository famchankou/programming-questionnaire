const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Username address already exist!'
      }
    },
    email: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
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
      allowNull: false
    }
  });

  return User;
};

export default user;
