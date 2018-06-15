import { shallow, mount } from 'enzyme';
import React from 'react';
import { BootstrapProvider } from 'bootstrap-styled-provider';
import Form from '../index';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <BootstrapProvider>
    <Form {...props}>
      {children}
    </Form>
  </BootstrapProvider>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Form {...props}>
      {children}
    </Form>
  </BootstrapProvider>
);

describe('<Form />', () => {
  it('should render an <Form /> tag without a <BootstrapProvider />', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('Form').length).toBe(1);
  });
  it('should have children without a <BootstrapProvider />', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Form /> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Form').length).toBe(1);
  });
  it('should have a classname form-inline', () => {
    const renderedComponent = renderComponentUsingTheme({
      inline: true,
    });
    expect(renderedComponent.find('form').hasClass('form-inline'));
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
