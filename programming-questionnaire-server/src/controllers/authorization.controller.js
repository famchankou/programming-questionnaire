import BC from 'bcryptjs';
import JWT from 'jsonwebtoken';
import models from '../db-models';
import config from '../config';

const TOKEN_EXP_TIME = 86400;

export default class AuthorizationController {
  static async auth(req, res) {
    try {
      const user = await models.User.findOne({
        where: {
          username: req.body.username
        }
      });

      if (user && req.body.password && BC.compareSync(req.body.password, user.password)) {
        const signUser = {
          id: user.id,
          username: user.username,
          email: user.email
        };
        const token = JWT.sign(signUser, config.secret, { expiresIn: TOKEN_EXP_TIME });
  
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
