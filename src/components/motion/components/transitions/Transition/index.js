import React, { PropTypes } from 'react';
import styled, { withTheme } from 'styled-components';
import TransitionGroup from 'react-addons-transition-group';
import { theme as themeBs } from 'theme';
import { omit } from 'utils/tools';
import { makeReactTransition } from 'styled/utilities/transition';

const defaultProps = {
  theme: themeBs,
  children: (<p>item</p>),
  willLeave: false,
  transitionTimingFunction: 'ease',
  transitionDelay: '0ms',
  transitionDuration: 500,
};

class Transition extends React.Component { // eslint-disable-line react/prefer-stateless-function
  /* eslint-disable react/no-unused-prop-types */
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
    willLeave: PropTypes.bool.isRequired,
    transitionTimingFunction: PropTypes.string,
    transitionDelay: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    transitionDuration: PropTypes.number,
  }
  /* eslint-disable react/no-unused-prop-types */

  // componentWillAppear() {
  //
  // }
  //
  // componentWillLeave() {
  //
  // }

  render() {
    const {
      theme, // eslint-disable-line no-unused-vars
      children,
      className,
      willLeave, // eslint-disable-line no-unused-vars
      ...rest
    } = omit(this.props, ['willLeave', 'enterAnimation', 'enterActiveAnimation', 'leaveAnimation', 'leaveActiveAnimation', 'transitionTimingFunction', 'transitionDelay', 'transitionDuration']);

    return (
      <TransitionGroup className={className} {...rest}>
        {children}
      </TransitionGroup>
    );
  }
}

// eslint-disable-next-line no-class-assign
Transition = styled(Transition)`
  ${() => `
    ${makeReactTransition()}
  `}
`;

Transition.defaultProps = defaultProps;

export default withTheme(Transition);
