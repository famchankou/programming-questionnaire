"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _dbModels = _interopRequireDefault(require("../db-models"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * User CRUD operations controller
 */
var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    (0, _classCallCheck2["default"])(this, UserController);
  }

  (0, _createClass2["default"])(UserController, null, [{
    key: "create",

    /**
     * Crete User record
     * 
     * @param {Object} req 
     * @param {Object} res 
     */
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _dbModels["default"].User.create(_objectSpread({}, req.body, {
                  password: _bcryptjs["default"].hashSync(req.body.password, _bcryptjs["default"].genSaltSync(10))
                }));

              case 3:
                user = _context.sent;
                res.status(201).json(user);
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                res.status(400).json(_context.t0.message);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));

      function create(_x, _x2) {
        return _create.apply(this, arguments);
      }

      return create;
    }()
    /**
     * Update User record
     * 
     * @param {Object} req 
     * @param {Object} res 
     */

  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var userId, user;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                userId = req.params.userId;
                _context2.prev = 1;
                _context2.next = 4;
                return _dbModels["default"].User.findByPk("".concat(userId));

              case 4:
                user = _context2.sent;

                if (user) {
                  _context2.next = 9;
                  break;
                }

                res.status(404).json({
                  message: 'User Not Found'
                });
                _context2.next = 12;
                break;

              case 9:
                _context2.next = 11;
                return user.update({
                  username: req.body.username || user.username,
                  email: req.body.email || user.email,
                  password: req.body.password ? _bcryptjs["default"].hashSync(req.body.password, _bcryptjs["default"].genSaltSync(10)) : user.password
                });

              case 11:
                res.status(200).json();

              case 12:
                _context2.next = 17;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](1);
                res.status(400).json(_context2.t0.message);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 14]]);
      }));

      function update(_x3, _x4) {
        return _update.apply(this, arguments);
      }

      return update;
    }()
    /**
     * Delete User record
     * 
     * @param {Object} req 
     * @param {Object} res 
     */

  }, {
    key: "delete",
    value: function () {
      var _delete2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var userId;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                userId = req.params.userId;
                _context3.prev = 1;
                _context3.next = 4;
                return _dbModels["default"].User.destroy({
                  where: {
                    id: userId
                  }
                });

              case 4:
                res.status(204).json();
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](1);
                res.status(400).json(_context3.t0.message);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 7]]);
      }));

      function _delete(_x5, _x6) {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
    /**
     * Get specific User by ID
     * 
     * @param {Object} req 
     * @param {Object} res 
     */

  }, {
    key: "get",
    value: function () {
      var _get = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var userId, user;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                userId = req.params.userId;
                _context4.prev = 1;
                _context4.next = 4;
                return _dbModels["default"].User.findByPk("".concat(userId));

              case 4:
                user = _context4.sent;

                if (user) {
                  res.status(200).json(user);
                } else {
                  res.status(404).json({
                    message: 'User Not Found'
                  });
                }

                _context4.next = 11;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](1);
                res.status(400).json("".concat(_context4.t0.message));

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 8]]);
      }));

      function get(_x7, _x8) {
        return _get.apply(this, arguments);
      }

      return get;
    }()
  }]);
  return UserController;
}();

exports["default"] = UserController;
//# sourceMappingURL=user.controller.js.map