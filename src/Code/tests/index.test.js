/**
 * Testing our Code component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from '../../theme';

import Code from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Code {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Code {...props} />
  </ThemeProvider>
);


describe('<Code />', () => {
  it('should render an <Code> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('CodeUnstyled').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <code> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('Code').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
