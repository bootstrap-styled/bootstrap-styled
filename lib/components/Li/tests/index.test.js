var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * Testing our Li component
 */

import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from '../../../config';

import Li from '../index';

var children = _jsx('h1', {}, void 0, ' test ');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return shallow(_jsx(Li, {
    disabled: props.disabled,
    separator: props.separator,
    active: props.active,
    'dropdown-item': props['dropdown-item'],
    'dropdown-header': props['dropdown-header'],
    'dropdown-footer': props['dropdown-footer'],
    className: props.className
  }, void 0, children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return mount(_jsx(ThemeProvider, {
    theme: theme
  }, void 0, _jsx(Li, {
    disabled: props.disabled,
    separator: props.separator,
    active: props.active,
    'dropdown-item': props['dropdown-item'],
    'dropdown-header': props['dropdown-header'],
    'dropdown-footer': props['dropdown-footer'],
    className: props.className
  }, void 0, children)));
};

describe('<Li />', function () {
  it('should render an <Li> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('Li').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Li> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('Li').length).toBe(1);
    expect(renderedComponent.find('li').length).toBe(1);
  });
  it('should have a class .disabled with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      disabled: true
    });
    expect(renderedComponent.find('li').hasClass('disabled')).toBe(true);
  });
  it('should have a class .dropdown-divider with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      separator: true
    });
    expect(renderedComponent.find('li').hasClass('dropdown-divider')).toBe(true);
  });
  it('should have a class .active with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      active: true
    });
    expect(renderedComponent.find('li').hasClass('active')).toBe(true);
  });
  it('should have a class .dropdown-item with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'dropdown-item': true
    });
    expect(renderedComponent.find('li').hasClass('dropdown-item')).toBe(true);
  });
  it('should have a class .dropdown-header with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'dropdown-header': true
    });
    expect(renderedComponent.find('li').hasClass('dropdown-header')).toBe(true);
  });
  it('should have a class .dropdown-footer with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      'dropdown-footer': true
    });
    expect(renderedComponent.find('li').hasClass('dropdown-footer')).toBe(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});