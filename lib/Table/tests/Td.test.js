'use strict';

var _styledComponents = require('styled-components');

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

var _Td = require('../Td');

var _Td2 = _interopRequireDefault(_Td);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _Tr = require('../Tr');

var _Tr2 = _interopRequireDefault(_Tr);

var _Tbody = require('../Tbody');

var _Tbody2 = _interopRequireDefault(_Tbody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Td component
 */
var children = _react2.default.createElement(
  'span',
  null,
  'Test'
);

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: _theme2.default },
    _react2.default.createElement(
      _index2.default,
      null,
      _react2.default.createElement(
        _Tbody2.default,
        null,
        _react2.default.createElement(
          _Tr2.default,
          null,
          _react2.default.createElement(
            _Td2.default,
            props,
            children
          )
        )
      )
    )
  ));
};

describe('<Td />', function () {
  it('should render a <td> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('td').length).toBe(1);
    expect(renderedComponent.find('Td').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have a className table-active', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      color: 'active'
    });
    expect(renderedComponent.find('td').hasClass('table-active')).toBe(true);
  });
});