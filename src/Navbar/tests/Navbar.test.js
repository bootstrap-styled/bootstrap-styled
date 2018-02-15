/**
 * Testing our Navbar component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Navbar from '../index';

const children = (<span>Test</span>);

const renderComponent = (props = {}) => shallow(
  <Navbar {...props}>
    {props.children}
  </Navbar>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Navbar {...props}>
      {props.children}
    </Navbar>
  </BootstrapProvider>
);


describe('<Navbar />', () => {
  it('should render an <Navbar> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('NavbarUnstyled').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <Navbar> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('Navbar').length).toBe(1);
  });
  it('should have a class navbar-toggleable-md with a theme', () => {
    const renderedComponent = mount(<Navbar toggleable="md" />);
    expect(renderedComponent.find('nav').hasClass('navbar-toggleable-md')).toEqual(true);
  });
  it('should have a class navbar-toggleable with a theme', () => {
    const renderedComponent = mount(<Navbar toggleable />);
    expect(renderedComponent.find('nav').hasClass('navbar-toggleable')).toEqual(true);
  });
  it('should have class navbar-light with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      light: true,
    });
    expect(renderedComponent.find('nav').hasClass('navbar-light')).toEqual(true);
  });
  it('should have class navbar-inverse with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      inverse: true,
    });
    expect(renderedComponent.find('nav').hasClass('navbar-inverse')).toEqual(true);
  });
  it('should have class navbar-full with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      full: true,
    });
    expect(renderedComponent.find('nav').hasClass('navbar-full')).toEqual(true);
  });
  it('should have class bg-info with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'info',
    });
    expect(renderedComponent.find('nav').hasClass('bg-info')).toEqual(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
