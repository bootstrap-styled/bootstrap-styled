/*
 * Kopax Ltd Copyright (c) 2016.
 */

/**
 * Testing our MenuPush component
 */


import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { shallow, mount } from 'enzyme';
import React from 'react';

import MenuPush from '../MenuPush';

const children = (<h1>test</h1>);

// eslint-disable-next-line arrow-body-style
const renderComponent = (props = {}) => {
  return shallow(
    <MenuPush
      active={props.active}
      menu-right={props['menu-right']}
      menu-left={props['menu-left']}
      {...props}
    >
      {children}
    </MenuPush>
  );
};

// eslint-disable-next-line arrow-body-style
const renderComponentUsingTheme = (props = {}) => {
  return mount(
    <ThemeProvider theme={theme}>
      <MenuPush
        active={props.active}
        menu-right={props['menu-right']}
        menu-left={props['menu-left']}
        {...props}
      >
        {children}
      </MenuPush>
    </ThemeProvider>
  );
};


describe('<MenuPush />', () => {
  it('should have a length of 1 rendered component', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('MenuPush').length).toBe(1);
  });
  it('should have children', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have a length of 1 rendered component using a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('MenuPush').length).toBe(1);
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have a class .navbar-toggleable-xs by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('div').hasClass('navbar-toggleable-xs')).toBe(true);
  });
  it('should have an attribute active', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      active: true,
    });
    expect(renderedComponent.find('MenuPush').props().active).toBe(true);
  });
  it('should have an attribute menu-left', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      'menu-left': true,
    });
    expect(renderedComponent.find('MenuPush').props()['menu-left']).toBe(true);
  });
  it('should have an attribute menu-right', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      'menu-right': true,
    });
    expect(renderedComponent.find('MenuPush').props()['menu-right']).toBe(true);
  });
  it('should have children', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
