'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = composeAnimation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _makeKeyframe = require('../components/animations/makeKeyframe');

var _makeKeyframe2 = _interopRequireDefault(_makeKeyframe);

var _tools = require('../../../utils/tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function composeAnimation(makeAnimation) {
  var HOC = function (_React$Component) {
    _inherits(HOC, _React$Component);

    function HOC() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, HOC);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HOC.__proto__ || Object.getPrototypeOf(HOC)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        styles: {}
      }, _this.componentWillMount = function () {
        var _this$props = _this.props,
            distance = _this$props.distance,
            duration = _this$props.duration,
            timingFunction = _this$props.timingFunction,
            delay = _this$props.delay,
            direction = _this$props.direction,
            iterations = _this$props.iterations,
            backfaceVisibility = _this$props.backfaceVisibility,
            fillMode = _this$props.fillMode,
            playState = _this$props.playState,
            keyframes = _this$props.keyframes;


        var keyframeName = (0, _makeKeyframe2.default)(_this.makeAnimation, distance, keyframes);

        _this.setState({
          styles: {
            animation: keyframeName + ' ' + duration + ' ' + timingFunction + ' ' + delay + ' ' + iterations + ' ' + direction + ' ' + fillMode + ' ' + playState,
            backfaceVisibility: '' + backfaceVisibility
          }
        });
      }, _this.makeAnimation = makeAnimation, _temp), _possibleConstructorReturn(_this, _ret);
    } // eslint-disable-line react/prefer-stateless-function

    /* eslint-disable react/no-unused-prop-types */

    /* eslint-disable react/no-unused-prop-types */


    _createClass(HOC, [{
      key: 'render',


      // Using <span> instead of composedComponent because each component has a base component <span> only.
      value: function render() {
        var _omit = (0, _tools.omit)(this.props, ['distance', 'duration', 'timingFunction', 'delay', 'iterations', 'direction', 'fillMode', 'playState', 'backfaceVisibility', 'keyframes']),
            className = _omit.className,
            children = _omit.children,
            rest = _objectWithoutProperties(_omit, ['className', 'children']);

        return _react2.default.createElement(
          'span',
          _extends({
            style: this.state.styles,
            className: (0, _classnames2.default)('d-inline-block', className)
          }, rest),
          children
        );
      }
    }]);

    return HOC;
  }(_react2.default.Component);

  HOC.defaultProps = {
    distance: '100%',
    duration: '1s',
    timingFunction: 'ease',
    delay: '0s',
    direction: 'normal',
    iterations: '1',
    backfaceVisibility: 'visible',
    fillMode: 'none',
    playState: 'running'
  };

  return HOC;
}