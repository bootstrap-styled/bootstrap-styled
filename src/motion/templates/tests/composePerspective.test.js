/**
 * Testing our composePerspective HOC
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../../../BootstrapProvider/index';
import composePerspective from '../composePerspective';
import composeAnimation from '../composeAnimation';

describe('composePerspective', () => {
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
  let PerspectiveAnimation;
  beforeAll(() => {
    PerspectiveAnimation = composePerspective(composeAnimation(makeEffect), '$key');
  });

  it('should render an <PerspectiveAnimation /> with user distance', () => {
    const renderedComponent = mount(
      <BootstrapProvider>
        <PerspectiveAnimation perspective="10px">Test</PerspectiveAnimation>
      </BootstrapProvider>
    );
    expect(renderedComponent.length).toBe(1);
  });

  it('should render an <DistanceAnimation /> with theme distance', () => {
    const renderedComponent = mount(
      <BootstrapProvider theme={{ $key: 'toto' }}>
        <PerspectiveAnimation>Test</PerspectiveAnimation>
      </BootstrapProvider>
    );
    expect(renderedComponent.length).toBe(1);
  });
});
