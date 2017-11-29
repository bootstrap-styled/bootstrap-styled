'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FigCaption component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = {
  theme: _theme2.default
};

var FigCaptionUnstyled = function (_React$Component) {
  _inherits(FigCaptionUnstyled, _React$Component);

  function FigCaptionUnstyled() {
    _classCallCheck(this, FigCaptionUnstyled);

    return _possibleConstructorReturn(this, (FigCaptionUnstyled.__proto__ || Object.getPrototypeOf(FigCaptionUnstyled)).apply(this, arguments));
  }

  _createClass(FigCaptionUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          right = _omit.right,
          rest = _objectWithoutProperties(_omit, ['className', 'children', 'right']);

      var classes = (0, _classnames2.default)('figure-caption', className, right ? 'text-right' : null);
      return _react2.default.createElement(
        'figcaption',
        _extends({
          className: classes
        }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return FigCaptionUnstyled;
}(_react2.default.Component);

FigCaptionUnstyled.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  theme: _propTypes2.default.object,
  right: _propTypes2.default.bool
  /* eslint-enable react/no-unused-prop-types */
};


var FigCaption = (0, _styledComponents2.default)(FigCaptionUnstyled).withConfig({
  displayName: 'FigCaption'
})(['', ''], function (props) {
  return '\n    &.figure-caption {\n      font-size: ' + props.theme['$figure-caption-font-size'] + ';\n      color: ' + props.theme['$figure-caption-color'] + ';\n    }\n  ';
});

FigCaption.defaultProps = defaultProps;

exports.default = FigCaption;
module.exports = exports['default'];