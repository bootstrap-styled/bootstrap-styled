/**
 * Definition Description
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

class Dd extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    theme: PropTypes.object,
  }

  render() {
    const { className, theme, children, ...rest } = this.props; // eslint-disable-line no-unused-vars
    return (
      <dd className={className} {...rest}>
        {children}
      </dd>
    );
  }
}

// eslint-disable-next-line no-class-assign
Dd = styled(Dd)` 
  /* _reboot.scss */
  margin-bottom: .5rem;
  margin-left: 0; /* Undo browser default */
`;

export default Dd;
