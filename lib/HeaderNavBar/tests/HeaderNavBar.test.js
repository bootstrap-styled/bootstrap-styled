'use strict';

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

var children = _react2.default.createElement(
  'h1',
  null,
  'Test'
); /**
    * Testing our Nav component
    */

var navTopContent = _react2.default.createElement(
  'span',
  null,
  'Test'
);

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _HeaderNavBar2.default,
    props,
    children
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_react2.default.createElement(
    _BootstrapProvider2.default,
    null,
    _react2.default.createElement(
      _HeaderNavBar2.default,
      props,
      children
    )
  ));
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
      'navbar-inverse': true
    });
    expect(renderedComponent.find('HeaderNavBar').props()['navbar-inverse']).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props bg-inverse tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'bg-inverse': true
    });
    expect(renderedComponent.find('HeaderNavBar').props()['bg-inverse']).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props navbar-light tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'navbar-light': true
    });
    expect(renderedComponent.find('HeaderNavBar').props()['navbar-light']).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props bg-faded faded with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'bg-faded': true
    });
    expect(renderedComponent.find('HeaderNavBar').props()['bg-faded']).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props static-top faded with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'static-top': true
    });
    expect(renderedComponent.find('HeaderNavBar').props()['static-top']).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props sticky-top faded with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'sticky-top': true
    });
    expect(renderedComponent.find('HeaderNavBar').props()['sticky-top']).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props fixed-top faded with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'fixed-top': true
    });
    expect(renderedComponent.find('HeaderNavBar').props()['fixed-top']).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props fixed-bottom faded with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'fixed-bottom': true
    });
    expect(renderedComponent.find('HeaderNavBar').props()['fixed-bottom']).toBe(true);
  });
  it('should have state show by default if props showMenu', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      showMenu: true
    });
    expect(renderedComponent.find('OffsetNav').props().showMenu).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props shadowHeader tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      shadowHeader: true
    });
    expect(renderedComponent.find('HeaderNavBar').props().shadowHeader).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props offsetColor tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      offsetColor: 'primary'
    });
    expect(renderedComponent.find('HeaderNavBar').props().offsetColor).toBe('primary');
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
    expect(renderedComponent.find('button').at(0).hasClass('btn-test')).toBe(true);
  });
  it('should render an <HeaderNavBar> with a props menuClose', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      menuClose: true
    });
    expect(renderedComponent.find('HeaderNavBar').props().menuClose).toBe(true);
  });
  it('should render an <HeaderNavBar> with offsetNavSlide by default', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'animation-push': false
    });
    expect(renderedComponent.find('HeaderNavBar').props()['animation-push']).toBe(false);
    expect(renderedComponent.find('OffsetNavSlide').length).toEqual(1);
  });
  it('should render an <HeaderNavBar> with a props animation-push and set OffsetNavPush', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'animation-push': true
    });
    expect(renderedComponent.find('HeaderNavBar').props()['animation-push']).toBe(true);
    expect(renderedComponent.find('OffsetNavPush').length).toEqual(1);
  });
  it('should render an <HeaderNavBar> with a props animation-push right', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'animation-push': true,
      'menu-right': true
    });
    expect(renderedComponent.find('HeaderNavBar').props()['animation-push']).toBe(true);
    expect(renderedComponent.find('HeaderNavBar').props()['menu-right']).toBe(true);
  });
  it('should render an <HeaderNavBar> with a click that changes the props active of Overlay and OffsetNav', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    renderedComponent.find('button').at(0).simulate('click');
    expect(renderedComponent.find('Overlay').props().active).toEqual(true);
    expect(renderedComponent.find('OffsetNav').props().active).toEqual(true);
  });
  it('should render an <HeaderNavBar> with an onClick function', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      onClick: jest.fn()
    });
    renderedComponent.find('button').at(0).simulate('click');
    expect(renderedComponent.find('HeaderNavBar').props().onClick).toHaveBeenCalled();
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});