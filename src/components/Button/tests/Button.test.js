/**
 * Testing our Button component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Button from '../Button';

const children = (<span>Test</span>);

const renderComponent = (props = {}) => shallow(
  <Button
    className={props.className}
  >
    {props.children}
  </Button>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Button
      className={props.className}
    >
      {props.children}
    </Button>
  </BootstrapProvider>
);


describe('<Button />', () => {
  it('should render an <Button> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Button').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <div> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('span').length).toBe(1);
    expect(renderedComponent.find('Button').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
