import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'config';
import { typography } from '../../styled/utilities/typography';

const defaultProps = { theme };

class P extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <p className={this.props.className}>
        {this.props.children}
      </p>
    );
  }

}

// eslint-disable-next-line no-class-assign
P = styled(P)`
  ${(props) => `
    /* Type Scss */

    &.lead {
      font-size: ${props.theme['$lead-font-size']};
      font-weight: ${props.theme['$lead-font-weight']};
    }
    
    &.h1{
      font-size: ${props.theme['$font-size-h1']};
      ${typography()}
    }
    
    &.h2{
      font-size: ${props.theme['$font-size-h2']};
      ${typography()}
    }
    
    &.h3{
      font-size: ${props.theme['$font-size-h3']};
      ${typography()}

    }
    
    &.h4{
      font-size: ${props.theme['$font-size-h4']};
      ${typography()}

    }
    
    &.h5{
      font-size: ${props.theme['$font-size-h5']};
      ${typography()}

    }
    
    &.h6{
      font-size: ${props.theme['$font-size-h6']};
      ${typography()}

    }
    
    /* Reboot Scss */
    margin-top: 0;   
    margin-bottom: 1rem;
  `}
`;

P.defaultProps = defaultProps;

export default P;
