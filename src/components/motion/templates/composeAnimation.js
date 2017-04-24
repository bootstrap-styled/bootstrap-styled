import React, { PropTypes } from 'react';
import { withTheme } from 'styled-components';
import cn from 'classnames';
import makeKeyframe from '../components/animations/makeKeyframe';
import { omit } from '../../../utils/tools';

export default function composeAnimation(makeAnimation) {
  class HOC extends React.Component { // eslint-disable-line react/prefer-stateless-function

    static defaultProps = {
      distance: '100%',
      duration: '500ms',
      timingFunction: 'ease',
      delay: '0s',
      direction: 'normal',
      iterations: '1',
      backfaceVisibility: 'visible',
      fillMode: 'none',
      playState: 'running',
    };
    /* eslint-disable react/no-unused-prop-types */
    static propTypes = {
      children: PropTypes.node.isRequired,
      distance: PropTypes.string,
      className: PropTypes.string,
      duration: PropTypes.string,
      timingFunction: PropTypes.string,
      delay: PropTypes.string,
      direction: PropTypes.string,
      iterations: PropTypes.string,
      backfaceVisibility: PropTypes.string,
      fillMode: PropTypes.string,
      playState: PropTypes.string,
      keyframes: PropTypes.object,
    }
    /* eslint-disable react/no-unused-prop-types */
    state = {
      styles: {},
    };

    componentWillMount = () => {
      this.updateAnimationStyles();
    }

    updateAnimationStyles = () => {
      const {
        distance,
        duration,
        timingFunction,
        delay,
        direction,
        iterations,
        backfaceVisibility,
        fillMode,
        playState,
        keyframes,
      } = this.props;

      const keyframeName = makeKeyframe(this.makeAnimation, distance, keyframes);
      this.setState({
        styles: {
          animation: `${keyframeName} ${duration} ${timingFunction} ${delay} ${iterations} ${direction} ${fillMode} ${playState}`,
          backfaceVisibility: `${backfaceVisibility}`,
        },
      });
    }

    makeAnimation = makeAnimation;

    // Using <span> instead of composedComponent because each component has a base component <span> only.
    render() {
      const {
        className,
        children,
        ...rest
      } = omit(this.props, ['theme', 'distance', 'duration', 'timingFunction', 'delay', 'iterations', 'direction', 'fillMode', 'playState', 'backfaceVisibility', 'keyframes']);

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
