/**
 * Testing our NavLink component
 */

import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';

import NavLink from '../NavLink';
import Nav from '../Nav';
import NavItem from '../NavItem';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <Nav>
    <NavItem>
      <NavLink {...props} />
    </NavItem>
  </Nav>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Nav>
      <NavItem>
        <NavLink {...props} />
      </NavItem>
    </Nav>
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
  it('should handle click on link with a theme', () => {
    const functionTest = jest.fn();
    const renderedComponent = renderComponentUsingTheme({
      children,
      onClick: functionTest,
      href: 'test',
    });
    renderedComponent.find('a').simulate('click', { preventDefault() {} });
    expect(renderedComponent.find('NavLink').props().onClick).toHaveBeenCalled();
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
  it('should NOT handle onClick events when disabled with a theme', () => {
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
