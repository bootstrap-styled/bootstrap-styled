/**
 * Testing our ContainerFluid component
 */
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from '../../../config';


import Form from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Form
    action={props.action}
    onSubmit={props.onSubmit}
  >
    {children}
  </Form>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Form
      action={props.action}
      onSubmit={props.onSubmit}
    >
      {children}
    </Form>
  </ThemeProvider>
);

const submitTest = jest.fn();
submitTest.mockReturnValue('test-submit');

describe('<Form />', () => {
  it('should render a <Form> tag ', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Form').length).toBe(1);
  });
  it('should have an action props', () => {
    const renderedComponent = renderComponent({
      children,
      action: 'test-action',
    });
    expect(renderedComponent.find('Form').props().action).toEqual('test-action');
  });
  it('should have an onSubmit props', () => {
    const renderedComponent = renderComponent({
      children,
      onSubmit: submitTest,
    });
    expect(renderedComponent.find('Form').props().onSubmit).toBeDefined();
  });
  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <ContainerFluid> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('form').length).toBe(1);
    expect(renderedComponent.find('Form').length).toBe(1);
  });
  it('should have an action props using a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      action: 'test-action',
    });
    expect(renderedComponent.find('form').props().action).toEqual('test-action');
  });
  it('should have an onSubmit props using a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      onSubmit: submitTest,
    });
    expect(renderedComponent.find('Form').props().onSubmit).toBeDefined();
  });
  it('should have children using a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
