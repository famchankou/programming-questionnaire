import models from '../db-models';
import BC from 'bcryptjs';

export default class ProgressController {
  static async create(req, res) {
    const payload = req.body || {};

    try {
      const user = await models.Progress
        .create({
          isComplete: false,
          userId: payload.userId,
          questionnaireId: payload.questionnaireId
        });

      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  static async update(req, res) {
    const payload = req.body || {};

    const progress = await models.Progress.findOne({ where: { userId: payload.userId } });
    const answer = await models.Answer.findOne({ where: { id: payload.answerId } });

    progress.setAnswers([answer]);

    res.status(200).send('Updated');;
  }

  static async delete(req, res) {
    res.json('');
  }

  static async get(req, res) {
    res.json('');

    // return models.Progress
    //   .findOne({
    //     include: [{
    //       model: models.Answer,
    //       as: 'answers',
    //       required: false,
    //       attributes: ['id', 'content'],
    //       through: { attributes: [] }
    //     }],
    //     where: { username }
    //   });

    // [
    //   {
    //     "questionnaireTitle": "Algorithms",
    //     "questionnaireId": 123,
    //     "correctAnswers": [id1, id2, id3, ...],
    //     "isComplete": true
    //   },
    //   {
    //     "questionnaire": "JavaScript",
    //     "questionnaireId": 456,
    //     "correctAnswers": [id1, id2, id3, ...],
    //     "isComplete": false
    //   }
    // ]
  }

  static async getAll(req, res) {
    try {
      const progresses = await models.Progress.findAll();

      if (progresses) {
        res.status(200).send(progresses);
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
