'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tetherFix = require('tether-fix');

var _tetherFix2 = _interopRequireDefault(_tetherFix);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Tether Content component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = {
  isOpen: false,
  tetherRef: function tetherRef() {}
};
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Specified node element will be passed as children of `<TetherContent />` component. */
  children: _propTypes2.default.node,
  /** Toggles opened CSS display. */
  isOpen: _propTypes2.default.bool,
  /** Toggles disabled CSS display. */
  disabled: _propTypes2.default.bool,
  /** Call specified function when toggle action is triggered. */
  toggle: _propTypes2.default.func.isRequired,
  /** Tether object. Please consult [Tether documentation](http://tether.io/) for more information. */
  tether: _propTypes2.default.object.isRequired,
  /** Tether reference. Please consult [Tether documentation](http://tether.io/) for more information. */
  tetherRef: _propTypes2.default.func,
  /** Tether style. Please consult [Tether documentation](http://tether.io/) for more information. */
  style: _propTypes2.default.node
};

var TetherContent = function (_React$Component) {
  _inherits(TetherContent, _React$Component);

  function TetherContent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TetherContent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TetherContent.__proto__ || Object.getPrototypeOf(TetherContent)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      _this.handleProps();
    }, _this.componentDidUpdate = function (prevProps) {
      if (_this.props.isOpen !== prevProps.isOpen) {
        _this.handleProps();
      } else if (_this.element) {
        // rerender
        _this.renderIntoSubtree();
      }
    }, _this.componentWillUnmount = function () {
      _this.hide();
    }, _this.getTarget = function () {
      var target = _this.props.tether.target;

      if ((0, _lodash2.default)(target)) {
        return target();
      }

      return target;
    }, _this.getTetherConfig = function () {
      var config = _extends({}, _this.props.tether);

      config.element = _this.element;
      config.target = _this.getTarget();
      return config;
    }, _this.handleDocumentClick = function (e) {
      var container = _this.element;
      if (e.target === container || !container.contains(e.target)) {
        _this.toggle();
      }
    }, _this.handleProps = function () {
      if (_this.props.isOpen) {
        _this.show();
      } else {
        _this.hide();
      }
    }, _this.hide = function () {
      document.removeEventListener('click', _this.handleDocumentClick, true);

      if (_this.element) {
        document.body.removeChild(_this.element);
        _reactDom2.default.unmountComponentAtNode(_this.element);
        _this.element = null;
      }

      if (_this.tether) {
        _this.tether.destroy();
        _this.tether = null;
        _this.props.tetherRef(_this.tether);
      }
    }, _this.show = function () {
      document.addEventListener('click', _this.handleDocumentClick, true);

      _this.element = document.createElement('div');
      _this.element.className = _this.props.className;
      document.body.appendChild(_this.element);
      _this.renderIntoSubtree();
      _this.tether = new _tetherFix2.default(_this.getTetherConfig());
      _this.props.tetherRef(_this.tether);
      _this.tether.position();
    }, _this.toggle = function (e) {
      if (_this.props.disabled) {
        return e && e.preventDefault();
      }

      return _this.props.toggle();
    }, _this.renderIntoSubtree = function () {
      _reactDom2.default.unstable_renderSubtreeIntoContainer(_this, _this.renderChildren(), _this.element);
    }, _this.renderChildren = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          style = _this$props.style;

      return _react2.default.cloneElement(children, { style: style });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/prefer-stateless-function

  /* eslint-disable react/no-unused-prop-types */

  /* eslint-enable react/no-unused-prop-types */

  _createClass(TetherContent, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return TetherContent;
}(_react2.default.Component);

TetherContent.defaultProps = defaultProps;
TetherContent.propTypes = propTypes;


TetherContent.defaultProps = defaultProps;
TetherContent.propTypes = propTypes;

exports.default = TetherContent;
module.exports = exports['default'];