'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListItem = require('antd-mobile/lib/list/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _button = require('antd-mobile/lib/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop() {};
var extra = _react2.default.createElement(
  _button2.default,
  { size: 'small', type: 'primary', onClick: function onClick(e) {
      return e.target.click();
    } },
  '\u4E0A\u4F20'
);
var children = _react2.default.createElement(
  _ListItem2.default,
  { extra: extra },
  ''
);

var RcUpload = {
  component: 'span',
  prefixCls: 'rc-upload',
  data: {},
  headers: {},
  name: 'file',
  multipart: false,
  onReady: noop,
  onStart: noop,
  onError: noop,
  onSuccess: noop,
  supportServerRender: false,
  multiple: false,
  beforeUpload: null,
  customRequest: null,
  withCredentials: false
};

var Upload = _extends({}, RcUpload, {

  children: children,
  size: null,
  limit: null,
  files: [],
  onRemove: noop,
  onClickFile: noop,
  onComplete: noop,
  getSuccessFileUrl: function getSuccessFileUrl(res) {
    var _ref = res || {},
        _ref$ret = _ref.ret;

    _ref$ret = _ref$ret === undefined ? {} : _ref$ret;
    var _ref$ret$url = _ref$ret.url,
        url = _ref$ret$url === undefined ? '' : _ref$ret$url;

    return url;
  }
});

exports.default = Upload;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1VwbG9hZC9kZWZhdWx0UHJvcHMvaW5kZXguanMiXSwibmFtZXMiOlsibm9vcCIsImV4dHJhIiwiZSIsInRhcmdldCIsImNsaWNrIiwiY2hpbGRyZW4iLCJSY1VwbG9hZCIsImNvbXBvbmVudCIsInByZWZpeENscyIsImRhdGEiLCJoZWFkZXJzIiwibmFtZSIsIm11bHRpcGFydCIsIm9uUmVhZHkiLCJvblN0YXJ0Iiwib25FcnJvciIsIm9uU3VjY2VzcyIsInN1cHBvcnRTZXJ2ZXJSZW5kZXIiLCJtdWx0aXBsZSIsImJlZm9yZVVwbG9hZCIsImN1c3RvbVJlcXVlc3QiLCJ3aXRoQ3JlZGVudGlhbHMiLCJVcGxvYWQiLCJzaXplIiwibGltaXQiLCJmaWxlcyIsIm9uUmVtb3ZlIiwib25DbGlja0ZpbGUiLCJvbkNvbXBsZXRlIiwiZ2V0U3VjY2Vzc0ZpbGVVcmwiLCJyZXMiLCJyZXQiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxPQUFPLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCO0FBQ0EsSUFBTUMsUUFBUTtBQUFDLGtCQUFEO0FBQUEsSUFBUSxNQUFNLE9BQWQsRUFBdUIsTUFBTSxTQUE3QixFQUF3QyxTQUFTO0FBQUEsYUFBS0MsRUFBRUMsTUFBRixDQUFTQyxLQUFULEVBQUw7QUFBQSxLQUFqRDtBQUFBO0FBQUEsQ0FBZDtBQUNBLElBQU1DLFdBQVc7QUFBQyxvQkFBRDtBQUFBLElBQVUsT0FBT0osS0FBakI7QUFBeUI7QUFBekIsQ0FBakI7O0FBRUEsSUFBTUssV0FBVztBQUNmQyxhQUFXLE1BREk7QUFFZkMsYUFBVyxXQUZJO0FBR2ZDLFFBQU0sRUFIUztBQUlmQyxXQUFTLEVBSk07QUFLZkMsUUFBTSxNQUxTO0FBTWZDLGFBQVcsS0FOSTtBQU9mQyxXQUFTYixJQVBNO0FBUWZjLFdBQVNkLElBUk07QUFTZmUsV0FBU2YsSUFUTTtBQVVmZ0IsYUFBV2hCLElBVkk7QUFXZmlCLHVCQUFxQixLQVhOO0FBWWZDLFlBQVUsS0FaSztBQWFmQyxnQkFBYyxJQWJDO0FBY2ZDLGlCQUFlLElBZEE7QUFlZkMsbUJBQWlCO0FBZkYsQ0FBakI7O0FBa0JBLElBQU1DLHNCQUNEaEIsUUFEQzs7QUFHSkQsb0JBSEk7QUFJSmtCLFFBQU0sSUFKRjtBQUtKQyxTQUFPLElBTEg7QUFNSkMsU0FBTyxFQU5IO0FBT0pDLFlBQVUxQixJQVBOO0FBUUoyQixlQUFhM0IsSUFSVDtBQVNKNEIsY0FBWTVCLElBVFI7QUFVSjZCLHFCQUFtQixnQ0FBTztBQUFBLGVBQ1VDLE9BQU8sRUFEakI7QUFBQSx3QkFDaEJDLEdBRGdCOztBQUFBLHdDQUNJLEVBREo7QUFBQSxnQ0FDVEMsR0FEUztBQUFBLFFBQ1RBLEdBRFMsZ0NBQ0gsRUFERzs7QUFFeEIsV0FBT0EsR0FBUDtBQUNEO0FBYkcsRUFBTjs7a0JBZ0JlVixNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdhbnRkLW1vYmlsZS9saWIvbGlzdC9MaXN0SXRlbSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2FudGQtbW9iaWxlL2xpYi9idXR0b24nO1xuXG5jb25zdCBub29wID0gKCkgPT4ge307XG5jb25zdCBleHRyYSA9IDxCdXR0b24gc2l6ZT17J3NtYWxsJ30gdHlwZT17J3ByaW1hcnknfSBvbkNsaWNrPXtlID0+IGUudGFyZ2V0LmNsaWNrKCl9PuS4iuS8oDwvQnV0dG9uPjtcbmNvbnN0IGNoaWxkcmVuID0gPExpc3RJdGVtIGV4dHJhPXtleHRyYX0+eycnfTwvTGlzdEl0ZW0+O1xuXG5jb25zdCBSY1VwbG9hZCA9IHtcbiAgY29tcG9uZW50OiAnc3BhbicsXG4gIHByZWZpeENsczogJ3JjLXVwbG9hZCcsXG4gIGRhdGE6IHt9LFxuICBoZWFkZXJzOiB7fSxcbiAgbmFtZTogJ2ZpbGUnLFxuICBtdWx0aXBhcnQ6IGZhbHNlLFxuICBvblJlYWR5OiBub29wLFxuICBvblN0YXJ0OiBub29wLFxuICBvbkVycm9yOiBub29wLFxuICBvblN1Y2Nlc3M6IG5vb3AsXG4gIHN1cHBvcnRTZXJ2ZXJSZW5kZXI6IGZhbHNlLFxuICBtdWx0aXBsZTogZmFsc2UsXG4gIGJlZm9yZVVwbG9hZDogbnVsbCxcbiAgY3VzdG9tUmVxdWVzdDogbnVsbCxcbiAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZVxufTtcblxuY29uc3QgVXBsb2FkID0ge1xuICAuLi5SY1VwbG9hZCxcblxuICBjaGlsZHJlbixcbiAgc2l6ZTogbnVsbCxcbiAgbGltaXQ6IG51bGwsXG4gIGZpbGVzOiBbXSxcbiAgb25SZW1vdmU6IG5vb3AsXG4gIG9uQ2xpY2tGaWxlOiBub29wLFxuICBvbkNvbXBsZXRlOiBub29wLFxuICBnZXRTdWNjZXNzRmlsZVVybDogcmVzID0+IHtcbiAgICBjb25zdCB7IHJldDogeyB1cmwgPSAnJyB9ID0ge319ID0gcmVzIHx8IHt9O1xuICAgIHJldHVybiB1cmw7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWQ7XG4iXX0=