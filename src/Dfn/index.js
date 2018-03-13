/**
 * Dfn component
 */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Node element wrapped in `<Dfn />` component */
  children: PropTypes.node.isRequired,
};

class DfnUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

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
/**
 * `<Dfn />` component represents the defining instance of a term in HTML.
 */
const Dfn = styled(DfnUnstyled)`
  font-style: italic; /* Add the correct font style in Android 4.3- */
`;

Dfn.propTypes = propTypes;

/** @component */
export default Dfn;

