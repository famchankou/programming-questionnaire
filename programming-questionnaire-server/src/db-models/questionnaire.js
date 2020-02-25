import { v4 as uuidv4 } from 'uuid';
import Sequelize from 'sequelize';

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
      type: Sequelize.UUID,
      defaultValue: () => uuidv4()
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

  Questionnaire.associate = (models) => {
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

export default questionnaire;
