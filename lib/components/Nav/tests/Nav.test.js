'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Nav component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Nav = require('../Nav');

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('h1', {}, void 0, 'Test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _Nav2.default,
    props,
    props.children
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(
    _Nav2.default,
    props,
    props.children
  )));
};

describe('<Nav />', function () {
  it('should render an <Nav> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('Nav').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <nav> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('Nav').length).toBe(1);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have a class navbar-nav but not nav', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      navbar: true
    });
    expect(renderedComponent.find('ul').hasClass('navbar-nav')).toBe(true);
  });
  it('should have a class nav-tabs', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      tabs: true
    });
    expect(renderedComponent.find('ul').hasClass('nav-tabs')).toBe(true);
  });
  it('should have a class nav-pills', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      pills: true
    });
    expect(renderedComponent.find('ul').hasClass('nav-pills')).toBe(true);
  });
  it('should have a class nav-fill', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      fill: true
    });
    expect(renderedComponent.find('ul').hasClass('nav-fill')).toBe(true);
  });
  it('should have a class nav-inline', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      inline: true
    });
    expect(renderedComponent.find('ul').hasClass('nav-inline')).toBe(true);
  });
  it('should have a class nav-stacked', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      stacked: true
    });
    expect(renderedComponent.find('ul').hasClass('nav-stacked')).toBe(true);
  });
  it('should have a class nav-justified', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      justified: true
    });
    expect(renderedComponent.find('ul').hasClass('nav-justified')).toBe(true);
  });
  it('should have a class flex-column', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      vertical: true
    });
    expect(renderedComponent.find('ul').hasClass('flex-column')).toBe(true);
  });
});