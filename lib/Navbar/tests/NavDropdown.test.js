'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('bootstrap-styled-provider/lib/BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _NavDropdown = require('../NavDropdown');

var _NavDropdown2 = _interopRequireDefault(_NavDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our NavDropdown component
 */
var children = _react2.default.createElement(
  'span',
  null,
  'Test'
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_NavDropdown2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(_NavDropdown2.default, props)
  ));
};

describe('<NavDropdown />', function () {
  it('should render an <NavDropdown> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children,
      toggle: jest.fn(),
      isOpen: false
    });
    expect(renderedComponent.find('span').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children,
      toggle: jest.fn(),
      isOpen: false
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <NavDropdown> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      toggle: jest.fn(),
      isOpen: false
    });
    expect(renderedComponent.find('NavDropdown').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponent({
      children: children,
      toggle: jest.fn(),
      isOpen: false
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});