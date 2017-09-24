/**
 * Testing our composeRotation HOC
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../../../BootstrapProvider/index';
import composeRotation from '../composeRotation';
import composeAnimation from '../composeAnimation';

describe('composeRotation', () => {
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
  let RotationAnimation;
  beforeAll(() => {
    RotationAnimation = composeRotation(composeAnimation(makeEffect), '$key');
  });

  it('should render an <RotationAnimation /> with user distance', () => {
    const renderedComponent = mount(
      <BootstrapProvider>
        <RotationAnimation rotation="10deg">Test</RotationAnimation>
      </BootstrapProvider>
    );
    expect(renderedComponent.length).toBe(1);
  });

  it('should render an <RotationAnimation /> with theme distance', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={{ $key: 'toto' }}>
        <RotationAnimation>Test</RotationAnimation>
      </BootstrapProvider>
    );
    expect(renderedComponent.length).toBe(1);
  });
});
