var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Progress (Animation Bar) */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import theme from '../../config';
import { progressVariant } from '../../styled/mixins/progress';
import { borderRadius, borderLeftRadius, borderRightRadius } from '../../styled/mixins/border-radius';
import { boxShadow } from '../../styled/mixins/box-shadow';
import { gradientStriped } from '../../styled/mixins/gradients';
import { getTextUtilities } from '../../styled/utilities/text';

var defaultProps = { theme: theme };

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
          value = _props.value,
          max = _props.max;


      return _jsx('progress', {
        className: cn(this.props.className, 'progress'),
        value: value,
        max: max
      });
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Progress;
}(React.Component);

// eslint-disable-next-line no-class-assign


Progress = styled(Progress)(_templateObject, function (props) {
  return '\n    /* Progress animations */\n\n    @keyframes progress-bar-stripes {\n      from { background-position: ' + props.theme['$spacer-y'] + ' 0 };\n      to { background-position: 0 0; }\n    }\n\n    /* Basic progress bar */\n\n    &.progress {\n      display: block;\n      width: 100%;\n      height: ' + props.theme['$spacer-y'] + ' /* todo: make a new var for this */\n      margin-bottom: ' + props.theme['$spacer-y'] + ';\n    }\n    &.progress[value] {\n      /* Set overall background */\n      background-color: ' + props.theme['$progress-bg'] + ';\n      /* Remove Firefox and Opera border */\n      border: 0;\n      /* Reset the default appearance */\n      appearance: none;\n      /* Set overall border radius */\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$progress-border-radius']) + '\n    }\n\n    /* Filled-in portion of the bar */\n    &.progress[value]::-ms-fill {\n      background-color: ' + props.theme['$progress-bar-color'] + ';\n      /* Remove right-hand border of value bar from IE10+/Edge */\n      border: 0;\n    }\n    &.progress[value]::-moz-progress-bar {\n      background-color: ' + props.theme['$progress-bar-color'] + ';\n      ' + borderLeftRadius(props.theme['$enable-rounded'], props.theme['$progress-border-radius']) + '\n    }\n    &.progress[value]::-webkit-progress-value {\n      background-color: ' + props.theme['$progress-bar-color'] + ';\n      ' + borderLeftRadius(props.theme['$enable-rounded'], props.theme['$progress-border-radius']) + '\n    }\n    /* Tweaks for full progress bar */\n    &.progress[value="100"]::-moz-progress-bar {\n      ' + borderRightRadius(props.theme['$enable-rounded'], props.theme['$progress-border-radius']) + '\n    }\n    &.progress[value="100"]::-webkit-progress-value {\n      ' + borderRightRadius(props.theme['$enable-rounded'], props.theme['$progress-border-radius']) + '\n    }\n\n    /* Unfilled portion of the bar */\n    &.progress[value]::-webkit-progress-bar {\n      background-color: ' + props.theme['$progress-bg'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$progress-border-radius']) + '\n      ' + boxShadow(props.theme['$enable-shadows'], props.theme['$progress-box-shadow']) + '\n    }\n    base::-moz-progress-bar, /* Absurd-but-syntactically-valid selector to make these styles Firefox-only */\n    &.progress[value] {\n      background-color: ' + props.theme['$progress-bg'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$progress-border-radius']) + '\n      ' + boxShadow(props.theme['$enable-shadows'], props.theme['$progress-box-shadow']) + '\n    }\n\n    /* IE9 hacks to accompany custom markup. We don\'t need to scope this via media queries, but I feel better doing it anyway. */\n    @media screen and (min-width:0\0) {\n      &.progress {\n        background-color: ' + props.theme['$progress-bg'] + ';\n        ' + borderRadius(props.theme['$enable-rounded'], props.theme['$progress-border-radius']) + '\n        ' + boxShadow(props.theme['$enable-shadows'], props.theme['$progress-box-shadow']) + '\n      }\n      &.progress-bar {\n        display: inline-block;\n        height: ' + props.theme['$spacer-y'] + ';\n        text-indent: -999rem;  /* Simulate hiding of value as in native \'<progress>\' */\n        background-color: ' + props.theme['$progress-bar-color'] + ';\n        ' + borderLeftRadius(props.theme['$enable-rounded'], props.theme['$progress-border-radius']) + '\n      }\n      &.progress[width="100%"] {\n        ' + borderRightRadius(props.theme['$enable-rounded'], props.theme['$progress-border-radius']) + '\n      }\n    }\n\n    /* Striped */\n\n    &.progress-striped[value]::-webkit-progress-value {\n      ' + gradientStriped() + '\n      background-size: ' + props.theme['$spacer-y'] + ' ' + props.theme['$spacer-y'] + ';\n    }\n    &.progress-striped[value]::-moz-progress-bar {\n      ' + gradientStriped() + '\n      background-size: ' + props.theme['$spacer-y'] + ' ' + props.theme['$spacer-y'] + ';\n    }\n    &.progress-striped[value]::-ms-fill {\n      ' + gradientStriped() + '\n      background-size: ' + props.theme['$spacer-y'] + ' ' + props.theme['$spacer-y'] + ';\n    }\n    /* IE9 */\n    @media screen and (min-width:0\0) {\n      &.progress-bar-striped {\n        ' + gradientStriped() + '\n        background-size: ' + props.theme['$spacer-y'] + ' ' + props.theme['$spacer-y'] + ';\n      }\n    }\n\n    /* Animated */\n\n    &.progress-animated[value]::-webkit-progress-value {\n      animation: progress-bar-stripes 2s linear infinite;\n    }\n    &.progress-animated[value]::-moz-progress-bar {\n      animation: progress-bar-stripes 2s linear infinite;\n    }\n    /* IE9 */\n    @media screen and (min-width:0\0) {\n      &.progress-animated .progress-bar-striped {\n        animation: progress-bar-stripes 2s linear infinite;\n      }\n    }\n\n    /* Variations */\n\n    &.progress-success {\n      ' + progressVariant(props.theme['$progress-bar-success-bg']) + '\n    }\n    &.progress-info {\n      ' + progressVariant(props.theme['$progress-bar-info-bg']) + '\n    }\n    &.progress-warning {\n      ' + progressVariant(props.theme['$progress-bar-warning-bg']) + '\n    }\n    &.progress-danger {\n      ' + progressVariant(props.theme['$progress-bar-danger-bg']) + '\n    }\n    ' + getTextUtilities() + '\n  ';
});

Progress.defaultProps = defaultProps;

export default Progress;