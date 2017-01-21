/**
 * Testing our Li component
 */

import { ThemeProvider } from 'styled-components';

import { shallow, mount } from 'enzyme';
import React from 'react';
import theme from '../../../config';

import Li from '../index';

const children = <h1> test </h1>;

const renderComponent = (props = {}) => shallow(
  <Li
    disabled={props.disabled}
    separator={props.separator}
    active={props.active}
    dropdown-item={props['dropdown-item']}
    dropdown-header={props['dropdown-header']}
    dropdown-footer={props['dropdown-footer']}
    className={props.className}
  >
    {children}
  </Li>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Li
      disabled={props.disabled}
      separator={props.separator}
      active={props.active}
      dropdown-item={props['dropdown-item']}
      dropdown-header={props['dropdown-header']}
      dropdown-footer={props['dropdown-footer']}
      className={props.className}
    >
      {children}
    </Li>
  </ThemeProvider>
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
  it('should have a class .disabled with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      disabled: true,
    });
    expect(renderedComponent.find('li').hasClass('disabled')).toBe(true);
  });
  it('should have a class .dropdown-divider with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      separator: true,
    });
    expect(renderedComponent.find('li').hasClass('dropdown-divider')).toBe(true);
  });
  it('should have a class .active with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      active: true,
    });
    expect(renderedComponent.find('li').hasClass('active')).toBe(true);
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
