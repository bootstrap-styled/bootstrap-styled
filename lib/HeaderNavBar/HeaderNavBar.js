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

var _findDOMNode = require('react-dom/lib/findDOMNode');

var _findDOMNode2 = _interopRequireDefault(_findDOMNode);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Header = require('../Header');

var _Header2 = _interopRequireDefault(_Header);

var _OffsetNavPush = require('./OffsetNavPush');

var _OffsetNavPush2 = _interopRequireDefault(_OffsetNavPush);

var _OffsetNavSlide = require('./OffsetNavSlide');

var _OffsetNavSlide2 = _interopRequireDefault(_OffsetNavSlide);

var _Overlay = require('./Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _tools = require('../utils/tools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = {
  button: {
    component: _Button2.default
  },
  showMenu: false,
  theme: _theme2.default,
  noOverlay: false,
  belowHeader: false,
  menuClose: false
};

var HeaderNavBar = function (_React$Component) {
  _inherits(HeaderNavBar, _React$Component);

  function HeaderNavBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HeaderNavBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeaderNavBar.__proto__ || Object.getPrototypeOf(HeaderNavBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      show: false
    }, _this.handleClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          animationPush = _this$props['animation-push'],
          menuRight = _this$props['menu-right'];
      var show = _this.state.show;

      if (onClick) {
        onClick(e);
      }
      _this.setState({ show: !show });
      // reset original to body by removing overflow class in order to avoid toggling bugs.
      document.body.classList.remove('overflow');
      //  menu-push animation
      if (animationPush) {
        menuRight ? // eslint-disable-line no-unused-expressions
        document.getElementById('wrapper').classList.toggle('right') :
        // add .overflow class to body when triggered on left side
        document.getElementById('wrapper').classList.toggle('left') && document.body.classList.toggle('overflow');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/prefer-stateless-function

  _createClass(HeaderNavBar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var showMenu = this.props.showMenu;

      if (showMenu) {
        this.setState({ show: true });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var componentAsANodeReact = (0, _findDOMNode2.default)(this); // eslint-disable-line react/no-find-dom-node
      var node = componentAsANodeReact.querySelector('.navbar.justify-content-between');
      var nodeHeight = node.clientHeight;
      var offsetNav = componentAsANodeReact.querySelector('.offset-nav-margin-top');
      this.props.belowHeader ? offsetNav.style.marginTop = nodeHeight + 'px' : null; // eslint-disable-line no-unused-expressions
      var sheet = document.createElement('style');
      sheet.innerHTML = 'body.overflow {overflow-x: hidden;}';
      document.body.appendChild(sheet);
    }
  }, {
    key: 'render',
    value: function render() {
      var _cn,
          _this2 = this;

      var _omit = (0, _lodash2.default)(this.props, ['theme', 'belowHeader']),
          className = _omit.className,
          children = _omit.children,
          cssModule = _omit.cssModule,
          button = _omit.button,
          noOverlay = _omit.noOverlay,
          menuClose = _omit.menuClose,
          offsetNavWidth = _omit.offsetNavWidth,
          navTop = _omit['nav-top'],
          menuRight = _omit['menu-right'],
          animationPush = _omit['animation-push'],
          light = _omit.light,
          inverse = _omit.inverse,
          fixed = _omit.fixed,
          sticky = _omit.sticky,
          color = _omit.color,
          offsetColor = _omit.offsetColor,
          showMenu = _omit.showMenu,
          shadowHeader = _omit.shadowHeader,
          attributesTemp = _objectWithoutProperties(_omit, ['className', 'children', 'cssModule', 'button', 'noOverlay', 'menuClose', 'offsetNavWidth', 'nav-top', 'menu-right', 'animation-push', 'light', 'inverse', 'fixed', 'sticky', 'color', 'offsetColor', 'showMenu', 'shadowHeader']);

      var _omit2 = (0, _lodash2.default)(attributesTemp, ['onClick']),
          attributes = _objectWithoutProperties(_omit2, []);

      var ButtonToggle = button.component,
          classNameButton = button.className,
          restButton = _objectWithoutProperties(button, ['component', 'className']);

      var cssClasses = (0, _classnames2.default)('navbar', 'justify-content-between', className, (_cn = {
        'flex-row': !showMenu,
        'navbar-light': light,
        'navbar-inverse': inverse
      }, _defineProperty(_cn, 'bg-' + color, color), _defineProperty(_cn, 'fixed-' + fixed, fixed), _defineProperty(_cn, 'sticky-' + sticky, sticky), _cn));

      var buttonMenuRight = menuRight ? 'flex-last' : '';

      var buttonClasses = (0, _classnames2.default)(buttonMenuRight, classNameButton, _defineProperty({
        'navbar-toggler-icon p-3 my-auto cursor-pointer': !classNameButton
      }, 'd-' + showMenu + '-none', showMenu));

      var OffsetMenuAnimated = animationPush ? _react2.default.createElement(
        _OffsetNavPush2.default,
        {
          className: 'offset-nav-margin-top',
          elementWidth: offsetNavWidth,
          showMenu: showMenu,
          active: this.state.show,
          offsetColor: offsetColor,
          'menu-right': menuRight,
          'animation-push': animationPush,
          menuClose: noOverlay && menuClose,
          dismiss: this.handleClick
        },
        children
      ) : _react2.default.createElement(
        _OffsetNavSlide2.default,
        {
          className: 'offset-nav-margin-top',
          elementWidth: offsetNavWidth,
          showMenu: showMenu,
          active: this.state.show,
          offsetColor: offsetColor,
          'menu-right': menuRight,
          'animation-push': animationPush,
          menuClose: noOverlay && menuClose,
          dismiss: this.handleClick
        },
        children
      );

      return _react2.default.createElement(
        'div',
        null,
        !noOverlay && _react2.default.createElement(_Overlay2.default, { active: this.state.show, onClick: this.handleClick }),
        _react2.default.createElement(
          _Header2.default,
          _extends({ className: (0, _tools.mapToCssModules)((0, _classnames2.default)(cssClasses), cssModule), shadowHeader: shadowHeader }, attributes, { innerRef: function innerRef(header) {
              _this2.header = header;
            } }),
          _react2.default.createElement(ButtonToggle, _extends({ className: buttonClasses, onClick: this.handleClick }, restButton)),
          navTop && _react2.default.createElement(
            'div',
            null,
            navTop
          )
        ),
        OffsetMenuAnimated
      );
    }
  }]);

  return HeaderNavBar;
}(_react2.default.Component);

