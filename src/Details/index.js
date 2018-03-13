import React from 'react';
import PropTypes from 'prop-types';

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<Details />` component. */
  children: PropTypes.node.isRequired,
};

class Details extends React.Component { // eslint-disable-line react/prefer-stateless-function

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const { className, ...attributes } = this.props;
    return (
      <details className={className} {...attributes} />
    );
  }
}

Details.propTypes = propTypes;

/** @component */
export default Details;
