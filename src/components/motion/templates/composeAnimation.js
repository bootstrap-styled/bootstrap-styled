import React, { PropTypes } from 'react';
import cn from 'classnames';
import { omit } from '../../../utils/tools';

export default function composeAnimation(makeAnimation) {
  class HOC extends React.Component { // eslint-disable-line react/prefer-stateless-function

    static defaultProps = {
      distance: '100%',
      duration: '1s',
      timingFunction: 'ease',
      delay: '0s',
      direction: 'normal',
      iterations: '1',
      backfaceVisible: 'visible',
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
      backfaceVisible: PropTypes.string,
      fillMode: PropTypes.string,
      playState: PropTypes.string,
    }
    /* eslint-disable react/no-unused-prop-types */
    state = {
      styles: {},
    };

    componentWillMount = () => {
      const {
        distance,
        duration,
        timingFunction,
        delay,
        direction,
        iterations,
        backfaceVisible,
        fillMode,
        playState,
      } = this.props;

      const animationName = makeAnimation(distance);

      this.setState({
        styles: {
          animation: `${animationName} ${duration} ${timingFunction} ${delay} ${iterations} ${direction} ${fillMode} ${playState}`,
          backfaceVisibility: `${backfaceVisible}`,
        },
      });
    }

    // Using <span> instead of composedComponent because each component has a base component <span> only.
    render() {
      const {
        className,
        children,
        ...rest
      } = omit(this.props, ['distance', 'duration', 'timingFunction', 'delay', 'iterations', 'direction', 'fillMode', 'playState', 'backfaceVisible']);

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
  return HOC;
}
