import models from '../db-models';
import BC from 'bcryptjs';

export default class QuestionController {
  static async create(req, res) {
    res.json('');
  }

  static async update(req, res) {
    res.json('');
  }

  static async delete(req, res) {
    res.json('');
  }

  static async get(req, res) {
    res.json('');
  }

  static async getAll(req, res) {
    const questId = req.params.questId;
    
    try {
      const questions = await models.Question.findAll({
        where: {
          questionnaireId: questId
        }
      });

      if (questions) {
        res.status(200).send(questions);
      } else {
        res.status(404).send({
          message: 'No records',
        });
      }
    } catch (error) {
      res.status(400).send({
        message: `${error.message}`,
      });
    }

  }
}
