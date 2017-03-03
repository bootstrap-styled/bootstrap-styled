var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * Testing our Nav component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import HeaderNavBar from '../index';
import Button from '../../Button';

var children = _jsx('h1', {}, void 0, 'Test');
var navTopContent = _jsx('h1', {}, void 0, 'Test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return shallow(React.createElement(
    HeaderNavBar,
    props,
    props.children
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return mount(_jsx(ThemeProvider, {
    theme: theme
  }, void 0, React.createElement(
    HeaderNavBar,
    props,
    props.children
  )));
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
  it('should render a <HeaderNavBar> with a Button Component with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      button: {
        component: Button,
        className: 'btn-test'
      }
    });
    expect(renderedComponent.find('Button').length).toBe(1);
    expect(renderedComponent.find('button').hasClass('btn-test')).toEqual(true);
  });
  it.only('should render an <HeaderNavBar> with a click that changes the props active of Overlay and OffsetNav', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    renderedComponent.find('button').simulate('click');
    expect(renderedComponent.find('Overlay').props().active).toEqual(true);
    expect(renderedComponent.find('OffsetNav').props().active).toEqual(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});