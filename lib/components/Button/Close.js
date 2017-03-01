var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A Close Button
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

var _ref = _jsx('div', {
  className: 'cross'
});

var Close = function (_React$Component) {
  _inherits(Close, _React$Component);

  function Close() {
    _classCallCheck(this, Close);

    return _possibleConstructorReturn(this, (Close.__proto__ || Object.getPrototypeOf(Close)).apply(this, arguments));
  }

  _createClass(Close, [{
    key: 'render',
    value: function render() {
      return _jsx('div', {
        className: cn(this.props.className, 'hidden-sm-up close-wrapper')
      }, void 0, _ref);
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Close;
}(React.Component);

// eslint-disable-next-line no-class-assign


Close = styled(Close).withConfig({
  displayName: 'Close__Close',
  componentId: 'Close__Close-18sxvat'
})(['&.close-wrapper {position: absolute;top: 10px;right: 10px;}& .cross {width: 20px;height: 20px;position: relative;transform:rotate(45deg);-ms-transform:rotate(45deg); /* IE 9 */-webkit-transform:rotate(45deg); /* Safari and Chrome */&:before {left: 50%;width: 30%;margin-left: -15%;height: 100%;}&:after {top: 50%;height: 30%;margin-top: -15%;width: 100%;}}& .cross:before, .cross:after {content: "";position: absolute;z-index: -1;background: lightgrey;}']);

export default Close;