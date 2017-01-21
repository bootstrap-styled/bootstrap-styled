var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Pre component
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from '../../config';

var defaultProps = { theme: theme };

var Pre = function (_React$Component) {
  _inherits(Pre, _React$Component);

  function Pre() {
    _classCallCheck(this, Pre);

    return _possibleConstructorReturn(this, (Pre.__proto__ || Object.getPrototypeOf(Pre)).apply(this, arguments));
  }

  _createClass(Pre, [{
    key: 'render',
    value: function render() {
      return _jsx('pre', {
        className: this.props.className
      }, void 0, this.props.children);
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Pre;
}(React.Component);

// eslint-disable-next-line no-class-assign


Pre = styled(Pre)(_templateObject, function (props) {
  return '\n    /* Blocks of code */\n    display: block;\n    margin-top: 0;\n    margin-bottom: 1rem;\n    font-size: ' + props.theme['$code-font-size'] + ';\n    color: ' + props.theme['$pre-color'] + ';\n    \n    /* Enable scrollable blocks of code */\n    /* AJT This class was present in bootstrap/scss/code.scss  We must decide if this class should be a mixin or not!*/\n    &.pre-scrollable {\n      max-height: ' + props.theme['$pre-scrollable-max-height'] + ';\n      overflow-y: scroll;\n    }\n\n  \n    /* Account for some code outputs that place code tags in pre tags */\n    code {\n      padding: 0;\n      font-size: inherit;\n      color: inherit;\n      background-color: transparent;\n      border-radius: 0;\n    }\n    \n    /* Reboot Scss */\n\n    /* Remove browser default top margin */\n    margin-top: 0;\n    /* Reset browser default of \'1em\' to use \'rem\'s */\n    margin-bottom: 1rem;\n    /* Normalize v4 removed this property, causing \'pre\' content to break out of wrapping code snippets */\n    overflow: auto;\n    \n    /* Bootstrap 4 does not place this css rule straight into Kbd tag see: bootstrap/scss/code.scss */\n    font-family: ' + props.theme['$font-family-monospace'] + ';;\n  ';
});

Pre.defaultProps = defaultProps;

export default Pre;