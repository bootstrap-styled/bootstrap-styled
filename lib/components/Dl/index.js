var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *Definition List
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'theme';
import { makeRow } from '../../styled/mixins/grid';

var defaultProps = { theme: theme };

var Dl = function (_React$Component) {
  _inherits(Dl, _React$Component);

  function Dl() {
    _classCallCheck(this, Dl);

    return _possibleConstructorReturn(this, (Dl.__proto__ || Object.getPrototypeOf(Dl)).apply(this, arguments));
  }

  _createClass(Dl, [{
    key: 'render',
    value: function render() {
      return _jsx('dl', {
        className: this.props.className
      }, void 0, this.props.children);
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Dl;
}(React.Component);

// eslint-disable-next-line no-class-assign


Dl = styled(Dl).withConfig({
  displayName: 'Dl__Dl',
  componentId: 'Dl__Dl-o2k5m'
})([' /* Reboot Scss */margin-top: 0;margin-bottom: 1rem;', ''], function (props) {
  return '\n    ' + makeRow(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n  ';
});

Dl.defaultProps = defaultProps;

export default Dl;