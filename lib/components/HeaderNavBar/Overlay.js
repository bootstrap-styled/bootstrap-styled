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

var Overlay = function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay() {
    _classCallCheck(this, Overlay);

    return _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
  }

  _createClass(Overlay, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          active = _props.active,
          rest = _objectWithoutProperties(_props, ['className', 'children', 'active']); // eslint-disable-line no-unused-vars


      var cssClasses = cn(className, { active: active }); // eslint-disable-line  object-shorthand
      return React.createElement(
        'div',
        _extends({ className: cssClasses }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Overlay;
}(React.Component);

// eslint-disable-next-line no-class-assign


Overlay = styled(Overlay).withConfig({
  displayName: 'Overlay__Overlay',
  componentId: 'Overlay__Overlay-4kphon'
})(['position: fixed;width: 100%;height: 100%;z-index: 1990;background: rgba(0, 0, 0, 0.3);opacity: 0;transform: translate3d(100%, 0, 0);transition: \'opacity 0.3s, transform 0s 0.3s\';&.active {opacity: 1;transition: opacity 0.3s;transform: translate3d(0, 0, 0);}']);

export default Overlay;