import models from '../db-models';
import BC from 'bcryptjs';

export class UserController {
  static async create(req, res) {
    return models.User
      .create({ ...req.body, password: BC.hashSync(req.body.password, BC.genSaltSync(10)) })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  }

  static async update(req, res) {
    return models.User
      .findById(req.params.id)
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }

        return user
          .update({
            username: req.body.username || user.username,
            email: req.body.email || user.email,
            password: req.body.password ? BC.hashSync(req.body.password, BC.genSaltSync(10)) : user.password,
          })
          .then(() => res.status(200).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  }

  static async delete(req, res) {
    return models.User
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }

        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }

  static async get(req, res) {
    const id = Number.parseInt(req.params.id).toString();

    if (!isNaN(id)) {
      const user = await models.User.findByPk(id);

      if (user) {
        res.status(200).send(user);
      } else {
        res.status(404).send({
          message: 'User Not Found',
        });
      }
    } else {
      res.status(404).send({
        message: 'Incorrect ID value',
      });
    }
  }

}
