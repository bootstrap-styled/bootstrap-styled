/**
 * Testing our Nav component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from '../../../theme';

import OffsetNav from '../OffsetNav';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <OffsetNav {...props}>
    {props.children}
  </OffsetNav>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <OffsetNav {...props}>
      {props.children}
    </OffsetNav>
  </ThemeProvider>
);


describe('<OffsetNav />', () => {
  it('should render an <OffsetNav> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('OffsetNav').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <OffsetNav> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('OffsetNav').length).toBe(1);
  });
  it('should render an <OffsetNav> with a props active with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      active: true,
    });
    expect(renderedComponent.find('OffsetNav').props().active).toEqual(true);
  });
  it('should render an <OffsetNav> with a props menu-right with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      'menu-right': true,
    });
    expect(renderedComponent.find('OffsetNav').props()['menu-right']).toEqual(true);
  });
  it('should render an <OffsetNav> with a props offset-color with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      offsetColor: 'primary',
    });
    expect(renderedComponent.find('div').hasClass('bg-primary')).toEqual(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
