/**
 * Testing our CardBlockquote component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bootstrap-styled-provider/lib/BootstrapProvider';

import CardBlockquote from '../CardBlockquote';

const children = <h1> test </h1>;

const renderComponent = (props = {}) => shallow(
  <CardBlockquote {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <CardBlockquote {...props} />
  </BootstrapProvider>
);


describe('<CardBlockquote />', () => {
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <CardBlockquote> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('CardBlockquote').length).toBe(1);
  });
  it('should have a class .card-header by default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('blockquote').hasClass('card-blockquote')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
