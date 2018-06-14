/**
 * Testing our H6 component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bootstrap-styled-provider/lib/BootstrapProvider';
import H6 from '../index';

const children = <p>Test</p>;

const renderComponent = (props = {}) => shallow(
  <H6 {...props}>
    {props.children}
  </H6>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <H6 {...props}>

      {props.children}
    </H6>
  </BootstrapProvider>
);


describe('<H6 />', () => {
  it('should render an <H6> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('H6Unstyled').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <H6> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('H6').length).toBe(1);
  });
  it('should have an attribute color', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'danger',
    });
    expect(renderedComponent.find('H6').props().color).toBe('danger');
  });
  it('should have a classname lead', () => {
    const renderedComponent = renderComponentUsingTheme({
      lead: true,
    });
    expect(renderedComponent.find('h6').hasClass('lead'));
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
