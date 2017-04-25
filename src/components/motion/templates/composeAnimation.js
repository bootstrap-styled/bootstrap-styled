import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { fromJS } from 'immutable';
import cn from 'classnames';
import omit from 'lodash.omit';

import { TYPE_ROTATE } from '../components/animations/typeEnums';
import makeKeyframe from '../components/animations/makeKeyframe';

export default function composeAnimation(makeAnimation) {
  class HOC extends React.Component { // eslint-disable-line react/prefer-stateless-function

    /* eslint-disable react/no-unused-prop-types */
    static propTypes = {
      children: PropTypes.node.isRequired,
      className: PropTypes.string,
      theme: PropTypes.object.isRequired,

      duration: PropTypes.string,
      timingFunction: PropTypes.string,
      delay: PropTypes.string,
      direction: PropTypes.string,
      iterations: PropTypes.string,
      fillMode: PropTypes.string,
      playState: PropTypes.string,

      keyframes: PropTypes.object,

      distance: PropTypes.string,
      degree: PropTypes.string,
      perspective: PropTypes.string,
      backfaceVisibility: PropTypes.string,

      amplification: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
    };

    /* eslint-disable react/no-unused-prop-types */
    state = {
      defaults: {},
      styles: {},
    };

    componentWillMount = () => {
      this.updateDefaultsFromTheme(this.updateAnimationStyles);
    }

    componentWillReceiveProps(newProps) {
      if (fromJS(newProps.theme).hashCode() !== fromJS(this.props.theme).hashCode()) {
        this.updateDefaultsFromTheme(this.updateAnimationStyles);
      } else {
        this.updateAnimationStyles();
      }
    }

    updateDefaultsFromTheme = (cb) => {
      const { theme } = this.props;
      /* eslint-disable dot-notation */
      this.setState({
        defaults: {
          duration: theme['$motion-duration']['md'],
          timingFunction: theme['$motion-timing-function']['ease'],
          delay: theme['$motion-delay']['xs'],
          direction: theme['$motion-direction']['normal'],
          iterations: theme['$motion-iterations']['xs'],
          fillMode: theme['$motion-fill-mode']['none'],
          playState: theme['$motion-play-state']['running'],
          distance: theme['$motion-distance']['md'],
          rotation: theme['$motion-degree']['md'],
          perspective: theme['$motion-perspective']['xs'],
          backfaceVisibility: theme['$motion-backface-visibility']['hidden'],
          amplification: theme['$motion-amplification']['md'],
        },
      }, cb);
      /* eslint-enable dot-notation */
    }

    updateAnimationStyles = () => {
      const props = this.props;
      const defaults = this.state.defaults;

      const duration = props.duration || defaults.duration;
      const timingFunction = props.timingFunction || defaults.timingFunction;
      const delay = props.delay || defaults.delay;
      const direction = props.direction || defaults.direction;
      const iterations = props.iterations || defaults.iterations;
      const fillMode = props.fillMode || defaults.fillMode;
      const playState = props.playState || defaults.playState;

      const distance = props.distance || defaults.distance;

      const rotation = props.degree || defaults.rotation;
      const perspective = props.perspective || defaults.perspective;

      const backfaceVisibility = props.backfaceVisibility || defaults.backfaceVisibility;

      const amplification = props.amplification || defaults.amplification;

      const keyframeName = makeKeyframe(this.makeAnimation, { distance, rotation, perspective, amplification }, props.keyframes);

      const styles = {};
      styles.animation = `${keyframeName} ${duration} ${timingFunction} ${delay} ${iterations} ${direction} ${fillMode} ${playState}`;

      if (TYPE_ROTATE === this.makeAnimation.type) {
        styles.backfaceVisibility = backfaceVisibility;
      }

      this.setState({
        styles,
      });
    }

    makeAnimation = makeAnimation;

    render() {
      const {
        className,
        children,
        ...rest
      } = omit(this.props, [
        'theme',
        'duration',
        'timingFunction',
        'delay',
        'iterations',
        'direction',
        'fillMode',
        'playState',
        'keyframes',
        'distance',
        'degree',
        'perspective',
        'backfaceVisibility',
        'amplification',
        'rotation',
      ]);

      return (
        <span
          style={this.state.styles}
          className={cn('d-inline-block', className)}
          {...rest}
        >
          {children}
        </span>
      );
    }
  }

  return withTheme(HOC);
}
