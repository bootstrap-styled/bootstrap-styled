/**
 * Testing our H3 component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import H3 from '../index';

const children = <p>Test</p>;

const renderComponent = (props = {}) => shallow(
  <H3 {...props}>
    {props.children}
  </H3>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <H3 {...props}>
      {props.children}
    </H3>
  </BootstrapProvider>
);


describe('<H3 />', () => {
  it('should render an <H3> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('H3Unstyled').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <H3> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('H3').length).toBe(1);
  });
  it('should have an attribute color', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'warning',
    });
    expect(renderedComponent.find('H3').props().color).toBe('warning');
  });
  it('should have a classname lead', () => {
    const renderedComponent = renderComponentUsingTheme({
      lead: true,
    });
    expect(renderedComponent.find('h3').hasClass('lead'));
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
