var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import styled from 'styled-components';
import React, { PropTypes } from 'react';
import bsTheme from 'theme';
import cn from 'classnames';
import { makeContainer } from '../../styled/mixins/grid';

var defaultProps = {
  theme: bsTheme
};

var ContainerFluid = function (_React$Component) {
  _inherits(ContainerFluid, _React$Component);

  function ContainerFluid() {
    _classCallCheck(this, ContainerFluid);

    return _possibleConstructorReturn(this, (ContainerFluid.__proto__ || Object.getPrototypeOf(ContainerFluid)).apply(this, arguments));
  }

  _createClass(ContainerFluid, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          theme = _props.theme,
          rest = _objectWithoutProperties(_props, ['className', 'children', 'theme']); // eslint-disable-line no-unused-vars


      return React.createElement(
        'div',
        _extends({ className: cn(className, 'container-fluid') }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return ContainerFluid;
}(React.Component);

// eslint-disable-next-line no-class-assign


ContainerFluid = styled(ContainerFluid).withConfig({
  displayName: 'ContainerFluid__ContainerFluid',
  componentId: 'ContainerFluid__ContainerFluid-zj9p63'
})(['', ''], function (props) {
  return '\n    ' + makeContainer(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n  ';
});

ContainerFluid.defaultProps = defaultProps;

export default ContainerFluid;