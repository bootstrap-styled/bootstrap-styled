/**
 * Testing our Blockquote component
 */
import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { shallow, mount } from 'enzyme';
import React from 'react';

import Blockquote from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Blockquote
    className={props.className}
  >
    {props.children}
  </Blockquote>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Blockquote
      className={props.className}
      btn-toolbar={props['btn-toolbar']}
    >
      {props.children}
    </Blockquote>
  </ThemeProvider>
);


describe('<Blockquote />', () => {
  it('should render an <Blockquote> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Blockquote').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <blockquote> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('blockquote').length).toBe(1);
    expect(renderedComponent.find('Blockquote').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
