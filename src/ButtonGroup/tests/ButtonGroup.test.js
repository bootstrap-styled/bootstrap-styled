/**
 * Testing our ButtonGroup component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import ButtonGroup from '../ButtonGroup';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <ButtonGroup {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <ButtonGroup {...props} />
  </BootstrapProvider>
);

describe('<ButtonGroup />', () => {
  it('should render an <ButtonGroup> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('ButtonGroupUnstyled').length).toBe(1);
  });
  it('should have an attribute vertical without a theme', () => {
    const renderedComponent = renderComponent({
      vertical: true,
    });
    expect(renderedComponent.find('ButtonGroupUnstyled').props().vertical).toBe(true);
  });
  it('should have an attribute size without a theme', () => {
    const renderedComponent = renderComponent({
      size: 'sm',
    });
    expect(renderedComponent.find('ButtonGroupUnstyled').props().size).toBe('sm');
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <ButtonGroup> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('ButtonGroup').length).toBe(1);
  });
  it('should have an attribute vertical with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      vertical: true,
    });
    expect(renderedComponent.find('ButtonGroup').props().vertical).toBe(true);
  });
  it('should have an attribute size with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      size: 'sm',
    });
    expect(renderedComponent.find('ButtonGroup').props().size).toBe('sm');
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
