/**
 * ListGroup component
 */


import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import H5 from '../H5';


class ListGroupItemHeading extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    tag: H5,
  };

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.any,
  }

  render() {
    const {
      className,
      tag: Tag,
      ...attributes
    } = this.props;
    const classes = cn(
      className,
      'list-group-item-heading'
    );

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

export default ListGroupItemHeading;

