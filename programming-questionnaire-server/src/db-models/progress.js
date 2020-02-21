import { v4 as uuidv4 } from 'uuid';
import Sequelize from 'sequelize';

const progress = (sequelize, DataTypes) => {
  const Progress = sequelize.define('progress', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: () => uuidv4()
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      field: 'is_complete',
      allowNull: false
    },
    userId: {
      type: Sequelize.UUID,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id',
        as: 'userId',
      },
    }
  });

  Progress.associate = (models) => {
    Progress.hasMany(models.Answer, {
      foreignKey: 'id',
      as: 'answers'
    });
    // Progress.hasOne(models.Questionnaire, {
    //   foreignKey: 'id',
    //   as: 'questionnaire'
    // });
    Progress.belongsTo(models.User, {
      foreignKey: 'id',
      onDelete: 'CASCADE',
    });
  };

  return Progress;
};

export default progress;
