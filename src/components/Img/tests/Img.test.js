/**
 * Testing our Img component
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from '../../BootstrapProvider';
import Img from '../index';

const renderComponent = (props = {}) => shallow(
  <Img{...props} />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Img{...props} />
  </BootstrapProvider>
);

describe('<Img />', () => {
  it('should render an <Img> tag without a theme', () => {
    const renderedComponent = renderComponent({
      alt: 'test-alt',
      src: 'src-test',
    });
    expect(renderedComponent.find('Img').length).toBe(1);
  });
  it('should render a <Img> tag with a theme', () => {
    const renderedComponentTheme = renderComponentUsingTheme({
      alt: 'test-alt',
      src: 'src-test',
    });
    expect(renderedComponentTheme.find('Img').length).toBe(1);
  });
  it('should have an attribute alt without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      alt: 'test-alt',
      src: 'src-test',
    });
    expect(renderedComponent.find('Img').props().alt).toEqual('test-alt');
  });
  it('should have an attribute src without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      alt: 'test-alt',
      src: 'src-test',
    });
    expect(renderedComponent.find('Img').props().src).toEqual('src-test');
  });
  it('should have an attribute fluid without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      alt: 'test-alt',
      src: 'src-test',
      fluid: true,
    });
    expect(renderedComponent.find('img').hasClass('img-fluid'));
  });
  it('should have an attribute thumbnail without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      alt: 'test-alt',
      src: 'src-test',
      thumbnail: true,
    });
    expect(renderedComponent.find('img').hasClass('img-thumbnail'));
  });
  it('should have an attribute figure without a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      alt: 'test-alt',
      src: 'src-test',
      figure: true,
    });
    expect(renderedComponent.find('img').hasClass('figure-img'));
  });
});
