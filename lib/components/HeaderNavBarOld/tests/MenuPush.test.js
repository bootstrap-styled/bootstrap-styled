var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/*
 * Kopax Ltd Copyright (c) 2016.
 */

/**
 * Testing our MenuPush component
 */

import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import MenuPush from '../MenuPush';

var children = _jsx('h1', {}, void 0, 'test');

// eslint-disable-next-line arrow-body-style
var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return shallow(React.createElement(
    MenuPush,
    _extends({
      active: props.active,
      'menu-right': props['menu-right'],
      'menu-left': props['menu-left']
    }, props),
    children
  ));
};

// eslint-disable-next-line arrow-body-style
var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return mount(_jsx(ThemeProvider, {
    theme: theme
  }, void 0, React.createElement(
    MenuPush,
    _extends({
      active: props.active,
      'menu-right': props['menu-right'],
      'menu-left': props['menu-left']
    }, props),
    children
  )));
};

describe('<MenuPush />', function () {
  it('should have a length of 1 rendered component', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('MenuPush').length).toBe(1);
  });
  it('should have children', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have a length of 1 rendered component using a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('MenuPush').length).toBe(1);
  });
  it('should have an attribute active', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      active: true
    });
    expect(renderedComponent.find('MenuPush').props().active).toBe(true);
  });
  it('should have an attribute menu-left', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'menu-left': true
    });
    expect(renderedComponent.find('MenuPush').props()['menu-left']).toBe(true);
  });
  it('should have an attribute menu-right', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'menu-right': true
    });
    expect(renderedComponent.find('MenuPush').props()['menu-right']).toBe(true);
  });
  it('should have children', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});