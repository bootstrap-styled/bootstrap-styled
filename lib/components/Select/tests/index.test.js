var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * Testing our Select component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';

import Select from '../index';
import theme from '../../../config';

var children = _jsx('option', {}, void 0, 'test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return shallow(_jsx(Select, {
    autoFocus: props.autoFocus,
    disabled: props.disabled,
    form: props.form,
    multiple: props.multiple,
    name: props.name,
    required: props.required,
    size: props.size,
    className: props.className
  }, void 0, children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return mount(_jsx(ThemeProvider, {
    theme: theme
  }, void 0, _jsx(Select, {
    autoFocus: props.autoFocus,
    disabled: props.disabled,
    form: props.form,
    multiple: props.multiple,
    name: props.name,
    required: props.required,
    size: props.size,
    className: props.className
  }, void 0, children)));
};

describe('<Select />', function () {
  it('should render an <Select> tag without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.find('Select').length).toBe(1);
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Select> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('Select').length).toBe(1);
    expect(renderedComponent.find('select').length).toBe(1);
  });
  it('should have a class .select bu default with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.find('select').hasClass('select')).toBe(true);
  });
  it('should have an attribute autoFocus with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      autoFocus: true
    });
    expect(renderedComponent.find('select').props().autoFocus).toBe(true);
  });
  it('should have a class .disabled with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      disabled: true
    });
    expect(renderedComponent.find('select').props().disabled).toBe(true);
  });
  it('should have an attribute form with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      form: 'test-form'
    });
    expect(renderedComponent.find('select').props().form).toBe('test-form');
  });
  it('should have an attribute multiple with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      multiple: true
    });
    expect(renderedComponent.find('select').props().multiple).toBe(true);
  });
  it('should have an attribute name with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      name: 'test-name'
    });
    expect(renderedComponent.find('select').props().name).toBe('test-name');
  });
  it('should have an attribute required with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      required: true
    });
    expect(renderedComponent.find('select').props().required).toBe(true);
  });
  it('should have an attribute size with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children,
      size: 'test-size'
    });
    expect(renderedComponent.find('select').props().size).toBe('test-size');
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});