"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("dotenv/config");

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _express = _interopRequireDefault(require("express"));

var swaggerUi = _interopRequireWildcard(require("swagger-ui-express"));

var swaggerDocument = _interopRequireWildcard(require("../swagger/swagger.json"));

var _middlewares = require("./middlewares");

var _dbModels = require("./db-models");

var _routes = _interopRequireDefault(require("./routes"));

var app = (0, _express["default"])();
var apiVersion = 'v1'; // Swagger Docs

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // Middlewares

app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_middlewares.parseQueryParams);
app.use(_middlewares.parseCookie); // Routes

app.use("/api/".concat(apiVersion, "/user"), _routes["default"].user);
app.use("/api/".concat(apiVersion, "/auth"), _routes["default"].authorization);
app.use("/api/".concat(apiVersion, "/answer"), _routes["default"].answer);
app.use("/api/".concat(apiVersion, "/progress"), _routes["default"].progress);
app.use("/api/".concat(apiVersion, "/question"), _routes["default"].question);
app.use("/api/".concat(apiVersion, "/questionnaire"), _routes["default"].questionnaire); // Healthcheck endpoint

app.use('/healthcheck', function (req, res, next) {
  res.json({
    status: 'UP'
  });
}); // Handle no route request

app.use(function (req, res, next) {
  var err = new Error("Page Not Found - ".concat(JSON.stringify(req.parsedQuery.href)));
  res.status(404).send({
    error: err.message
  });
});
var alterDatabaseOnSync = true;
var eraseDatabaseOnSync = false; // if enabled, drops all tables and data on sync

_dbModels.sequelize.sync({
  force: eraseDatabaseOnSync,
  alter: alterDatabaseOnSync
}).then(
/*#__PURE__*/
(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (eraseDatabaseOnSync) {// erase tables data
          }

          app.listen(process.env.PORT, function () {
            return console.log("App listening on port ".concat(process.env.PORT));
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
//# sourceMappingURL=app.js.map