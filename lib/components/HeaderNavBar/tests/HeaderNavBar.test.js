'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our Nav component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BootstrapProvider = require('../../BootstrapProvider');

var _BootstrapProvider2 = _interopRequireDefault(_BootstrapProvider);

var _Button = require('../../Button');

var _Button2 = _interopRequireDefault(_Button);

var _HeaderNavBar = require('../HeaderNavBar');

var _HeaderNavBar2 = _interopRequireDefault(_HeaderNavBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var children = _jsx('h1', {}, void 0, 'Test');
var navTopContent = _jsx('span', {}, void 0, 'Test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(_HeaderNavBar2.default, props));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_BootstrapProvider2.default, {}, void 0, _react2.default.createElement(_HeaderNavBar2.default, props)));
};

describe('<HeaderNavBar />', function () {
  it('should render an <HeaderNavBar> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <HeaderNavBar> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('HeaderNavBar').length).toBe(1);
  });
  it('should render an <HeaderNavBar> with a props nav-top tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'nav-top': navTopContent
    });
    expect(renderedComponent.find('HeaderNavBar').props()['nav-top']).toEqual(navTopContent);
  });
  it('should render an <HeaderNavBar> with a props menu-right tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'menu-right': true
    });
    expect(renderedComponent.find('HeaderNavBar').props()['menu-right']).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props navbar-inverse tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      inverse: true
    });
    expect(renderedComponent.find('header').hasClass('navbar-inverse')).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props bg-inverse tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      color: 'inverse'
    });
    expect(renderedComponent.find('header').hasClass('bg-inverse')).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props navbar-light tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      light: true
    });
    expect(renderedComponent.find('header').hasClass('navbar-light')).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props bg-faded faded with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      color: 'faded'
    });
    expect(renderedComponent.find('header').hasClass('bg-faded')).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props sticky-top faded with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      sticky: 'top'
    });
    expect(renderedComponent.find('header').hasClass('sticky-top')).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props fixed-top faded with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      fixed: 'top'
    });
    expect(renderedComponent.find('header').hasClass('fixed-top')).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props fixed-bottom faded with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      fixed: 'bottom'
    });
    expect(renderedComponent.find('header').hasClass('fixed-bottom')).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props animationPush and menuRight with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      animationPush: true,
      menuRight: true
    });
    expect(renderedComponent.find('HeaderNavBar').props().animationPush).toEqual(true);
    expect(renderedComponent.find('HeaderNavBar').props().menuRight).toEqual(true);
  });
  it('should render a <HeaderNavBar> with a Button Component with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      button: {
        component: _Button2.default,
        className: 'btn-test'
      }
    });
    expect(renderedComponent.find('Button').length).toBe(1);
    expect(renderedComponent.find('button').at(0).hasClass('btn-test')).toEqual(true);
  });
  it('should render an <HeaderNavBar> with a click that changes the props active of Overlay and OffsetNav', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    renderedComponent.find('button').at(0).simulate('click');
    expect(renderedComponent.find('Overlay').props().active).toEqual(true);
    expect(renderedComponent.find('OffsetNav').props().active).toEqual(true);
  });
  it('should render an <HeaderNavBar> with a props belowHeader with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      belowHeader: true
    });
    expect(renderedComponent.find('HeaderNavBar').props().belowHeader).toEqual(true);
  });
  it('should render an <HeaderNavBar> with a props menuClose with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      menuClose: true
    });
    expect(renderedComponent.find('HeaderNavBar').props().menuClose).toEqual(true);
  });
  it('should render an <HeaderNavBar> with a props animation-push with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'animation-push': true
    });
    expect(renderedComponent.find('HeaderNavBar').props()['animation-push']).toEqual(true);
    expect(renderedComponent.find('OffsetNav').props()['animation-push']).toEqual(true);
  });
  it('should render an <HeaderNavBar> with an onClick function for Overlay', function () {
    var onClick = jest.fn();
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      onClick: onClick
    });
    renderedComponent.find('Overlay').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
  it('should render an <HeaderNavBar> with an onClick function for Button', function () {
    var onClick = jest.fn();
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      onClick: onClick
    });
    renderedComponent.find('Button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});