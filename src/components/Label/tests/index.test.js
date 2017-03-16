/**
 * Testing our Label component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Label from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Label {...props}>
    {props.children}
  </Label>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Label {...props}>
      {props.children}
    </Label>
  </BootstrapProvider>
);


describe('<Label />', () => {
  it('should render an <Label> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Label').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <label> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('label').length).toBe(1);
  });
  it('should have a class sr-only with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      hidden: true,
    });
    expect(renderedComponent.find('Label').hasClass('sr-only'));
  });
  it('should have a class form-check-inline with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      check: true,
      inline: true,
    });
    expect(renderedComponent.find('Label').hasClass('form-check-inline'));
  });
  it('should have a class form-check-label with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      check: true,
      inline: false,
    });
    expect(renderedComponent.find('Label').hasClass('form-check-label'));
  });
  it('should have a class col-form-label-test-size` with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      size: 'test-size',
    });
    expect(renderedComponent.find('Label').hasClass('col-form-label-test-size'));
  });
  it('should have an attribute disabled with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      check: true,
      inline: true,
      disabled: true,
    });
    expect(renderedComponent.find('Label').props().disabled).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
