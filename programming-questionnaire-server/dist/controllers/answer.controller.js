"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dbModels = _interopRequireDefault(require("../db-models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Answer CRUD operations controller
 */
class AnswerController {
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
   * @param {Object} req 
   * @param {Object} res 
   */


  static async getAll(req, res) {
    const questionId = req.params.questionId;

    try {
      const answers = await _dbModels.default.Answer.findAll({
        where: {
          questionId: questionId
        }
      });
      res.status(200).json(answers);
    } catch (error) {
      res.status(400).send({
        message: `${error.message}`
      });
    }
  }

}

exports.default = AnswerController;
//# sourceMappingURL=answer.controller.js.map