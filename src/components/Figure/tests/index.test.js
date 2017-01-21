/**
 * Testing our Figure component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from '../../../config';

import Figure from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Figure
    className={props.className}
  >
    {props.children}
  </Figure>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Figure
      className={props.className}
    >
      {props.children}
    </Figure>
  </ThemeProvider>
);


describe('<Figure />', () => {
  it('should render an <Figure> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Figure').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <figure> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('figure').length).toBe(1);
    expect(renderedComponent.find('Figure').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
