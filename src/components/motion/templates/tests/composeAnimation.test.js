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
    makeEffect = () => { // eslint-disable-line arrow-body-style
      return {
        from: {
          width: '0',
        },
        to: {
          width: '100%',
        },
      };
    };
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
    AbstractAnimation = composeAnimation(makeEffect);
    renderedComponent = mount(
      <BootstrapProvider>
        <AbstractAnimation>
            Test
        </AbstractAnimation>
      </BootstrapProvider>
    );
    // expect(renderedComponent.state().styles.animation).toEqual('laoCwl 1s ease 0s 1 normal none running');
  });

  it('should set state with the correct animationName using props', () => {
    AbstractAnimation = composeAnimation(makeEffect);
    renderedComponent = mount(
      <BootstrapProvider>
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
      </BootstrapProvider>
    );
    expect(renderedComponent.find('span[style]').length).toEqual(1);
  });
  it('should set backfaceVisibility props', () => {
    AbstractAnimation = composeAnimation(makeEffect);
    renderedComponent = mount(
      <BootstrapProvider>
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
      </BootstrapProvider>
    );
    expect(renderedComponent.props().children.props.backfaceVisibility).toEqual('hidden');
  });
  it('should set direction props', () => {
    AbstractAnimation = composeAnimation(makeEffect);
    renderedComponent = mount(
      <BootstrapProvider>
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
      </BootstrapProvider>
    );
    expect(renderedComponent.props().children.props.direction).toEqual('reverse');
  });
  it('should set iterations props', () => {
    AbstractAnimation = composeAnimation(makeEffect);
    renderedComponent = mount(
      <BootstrapProvider>
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
      </BootstrapProvider>
    );
    expect(renderedComponent.props().children.props.iterations).toEqual('1');
  });
  it('should set delay props', () => {
    AbstractAnimation = composeAnimation(makeEffect);
    renderedComponent = mount(
      <BootstrapProvider>
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
      </BootstrapProvider>
    );
    expect(renderedComponent.props().children.props.delay).toEqual('1s');
  });
  it('should set fillMode props', () => {
    AbstractAnimation = composeAnimation(makeEffect);
    renderedComponent = mount(
      <BootstrapProvider>
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
      </BootstrapProvider>
    );
    expect(renderedComponent.props().children.props.fillMode).toEqual('forwards');
  });
  it('should set playState props', () => {
    AbstractAnimation = composeAnimation(makeEffect);
    renderedComponent = mount(
      <BootstrapProvider>
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
      </BootstrapProvider>
    );
    expect(renderedComponent.props().children.props.playState).toEqual('running');
  });
});
