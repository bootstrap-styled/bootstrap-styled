/**
 * Testing our H3 component
 */

import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import H3 from '../index';
import theme from '../../../config';

const children = <p>Test</p>;

const renderComponent = (props = {}) => shallow(
  <H3
    className={props.className}
  >
    {props.children}
  </H3>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <H3
      className={props.className}
    >
      {props.children}
    </H3>
  </ThemeProvider>
);


describe('<H3 />', () => {
  it('should render an <H3> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('H3').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <h3> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('h3').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
