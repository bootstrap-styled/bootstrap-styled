var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint dot-notation: 'off' */

/**
 * Blockquote
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import bsTheme from 'theme';

var defaultProps = {
  theme: bsTheme
};

var Blockquote = function (_React$Component) {
  _inherits(Blockquote, _React$Component);

  function Blockquote() {
    _classCallCheck(this, Blockquote);

    return _possibleConstructorReturn(this, (Blockquote.__proto__ || Object.getPrototypeOf(Blockquote)).apply(this, arguments));
  }

  _createClass(Blockquote, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          className = _props.className,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['theme', 'className', 'children']); // eslint-disable-line no-unused-vars


      return React.createElement(
        'blockquote',
        _extends({ className: className }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Blockquote;
}(React.Component);

// eslint-disable-next-line no-class-assign


Blockquote = styled(Blockquote).withConfig({
  displayName: 'Blockquote__Blockquote',
  componentId: 'Blockquote__Blockquote-rbcp3x'
})([' ', ' '], function (props) {
  return '\n\n    \n    /* Reboot from bootstrap v4 */\n    margin: 0 0 1rem;\n    /* Type Scss */\n    /* Blockquotes */\n    &.blockquote {\n      padding: ' + props.theme['$spacer-halved'] + ' ' + props.theme['$spacer'] + ';\n      margin-bottom: ' + props.theme['$spacer'] + ';\n      font-size: ' + props.theme['$blockquote-font-size'] + ';\n      border-left: ' + props.theme['$blockquote-border-width'] + ' solid ' + props.theme['$blockquote-border-color'] + ';\n    }\n    \n\n    /* back to default font-size */\n    &.blockquote-footer {\n      display: block;\n      font-size: 80%; \n      color: ' + props.theme['$blockquote-small-color'] + ';\n    \n      &::before {\n        /* content: \'\\2014 \\00A0\'; em dash, nbsp */\n      }\n    }\n    \n    /* Opposite alignment of blockquote */\n    &.blockquote-reverse {\n      padding-right: ' + props.theme['$spacer'] + ';\n      padding-left: 0;\n      text-align: right;\n      border-right: ' + props.theme['$blockquote-border-width'] + ' solid ' + props.theme['$blockquote-border-color'] + ';\n      border-left: 0;\n    }\n    \n    &.blockquote-reverse .blockquote-footer {\n      &::before {\n        content: "";\n      }\n      &::after {\n        content: \'\\00A0 \\2014\'; /* nbsp, em dash */\n      }\n    }\n ';
});

Blockquote.defaultProps = defaultProps;

export default Blockquote;