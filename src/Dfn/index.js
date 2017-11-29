/**
 * Dfn component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class DfnUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    const { className, ...attributes } = this.props;
    return (
      <dfn
        className={className}
        {...attributes}
      />
    );
  }
}

const Dfn = styled(DfnUnstyled)`
  font-style: italic; /* Add the correct font style in Android 4.3- */
`;

export default Dfn;

