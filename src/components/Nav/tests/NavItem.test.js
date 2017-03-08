/**
 * Testing our NavItem component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import NavItem from '../NavItem';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <NavItem
    className={props.className}
  >
    {props.children}
  </NavItem>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <NavItem
      className={props.className}
    >
      {props.children}
    </NavItem>
  </ThemeProvider>
);


describe('<NavItem />', () => {
  it('should render an <NavItem> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('li').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <NavItem> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('NavItem').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
