import models from '../db-models';

export default class AnswerController {
  static async create(req, res) {
    res.status(501).json('not implemented');
  }

  static async update(req, res) {
    res.status(501).json('not implemented');
  }

  static async delete(req, res) {
    res.status(501).json('not implemented');
  }

  static async get(req, res) {
    res.status(501).json('not implemented');
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
        res.status(200).json(answers);
      } else {
        res.status(400).json({
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
