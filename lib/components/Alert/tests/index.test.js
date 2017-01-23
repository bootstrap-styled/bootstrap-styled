var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * Testing our Alert component
 */
import { ThemeProvider } from 'styled-components';

import { mount } from 'enzyme';
import React from 'react';
import theme from '../../../config';

import Alert from '../index';

var children = _jsx('h1', {}, void 0, 'Test');

var renderComponent = function renderComponent(props) {
  return mount(_jsx(Alert, {
    onDismiss: props.onDismiss,
    className: props.className
  }, void 0, children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme(props) {
  return mount(_jsx(ThemeProvider, {
    theme: theme
  }, void 0, _jsx(Alert, {
    onDismiss: props.onDismiss,
    className: props.className
  }, void 0, children)));
};

describe('<Alert />', function () {
  it('should render an <Alert> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('Alert').length).toBe(1);
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have a className .alert by default and without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('div').hasClass('alert')).toBe(true);
  });
  // it.only('should have a onDismiss attribute without a theme', () => {
  //   const renderedComponent = renderComponent({
  //     children,
  //     store,
  //     onDismiss: this.hideError,
  //   });
  //   console.log(renderedComponent.debug());
  //   expect(renderedComponent.find('div').hasClass('alert-dismissible')).toBe(true);
  // });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Alert> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('Alert').length).toBe(1);
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have a className .alert by default and with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('div').hasClass('alert')).toBe(true);
  });
  // it.only('should have a onDismiss attribute without a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     children,
  //     store,
  //     onDismiss: this.hideError,
  //   });
  //   console.log(renderedComponent.debug());
  //   expect(renderedComponent.find('div').hasClass('alert-dismissible')).toBe(true);
  // });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});