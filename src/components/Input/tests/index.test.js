/**
 * Testing our Input component
 */
import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from '../../../config';

import Input from '../index';

const renderComponent = (props = {}) => shallow(
  <Input
    type={props.type}
    placeholder={props.placeholder}
    className={props.className}
  />

);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Input
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
    />
  </ThemeProvider>
);


describe('<Input />', () => {
  it('should render an <Input> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('Input').length).toBe(1);
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
});
