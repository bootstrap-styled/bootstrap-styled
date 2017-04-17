import React, { PropTypes } from 'react';
import styled, { withTheme } from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { theme as themeBs } from 'theme';
import { omit } from 'utils/tools';
import { swapFade } from 'styled/utilities/transition';

const defaultProps = {
  theme: themeBs,
  children: (<p>item</p>),
  willLeave: false,
  propertyValues: 'translate3d',
  fromX: '0',
  fromY: '0',
  toY: '0',
  fromZ: '0',
  toZ: '0',
  transitionTimingFunction: 'ease',
  transitionDelay: '0ms',
  transitionDuration: 500,
};

class CssTransitionSwap extends React.Component { // eslint-disable-line react/prefer-stateless-function
  /* eslint-disable react/no-unused-prop-types */
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
    willLeave: PropTypes.bool.isRequired,
    propertyValues: PropTypes.string,
    fromX: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    toX: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    fromY: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    toY: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    fromZ: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    toZ: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    transitionTimingFunction: PropTypes.string,
    transitionDelay: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    transitionDuration: PropTypes.number,
  }
  /* eslint-disable react/no-unused-prop-types */

  render() {
    const {
      theme, // eslint-disable-line no-unused-vars
      children,
      className,
      transitionDuration,
      willLeave,
      ...rest
    } = omit(this.props, ['propertyValues', 'fromX', 'toX', 'fromY', 'toY', 'fromZ', 'toZ', 'duration', 'transitionTimingFunction', 'transitionDelay']);

    return (
      <ReactCSSTransitionGroup
        transitionEnterTimeout={transitionDuration}
        transitionLeaveTimeout={transitionDuration}
        transitionName={{
          enter: 'fade',
          enterActive: 'show',
          leave: 'fade',
        }}
        className={className}
        {...rest}
      >
        {willLeave && children}
      </ReactCSSTransitionGroup>
    );
  }
}

// eslint-disable-next-line no-class-assign
CssTransitionSwap = styled(CssTransitionSwap)`
  ${(props) => `
    ${swapFade(
      props.theme['$enable-transitions'],
      `opacity ${props.transitionDuration}ms ${props.transitionTimingFunction}, transform ${props.transitionDuration}ms ${props.transitionTimingFunction}`,
      `${props.propertyValues}(${props.toX}px, ${props.toY}, ${props.toZ})`,
      `${props.propertyValues}(${props.fromX}px, ${props.fromY}, ${props.fromZ})`,
    )}
  `}
`;

CssTransitionSwap.defaultProps = defaultProps;

export default withTheme(CssTransitionSwap);
