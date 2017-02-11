var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * Testing our Fieldset component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import Fieldset from '../index';

var children = _jsx('h1', {}, void 0, 'Test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return shallow(_jsx(Fieldset, {
    disabled: props.disabled,
    form: props.form,
    name: props.name,
    className: props.className
  }, void 0, props.children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return mount(_jsx(ThemeProvider, {
    theme: theme
  }, void 0, _jsx(Fieldset, {
    disabled: props.disabled,
    form: props.form,
    name: props.name,
    className: props.className
  }, void 0, props.children)));
};

describe('<Fieldset />', function () {
  it('should render an <Fieldset> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('fieldset').length).toBe(1);
  });
  it('should have an attribute disabled without a theme', function () {
    var renderedComponent = renderComponent({
      children: children,
      disabled: true
    });
    expect(renderedComponent.props().disabled).toEqual(true);
  });
  it('should have an attribute disabled without a theme', function () {
    var renderedComponent = renderComponent({
      children: children,
      form: 'form_1'
    });
    expect(renderedComponent.props().form).toEqual('form_1');
  });
  it('should have an attribute name without a theme', function () {
    var renderedComponent = renderComponent({
      children: children,
      name: 'name_1'
    });
    expect(renderedComponent.props().name).toEqual('name_1');
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <fieldset> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('fieldset').length).toBe(1);
  });
  it('should have an attribute disabled without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      disabled: true
    });
    expect(renderedComponent.find('fieldset').props().disabled).toEqual(true);
  });
  it('should have an attribute disabled without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      form: 'form_1'
    });
    expect(renderedComponent.find('fieldset').props().form).toEqual('form_1');
  });
  it('should have an attribute name without a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      name: 'name_1'
    });
    expect(renderedComponent.find('fieldset').props().name).toEqual('name_1');
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});