import models from '../db-models';

export default class QuestionnaireController {
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
    try {
      const questionnaire = await models.Questionnaire.findByPk(`${req.params.questId}`);

      if (questionnaire) {
        res.status(200).json(questionnaire);
      } else {
        res.status(400).json({
          message: 'No records',
        });
      }
    } catch (error) {
      res.status(400).json({
        message: `${error.message}`,
      });
    }
  }

  static async getAll(req, res) {
    try {
      const questionaries = await models.Questionnaire.findAll();

      if (questionaries) {
        res.status(200).json(questionaries);
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
