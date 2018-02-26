import React from 'react';
import PropTypes from 'prop-types';

class Details extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  }

  render() {
    const { className, ...attributes } = this.props;
    return (
      <details className={className} {...attributes} />
    );
  }
}

/** @component */
export default Details;
