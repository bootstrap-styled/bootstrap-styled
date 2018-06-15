/**
 * Testing our BreadcrumbItem component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import { BootstrapProvider } from 'bootstrap-styled-provider';
import BreadcrumbItem from '../BreadcrumbItem';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <BreadcrumbItem {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <BreadcrumbItem {...props} />
  </BootstrapProvider>
);


describe('<BreadcrumbItem />', () => {
  it('should render an <BreadcrumbItem> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('li').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <BreadcrumbItem> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('li').length).toBe(1);
    expect(renderedComponent.find('BreadcrumbItem').length).toBe(1);
  });
  it('should have an attribute active without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      active: true,
    });
    expect(renderedComponent.find('BreadcrumbItem').props().active).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
