import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import FormGroup from '../FormGroup';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <FormGroup {...props}>
    {children}
  </FormGroup>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <FormGroup {...props}>
      {children}
    </FormGroup>
  </BootstrapProvider>
);

describe('<FormGroup />', () => {
  it('should render an <FormGroup> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <FormGroup> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('FormGroup').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
