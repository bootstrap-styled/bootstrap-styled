import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from '../../config';
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
      ${typography(
        props.theme['$headings-margin-bottom'],
        props.theme['$headings-font-family'],
        props.theme['$headings-font-weight'],
        props.theme['$headings-line-height'],
        props.theme['$headings-color'],
        props.theme['$display1-size'],
        props.theme['$display2-size'],
        props.theme['$display3-size'],
        props.theme['$display4-size'],
        props.theme['$display1-weight'],
        props.theme['$display2-weight'],
        props.theme['$display3-weight'],
        props.theme['$display4-weight'],
      )}
    }
    
    &.h2{
      font-size: ${props.theme['$font-size-h2']};
      ${typography(
        props.theme['$headings-margin-bottom'],
        props.theme['$headings-font-family'],
        props.theme['$headings-font-weight'],
        props.theme['$headings-line-height'],
        props.theme['$headings-color'],
        props.theme['$display1-size'],
        props.theme['$display2-size'],
        props.theme['$display3-size'],
        props.theme['$display4-size'],
        props.theme['$display1-weight'],
        props.theme['$display2-weight'],
        props.theme['$display3-weight'],
        props.theme['$display4-weight'],
      )}
    }
    
    &.h3{
      font-size: ${props.theme['$font-size-h3']};
      ${typography(
        props.theme['$headings-margin-bottom'],
        props.theme['$headings-font-family'],
        props.theme['$headings-font-weight'],
        props.theme['$headings-line-height'],
        props.theme['$headings-color'],
        props.theme['$display1-size'],
        props.theme['$display2-size'],
        props.theme['$display3-size'],
        props.theme['$display4-size'],
        props.theme['$display1-weight'],
        props.theme['$display2-weight'],
        props.theme['$display3-weight'],
        props.theme['$display4-weight'],
      )}
    }
    
    &.h4{
      font-size: ${props.theme['$font-size-h4']};
      ${typography(
        props.theme['$headings-margin-bottom'],
        props.theme['$headings-font-family'],
        props.theme['$headings-font-weight'],
        props.theme['$headings-line-height'],
        props.theme['$headings-color'],
        props.theme['$display1-size'],
        props.theme['$display2-size'],
        props.theme['$display3-size'],
        props.theme['$display4-size'],
        props.theme['$display1-weight'],
        props.theme['$display2-weight'],
        props.theme['$display3-weight'],
        props.theme['$display4-weight'],
      )}
    }
    
    &.h5{
      font-size: ${props.theme['$font-size-h5']};
      ${typography(
        props.theme['$headings-margin-bottom'],
        props.theme['$headings-font-family'],
        props.theme['$headings-font-weight'],
        props.theme['$headings-line-height'],
        props.theme['$headings-color'],
        props.theme['$display1-size'],
        props.theme['$display2-size'],
        props.theme['$display3-size'],
        props.theme['$display4-size'],
        props.theme['$display1-weight'],
        props.theme['$display2-weight'],
        props.theme['$display3-weight'],
        props.theme['$display4-weight'],
      )}
    }
    
    &.h6{
      font-size: ${props.theme['$font-size-h6']};
      ${typography(
        props.theme['$headings-margin-bottom'],
        props.theme['$headings-font-family'],
        props.theme['$headings-font-weight'],
        props.theme['$headings-line-height'],
        props.theme['$headings-color'],
        props.theme['$display1-size'],
        props.theme['$display2-size'],
        props.theme['$display3-size'],
        props.theme['$display4-size'],
        props.theme['$display1-weight'],
        props.theme['$display2-weight'],
        props.theme['$display3-weight'],
        props.theme['$display4-weight'],
      )}
    }
    
    /* Reboot Scss */
    margin-top: 0;   
    margin-bottom: 1rem;
  `}
`;

P.defaultProps = defaultProps;

export default P;
