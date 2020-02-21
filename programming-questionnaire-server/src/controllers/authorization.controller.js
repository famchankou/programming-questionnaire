import BC from 'bcryptjs';
import JWT from 'jsonwebtoken';
import models from '../db-models';
import config from '../config';

const TOKEN_EXP_TIME = 86400;

export class AuthorizationController {
  static async auth(req, res) {
    const user = await models.User.findOne({
      where: {
        username: req.body.username
      }
    });
    
    if (user && req.body.password && BC.compareSync(req.body.password, user.password)) {
      const token = JWT.sign({ id: user.id }, config.secret, { expiresIn: TOKEN_EXP_TIME });

      res.status(200).send({
        code: 200,
        data: {
          user: {
            id: user.id,
            email: user.email,
            username: user.username
          }
        },
        token: token
      });
    } else {
      res.status(404).send({
        code: 404,
        message: 'User Not Found',
        data: {}
      });
    }
  }
}
