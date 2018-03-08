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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _grid = require('bootstrap-styled-mixins/lib/grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *Definition List
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = {
  theme: {
    '$grid-gutter-widths': {
      xs: '30px',
      sm: '30px',
      md: '30px',
      lg: '30px',
      xl: '30px'
    },
    '$enable-grid-classes': true
  }
};
var propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$grid-gutter-widths': _propTypes2.default.object,
    '$enable-grid-classes': _propTypes2.default.bool
  })
};

var DlUnstyled = function (_React$Component) {
  _inherits(DlUnstyled, _React$Component);

  function DlUnstyled() {
    _classCallCheck(this, DlUnstyled);

    return _possibleConstructorReturn(this, (DlUnstyled.__proto__ || Object.getPrototypeOf(DlUnstyled)).apply(this, arguments));
  }

  _createClass(DlUnstyled, [{
    key: 'render',

    /* eslint-enable react/no-unused-prop-types */

    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          attributes = _objectWithoutProperties(_omit, ['className']);

      return _react2.default.createElement('dl', _extends({ className: className }, attributes));
    }

    /* eslint-disable react/no-unused-prop-types */

  }]);

  return DlUnstyled;
}(_react2.default.Component);
/**
 * `<Dl />` defines a description list.
 */


DlUnstyled.defaultProps = defaultProps;
DlUnstyled.propTypes = propTypes;
var Dl = (0, _styledComponents2.default)(DlUnstyled).withConfig({
  displayName: 'Dl'
})(['  margin-top:0;margin-bottom:1rem;', ''], function (props) {
  return '\n    ' + (0, _grid.makeRow)(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n  ';
});

Dl.defaultProps = defaultProps;
Dl.propTypes = propTypes;

/** @component */
exports.default = Dl;
module.exports = exports['default'];