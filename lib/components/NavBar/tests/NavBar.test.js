var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * Testing our NavBar component
 */
import { ThemeProvider } from 'styled-components';

import { mount } from 'enzyme';

import React from 'react';
import theme from 'theme';

import NavBar from '../NavBar';

var children = _jsx('h1', {}, void 0, 'test');

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return mount(_jsx(ThemeProvider, {
    theme: theme
  }, void 0, React.createElement(
    NavBar,
    props,
    children
  )));
};

describe('<NavBar />', function () {
  it('should render an <NavBar> tag without a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('NavBar').length).toBe(1);
  });
  it('should render a <NavBar> tag with a toggler', function () {
    var renderedComponent = renderComponentUsingTheme({
      toggler: {
        right: true
      }
    });
    expect(renderedComponent.find('NavBarToggler').props().right).toBe(true);
  });
  it('should render a <NavBar> tag with a toggler', function () {
    var renderedComponent = renderComponentUsingTheme({
      toggler: {
        left: true
      }
    });
    expect(renderedComponent.find('NavBarToggler').props().left).toBe(true);
  });
  it('should render an <NavBar> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('NavBar').length).toBe(1);
    expect(renderedComponent.find('nav').length).toBe(1);
  });
  it('should have a class .navbar by default with a theme', function () {
    var renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('nav').hasClass('navbar')).toBe(true);
  });
});