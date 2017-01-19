/**
 * Testing our Img component
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'config';
import { shallow, mount } from 'enzyme';

import Img from '../index';

const src = 'test.png';
const alt = 'test';
const width = '50px';
const height = '1337px';
const useMap = 'this is a string';

const renderComponent = (props = {}) => shallow(
  <Img
    src={src}
    alt={alt}
    width={width}
    height={height}
    useMap={useMap}
    {...props}
  />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <ThemeProvider theme={theme}>
    <Img
      src={src}
      alt={alt}
      width={width}
      height={height}
      useMap={useMap}
      {...props}
    />
  </ThemeProvider>
);

describe('<Img>', () => {
  it('should render a <img> tag ', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('img')).toBeDefined();
  });
  it('should render a <img> tag  with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('img')).toBeDefined();
  });
  it('should have an src attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('src', src)).toBeDefined();
  });
  it('should have an src attribute', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('src', src)).toBeDefined();
  });

  it('should have an alt attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('alt', alt)).toBeDefined();
  });
  it('should have an src attribute', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('alt', alt)).toBeDefined();
  });
  it('should have an width attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('width', width)).toBeDefined();
  });
  it('should have an width attribute', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('width', width)).toBeDefined();
  });
  it('should have an height attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('height', height)).toBeDefined();
  });
  it('should have an height attribute', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('height', height)).toBeDefined();
  });
  it('should have an useMap attribute', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('useMap', useMap)).toBeDefined();
  });
  it('should have an useMap attribute', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('useMap', useMap)).toBeDefined();
  });
});
