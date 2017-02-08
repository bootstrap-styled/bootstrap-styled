/**
 * H3 Component
 *
 *
 */
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'theme';
import { typography } from '../../styled/utilities/typography';

const defaultProps = { theme };

class H3 extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  render() {
    return (
      <h3 className={this.props.className}>
        {this.props.children}
      </h3>
    );
  }
}

// eslint-disable-next-line no-class-assign
H3 = styled(H3)`
  ${(props) => `
    font-size: ${props.theme['$font-size-h3']};
    ${typography(
      props.theme['$headings-margin-bottom'],
      props.theme['$headings-font-family'],
      props.theme['$headings-font-weight'],
      props.theme['$headings-line-height'],
      props.theme['$headings-color'],
      props.theme['$headings-underline-width'],
      props.theme['$headings-underline-height'],
      props.theme['$headings-underline-left-position'],
      props.theme['$headings-underline-gradient-color-1'],
      props.theme['$headings-underline-gradient-color-2'],
      props.theme['$display1-size'],
      props.theme['$display2-size'],
      props.theme['$display3-size'],
      props.theme['$display4-size'],
      props.theme['$display1-weight'],
      props.theme['$display2-weight'],
      props.theme['$display3-weight'],
      props.theme['$display4-weight'],
    )}

    /* Reboot Scss */
    margin-top: 0;
  `}
`;

H3.defaultProps = defaultProps;

export default H3;
