var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import styled from 'styled-components';
import cn from 'classnames';
import React, { PropTypes } from 'react';
import theme from 'theme';
import { makeRow } from '../../styled/mixins/grid';

var defaultProps = { theme: theme };

var Row = function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children; // eslint-disable-line no-unused-vars

      return _jsx('div', {
        className: cn(className, 'row')
      }, void 0, children);
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Row;
}(React.Component);

// eslint-disable-next-line no-class-assign


Row = styled(Row).withConfig({
  displayName: 'Row__Row',
  componentId: 'Row__Row-1oy7wzj'
})(['', ''], function (props) {
  return '\n    &.row{\n      ' + makeRow(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n    }\n    /*\n      Remove the negative margin from default .row, then the horizontal padding\n      from all immediate children columns (to prevent runaway style inheritance).\n    */\n\n    &.no-gutters {\n      margin-right: 0;\n      margin-left: 0;\n\n      > .col,\n      > [class*="col-"] {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    }\n ';
});

Row.defaultProps = defaultProps;

export default Row;