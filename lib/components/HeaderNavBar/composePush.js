var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * Kopax Ltd Copyright (c) 2016.
 */
import React, { PropTypes } from 'react';
import shapeMenuOffsetPush from './shapeMenuOffsetPush';
import shapeMenuTopPush from './shapeMenuTopPush';

export default function composePush(HeaderNavBar) {
  var Push = function (_React$Component) {
    _inherits(Push, _React$Component);

    function Push() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Push);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Push.__proto__ || Object.getPrototypeOf(Push)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        isHidden: true
      }, _this.handleClick = function (e) {
        if (_this.props.onClick) {
          _this.props.onClick(e);
        }
        _this.setState({
          isHidden: !_this.state.isHidden
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Push, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            className = _props.className,
            menuTop = _props.menuTop,
            menuOffset = _props.menuOffset,
            rest = _objectWithoutProperties(_props, ['className', 'menuTop', 'menuOffset']);

        return React.createElement(HeaderNavBar, _extends({
          className: className,
          composePush: {
            isHidden: this.state.isHidden,
            onClick: this.handleClick,
            isMini: this.props.isMini,
            menuTop: menuTop,
            menuOffset: menuOffset
          }
        }, rest));
      }
    }]);

    return Push;
  }(React.Component);

  return Push;
}