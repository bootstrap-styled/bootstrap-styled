/**
 * Testing our Col component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Col, { getColumnSizeClass } from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Col {...props}>
    {children}
  </Col>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Col {...props}>
      {children}
    </Col>
  </BootstrapProvider>
);


describe('<Col />', () => {
  it('should render an <Col> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('ColUnstyled').length).toBe(1);
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
    expect(renderedComponent.find('Col').length).toBe(1);
  });
  it('getColumnSizeClass should return empty string', () => {
    expect(getColumnSizeClass('xs', '', '')).toEqual('');
  });
  it('getColumnSizeClass should return col-auto', () => {
    expect(getColumnSizeClass('xs', '', 'auto')).toEqual('col-auto');
  });
  it('getColumnSizeClass should return col-lg-auto', () => {
    expect(getColumnSizeClass('', 'lg', 'auto')).toEqual('col-lg-auto');
  });
  it('getColumnSizeClass should return col-8', () => {
    expect(getColumnSizeClass('xs', '', '8')).toEqual('col-8');
  });
  it('getColumnSizeClass should return col-lg-8', () => {
    expect(getColumnSizeClass('', 'lg', '8')).toEqual('col-lg-8');
  });
  it('should have a class col-6', () => {
    const renderedComponent = renderComponentUsingTheme({
      xs: '6',
    });
    expect(renderedComponent.find('div').at(1).hasClass('col-6')).toEqual(true);
  });
  it('should have a class col-md-6', () => {
    const renderedComponent = renderComponentUsingTheme({
      md: '6',
    });
    expect(renderedComponent.find('div').at(1).hasClass('col-md-6')).toEqual(true);
  });
  it('should have a class col-auto', () => {
    const renderedComponent = renderComponentUsingTheme({
      xs: 'auto',
    });
    expect(renderedComponent.find('div').at(1).hasClass('col-auto')).toEqual(true);
  });
  it('should have a class col-md-auto', () => {
    const renderedComponent = renderComponentUsingTheme({
      md: 'auto',
    });
    expect(renderedComponent.find('div').at(1).hasClass('col-md-auto')).toEqual(true);
  });
  it('should have a classes .col .col-sm-6 .sm-push-2 .sm-pull-2 .sm-offset-2', () => {
    const renderedComponent = renderComponentUsingTheme({
      sm: { size: 6, push: 2, pull: 2, offset: 1 },
    });
    expect(renderedComponent.find('div').at(1).hasClass('col-sm-6')).toEqual(true);
    expect(renderedComponent.find('div').at(1).hasClass('push-sm-2')).toEqual(true);
    expect(renderedComponent.find('div').at(1).hasClass('pull-sm-2')).toEqual(true);
    expect(renderedComponent.find('div').at(1).hasClass('offset-sm-1')).toEqual(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
