/**
 * Testing our H5 component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bootstrap-styled-provider/lib/BootstrapProvider';
import H5 from '../index';

const children = <p>Test</p>;

const renderComponent = (props = {}) => shallow(
  <H5 {...props}>
    {props.children}
  </H5>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <H5 {...props}>

      {props.children}
    </H5>
  </BootstrapProvider>
);


describe('<H5 />', () => {
  it('should render an <H5> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('H5Unstyled').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <H5> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('H5').length).toBe(1);
  });
  it('should have an attribute color', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'success',
    });
    expect(renderedComponent.find('H5').props().color).toBe('success');
  });
  it('should have a classname lead', () => {
    const renderedComponent = renderComponentUsingTheme({
      lead: true,
    });
    expect(renderedComponent.find('h5').hasClass('lead'));
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
