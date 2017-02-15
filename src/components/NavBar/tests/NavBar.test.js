/**
 * Testing our NavBar component
 */
import { ThemeProvider } from 'styled-components';

import { mount } from 'enzyme';

import React from 'react';
import theme from 'theme';

import NavBar from '../NavBar';

const children = (<h1>test</h1>);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <NavBar {...props}>
      {children}
    </NavBar>
  </ThemeProvider>
);

describe('<NavBar />', () => {
  it('should render an <NavBar> tag without a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('NavBar').length).toBe(1);
  });
  it('should render a <NavBar> tag with a toggler', () => {
    const renderedComponent = renderComponentUsingTheme({
      toggler: {
        right: true,
      },
    });
    expect(renderedComponent.find('NavBarToggler').props().right).toBe(true);
  });
  it('should render a <NavBar> tag with a toggler', () => {
    const renderedComponent = renderComponentUsingTheme({
      toggler: {
        left: true,
      },
    });
    expect(renderedComponent.find('NavBarToggler').props().left).toBe(true);
  });
  it('should render an <NavBar> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('NavBar').length).toBe(1);
    expect(renderedComponent.find('nav').length).toBe(1);
  });
  it('should have a class .navbar by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('nav').hasClass('navbar')).toBe(true);
  });
});
