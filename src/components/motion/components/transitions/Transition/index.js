import React, { PropTypes } from 'react';
import styled, { withTheme } from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { theme as themeBs } from 'theme';
import { omit } from 'utils/tools';
import { makeReactTransition } from 'styled/utilities/transition';

const defaultProps = {
  theme: themeBs,
  children: (<p>item</p>),
  willLeave: false,
  enterAnimation: 'fade',
  enterActiveAnimation: 'show',
  leaveAnimation: 'fade',
  transitionTimingFunction: 'ease',
  transitionDelay: '0ms',
  transitionDuration: 500,
};

class CssTransition extends React.Component { // eslint-disable-line react/prefer-stateless-function
  /* eslint-disable react/no-unused-prop-types */
  static propTypes = {
    theme: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.any.isRequired,
    willLeave: PropTypes.bool.isRequired,
    enterAnimation: PropTypes.string,
    enterActiveAnimation: PropTypes.string,
    leaveAnimation: PropTypes.string,
    leaveActiveAnimation: PropTypes.string,
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
      willLeave,
      ...rest
    } = omit(this.props, ['enterAnimation', 'enterActiveAnimation', 'leaveAnimation', 'leaveActiveAnimation', 'transitionTimingFunction', 'transitionDelay', 'transitionDuration']);

    return (
      <ReactCSSTransitionGroup
        transitionName={{
          enter: 'enter',
          enterActive: 'enter-active',
          leave: 'leave',
          leaveActive: 'leave-active',
        }}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        className={className}
        {...rest}
      >
        {willLeave && children}
      </ReactCSSTransitionGroup>
    );
  }
}

// eslint-disable-next-line no-class-assign
CssTransition = styled(CssTransition)`
  ${() => `
    ${makeReactTransition()}
  `}
`;

CssTransition.defaultProps = defaultProps;

export default withTheme(CssTransition);
