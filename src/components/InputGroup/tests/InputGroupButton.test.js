/**
 * Testing our InputGroupButton component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import InputGroupButton from '../InputGroupButton';
import BootstrapProvider from '../../BootstrapProvider';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <InputGroupButton>
    {props.children}
  </InputGroupButton>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <InputGroupButton>
      {props.children}
    </InputGroupButton>
  </BootstrapProvider>
);


describe('<InputGroupButton />', () => {
  it('should render an <InputGroupButton> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <InputGroupButton> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('InputGroupButton').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
