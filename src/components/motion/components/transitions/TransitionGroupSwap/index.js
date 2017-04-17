import React, { PropTypes } from 'react';
import styled, { withTheme } from 'styled-components';
import { theme as themeBs } from 'theme';
import TransitionGroup from 'react-addons-transition-group';
import { getReactTransition } from 'styled/utilities/transition';
import { omit } from 'utils/tools';

const defaultProps = {
  theme: themeBs,
  children: (<p>item</p>),
  willChange: false,
  propertyValues: 'translate3d',
  fromX: '0',
  toX: '0',
  fromY: '0',
  toY: '0',
  fromZ: '0',
  toZ: '0',
  transitionDuration: 500,
  transitionTimingFunction: 'ease',
  transitionDelay: '0ms',
};

class TransitionGroupSwap extends React.Component { // eslint-disable-line react/prefer-stateless-function
  /* eslint-disable react/no-unused-prop-types */
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    willChange: PropTypes.bool,
    propertyValues: PropTypes.string,
    fromX: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    toX: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
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
    transitionDuration: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    transitionTimingFunction: PropTypes.string,
    transitionDelay: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }
  /* eslint-disable react/no-unused-prop-types */
  render() {
    const {
      className,
      theme, // eslint-disable-line no-unused-vars
      children,
      ...rest
    } = omit(this.props, ['willChange', 'propertyValues', 'fromX', 'toX', 'fromY', 'toY', 'fromZ', 'toZ', 'duration', 'transitionDuration', 'transitionTimingFunction', 'transitionDelay']);

    return (
      <TransitionGroup className={className} {...rest} >
        {children}
      </TransitionGroup>
    );
  }
}

// eslint-disable-next-line no-class-assign
TransitionGroupSwap = styled(TransitionGroupSwap)`
  ${(props) => `
     &.moving-element,
      & .moving-element {
        transform: ${props.propertyValues}(${props.fromX}, ${props.fromY}, ${props.fromZ});
        ${getReactTransition(props.theme['$enable-transitions'], `transform ${props.transitionDuration}ms ${props.transitionTimingFunction}`)}

        &.transforming {
          transform: ${props.propertyValues}(${props.toX}, ${props.toY}, ${props.toZ});
          ${getReactTransition(props.theme['$enable-transitions'], `transform ${props.transitionDuration}ms ${props.transitionTimingFunction}`)}
        }
     }
  `}
`;

TransitionGroupSwap.defaultProps = defaultProps;

export default withTheme(TransitionGroupSwap);
