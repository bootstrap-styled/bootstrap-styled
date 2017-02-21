var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Progress */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import bsTheme from 'theme';
import styled, { keyframes } from 'styled-components';
import { borderRadius } from '../../styled/mixins/border-radius';
import { getBackgroundUtilities } from '../../styled/utilities/background';
import { gradientStriped } from '../../styled/mixins/gradients';

var defaultProps = {
  theme: bsTheme
};

var Progress = function (_React$Component) {
  _inherits(Progress, _React$Component);

  function Progress() {
    _classCallCheck(this, Progress);

    return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
  }

  _createClass(Progress, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          theme = _props.theme,
          rest = _objectWithoutProperties(_props, ['children', 'className', 'theme']); // eslint-disable-line no-unused-vars


      return React.createElement(
        'div',
        _extends({ className: cn('progress', className) }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Progress;
}(React.Component);

var backgroundPositionKeyFrame = function backgroundPositionKeyFrame(props) {
  return keyframes(['from { background-position: ', ' 0; }to { background-position: 0 0; }'], props.theme['$progress-height']);
};

// eslint-disable-next-line no-class-assign
Progress = styled(Progress).withConfig({
  displayName: 'Progress__Progress',
  componentId: 'Progress__Progress-bnttrx'
})(['', ''], function (props) {
  return '\n    \n    &.progress {\n      display: flex;\n      overflow: hidden; // force rounded corners by cropping it\n      font-size: ' + props.theme['$progress-font-size'] + ';\n      line-height: ' + props.theme['$progress-height'] + ';\n      text-align: center;\n      background-color: ' + props.theme['$progress-bg'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$progress-border-radius']) + '\n      ' + getBackgroundUtilities(props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$brand-inverse'], props.theme['$gray-lightest']) + '\n    }\n    \n    .progress-bar {\n      height: ' + props.theme['$progress-height'] + ';\n      line-height: ' + props.theme['$progress-height'] + ';\n      color: ' + props.theme['$progress-bar-color'] + ';\n      background-color: ' + props.theme['$progress-bar-bg'] + ';\n    }\n    \n    .progress-bar-striped {\n      ' + gradientStriped() + '\n      background-size: ' + props.theme['$progress-height'] + ' ' + props.theme['$progress-height'] + ';\n      background-repeat: repeat; /* Not present in bootstrap original but required to repeat the background */\n    }\n    \n    .progress-bar-animated {\n      animation: ' + backgroundPositionKeyFrame(props) + ' ' + props.theme['$progress-bar-animation-timing'] + ';\n    }\n\n  ';
});

Progress.defaultProps = defaultProps;

export default Progress;