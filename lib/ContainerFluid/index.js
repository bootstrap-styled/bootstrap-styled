'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _grid = require('bootstrap-styled-mixins/lib/grid');

var _theme = require('./theme');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContainerFluidUnstyled = function (_React$Component) {
  _inherits(ContainerFluidUnstyled, _React$Component);

  function ContainerFluidUnstyled() {
    _classCallCheck(this, ContainerFluidUnstyled);

    return _possibleConstructorReturn(this, (ContainerFluidUnstyled.__proto__ || Object.getPrototypeOf(ContainerFluidUnstyled)).apply(this, arguments));
  }

  _createClass(ContainerFluidUnstyled, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          attributes = _objectWithoutProperties(_omit, ['className']);

      return _react2.default.createElement('div', _extends({ className: (0, _classnames2.default)(className, 'container-fluid') }, attributes));
    }
  }]);

  return ContainerFluidUnstyled;
}(_react2.default.Component);

ContainerFluidUnstyled.defaultProps = {
  theme: (0, _theme.makeTheme)()
};
ContainerFluidUnstyled.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  className: _propTypes2.default.string,
  theme: _propTypes2.default.object
  /* eslint-enable react/no-unused-prop-types */
};


var ContainerFluid = (0, _styledComponents2.default)(ContainerFluidUnstyled).withConfig({
  displayName: 'ContainerFluid'
})(['', ''], function (props) {
  return '\n    ' + (0, _grid.makeContainer)(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n  ';
});

exports.default = ContainerFluid;
module.exports = exports['default'];