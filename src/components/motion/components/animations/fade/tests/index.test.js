/**
 * Testing our Fades components
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../../../../../BootstrapProvider';
import { FadeIn, FadeInDown, FadeInUp, FadeInLeft, FadeInRight } from '../index';

const renderComponent = (EffectComponent = FadeIn, props = {}) => mount(
  <BootstrapProvider>
    <EffectComponent {...props} />
  </BootstrapProvider>
);

describe('fades', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });

  it('should render a <FadeIn> tag', () => {
    const renderedComponent = renderComponent(FadeIn, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <FadeInDown> tag', () => {
    const renderedComponent = renderComponent(FadeInDown, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <FadeInUp> tag', () => {
    const renderedComponent = renderComponent(FadeInUp, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <FadeInLeft> tag', () => {
    const renderedComponent = renderComponent(FadeInLeft, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <FadeInRight> tag', () => {
    const renderedComponent = renderComponent(FadeInRight, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
