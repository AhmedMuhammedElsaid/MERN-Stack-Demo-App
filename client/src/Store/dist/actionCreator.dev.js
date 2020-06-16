"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Types = _interopRequireDefault(require("./Types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API = "http://localhost:4000/api/";

var getData = function getData() {
  return function (dispatch) {
    fetch(API).then(function (res) {
      return res.json();
    }).then(function (data) {
      dispatch({
        type: _Types["default"].FETCH_DATA_SUCCESS,
        data: data
      });
    })["catch"](function (err) {
      dispatch({
        type: _Types["default"].FETCH_DATA_FAILED,
        message: err
      });
    });
  };
};

var _default = getData;
exports["default"] = _default;