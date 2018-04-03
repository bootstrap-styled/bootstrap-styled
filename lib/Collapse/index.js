'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _bootstrapStyledUtils = require('bootstrap-styled-utils');

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SHOW = 'SHOW';
var SHOWN = 'SHOWN';
var HIDE = 'HIDE';
var HIDDEN = 'HIDDEN';

var defaultProps = exports.defaultProps = {
  isOpen: false,
  theme: {
    '$transition-collapse': 'height .35s ease'
  },
  tag: 'div',
  delay: {
    show: 350,
    hide: 350
  },
  onOpened: null,
  onClosed: null
};
var propTypes = exports.propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func]),
  /** Delay transition in milliseconds before and after collapse. Can be: */
  delay: _propTypes2.default.oneOfType([_propTypes2.default.shape({ show: _propTypes2.default.number, hide: _propTypes2.default.number }), _propTypes2.default.number]),
  /** Toggles collapse open or close action. */
  isOpen: _propTypes2.default.bool,
  /** Toggles nav bar CSS display. */
  navbar: _propTypes2.default.bool,
  /** Call specified function when opened collapse action is triggered. */
  onOpened: _propTypes2.default.func,
  /** Call specified function when closed collapse action is triggered. */
  onClosed: _propTypes2.default.func,
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$transition-collapse': _propTypes2.default.string
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes2.default.object
};

var Collapse = function (_Component) {
  _inherits(Collapse, _Component);

  function Collapse() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Collapse);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      collapse: HIDDEN,
      height: null
    }, _this.element = null, _temp), _possibleConstructorReturn(_this, _ret);
  }

  /* eslint-disable react/no-unused-prop-types */

  /* eslint-enable react/no-unused-prop-types */

  _createClass(Collapse, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateVisibility({ collapse: this.props.isOpen ? SHOWN : HIDDEN });
      this.updateTransition({ delay: this.props.delay, theme: this.props.theme });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var willOpen = nextProps.isOpen;
      var collapse = this.state.collapse;

      if (willOpen && collapse === HIDDEN) {
        // will open
        this.setState({ collapse: SHOW }, function () {
          // the height transition will work after class "collapsing" applied
          _this2.setState({ height: _this2.getHeight() });
          _this2.transitionTag = setTimeout(function () {
            _this2.setState({
              collapse: SHOWN,
              height: null
            });
          }, _this2.getDelay('show'));
        });
      } else if (!willOpen && collapse === SHOWN) {
        // will hide
        this.setState({ height: this.getHeight() }, function () {
          _this2.setState({
            collapse: HIDE,
            height: _this2.getHeight()
          }, function () {
            _this2.setState({ height: 0 });
          });
        });

        this.transitionTag = setTimeout(function () {
          _this2.setState({
            collapse: HIDDEN,
            height: null
          });
        }, this.getDelay('hide'));
      }
      // else: do nothing.

      if (nextProps.theme['$transition-collapse'] !== this.props.theme['$transition-collapse'] || nextProps.delay.show !== this.props.delay.show || nextProps.delay.hide !== this.props.delay.hide) {
        this.updateTransition({ delay: nextProps.delay, theme: nextProps.theme });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.collapse === SHOWN && prevState && prevState.collapse !== SHOWN) {
        if (this.props.onOpened) {
          this.props.onOpened();
        }
      }

      if (this.state.collapse === HIDDEN && prevState && prevState.collapse !== HIDDEN) {
        if (this.props.onClosed) {
          this.props.onClosed();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.transitionTag);
    }
  }, {
    key: 'getDelay',
    value: function getDelay(key) {
      var delay = this.state.delay;

      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
        return delay[key];
      }
      return delay;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.element.scrollHeight;
    }
  }, {
    key: 'updateTransition',
    value: function updateTransition(_ref2) {
      var delay = _ref2.delay,
          theme = _ref2.theme;

      var transition = (0, _bootstrapStyledUtils.parseTransition)(theme['$transition-collapse'])[0];
      var newDelay = {
        show: delay.show !== undefined ? delay.show : transition.duration,
        hide: delay.hide !== undefined ? delay.hide : transition.duration
      };
      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) !== 'object' && delay !== undefined) {
        newDelay = {
          show: delay,
          hide: delay
        };
      }
      this.setState({ delay: newDelay });
    }
  }, {
    key: 'updateVisibility',
    value: function updateVisibility(_ref3) {
      var collapse = _ref3.collapse;

      this.setState({
        collapse: collapse
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _omit = (0, _lodash2.default)(this.props, ['isOpen', 'theme', 'delay', 'onOpened', 'onClosed']),
          navbar = _omit.navbar,
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['navbar', 'className', 'cssModule', 'tag']);

      var _state = this.state,
          collapse = _state.collapse,
          height = _state.height;


      var collapseClass = void 0;
      if (collapse === SHOW || collapse === HIDE) {
        collapseClass = 'collapsing';
      } else if (collapse === SHOWN) {
        collapseClass = 'collapse show';
      } else if (collapse === HIDDEN) {
        collapseClass = 'collapse';
      }

      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
      var style = height === null ? null : { height: height };
      return _react2.default.createElement(Tag, _extends({}, attributes, {
        style: _extends({}, attributes.style, style),
        className: classes,
        ref: function ref(c) {
          _this3.element = c;
        }
      }));
    }
  }]);

  return Collapse;
}(_react.Component);

Collapse.defaultProps = defaultProps;
Collapse.propTypes = propTypes;


Collapse.defaultProps = defaultProps;
Collapse.propTypes = propTypes;

/** @component */
exports.default = Collapse;