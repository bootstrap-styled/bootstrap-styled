/**
 * Testing our Table component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import { BootstrapProvider } from 'bootstrap-styled-provider';
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
  <BootstrapProvider>
    <Table {...props} />
  </BootstrapProvider>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Table {...props} />
  </BootstrapProvider>
);


describe('<Table />', () => {
  it('should render an <Table /> tag', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Table').length).toBe(1);
  });
  it('should have children', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Table /> tag with a theme', () => {
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
  it('should have a class .table-sm with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      size: 'sm',
    });
    expect(renderedComponent.find('table').hasClass('table-sm')).toBe(true);
  });
  it('should have a class .table-bordered with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      bordered: true,
    });
    expect(renderedComponent.find('table').hasClass('table-bordered')).toBe(true);
  });
  it('should have a class .table-striped with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      striped: true,
    });
    expect(renderedComponent.find('table').hasClass('table-striped')).toBe(true);
  });
  it('should have a class .table-inverse with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      inverse: true,
    });
    expect(renderedComponent.find('table').hasClass('table-inverse')).toBe(true);
  });
  it('should have a class .table-hover with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      hover: true,
    });
    expect(renderedComponent.find('table').hasClass('table-hover')).toBe(true);
  });
  it('should have a class .table-reflow with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      reflow: true,
    });
    expect(renderedComponent.find('table').hasClass('table-reflow')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
