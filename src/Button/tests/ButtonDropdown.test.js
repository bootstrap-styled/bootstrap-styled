/**
 * Testing our Button component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import { BootstrapProvider } from 'bootstrap-styled-provider';
import ButtonDropdown from '../ButtonDropdown';

const children = (<span>Test</span>);

const renderComponent = (props = {}) => shallow(
  <ButtonDropdown {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <ButtonDropdown {...props} />
  </BootstrapProvider>
);


describe('<ButtonDropdown />', () => {
  it('should render an <ButtonDropdown> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
      isOpen: false,
      toggle: jest.fn(),
    });
    expect(renderedComponent.find('span').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
      isOpen: false,
      toggle: jest.fn(),
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <ButtonDropdown> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      isOpen: false,
      toggle: jest.fn(),
    });
    expect(renderedComponent.find('ButtonDropdown').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponent({
      children,
      isOpen: false,
      toggle: jest.fn(),
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
