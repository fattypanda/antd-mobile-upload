'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListItem = require('antd-mobile/lib/list/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _icon = require('antd-mobile/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItemFile = function (_PureComponent) {
  _inherits(ListItemFile, _PureComponent);

  function ListItemFile() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ListItemFile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ListItemFile.__proto__ || Object.getPrototypeOf(ListItemFile)).call.apply(_ref, [this].concat(args))), _this), _this.onRemove = function () {
      var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if ((0, _isFunction3.default)(_this.props.onRemove)) {
        _this.props.onRemove(file, e);
      }
    }, _this.onClickFile = function () {
      var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if ((0, _isFunction3.default)(_this.props.onClickFile)) {
        _this.props.onClickFile(file, e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ListItemFile, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var file = this.props;
      var uid = file.uid,
          name = file.name,
          status = file.status,
          percent = file.percent;


      return _react2.default.createElement(
        _ListItem2.default,
        {
          key: uid,
          thumb: _react2.default.createElement('div', { className: (0, _classnames2.default)('am-upload-annex', _defineProperty({}, status, !!status)) }),
          extra: _react2.default.createElement(
            _react.Fragment,
            null,
            percent < 100 && parseInt(percent.toString(), 10) + '% ',
            _react2.default.createElement(_icon2.default, { onClick: function onClick(e) {
                return _this2.onRemove(file, e);
              }, type: 'cross', size: 'xs' })
          ),
          onClick: function onClick(e) {
            return _this2.onClickFile(file, e);
          }
        },
        name
      );
    }
  }]);

  return ListItemFile;
}(_react.PureComponent);

exports.default = ListItemFile;


