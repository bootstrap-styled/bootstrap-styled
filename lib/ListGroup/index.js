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

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _borderRadius = require('bootstrap-styled-mixins/lib/border-radius');

var _hover = require('bootstrap-styled-mixins/lib/hover');

var _listGroup = require('bootstrap-styled-mixins/lib/list-group');

var _index = require('../Ul/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ListGroup component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = {
  tag: _index2.default,
  toggleable: 'false',
  theme: {
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$component-active-color': '#fff',
    '$component-active-bg': '#0275d8',
    '$list-group-color': '#292b2c',
    '$list-group-bg': '#fff',
    '$list-group-border-color': 'rgba(0, 0, 0, 0.125)',
    '$list-group-border-width': '1px',
    '$list-group-border-radius': '.25rem',
    '$list-group-item-padding-x': '1.25rem',
    '$list-group-item-padding-y': '.75rem',
    '$list-group-hover-bg': '#f7f7f9',
    '$list-group-active-color': '#fff',
    '$list-group-active-bg': '#0275d8',
    '$list-group-active-border': '#0275d8',
    '$list-group-disabled-color': '#636c72',
    '$list-group-disabled-bg': '#fff',
    '$list-group-link-color': '#464a4c',
    '$list-group-link-hover-color': '#464a4c',
    '$list-group-link-active-color': '#292b2c',
    '$list-group-link-active-bg': '#eceeef',
    '$cursor-disabled': 'not-allowed',
    '$state-success-text': '#3c763d',
    '$state-success-bg': '#dff0d8',
    '$state-info-text': '#31708f',
    '$state-info-bg': '#d9edf7',
    '$state-warning-text': '#8a6d3b',
    '$state-warning-bg': '#fcf8e3',
    '$state-danger-text': '#a94442',
    '$state-danger-bg': '#f2dede'
  }
};
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Replace the default component tag by the one specified. Can be: */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  /** Toggles flush CSS style. */
  flush: _propTypes2.default.bool,
  /** Toggles passed as a string. Can be `true` or `false` */
  toggleable: _propTypes2.default.string,
  /** Theme variables. */
  theme: _propTypes2.default.shape({
    '$enable-rounded': _propTypes2.default.bool,
    '$enable-hover-media-query': _propTypes2.default.bool,
    '$component-active-color': _propTypes2.default.string,
    '$component-active-bg': _propTypes2.default.string,
    '$list-group-color': _propTypes2.default.string,
    '$list-group-bg': _propTypes2.default.string,
    '$list-group-border-color': _propTypes2.default.string,
    '$list-group-border-width': _propTypes2.default.string,
    '$list-group-border-radius': _propTypes2.default.string,
    '$list-group-item-padding-x': _propTypes2.default.string,
    '$list-group-item-padding-y': _propTypes2.default.string,
    '$list-group-hover-bg': _propTypes2.default.string,
    '$list-group-active-color': _propTypes2.default.string,
    '$list-group-active-bg': _propTypes2.default.string,
    '$list-group-active-border': _propTypes2.default.string,
    '$list-group-disabled-color': _propTypes2.default.string,
    '$list-group-disabled-bg': _propTypes2.default.string,
    '$list-group-link-color': _propTypes2.default.string,
    '$list-group-link-hover-color': _propTypes2.default.string,
    '$list-group-link-active-color': _propTypes2.default.string,
    '$list-group-link-active-bg': _propTypes2.default.string,
    '$cursor-disabled': _propTypes2.default.string,
    '$state-success-text': _propTypes2.default.string,
    '$state-success-bg': _propTypes2.default.string,
    '$state-info-text': _propTypes2.default.string,
    '$state-info-bg': _propTypes2.default.string,
    '$state-warning-text': _propTypes2.default.string,
    '$state-warning-bg': _propTypes2.default.string,
    '$state-danger-text': _propTypes2.default.string,
    '$state-danger-bg': _propTypes2.default.string
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes2.default.object
};

var ListGroupUnstyled = function (_React$Component) {
  _inherits(ListGroupUnstyled, _React$Component);

  function ListGroupUnstyled() {
    _classCallCheck(this, ListGroupUnstyled);

    return _possibleConstructorReturn(this, (ListGroupUnstyled.__proto__ || Object.getPrototypeOf(ListGroupUnstyled)).apply(this, arguments));
  }

  _createClass(ListGroupUnstyled, [{
    key: 'render',

    /* eslint-enable react/no-unused-prop-types */

    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          flush = _omit.flush,
          attributes = _objectWithoutProperties(_omit, ['className', 'cssModule', 'tag', 'flush']);

      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, 'list-group', flush ? 'list-group-flush' : false), cssModule);

      return _react2.default.createElement(Tag, _extends({}, attributes, { className: classes }));
    }

    /* eslint-disable react/no-unused-prop-types */

  }]);

  return ListGroupUnstyled;
}(_react2.default.Component);
/**
 * The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.
 */


