var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * Testing our link component
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import theme from 'theme';

import A from '../index';

var children = _jsx('h1', {}, void 0, 'Test');

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return shallow(_jsx(A, {
    href: props.href,
    target: props.target,
    type: props.type,
    active: props.active,
    className: props.className,
    disabled: props.disabled,
    'dropdown-item': props['dropdown-item']
  }, void 0, props.children));
};

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return mount(_jsx(ThemeProvider, {
    theme: theme
  }, void 0, _jsx(A, {
    href: props.href,
    target: props.target,
    type: props.type,
    active: props.active,
    className: props.className,
    disabled: props.disabled,
    'dropdown-item': props['dropdown-item']
  }, void 0, props.children)));
};

describe('<A />', function () {
  it('should render an <A> tag without a theme', function () {
    var active = true;
    var renderedComponent = renderComponent({
      href: 'http://mxstbr.com/',
      children: children,
      type: 'text/html',
      target: '_blank',
      active: active
    });
    expect(renderedComponent.find('A').length).toBe(1);
  });
  it('should have an href attribute without a theme', function () {
    var renderedComponent = renderComponent({
      href: 'http://mxstbr.com/',
      children: children
    });
    expect(renderedComponent.props().href).toEqual('http://mxstbr.com/');
  });
  it('should adopt a target attribute without a theme', function () {
    var renderedComponent = renderComponent({
      target: '_blank',
      href: 'http://mxstbr.com/',
      children: children
    });
    expect(renderedComponent.props().target).toEqual('_blank');
  });
  it('should adopt a type attribute without a theme', function () {
    var renderedComponent = renderComponent({
      type: 'text/html',
      href: 'http://mxstbr.com/',
      children: children
    });
    expect(renderedComponent.props().type).toEqual('text/html');
  });
  it('should have children without a theme', function () {
    var renderedComponent = renderComponent({
      target: '_blank',
      href: 'http://mxstbr.com/',
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <a> tag with a theme', function () {
    var active = true;
    var renderedComponent = renderComponentUsingTheme({
      target: '_blank',
      href: 'http://mxstbr.com/',
      children: children,
      active: active
    });
    expect(renderedComponent.find('a').length).toBe(1);
    expect(renderedComponent.find('A').length).toBe(1);
  });
  it('should render a href attribute of <A> with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      href: 'http://mxstbr.com/',
      children: children,
      type: 'text/html',
      target: '_blank'
    });
    expect(renderedComponent.find('a').props().href).toEqual('http://mxstbr.com/');
  });
  it('should render an type attribute of <A> with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      href: 'http://mxstbr.com/',
      children: children,
      type: 'text/html',
      target: '_blank'
    });
    expect(renderedComponent.find('a').props().type).toEqual('text/html');
  });
  it('should render a target attribute of <A> with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      href: 'http://mxstbr.com/',
      children: children,
      type: 'text/html',
      target: '_blank'
    });
    expect(renderedComponent.find('a').props().target).toEqual('_blank');
  });

  it('should render an <A> tag without a theme and props active', function () {
    var active = true;
    var renderedComponent = renderComponentUsingTheme({
      href: 'http://mxstbr.com/',
      children: children,
      active: active
    });
    expect(renderedComponent.find('a').hasClass('active')).toEqual(true);
  });
  it('should render an <A> tag without a theme and props disabled', function () {
    var disabled = true;
    var renderedComponent = renderComponentUsingTheme({
      href: 'http://mxstbr.com/',
      children: children,
      disabled: disabled
    });
    expect(renderedComponent.find('a').hasClass('disabled')).toEqual(true);
  });
  it('should render an <A> tag without a theme and props dropdown-item', function () {
    var renderedComponent = renderComponentUsingTheme({
      href: 'http://mxstbr.com/',
      children: children,
      'dropdown-item': true
    });
    expect(renderedComponent.find('a').hasClass('dropdown-item')).toEqual(true);
  });
  it('should have children with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      target: '_blank',
      href: 'http://mxstbr.com/',
      children: children
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});