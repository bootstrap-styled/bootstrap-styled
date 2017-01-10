/**
 * Testing our Container component
 */
import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { shallow, mount } from 'enzyme';
import React from 'react';

import Container from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Container
    className={props.className}
  >
    {props.children}
  </Container>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Container
      className={props.className}
    >
      {props.children}
    </Container>
  </ThemeProvider>
);


describe('<Container />', () => {
  it('should render an <Container> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Container').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <div> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('div').length).toBe(1);
    expect(renderedComponent.find('Container').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