ListGroupUnstyled.defaultProps = defaultProps;
ListGroupUnstyled.propTypes = propTypes;
var ListGroup = (0, _styledComponents2.default)(ListGroupUnstyled).withConfig({
  displayName: 'ListGroup'
})(['', ''], function (props) {
  return '\n    /* \n      Base class\n      Easily usable on ul, ol, or div.\n    */\n    \n    &.list-group {\n      display: flex;\n      flex-direction: column;\n      /* No need to set list-style: none; since .list-group-item is block level */\n      padding-left: 0;  /* reset padding because ul and ol */\n      margin-bottom: 0;\n    }\n    \n    \n    /* \n      Interactive list items\n      Use anchor or button elements instead of \'li\'s or \'div\'s to create interactive\n      list items. Includes an extra \'.active\' modifier class for selected items.\n    */\n    \n    & .list-group-item-action {\n      width: 100%; /* For \'button\'s (anchors become 100% by default though) */\n      color: ' + props.theme['$list-group-link-color'] + ';\n      text-align: inherit; /* For \'button\'s (anchors inherit) */\n    \n      /* Hover state */\n      ' + (0, _hover.hoverFocus)(props.theme['$enable-hover-media-query'], '\n          color: ' + props.theme['$list-group-link-hover-color'] + ';\n          text-decoration: none;\n          background-color: ' + props.theme['$list-group-hover-bg'] + ';\n        ') + ';\n      \n      &:active {\n        color: ' + props.theme['$list-group-link-active-color'] + ';\n        background-color: ' + props.theme['$list-group-link-active-bg'] + ';\n      }\n    }\n    \n    /* \n      Individual list items\n      Use on \'li\'s or \'div\'s within the \'.list-group\' parent.\n    */\n    \n    & .list-group-item {\n      position: relative;\n      display: flex;\n      flex-flow: row wrap;\n      align-items: center;\n      padding: ' + props.theme['$list-group-item-padding-y'] + ' ' + props.theme['$list-group-item-padding-x'] + ';\n      /* Place the border on the list items and negative margin up for better styling */\n      margin-bottom: -' + props.theme['$list-group-border-width'] + ';\n      background-color: ' + props.theme['$list-group-bg'] + ';\n      border: ' + props.theme['$list-group-border-width'] + ' solid ' + props.theme['$list-group-border-color'] + ';\n    \n      &:first-child {\n        ' + (0, _borderRadius.borderTopRadius)(props.theme['$enable-rounded'], props.theme['$list-group-border-radius']) + '\n      }\n\n      &:last-child {\n        margin-bottom: 0;\n        ' + (0, _borderRadius.borderBottomRadius)(props.theme['$enable-rounded'], props.theme['$list-group-border-radius']) + '\n      }\n      \n      ' + (0, _hover.hoverFocus)(props.theme['$enable-hover-media-query'], 'text-decoration: none;') + '\n        \n      &.disabled,\n      &:disabled {   \n        color: ' + props.theme['$list-group-disabled-color'] + ';\n        cursor: ' + props.theme['$cursor-disabled'] + ';\n        background-color: ' + props.theme['$list-group-disabled-bg'] + ';\n      }\n    \n    \n      &.active {\n        z-index: 2; /* Place active items above their siblings for proper border styling */\n        color: ' + props.theme['$list-group-active-color'] + ';\n        background-color: ' + props.theme['$list-group-active-bg'] + ';\n        border-color: ' + props.theme['$list-group-active-border'] + ';     \n      }\n    }\n    \n    /* \n      Flush list items\n      Remove borders and border-radius to keep list group items edge-to-edge. Most\n      useful within other components (e.g., cards).\n    */\n\n    &.list-group-flush {\n      .list-group-item {\n        border-right: 0;\n        border-left: 0;\n        border-radius: 0;\n      }\n      \n      &:first-child {\n        .list-group-item:first-child {\n          border-top: 0;\n        }\n      }\n\n      &:last-child {\n        .list-group-item:last-child {\n          border-bottom: 0;\n        }\n      }\n    }\n    \n    \n    \n    /* Contextual variants\n    \n     Add modifier classes to change text and background color on individual items.\n     Organizationally, this must come after the \':hover\' states.\n    */\n    \n    ' + (0, _listGroup.listGroupItemVariant)(props.theme['$enable-hover-media-query'], 'success', props.theme['$state-success-bg'], props.theme['$state-success-text']) + '\n    ' + (0, _listGroup.listGroupItemVariant)(props.theme['$enable-hover-media-query'], 'info', props.theme['$state-info-bg'], props.theme['$state-info-text']) + '\n    ' + (0, _listGroup.listGroupItemVariant)(props.theme['$enable-hover-media-query'], 'warning', props.theme['$state-warning-bg'], props.theme['$state-warning-text']) + '\n    ' + (0, _listGroup.listGroupItemVariant)(props.theme['$enable-hover-media-query'], 'danger', props.theme['$state-danger-bg'], props.theme['$state-danger-text']) + '\n  ';
});

ListGroup.defaultProps = defaultProps;
ListGroup.propTypes = propTypes;

/** @component */
exports.default = ListGroup;
module.exports = exports['default'];