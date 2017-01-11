/**
 * Testing our MenuCollapse component
 */

import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { shallow, mount } from 'enzyme';
import React from 'react';

import MenuAccount from '../index';

const children = (<h1>test</h1>);

// eslint-disable-next-line arrow-body-style
const renderComponent = (props = {}) => {
  return shallow(
    <MenuAccount
      active={props.active}
      {...props}
    >
      {children}
    </MenuAccount>
  );
};

// eslint-disable-next-line arrow-body-style
const renderComponentUsingTheme = (props = {}) => {
  return mount(
    <ThemeProvider theme={theme}>
      <MenuAccount
        active={props.active}
        {...props}
      >
        {children}
      </MenuAccount>
    </ThemeProvider>
  );
};


describe('<MenuAccount />', () => {
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
    expect(renderedComponent.find('MenuAccount').length).toBe(1);
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
