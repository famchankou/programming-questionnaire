import JWT from 'jsonwebtoken';
import config from '../config';

/**
 * Checks specified JWT to authenticate a user via Bearer approach
 * Default token lifetime 86400
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const checkToken = (req, res, next) => {
  let token = (req.headers.authorization || '').replace('Bearer ', '');

  if (!token) {
    res
      .status(401)
      .send({ auth: false, message: 'No token provided' });
  } else {
    JWT.verify(token, config.secret, (err, decoded) => {
      if (err) {
        res
          .status(404)
          .json({ auth: false, message: 'Failed to authenticate' });
      } else {
        next();
      }
    });
  }
};

export default checkToken;