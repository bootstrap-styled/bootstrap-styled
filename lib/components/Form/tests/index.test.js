var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * Testing our ContainerFluid component
 */
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import Form from '../index';

var children = _jsx('h1', {}, void 0, 'Test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return shallow(_jsx(Form, {
    action: props.action,
    onSubmit: props.onSubmit
  }, void 0, children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return mount(_jsx(ThemeProvider, {
    theme: theme
  }, void 0, _jsx(Form, {
    action: props.action,
    onSubmit: props.onSubmit
  }, void 0, children)));
};

var submitTest = jest.fn();
submitTest.mockReturnValue('test-submit');

describe('<Form />', function () {
  it('should render a <Form> tag ', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('Form').length).toBe(1);
  });
  it('should have an action props', function () {
    var renderedComponent = renderComponent({
      children: children,
      action: 'test-action'
    });
    expect(renderedComponent.find('Form').props().action).toEqual('test-action');
  });
  it('should have an onSubmit props', function () {
    var renderedComponent = renderComponent({
      children: children,
      onSubmit: submitTest
    });
    expect(renderedComponent.find('Form').props().onSubmit).toBeDefined();
  });
  it('should have children', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <ContainerFluid> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('form').length).toBe(1);
    expect(renderedComponent.find('Form').length).toBe(1);
  });
  it('should have an action props using a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      action: 'test-action'
    });
    expect(renderedComponent.find('form').props().action).toEqual('test-action');
  });
  it('should have an onSubmit props using a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      onSubmit: submitTest
    });
    expect(renderedComponent.find('Form').props().onSubmit).toBeDefined();
  });
  it('should have children using a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});