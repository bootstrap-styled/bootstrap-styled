/**
 * Testing our Output component
 */
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from '../../../theme';

import Output from '../index';

const renderComponent = (props = {}) => shallow(

  <Output
    className={props.className}
    htmlFor={props.htmlFor}
    form={props.form}
    name={props.name}
  />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Output
      className={props.className}
      htmlFor={props.htmlFor}
      form={props.form}
      name={props.name}
    />
  </ThemeProvider>
);

describe('<Output />', () => {
  it('should render an <Output> tag without a theme', () => {
    const renderedComponent = renderComponent({
    });
    expect(renderedComponent.find('OutputUnstyled').length).toBe(1);
  });
  it('should render an <Output> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
    });
    expect(renderedComponent.find('output').length).toBe(1);
    expect(renderedComponent.find('Output').length).toBe(1);
  });
  it('should have an attribute htmlFor with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      htmlFor: 'a b',
    });
    expect(renderedComponent.find('output').props().htmlFor).toBe('a b');
  });
  it('should have an attribute form with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      form: 'form-test',
    });
    expect(renderedComponent.find('output').props().form).toBe('form-test');
  });
  it('should have an attribute name with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      name: 'name-test',
    });
    expect(renderedComponent.find('output').props().name).toBe('name-test');
  });
});
