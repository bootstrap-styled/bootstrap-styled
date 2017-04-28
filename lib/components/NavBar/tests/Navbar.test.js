'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Navbar component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Navbar = require('../Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('span', {}, void 0, 'Test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_Navbar2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(_Navbar2.default, props)));
};

var _ref = _jsx(_Navbar2.default, {
  toggleable: 'md'
});

var _ref2 = _jsx(_Navbar2.default, {
  toggleable: true
});

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
    var renderedComponent = (0, _enzyme.mount)(_ref);
    expect(renderedComponent.find('nav').hasClass('navbar-toggleable-md')).toEqual(true);
  });
  it('should have a class navbar-toggleable with a theme', function () {
    var renderedComponent = (0, _enzyme.mount)(_ref2);
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