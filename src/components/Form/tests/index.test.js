/**
 * Testing our ContainerFluid component
 */
import { ThemeProvider } from 'styled-components';
import theme from 'config';
import { shallow } from 'enzyme';
import React from 'react';


import Form from '../index';

const children = (<h1>Test</h1>);
const renderComponent = (props = {}) => shallow(
  <Form {...props}>
    {children}
  </Form>
);

const renderComponentUsingTheme = (props = {}) => shallow(
  <ThemeProvider theme={theme}>
    <Form {...props}>
      {children}
    </Form>
  </ThemeProvider>
);

describe('<Form />', () => {
  it('should render a <Form> tag ', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('Form')).toBeDefined();
  });
  it('should render a <ContainerFluid> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Form')).toBeDefined();
  });
  it('should adopt a className attribute', () => {
    const className = 'form-control';
    const renderedComponent = renderComponent({ className });
    expect(renderedComponent.find('Form').hasClass(className)).toEqual(true);
  });
  it('should have children', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <ContainerFluid> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
