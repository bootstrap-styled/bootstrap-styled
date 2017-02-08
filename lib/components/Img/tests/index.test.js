var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Testing our Img component
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';

import Img from '../index';
import theme from 'theme';

var src = 'test.png';
var alt = 'test';
var width = '50px';
var height = '1337px';
var useMap = 'this is a string';

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return shallow(React.createElement(Img, _extends({
    src: src,
    alt: alt,
    width: width,
    height: height,
    useMap: useMap
  }, props)));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return mount(_jsx(ThemeProvider, {
    theme: theme
  }, void 0, React.createElement(Img, _extends({
    src: src,
    alt: alt,
    width: width,
    height: height,
    useMap: useMap
  }, props))));
};

describe('<Img>', function () {
  it('should render a <img> tag ', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('img')).toBeDefined();
  });
  it('should render a <img> tag  with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('img')).toBeDefined();
  });
  it('should have an src attribute', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('src', src)).toBeDefined();
  });
  it('should have an src attribute', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('src', src)).toBeDefined();
  });

  it('should have an alt attribute', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('alt', alt)).toBeDefined();
  });
  it('should have an src attribute', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('alt', alt)).toBeDefined();
  });
  it('should have an width attribute', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('width', width)).toBeDefined();
  });
  it('should have an width attribute', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('width', width)).toBeDefined();
  });
  it('should have an height attribute', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('height', height)).toBeDefined();
  });
  it('should have an height attribute', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('height', height)).toBeDefined();
  });
  it('should have an useMap attribute', function () {
    var renderedComponent = renderComponent();
    expect(renderedComponent.find('useMap', useMap)).toBeDefined();
  });
  it('should have an useMap attribute', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('useMap', useMap)).toBeDefined();
  });
});