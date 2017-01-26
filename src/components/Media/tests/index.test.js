/**
 * Testing our Media component
 */

import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import Media from '../index';
import theme from '../../../config';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Media
    className={props.className}
  >
    {props.children}
  </Media>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Media
      className={props.className}
    >
      {props.children}
    </Media>
  </ThemeProvider>
);


describe('<Media />', () => {
  it('should render an <Media> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Media').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <mark> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('div').length).toBe(1);
    expect(renderedComponent.find('Media').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
