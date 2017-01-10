/**
 * Testing our Dd component
 */
import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { shallow, mount } from 'enzyme';
import React from 'react';

import Dd from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Dd
    className={props.className}
  >
    {props.children}
  </Dd>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Dd
      className={props.className}
    >
      {props.children}
    </Dd>
  </ThemeProvider>
);


describe('<Dd />', () => {
  it('should render an <Dd> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Dd').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <dd> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('dd').length).toBe(1);
    expect(renderedComponent.find('Dd').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
