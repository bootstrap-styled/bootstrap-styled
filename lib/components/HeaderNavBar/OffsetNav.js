var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Menu component
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { transition } from '../../styled/mixins/transition';

var OffsetNav = function (_React$Component) {
  _inherits(OffsetNav, _React$Component);

  function OffsetNav() {
    _classCallCheck(this, OffsetNav);

    return _possibleConstructorReturn(this, (OffsetNav.__proto__ || Object.getPrototypeOf(OffsetNav)).apply(this, arguments));
  }

  _createClass(OffsetNav, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          active = _props.active,
          menuRight = _props['menu-right'],
          rest = _objectWithoutProperties(_props, ['className', 'children', 'active', 'menu-right']); // eslint-disable-line no-unused-vars


      var menuDirectionClassNames = menuRight ? 'menu-right' : 'menu-left';
      var cssClasses = cn(className, menuDirectionClassNames, { active: active }); // eslint-disable-line  object-shorthand
      return React.createElement(
        'div',
        _extends({ className: cssClasses }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return OffsetNav;
}(React.Component);

// eslint-disable-next-line no-class-assign


OffsetNav = styled(OffsetNav).withConfig({
  displayName: 'OffsetNav__OffsetNav',
  componentId: 'OffsetNav__OffsetNav-1trmqhw'
})(['', ''], function (props) {
  return '\n    position: fixed;\n    top: 0;\n    width: ' + props.theme['$menu-push-width'] + ';\n    height: 100%;\n    background-color: white;\n    z-index: ' + props.theme['$zindex-menu-push'] + ';\n    ' + transition(props.theme['$enable-transitions'], 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms') + '\n    \n    &.menu-left {\n      box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n      transform: translateX(-100%);\n      &.active {\n        transform: translateX(0);\n      }\n    }\n    \n    &.menu-right {\n      right: 0;\n      box-shadow: rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;\n      transform: translateX(100%);\n      &.active {\n        transform: translateX(0);\n      }\n    }\n  ';
});

export default OffsetNav;