/**
 * Testing our Media component
 */


import { mount, shallow } from 'enzyme';
import React from 'react';
import Media from '../index';
import BootstrapProvider from '../../BootstrapProvider';

const children = (<p>Test</p>);

const renderComponent = (props = {}) => shallow(
  <Media {...props}>
    {props.children}
  </Media>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Media {...props}>
      {props.children}
    </Media>
  </BootstrapProvider>
);


describe('<Media />', () => {
  it('should render an <Media> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('Media').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <Media> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('Media').length).toBe(1);
  });
  it('should render an <Media> tag with an H4 and a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      heading: true,
    });
    expect(renderedComponent.find('H4').length).toBe(1);
  });
  it('should render an <Media> tag with an A and a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      right: true,
    });
    expect(renderedComponent.find('A').length).toBe(1);
  });
  it('should render an <Media> tag with an A and a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      left: true,
    });
    expect(renderedComponent.find('A').length).toBe(1);
  });
  it('should render an <Media> tag with an Img and a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      object: true,
    });
    expect(renderedComponent.find('Img').length).toBe(1);
  });
  it('should render an <Media> tag with an Ul and a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      list: true,
    });
    expect(renderedComponent.find('Ul').length).toBe(1);
  });
  it('should have a class media-body', () => {
    const renderedComponent = renderComponentUsingTheme({
      body: true,
    });
    expect(renderedComponent.find('div').at(1).hasClass('media-body')).toBe(true);
  });
  it('should have a class media-heading', () => {
    const renderedComponent = renderComponentUsingTheme({
      heading: true,
    });
    expect(renderedComponent.find('h4').hasClass('media-heading')).toBe(true);
  });
  it('should have a class media-left', () => {
    const renderedComponent = renderComponentUsingTheme({
      left: true,
    });
    expect(renderedComponent.find('a').hasClass('media-left')).toBe(true);
  });
  it('should have a class media-right', () => {
    const renderedComponent = renderComponentUsingTheme({
      right: true,
    });
    expect(renderedComponent.find('a').hasClass('media-right')).toBe(true);
  });
  it('should have a class media-top', () => {
    const renderedComponent = renderComponentUsingTheme({
      top: true,
    });
    expect(renderedComponent.find('div').at(1).hasClass('media-top')).toBe(true);
  });
  it('should have a class media-bottom', () => {
    const renderedComponent = renderComponentUsingTheme({
      bottom: true,
    });
    expect(renderedComponent.find('div').at(1).hasClass('media-bottom')).toBe(true);
  });
  it('should have a class media-middle', () => {
    const renderedComponent = renderComponentUsingTheme({
      middle: true,
    });
    expect(renderedComponent.find('div').at(1).hasClass('media-middle')).toBe(true);
  });
  it('should have a class media-object', () => {
    const renderedComponent = renderComponentUsingTheme({
      object: true,
    });
    expect(renderedComponent.find('img').hasClass('media-object')).toBe(true);
  });
  it('should have a class media-list', () => {
    const renderedComponent = renderComponentUsingTheme({
      list: true,
    });
    expect(renderedComponent.find('ul').hasClass('media-list')).toBe(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
