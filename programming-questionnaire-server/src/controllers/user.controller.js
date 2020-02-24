import models from '../db-models';
import BC from 'bcryptjs';

export default class UserController {
  static async create(req, res) {
    try {
      const user = await models.User
        .create({ ...req.body, password: BC.hashSync(req.body.password, BC.genSaltSync(10)) });

      res.status(201).send(user);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  static async update(req, res) {
    try {
      const user = await models.User.findByPk(`${req.params.userId}` || '');

      if (!user) {
        res.status(404).send({
          message: 'User Not Found',
        });
      } else {
        await user
          .update({
            username: req.body.username || user.username,
            email: req.body.email || user.email,
            password: req.body.password ? BC.hashSync(req.body.password, BC.genSaltSync(10)) : user.password,
          });
       
        res.status(200).send();
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  static async delete(req, res) {
    try {
      await models.User
        .destroy({
          where: {
            id: req.params.userId
          }
        });

      res.status(204).send();
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  static async get(req, res) {
    try {
      const user = await models.User.findByPk(`${req.params.userId}` || '');

      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send({
          message: 'User Not Found',
        });
      }
    } catch (error) {
      res.status(400).send({
        message: `Invalid User ID: ${error.message}`,
      });
    }
  }
}
