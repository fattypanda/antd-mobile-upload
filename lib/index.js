'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcUpload = require('rc-upload');

var _rcUpload2 = _interopRequireDefault(_rcUpload);

var _list = require('antd-mobile/lib/list');

var _list2 = _interopRequireDefault(_list);

var _ListItemFile = require('./ListItemFile');

var _ListItemFile2 = _interopRequireDefault(_ListItemFile);

var _enum = require('./enum');

var _propTypes = require('./propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _defaultProps = require('./defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _omit2 = require('lodash/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _uniqueId2 = require('lodash/uniqueId');

var _uniqueId3 = _interopRequireDefault(_uniqueId2);

var _remove2 = require('lodash/remove');

var _remove3 = _interopRequireDefault(_remove2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

require('./style/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var error = function error(message) {
  throw new Error(message);
};
var exclude = ['files', 'onRemove', 'onClickFile', 'List', 'ListItemFile'];

var Upload = function (_Component) {
  _inherits(Upload, _Component);

  function Upload(props) {
    _classCallCheck(this, Upload);

    var _this = _possibleConstructorReturn(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).apply(this, arguments));

    _initialiseProps.call(_this);

    var files = _this.completionFiles(props.files) || [];
    _this.state = { files: files };
    return _this;
  }

  //  补全文件格式


  //  上传前的默认行为


  //  上传前的处理


  //  上传错误的处理


  //  上传成功的处理


  //  获取上传成功之后返回的 URL


  //  上传进度的处理


  //  上传完成后的回调


  //  点击删除的回调


  //  点击文件的回调


  //  是否超出文件大小


  //  是否超出文件总数


  _createClass(Upload, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var rcUploadProps = (0, _omit3.default)(this.props, exclude);
      var _state$files = this.state.files,
          files = _state$files === undefined ? [] : _state$files;


      return _react2.default.createElement(
        'div',
        { className: 'antd-mobile-upload' },
        _react2.default.createElement(
          _list2.default,
          null,
          Array.isArray(files) && files.map(function () {
            var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var index = arguments[1];

            return _react2.default.createElement(_ListItemFile2.default, _extends({
              key: index
            }, file, {
              onRemove: _this2.onRemove,
              onClickFile: _this2.onClickFile
            }));
          }),
          _react2.default.createElement(_rcUpload2.default, _extends({}, rcUploadProps, {
            beforeUpload: this.beforeUpload,
            onError: this.onError,
            onSuccess: this.onSuccess,
            onProgress: this.onProgress
          }))
        )
      );
    }
  }]);

  return Upload;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.completionFiles = function () {
    var files = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    return files.map(function () {
      var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var uid = file.uid,
          url = file.url,
          name = file.name,
          status = file.status;

      !uid && (0, _set3.default)(file, 'uid', (0, _uniqueId3.default)('upload-' + new Date().getTime() + '-'));
      if (url) {
        !status && (0, _set3.default)(file, 'status', _enum.PercentStatus.Done);
        !name && (0, _set3.default)(file, 'name', url.split('/').pop());
      }
      return file;
    });
  };

  this.beforeUploadAction = function () {
    var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _this3.isMatchLimit();
    _this3.isMatchSize(file);

    _this3.setState({
      files: [].concat(_toConsumableArray(_this3.state.files || []), [{
        file: file,
        name: file.name,
        uid: file.uid,
        percent: 0,
        status: _enum.PercentStatus.Ready
      }])
    });
  };

  this.beforeUpload = function () {
    var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var files = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var _props$beforeUpload = _this3.props.beforeUpload,
        beforeUpload = _props$beforeUpload === undefined ? null : _props$beforeUpload;

    if ((0, _isFunction3.default)(beforeUpload)) {
      return beforeUpload(file, files, _this3.beforeUploadAction);
    } else {
      return _this3.beforeUploadAction(file);
    }
  };

  this.onError = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var err = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var response = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!file.uid) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return _this3.setState(function (state) {
                return _extends({}, state, {
                  files: (0, _map3.default)(state.files, function () {
                    var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    var _file$uid = file.uid,
                        uid = _file$uid === undefined ? null : _file$uid;

                    if (uid === file.uid) {
                      (0, _set3.default)(file, 'status', _enum.PercentStatus.Error);
                    }
                    return file;
                  })
                });
              });

            case 3:
              if (!(0, _isFunction3.default)(_this3.props.onError)) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return _this3.props.onError(err, response, file);

            case 6:
              _context.next = 8;
              return _this3.onComplete();

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this3);
    }));

    return function () {
      return _ref.apply(this, arguments);
    };
  }();

  this.onSuccess = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var file = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var xhr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var url;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!file.uid) {
                _context2.next = 4;
                break;
              }

              url = _this3.getSuccessFileUrl(res);
              _context2.next = 4;
              return _this3.setState(function (state) {
                return _extends({}, state, {
                  files: (0, _map3.default)(state.files, function () {
                    var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    var _file$uid2 = file.uid,
                        uid = _file$uid2 === undefined ? null : _file$uid2;

                    if (uid === file.uid) {
                      (0, _set3.default)(file, 'status', _enum.PercentStatus.Done);
                      if (url) {
                        (0, _set3.default)(file, 'url', url);
                      }
                    }
                    return file;
                  })
                });
              });

            case 4:
              if (!(0, _isFunction3.default)(_this3.props.onSuccess)) {
                _context2.next = 7;
                break;
              }

              _context2.next = 7;
              return _this3.props.onSuccess(res, file, xhr);

            case 7:
              _context2.next = 9;
              return _this3.onComplete();

            case 9:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this3);
    }));

    return function () {
      return _ref2.apply(this, arguments);
    };
  }();

  this.getSuccessFileUrl = function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if ((0, _isFunction3.default)(_this3.props.getSuccessFileUrl)) {
      return _this3.props.getSuccessFileUrl(res);
    }
  };

  this.onProgress = function () {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var file = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (file.uid) {
      var _event$percent = event.percent,
          percent = _event$percent === undefined ? 0 : _event$percent;

      _this3.setState(function (state) {
        return _extends({}, state, {
          files: (0, _map3.default)(state.files, function () {
            var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var _file$uid3 = file.uid,
                uid = _file$uid3 === undefined ? null : _file$uid3;

            if (uid === file.uid && percent) {
              (0, _set3.default)(file, 'percent', percent);
            }
            return file;
          })
        });
      });
    }
    if ((0, _isFunction3.default)(_this3.props.onProgress)) {
      _this3.props.onProgress(event, file);
    }
  };

  this.onComplete = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(0, _isFunction3.default)(_this3.props.onComplete)) {
              _context3.next = 3;
              break;
            }

            _context3.next = 3;
            return _this3.props.onComplete(_this3.state.files);

          case 3:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this3);
  }));

  this.onRemove = function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
      var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _file$uid4, uid, files;

      return _regenerator2.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              e.stopPropagation();
              _file$uid4 = file.uid, uid = _file$uid4 === undefined ? null : _file$uid4;

              if (!uid) {
                _context4.next = 9;
                break;
              }

              files = (0, _remove3.default)(_this3.state.files, function (file) {
                return file.uid !== uid;
              });
              _context4.next = 6;
              return _this3.setState({ files: files });

            case 6:
              _context4.next = 8;
              return _this3.onComplete();

            case 8:
              if ((0, _isFunction3.default)(_this3.props.onRemove)) {
                _this3.props.onRemove(file, e);
              }

            case 9:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this3);
    }));

    return function () {
      return _ref4.apply(this, arguments);
    };
  }();

  this.onClickFile = function () {
    var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var url = file.url;

    e.stopPropagation();
    var open = (0, _isFunction3.default)(_this3.props.onClickFile) ? _this3.props.onClickFile : window.open;
    if (url) {
      open(file.url);
    } else {
      console.warn('url is null!');
    }
  };

  this.isMatchSize = function () {
    var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _props$size = _this3.props.size,
        size = _props$size === undefined ? null : _props$size;

    if (size && file.size > size) {
      error('超出上传文件大小！');
    }
  };

  this.isMatchLimit = function () {
    var _state$files2 = _this3.state.files,
        files = _state$files2 === undefined ? [] : _state$files2;
    var _props$limit = _this3.props.limit,
        limit = _props$limit === undefined ? null : _props$limit;

    if (limit && files.length + 2 > limit) {
      error('超出上传文件总数！');
    }
  };
};

