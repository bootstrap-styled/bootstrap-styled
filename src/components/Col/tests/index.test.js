/**
 * Testing our Col component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';

import Col, { getColumnSizeClass } from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Col
    className={props.className}
  >
    {props.children}
  </Col>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Col
      className={props.className}
    >
      {props.children}
    </Col>
  </ThemeProvider>
);


describe('<Col />', () => {
  it('should render an <Col> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Col').length).toBe(1);
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
    expect(renderedComponent.find('Col').length).toBe(1);
  });
  it('should have getColumnSizeClass auto with a theme', () => {
    expect(getColumnSizeClass('', 'lg', 'auto')).toEqual('col-lg-auto');
  });
  it('should have getColumnSizeClass 8 with a theme', () => {
    expect(getColumnSizeClass('', 'lg', '8')).toEqual('col-lg-8');
  });
  it('should have getColumnSizeClass xs-8 with a theme', () => {
    expect(getColumnSizeClass('xs', 'lg', '8')).toEqual('col-8');
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
