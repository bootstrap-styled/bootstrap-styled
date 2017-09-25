'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _ButtonDropdown = require('../ButtonDropdown');

var _ButtonDropdown2 = _interopRequireDefault(_ButtonDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Button component
 */
var children = _react2.default.createElement(
  'span',
  null,
  'Test'
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_ButtonDropdown2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(_ButtonDropdown2.default, props)
  ));
};

describe('<ButtonDropdown />', function () {
  it('should render an <ButtonDropdown> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children,
      isOpen: false,
      toggle: jest.fn()
    });
    expect(renderedComponent.find('span').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children,
      isOpen: false,
      toggle: jest.fn()
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <ButtonDropdown> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      isOpen: false,
      toggle: jest.fn()
    });
    expect(renderedComponent.find('ButtonDropdown').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponent({
      children: children,
      isOpen: false,
      toggle: jest.fn()
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});