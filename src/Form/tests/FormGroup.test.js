import { shallow, mount } from 'enzyme';
import React from 'react';
import { BootstrapProvider } from 'bootstrap-styled-provider';
import FormGroup from '../FormGroup';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <FormGroup {...props}>
    {children}
  </FormGroup>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <FormGroup {...props}>
      {children}
    </FormGroup>
  </BootstrapProvider>
);

describe('<FormGroup />', () => {
  it('should render an <FormGroup> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <FormGroup> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('FormGroup').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have a class has-warning', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'warning',
    });
    expect(renderedComponent.find('div').at(1).hasClass('has-warning')).toBe(true);
  });
  it('should have a class row', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      row: true,
    });
    expect(renderedComponent.find('div').at(1).hasClass('row')).toBe(true);
  });
  it('should have a class form-check', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      check: true,
    });
    expect(renderedComponent.find('div').at(1).hasClass('form-check')).toBe(true);
  });
  it('should have a class form-check-inline', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      inline: true,
    });
    expect(renderedComponent.find('div').at(1).hasClass('form-check-inline')).toBe(true);
  });
  it('should have a class disabled', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      check: true,
      disabled: true,
    });
    expect(renderedComponent.find('div').at(1).hasClass('disabled')).toBe(true);
  });
});
