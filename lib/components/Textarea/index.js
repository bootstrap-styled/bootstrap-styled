var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  &.textarea {\n    touch-action: manipulation;\n    line-height: inherit;\n    /* Textareas should really only resize vertically so they don\'t break their (horizontal) containers. */\n    resize: vertical;\n  }\n'], ['\n  &.textarea {\n    touch-action: manipulation;\n    line-height: inherit;\n    /* Textareas should really only resize vertically so they don\'t break their (horizontal) containers. */\n    resize: vertical;\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* A Textarea (Box) */

/**
 * A Textarea tag
 */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

var Textarea = function (_React$Component) {
  _inherits(Textarea, _React$Component);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).apply(this, arguments));
  }

  _createClass(Textarea, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          children = _props.children,
          className = _props.className,
          rest = _objectWithoutProperties(_props, ['theme', 'children', 'className']); // eslint-disable-line


      return React.createElement(
        'textarea',
        _extends({
          className: cn('textarea', className)
        }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Textarea;
}(React.Component);

// eslint-disable-next-line no-class-assign


Textarea = styled(Textarea)(_templateObject);

export default Textarea;