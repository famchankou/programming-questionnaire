import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger/swagger.json';

import {
  parseQueryParams,
  parseCookie
} from './middlewares';
import { sequelize } from './db-models';
import routes from './routes';

const app = express();
const apiVersion = 'v1';

// Swagger Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(parseQueryParams);
app.use(parseCookie);

// Routes
app.use(`/api/${apiVersion}/user`, routes.user);
app.use(`/api/${apiVersion}/auth`, routes.authorization);
app.use(`/api/${apiVersion}/answer`, routes.answer);
app.use(`/api/${apiVersion}/progress`, routes.progress);
app.use(`/api/${apiVersion}/question`, routes.question);
app.use(`/api/${apiVersion}/questionnaire`, routes.questionnaire);

// Handle no route request
app.use((req, res, next) => {
  const err = new Error(`Page Not Found - ${JSON.stringify(req.parsedQuery.href)}`);
  err.status = 404;
  next(err.message);
});

const alterDatabaseOnSync = true;
const eraseDatabaseOnSync = false; // if enabled, drops all tables and data on sync
sequelize.sync({ force: eraseDatabaseOnSync, alter: alterDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    // erase tables data
  }

  app.listen(process.env.PORT, () =>
    console.log(`App listening on port ${process.env.PORT}`),
  );
});
