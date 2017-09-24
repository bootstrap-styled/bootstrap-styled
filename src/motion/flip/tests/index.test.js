/**
 * Testing our Flips components
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../../../BootstrapProvider/index';
import { Flip, FlipX, FlipY } from '../index';

const renderComponent = (EffectComponent = Flip, props = {}) => mount(
  <BootstrapProvider>
    <EffectComponent {...props} />
  </BootstrapProvider>
);

describe('flip', () => {
  let children;
  beforeAll(() => {
    children = (<h1>Test</h1>);
  });

  it('should render a <Flip> tag', () => {
    const renderedComponent = renderComponent(Flip, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <FlipX> tag', () => {
    const renderedComponent = renderComponent(FlipX, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('should render a <FlipY> tag', () => {
    const renderedComponent = renderComponent(FlipY, {
      children,
    });
    expect(renderedComponent.length).toBe(1);
  });
});
