"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dbModels = _interopRequireDefault(require("../db-models"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TOKEN_EXP_TIME = 86400;
/**
 * Auth CRUD operations controller
 */

class AuthorizationController {
  /**
   * Issue JWT to the existing user
   * 
   * @param {Object} req 
   * @param {Object} res 
   */
  static async auth(req, res) {
    try {
      const user = await _dbModels.default.User.findOne({
        where: {
          username: req.body.username
        }
      });

      if (user && req.body.password && _bcryptjs.default.compareSync(req.body.password, user.password)) {
        const signUser = {
          id: user.id,
          username: user.username,
          email: user.email
        };

        const token = _jsonwebtoken.default.sign(signUser, _config.default.secret, {
          expiresIn: TOKEN_EXP_TIME
        });

        res.status(200).send({
          data: {
            user: signUser
          },
          token: token
        });
      } else {
        res.status(404).send({
          message: 'User Not Found',
          data: null
        });
      }
    } catch (error) {
      res.status(404).send({
        message: `An error has occurred: ${error.message}`,
        data: null
      });
    }
  }

}

exports.default = AuthorizationController;
//# sourceMappingURL=authorization.controller.js.map