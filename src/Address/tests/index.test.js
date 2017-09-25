/**
 * Testing our Address component
 */
import React from 'react';
import { shallow, mount } from 'enzyme';
import BootstrapProvider from '../../BootstrapProvider';
import Address from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Address {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Address {...props} />
  </BootstrapProvider>
);


describe('<Address />', () => {
  it('should render an <Address> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('address').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <address> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('address').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
