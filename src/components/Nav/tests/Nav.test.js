/**
 * Testing our Nav component
 */

import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Nav from '../Nav';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => shallow(
  <Nav {...props}>
    {props.children}
  </Nav>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Nav {...props}>
      {props.children}
    </Nav>
  </BootstrapProvider>
);


describe('<Nav />', () => {
  it('should render an <Nav> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Nav').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <nav> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('Nav').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have a class navbar-nav but not nav', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      navbar: true,
    });
    expect(renderedComponent.find('ul').hasClass('navbar-nav')).toBe(true);
  });
  it('should have a class nav-tabs', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      tabs: true,
    });
    expect(renderedComponent.find('ul').hasClass('nav-tabs')).toBe(true);
  });
  it('should have a class nav-pills', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      pills: true,
    });
    expect(renderedComponent.find('ul').hasClass('nav-pills')).toBe(true);
  });
  it('should have a class nav-fill', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      fill: true,
    });
    expect(renderedComponent.find('ul').hasClass('nav-fill')).toBe(true);
  });
  it('should have a class nav-inline', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      inline: true,
    });
    expect(renderedComponent.find('ul').hasClass('nav-inline')).toBe(true);
  });
  it('should have a class nav-stacked', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      stacked: true,
    });
    expect(renderedComponent.find('ul').hasClass('nav-stacked')).toBe(true);
  });
  it('should have a class nav-justified', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      justified: true,
    });
    expect(renderedComponent.find('ul').hasClass('nav-justified')).toBe(true);
  });
  it('should have a class flex-column', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      vertical: true,
    });
    expect(renderedComponent.find('ul').hasClass('flex-column')).toBe(true);
  });
});
