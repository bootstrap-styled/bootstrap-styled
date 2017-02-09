var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Figure Component
 *
 *
 */

import styled from 'styled-components';
import React, { PropTypes } from 'react';
import theme from 'theme';
import { getTextUtilities } from '../../styled/utilities/text';

var defaultProps = { theme: theme };

var Figure = function (_React$Component) {
  _inherits(Figure, _React$Component);

  function Figure() {
    _classCallCheck(this, Figure);

    return _possibleConstructorReturn(this, (Figure.__proto__ || Object.getPrototypeOf(Figure)).apply(this, arguments));
  }

  _createClass(Figure, [{
    key: 'render',
    value: function render() {
      return _jsx('figure', {
        className: this.props.className
      }, void 0, this.props.children);
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Figure;
}(React.Component);

// eslint-disable-next-line no-class-assign


Figure = styled(Figure)(_templateObject, function (props) {
  return '\n  \n    &.figure {\n      // Ensures the caption\'s text aligns with the image.\n      display: inline-block;\n    }\n    \n    & .figure-img {\n      margin-bottom: ' + props.theme['$spacer-halved'] + ';\n      line-height: 1;\n    }\n    \n    & .figure-caption {\n      font-size: ' + props.theme['$figure-caption-font-size'] + ';\n      color: ' + props.theme['$gray-light'] + ';\n    }\n\n    \n    /* Reboot Scss */\n    /* Normalize adds \'margin\' to \'figure\'s as browsers apply it inconsistently. */\n    /* We reset that to create a better flow in-page. */\n    margin: 0 0 1rem;\n    \n    /* The next classes are not part of Bs4, added for rendering of DocBootstrapPage */\n    ' + getTextUtilities(props.theme['$grid-breakpoints']) + '    \n  ';
});

Figure.defaultProps = defaultProps;

export default Figure;