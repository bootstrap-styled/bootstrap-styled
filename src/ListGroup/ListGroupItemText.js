/**
 * ListGroupItemText component
 */


import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';


class ListGroupItemText extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = {
    tag: 'p',
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
      'list-group-item-text'
    );

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

export default ListGroupItemText;

