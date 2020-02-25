"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dbModels = _interopRequireDefault(require("../db-models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Question CRUD operations controller
 */
class QuestionController {
  static async create(req, res) {
    res.status(501).json('not implemented');
  }

  static async update(req, res) {
    res.status(501).json('not implemented');
  }

  static async delete(req, res) {
    res.status(501).json('not implemented');
  }
  /**
   * Get a specific Question by ID
   * 
   * @param {Object} req 
   * @param {Object} res 
   */


  static async get(req, res) {
    const questionId = req.params.questionId;

    try {
      const question = await _dbModels.default.Question.findByPk(`${questionId}`);
      res.status(200).json(question);
    } catch (error) {
      res.status(400).send({
        message: `${error.message}`
      });
    }
  }
  /**
   * Get all Questions and relevant Answers for a specific Questionnaire
   * 
   * @param {Object} req 
   * @param {Object} res 
   */


  static async getAll(req, res) {
    const questId = req.params.questId;

    try {
      const items = await _dbModels.default.Question.findAll({
        where: {
          questionnaireId: questId
        },
        include: [{
          model: _dbModels.default.Answer,
          as: 'answers'
        }]
      });
      res.status(200).json(items);
    } catch (error) {
      res.status(400).json({
        message: `${error.message}`
      });
    }
  }

}

exports.default = QuestionController;
//# sourceMappingURL=question.controller.js.map