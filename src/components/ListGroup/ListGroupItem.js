/**
 * ListGroup component
 */


import React from 'react';
import PropTypes from 'prop-types';
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

    // Prevent click event when disabled.
    if (disabled) {
      attributes.onClick = handleDisabledOnClick;
    }
    return (
      <Tag
        className={cn(className, 'list-group-item', {
          active,
          disabled,
          'list-group-item-action': action,
          [`list-group-item-${color}`]: color,
        })}
        {...attributes}
      />
    );
  }
}

ListGroupItem.defaultProps = defaultProps;

export default ListGroupItem ;

