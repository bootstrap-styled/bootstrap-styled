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

var _Close = require('../Close');

var _Close2 = _interopRequireDefault(_Close);

var _tools = require('../../utils/tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Menu component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = {
  theme: _theme2.default
};

var OffsetNav = function (_React$Component) {
  _inherits(OffsetNav, _React$Component);

  function OffsetNav() {
    _classCallCheck(this, OffsetNav);

    return _possibleConstructorReturn(this, (OffsetNav.__proto__ || Object.getPrototypeOf(OffsetNav)).apply(this, arguments));
  }

  _createClass(OffsetNav, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme', 'elementWidth', 'animation-push']),
          className = _omit.className,
          children = _omit.children,
          active = _omit.active,
          dismiss = _omit.dismiss,
          menuClose = _omit.menuClose,
          offsetColor = _omit.offsetColor,
          cssModule = _omit.cssModule,
          menuRight = _omit['menu-right'],
          attributes = _objectWithoutProperties(_omit, ['className', 'children', 'active', 'dismiss', 'menuClose', 'offsetColor', 'cssModule', 'menu-right']);

      var menuDirectionClassNames = menuRight ? 'menu-right' : 'menu-left';

      var cssClasses = (0, _classnames2.default)(className, menuDirectionClassNames, _defineProperty({}, 'bg-' + offsetColor, offsetColor));

      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _tools.mapToCssModules)((0, _classnames2.default)(cssClasses, { active: active }), cssModule)
        }, attributes),
        menuClose && _react2.default.createElement(_Close2.default, { 'aria-label': 'Close', onDismiss: dismiss }),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return OffsetNav;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


OffsetNav.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  active: _propTypes2.default.bool,
  dismiss: _propTypes2.default.func,
  menuClose: _propTypes2.default.bool,
  elementWidth: _propTypes2.default.string,
  theme: _propTypes2.default.object,
  offsetColor: _propTypes2.default.string,
  'menu-right': _propTypes2.default.bool,
  'animation-push': _propTypes2.default.bool,
  cssModule: _propTypes2.default.object
  /* eslint-enable react/no-unused-prop-types */
};
OffsetNav = (0, _styledComponents2.default)(OffsetNav).withConfig({
  displayName: 'OffsetNav__OffsetNav'
})(['', ''], function (props) {
  return '\n    width: ' + (props.elementWidth ? props.elementWidth : props.theme['$menu-push-width']) + ';\n    height: 100%;\n    background-color: white;\n    z-index: ' + props.theme['$zindex-menu-push'] + ';\n  ';
});

OffsetNav.defaultProps = defaultProps;

exports.default = OffsetNav;
module.exports = exports['default'];