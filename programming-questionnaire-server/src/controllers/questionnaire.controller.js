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

      res.status(200).json(questionnaire);
    } catch (error) {
      res.status(400).json({
        message: `${error.message}`,
      });
    }
  }

  static async getAll(req, res) {
    try {
      const questionaries = await models.Questionnaire.findAll();

      res.status(200).json(questionaries);
    } catch (error) {
      res.status(400).json({
        message: `${error.message}`,
      });
    }
  }
}
