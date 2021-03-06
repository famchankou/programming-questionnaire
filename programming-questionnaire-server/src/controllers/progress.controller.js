import models from '../db-models';
import { ProgressService } from '../services';

/**
 * Progress CRUD operations controller
 */
export default class ProgressController {
  /**
   * Create Progress record
   * 
   * @param {Object} req 
   * @param {Object} res 
   */
  static async create(req, res) {
    const payload = req.body || {};

    try {
      const user = await models.Progress
        .create({
          isComplete: false,
          userId: payload.userId,
          questionnaireId: payload.questionnaireId
        });

      res.status(201).json(user);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  /**
   * Update existing Progress record
   * 
   * @param {Object} req 
   * @param {Object} res 
   */
  static async update(req, res) {
    const progressId = req.params.progressId;
    const payload = req.body || {};
    
    try {
      const result = await ProgressService.updateCurrentUserProgress(progressId, payload);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  static async delete(req, res) {
    res.status(501).json('not implemented');
  }

  static async get(req, res) {
    res.status(501).json('not implemented');
  }

  /**
   * Get all Progresses for a specific User
   * 
   * @param {Object} req 
   * @param {Object} res 
   */
  static async getAll(req, res) {
    const userId = req.params.userId;

    try {
      const result = await ProgressService.getCombinedProgress(userId);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({
        message: `${error.message}`,
      });
    }
  }
}
