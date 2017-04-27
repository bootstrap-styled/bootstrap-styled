/**
 * ListGroupItemText component
 */


import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const defaultProps = {
  tag: 'p',
};

class ListGroupItemText extends React.Component { // eslint-disable-line react/prefer-stateless-function

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

    return (
      <Tag
        className={cn(className, 'list-group-item-text')}
        {...attributes}
      />
    );
  }
}

ListGroupItemText.defaultProps = defaultProps;

export default ListGroupItemText ;

