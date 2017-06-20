import React from 'react';
import PropTypes from 'prop-types';

class Details extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
  }

  render() {
    const { className, ...attributes } = this.props;
    return (
      <details className={className} {...attributes} />
    );
  }
}

export default Details;
