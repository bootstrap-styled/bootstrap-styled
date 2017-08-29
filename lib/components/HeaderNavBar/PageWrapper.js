'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = { theme: _theme2.default };

var PageWrapper = function (_React$Component) {
  _inherits(PageWrapper, _React$Component);

  function PageWrapper() {
    _classCallCheck(this, PageWrapper);

    return _possibleConstructorReturn(this, (PageWrapper.__proto__ || Object.getPrototypeOf(PageWrapper)).apply(this, arguments));
  }

  _createClass(PageWrapper, [{
    key: 'render',
    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children;

      return _react2.default.createElement(
        'div',
        {
          className: className,
          id: 'wrapper'
        },
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return PageWrapper;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


PageWrapper.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object
  /* eslint-enable react/no-unused-prop-types */
};
PageWrapper = (0, _styledComponents2.default)(PageWrapper).withConfig({
  displayName: 'PageWrapper__PageWrapper'
})(['', ''], function (props) {
  return '\n    height: 100%;\n    transition: ' + props.theme['$menu-offset-nav-transition'] + ';\n    &.left { transform: translateX(220px); }\n    &.right { transform: translateX(-220px); }\n  ';
});

PageWrapper.defaultProps = defaultProps;

exports.default = PageWrapper;
module.exports = exports['default'];