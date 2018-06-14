/**
 * Testing our NavLink component
 */

import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bootstrap-styled-provider/lib/BootstrapProvider';

import NavLink from '../NavLink';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <NavLink {...props}>
    {props.children}
  </NavLink>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <NavLink {...props}>
      {props.children}
    </NavLink>
  </BootstrapProvider>
);


describe('<NavLink />', () => {
  it('should render an <NavLink> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('a').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <NavLink> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('NavLink').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should handle onClick prop with a theme', () => {
    const functionTest = jest.fn();

    const renderedComponent = renderComponentUsingTheme({
      children,
      onClick: functionTest,
    });
    renderedComponent.find('a').simulate('click');
    expect(renderedComponent.find('NavLink').props().onClick).toHaveBeenCalled();
  });
  it('should handle onClick events with a theme', () => {
    const functionTest = jest.fn();
    const renderedComponent = renderComponentUsingTheme({
      children,
      onClick: functionTest,
      disabled: true,
    });
    renderedComponent.find('a').simulate('click');
    expect(renderedComponent.find('NavLink').props().onClick).not.toHaveBeenCalled();
  });
});
