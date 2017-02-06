/**
 * Testing our Select component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';

import Select from '../index';
import theme from '../../../config';

const children = <option>test</option>;

const renderComponent = (props = {}) => shallow(
  <Select
    autoFocus={props.autoFocus}
    disabled={props.disabled}
    form={props.form}
    multiple={props.multiple}
    name={props.name}
    required={props.required}
    size={props.size}
    className={props.className}
  >
    {children}
  </Select>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Select
      autoFocus={props.autoFocus}
      disabled={props.disabled}
      form={props.form}
      multiple={props.multiple}
      name={props.name}
      required={props.required}
      size={props.size}
      className={props.className}
    >
      {children}
    </Select>
  </ThemeProvider>
);


describe('<Select />', () => {
  it('should render an <Select> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Select').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Select> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('Select').length).toBe(1);
    expect(renderedComponent.find('select').length).toBe(1);
  });
  it('should have a class .select bu default with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('select').hasClass('select')).toBe(true);
  });
  it('should have an attribute autoFocus with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      autoFocus: true,
    });
    expect(renderedComponent.find('select').props().autoFocus).toBe(true);
  });
  it('should have a class .disabled with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      disabled: true,
    });
    expect(renderedComponent.find('select').props().disabled).toBe(true);
  });
  it('should have an attribute form with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      form: 'test-form',
    });
    expect(renderedComponent.find('select').props().form).toBe('test-form');
  });
  it('should have an attribute multiple with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      multiple: true,
    });
    expect(renderedComponent.find('select').props().multiple).toBe(true);
  });
  it('should have an attribute name with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      name: 'test-name',
    });
    expect(renderedComponent.find('select').props().name).toBe('test-name');
  });
  it('should have an attribute required with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      required: true,
    });
    expect(renderedComponent.find('select').props().required).toBe(true);
  });
  it('should have an attribute size with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      size: 'test-size',
    });
    expect(renderedComponent.find('select').props().size).toBe('test-size');
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should not apply android fix', () => {
    const renderedComponent = renderComponentUsingTheme({
      className: 'form-control',
      children,
    });
    expect(renderedComponent.find('select').props().className.indexOf('form-control') > -1).toBe(true);
  });
  it('should apply android fix', () => {
    /* eslint-disable no-restricted-properties, no-underscore-dangle */
    navigator.__defineGetter__('userAgent', () => 'Mozilla/5.0 Android AppleWebKit'); // customized user agent
    /* eslint-enable no-restricted-properties, no-underscore-dangle */
    const renderedComponent = renderComponentUsingTheme({
      className: 'form-control',
      children,
    });
    expect(renderedComponent.find('select').props().className.indexOf('form-control')).toBe(-1);
  });
});
