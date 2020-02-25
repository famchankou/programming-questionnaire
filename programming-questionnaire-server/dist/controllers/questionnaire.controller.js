"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dbModels = _interopRequireDefault(require("../db-models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Questionnaire CRUD operations controller
 */
class QuestionnaireController {
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
   * Get specific Questionnaire by ID
   * 
   * @param {Object} req 
   * @param {Object} res 
   */


  static async get(req, res) {
    try {
      const questionnaire = await _dbModels.default.Questionnaire.findByPk(`${req.params.questId}`);
      res.status(200).json(questionnaire);
    } catch (error) {
      res.status(400).json({
        message: `${error.message}`
      });
    }
  }
  /**
   * Get all Questionnaires
   * 
   * @param {Object} req 
   * @param {Object} res 
   */


  static async getAll(req, res) {
    try {
      const questionaries = await _dbModels.default.Questionnaire.findAll();
      res.status(200).json(questionaries);
    } catch (error) {
      res.status(400).json({
        message: `${error.message}`
      });
    }
  }

}

exports.default = QuestionnaireController;
//# sourceMappingURL=questionnaire.controller.js.map