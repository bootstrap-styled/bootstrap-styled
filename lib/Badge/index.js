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

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _hover = require('bootstrap-styled-mixins/lib/hover');

var _borderRadius = require('bootstrap-styled-mixins/lib/border-radius');

var _badge = require('bootstrap-styled-mixins/lib/badge');

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Badge (Text Format) */

var defaultProps = {
  theme: _theme2.default,
  color: 'default',
  pill: false,
  tag: 'span'
};

var BadgeUnstyled = function (_React$Component) {
  _inherits(BadgeUnstyled, _React$Component);

  function BadgeUnstyled() {
    _classCallCheck(this, BadgeUnstyled);

    return _possibleConstructorReturn(this, (BadgeUnstyled.__proto__ || Object.getPrototypeOf(BadgeUnstyled)).apply(this, arguments));
  }

  _createClass(BadgeUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          color = _omit.color,
          pill = _omit.pill,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'color', 'pill', 'tag']);

      return _react2.default.createElement(Tag, _extends({
        className: (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'badge', _defineProperty({
          'badge-pill': pill
        }, 'badge-' + color, color)), cssModule)
      }, attributes));
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return BadgeUnstyled;
}(_react2.default.Component);

BadgeUnstyled.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  color: _propTypes2.default.string,
  pill: _propTypes2.default.bool,
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  theme: _propTypes2.default.object
  /* eslint-enable react/no-unused-prop-types */
};


var Badge = (0, _styledComponents2.default)(BadgeUnstyled).withConfig({
  displayName: 'Badge'
})(['', ''], function (props) {
  return '\n    \n    /* Base class */\n    /* Requires one of the contextual, color modifier classes for \'color\' and */\n    /* \'background-color\'. */\n    \n    &.badge {\n      display: inline-block;\n      padding: ' + props.theme['$badge-padding-y'] + ' ' + props.theme['$badge-padding-x'] + ';\n      font-size: ' + props.theme['$badge-font-size'] + ';\n      font-weight: ' + props.theme['$badge-font-weight'] + ';\n      line-height: 1;\n      color: ' + props.theme['$badge-color'] + ';\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: baseline;\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$border-radius']) + '\n    \n      /* Empty tags collapse automatically */\n      &:empty {\n        display: none;\n      }\n    }\n    \n    \n    /* scss-lint:disable QualifyingElement */\n    /* Add hover effects, but only for links */\n    &a {\n      ' + (0, _hover.hoverFocus)(props.theme['$enable-hover-media-query'], '\n        color: ' + props.theme['$badge-link-hover-color'] + ';\n        text-decoration: none;\n        cursor: pointer;\n      ') + '\n    }\n    /* scss-lint:enable QualifyingElement */\n    \n    /* Pill tags */\n    /* Make them extra rounded with a modifier to replace v3s badges. */\n    \n    &.badge-pill {\n      padding-right: ' + props.theme['$badge-pill-padding-x'] + ';\n      padding-left: ' + props.theme['$badge-pill-padding-x'] + ';\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$badge-pill-border-radius']) + '\n    }\n    \n    /* Colors */\n    /* Contextual variations (linked tags get darker on :hover). */\n    \n    &.badge-default {\n      ' + (0, _badge.badgeVariant)(props.theme['$enable-hover-media-query'], props.theme['$badge-default-bg']) + '\n    }     \n    \n    &.badge-primary {\n      ' + (0, _badge.badgeVariant)(props.theme['$enable-hover-media-query'], props.theme['$badge-primary-bg']) + '\n    }\n    \n    &.badge-success {\n      ' + (0, _badge.badgeVariant)(props.theme['$enable-hover-media-query'], props.theme['$badge-success-bg']) + '\n    }\n    \n    &.badge-info {\n      ' + (0, _badge.badgeVariant)(props.theme['$enable-hover-media-query'], props.theme['$badge-info-bg']) + '\n    }\n    \n    &.badge-warning {\n      ' + (0, _badge.badgeVariant)(props.theme['$enable-hover-media-query'], props.theme['$badge-warning-bg']) + '\n    }\n    \n    &.badge-danger {\n      ' + (0, _badge.badgeVariant)(props.theme['$enable-hover-media-query'], props.theme['$badge-danger-bg']) + '\n    }\n  ';
});

Badge.defaultProps = defaultProps;

exports.default = Badge;
module.exports = exports['default'];