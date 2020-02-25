"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dbModels = _interopRequireDefault(require("../db-models"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * User CRUD operations controller
 */
class UserController {
  /**
   * Crete User record
   * 
   * @param {Object} req 
   * @param {Object} res 
   */
  static async create(req, res) {
    try {
      const user = await _dbModels.default.User.create({ ...req.body,
        password: _bcryptjs.default.hashSync(req.body.password, _bcryptjs.default.genSaltSync(10))
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
  /**
   * Update User record
   * 
   * @param {Object} req 
   * @param {Object} res 
   */


  static async update(req, res) {
    const userId = req.params.userId;

    try {
      const user = await _dbModels.default.User.findByPk(`${userId}`);

      if (!user) {
        res.status(404).json({
          message: 'User Not Found'
        });
      } else {
        await user.update({
          username: req.body.username || user.username,
          email: req.body.email || user.email,
          password: req.body.password ? _bcryptjs.default.hashSync(req.body.password, _bcryptjs.default.genSaltSync(10)) : user.password
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
   * @param {Object} req 
   * @param {Object} res 
   */


  static async delete(req, res) {
    const userId = req.params.userId;

    try {
      await _dbModels.default.User.destroy({
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
   * @param {Object} req 
   * @param {Object} res 
   */


  static async get(req, res) {
    const userId = req.params.userId;

    try {
      const user = await _dbModels.default.User.findByPk(`${userId}`);

      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({
          message: 'User Not Found'
        });
      }
    } catch (error) {
      res.status(400).json(`${error.message}`);
    }
  }

}

exports.default = UserController;
//# sourceMappingURL=user.controller.js.map