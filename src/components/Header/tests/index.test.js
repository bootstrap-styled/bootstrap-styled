/**
 * Testing our Header component
 */
import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { shallow, mount } from 'enzyme';
import React from 'react';

import Header from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Header
    className={props.className}
  >
    {props.children}
  </Header>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Header
      className={props.className}
    >
      {props.children}
    </Header>
  </ThemeProvider>
);


describe('<Header />', () => {
  it('should render an <Header> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('header').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <header> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('header').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
