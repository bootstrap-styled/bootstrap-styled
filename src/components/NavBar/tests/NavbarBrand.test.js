/**
 * Testing our NavbarBrand component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import NavbarBrand from '../NavbarBrand';
import Navbar from '../Navbar';

const children = (<span>Test</span>);

const renderComponent = (props = {}) => shallow(
  <Navbar>
    <NavbarBrand {...props} />
  </Navbar>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Navbar>
      <NavbarBrand {...props} />
    </Navbar>
  </BootstrapProvider>
);

describe('<NavbarBrand />', () => {
  it('should render an <NavbarBrand> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('NavbarBrand').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <NavbarBrand> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('NavbarBrand').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
