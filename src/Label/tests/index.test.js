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
    expect(renderedComponent.find('LabelUnstyled').length).toBe(1);
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
  it('should render with col-form-label-lg class when size is provided', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      size: 'lg',
    });
    expect(renderedComponent.find('label').hasClass('col-form-label-lg')).toBe(true);
  });
  it('should pass col size specific classes as Numbers', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      sm: '6',
    });
    expect(renderedComponent.find('label').hasClass('col-sm-6')).toBe(true);
  });
  it('should pass col size specific classes via Objects', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      sm: {
        size: 6,
        push: 2,
        pull: 2,
        offset: 2,
      },
    });
    expect(renderedComponent.find('label').hasClass('col-sm-6')).toBe(true);
    expect(renderedComponent.find('label').hasClass('push-sm-2')).toBe(true);
    expect(renderedComponent.find('label').hasClass('pull-sm-2')).toBe(true);
    expect(renderedComponent.find('label').hasClass('offset-sm-2')).toBe(true);
  });
  it('should pass multiple col size specific classes via Objects', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      sm: {
        size: 6,
        push: 2,
        pull: 2,
        offset: 2,
      },
      md: {
        size: 7,
        push: 1,
        pull: 1,
        offset: 1,
      },
    });
    expect(renderedComponent.find('label').hasClass('col-sm-6')).toBe(true);
    expect(renderedComponent.find('label').hasClass('push-sm-2')).toBe(true);
    expect(renderedComponent.find('label').hasClass('pull-sm-2')).toBe(true);
    expect(renderedComponent.find('label').hasClass('offset-sm-2')).toBe(true);
    expect(renderedComponent.find('label').hasClass('col-md-7')).toBe(true);
    expect(renderedComponent.find('label').hasClass('push-md-1')).toBe(true);
    expect(renderedComponent.find('label').hasClass('pull-md-1')).toBe(true);
    expect(renderedComponent.find('label').hasClass('offset-md-1')).toBe(true);
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
