/**
 * Testing our Blockquote component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bootstrap-styled-provider/lib/BootstrapProvider';
import Blockquote from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Blockquote {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Blockquote {...props} />
  </BootstrapProvider>
);


describe('<Blockquote />', () => {
  it('should render an <Blockquote> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('BlockquoteUnstyled').length).toBe(1);
  });
  it('should have an attribute reverse without a theme', () => {
    const renderedComponent = renderComponent({
      children,
      reverse: true,
    });
    expect(renderedComponent.find('BlockquoteUnstyled').props().reverse).toBe(true);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <blockquote> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('blockquote').length).toBe(1);
    expect(renderedComponent.find('Blockquote').length).toBe(1);
  });
  it('should have an attribute reverse with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      reverse: true,
    });
    expect(renderedComponent.find('Blockquote').props().reverse).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
