/**
 * A PaginationItem
 */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';

const defaultProps = {
  tag: 'li',
};

class PaginationItem extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
    cssModule: PropTypes.object,
    disabled: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  }

  render() {
    const {
      active,
      className,
      cssModule,
      disabled,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(cn(
      className,
      'page-item',
      {
        active,
        disabled,
      }
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

PaginationItem.defaultProps = defaultProps;

export default PaginationItem;
