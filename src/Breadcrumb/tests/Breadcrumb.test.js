/**
 * Testing our Breadcrumb component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import { BootstrapProvider } from 'bootstrap-styled-provider';
import Breadcrumb from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Breadcrumb {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Breadcrumb {...props} />
  </BootstrapProvider>
);


describe('<Breadcrumb />', () => {
  it('should render an <Breadcrumb> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('BreadcrumbUnstyled').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <breadcrumb> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('ol').length).toBe(1);
    expect(renderedComponent.find('Breadcrumb').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