ListItemFile.propTypes = {
  file: _propTypes2.default.object.isRequired,
  onRemove: _propTypes2.default.func,
  onClickFile: _propTypes2.default.func
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1VwbG9hZC9MaXN0SXRlbUZpbGUvaW5kZXguanMiXSwibmFtZXMiOlsiTGlzdEl0ZW1GaWxlIiwib25SZW1vdmUiLCJmaWxlIiwiZSIsInByb3BzIiwib25DbGlja0ZpbGUiLCJ1aWQiLCJuYW1lIiwic3RhdHVzIiwicGVyY2VudCIsInBhcnNlSW50IiwidG9TdHJpbmciLCJQdXJlQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUFQiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFFbkJDLFEsR0FBVyxZQUF1QjtBQUFBLFVBQXRCQyxJQUFzQix1RUFBZixFQUFlO0FBQUEsVUFBWEMsQ0FBVyx1RUFBUCxFQUFPOztBQUNoQyxVQUFJLDBCQUFZLE1BQUtDLEtBQUwsQ0FBV0gsUUFBdkIsQ0FBSixFQUFzQztBQUNwQyxjQUFLRyxLQUFMLENBQVdILFFBQVgsQ0FBb0JDLElBQXBCLEVBQTBCQyxDQUExQjtBQUNEO0FBQ0YsSyxRQUVERSxXLEdBQWMsWUFBdUI7QUFBQSxVQUF0QkgsSUFBc0IsdUVBQWYsRUFBZTtBQUFBLFVBQVhDLENBQVcsdUVBQVAsRUFBTzs7QUFDbkMsVUFBSSwwQkFBWSxNQUFLQyxLQUFMLENBQVdDLFdBQXZCLENBQUosRUFBeUM7QUFDdkMsY0FBS0QsS0FBTCxDQUFXQyxXQUFYLENBQXVCSCxJQUF2QixFQUE2QkMsQ0FBN0I7QUFDRDtBQUNGLEs7Ozs7OzZCQUVTO0FBQUE7O0FBQ1IsVUFBTUQsT0FBTyxLQUFLRSxLQUFsQjtBQURRLFVBRUFFLEdBRkEsR0FFK0JKLElBRi9CLENBRUFJLEdBRkE7QUFBQSxVQUVLQyxJQUZMLEdBRStCTCxJQUYvQixDQUVLSyxJQUZMO0FBQUEsVUFFV0MsTUFGWCxHQUUrQk4sSUFGL0IsQ0FFV00sTUFGWDtBQUFBLFVBRW1CQyxPQUZuQixHQUUrQlAsSUFGL0IsQ0FFbUJPLE9BRm5COzs7QUFJUixhQUNFO0FBQUMsMEJBQUQ7QUFBQTtBQUNFLGVBQUtILEdBRFA7QUFFRSxpQkFBTyx1Q0FBSyxXQUFXLDBCQUFHLGlCQUFILHNCQUF5QkUsTUFBekIsRUFBa0MsQ0FBQyxDQUFDQSxNQUFwQyxFQUFoQixHQUZUO0FBR0UsaUJBQ0U7QUFBQywyQkFBRDtBQUFBO0FBQ0dDLHNCQUFVLEdBQVYsSUFBb0JDLFNBQVNELFFBQVFFLFFBQVIsRUFBVCxFQUE2QixFQUE3QixDQUFwQixPQURIO0FBRUUsMENBQUMsY0FBRCxJQUFNLFNBQVM7QUFBQSx1QkFBSyxPQUFLVixRQUFMLENBQWNDLElBQWQsRUFBb0JDLENBQXBCLENBQUw7QUFBQSxlQUFmLEVBQTRDLE1BQU0sT0FBbEQsRUFBMkQsTUFBTSxJQUFqRTtBQUZGLFdBSko7QUFTRSxtQkFBUztBQUFBLG1CQUFLLE9BQUtFLFdBQUwsQ0FBaUJILElBQWpCLEVBQXVCQyxDQUF2QixDQUFMO0FBQUE7QUFUWDtBQVdHSTtBQVhILE9BREY7QUFlRDs7OztFQWpDdUNLLG9COztrQkFBckJaLFk7OztBQW9DckJBLGFBQWFhLFNBQWIsR0FBeUI7QUFDdkJYLFFBQU1ZLG9CQUFHQyxNQUFILENBQVVDLFVBRE87QUFFdkJmLFlBQVVhLG9CQUFHRyxJQUZVO0FBR3ZCWixlQUFhUyxvQkFBR0c7QUFITyxDQUF6QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdhbnRkLW1vYmlsZS9saWIvbGlzdC9MaXN0SXRlbSc7XG5pbXBvcnQgSWNvbiBmcm9tICdhbnRkLW1vYmlsZS9saWIvaWNvbic7XG5cbmltcG9ydCBQVCBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBfaXNGdW5jdGlvbiBmcm9tICdsb2Rhc2gvaXNGdW5jdGlvbic7XG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCAnLi9zdHlsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RJdGVtRmlsZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG4gIG9uUmVtb3ZlID0gKGZpbGUgPSB7fSwgZSA9IHt9KSA9PiB7XG4gICAgaWYgKF9pc0Z1bmN0aW9uKHRoaXMucHJvcHMub25SZW1vdmUpKSB7XG4gICAgICB0aGlzLnByb3BzLm9uUmVtb3ZlKGZpbGUsIGUpO1xuICAgIH1cbiAgfTtcblxuICBvbkNsaWNrRmlsZSA9IChmaWxlID0ge30sIGUgPSB7fSkgPT4ge1xuICAgIGlmIChfaXNGdW5jdGlvbih0aGlzLnByb3BzLm9uQ2xpY2tGaWxlKSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrRmlsZShmaWxlLCBlKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHVpZCwgbmFtZSwgc3RhdHVzLCBwZXJjZW50IH0gPSBmaWxlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0SXRlbVxuICAgICAgICBrZXk9e3VpZH1cbiAgICAgICAgdGh1bWI9ezxkaXYgY2xhc3NOYW1lPXtjcygnYW0tdXBsb2FkLWFubmV4JywgeyBbc3RhdHVzXTogISFzdGF0dXMgfSl9Lz59XG4gICAgICAgIGV4dHJhPXtcbiAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICB7cGVyY2VudCA8IDEwMCAmJiBgJHtwYXJzZUludChwZXJjZW50LnRvU3RyaW5nKCksIDEwKX0lIGB9XG4gICAgICAgICAgICA8SWNvbiBvbkNsaWNrPXtlID0+IHRoaXMub25SZW1vdmUoZmlsZSwgZSl9IHR5cGU9eydjcm9zcyd9IHNpemU9eyd4cyd9IC8+XG4gICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgfVxuICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMub25DbGlja0ZpbGUoZmlsZSwgZSl9XG4gICAgICA+XG4gICAgICAgIHtuYW1lfVxuICAgICAgPC9MaXN0SXRlbT5cbiAgICApO1xuICB9XG59XG5cbkxpc3RJdGVtRmlsZS5wcm9wVHlwZXMgPSB7XG4gIGZpbGU6IFBULm9iamVjdC5pc1JlcXVpcmVkLFxuICBvblJlbW92ZTogUFQuZnVuYyxcbiAgb25DbGlja0ZpbGU6IFBULmZ1bmMsXG59O1xuIl19