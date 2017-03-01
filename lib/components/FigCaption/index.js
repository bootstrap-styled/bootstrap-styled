var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * FigCaption component
 */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import bsTheme from 'theme';

var defaultProps = {
  theme: bsTheme
};

var FigCaption = function (_React$Component) {
  _inherits(FigCaption, _React$Component);

  function FigCaption() {
    _classCallCheck(this, FigCaption);

    return _possibleConstructorReturn(this, (FigCaption.__proto__ || Object.getPrototypeOf(FigCaption)).apply(this, arguments));
  }

  _createClass(FigCaption, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['className', 'theme', 'children']); // eslint-disable-line no-unused-vars


      return React.createElement(
        'figcaption',
        _extends({
          className: cn('figure-caption', className)
        }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return FigCaption;
}(React.Component);

// eslint-disable-next-line no-class-assign


FigCaption = styled(FigCaption).withConfig({
  displayName: 'FigCaption__FigCaption',
  componentId: 'FigCaption__FigCaption-1q4sn08'
})(['', ''], function (props) {
  return '\n    &.figure-caption {\n      font-size: ' + props.theme['$figure-caption-font-size'] + ';\n      color: ' + props.theme['$figure-caption-color'] + ';\n    }\n  ';
});

FigCaption.defaultProps = defaultProps;

export default FigCaption;