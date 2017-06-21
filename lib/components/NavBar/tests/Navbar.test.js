'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Navbar = require('../Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Testing our Navbar component
 */
var children = _react2.default.createElement(
  'span',
  null,
  'Test'
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _Navbar2.default,
    props,
    props.children
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(
      _Navbar2.default,
      props,
      props.children
    )
  ));
};

describe('<Navbar />', function () {
  it('should render an <Navbar> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('Navbar').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <Navbar> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('Navbar').length).toBe(1);
  });
  it('should have a class navbar-toggleable-md with a theme', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(_Navbar2.default, { toggleable: 'md' }));
    expect(renderedComponent.find('nav').hasClass('navbar-toggleable-md')).toEqual(true);
  });
  it('should have a class navbar-toggleable with a theme', function () {
    var renderedComponent = (0, _enzyme.mount)(_react2.default.createElement(_Navbar2.default, { toggleable: true }));
    expect(renderedComponent.find('nav').hasClass('navbar-toggleable')).toEqual(true);
  });
  it('should have class navbar-light with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      light: true
    });
    expect(renderedComponent.find('nav').hasClass('navbar-light')).toEqual(true);
  });
  it('should have class navbar-inverse with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      inverse: true
    });
    expect(renderedComponent.find('nav').hasClass('navbar-inverse')).toEqual(true);
  });
  it('should have class navbar-full with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      full: true
    });
    expect(renderedComponent.find('nav').hasClass('navbar-full')).toEqual(true);
  });
  it('should have class bg-info with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      color: 'info'
    });
    expect(renderedComponent.find('nav').hasClass('bg-info')).toEqual(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});