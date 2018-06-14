/**
 * Testing our NavItem component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bootstrap-styled-provider/lib/BootstrapProvider';

import NavItem from '../NavItem';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <NavItem {...props}>
    {props.children}
  </NavItem>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <NavItem {...props}>
      {props.children}
    </NavItem>
  </BootstrapProvider>
);


describe('<NavItem />', () => {
  it('should render an <NavItem> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('li').length).toBe(1);
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
