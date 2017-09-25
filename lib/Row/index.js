'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _grid = require('../styled/mixins/grid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultProps = { theme: _theme2.default };

var RowUnstyled = function (_React$Component) {
  _inherits(RowUnstyled, _React$Component);

  function RowUnstyled() {
    _classCallCheck(this, RowUnstyled);

    return _possibleConstructorReturn(this, (RowUnstyled.__proto__ || Object.getPrototypeOf(RowUnstyled)).apply(this, arguments));
  }

  _createClass(RowUnstyled, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children; // eslint-disable-line no-unused-vars

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(className, 'row') },
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return RowUnstyled;
}(_react2.default.Component);

RowUnstyled.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired
};


var Row = (0, _styledComponents2.default)(RowUnstyled).withConfig({
  displayName: 'Row'
})(['', ''], function (props) {
  return '\n    &.row {\n      ' + (0, _grid.makeRow)(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n    }\n    /*\n      Remove the negative margin from default .row, then the horizontal padding\n      from all immediate children columns (to prevent runaway style inheritance).\n    */\n\n    &.no-gutters {\n      margin-right: 0;\n      margin-left: 0;\n\n      > .col,\n      > [class*="col-"] {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    }\n ';
});

Row.defaultProps = defaultProps;

exports.default = Row;
module.exports = exports['default'];