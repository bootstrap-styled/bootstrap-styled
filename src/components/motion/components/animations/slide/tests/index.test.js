/**
 * Testing our Slides components
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../../../../../BootstrapProvider';
import { SlideUp, SlideDown, SlideLeft, SlideRight, SlideRightLeft } from '../index';

const renderComponent = (EffectComponent = SlideUp, props = {}) => mount(
  <BootstrapProvider>
    <EffectComponent {...props} />
  </BootstrapProvider>
);

describe('slides', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });

  it('should render a <SlideUp> tag', () => {
    const renderedComponent = renderComponent(SlideUp, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <SlideDown> tag', () => {
    const renderedComponent = renderComponent(SlideDown, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <SlideLeft> tag', () => {
    const renderedComponent = renderComponent(SlideLeft, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <SlideRight> tag', () => {
    const renderedComponent = renderComponent(SlideRight, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <SlideRightLeft> tag', () => {
    const renderedComponent = renderComponent(SlideRightLeft, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
