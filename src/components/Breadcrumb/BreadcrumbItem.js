import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from 'utils/tools';

const defaultProps = {
  tag: 'li',
};

class BreadcrumbItem extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    active: PropTypes.bool,
    className: PropTypes.string,
    cssModule: PropTypes.object,
  };

  render() {
    const {
      className,
      cssModule,
      active,
      tag: Tag,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(classNames(
      className,
      active ? 'active' : false,
      'breadcrumb-item'
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;
