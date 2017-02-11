var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
import bsTheme from 'theme';

var defaultProps = { theme: bsTheme };

var Figure = function (_React$Component) {
  _inherits(Figure, _React$Component);

  function Figure() {
    _classCallCheck(this, Figure);

    return _possibleConstructorReturn(this, (Figure.__proto__ || Object.getPrototypeOf(Figure)).apply(this, arguments));
  }

  _createClass(Figure, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['className', 'theme', 'children']); // eslint-disable-line no-unused-vars

      return React.createElement(
        'figure',
        _extends({ className: className }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Figure;
}(React.Component);

// eslint-disable-next-line no-class-assign


Figure = styled(Figure)(_templateObject, function (props) {
  return '\n    margin: 0 0 1rem;  /* Apply a consistent margin strategy (matches our type styles). */\n    \n    &.figure {\n      // Ensures the caption\'s text aligns with the image.\n      display: inline-block;\n    }\n    \n    & .figure-img {\n      margin-bottom: ' + props.theme['$spacer-halved'] + ';\n      line-height: 1;\n    }\n    \n    & .figure-caption {\n      font-size: ' + props.theme['$figure-caption-font-size'] + ';\n      color: ' + props.theme['$gray-light'] + ';\n    }\n\n    /* Reboot Scss */\n    /* Normalize adds \'margin\' to \'figure\'s as browsers apply it inconsistently. */\n    /* We reset that to create a better flow in-page. */\n    margin: 0 0 1rem;\n    \n  ';
});

Figure.defaultProps = defaultProps;

export default Figure;