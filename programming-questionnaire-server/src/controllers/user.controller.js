import models from '../db-models';
import BC from 'bcryptjs';

/**
 * User CRUD operations controller
 */
export default class UserController {
  /**
   * Crete User record
   * 
   * @param {*} req 
   * @param {*} res 
   */
  static async create(req, res) {
    try {
      const user = await models.User
        .create({
          ...req.body,
          password: BC.hashSync(req.body.password, BC.genSaltSync(10))
        });

      res.status(201).json(user);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  /**
   * Update User record
   * 
   * @param {*} req 
   * @param {*} res 
   */
  static async update(req, res) {
    const userId = req.params.userId;

    try {
      const user = await models.User.findByPk(`${userId}`);

      if (!user) {
        res.status(404).json({
          message: 'User Not Found',
        });
      } else {
        await user
          .update({
            username: req.body.username || user.username,
            email: req.body.email || user.email,
            password: req.body.password ? BC.hashSync(req.body.password, BC.genSaltSync(10)) : user.password,
          });

        res.status(200).json();
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  /**
   * Delete User record
   * 
   * @param {*} req 
   * @param {*} res 
   */
  static async delete(req, res) {
    const userId = req.params.userId;

    try {
      await models.User
        .destroy({
          where: {
            id: userId
          }
        });

      res.status(204).json();
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  /**
   * Get specific User by ID
   * 
   * @param {*} req 
   * @param {*} res 
   */
  static async get(req, res) {
    const userId = req.params.userId;

    try {
      const user = await models.User.findByPk(`${userId}`);

      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({
          message: 'User Not Found',
        });
      }
    } catch (error) {
      res.status(400).json(`${error.message}`);
    }
  }
}
