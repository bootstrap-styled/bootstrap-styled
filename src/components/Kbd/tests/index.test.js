/**
 * Testing our Kbd component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import Kbd from '../index';
const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Kbd
    className={props.className}
  >
    {props.children}
  </Kbd>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Kbd
      className={props.className}
    >
      {props.children}
    </Kbd>
  </ThemeProvider>
);


describe('<Kbd />', () => {
  it('should render an <Kbd> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Kbd').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <kbd> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('kbd').length).toBe(1);
    expect(renderedComponent.find('Kbd').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
