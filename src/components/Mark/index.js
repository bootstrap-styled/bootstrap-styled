/**
 * Mark component
 */


import React, { PropTypes } from 'react';
import styled from 'styled-components';
import theme from 'config';

const defaultProps = { theme };

class Mark extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    return (
      <mark className={this.props.className}>
        {this.props.children}
      </mark>
    );
  }

}

// eslint-disable-next-line no-class-assign
Mark = styled(Mark)`
  ${(props) => `
    /* Reboot Scss */
    padding: ${props.theme['$mark-padding']};
    background-color: ${props.theme['$mark-bg']};
  `}
`;

Mark.defaultProps = defaultProps;

export default Mark;

