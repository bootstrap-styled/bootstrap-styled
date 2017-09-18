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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _transition = require('../../styled/utilities/transition');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Menu component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = { theme: _theme2.default };

var OverlayUnstyled = function (_React$Component) {
  _inherits(OverlayUnstyled, _React$Component);

  function OverlayUnstyled() {
    _classCallCheck(this, OverlayUnstyled);

    return _possibleConstructorReturn(this, (OverlayUnstyled.__proto__ || Object.getPrototypeOf(OverlayUnstyled)).apply(this, arguments));
  }

  _createClass(OverlayUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          active = _omit.active,
          attributes = _objectWithoutProperties(_omit, ['className', 'active']);

      return _react2.default.createElement('div', _extends({
        className: (0, _classnames2.default)(className, 'fade', {
          show: active
        })
      }, attributes));
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return OverlayUnstyled;
}(_react2.default.Component);

OverlayUnstyled.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  className: _propTypes2.default.string,
  active: _propTypes2.default.bool,
  theme: _propTypes2.default.object
  /* eslint-enable react/no-unused-prop-types */
};


var Overlay = (0, _styledComponents2.default)(OverlayUnstyled).withConfig({
  displayName: 'Overlay'
})(['', ''], function (props) {
  return '\n    position: fixed;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: ' + props.theme['$zindex-overlay'] + ';\n    background: ' + props.theme['$overlay-bg'] + ';\n    transform: translate3d(100%, 0, 0);\n    ' + (0, _transition.fade)(props.theme['$enable-transitions'], props.theme['$transition-fade']) + '\n    &.show {\n      transform: translate3d(0, 0, 0);\n    }\n  ';
});

Overlay.defaultProps = defaultProps;

exports.default = Overlay;
module.exports = exports['default'];