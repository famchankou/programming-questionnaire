"use strict";

require("dotenv/config");

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _express = _interopRequireDefault(require("express"));

var swaggerUi = _interopRequireWildcard(require("swagger-ui-express"));

var swaggerDocument = _interopRequireWildcard(require("../swagger/swagger.json"));

var _middlewares = require("./middlewares");

var _dbModels = require("./db-models");

var _routes = _interopRequireDefault(require("./routes"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const apiVersion = 'v1'; // Swagger Docs

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Middlewares

app.use((0, _cors.default)());
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_middlewares.parseQueryParams);
app.use(_middlewares.parseCookie); // Routes

app.use(`/api/${apiVersion}/user`, _routes.default.user);
app.use(`/api/${apiVersion}/auth`, _routes.default.authorization);
app.use(`/api/${apiVersion}/answer`, _routes.default.answer);
app.use(`/api/${apiVersion}/progress`, _routes.default.progress);
app.use(`/api/${apiVersion}/question`, _routes.default.question);
app.use(`/api/${apiVersion}/questionnaire`, _routes.default.questionnaire); // Healthcheck endpoint

app.use('/healthcheck', (req, res, next) => {
  res.json({
    status: 'UP'
  });
}); // Handle no route request

app.use((req, res, next) => {
  const err = new Error(`Page Not Found - ${JSON.stringify(req.parsedQuery.href)}`);
  res.status(404).send({
    error: err.message
  });
});
const alterDatabaseOnSync = true;
const eraseDatabaseOnSync = false; // if enabled, drops all tables and data on sync

_dbModels.sequelize.sync({
  force: eraseDatabaseOnSync,
  alter: alterDatabaseOnSync
}).then(async () => {
  if (eraseDatabaseOnSync) {// erase tables data
  }

  app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}`));
});
//# sourceMappingURL=app.js.map