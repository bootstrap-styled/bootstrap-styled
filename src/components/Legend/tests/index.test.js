/**
 * Testing our Legend component
 */
import { ThemeProvider } from 'styled-components';
import theme from 'config';

import { shallow, mount } from 'enzyme';
import React from 'react';

import Legend from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Legend
    className={props.className}
  >
    {props.children}
  </Legend>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Legend
      className={props.className}
    >
      {props.children}
    </Legend>
  </ThemeProvider>
);


describe('<Legend />', () => {
  it('should render an <Legend> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Legend').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <legend> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('legend').length).toBe(1);
    expect(renderedComponent.find('Legend').length).toBe(1);
  });
  it('should have class .legend by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('legend').hasClass('legend')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
