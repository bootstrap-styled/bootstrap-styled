/**
 * Testing our Pagination component
 */

import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';
import Pagination from '../index';
const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Pagination
    className={props.className}
  >
    {props.children}
  </Pagination>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Pagination
      className={props.className}
    >
      {props.children}
    </Pagination>
  </ThemeProvider>
);


describe('<Pagination />', () => {
  it('should render an <Pagination> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Pagination').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <pagination> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('pagination').length).toBe(1);
    expect(renderedComponent.find('Pagination').length).toBe(1);
  });
  it('should have class .pagination by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('pagination').hasClass('pagination')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
