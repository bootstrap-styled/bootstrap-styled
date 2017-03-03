/**
 * Testing our Nav component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import OffsetNavSlide from '../OffsetNavSlide';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <OffsetNavSlide {...props}>
    {props.children}
  </OffsetNavSlide>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <OffsetNavSlide {...props}>
      {props.children}
    </OffsetNavSlide>
  </ThemeProvider>
);


describe('<OffsetNavSlide />', () => {
  it('should render an <OffsetNavSlide> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('OffsetNavSlide').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <OffsetNavSlide> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('OffsetNavSlide').length).toBe(1);
  });
  it('should render an <OffsetNavSlide> with a props active with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      active: true,
    });
    expect(renderedComponent.find('OffsetNavSlide').props().active).toEqual(true);
  });
  it('should render an <OffsetNav> with a props menu-right with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      'menu-right': true,
    });
    expect(renderedComponent.find('OffsetNavSlide').props()['menu-right']).toEqual(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
