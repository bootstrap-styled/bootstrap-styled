/**
 * Testing our Filters components
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../../../BootstrapProvider/index';
import { Blur, Contrast, Brightness, Grayscale, HueRotate, Invert, Opacity, Saturate, Sepia, Dropshadow } from '../index';

const renderComponent = (EffectComponent = Blur, props = {}) => mount(
  <BootstrapProvider>
    <EffectComponent {...props} />
  </BootstrapProvider>
);

describe('filters', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });

  it('should render a <Blur> tag', () => {
    const renderedComponent = renderComponent(Blur, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Contrast> tag', () => {
    const renderedComponent = renderComponent(Contrast, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Brightness> tag', () => {
    const renderedComponent = renderComponent(Brightness, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Grayscale> tag', () => {
    const renderedComponent = renderComponent(Grayscale, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <HueRotate> tag', () => {
    const renderedComponent = renderComponent(HueRotate, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Invert> tag', () => {
    const renderedComponent = renderComponent(Invert, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Opacity> tag', () => {
    const renderedComponent = renderComponent(Opacity, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Saturate> tag', () => {
    const renderedComponent = renderComponent(Saturate, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Sepia> tag', () => {
    const renderedComponent = renderComponent(Sepia, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <Dropshadow> tag', () => {
    const renderedComponent = renderComponent(Dropshadow, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
