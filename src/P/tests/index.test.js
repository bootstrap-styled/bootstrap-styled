/**
 * Testing our P component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bootstrap-styled-provider/lib/BootstrapProvider';
import P from '../index';

const children = <span>test</span>;

const renderComponent = (props = {}) => shallow(
  <P {...props}>
    {props.children}
  </P>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <P {...props}>
      {props.children}
    </P>
  </BootstrapProvider>
);

describe('<P />', () => {
  it('should render an <P> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('PUnstyled').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <p> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('P').length).toBe(1);
  });
  it('should have a class lead with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      lead: true,
    });
    expect(renderedComponent.find('p').hasClass('lead')).toBe(true);
  });
  it('should have a class text-info with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'info',
    });
    expect(renderedComponent.find('p').hasClass('text-info')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
