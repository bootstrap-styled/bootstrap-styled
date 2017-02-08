var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

/**
 * Testing our HeaderNavBarSlide HoC component
 */

import { ThemeProvider } from 'styled-components';

import { mount } from 'enzyme';
import React from 'react';
import theme from '../../../config';

import { HeaderNavBarSlide } from '../index';

var menuAccount = _jsx('ul', {}, void 0, _jsx('li', {
  className: 'nav-item active'
}, void 0, _jsx('a', {
  className: 'nav-item nav-link'
}, void 0, 'a')), _jsx('li', {
  className: 'nav-item'
}, void 0, _jsx('a', {
  className: 'nav-item nav-link'
}, void 0, 'b')), _jsx('li', {
  className: 'nav-item'
}, void 0, _jsx('a', {
  className: 'nav-item nav-link'
}, void 0, 'c')));

var menu = _jsx('ul', {}, void 0, _jsx('li', {
  className: 'nav-item active'
}, void 0, _jsx('a', {
  className: 'nav-item nav-link'
}, void 0, 'a')), _jsx('li', {
  className: 'nav-item'
}, void 0, _jsx('a', {
  className: 'nav-item nav-link'
}, void 0, 'b')), _jsx('li', {
  className: 'nav-item'
}, void 0, _jsx('a', {
  className: 'nav-item nav-link'
}, void 0, 'c')));
var menuTop = {
  menuAccount: menuAccount
};
var menuOffset = {
  menu: menu,
  isHidden: true
};

var clickTest = jest.fn();
clickTest.mockReturnValue('test-click-additional');

var renderComponentUsingTheme = function renderComponentUsingTheme(props) {
  return mount(_jsx(ThemeProvider, {
    theme: theme
  }, void 0, _jsx(HeaderNavBarSlide, {
    className: props.className,
    menuTop: menuTop,
    menuOffset: menuOffset,
    onClick: props.onClick
  })));
};

describe('<HeaderNavBarSlide />', function () {
  it('should simulate a click', function () {
    var renderedComponent = renderComponentUsingTheme({
      menuAccount: menuAccount,
      menu: menu
    });
    expect(renderedComponent.find('MenuSlide').props().active).toBe(false);
    renderedComponent.find('button').simulate('click');
    expect(renderedComponent.find('MenuSlide').props().active).toBe(true);
  });
  it('should add to the  onCLick function if props onClick is set', function () {
    var renderedComponent = renderComponentUsingTheme({
      menuAccount: menuAccount,
      menu: menu,
      onClick: clickTest
    });
    expect(renderedComponent.find('Slide').props().onClick).toBeDefined();
    renderedComponent.find('button').simulate('click');
    expect(clickTest()).toBe('test-click-additional');
  });
});