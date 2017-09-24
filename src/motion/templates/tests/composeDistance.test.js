/**
 * Testing our composeDistance HOC
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../../../BootstrapProvider/index';
import composeDistance from '../composeDistance';
import composeAnimation from '../composeAnimation';

describe('composeDistance', () => {
  const makeEffect = () => { // eslint-disable-line arrow-body-style
    return {
      from: {
        width: '0',
      },
      to: {
        width: '100%',
      },
    };
  };
  let DistanceAnimation;
  beforeAll(() => {
    DistanceAnimation = composeDistance(composeAnimation(makeEffect), '$key');
  });

  it('should render an <DistanceAnimation /> with user distance', () => {
    const renderedComponent = mount(
      <BootstrapProvider>
        <DistanceAnimation distance="10px">Test</DistanceAnimation>
      </BootstrapProvider>
    );
    expect(renderedComponent.length).toBe(1);
  });

  it('should render an <DistanceAnimation /> with theme distance', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={{ $key: 'toto' }}>
        <DistanceAnimation >Test</DistanceAnimation>
      </BootstrapProvider>
    );
    expect(renderedComponent.length).toBe(1);
  });
});
