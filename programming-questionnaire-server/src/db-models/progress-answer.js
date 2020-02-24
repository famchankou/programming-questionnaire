import { v4 as uuidv4 } from 'uuid';
import Sequelize from 'sequelize';

/**
 * ProgressAnswer ORM model, many-to-many to link different user Progresses with Answers
 * 
 * @param {*} sequelize 
 * @param {*} DataTypes 
 */
const progressAnswer = (sequelize, DataTypes) => {
  const ProgressAnswer = sequelize.define('progress_answer', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: () => uuidv4()
    },
    progressId: {
      type: Sequelize.UUID,
      field: 'progress_id',
      allowNull: false,
      references: {
        model: 'progresses',
        key: 'id',
        as: 'progressId'
      }
    },
    answerId: {
      type: Sequelize.UUID,
      field: 'answer_id',
      allowNull: false,
      references: {
        model: 'answers',
        key: 'id',
        as: 'answerId'
      }
    }
  }, {
    indexes: [
      {
        fields: ['progress_id', 'answer_id'],
        unique: true
      }
    ]
  });

  return ProgressAnswer;
};

export default progressAnswer;
