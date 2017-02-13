var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Abbr component
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import bsTheme from 'theme';

var defaultProps = {
  theme: bsTheme
};

var Abbr = function (_React$Component) {
  _inherits(Abbr, _React$Component);

  function Abbr() {
    _classCallCheck(this, Abbr);

    return _possibleConstructorReturn(this, (Abbr.__proto__ || Object.getPrototypeOf(Abbr)).apply(this, arguments));
  }

  _createClass(Abbr, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          title = _props.title,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['className', 'theme', 'title', 'children']); // eslint-disable-line no-unused-vars


      return React.createElement(
        'abbr',
        _extends({
          className: className,
          title: title
        }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Abbr;
}(React.Component);

// eslint-disable-next-line no-class-assign


Abbr = styled(Abbr)(_templateObject, function (props) {
  return '\n    /* Reboot Scss */\n    /* Abbreviations and acronyms */\n    &[title],\n    /* Add data-* attribute to help out our tooltip plugin, per https://github.com/twbs/bootstrap/issues/5257 */\n    &[data-original-title] {\n      text-decoration: underline;\n      text-decoration: underline dotted;\n      cursor: help;\n      border-bottom: 1px dotted ' + props.theme['$abbr-border-color'] + ';\n    }\n    \n    /* Type Scss */\n    \n    &.initialism {\n      font-size: 90%;\n      text-transform: uppercase;\n    }\n    \n  ';
});

Abbr.defaultProps = defaultProps;

export default Abbr;