exports.default = Upload;


Upload.propTypes = _propTypes2.default;
Upload.defaultProps = _defaultProps2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL1VwbG9hZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJlcnJvciIsIkVycm9yIiwibWVzc2FnZSIsImV4Y2x1ZGUiLCJVcGxvYWQiLCJwcm9wcyIsImFyZ3VtZW50cyIsImZpbGVzIiwiY29tcGxldGlvbkZpbGVzIiwic3RhdGUiLCJyY1VwbG9hZFByb3BzIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiZmlsZSIsImluZGV4Iiwib25SZW1vdmUiLCJvbkNsaWNrRmlsZSIsImJlZm9yZVVwbG9hZCIsIm9uRXJyb3IiLCJvblN1Y2Nlc3MiLCJvblByb2dyZXNzIiwiQ29tcG9uZW50IiwidWlkIiwidXJsIiwibmFtZSIsInN0YXR1cyIsIkRhdGUiLCJnZXRUaW1lIiwiUGVyY2VudFN0YXR1cyIsIkRvbmUiLCJzcGxpdCIsInBvcCIsImJlZm9yZVVwbG9hZEFjdGlvbiIsImlzTWF0Y2hMaW1pdCIsImlzTWF0Y2hTaXplIiwic2V0U3RhdGUiLCJwZXJjZW50IiwiUmVhZHkiLCJlcnIiLCJyZXNwb25zZSIsIm9uQ29tcGxldGUiLCJyZXMiLCJ4aHIiLCJnZXRTdWNjZXNzRmlsZVVybCIsImV2ZW50IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIm9wZW4iLCJ3aW5kb3ciLCJjb25zb2xlIiwid2FybiIsInNpemUiLCJsaW1pdCIsImxlbmd0aCIsInByb3BUeXBlcyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxRQUFRLFNBQVJBLEtBQVEsVUFBVztBQUFFLFFBQU0sSUFBSUMsS0FBSixDQUFVQyxPQUFWLENBQU47QUFBMEIsQ0FBckQ7QUFDQSxJQUFNQyxVQUFVLENBQUMsT0FBRCxFQUFVLFVBQVYsRUFBc0IsYUFBdEIsRUFBcUMsTUFBckMsRUFBNkMsY0FBN0MsQ0FBaEI7O0lBRXFCQyxNOzs7QUFFbkIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpSEFDUkMsU0FEUTs7QUFBQTs7QUFHakIsUUFBTUMsUUFBUSxNQUFLQyxlQUFMLENBQXFCSCxNQUFNRSxLQUEzQixLQUFxQyxFQUFuRDtBQUNBLFVBQUtFLEtBQUwsR0FBYSxFQUFFRixZQUFGLEVBQWI7QUFKaUI7QUFLbEI7O0FBRUQ7OztBQWFBOzs7QUFtQkE7OztBQVVBOzs7QUFvQkE7OztBQXdCQTs7O0FBT0E7OztBQW9CQTs7O0FBT0E7OztBQWNBOzs7QUFZQTs7O0FBUUE7Ozs7OzZCQVNVO0FBQUE7O0FBQ1IsVUFBTUcsZ0JBQWdCLG9CQUFNLEtBQUtMLEtBQVgsRUFBa0JGLE9BQWxCLENBQXRCO0FBRFEseUJBRWUsS0FBS00sS0FGcEIsQ0FFQUYsS0FGQTtBQUFBLFVBRUFBLEtBRkEsZ0NBRVEsRUFGUjs7O0FBSVIsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXLG9CQUFoQjtBQUNFO0FBQUMsd0JBQUQ7QUFBQTtBQUNHSSxnQkFBTUMsT0FBTixDQUFjTCxLQUFkLEtBQXdCQSxNQUFNTSxHQUFOLENBQVUsWUFBc0I7QUFBQSxnQkFBckJDLElBQXFCLHVFQUFkLEVBQWM7QUFBQSxnQkFBVkMsS0FBVTs7QUFDdkQsbUJBQ0UsOEJBQUMsc0JBQUQ7QUFDRSxtQkFBS0E7QUFEUCxlQUVNRCxJQUZOO0FBR0Usd0JBQVUsT0FBS0UsUUFIakI7QUFJRSwyQkFBYSxPQUFLQztBQUpwQixlQURGO0FBUUQsV0FUd0IsQ0FEM0I7QUFXRSx3Q0FBQyxrQkFBRCxlQUNNUCxhQUROO0FBRUUsMEJBQWMsS0FBS1EsWUFGckI7QUFHRSxxQkFBUyxLQUFLQyxPQUhoQjtBQUlFLHVCQUFXLEtBQUtDLFNBSmxCO0FBS0Usd0JBQVksS0FBS0M7QUFMbkI7QUFYRjtBQURGLE9BREY7QUF1QkQ7Ozs7RUF2TWlDQyxnQjs7Ozs7T0FVbENkLGUsR0FBa0IsWUFBZ0I7QUFBQSxRQUFmRCxLQUFlLHVFQUFQLEVBQU87O0FBQ2hDLFdBQU9BLE1BQU1NLEdBQU4sQ0FBVSxZQUFlO0FBQUEsVUFBZEMsSUFBYyx1RUFBUCxFQUFPO0FBQUEsVUFDdEJTLEdBRHNCLEdBQ0tULElBREwsQ0FDdEJTLEdBRHNCO0FBQUEsVUFDakJDLEdBRGlCLEdBQ0tWLElBREwsQ0FDakJVLEdBRGlCO0FBQUEsVUFDWkMsSUFEWSxHQUNLWCxJQURMLENBQ1pXLElBRFk7QUFBQSxVQUNOQyxNQURNLEdBQ0taLElBREwsQ0FDTlksTUFETTs7QUFFOUIsT0FBQ0gsR0FBRCxJQUFRLG1CQUFLVCxJQUFMLEVBQVcsS0FBWCxFQUFrQixvQ0FBb0IsSUFBSWEsSUFBSixHQUFXQyxPQUFYLEVBQXBCLE9BQWxCLENBQVI7QUFDQSxVQUFJSixHQUFKLEVBQVM7QUFDUCxTQUFDRSxNQUFELElBQVcsbUJBQUtaLElBQUwsRUFBVyxRQUFYLEVBQXFCZSxvQkFBY0MsSUFBbkMsQ0FBWDtBQUNBLFNBQUNMLElBQUQsSUFBUyxtQkFBS1gsSUFBTCxFQUFXLE1BQVgsRUFBbUJVLElBQUlPLEtBQUosQ0FBVSxHQUFWLEVBQWVDLEdBQWYsRUFBbkIsQ0FBVDtBQUNEO0FBQ0QsYUFBT2xCLElBQVA7QUFDRCxLQVJNLENBQVA7QUFTRCxHOztPQUdEbUIsa0IsR0FBcUIsWUFBZTtBQUFBLFFBQWRuQixJQUFjLHVFQUFQLEVBQU87O0FBQ2xDLFdBQUtvQixZQUFMO0FBQ0EsV0FBS0MsV0FBTCxDQUFpQnJCLElBQWpCOztBQUVBLFdBQUtzQixRQUFMLENBQWM7QUFDWjdCLDBDQUNLLE9BQUtFLEtBQUwsQ0FBV0YsS0FBWCxJQUFvQixFQUR6QixJQUVFO0FBQ0VPLGtCQURGO0FBRUVXLGNBQU1YLEtBQUtXLElBRmI7QUFHRUYsYUFBS1QsS0FBS1MsR0FIWjtBQUlFYyxpQkFBUyxDQUpYO0FBS0VYLGdCQUFRRyxvQkFBY1M7QUFMeEIsT0FGRjtBQURZLEtBQWQ7QUFZRCxHOztPQUdEcEIsWSxHQUFlLFlBQTJCO0FBQUEsUUFBMUJKLElBQTBCLHVFQUFuQixFQUFtQjtBQUFBLFFBQWZQLEtBQWUsdUVBQVAsRUFBTztBQUFBLDhCQUNSLE9BQUtGLEtBREcsQ0FDaENhLFlBRGdDO0FBQUEsUUFDaENBLFlBRGdDLHVDQUNqQixJQURpQjs7QUFFeEMsUUFBSSwwQkFBWUEsWUFBWixDQUFKLEVBQStCO0FBQzdCLGFBQU9BLGFBQWFKLElBQWIsRUFBbUJQLEtBQW5CLEVBQTBCLE9BQUswQixrQkFBL0IsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU8sT0FBS0Esa0JBQUwsQ0FBd0JuQixJQUF4QixDQUFQO0FBQ0Q7QUFDRixHOztPQUdESyxPOzBFQUFVO0FBQUEsVUFBT29CLEdBQVAsdUVBQWEsRUFBYjtBQUFBLFVBQWlCQyxRQUFqQix1RUFBNEIsRUFBNUI7QUFBQSxVQUFnQzFCLElBQWhDLHVFQUF1QyxFQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0pBLEtBQUtTLEdBREQ7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFFQSxPQUFLYSxRQUFMLENBQWM7QUFBQSxvQ0FDZjNCLEtBRGU7QUFFbEJGLHlCQUFPLG1CQUFLRSxNQUFNRixLQUFYLEVBQWtCLFlBQWU7QUFBQSx3QkFBZE8sSUFBYyx1RUFBUCxFQUFPO0FBQUEsb0NBQ2ZBLElBRGUsQ0FDOUJTLEdBRDhCO0FBQUEsd0JBQzlCQSxHQUQ4Qiw2QkFDeEIsSUFEd0I7O0FBRXRDLHdCQUFJQSxRQUFRVCxLQUFLUyxHQUFqQixFQUFzQjtBQUNwQix5Q0FBS1QsSUFBTCxFQUFXLFFBQVgsRUFBcUJlLG9CQUFjNUIsS0FBbkM7QUFDRDtBQUNELDJCQUFPYSxJQUFQO0FBQ0QsbUJBTk07QUFGVztBQUFBLGVBQWQsQ0FGQTs7QUFBQTtBQUFBLG1CQWFMLDBCQUFZLE9BQUtULEtBQUwsQ0FBV2MsT0FBdkIsQ0FiSztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQWNBLE9BQUtkLEtBQUwsQ0FBV2MsT0FBWCxDQUFtQm9CLEdBQW5CLEVBQXdCQyxRQUF4QixFQUFrQzFCLElBQWxDLENBZEE7O0FBQUE7QUFBQTtBQUFBLHFCQWdCRixPQUFLMkIsVUFBTCxFQWhCRTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7O09Bb0JWckIsUzsyRUFBWTtBQUFBLFVBQU9zQixHQUFQLHVFQUFhLEVBQWI7QUFBQSxVQUFpQjVCLElBQWpCLHVFQUF3QixFQUF4QjtBQUFBLFVBQTRCNkIsR0FBNUIsdUVBQWtDLEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNON0IsS0FBS1MsR0FEQztBQUFBO0FBQUE7QUFBQTs7QUFFRkMsaUJBRkUsR0FFSSxPQUFLb0IsaUJBQUwsQ0FBdUJGLEdBQXZCLENBRko7QUFBQTtBQUFBLHFCQUdGLE9BQUtOLFFBQUwsQ0FBYztBQUFBLG9DQUNmM0IsS0FEZTtBQUVsQkYseUJBQU8sbUJBQUtFLE1BQU1GLEtBQVgsRUFBa0IsWUFBZTtBQUFBLHdCQUFkTyxJQUFjLHVFQUFQLEVBQU87QUFBQSxxQ0FDZkEsSUFEZSxDQUM5QlMsR0FEOEI7QUFBQSx3QkFDOUJBLEdBRDhCLDhCQUN4QixJQUR3Qjs7QUFFdEMsd0JBQUlBLFFBQVFULEtBQUtTLEdBQWpCLEVBQXNCO0FBQ3BCLHlDQUFLVCxJQUFMLEVBQVcsUUFBWCxFQUFxQmUsb0JBQWNDLElBQW5DO0FBQ0EsMEJBQUlOLEdBQUosRUFBUztBQUNQLDJDQUFLVixJQUFMLEVBQVcsS0FBWCxFQUFrQlUsR0FBbEI7QUFDRDtBQUNGO0FBQ0QsMkJBQU9WLElBQVA7QUFDRCxtQkFUTTtBQUZXO0FBQUEsZUFBZCxDQUhFOztBQUFBO0FBQUEsbUJBaUJQLDBCQUFZLE9BQUtULEtBQUwsQ0FBV2UsU0FBdkIsQ0FqQk87QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFrQkYsT0FBS2YsS0FBTCxDQUFXZSxTQUFYLENBQXFCc0IsR0FBckIsRUFBMEI1QixJQUExQixFQUFnQzZCLEdBQWhDLENBbEJFOztBQUFBO0FBQUE7QUFBQSxxQkFvQkosT0FBS0YsVUFBTCxFQXBCSTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLOzs7Ozs7O09Bd0JaRyxpQixHQUFvQixZQUFjO0FBQUEsUUFBYkYsR0FBYSx1RUFBUCxFQUFPOztBQUNoQyxRQUFHLDBCQUFZLE9BQUtyQyxLQUFMLENBQVd1QyxpQkFBdkIsQ0FBSCxFQUE4QztBQUM1QyxhQUFPLE9BQUt2QyxLQUFMLENBQVd1QyxpQkFBWCxDQUE2QkYsR0FBN0IsQ0FBUDtBQUNEO0FBQ0YsRzs7T0FHRHJCLFUsR0FBYSxZQUEyQjtBQUFBLFFBQTFCd0IsS0FBMEIsdUVBQWxCLEVBQWtCO0FBQUEsUUFBZC9CLElBQWMsdUVBQVAsRUFBTzs7QUFDdEMsUUFBSUEsS0FBS1MsR0FBVCxFQUFjO0FBQUEsMkJBQ1lzQixLQURaLENBQ0pSLE9BREk7QUFBQSxVQUNKQSxPQURJLGtDQUNNLENBRE47O0FBRVosYUFBS0QsUUFBTCxDQUFjO0FBQUEsNEJBQ1QzQixLQURTO0FBRVpGLGlCQUFPLG1CQUFLRSxNQUFNRixLQUFYLEVBQWtCLFlBQWU7QUFBQSxnQkFBZE8sSUFBYyx1RUFBUCxFQUFPO0FBQUEsNkJBQ2ZBLElBRGUsQ0FDOUJTLEdBRDhCO0FBQUEsZ0JBQzlCQSxHQUQ4Qiw4QkFDeEIsSUFEd0I7O0FBRXRDLGdCQUFJQSxRQUFRVCxLQUFLUyxHQUFiLElBQW9CYyxPQUF4QixFQUFpQztBQUMvQixpQ0FBS3ZCLElBQUwsRUFBVyxTQUFYLEVBQXNCdUIsT0FBdEI7QUFDRDtBQUNELG1CQUFPdkIsSUFBUDtBQUNELFdBTk07QUFGSztBQUFBLE9BQWQ7QUFVRDtBQUNELFFBQUcsMEJBQVksT0FBS1QsS0FBTCxDQUFXZ0IsVUFBdkIsQ0FBSCxFQUF1QztBQUNyQyxhQUFLaEIsS0FBTCxDQUFXZ0IsVUFBWCxDQUFzQndCLEtBQXRCLEVBQTZCL0IsSUFBN0I7QUFDRDtBQUNGLEc7O09BR0QyQixVLDhEQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUiwwQkFBWSxPQUFLcEMsS0FBTCxDQUFXb0MsVUFBdkIsQ0FEUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1CQUVILE9BQUtwQyxLQUFMLENBQVdvQyxVQUFYLENBQXNCLE9BQUtoQyxLQUFMLENBQVdGLEtBQWpDLENBRkc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7T0FPYlMsUTsyRUFBVztBQUFBLFVBQU9GLElBQVAsdUVBQWMsRUFBZDtBQUFBLFVBQWtCZ0MsQ0FBbEIsdUVBQXNCLEVBQXRCOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1RBLGdCQUFFQyxlQUFGO0FBRFMsMkJBRWNqQyxJQUZkLENBRURTLEdBRkMsRUFFREEsR0FGQyw4QkFFSyxJQUZMOztBQUFBLG1CQUdMQSxHQUhLO0FBQUE7QUFBQTtBQUFBOztBQUlEaEIsbUJBSkMsR0FJTyxzQkFBUSxPQUFLRSxLQUFMLENBQVdGLEtBQW5CLEVBQTBCO0FBQUEsdUJBQVFPLEtBQUtTLEdBQUwsS0FBYUEsR0FBckI7QUFBQSxlQUExQixDQUpQO0FBQUE7QUFBQSxxQkFLRCxPQUFLYSxRQUFMLENBQWMsRUFBRTdCLFlBQUYsRUFBZCxDQUxDOztBQUFBO0FBQUE7QUFBQSxxQkFNRCxPQUFLa0MsVUFBTCxFQU5DOztBQUFBO0FBT1Asa0JBQUksMEJBQVksT0FBS3BDLEtBQUwsQ0FBV1csUUFBdkIsQ0FBSixFQUFzQztBQUNwQyx1QkFBS1gsS0FBTCxDQUFXVyxRQUFYLENBQW9CRixJQUFwQixFQUEwQmdDLENBQTFCO0FBQ0Q7O0FBVE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSzs7Ozs7OztPQWNYN0IsVyxHQUFjLFlBQXVCO0FBQUEsUUFBdEJILElBQXNCLHVFQUFmLEVBQWU7QUFBQSxRQUFYZ0MsQ0FBVyx1RUFBUCxFQUFPO0FBQUEsUUFDM0J0QixHQUQyQixHQUNuQlYsSUFEbUIsQ0FDM0JVLEdBRDJCOztBQUVuQ3NCLE1BQUVDLGVBQUY7QUFDQSxRQUFNQyxPQUFPLDBCQUFZLE9BQUszQyxLQUFMLENBQVdZLFdBQXZCLElBQXFDLE9BQUtaLEtBQUwsQ0FBV1ksV0FBaEQsR0FBNkRnQyxPQUFPRCxJQUFqRjtBQUNBLFFBQUl4QixHQUFKLEVBQVM7QUFDUHdCLFdBQUtsQyxLQUFLVSxHQUFWO0FBQ0QsS0FGRCxNQUVPO0FBQ0wwQixjQUFRQyxJQUFSLENBQWEsY0FBYjtBQUNEO0FBQ0YsRzs7T0FHRGhCLFcsR0FBYyxZQUFlO0FBQUEsUUFBZHJCLElBQWMsdUVBQVAsRUFBTztBQUFBLHNCQUNILE9BQUtULEtBREYsQ0FDbkIrQyxJQURtQjtBQUFBLFFBQ25CQSxJQURtQiwrQkFDWixJQURZOztBQUUzQixRQUFJQSxRQUFRdEMsS0FBS3NDLElBQUwsR0FBWUEsSUFBeEIsRUFBOEI7QUFDNUJwRCxZQUFNLFdBQU47QUFDRDtBQUNGLEc7O09BR0RrQyxZLEdBQWUsWUFBTTtBQUFBLHdCQUNJLE9BQUt6QixLQURULENBQ1hGLEtBRFc7QUFBQSxRQUNYQSxLQURXLGlDQUNILEVBREc7QUFBQSx1QkFFTSxPQUFLRixLQUZYLENBRVhnRCxLQUZXO0FBQUEsUUFFWEEsS0FGVyxnQ0FFSCxJQUZHOztBQUduQixRQUFJQSxTQUFVOUMsTUFBTStDLE1BQU4sR0FBZSxDQUFoQixHQUFxQkQsS0FBbEMsRUFBeUM7QUFDdkNyRCxZQUFNLFdBQU47QUFDRDtBQUNGLEc7OztrQkExS2tCSSxNOzs7QUEwTXJCQSxPQUFPbUQsU0FBUCxHQUFtQkEsbUJBQW5CO0FBQ0FuRCxPQUFPb0QsWUFBUCxHQUFzQkEsc0JBQXRCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFJjVXBsb2FkIGZyb20gJ3JjLXVwbG9hZCc7XG5pbXBvcnQgTGlzdCBmcm9tICdhbnRkLW1vYmlsZS9saWIvbGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW1GaWxlIGZyb20gJy4vTGlzdEl0ZW1GaWxlJztcblxuaW1wb3J0IHsgUGVyY2VudFN0YXR1cyB9IGZyb20gJy4vZW51bSc7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcFR5cGVzJztcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0UHJvcHMnO1xuXG5pbXBvcnQgX29taXQgZnJvbSAnbG9kYXNoL29taXQnO1xuaW1wb3J0IF9zZXQgZnJvbSAnbG9kYXNoL3NldCc7XG5pbXBvcnQgX21hcCBmcm9tICdsb2Rhc2gvbWFwJztcbmltcG9ydCBfdW5pcXVlSWQgZnJvbSAnbG9kYXNoL3VuaXF1ZUlkJztcbmltcG9ydCBfcmVtb3ZlIGZyb20gJ2xvZGFzaC9yZW1vdmUnO1xuaW1wb3J0IF9pc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC9pc0Z1bmN0aW9uJztcblxuaW1wb3J0ICcuL3N0eWxlL2luZGV4JztcblxuY29uc3QgZXJyb3IgPSBtZXNzYWdlID0+IHsgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpIH07XG5jb25zdCBleGNsdWRlID0gWydmaWxlcycsICdvblJlbW92ZScsICdvbkNsaWNrRmlsZScsICdMaXN0JywgJ0xpc3RJdGVtRmlsZSddO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGxvYWQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcblxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5jb21wbGV0aW9uRmlsZXMocHJvcHMuZmlsZXMpIHx8IFtdO1xuICAgIHRoaXMuc3RhdGUgPSB7IGZpbGVzIH1cbiAgfVxuXG4gIC8vICDooaXlhajmlofku7bmoLzlvI9cbiAgY29tcGxldGlvbkZpbGVzID0gKGZpbGVzID0gW10pID0+IHtcbiAgICByZXR1cm4gZmlsZXMubWFwKChmaWxlID0ge30pID0+IHtcbiAgICAgIGNvbnN0IHsgdWlkLCB1cmwsIG5hbWUsIHN0YXR1cyB9ID0gZmlsZTtcbiAgICAgICF1aWQgJiYgX3NldChmaWxlLCAndWlkJywgX3VuaXF1ZUlkKGB1cGxvYWQtJHtuZXcgRGF0ZSgpLmdldFRpbWUoKX0tYCkpO1xuICAgICAgaWYgKHVybCkge1xuICAgICAgICAhc3RhdHVzICYmIF9zZXQoZmlsZSwgJ3N0YXR1cycsIFBlcmNlbnRTdGF0dXMuRG9uZSk7XG4gICAgICAgICFuYW1lICYmIF9zZXQoZmlsZSwgJ25hbWUnLCB1cmwuc3BsaXQoJy8nKS5wb3AoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmlsZTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyAg5LiK5Lyg5YmN55qE6buY6K6k6KGM5Li6XG4gIGJlZm9yZVVwbG9hZEFjdGlvbiA9IChmaWxlID0ge30pID0+IHtcbiAgICB0aGlzLmlzTWF0Y2hMaW1pdCgpO1xuICAgIHRoaXMuaXNNYXRjaFNpemUoZmlsZSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGZpbGVzOiBbXG4gICAgICAgIC4uLnRoaXMuc3RhdGUuZmlsZXMgfHwgW10sXG4gICAgICAgIHtcbiAgICAgICAgICBmaWxlLFxuICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICB1aWQ6IGZpbGUudWlkLFxuICAgICAgICAgIHBlcmNlbnQ6IDAsXG4gICAgICAgICAgc3RhdHVzOiBQZXJjZW50U3RhdHVzLlJlYWR5LFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gIH07XG5cbiAgLy8gIOS4iuS8oOWJjeeahOWkhOeQhlxuICBiZWZvcmVVcGxvYWQgPSAoZmlsZSA9IHt9LCBmaWxlcyA9IFtdKSA9PiB7XG4gICAgY29uc3QgeyBiZWZvcmVVcGxvYWQgPSBudWxsIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChfaXNGdW5jdGlvbihiZWZvcmVVcGxvYWQpKSB7XG4gICAgICByZXR1cm4gYmVmb3JlVXBsb2FkKGZpbGUsIGZpbGVzLCB0aGlzLmJlZm9yZVVwbG9hZEFjdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmJlZm9yZVVwbG9hZEFjdGlvbihmaWxlKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gIOS4iuS8oOmUmeivr+eahOWkhOeQhlxuICBvbkVycm9yID0gYXN5bmMgKGVyciA9IHt9LCByZXNwb25zZSA9IHt9LCBmaWxlID0ge30pID0+IHtcbiAgICBpZiAoZmlsZS51aWQpIHtcbiAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbGVzOiBfbWFwKHN0YXRlLmZpbGVzLCAoZmlsZSA9IHt9KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyB1aWQgPSBudWxsIH0gPSBmaWxlO1xuICAgICAgICAgIGlmICh1aWQgPT09IGZpbGUudWlkKSB7XG4gICAgICAgICAgICBfc2V0KGZpbGUsICdzdGF0dXMnLCBQZXJjZW50U3RhdHVzLkVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZpbGU7XG4gICAgICAgIH0pXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGlmKF9pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25FcnJvcikpIHtcbiAgICAgIGF3YWl0IHRoaXMucHJvcHMub25FcnJvcihlcnIsIHJlc3BvbnNlLCBmaWxlKTtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5vbkNvbXBsZXRlKCk7XG4gIH07XG5cbiAgLy8gIOS4iuS8oOaIkOWKn+eahOWkhOeQhlxuICBvblN1Y2Nlc3MgPSBhc3luYyAocmVzID0ge30sIGZpbGUgPSB7fSwgeGhyID0ge30pID0+IHtcbiAgICBpZiAoZmlsZS51aWQpIHtcbiAgICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0U3VjY2Vzc0ZpbGVVcmwocmVzKTtcbiAgICAgIGF3YWl0IHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbGVzOiBfbWFwKHN0YXRlLmZpbGVzLCAoZmlsZSA9IHt9KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyB1aWQgPSBudWxsIH0gPSBmaWxlO1xuICAgICAgICAgIGlmICh1aWQgPT09IGZpbGUudWlkKSB7XG4gICAgICAgICAgICBfc2V0KGZpbGUsICdzdGF0dXMnLCBQZXJjZW50U3RhdHVzLkRvbmUpO1xuICAgICAgICAgICAgaWYgKHVybCkge1xuICAgICAgICAgICAgICBfc2V0KGZpbGUsICd1cmwnLCB1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmlsZTtcbiAgICAgICAgfSlcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYoX2lzRnVuY3Rpb24odGhpcy5wcm9wcy5vblN1Y2Nlc3MpKSB7XG4gICAgICBhd2FpdCB0aGlzLnByb3BzLm9uU3VjY2VzcyhyZXMsIGZpbGUsIHhocik7XG4gICAgfVxuICAgIGF3YWl0IHRoaXMub25Db21wbGV0ZSgpO1xuICB9O1xuXG4gIC8vICDojrflj5bkuIrkvKDmiJDlip/kuYvlkI7ov5Tlm57nmoQgVVJMXG4gIGdldFN1Y2Nlc3NGaWxlVXJsID0gKHJlcyA9IHt9KSA9PiB7XG4gICAgaWYoX2lzRnVuY3Rpb24odGhpcy5wcm9wcy5nZXRTdWNjZXNzRmlsZVVybCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmdldFN1Y2Nlc3NGaWxlVXJsKHJlcyk7XG4gICAgfVxuICB9O1xuXG4gIC8vICDkuIrkvKDov5vluqbnmoTlpITnkIZcbiAgb25Qcm9ncmVzcyA9IChldmVudCA9IHt9LCBmaWxlID0ge30pID0+IHtcbiAgICBpZiAoZmlsZS51aWQpIHtcbiAgICAgIGNvbnN0IHsgcGVyY2VudCA9IDAgfSA9IGV2ZW50O1xuICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZmlsZXM6IF9tYXAoc3RhdGUuZmlsZXMsIChmaWxlID0ge30pID0+IHtcbiAgICAgICAgICBjb25zdCB7IHVpZCA9IG51bGwgfSA9IGZpbGU7XG4gICAgICAgICAgaWYgKHVpZCA9PT0gZmlsZS51aWQgJiYgcGVyY2VudCkge1xuICAgICAgICAgICAgX3NldChmaWxlLCAncGVyY2VudCcsIHBlcmNlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmlsZTtcbiAgICAgICAgfSlcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYoX2lzRnVuY3Rpb24odGhpcy5wcm9wcy5vblByb2dyZXNzKSkge1xuICAgICAgdGhpcy5wcm9wcy5vblByb2dyZXNzKGV2ZW50LCBmaWxlKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gIOS4iuS8oOWujOaIkOWQjueahOWbnuiwg1xuICBvbkNvbXBsZXRlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmKF9pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25Db21wbGV0ZSkpIHtcbiAgICAgIGF3YWl0IHRoaXMucHJvcHMub25Db21wbGV0ZSh0aGlzLnN0YXRlLmZpbGVzKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gIOeCueWHu+WIoOmZpOeahOWbnuiwg1xuICBvblJlbW92ZSA9IGFzeW5jIChmaWxlID0ge30sIGUgPSB7fSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgeyB1aWQgPSBudWxsIH0gPSBmaWxlO1xuICAgIGlmICh1aWQpIHtcbiAgICAgIGNvbnN0IGZpbGVzID0gX3JlbW92ZSh0aGlzLnN0YXRlLmZpbGVzLCBmaWxlID0+IGZpbGUudWlkICE9PSB1aWQpO1xuICAgICAgYXdhaXQgdGhpcy5zZXRTdGF0ZSh7IGZpbGVzIH0pO1xuICAgICAgYXdhaXQgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgICBpZiAoX2lzRnVuY3Rpb24odGhpcy5wcm9wcy5vblJlbW92ZSkpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlbW92ZShmaWxlLCBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gIOeCueWHu+aWh+S7tueahOWbnuiwg1xuICBvbkNsaWNrRmlsZSA9IChmaWxlID0ge30sIGUgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHsgdXJsIH0gPSBmaWxlO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3Qgb3BlbiA9IF9pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25DbGlja0ZpbGUpPyB0aGlzLnByb3BzLm9uQ2xpY2tGaWxlOiB3aW5kb3cub3BlbjtcbiAgICBpZiAodXJsKSB7XG4gICAgICBvcGVuKGZpbGUudXJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCd1cmwgaXMgbnVsbCEnKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gIOaYr+WQpui2heWHuuaWh+S7tuWkp+Wwj1xuICBpc01hdGNoU2l6ZSA9IChmaWxlID0ge30pID0+IHtcbiAgICBjb25zdCB7IHNpemUgPSBudWxsIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzaXplICYmIGZpbGUuc2l6ZSA+IHNpemUpIHtcbiAgICAgIGVycm9yKCfotoXlh7rkuIrkvKDmlofku7blpKflsI/vvIEnKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gIOaYr+WQpui2heWHuuaWh+S7tuaAu+aVsFxuICBpc01hdGNoTGltaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBmaWxlcyA9IFtdIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgbGltaXQgPSBudWxsIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChsaW1pdCAmJiAoZmlsZXMubGVuZ3RoICsgMikgPiBsaW1pdCkge1xuICAgICAgZXJyb3IoJ+i2heWHuuS4iuS8oOaWh+S7tuaAu+aVsO+8gScpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHJjVXBsb2FkUHJvcHMgPSBfb21pdCh0aGlzLnByb3BzLCBleGNsdWRlKTtcbiAgICBjb25zdCB7IGZpbGVzID0gW10gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eydhbnRkLW1vYmlsZS11cGxvYWQnfT5cbiAgICAgICAgPExpc3Q+XG4gICAgICAgICAge0FycmF5LmlzQXJyYXkoZmlsZXMpICYmIGZpbGVzLm1hcCgoZmlsZSA9IHt9LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpc3RJdGVtRmlsZVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgey4uLmZpbGV9XG4gICAgICAgICAgICAgICAgb25SZW1vdmU9e3RoaXMub25SZW1vdmV9XG4gICAgICAgICAgICAgICAgb25DbGlja0ZpbGU9e3RoaXMub25DbGlja0ZpbGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIDxSY1VwbG9hZFxuICAgICAgICAgICAgey4uLnJjVXBsb2FkUHJvcHN9XG4gICAgICAgICAgICBiZWZvcmVVcGxvYWQ9e3RoaXMuYmVmb3JlVXBsb2FkfVxuICAgICAgICAgICAgb25FcnJvcj17dGhpcy5vbkVycm9yfVxuICAgICAgICAgICAgb25TdWNjZXNzPXt0aGlzLm9uU3VjY2Vzc31cbiAgICAgICAgICAgIG9uUHJvZ3Jlc3M9e3RoaXMub25Qcm9ncmVzc31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0xpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblVwbG9hZC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5VcGxvYWQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuIl19