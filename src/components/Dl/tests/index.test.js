/**
 * Testing our Dl component
 */
import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { shallow, mount } from 'enzyme';
import React from 'react';

import Dl from '../index';
const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Dl
    className={props.className}
  >
    {props.children}
  </Dl>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Dl
      className={props.className}
    >
      {props.children}
    </Dl>
  </ThemeProvider>
);


describe('<Dl />', () => {
  it('should render an <Dl> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Dl').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <dl> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('dl').length).toBe(1);
    expect(renderedComponent.find('Dl').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
