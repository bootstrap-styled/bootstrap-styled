/**
 * Testing our Navbar component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Navbar from '../Navbar';

const children = (<span>Test</span>);

const renderComponent = (props = {}) => shallow(
  <Navbar
    className={props.className}
  >
    {props.children}
  </Navbar>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Navbar
      className={props.className}
    >
      {props.children}
    </Navbar>
  </BootstrapProvider>
);


describe('<Navbar />', () => {
  it('should render an <Navbar> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Navbar').length).toBe(1);
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
  it('should have children with a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
