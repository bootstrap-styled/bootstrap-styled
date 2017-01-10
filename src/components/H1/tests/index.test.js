/**
 * Testing our H1 component
 */
import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { shallow, mount } from 'enzyme';
import React from 'react';

import H1 from '../index';

const children = <p>Test</p>;

const renderComponent = (props = {}) => shallow(
  <H1
    className={props.className}
  >
    {props.children}
  </H1>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <H1
      className={props.className}
    >
      {props.children}
    </H1>
  </ThemeProvider>
);


describe('<H1 />', () => {
  it('should render an <H1> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('H1').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <h1> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('h1').length).toBe(1);
    expect(renderedComponent.find('H1').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
