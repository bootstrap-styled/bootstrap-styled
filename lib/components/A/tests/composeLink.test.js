var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * Testing our composeList HoC component constructor
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import theme from '../../../config';
import A, { composeLink } from '../index';

var Link = composeLink(A);

var renderComponent = function renderComponent(props) {
  return shallow(React.createElement(
    Link,
    props,
    'test'
  ));
};

var renderComponentUsingTheme = function renderComponentUsingTheme(props) {
  return mount(_jsx(ThemeProvider, {
    theme: theme
  }, void 0, React.createElement(
    Link,
    props,
    'test'
  )));
};

describe('composeLink', function () {
  it('should render a Link', function () {
    var renderedComponent = renderComponent({
      href: 'http://test.com',
      to: 'http://test.com'
    });
    expect(renderedComponent.find('Link').length).toBe(1);
  });
  it('should render a Link using ThemeProvider', function () {
    var renderedComponent = renderComponentUsingTheme({
      href: 'http://test.com',
      to: 'http://test.com'
    });
    expect(renderedComponent.find('Link').length).toBe(1);
  });
});