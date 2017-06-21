/**
 * ListGroup component
 */


import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const defaultProps = {
  tag: 'p',
};

class ListGroupItemHeading extends React.Component { // eslint-disable-line react/prefer-stateless-function

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
      'list-group-item-text'
    );

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

ListGroupItemHeading.defaultProps = defaultProps;

export default ListGroupItemHeading;

