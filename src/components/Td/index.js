/**
 * A Table cell
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import bsTheme from 'theme';

import { getBackgroundUtilities } from '../../styled/utilities/background';

const defaultProps = { theme: bsTheme };

class Td extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    theme: PropTypes.object,
  }

  render() {
    const { className, theme, children, ...rest } = this.props; // eslint-disable-line no-unused-vars
    return (
      <td className={className} {...rest}>
        {children}
      </td>
    );
  }

}

// eslint-disable-next-line no-class-assign
Td = styled(Td)`
  ${getBackgroundUtilities()}
`;

Td.defaultProps = defaultProps;

export default Td;

