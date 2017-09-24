/**
 * Testing our Fade component
 */
import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Fade from '../index';

const children = (<h1>Test</h1>);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Fade {...props}>
      {props.children}
    </Fade>
  </BootstrapProvider>
);


describe('<Fade />', () => {
  it('should render a <Fade> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('Fade').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have an attribute isOpen to false and not display children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      isOpen: false,
    });
    expect(renderedComponent.contains(children)).toEqual(false);
  });
});
