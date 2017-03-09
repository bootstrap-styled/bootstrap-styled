/**
 * Testing our Table component
 */

import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from 'theme';
import Table from '../index';

const children = (
  <tbody>
    <tr>
      <th>Th1</th>
      <th>Th2</th>
      <th>Th3</th>
    </tr>
  </tbody>
);

const renderComponent = (props = {}) => shallow(
  <Table
    striped={props.striped}
    bordered={props.bordered}
    hover={props.hover}
    responsive={props.responsive}
    className={props.className}
  >
    {children}
  </Table>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Table
      striped={props.striped}
      bordered={props.bordered}
      hover={props.hover}
      responsive={props.responsive}
      className={props.className}
    >
      {children}
    </Table>
  </ThemeProvider>
);


describe('<Table />', () => {
  it('should render an <Table> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Table').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Table> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('Table').length).toBe(1);
    expect(renderedComponent.find('table').length).toBe(1);
  });
  it('should have a class .table by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('table').hasClass('table')).toBe(true);
  });
  it('should have a class .table-striped by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      striped: true,
    });
    expect(renderedComponent.find('table').hasClass('table-striped')).toBe(true);
  });
  it('should have a class .table-bordered by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      bordered: true,
    });
    expect(renderedComponent.find('table').hasClass('table-bordered')).toBe(true);
  });
  it('should have a class .table-hover by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      hover: true,
    });
    expect(renderedComponent.find('table').hasClass('table-hover')).toBe(true);
  });
  it('should have a class .table-responsive by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      responsive: true,
    });
    expect(renderedComponent.find('div').length).toBe(1);
    expect(renderedComponent.find('div').hasClass('table')).toBe(false);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
