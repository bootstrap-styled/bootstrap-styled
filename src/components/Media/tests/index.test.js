/**
 * Testing our Media component
 */


import { mount } from 'enzyme';
import React from 'react';
import Media from '../index';
import BootstrapProvider from '../../BootstrapProvider';

const children = (
  <div>
    <Media left href="#">
      <Media object src="holder.js/64x64" alt="Generic placeholder image" />
    </Media>
    <Media body>
      <Media heading>
        Media heading
      </Media>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      <Media>
        <Media left href="#">
          <Media object src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Nested media heading
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
    </Media>
  </div>
);

const renderComponent = (props = {}) => mount(
  <Media {...props} />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Media {...props} />
  </BootstrapProvider>
);


describe('<Media />', () => {
  it('should render a <Media> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <Media> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Media> tag with an H4 and a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      heading: true,
    });
    expect(renderedComponent.find('h4').length).toBe(3);
  });
  it('should render a <Media> tag with an A and a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('A').length).toBe(2);
  });
  it('should render a <Media> tag with an A and a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('A').length).toBe(2);
  });
  it('should render a <Media> tag with an Img and a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      object: true,
      src: 'http://foobar',
      alt: 'image test',
    });
    expect(renderedComponent.find('Img').length).toBe(1);
  });
  it('should render a <Media> tag with an Ul and a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      list: true,
    });
    expect(renderedComponent.find('Ul').length).toBe(1);
  });
  it('should have a class media-body', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      body: true,
    });
    expect(renderedComponent.find('div').at(1).hasClass('media-body')).toBe(true);
  });
  it('should have a class media-heading', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('h4').at(0).hasClass('media-heading')).toBe(true);
  });
  it('should have a class media-left', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('a').at(0).hasClass('media-left')).toBe(true);
  });
  it('should have a class media-right', () => {
    const renderedComponent = renderComponentUsingTheme({
      children: (<h1>toto</h1>),
      right: true,
    });
    expect(renderedComponent.find('a.media-right').hasClass('media-right')).toBe(true);
  });
  it('should have a class media-top', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      top: true,
    });
    expect(renderedComponent.find('div').at(1).hasClass('media-top')).toBe(true);
  });
  it('should have a class media-bottom', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      bottom: true,
    });
    expect(renderedComponent.find('div').at(1).hasClass('media-bottom')).toBe(true);
  });
  it('should have a class media-middle', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      middle: true,
    });
    expect(renderedComponent.find('div').at(1).hasClass('media-middle')).toBe(true);
  });
  it('should have a class media-object', () => {
    const renderedComponent = renderComponentUsingTheme({
      object: true,
      src: 'http://foobar',
      alt: 'image test',
    });
    expect(renderedComponent.find('img').at(0).hasClass('media-object')).toBe(true);
  });
  it('should have a class media-list', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
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
