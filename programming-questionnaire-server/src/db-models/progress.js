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
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id',
        as: 'userId'
      }
    },
    questionnaireId: {
      type: Sequelize.UUID,
      field: 'questionnaire_id',
      onDelete: 'CASCADE',
      references: {
        model: 'questionnaires',
        key: 'id',
        as: 'questionnaireId'
      }
    }
  });

  Progress.associate = (models) => {
    Progress.hasMany(models.Answer, {
      foreignKey: 'id',
      as: 'answers'
    });
    Progress.belongsTo(models.Questionnaire, {
      foreignKey: 'id',
      onDelete: 'CASCADE',
    });
    Progress.belongsTo(models.User, {
      foreignKey: 'id',
      onDelete: 'CASCADE',
    });
  };

  return Progress;
};

export default progress;
