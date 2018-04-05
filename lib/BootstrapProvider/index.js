'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _UtilityProvider = require('./UtilityProvider');

var _UtilityProvider2 = _interopRequireDefault(_UtilityProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = exports.defaultProps = {
  theme: _theme2.default
};
var propTypes = exports.propTypes = {
  /** Specified node element will be passed as children of `<BootstrapProvider />` component. */
  children: _propTypes2.default.node,
  /** Theme variables. */
  theme: _propTypes2.default.object,
  /** Utilities variables. */
  utils: _propTypes2.default.shape({
    /** Toggles align theme variables. */
    align: _propTypes2.default.bool,
    /** Toggles background theme variables. */
    background: _propTypes2.default.bool,
    /** Toggles `<A />` link theme variables. */
    a: _propTypes2.default.bool,
    /** Toggles border theme variables. */
    border: _propTypes2.default.bool,
    /** Toggles clearfix theme variables. */
    clearfix: _propTypes2.default.bool,
    /** Toggles display theme variables. */
    display: _propTypes2.default.bool,
    /** Toggles flex theme variables. */
    flex: _propTypes2.default.bool,
    /** Toggles float theme variables. */
    float: _propTypes2.default.bool,
    /** Toggles position theme variables. */
    position: _propTypes2.default.bool,
    /** Toggles screenreaders theme variables. */
    screenreaders: _propTypes2.default.bool,
    /** Toggles sizing theme variables. */
    sizing: _propTypes2.default.bool,
    /** Toggles spacing theme variables. */
    spacing: _propTypes2.default.bool,
    /** Toggles text theme variables. */
    text: _propTypes2.default.bool,
    /** Toggles transition theme variables. */
    transition: _propTypes2.default.bool,
    /** Toggles visibility theme variables. */
    visibility: _propTypes2.default.bool
  })
};

var BootstrapProvider = function (_React$Component) {
  _inherits(BootstrapProvider, _React$Component);

  function BootstrapProvider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BootstrapProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BootstrapProvider.__proto__ || Object.getPrototypeOf(BootstrapProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isWindowPhone8Fixed: null // just for unit testing


      // componentWillReceiveProps(nextProps) {
      //   const diff = 0;
      //
      // }

    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/prefer-stateless-function

  /* eslint-disable react/no-unused-prop-types */

  /* eslint-enable react/no-unused-prop-types */

  _createClass(BootstrapProvider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.windowPhone8Fix();
    }
  }, {
    key: 'windowPhone8Fix',
    value: function windowPhone8Fix() {
      // Copyright 2014-2017 The Bootstrap Authors
      // Copyright 2014-2017 Twitter, Inc.
      // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
      if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
        document.head.appendChild(msViewportStyle);
        this.setState({
          isWindowPhone8Fixed: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          userTheme = _props.theme,
          utils = _props.utils;

      var theme = (0, _theme.makeTheme)(userTheme);
      var metaKeyList = Object.keys(theme).filter(function (f) {
        return theme[f][0] === '_';
      });
      metaKeyList.forEach(function (k) {
        delete theme[k];
      });
      return _react2.default.createElement(
        _styledComponents.ThemeProvider,
        { theme: theme },
        _react2.default.createElement(
          _UtilityProvider2.default,
          { utils: utils },
          children
        )
      );
    }
  }]);

  return BootstrapProvider;
}(_react2.default.Component);

BootstrapProvider.defaultProps = defaultProps;
BootstrapProvider.propTypes = propTypes;


BootstrapProvider.defaultProps = defaultProps;
BootstrapProvider.propTypes = propTypes;

exports.default = BootstrapProvider;