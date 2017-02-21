/**
 * A Jumbotron (Slider)
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import Color from 'color';
import bsTheme from 'theme';
import { borderRadius } from '../../styled/mixins/border-radius';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';

const defaultProps = {
  theme: bsTheme,
};

class Jumbotron extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.object,
  }

  render() {
    const { className, children, theme, ...rest } = this.props; // eslint-disable-line no-unused-vars
    return (
      <div
        className={cn(className, 'jumbotron')}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
Jumbotron = styled(Jumbotron)`
  ${(props) => console.log(`
    &.jumbotron {
      padding: ${props.theme['$jumbotron-padding']} calc(${props.theme['$jumbotron-padding']} / 2);
      margin-bottom: ${props.theme['$jumbotron-padding']};
      background-color: ${props.theme['$jumbotron-bg']};
      ${borderRadius(
        props.theme['$enable-rounded'],
        props.theme['$border-radius-lg']
      )}
    
      ${mediaBreakpointUp('sm',
        props.theme['$grid-breakpoints'],
        `padding: calc(${props.theme['$jumbotron-padding']} * 2) ${props.theme['$jumbotron-padding']};`,
      )}

    & .jumbotron-hr {
      border-top-color: ${Color(props.theme['$jumbotron-bg']).darken(0.1).toString()};
    }
    
    &.jumbotron-fluid {
      padding-right: 0;
      padding-left: 0;
      ${borderRadius(
        props.theme['$enable-rounded'],
        0
      )}
    }
  `)}
`;

Jumbotron.defaultProps = defaultProps;

export default Jumbotron;
