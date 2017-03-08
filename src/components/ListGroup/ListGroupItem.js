/**
 * ListGroup component
 */


import React, { PropTypes } from 'react';
import cn from 'classnames';

const defaultProps = {
  tag: 'li',
};

const handleDisabledOnClick = (e) => {
  e.preventDefault();
};

class ListGroupItem extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    action: PropTypes.bool,
    className: PropTypes.any,
  }

  render() {
    const {
      className,
      tag: Tag,
      active,
      disabled,
      action,
      color,
      ...attributes
    } = this.props;

    const classes = cn(
      className,
      active ? 'active' : false,
      disabled ? 'disabled' : false,
      action ? 'list-group-item-action' : false,
      color ? `list-group-item-${color}` : false,
      'list-group-item'
    );

    // Prevent click event when disabled.
    if (disabled) {
      attributes.onClick = handleDisabledOnClick;
    }
    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

ListGroupItem.defaultProps = defaultProps;

export default ListGroupItem ;

