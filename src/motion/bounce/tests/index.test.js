/**
 * Testing our Bounces components
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../../../BootstrapProvider/index';
import { Bounce, BounceDown, BounceUp, BounceLeft, BounceRight } from '../index';

const renderComponent = (EffectComponent = Bounce, props = {}) => mount(
  <BootstrapProvider>
    <EffectComponent {...props} />
  </BootstrapProvider>
);

describe('bounce', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });

  it('should render a <Bounce> tag', () => {
    const renderedComponent = renderComponent(Bounce, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <BounceDown> tag', () => {
    const renderedComponent = renderComponent(BounceDown, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <BounceUp> tag', () => {
    const renderedComponent = renderComponent(BounceUp, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <BounceLeft> tag', () => {
    const renderedComponent = renderComponent(BounceLeft, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <BounceRight> tag', () => {
    const renderedComponent = renderComponent(BounceRight, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
