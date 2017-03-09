/**
 * Testing our PaginationLink component
 */

import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import PaginationLink from '../PaginationLink';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <PaginationLink
    className={props.className}
  >
    {props.children}
  </PaginationLink>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <PaginationLink
      className={props.className}
    >
      {props.children}
    </PaginationLink>
  </BootstrapProvider>
);


describe('<PaginationLink />', () => {
  it('should render an <PaginationLink> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('A').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <PaginationLink> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('A').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
