/**
 * Testing our NavItem component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';

import NavItem from '../NavItem';
import Nav from '../Nav';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Nav>
    <NavItem {...props} />
  </Nav>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Nav>
      <NavItem {...props} />
    </Nav>
  </BootstrapProvider>
);


describe('<NavItem />', () => {
  it('should render an <NavItem> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('NavItem').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <NavItem> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('NavItem').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
