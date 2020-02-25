import { v4 as uuidv4 } from 'uuid';
import Sequelize from 'sequelize';

/**
 * Question ORM model
 * Refers to many Answers
 * Belongs to one Questionnaire
 * 
 * @param {Object} sequelize 
 * @param {Object} DataTypes 
 */
const question = (sequelize, DataTypes) => {
  const Question = sequelize.define('question', {
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
      allowNull: false
    },
    question: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT,
      field: 'question',
      allowNull: false
    },
    questionnaireId: {
      type: Sequelize.UUID,
      allowNull: false,
      field: 'questionnaire_id',
      onDelete: 'CASCADE',
      references: {
        model: 'questionnaires',
        key: 'id',
        as: 'questionnaireId'
      }
    }
  });

  Question.associate = (models) => {
    Question.belongsTo(models.Questionnaire, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    });
    Question.hasMany(models.Answer, {
      foreignKey: 'questionId',
      as: 'answers'
    });
  };

  return Question;
};

export default question;
