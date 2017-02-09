var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Progress (Animation Bar) */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import theme from 'theme';
import { paginationSize } from '../../styled/mixins/pagination';
import { borderRadius, borderLeftRadius, borderRightRadius } from '../../styled/mixins/border-radius';
import { hoverFocus, plainHoverFocus } from '../../styled/mixins/hover';

var defaultProps = { theme: theme };

var Pagination = function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: 'render',
    value: function render() {
      return _jsx('pagination', {
        className: cn(this.props.className, 'pagination')
      }, void 0, this.props.children);
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Pagination;
}(React.Component);

// eslint-disable-next-line no-class-assign


Pagination = styled(Pagination)(_templateObject, function (props) {
  return '\n    &.pagination {\n      display: inline-block;\n      padding-left: 0;\n      margin-top: ' + props.theme['$spacer-y'] + ';\n      margin-bottom: ' + props.theme['$spacer-y'] + ';\n      ' + borderRadius(props.theme['$enable-rounded']) + '\n    }\n\n    & .page-item {\n      display: inline; /* Remove list-style and block-level defaults */\n\n      &:first-child {\n        .page-link {\n          margin-left: 0;\n          ' + borderLeftRadius(props.theme['$enable-rounded']) + '\n        }\n      }\n      &:last-child {\n        .page-link {\n          ' + borderRightRadius(props.theme['$enable-rounded']) + '\n        }\n      }\n\n      &.active .page-link {\n        ' + plainHoverFocus(props.theme['$enable-hover-media-query'], '\n            z-index: 2;\n            color: ' + props.theme['$pagination-active-color'] + ';\n            cursor: default;\n            background-color: ' + props.theme['$pagination-active-bg'] + ';\n            border-color: ' + props.theme['$pagination-active-border'] + ';\n          ') + '\n      }\n\n      &.disabled .page-link {\n        ' + plainHoverFocus(props.theme['$enable-hover-media-query'], '\n            color: ' + props.theme['$pagination-disabled-color'] + ';\n            pointer-events: none;\n            cursor: ' + props.theme['$cursor-disabled'] + ';\n            background-color: ' + props.theme['$pagination-disabled-bg'] + ';\n            border-color: ' + props.theme['$pagination-disabled-border'] + ';\n          ') + '\n      }\n    }\n\n    & .page-link {\n      position: relative;\n      float: left; /* Collapse white-space */\n      padding: ' + props.theme['$pagination-padding-y'] + ' ' + props.theme['$pagination-padding-x'] + ';\n      margin-left: -1px;\n      color: ' + props.theme['$pagination-color'] + ';\n      text-decoration: none;\n      background-color: ' + props.theme['$pagination-bg'] + ';\n      border: ' + props.theme['$pagination-border-width'] + ' solid ' + props.theme['$pagination-border-color'] + ';\n\n      ' + hoverFocus(props.theme['$enable-hover-media-query'], '\n          color: ' + props.theme['$pagination-hover-color'] + ';\n          background-color: ' + props.theme['$pagination-hover-bg'] + ';\n          border-color: ' + props.theme['$pagination-hover-border'] + ';\n        ') + '\n    }\n\n    /* Sizing */\n    &.pagination-lg {\n      ' + paginationSize(props.theme['$enable-rounded'], props.theme['$pagination-padding-y-lg'], props.theme['$pagination-padding-x-lg'], props.theme['$font-size-lg'], props.theme['$line-height-lg'], props.theme['$border-radius-lg']) + '\n    }\n\n    &.pagination-sm {\n      ' + paginationSize(props.theme['$enable-rounded'], props.theme['$pagination-padding-y-sm'], props.theme['$pagination-padding-x-sm'], props.theme['$font-size-sm'], props.theme['$line-height-sm'], props.theme['$border-radius-sm']) + '\n    }\n  ';
});

Pagination.defaultProps = defaultProps;

export default Pagination;