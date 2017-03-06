'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Testing our HeaderNavBar component
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _styledComponents = require('styled-components');

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menu = _jsx('ul', {}, void 0, _jsx('li', {
  className: 'nav-item active'
}, void 0, _jsx('a', {
  className: 'nav-item nav-link'
}, void 0, 'a')), _jsx('li', {
  className: 'nav-item'
}, void 0, _jsx('a', {
  className: 'nav-item nav-link'
}, void 0, 'b')), _jsx('li', {
  className: 'nav-item'
}, void 0, _jsx('a', {
  className: 'nav-item nav-link'
}, void 0, 'c')));

var ButtonTest = _jsx('button', {}, void 0, _jsx('span', {}, void 0, '&quothello&quot'));

var clickTest = jest.fn();
clickTest.mockReturnValue('test-click-additional');

var renderComponent = function renderComponent(props) {
  return (0, _enzyme.shallow)(_jsx(_index2.default, {
    menu: props.menu,
    button: props.button,
    container: props.container,
    composeCollapsed: props.composeCollapsed,
    composeSlide: props.composeSlide,
    className: props.className,
    'container-fluid': props['container-fluid'],
    'navbar-dark': props['navbar-dark'],
    'navbar-light': props['navbar-light'],
    'navbar-static-top': props['navbar-static-top'],
    'navbar-fixed-top': props['navbar-fixed-top']
  }));
};

var renderComponentUsingTheme = function renderComponentUsingTheme(props) {
  return (0, _enzyme.mount)(_jsx(_styledComponents.ThemeProvider, {
    theme: _theme2.default
  }, void 0, _jsx(_index2.default, {
    menu: props.menu,
    button: props.button,
    container: props.container,
    composeCollapsed: props.composeCollapsed,
    composeSlide: props.composeSlide,
    className: props.className,
    'container-fluid': props['container-fluid'],
    'navbar-inverse': props['navbar-inverse'],
    'navbar-light': props['navbar-light'],
    'navbar-static-top': props['navbar-static-top'],
    'navbar-fixed-top': props['navbar-fixed-top'],
    onClick: props.onClick
  })));
};
describe('<HeaderNavBar />', function () {
  it('should render an <HeaderNavBar> tag without a theme', function () {
    var renderedComponent = renderComponent({
      menu: menu
    });
    expect(renderedComponent.find('HeaderNavBar').length).toBe(1);
  });
  it('should render a <div> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      menu: menu
    });
    expect(renderedComponent.find('div').length).toBe(2);
    expect(renderedComponent.find('HeaderNavBar').length).toBe(1);
  });
  it('should have the className .navbar and bd-navbar by default', function () {
    var renderedComponent = renderComponentUsingTheme({
      menu: menu
    });
    expect(renderedComponent.find('header').hasClass('navbar')).toBe(true);
    expect(renderedComponent.find('header').hasClass('bd-navbar')).toBe(true);
  });
  it('should have an attribute container', function () {
    var renderedComponent = renderComponentUsingTheme({
      menu: menu,
      container: true
    });
    expect(renderedComponent.find('HeaderNavBar').props().container).toEqual(true);
  });
  it('should have an attribute container-fluid', function () {
    var renderedComponent = renderComponentUsingTheme({
      menu: menu,
      'container-fluid': true
    });
    expect(renderedComponent.find('HeaderNavBar').props()['container-fluid']).toEqual(true);
  });
  it('should have an attribute navbar-inverse and applies class .bg-inverse by default', function () {
    var renderedComponent = renderComponentUsingTheme({
      menu: menu,
      'navbar-inverse': true
    });
    expect(renderedComponent.find('HeaderNavBar').props()['navbar-inverse']).toEqual(true);
    expect(renderedComponent.find('header').hasClass('bg-inverse')).toBe(true);
  });
  it('should have an attribute navbar-light and applies class .bg-faded by default', function () {
    var renderedComponent = renderComponentUsingTheme({
      menu: menu,
      'navbar-light': true
    });
    expect(renderedComponent.find('HeaderNavBar').props()['navbar-light']).toEqual(true);
    expect(renderedComponent.find('header').hasClass('bg-faded')).toBe(true);
  });
  it('should have an attribute navbar-static-top', function () {
    var renderedComponent = renderComponentUsingTheme({
      menu: menu,
      'navbar-static-top': true
    });
    expect(renderedComponent.find('HeaderNavBar').props()['navbar-static-top']).toEqual(true);
  });
  it('should have an attribute navbar-fixed-top', function () {
    var renderedComponent = renderComponentUsingTheme({
      menu: menu,
      'navbar-fixed-top': true
    });
    expect(renderedComponent.find('HeaderNavBar').props()['navbar-fixed-top']).toEqual(true);
  });

  it('should add to the  onCLick function if props onClick is set', function () {
    var renderedComponent = renderComponentUsingTheme({
      menu: menu,
      button: ButtonTest
    });
    expect(renderedComponent.find('HeaderNavBar').props().button).toEqual(ButtonTest);
  });
});