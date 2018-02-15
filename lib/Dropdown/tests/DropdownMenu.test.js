'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _DropdownMenu = require('../DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _NavDropdown = require('../../NavBar/NavDropdown');

var _NavDropdown2 = _interopRequireDefault(_NavDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
); /**
    * Testing our Dropdown component
    */


var renderComponentUsingTheme = function renderComponentUsingTheme() {
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(
      _NavDropdown2.default,
      { isOpen: false, toggle: jest.fn() },
      _react2.default.createElement(
        _DropdownMenu2.default,
        null,
        children
      )
    )
  ));
};

describe('<DropdownMenu />', function () {
  it('should render an <DropdownMenu> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('DropdownMenu').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});