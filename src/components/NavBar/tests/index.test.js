/**
 * Testing our NavBar component
 */
import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { shallow, mount } from 'enzyme';

import React from 'react';

import NavBar from '../index';

const children = (<h1>test</h1>);

const renderComponent = (props = {}) => shallow(
  <NavBar {...props}>
    {children}
  </NavBar>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <NavBar {...props}>
      {children}
    </NavBar>
  </ThemeProvider>
);

describe('<NavBar />', () => {
  it('should render an <NavBar> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('NavBar').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <NavBar> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('NavBar').length).toBe(1);
    expect(renderedComponent.find('nav').length).toBe(1);
  });
  it('should have a class .navbar by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('nav').hasClass('navbar')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
