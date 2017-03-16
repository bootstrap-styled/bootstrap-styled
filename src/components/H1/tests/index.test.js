/**
 * Testing our H1 component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import H1 from '../index';

const children = <p>Test</p>;

const renderComponent = (props = {}) => shallow(
  <H1 {...props}>
    {props.children}
  </H1>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <H1 {...props}>

      {props.children}
    </H1>
  </BootstrapProvider>
);


describe('<H1 />', () => {
  it('should render an <H1> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('H1').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <H1> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('H1').length).toBe(1);
  });
  it('should have an attribute color', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'test-color',
    });
    expect(renderedComponent.find('H1').props().color).toBe('test-color');
  });
  it('should have a classname lead', () => {
    const renderedComponent = renderComponentUsingTheme({
      lead: true,
    });
    expect(renderedComponent.find('h1').hasClass('lead'));
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
