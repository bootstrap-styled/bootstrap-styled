/**
 * ListGroupItemHeading component
 */


import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import H5 from '../Headings/H5';

const defaultProps = {
  tag: H5,
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

    return (
      <Tag
        className={cn(className, 'list-group-item-heading')}
        {...attributes}
      />
    );
  }
}

ListGroupItemHeading.defaultProps = defaultProps;

export default ListGroupItemHeading ;

