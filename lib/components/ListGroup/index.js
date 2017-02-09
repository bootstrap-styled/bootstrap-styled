var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ListGroup component
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from 'theme';
import { borderTopRadius, borderBottomRadius } from '../../styled/mixins/border-radius';
import { hoverFocus } from '../../styled/mixins/hover';
import { listGroupItemVariant } from '../../styled/mixins/list-group';
import Ul from '../Ul/index';

var defaultProps = { theme: theme };

var ListGroup = function (_React$Component) {
  _inherits(ListGroup, _React$Component);

  function ListGroup() {
    _classCallCheck(this, ListGroup);

    return _possibleConstructorReturn(this, (ListGroup.__proto__ || Object.getPrototypeOf(ListGroup)).apply(this, arguments));
  }

  _createClass(ListGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className;

      return _jsx(Ul, {
        className: cn(className, 'list-group')
      }, void 0, children);
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return ListGroup;
}(React.Component);

// eslint-disable-next-line no-class-assign


ListGroup = styled(ListGroup)(_templateObject, function (props) {
  return '\n    /* \n      Base class\n      Easily usable on ul, ol, or div.\n    */\n    \n    &.list-group {\n      display: flex;\n      flex-direction: column;\n      /* No need to set list-style: none; since .list-group-item is block level */\n      padding-left: 0;  /* reset padding because ul and ol */\n      margin-bottom: 0;\n    }\n    \n    \n    /* \n      Interactive list items\n      Use anchor or button elements instead of \'li\'s or \'div\'s to create interactive\n      list items. Includes an extra \'.active\' modifier class for selected items.\n    */\n    \n    & .list-group-item-action {\n      width: 100%; /* For \'button\'s (anchors become 100% by default though) */\n      color: ' + props.theme['$list-group-link-color'] + ';\n      text-align: inherit; /* For \'button\'s (anchors inherit) */\n    \n      /* Hover state */\n      ' + hoverFocus(props.theme['$enable-hover-media-query'], '\n          color: ' + props.theme['$list-group-link-hover-color'] + ';\n          text-decoration: none;\n          background-color: ' + props.theme['$list-group-hover-bg'] + ';\n        ') + ';\n      \n      &:active {\n        color: ' + props.theme['$list-group-link-active-color'] + ';\n        background-color: ' + props.theme['$list-group-link-active-bg'] + ';\n      }\n    }\n    \n    /* \n      Individual list items\n      Use on \'li\'s or \'div\'s within the \'.list-group\' parent.\n    */\n    \n    & .list-group-item {\n      position: relative;\n      display: flex;\n      flex-flow: row wrap;\n      align-items: center;\n      padding: ' + props.theme['$list-group-item-padding-y'] + ' ' + props.theme['$list-group-item-padding-x'] + ';\n      /* Place the border on the list items and negative margin up for better styling */\n      margin-bottom: -' + props.theme['$list-group-border-width'] + ';\n      background-color: ' + props.theme['$list-group-bg'] + ';\n      border: ' + props.theme['$list-group-border-width'] + ' solid ' + props.theme['$list-group-border-color'] + ';\n    \n      &:first-child {\n        ' + borderTopRadius(props.theme['$enable-rounded'], props.theme['$list-group-border-radius']) + '\n      }\n\n      &:last-child {\n        margin-bottom: 0;\n        ' + borderBottomRadius(props.theme['$enable-rounded'], props.theme['$list-group-border-radius']) + '\n      }\n      \n      ' + hoverFocus(props.theme['$enable-hover-media-query'], 'text-decoration: none;') + '\n        \n      &.disabled,\n      &:disabled {   \n        color: ' + props.theme['$list-group-disabled-color'] + ';\n        cursor: ' + props.theme['$cursor-disabled'] + ';\n        background-color: ' + props.theme['$list-group-disabled-bg'] + ';\n      }\n    \n    \n      &.active {\n        z-index: 2; /* Place active items above their siblings for proper border styling */\n        color: ' + props.theme['$list-group-active-color'] + ';\n        background-color: ' + props.theme['$list-group-active-bg'] + ';\n        border-color: ' + props.theme['$list-group-active-border'] + ';     \n      }\n    }\n    \n    /* \n      Flush list items\n      Remove borders and border-radius to keep list group items edge-to-edge. Most\n      useful within other components (e.g., cards).\n    */\n\n    &.list-group-flush {\n      .list-group-item {\n        border-right: 0;\n        border-left: 0;\n        border-radius: 0;\n      }\n      \n      &:first-child {\n        .list-group-item:first-child {\n          border-top: 0;\n        }\n      }\n\n      &:last-child {\n        .list-group-item:last-child {\n          border-bottom: 0;\n        }\n      }\n    }\n    \n    \n    \n    /* Contextual variants\n    \n     Add modifier classes to change text and background color on individual items.\n     Organizationally, this must come after the \':hover\' states.\n    */\n    \n    ' + listGroupItemVariant(props.theme['$enable-hover-media-query'], 'success', props.theme['$state-success-bg'], props.theme['$state-success-text']) + '\n    ' + listGroupItemVariant(props.theme['$enable-hover-media-query'], 'info', props.theme['$state-info-bg'], props.theme['$state-info-text']) + '\n    ' + listGroupItemVariant(props.theme['$enable-hover-media-query'], 'warning', props.theme['$state-warning-bg'], props.theme['$state-warning-text']) + '\n    ' + listGroupItemVariant(props.theme['$enable-hover-media-query'], 'danger', props.theme['$state-danger-bg'], props.theme['$state-danger-text']) + '    \n  ';
});

ListGroup.defaultProps = defaultProps;

export default ListGroup;