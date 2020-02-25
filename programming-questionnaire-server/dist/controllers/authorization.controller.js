"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _dbModels = _interopRequireDefault(require("../db-models"));

var _config = _interopRequireDefault(require("../config"));

var TOKEN_EXP_TIME = 86400;
/**
 * Auth CRUD operations controller
 */

var AuthorizationController =
/*#__PURE__*/
function () {
  function AuthorizationController() {
    (0, _classCallCheck2["default"])(this, AuthorizationController);
  }

  (0, _createClass2["default"])(AuthorizationController, null, [{
    key: "auth",

    /**
     * Issue JWT to the existing user
     * 
     * @param {Object} req 
     * @param {Object} res 
     */
    value: function () {
      var _auth = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var user, signUser, token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _dbModels["default"].User.findOne({
                  where: {
                    username: req.body.username
                  }
                });

              case 3:
                user = _context.sent;

                if (user && req.body.password && _bcryptjs["default"].compareSync(req.body.password, user.password)) {
                  signUser = {
                    id: user.id,
                    username: user.username,
                    email: user.email
                  };
                  token = _jsonwebtoken["default"].sign(signUser, _config["default"].secret, {
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

                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                res.status(404).send({
                  message: "An error has occurred: ".concat(_context.t0.message),
                  data: null
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function auth(_x, _x2) {
        return _auth.apply(this, arguments);
      }

      return auth;
    }()
  }]);
  return AuthorizationController;
}();

exports["default"] = AuthorizationController;
//# sourceMappingURL=authorization.controller.js.map