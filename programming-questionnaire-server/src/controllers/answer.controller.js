import models from '../db-models';
import BC from 'bcryptjs';

export default class AnswerController {
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
    const questionId = req.params.questionId;
    
    try {
      const answers = await models.Answer.findAll({
        where: {
          questionId: questionId
        }
      });

      if (answers) {
        res.status(200).send(answers);
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
