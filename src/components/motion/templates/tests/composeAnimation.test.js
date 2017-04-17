/**
 * Testing our composeAnimation HOC
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../../../BootstrapProvider';
import composeAnimation from '../composeAnimation';

describe('composeAnimation', () => {
  let makeEffect;
  let AbstractAnimation;
  let renderedComponent;

  beforeAll(() => {
    makeEffect = (distance) => `animationNameSuccess-${distance}`;
    AbstractAnimation = composeAnimation(makeEffect);
    renderedComponent = mount(
      <BootstrapProvider>
        <AbstractAnimation distance="1337">Test</AbstractAnimation>
      </BootstrapProvider>
    );
  });

  it('should render an <AbstractAnimation /> component', () => {
    expect(renderedComponent.length).toBe(1);
  });

  it('should set state with the correct animationName using default value', () => {
    makeEffect = (distance) => `animationNameSuccess-${distance}`;
    AbstractAnimation = composeAnimation(makeEffect);
    renderedComponent = mount(
      <AbstractAnimation>
        Test
      </AbstractAnimation>
    );
    expect(renderedComponent.state().styles.animation).toEqual('animationNameSuccess-100% 1s ease 0s 1 normal none running');
  });

  it('should set state with the correct animationName using props', () => {
    makeEffect = (distance) => `animationNameSuccess-${distance}`;
    AbstractAnimation = composeAnimation(makeEffect);
    renderedComponent = mount(
      <AbstractAnimation
        distance="1337"
        duration="2s"
        timingFunction="linear"
        delay="1s"
        direction="reverse"
        iterations="1"
        backfaceVisibility="hidden"
        fillMode="forwards"
        playState="running"
      >
        Test
      </AbstractAnimation>
    );
    expect(renderedComponent.state().styles.animation).toEqual('animationNameSuccess-1337 2s linear 1s 1 reverse forwards running');
  });
  it('should set backfaceVisibility props', () => {
    AbstractAnimation = composeAnimation(makeEffect);
    renderedComponent = mount(
      <AbstractAnimation
        distance="1337"
        duration="2s"
        timingFunction="linear"
        delay="1s"
        direction="reverse"
        iterations="1"
        backfaceVisibility="hidden"
        fillMode="forwards"
        playState="running"
      >
        Test
      </AbstractAnimation>
    );
    expect(renderedComponent.props().backfaceVisibility).toEqual('hidden');
  });
  it('should set direction props', () => {
    AbstractAnimation = composeAnimation(makeEffect);
    renderedComponent = mount(
      <AbstractAnimation
        distance="1337"
        duration="2s"
        timingFunction="linear"
        delay="1s"
        direction="reverse"
        iterations="1"
        backfaceVisibility="hidden"
        fillMode="forwards"
        playState="running"
      >
        Test
      </AbstractAnimation>
    );
    expect(renderedComponent.props().direction).toEqual('reverse');
  });
  it('should set iterations props', () => {
    AbstractAnimation = composeAnimation(makeEffect);
    renderedComponent = mount(
      <AbstractAnimation
        distance="1337"
        duration="2s"
        timingFunction="linear"
        delay="1s"
        direction="reverse"
        iterations="1"
        backfaceVisibility="hidden"
        fillMode="forwards"
        playState="running"
      >
        Test
      </AbstractAnimation>
    );
    expect(renderedComponent.props().iterations).toEqual('1');
  });
  it('should set delay props', () => {
    AbstractAnimation = composeAnimation(makeEffect);
    renderedComponent = mount(
      <AbstractAnimation
        distance="1337"
        duration="2s"
        timingFunction="linear"
        delay="1s"
        direction="reverse"
        iterations="1"
        backfaceVisibility="hidden"
        fillMode="forwards"
        playState="running"
      >
        Test
      </AbstractAnimation>
    );
    expect(renderedComponent.props().delay).toEqual('1s');
  });
  it('should set fillMode props', () => {
    AbstractAnimation = composeAnimation(makeEffect);
    renderedComponent = mount(
      <AbstractAnimation
        distance="1337"
        duration="2s"
        timingFunction="linear"
        delay="1s"
        direction="reverse"
        iterations="1"
        backfaceVisibility="hidden"
        fillMode="forwards"
        playState="running"
      >
        Test
      </AbstractAnimation>
    );
    expect(renderedComponent.props().fillMode).toEqual('forwards');
  });
  it('should set playState props', () => {
    AbstractAnimation = composeAnimation(makeEffect);
    renderedComponent = mount(
      <AbstractAnimation
        distance="1337"
        duration="2s"
        timingFunction="linear"
        delay="1s"
        direction="reverse"
        iterations="1"
        backfaceVisibility="hidden"
        fillMode="forwards"
        playState="running"
      >
        Test
      </AbstractAnimation>
    );
    expect(renderedComponent.props().playState).toEqual('running');
  });
});
