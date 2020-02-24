import models from '../db-models';
import BC from 'bcryptjs';

export default class QuestionnaireController {
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
    try {
      const questionary = await models.Questionnaire.findByPk(
        `${req.params.questId}` || '',
      );

      if (questionary) {
        res.status(200).send(questionary);
      } else {
        res.status(404).send({
          message: 'Questionary Not Found',
        });
      }
    } catch (error) {
      res.status(400).send({
        message: `Invalid Questionary ID: ${error.message}`,
      });
    }
  }

  static async getAll(req, res) {
    try {
      const questionaries = await models.Questionnaire.findAll();

      if (questionaries) {
        res.status(200).send(questionaries);
      } else {
        res.status(404).send({
          message: 'Questionaries Not Found',
        });
      }
    } catch (error) {
      res.status(400).send({
        message: `${error.message}`,
      });
    }
  }
}
