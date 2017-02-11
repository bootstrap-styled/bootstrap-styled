/**
 * A Jumbotron (Slider)
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { borderRadius } from '../../styled/mixins/border-radius';
import { mediaBreakpointUp } from '../../styled/mixins/breakpoints';

class Jumbotron extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    const { className, children } = this.props;
    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}

// eslint-disable-next-line no-class-assign
Jumbotron = styled(Jumbotron)`
  ${(props) => `
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
        `padding: calc(${props.theme['$jumbotron-padding']} * 2);`,
      )}

    & .jumbotron-hr {
      border-top-color: darken(${props.theme['$jumbotron-bg']}, 10%);
    }
    
    & .jumbotron-fluid {
      padding-right: 0;
      padding-left: 0;
      ${borderRadius(
        props.theme['$enable-rounded'],
        0
      )}
    }
  `}
`;

export default Jumbotron;
