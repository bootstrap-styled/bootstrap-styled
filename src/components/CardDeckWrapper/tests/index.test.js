/**
 * Testing our CardDeckWrapper component
 */
import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { shallow, mount } from 'enzyme';
import React from 'react';


import CardDeckWrapper from '../index';
const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <CardDeckWrapper
    className={props.className}
  >
    {props.children}
  </CardDeckWrapper>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <CardDeckWrapper
      className={props.className}
    >
      {props.children}
    </CardDeckWrapper>
  </ThemeProvider>
);


describe('<CardDeckWrapper />', () => {
  it('should render an <CardDeckWrapper> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('CardDeckWrapper').length).toBe(1);
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
    expect(renderedComponent.find('CardDeckWrapper').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
