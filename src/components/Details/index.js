import React from 'react';
import PropTypes from 'prop-types';

class Details extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    open: PropTypes.bool,
  }

  render() {
    return (
      <details
        open={this.props.open}
        className={this.props.className}
      >
        {this.props.children}
      </details>
    );
  }
}

export default Details;
