/**
 * Testing our MenuCollapse component
 */


import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import MenuCollapse from '../MenuCollapse';

const children = (<h1>test</h1>);

// eslint-disable-next-line arrow-body-style
const renderComponent = (props = {}) => {
  return shallow(
    <MenuCollapse
      active={props.active}
      {...props}
    >
      {children}
    </MenuCollapse>
  );
};

// eslint-disable-next-line arrow-body-style
const renderComponentUsingTheme = (props = {}) => {
  return mount(
    <ThemeProvider theme={theme}>
      <MenuCollapse
        active={props.active}
        {...props}
      >
        {children}
      </MenuCollapse>
    </ThemeProvider>
  );
};


describe('<MenuCollapse />', () => {
  it('should have a length of 1 rendered component', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('div').length).toBe(1);
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
    expect(renderedComponent.find('MenuCollapse').length).toBe(1);
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have a class .collapse by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('div').hasClass('collapse')).toBe(true);
  });
  it('should have an attribute active', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      active: true,
    });
    expect(renderedComponent.find('MenuCollapse').props().active).toBe(true);
  });
  it('should have children', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
