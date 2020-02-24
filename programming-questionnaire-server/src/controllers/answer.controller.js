import models from '../db-models';

/**
 * Answer CRUD operations controller
 */
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

  /**
   * Get all Answers for the specified Question ID
   * 
   * @param {*} req 
   * @param {*} res 
   */
  static async getAll(req, res) {
    const questionId = req.params.questionId;
    
    try {
      const answers = await models.Answer.findAll({
        where: {
          questionId: questionId
        }
      });

      res.status(200).json(answers);
    } catch (error) {
      res.status(400).send({
        message: `${error.message}`,
      });
    }
  }
}
