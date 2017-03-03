/**
 * Testing our Nav component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import OffsetNavPush from '../OffsetNavPush';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <OffsetNavPush {...props}>
    {props.children}
  </OffsetNavPush>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <OffsetNavPush {...props}>
      {props.children}
    </OffsetNavPush>
  </ThemeProvider>
);


describe('<OffsetNavPush />', () => {
  it('should render an <OffsetNavPush> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('OffsetNavPush').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <OffsetNavPush> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('OffsetNavPush').length).toBe(1);
  });
  it('should render an <OffsetNav> with a props menu-right with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      'menu-right': true,
    });
    expect(renderedComponent.find('OffsetNavPush').props()['menu-right']).toEqual(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
