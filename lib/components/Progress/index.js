var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  from { background-position: ', ' 0; }\n  to { background-position: 0 0; }\n'], ['\n  from { background-position: ', ' 0; }\n  to { background-position: 0 0; }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Progress (Animation Bar) */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled, { keyframes } from 'styled-components';
import { rangeUtils } from 'math-utils';
import theme from 'theme';
import { borderRadius } from '../../styled/mixins/border-radius';
import { getBackgroundUtilities } from '../../styled/utilities/background';
import { gradientStriped } from '../../styled/mixins/gradients';

var defaultProps = {
  theme: theme,
  valueMin: 0,
  valueMax: 100,
  valueNow: 0,
  striped: false,
  animated: false
};

var Progress = function (_React$Component) {
  _inherits(Progress, _React$Component);

  function Progress() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Progress);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Progress.__proto__ || Object.getPrototypeOf(Progress)).call.apply(_ref, [this].concat(args))), _this), _this.TO_PROGRESS_BAR_LIST = [// eslint-disable-line react/sort-comp
    'bg-faded', 'bg-primary', 'bg-success', 'bg-info', 'bg-warning', 'bg-danger', 'bg-inverse'], _this.state = {
      classNameProgress: '',
      classNameProgressBar: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/prefer-stateless-function

  _createClass(Progress, [{
    key: 'setClassList',
    value: function setClassList() {
      var _this2 = this;

      var className = this.props.className;

      var classNameList = className.split(' ');

      var classNameProgressList = [];
      var classNameProgressBarList = [];
      classNameList.forEach(function (oneClass) {
        if (_this2.TO_PROGRESS_BAR_LIST.indexOf(oneClass) === -1) {
          classNameProgressList.push(oneClass);
        } else {
          classNameProgressBarList.push(oneClass);
        }
      });
      this.setState({
        classNameProgress: classNameProgressList.join(' '),
        classNameProgressBar: classNameProgressBarList.join(' ')
      });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setClassList();
    }
  }, {
    key: 'getWidth',
    value: function getWidth(valueNow, valueMin, valueMax) {
      return rangeUtils.mapBetween(valueNow, valueMin, valueMax) + '%';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          valueNow = _props.valueNow,
          valueMin = _props.valueMin,
          valueMax = _props.valueMax,
          height = _props.height,
          striped = _props.striped,
          animated = _props.animated;
      var _state = this.state,
          classNameProgress = _state.classNameProgress,
          classNameProgressBar = _state.classNameProgressBar;

      return _jsx('div', {
        className: cn('progress', classNameProgress)
      }, void 0, _jsx('div', {
        className: cn('progress-bar', classNameProgressBar, {
          'progress-bar-striped': striped,
          'progress-bar-animated': animated
        }),
        style: Object.assign({ width: this.getWidth(valueNow, valueMin, valueMax) }, { height: height })
      }, void 0, children));
    }
  }]);

  return Progress;
}(React.Component);

var backgroundPositionKeyFrame = function backgroundPositionKeyFrame(props) {
  return keyframes(_templateObject, props.theme['$progress-height']);
};

// eslint-disable-next-line no-class-assign
Progress = styled(Progress)(_templateObject2, function (props) {
  return '\n    \n    &.progress {\n      display: flex;\n      overflow: hidden; // force rounded corners by cropping it\n      font-size: ' + props.theme['$progress-font-size'] + ';\n      line-height: ' + props.theme['$progress-height'] + ';\n      text-align: center;\n      background-color: ' + props.theme['$progress-bg'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$progress-border-radius']) + '\n      ' + getBackgroundUtilities(props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$brand-inverse'], props.theme['$gray-lightest']) + '\n    }\n    \n    .progress-bar {\n      height: ' + props.theme['$progress-height'] + ';\n      line-height: ' + props.theme['$progress-height'] + ';\n      color: ' + props.theme['$progress-bar-color'] + ';\n      background-color: ' + props.theme['$progress-bar-bg'] + ';\n    }\n    \n    .progress-bar-striped {\n      ' + gradientStriped() + '\n      background-size: ' + props.theme['$progress-height'] + ' ' + props.theme['$progress-height'] + ';\n      background-repeat: repeat; /* Not present in bootstrap original but required to repeat the background */\n    }\n    \n    .progress-bar-animated {\n      animation: ' + backgroundPositionKeyFrame(props) + ' ' + props.theme['$progress-bar-animation-timing'] + ';\n    }\n\n  ';
});

Progress.defaultProps = defaultProps;

export default Progress;