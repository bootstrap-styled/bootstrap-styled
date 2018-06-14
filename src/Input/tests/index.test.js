/**
 * Testing our Input component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bootstrap-styled-provider/lib/BootstrapProvider';

import Input from '../index';

const renderComponent = (props = {}) => shallow(
  <Input {...props} />

);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Input {...props} />
  </BootstrapProvider>
);


describe('<Input />', () => {
  it('should render an <Input> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('InputUnstyled').length).toBe(1);
  });
  it('should have an attribute type without a theme', () => {
    const renderedComponent = renderComponent({
      type: 'button',
    });
    expect(renderedComponent.props().type).toEqual('button');
  });
  it('should have an attribute placeholder without a theme', () => {
    const renderedComponent = renderComponent({
      placeholder: 'Enter your input here',
    });
    expect(renderedComponent.props().placeholder).toEqual('Enter your input here');
  });
  it('should render a <input> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('input').length).toBe(1);
    expect(renderedComponent.find('Input').length).toBe(1);
  });
  it('should have an attribute type with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      type: 'button',
    });
    expect(renderedComponent.find('input').props().type).toEqual('button');
  });
  it('should have an attribute placeholder with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      placeholder: 'Enter your input here',
    });
    expect(renderedComponent.find('input').props().placeholder).toEqual('Enter your input here');
  });
  it('should have a class form-control-static if static: true with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      static: true,
    });
    expect(renderedComponent.find('Input').hasClass('form-control-static'));
  });
  it('should have a class form-control-file if type: file with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      type: 'file',
    });
    expect(renderedComponent.find('Input').hasClass('form-control-file'));
  });
  it('should have a class form-check-input if addon: true with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      addon: false,
    });
    expect(renderedComponent.find('Input').hasClass('form-check-input'));
  });
  it('should have a class form-control-state-success with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      state: 'success',
    });
    expect(renderedComponent.find('Input').hasClass('form-control-state-success'));
  });
  it('should have a class form-control-size-sm with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      size: 'sm',
    });
    expect(renderedComponent.find('Input').hasClass('form-control-size-sm'));
  });
  it('should not render with "form-check-input" nor "form-control" class when type is checkbox and addon is truthy', () => {
    const renderedComponent = shallow(<Input addon type="checkbox" />);

    expect(renderedComponent.hasClass('form-check-input')).toBe(false);
    expect(renderedComponent.hasClass('form-control')).toBe(false);
  });

  it('should not render with "form-check-input" nor "form-control" class when type is radio and addon is truthy', () => {
    const renderedComponent = shallow(<Input addon type="radio" />);

    expect(renderedComponent.hasClass('form-check-input')).toBe(false);
    expect(renderedComponent.hasClass('form-control')).toBe(false);
  });
});
