var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * Testing our Output component
 */
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from '../../../config';

import Output from '../index';

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return shallow(_jsx(Output, {
    className: props.className,
    htmlFor: props.htmlFor,
    form: props.form,
    name: props.name
  }));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return mount(_jsx(ThemeProvider, {
    theme: theme
  }, void 0, _jsx(Output, {
    className: props.className,
    htmlFor: props.htmlFor,
    form: props.form,
    name: props.name
  })));
};

describe('<Output />', function () {
  it('should render an <Output> tag without a theme', function () {
    var renderedComponent = renderComponent({});
    expect(renderedComponent.find('Output').length).toBe(1);
  });
  it('should render an <Output> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({});
    expect(renderedComponent.find('output').length).toBe(1);
    expect(renderedComponent.find('Output').length).toBe(1);
  });
  it('should have an attribute htmlFor with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      htmlFor: 'a b'
    });
    expect(renderedComponent.find('output').props().htmlFor).toBe('a b');
  });
  it('should have an attribute form with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      form: 'form-test'
    });
    expect(renderedComponent.find('output').props().form).toBe('form-test');
  });
  it('should have an attribute name with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      name: 'name-test'
    });
    expect(renderedComponent.find('output').props().name).toBe('name-test');
  });
});