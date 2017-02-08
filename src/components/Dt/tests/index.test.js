/**
 * Testing our Dt component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import Dt from '../index';
const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Dt
    className={props.className}
  >
    {props.children}
  </Dt>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Dt
      className={props.className}
    >
      {props.children}
    </Dt>
  </ThemeProvider>
);


describe('<Dt />', () => {
  it('should render an <Dt> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Dt').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <dt> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('dt').length).toBe(1);
    expect(renderedComponent.find('Dt').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
