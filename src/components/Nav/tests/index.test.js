/**
 * Testing our Nav component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import Nav from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Nav
    className={props.className}
  >
    {props.children}
  </Nav>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Nav
      className={props.className}
    >
      {props.children}
    </Nav>
  </ThemeProvider>
);


describe('<Nav />', () => {
  it('should render an <Nav> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Nav').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <nav> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('nav').length).toBe(1);
    expect(renderedComponent.find('Nav').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