HeaderNavBar.propTypes = {
  /* eslint-disable react/no-unused-prop-types, react/require-default-props */
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  theme: _propTypes2.default.object,
  showMenu: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  onClick: _propTypes2.default.func,
  belowHeader: _propTypes2.default.bool,
  shadowHeader: _propTypes2.default.bool,
  offsetNavWidth: _propTypes2.default.string,
  noOverlay: _propTypes2.default.bool,
  menuClose: _propTypes2.default.bool,
  cssModule: _propTypes2.default.object,
  dismiss: _propTypes2.default.func,
  button: _propTypes2.default.shape({
    component: _propTypes2.default.component,
    className: _propTypes2.default.string
  }),
  'nav-top': _propTypes2.default.node,
  light: _propTypes2.default.bool,
  inverse: _propTypes2.default.bool,
  full: _propTypes2.default.bool,
  fixed: _propTypes2.default.string,
  sticky: _propTypes2.default.string,
  color: _propTypes2.default.string,
  offsetColor: _propTypes2.default.string,
  'menu-right': _propTypes2.default.bool,
  'animation-push': _propTypes2.default.bool
  /* eslint-enable react/no-unused-prop-types, react/require-default-props */
};


HeaderNavBar.defaultProps = defaultProps;
exports.default = HeaderNavBar;
module.exports = exports['default'];