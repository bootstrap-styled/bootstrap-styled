/**
 * Testing our Small component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from '../../../config';

import Small from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Small
    className={props.className}
  >
    {props.children}
  </Small>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Small
      className={props.className}
    >
      {props.children}
    </Small>
  </ThemeProvider>
);


describe('<Small />', () => {
  it('should render an <Small> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Small').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <small> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('small').length).toBe(1);
    expect(renderedComponent.find('Small').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
