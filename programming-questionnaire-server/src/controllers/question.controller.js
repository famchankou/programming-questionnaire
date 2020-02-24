import models from '../db-models';

export default class QuestionController {
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
    const questionId = req.params.questionId;
    
    try {
      const question = await models.Question.findByPk(`${questionId}`);

      if (question) {
        res.status(200).json(question);
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

  static async getAll(req, res) {
    const questId = req.params.questId;

    try {
      const items = await models.Question.findAll({
        where: {
          questionnaireId: questId
        },
        include: [{
          model: models.Answer,
          as: 'answers'
        }]
      });

      if (items) {
        res.status(200).json(items);
      } else {
        res.status(404).json({
          message: 'No records',
        });
      }
    } catch (error) {
      res.status(400).json({
        message: `${error.message}`,
      });
    }

  }
}
