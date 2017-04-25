/**
 * Dfn component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class Dfn extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  }

  render() {
    const { className, ...attributes } = this.props; // eslint-disable-line no-unused-vars
    return (
      <dfn
        className={className}
        {...attributes}
      />
    );
  }
}

// eslint-disable-next-line no-class-assign
Dfn = styled(Dfn)`
  font-style: italic; /* Add the correct font style in Android 4.3- */
`;

export default Dfn;

