var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Strong component
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import bsTheme from 'theme';

var defaultProps = {
  theme: bsTheme
};

var Strong = function (_React$Component) {
  _inherits(Strong, _React$Component);

  function Strong() {
    _classCallCheck(this, Strong);

    return _possibleConstructorReturn(this, (Strong.__proto__ || Object.getPrototypeOf(Strong)).apply(this, arguments));
  }

  _createClass(Strong, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          theme = _props.theme,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['className', 'theme', 'children']); // eslint-disable-line no-unused-vars


      return React.createElement(
        'strong',
        _extends({
          className: className
        }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Strong;
}(React.Component);

// eslint-disable-next-line no-class-assign


Strong = styled(Strong).withConfig({
  displayName: 'Strong__Strong',
  componentId: 'Strong__Strong-15izlss'
})(['font-weight: bolder; /* Add the correct font weight in Chrome, Edge, and Safari */']);

Strong.defaultProps = defaultProps;

export default Strong;