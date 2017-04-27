/**
 * Testing our InputGroupAddon component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import InputGroupAddon from '../InputGroupAddon';
import BootstrapProvider from '../../BootstrapProvider';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <InputGroupAddon {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <InputGroupAddon {...props} />
  </BootstrapProvider>
);


describe('<InputGroupAddon />', () => {
  it('should render an <InputGroup> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <InputGroupAddon> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('InputGroupAddon').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
