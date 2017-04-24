/**
 * Testing our Button component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Button from '../Button';

const children = (<span>Test</span>);

const renderComponent = (props = {}) => shallow(
  <Button {...props}>
    {children}
  </Button>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Button {...props}>
      {children}
    </Button>
  </BootstrapProvider>
);


describe('<Button />', () => {
  let onClick;

  beforeAll(() => {
    onClick = jest.fn();
  });

  it('should render an <Button> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Button').length).toBe(1);
  });
  it('should have an attribute outline without a theme', () => {
    const renderedComponent = renderComponent({
      outline: true,
    });
    expect(renderedComponent.find('Button').props().outline).toBe(true);
  });
  it('should have an attribute size without a theme', () => {
    const renderedComponent = renderComponent({
      size: 'sm',
    });
    expect(renderedComponent.find('Button').props().size).toBe('sm');
  });
  it('should have an attribute block without a theme', () => {
    const renderedComponent = renderComponent({
      block: true,
    });
    expect(renderedComponent.find('Button').props().block).toBe(true);
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
  it('should have an attribute outline with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      outline: true,
    });
    expect(renderedComponent.find('Button').props().outline).toBe(true);
  });
  it('should have an attribute size with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      size: 'sm',
    });
    expect(renderedComponent.find('Button').props().size).toBe('sm');
  });
  it('should have an attribute block with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      block: true,
    });
    expect(renderedComponent.find('Button').props().block).toBe(true);
  });
  it('should have a function onClick not called when disabled is true', () => {
    const renderedComponent = renderComponentUsingTheme({
      onClick,
      disabled: true,
    });
    renderedComponent.find('Button').simulate('click', { preventDefault: () => {} });
    expect(onClick).not.toHaveBeenCalled();
  });
  it('should have a function onClick', () => {
    const renderedComponent = renderComponentUsingTheme({
      onClick,
    });
    renderedComponent.find('Button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
  it('should have a type=button', () => {
    const renderedComponent = renderComponentUsingTheme({
      onClick,
    });
    expect(renderedComponent.find('button').props().type).toEqual('button');
  });
  it('should have a type=undefined', () => {
    const renderedComponent = renderComponentUsingTheme({
      href: '#',
    });
    expect(renderedComponent.find('a').length).toEqual(1);
    expect(renderedComponent.find('a').props().type).toEqual(undefined);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
