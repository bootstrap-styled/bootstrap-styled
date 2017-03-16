/**
 * Testing our Li component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Li from '../index';

const children = <h1> test </h1>;

const renderComponent = (props = {}) => shallow(
  <Li {...props}>
    {children}
  </Li>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Li {...props}>
      {children}
    </Li>
  </BootstrapProvider>
);


describe('<Li />', () => {
  it('should render an <Li> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Li').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Li> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('Li').length).toBe(1);
    expect(renderedComponent.find('li').length).toBe(1);
  });
  it('should have a class .dropdown-divider with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      separator: true,
    });
    expect(renderedComponent.find('li').hasClass('dropdown-divider')).toBe(true);
  });
  it('should have a class .dropdown-item with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      'dropdown-item': true,
    });
    expect(renderedComponent.find('li').hasClass('dropdown-item')).toBe(true);
  });
  it('should have a class .dropdown-header with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      'dropdown-header': true,
    });
    expect(renderedComponent.find('li').hasClass('dropdown-header')).toBe(true);
  });
  it('should have a class list-inline-item with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      inline: true,
    });
    expect(renderedComponent.find('li').hasClass('list-inline-item'));
  });
  it('should have a class media with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      media: true,
    });
    expect(renderedComponent.find('li').hasClass('media'));
  });
  it('should have a class .dropdown-footer with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      'dropdown-footer': true,
    });
    expect(renderedComponent.find('li').hasClass('dropdown-footer')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
