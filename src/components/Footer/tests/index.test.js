/**
 * Testing our Footer component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import Footer from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Footer
    className={props.className}
  >
    {props.children}
  </Footer>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Footer
      className={props.className}
    >
      {props.children}
    </Footer>
  </ThemeProvider>
);


describe('<Footer />', () => {
  it('should render an <Footer> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Footer').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <footer> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('footer').length).toBe(1);
    expect(renderedComponent.find('Footer').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
