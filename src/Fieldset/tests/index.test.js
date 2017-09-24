/**
 * Testing our Fieldset component
 */
import { ThemeProvider } from 'styled-components';

import { mount } from 'enzyme';
import React from 'react';
import theme from '../../theme';

import Fieldset from '../index';

const children = (<h1>Test</h1>);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Fieldset
      disabled={props.disabled}
      form={props.form}
      name={props.name}
      className={props.className}
    >
      {props.children}
    </Fieldset>
  </ThemeProvider>
);

describe('<Fieldset />', () => {
  it('should render a <fieldset> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('fieldset').length).toBe(1);
  });
  it('should have an attribute disabled without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      disabled: true,
    });
    expect(renderedComponent.find('fieldset').props().disabled).toEqual(true);
  });
  it('should have an attribute disabled without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      form: 'form_1',
    });
    expect(renderedComponent.find('fieldset').props().form).toEqual('form_1');
  });
  it('should have an attribute name without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      name: 'name_1',
    });
    expect(renderedComponent.find('fieldset').props().name).toEqual('name_1');
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
