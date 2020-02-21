import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';

import {
  parseQueryParams,
  parseCookie
} from './middlewares';
import { sequelize } from './db-models';
import routes from './routes';

const app = express();
const apiVersion = 'v1';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(parseQueryParams);
app.use(parseCookie);

app.use(`/api/${apiVersion}/user`, routes.user);
app.use(`/api/${apiVersion}/auth`, routes.authorization);
app.use(`/api/${apiVersion}/answer`, routes.answer);
app.use(`/api/${apiVersion}/progress`, routes.progress);
app.use(`/api/${apiVersion}/question`, routes.question);
app.use(`/api/${apiVersion}/questionnaire`, routes.questionnaire);

app.use((req, res, next) => {
  const err = new Error(`Page Not Found - ${JSON.stringify(req.parsedQuery.href)}`);
  err.status = 404;
  next(err.message);
});

const eraseDatabaseOnSync = false;
sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    // erase tables data
  }

  app.listen(process.env.PORT, () =>
    console.log(`App listening on port ${process.env.PORT}!`),
  );
});
